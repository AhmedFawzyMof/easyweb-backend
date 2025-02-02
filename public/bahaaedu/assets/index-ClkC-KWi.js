const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Dashboard-Be3mVVDI.js",
      "assets/Card-CMWg7rRX.js",
      "assets/Homeworks-GjxoMqtB.js",
      "assets/Tests-m-CakkpO.js",
      "assets/Videos-DsGqeFPG.js",
      "assets/TestsQuestions-CWDgkThy.js",
      "assets/shuffleArray-qmA_B5Fe.js",
      "assets/HomeworksQuestions-D2BCFKov.js",
      "assets/VideosQuestions-esyARQ__.js",
      "assets/QuestionsBank-B-GxqSkS.js",
      "assets/PublicTest-BuabF-jQ.js",
    ])
) => i.map((i) => d[i]);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
/**
 * @vue/shared v3.5.9
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function bi(e) {
  const t = Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const we = {},
  Vn = [],
  kt = () => {},
  jd = () => !1,
  Io = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  wi = (e) => e.startsWith("onUpdate:"),
  Ne = Object.assign,
  _i = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Hd = Object.prototype.hasOwnProperty,
  ge = (e, t) => Hd.call(e, t),
  K = Array.isArray,
  Un = (e) => Mo(e) === "[object Map]",
  bu = (e) => Mo(e) === "[object Set]",
  Y = (e) => typeof e == "function",
  Re = (e) => typeof e == "string",
  an = (e) => typeof e == "symbol",
  Te = (e) => e !== null && typeof e == "object",
  wu = (e) => (Te(e) || Y(e)) && Y(e.then) && Y(e.catch),
  _u = Object.prototype.toString,
  Mo = (e) => _u.call(e),
  zd = (e) => Mo(e).slice(8, -1),
  xu = (e) => Mo(e) === "[object Object]",
  xi = (e) =>
    Re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  yr = bi(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Do = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Vd = /-(\w)/g,
  vt = Do((e) => e.replace(Vd, (t, n) => (n ? n.toUpperCase() : ""))),
  Ud = /\B([A-Z])/g,
  ln = Do((e) => e.replace(Ud, "-$1").toLowerCase()),
  Bo = Do((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  lo = Do((e) => (e ? `on${Bo(e)}` : "")),
  rn = (e, t) => !Object.is(e, t),
  uo = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  Su = (e, t, n, r = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  Fs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  qd = (e) => {
    const t = Re(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ha;
const Cu = () =>
  ha ||
  (ha =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Bt(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = Re(r) ? Jd(r) : Bt(r);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else if (Re(e) || Te(e)) return e;
}
const Gd = /;(?![^(]*\))/g,
  Wd = /:([^]+)/,
  Kd = /\/\*[^]*?\*\//g;
function Jd(e) {
  const t = {};
  return (
    e
      .replace(Kd, "")
      .split(Gd)
      .forEach((n) => {
        if (n) {
          const r = n.split(Wd);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function pe(e) {
  let t = "";
  if (Re(e)) t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const r = pe(e[n]);
      r && (t += r + " ");
    }
  else if (Te(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Eu(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Re(t) && (e.class = pe(t)), n && (e.style = Bt(n)), e;
}
const Qd =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Xd = bi(Qd);
function Tu(e) {
  return !!e || e === "";
}
const ku = (e) => !!(e && e.__v_isRef === !0),
  lt = (e) =>
    Re(e)
      ? e
      : e == null
      ? ""
      : K(e) || (Te(e) && (e.toString === _u || !Y(e.toString)))
      ? ku(e)
        ? lt(e.value)
        : JSON.stringify(e, Au, 2)
      : String(e),
  Au = (e, t) =>
    ku(t)
      ? Au(e, t.value)
      : Un(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o], s) => ((n[gs(r, s) + " =>"] = o), n),
            {}
          ),
        }
      : bu(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => gs(n)) }
      : an(t)
      ? gs(t)
      : Te(t) && !K(t) && !xu(t)
      ? String(t)
      : t,
  gs = (e, t = "") => {
    var n;
    return an(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.5.9
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let tt;
class Ou {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = tt),
      !t && tt && (this.index = (tt.scopes || (tt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = tt;
      try {
        return (tt = this), t();
      } finally {
        tt = n;
      }
    }
  }
  on() {
    tt = this;
  }
  off() {
    tt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Yd(e) {
  return new Ou(e);
}
function Zd() {
  return tt;
}
let xe;
const ms = new WeakSet();
class Ru {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      tt && tt.active && tt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), ms.has(this) && (ms.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || $u(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), pa(this), Nu(this);
    const t = xe,
      n = mt;
    (xe = this), (mt = !0);
    try {
      return this.fn();
    } finally {
      Lu(this), (xe = t), (mt = n), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Ei(t);
      (this.deps = this.depsTail = void 0),
        pa(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? ms.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    js(this) && this.run();
  }
  get dirty() {
    return js(this);
  }
}
let Pu = 0,
  zn;
function $u(e) {
  (e.flags |= 8), (e.next = zn), (zn = e);
}
function Si() {
  Pu++;
}
function Ci() {
  if (--Pu > 0) return;
  let e;
  for (; zn; ) {
    let t = zn,
      n;
    for (; t; ) (t.flags &= -9), (t = t.next);
    for (t = zn, zn = void 0; t; ) {
      if (t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      (n = t.next), (t.next = void 0), (t = n);
    }
  }
  if (e) throw e;
}
function Nu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Lu(e) {
  let t,
    n = e.depsTail,
    r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Ei(r), eh(r)) : (t = r),
      (r.dep.activeLink = r.prevActiveLink),
      (r.prevActiveLink = void 0),
      (r = o);
  }
  (e.deps = t), (e.depsTail = n);
}
function js(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Iu(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Iu(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === Tr)
  )
    return;
  e.globalVersion = Tr;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !js(e))) {
    e.flags &= -3;
    return;
  }
  const n = xe,
    r = mt;
  (xe = e), (mt = !0);
  try {
    Nu(e);
    const o = e.fn(e._value);
    (t.version === 0 || rn(o, e._value)) && ((e._value = o), t.version++);
  } catch (o) {
    throw (t.version++, o);
  } finally {
    (xe = n), (mt = r), Lu(e), (e.flags &= -3);
  }
}
function Ei(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (
    (r && ((r.nextSub = o), (e.prevSub = void 0)),
    o && ((o.prevSub = r), (e.nextSub = void 0)),
    n.subs === e && (n.subs = r),
    !n.subs && n.computed)
  ) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep) Ei(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function eh(e) {
  const { prevDep: t, nextDep: n } = e;
  t && ((t.nextDep = n), (e.prevDep = void 0)),
    n && ((n.prevDep = t), (e.nextDep = void 0));
}
let mt = !0;
const Mu = [];
function un() {
  Mu.push(mt), (mt = !1);
}
function cn() {
  const e = Mu.pop();
  mt = e === void 0 ? !0 : e;
}
function pa(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const n = xe;
    xe = void 0;
    try {
      t();
    } finally {
      xe = n;
    }
  }
}
let Tr = 0;
class th {
  constructor(t, n) {
    (this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Ti {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.target = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0);
  }
  track(t) {
    if (!xe || !mt || xe === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xe)
      (n = this.activeLink = new th(xe, this)),
        xe.deps
          ? ((n.prevDep = xe.depsTail),
            (xe.depsTail.nextDep = n),
            (xe.depsTail = n))
          : (xe.deps = xe.depsTail = n),
        Du(n);
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const r = n.nextDep;
      (r.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = r),
        (n.prevDep = xe.depsTail),
        (n.nextDep = void 0),
        (xe.depsTail.nextDep = n),
        (xe.depsTail = n),
        xe.deps === n && (xe.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Tr++, this.notify(t);
  }
  notify(t) {
    Si();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ci();
    }
  }
}
function Du(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep) Du(r);
    }
    const n = e.dep.subs;
    n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e);
  }
}
const vo = new WeakMap(),
  _n = Symbol(""),
  Hs = Symbol(""),
  kr = Symbol("");
function He(e, t, n) {
  if (mt && xe) {
    let r = vo.get(e);
    r || vo.set(e, (r = new Map()));
    let o = r.get(n);
    o || (r.set(n, (o = new Ti())), (o.target = e), (o.map = r), (o.key = n)),
      o.track();
  }
}
function Ft(e, t, n, r, o, s) {
  const i = vo.get(e);
  if (!i) {
    Tr++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if ((Si(), t === "clear")) i.forEach(a);
  else {
    const l = K(e),
      u = l && xi(n);
    if (l && n === "length") {
      const c = Number(r);
      i.forEach((f, d) => {
        (d === "length" || d === kr || (!an(d) && d >= c)) && a(f);
      });
    } else
      switch ((n !== void 0 && a(i.get(n)), u && a(i.get(kr)), t)) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(_n)), Un(e) && a(i.get(Hs)));
          break;
        case "delete":
          l || (a(i.get(_n)), Un(e) && a(i.get(Hs)));
          break;
        case "set":
          Un(e) && a(i.get(_n));
          break;
      }
  }
  Ci();
}
function nh(e, t) {
  const n = vo.get(e);
  return n && n.get(t);
}
function Ln(e) {
  const t = de(e);
  return t === e ? t : (He(t, "iterate", kr), ct(e) ? t : t.map(je));
}
function Fo(e) {
  return He((e = de(e)), "iterate", kr), e;
}
const rh = {
  __proto__: null,
  [Symbol.iterator]() {
    return ys(this, Symbol.iterator, je);
  },
  concat(...e) {
    return Ln(this).concat(...e.map((t) => (K(t) ? Ln(t) : t)));
  },
  entries() {
    return ys(this, "entries", (e) => ((e[1] = je(e[1])), e));
  },
  every(e, t) {
    return $t(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return $t(this, "filter", e, t, (n) => n.map(je), arguments);
  },
  find(e, t) {
    return $t(this, "find", e, t, je, arguments);
  },
  findIndex(e, t) {
    return $t(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return $t(this, "findLast", e, t, je, arguments);
  },
  findLastIndex(e, t) {
    return $t(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return $t(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return vs(this, "includes", e);
  },
  indexOf(...e) {
    return vs(this, "indexOf", e);
  },
  join(e) {
    return Ln(this).join(e);
  },
  lastIndexOf(...e) {
    return vs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $t(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ur(this, "pop");
  },
  push(...e) {
    return ur(this, "push", e);
  },
  reduce(e, ...t) {
    return ga(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ga(this, "reduceRight", e, t);
  },
  shift() {
    return ur(this, "shift");
  },
  some(e, t) {
    return $t(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ur(this, "splice", e);
  },
  toReversed() {
    return Ln(this).toReversed();
  },
  toSorted(e) {
    return Ln(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ln(this).toSpliced(...e);
  },
  unshift(...e) {
    return ur(this, "unshift", e);
  },
  values() {
    return ys(this, "values", je);
  },
};
function ys(e, t, n) {
  const r = Fo(e),
    o = r[t]();
  return (
    r !== e &&
      !ct(e) &&
      ((o._next = o.next),
      (o.next = () => {
        const s = o._next();
        return s.value && (s.value = n(s.value)), s;
      })),
    o
  );
}
const oh = Array.prototype;
function $t(e, t, n, r, o, s) {
  const i = Fo(e),
    a = i !== e && !ct(e),
    l = i[t];
  if (l !== oh[t]) {
    const f = l.apply(e, s);
    return a ? je(f) : f;
  }
  let u = n;
  i !== e &&
    (a
      ? (u = function (f, d) {
          return n.call(this, je(f), d, e);
        })
      : n.length > 2 &&
        (u = function (f, d) {
          return n.call(this, f, d, e);
        }));
  const c = l.call(i, u, r);
  return a && o ? o(c) : c;
}
function ga(e, t, n, r) {
  const o = Fo(e);
  let s = n;
  return (
    o !== e &&
      (ct(e)
        ? n.length > 3 &&
          (s = function (i, a, l) {
            return n.call(this, i, a, l, e);
          })
        : (s = function (i, a, l) {
            return n.call(this, i, je(a), l, e);
          })),
    o[t](s, ...r)
  );
}
function vs(e, t, n) {
  const r = de(e);
  He(r, "iterate", kr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Ri(n[0])
    ? ((n[0] = de(n[0])), r[t](...n))
    : o;
}
function ur(e, t, n = []) {
  un(), Si();
  const r = de(e)[t].apply(e, n);
  return Ci(), cn(), r;
}
const sh = bi("__proto__,__v_isRef,__isVue"),
  Bu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(an)
  );
function ih(e) {
  an(e) || (e = String(e));
  const t = de(this);
  return He(t, "has", e), t.hasOwnProperty(e);
}
class Fu {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    const o = this._isReadonly,
      s = this._isShallow;
    if (n === "__v_isReactive") return !o;
    if (n === "__v_isReadonly") return o;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw")
      return r === (o ? (s ? bh : Vu) : s ? zu : Hu).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = K(t);
    if (!o) {
      let l;
      if (i && (l = rh[n])) return l;
      if (n === "hasOwnProperty") return ih;
    }
    const a = Reflect.get(t, n, De(t) ? t : r);
    return (an(n) ? Bu.has(n) : sh(n)) || (o || He(t, "get", n), s)
      ? a
      : De(a)
      ? i && xi(n)
        ? a
        : a.value
      : Te(a)
      ? o
        ? qu(a)
        : er(a)
      : a;
  }
}
class ju extends Fu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const l = En(s);
      if (
        (!ct(r) && !En(r) && ((s = de(s)), (r = de(r))),
        !K(t) && De(s) && !De(r))
      )
        return l ? !1 : ((s.value = r), !0);
    }
    const i = K(t) && xi(n) ? Number(n) < t.length : ge(t, n),
      a = Reflect.set(t, n, r, De(t) ? t : o);
    return (
      t === de(o) && (i ? rn(r, s) && Ft(t, "set", n, r) : Ft(t, "add", n, r)),
      a
    );
  }
  deleteProperty(t, n) {
    const r = ge(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Ft(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!an(n) || !Bu.has(n)) && He(t, "has", n), r;
  }
  ownKeys(t) {
    return He(t, "iterate", K(t) ? "length" : _n), Reflect.ownKeys(t);
  }
}
class ah extends Fu {
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
const lh = new ju(),
  uh = new ah(),
  ch = new ju(!0);
const ki = (e) => e,
  jo = (e) => Reflect.getPrototypeOf(e);
function Qr(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = de(e),
    s = de(t);
  n || (rn(t, s) && He(o, "get", t), He(o, "get", s));
  const { has: i } = jo(o),
    a = r ? ki : n ? Pi : je;
  if (i.call(o, t)) return a(e.get(t));
  if (i.call(o, s)) return a(e.get(s));
  e !== o && e.get(t);
}
function Xr(e, t = !1) {
  const n = this.__v_raw,
    r = de(n),
    o = de(e);
  return (
    t || (rn(e, o) && He(r, "has", e), He(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function Yr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && He(de(e), "iterate", _n), Reflect.get(e, "size", e)
  );
}
function ma(e, t = !1) {
  !t && !ct(e) && !En(e) && (e = de(e));
  const n = de(this);
  return jo(n).has.call(n, e) || (n.add(e), Ft(n, "add", e, e)), this;
}
function ya(e, t, n = !1) {
  !n && !ct(t) && !En(t) && (t = de(t));
  const r = de(this),
    { has: o, get: s } = jo(r);
  let i = o.call(r, e);
  i || ((e = de(e)), (i = o.call(r, e)));
  const a = s.call(r, e);
  return (
    r.set(e, t), i ? rn(t, a) && Ft(r, "set", e, t) : Ft(r, "add", e, t), this
  );
}
function va(e) {
  const t = de(this),
    { has: n, get: r } = jo(t);
  let o = n.call(t, e);
  o || ((e = de(e)), (o = n.call(t, e))), r && r.call(t, e);
  const s = t.delete(e);
  return o && Ft(t, "delete", e, void 0), s;
}
function ba() {
  const e = de(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ft(e, "clear", void 0, void 0), n;
}
function Zr(e, t) {
  return function (r, o) {
    const s = this,
      i = s.__v_raw,
      a = de(i),
      l = t ? ki : e ? Pi : je;
    return (
      !e && He(a, "iterate", _n), i.forEach((u, c) => r.call(o, l(u), l(c), s))
    );
  };
}
function eo(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = de(o),
      i = Un(s),
      a = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      u = o[e](...r),
      c = n ? ki : t ? Pi : je;
    return (
      !t && He(s, "iterate", l ? Hs : _n),
      {
        next() {
          const { value: f, done: d } = u.next();
          return d
            ? { value: f, done: d }
            : { value: a ? [c(f[0]), c(f[1])] : c(f), done: d };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Vt(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fh() {
  const e = {
      get(s) {
        return Qr(this, s);
      },
      get size() {
        return Yr(this);
      },
      has: Xr,
      add: ma,
      set: ya,
      delete: va,
      clear: ba,
      forEach: Zr(!1, !1),
    },
    t = {
      get(s) {
        return Qr(this, s, !1, !0);
      },
      get size() {
        return Yr(this);
      },
      has: Xr,
      add(s) {
        return ma.call(this, s, !0);
      },
      set(s, i) {
        return ya.call(this, s, i, !0);
      },
      delete: va,
      clear: ba,
      forEach: Zr(!1, !0),
    },
    n = {
      get(s) {
        return Qr(this, s, !0);
      },
      get size() {
        return Yr(this, !0);
      },
      has(s) {
        return Xr.call(this, s, !0);
      },
      add: Vt("add"),
      set: Vt("set"),
      delete: Vt("delete"),
      clear: Vt("clear"),
      forEach: Zr(!0, !1),
    },
    r = {
      get(s) {
        return Qr(this, s, !0, !0);
      },
      get size() {
        return Yr(this, !0);
      },
      has(s) {
        return Xr.call(this, s, !0);
      },
      add: Vt("add"),
      set: Vt("set"),
      delete: Vt("delete"),
      clear: Vt("clear"),
      forEach: Zr(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (e[s] = eo(s, !1, !1)),
        (n[s] = eo(s, !0, !1)),
        (t[s] = eo(s, !1, !0)),
        (r[s] = eo(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [dh, hh, ph, gh] = fh();
function Ai(e, t) {
  const n = t ? (e ? gh : ph) : e ? hh : dh;
  return (r, o, s) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? r
      : Reflect.get(ge(n, o) && o in r ? n : r, o, s);
}
const mh = { get: Ai(!1, !1) },
  yh = { get: Ai(!1, !0) },
  vh = { get: Ai(!0, !1) };
const Hu = new WeakMap(),
  zu = new WeakMap(),
  Vu = new WeakMap(),
  bh = new WeakMap();
function wh(e) {
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
function _h(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wh(zd(e));
}
function er(e) {
  return En(e) ? e : Oi(e, !1, lh, mh, Hu);
}
function Uu(e) {
  return Oi(e, !1, ch, yh, zu);
}
function qu(e) {
  return Oi(e, !0, uh, vh, Vu);
}
function Oi(e, t, n, r, o) {
  if (!Te(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = o.get(e);
  if (s) return s;
  const i = _h(e);
  if (i === 0) return e;
  const a = new Proxy(e, i === 2 ? r : n);
  return o.set(e, a), a;
}
function qn(e) {
  return En(e) ? qn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function En(e) {
  return !!(e && e.__v_isReadonly);
}
function ct(e) {
  return !!(e && e.__v_isShallow);
}
function Ri(e) {
  return e ? !!e.__v_raw : !1;
}
function de(e) {
  const t = e && e.__v_raw;
  return t ? de(t) : e;
}
function xh(e) {
  return (
    !ge(e, "__v_skip") && Object.isExtensible(e) && Su(e, "__v_skip", !0), e
  );
}
const je = (e) => (Te(e) ? er(e) : e),
  Pi = (e) => (Te(e) ? qu(e) : e);
function De(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Gu(e) {
  return Wu(e, !1);
}
function Sh(e) {
  return Wu(e, !0);
}
function Wu(e, t) {
  return De(e) ? e : new Ch(e, t);
}
class Ch {
  constructor(t, n) {
    (this.dep = new Ti()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : de(t)),
      (this._value = n ? t : je(t)),
      (this.__v_isShallow = n);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue,
      r = this.__v_isShallow || ct(t) || En(t);
    (t = r ? t : de(t)),
      rn(t, n) &&
        ((this._rawValue = t),
        (this._value = r ? t : je(t)),
        this.dep.trigger());
  }
}
function be(e) {
  return De(e) ? e.value : e;
}
const Eh = {
  get: (e, t, n) => (t === "__v_raw" ? e : be(Reflect.get(e, t, n))),
  set: (e, t, n, r) => {
    const o = e[t];
    return De(o) && !De(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Ku(e) {
  return qn(e) ? e : new Proxy(e, Eh);
}
function bo(e) {
  const t = K(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = kh(e, n);
  return t;
}
class Th {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0),
      (this._value = void 0);
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return nh(de(this._object), this._key);
  }
}
function kh(e, t, n) {
  const r = e[t];
  return De(r) ? r : new Th(e, t, n);
}
class Ah {
  constructor(t, n, r) {
    (this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new Ti(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Tr - 1),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = r);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && xe !== this))
      return $u(this), !0;
  }
  get value() {
    const t = this.dep.track();
    return Iu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Oh(e, t, n = !1) {
  let r, o;
  return Y(e) ? (r = e) : ((r = e.get), (o = e.set)), new Ah(r, o, n);
}
const to = {},
  wo = new WeakMap();
let gn;
function Rh(e, t = !1, n = gn) {
  if (n) {
    let r = wo.get(n);
    r || wo.set(n, (r = [])), r.push(e);
  }
}
function Ph(e, t, n = we) {
  const {
      immediate: r,
      deep: o,
      once: s,
      scheduler: i,
      augmentJob: a,
      call: l,
    } = n,
    u = (k) => (o ? k : ct(k) || o === !1 || o === 0 ? Dt(k, 1) : Dt(k));
  let c,
    f,
    d,
    p,
    m = !1,
    y = !1;
  if (
    (De(e)
      ? ((f = () => e.value), (m = ct(e)))
      : qn(e)
      ? ((f = () => u(e)), (m = !0))
      : K(e)
      ? ((y = !0),
        (m = e.some((k) => qn(k) || ct(k))),
        (f = () =>
          e.map((k) => {
            if (De(k)) return k.value;
            if (qn(k)) return u(k);
            if (Y(k)) return l ? l(k, 2) : k();
          })))
      : Y(e)
      ? t
        ? (f = l ? () => l(e, 2) : e)
        : (f = () => {
            if (d) {
              un();
              try {
                d();
              } finally {
                cn();
              }
            }
            const k = gn;
            gn = c;
            try {
              return l ? l(e, 3, [p]) : e(p);
            } finally {
              gn = k;
            }
          })
      : (f = kt),
    t && o)
  ) {
    const k = f,
      S = o === !0 ? 1 / 0 : o;
    f = () => Dt(k(), S);
  }
  const v = Zd(),
    _ = () => {
      c.stop(), v && _i(v.effects, c);
    };
  if (s && t) {
    const k = t;
    t = (...S) => {
      k(...S), _();
    };
  }
  let x = y ? new Array(e.length).fill(to) : to;
  const T = (k) => {
    if (!(!(c.flags & 1) || (!c.dirty && !k)))
      if (t) {
        const S = c.run();
        if (o || m || (y ? S.some((V, L) => rn(V, x[L])) : rn(S, x))) {
          d && d();
          const V = gn;
          gn = c;
          try {
            const L = [S, x === to ? void 0 : y && x[0] === to ? [] : x, p];
            l ? l(t, 3, L) : t(...L), (x = S);
          } finally {
            gn = V;
          }
        }
      } else c.run();
  };
  return (
    a && a(T),
    (c = new Ru(f)),
    (c.scheduler = i ? () => i(T, !1) : T),
    (p = (k) => Rh(k, !1, c)),
    (d = c.onStop =
      () => {
        const k = wo.get(c);
        if (k) {
          if (l) l(k, 4);
          else for (const S of k) S();
          wo.delete(c);
        }
      }),
    t ? (r ? T(!0) : (x = c.run())) : i ? i(T.bind(null, !0), !0) : c.run(),
    (_.pause = c.pause.bind(c)),
    (_.resume = c.resume.bind(c)),
    (_.stop = _),
    _
  );
}
function Dt(e, t = 1 / 0, n) {
  if (t <= 0 || !Te(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, De(e))) Dt(e.value, t, n);
  else if (K(e)) for (let r = 0; r < e.length; r++) Dt(e[r], t, n);
  else if (bu(e) || Un(e))
    e.forEach((r) => {
      Dt(r, t, n);
    });
  else if (xu(e)) {
    for (const r in e) Dt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Dt(e[r], t, n);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.9
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function zr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Ho(o, t, n);
  }
}
function bt(e, t, n, r) {
  if (Y(e)) {
    const o = zr(e, t, n, r);
    return (
      o &&
        wu(o) &&
        o.catch((s) => {
          Ho(s, t, n);
        }),
      o
    );
  }
  if (K(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++) o.push(bt(e[s], t, n, r));
    return o;
  }
}
function Ho(e, t, n, r = !0) {
  const o = t ? t.vnode : null,
    { errorHandler: s, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || we;
  if (t) {
    let a = t.parent;
    const l = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, l, u) === !1) return;
      }
      a = a.parent;
    }
    if (s) {
      un(), zr(s, null, 10, [e, l, u]), cn();
      return;
    }
  }
  $h(e, n, o, r, i);
}
function $h(e, t, n, r = !0, o = !1) {
  if (o) throw e;
  console.error(e);
}
let Ar = !1,
  zs = !1;
const Ue = [];
let Et = 0;
const Gn = [];
let Yt = null,
  Bn = 0;
const Ju = Promise.resolve();
let $i = null;
function zo(e) {
  const t = $i || Ju;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nh(e) {
  let t = Ar ? Et + 1 : 0,
    n = Ue.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      o = Ue[r],
      s = Or(o);
    s < e || (s === e && o.flags & 2) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Ni(e) {
  if (!(e.flags & 1)) {
    const t = Or(e),
      n = Ue[Ue.length - 1];
    !n || (!(e.flags & 2) && t >= Or(n)) ? Ue.push(e) : Ue.splice(Nh(t), 0, e),
      (e.flags |= 1),
      Qu();
  }
}
function Qu() {
  !Ar && !zs && ((zs = !0), ($i = Ju.then(Yu)));
}
function Lh(e) {
  K(e)
    ? Gn.push(...e)
    : Yt && e.id === -1
    ? Yt.splice(Bn + 1, 0, e)
    : e.flags & 1 || (Gn.push(e), (e.flags |= 1)),
    Qu();
}
function wa(e, t, n = Ar ? Et + 1 : 0) {
  for (; n < Ue.length; n++) {
    const r = Ue[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid) continue;
      Ue.splice(n, 1),
        n--,
        r.flags & 4 && (r.flags &= -2),
        r(),
        r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Xu(e) {
  if (Gn.length) {
    const t = [...new Set(Gn)].sort((n, r) => Or(n) - Or(r));
    if (((Gn.length = 0), Yt)) {
      Yt.push(...t);
      return;
    }
    for (Yt = t, Bn = 0; Bn < Yt.length; Bn++) {
      const n = Yt[Bn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2);
    }
    (Yt = null), (Bn = 0);
  }
}
const Or = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function Yu(e) {
  (zs = !1), (Ar = !0);
  try {
    for (Et = 0; Et < Ue.length; Et++) {
      const t = Ue[Et];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        zr(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Et < Ue.length; Et++) {
      const t = Ue[Et];
      t && (t.flags &= -2);
    }
    (Et = 0),
      (Ue.length = 0),
      Xu(),
      (Ar = !1),
      ($i = null),
      (Ue.length || Gn.length) && Yu();
  }
}
let Ie = null,
  Vo = null;
function _o(e) {
  const t = Ie;
  return (Ie = e), (Vo = (e && e.type.__scopeId) || null), t;
}
function Ih(e) {
  Vo = e;
}
function Mh() {
  Vo = null;
}
const Dh = (e) => fe;
function fe(e, t = Ie, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && Oa(-1);
    const s = _o(t);
    let i;
    try {
      i = e(...o);
    } finally {
      _o(s), r._d && Oa(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function jx(e, t) {
  if (Ie === null) return e;
  const n = Ko(Ie),
    r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, a, l = we] = t[o];
    s &&
      (Y(s) && (s = { mounted: s, updated: s }),
      s.deep && Dt(i),
      r.push({
        dir: s,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: a,
        modifiers: l,
      }));
  }
  return e;
}
function fn(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && (un(), bt(l, n, 8, [e.el, a, e, t]), cn());
  }
}
const Bh = Symbol("_vte"),
  Fh = (e) => e.__isTeleport,
  In = Symbol("_leaveCb"),
  no = Symbol("_enterCb");
function jh() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Li(() => {
      e.isMounted = !0;
    }),
    oc(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const at = [Function, Array],
  Hh = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: at,
    onEnter: at,
    onAfterEnter: at,
    onEnterCancelled: at,
    onBeforeLeave: at,
    onLeave: at,
    onAfterLeave: at,
    onLeaveCancelled: at,
    onBeforeAppear: at,
    onAppear: at,
    onAfterAppear: at,
    onAppearCancelled: at,
  };
function zh(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Vs(e, t, n, r, o) {
  const {
      appear: s,
      mode: i,
      persisted: a = !1,
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: c,
      onEnterCancelled: f,
      onBeforeLeave: d,
      onLeave: p,
      onAfterLeave: m,
      onLeaveCancelled: y,
      onBeforeAppear: v,
      onAppear: _,
      onAfterAppear: x,
      onAppearCancelled: T,
    } = t,
    k = String(e.key),
    S = zh(n, e),
    V = (B, J) => {
      B && bt(B, r, 9, J);
    },
    L = (B, J) => {
      const te = J[1];
      V(B, J),
        K(B) ? B.every((A) => A.length <= 1) && te() : B.length <= 1 && te();
    },
    G = {
      mode: i,
      persisted: a,
      beforeEnter(B) {
        let J = l;
        if (!n.isMounted)
          if (s) J = v || l;
          else return;
        B[In] && B[In](!0);
        const te = S[k];
        te && Fn(e, te) && te.el[In] && te.el[In](), V(J, [B]);
      },
      enter(B) {
        let J = u,
          te = c,
          A = f;
        if (!n.isMounted)
          if (s) (J = _ || u), (te = x || c), (A = T || f);
          else return;
        let se = !1;
        const ie = (B[no] = (Ce) => {
          se ||
            ((se = !0),
            Ce ? V(A, [B]) : V(te, [B]),
            G.delayedLeave && G.delayedLeave(),
            (B[no] = void 0));
        });
        J ? L(J, [B, ie]) : ie();
      },
      leave(B, J) {
        const te = String(e.key);
        if ((B[no] && B[no](!0), n.isUnmounting)) return J();
        V(d, [B]);
        let A = !1;
        const se = (B[In] = (ie) => {
          A ||
            ((A = !0),
            J(),
            ie ? V(y, [B]) : V(m, [B]),
            (B[In] = void 0),
            S[te] === e && delete S[te]);
        });
        (S[te] = e), p ? L(p, [B, se]) : se();
      },
      clone(B) {
        return Vs(B, t, n, r);
      },
    };
  return G;
}
function Rr(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Rr(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Zu(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Pe
      ? (i.patchFlag & 128 && o++, (r = r.concat(Zu(i.children, t, a))))
      : (t || i.type !== Ht) && r.push(a != null ? Tn(i, { key: a }) : i);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function ke(e, t) {
  return Y(e) ? Ne({ name: e.name }, t, { setup: e }) : e;
}
function ec(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Us(e, t, n, r, o = !1) {
  if (K(e)) {
    e.forEach((m, y) => Us(m, t && (K(t) ? t[y] : t), n, r, o));
    return;
  }
  if (Wn(r) && !o) return;
  const s = r.shapeFlag & 4 ? Ko(r.component) : r.el,
    i = o ? null : s,
    { i: a, r: l } = e,
    u = t && t.r,
    c = a.refs === we ? (a.refs = {}) : a.refs,
    f = a.setupState,
    d = de(f),
    p = f === we ? () => !1 : (m) => ge(d, m);
  if (
    (u != null &&
      u !== l &&
      (Re(u)
        ? ((c[u] = null), p(u) && (f[u] = null))
        : De(u) && (u.value = null)),
    Y(l))
  )
    zr(l, a, 12, [i, c]);
  else {
    const m = Re(l),
      y = De(l);
    if (m || y) {
      const v = () => {
        if (e.f) {
          const _ = m ? (p(l) ? f[l] : c[l]) : l.value;
          o
            ? K(_) && _i(_, s)
            : K(_)
            ? _.includes(s) || _.push(s)
            : m
            ? ((c[l] = [s]), p(l) && (f[l] = c[l]))
            : ((l.value = [s]), e.k && (c[e.k] = l.value));
        } else
          m
            ? ((c[l] = i), p(l) && (f[l] = i))
            : y && ((l.value = i), e.k && (c[e.k] = i));
      };
      i ? ((v.id = -1), et(v, n)) : v();
    }
  }
}
const Wn = (e) => !!e.type.__asyncLoader,
  tc = (e) => e.type.__isKeepAlive;
function Vh(e, t) {
  nc(e, "a", t);
}
function Uh(e, t) {
  nc(e, "da", t);
}
function nc(e, t, n = Me) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((Uo(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      tc(o.parent.vnode) && qh(r, t, n, o), (o = o.parent);
  }
}
function qh(e, t, n, r) {
  const o = Uo(t, e, r, !0);
  sc(() => {
    _i(r[t], o);
  }, n);
}
function Uo(e, t, n = Me, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          un();
          const a = Vr(n),
            l = bt(t, n, e, i);
          return a(), cn(), l;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const zt =
    (e) =>
    (t, n = Me) => {
      (!Wo || e === "sp") && Uo(e, (...r) => t(...r), n);
    },
  Gh = zt("bm"),
  Li = zt("m"),
  Wh = zt("bu"),
  rc = zt("u"),
  oc = zt("bum"),
  sc = zt("um"),
  Kh = zt("sp"),
  Jh = zt("rtg"),
  Qh = zt("rtc");
function Xh(e, t = Me) {
  Uo("ec", e, t);
}
const ic = "components";
function Ke(e, t) {
  return lc(ic, e, !0, t) || e;
}
const ac = Symbol.for("v-ndc");
function tr(e) {
  return Re(e) ? lc(ic, e, !1) || e : e || ac;
}
function lc(e, t, n = !0, r = !1) {
  const o = Ie || Me;
  if (o) {
    const s = o.type;
    {
      const a = Dp(s, !1);
      if (a && (a === t || a === vt(t) || a === Bo(vt(t)))) return s;
    }
    const i = _a(o[e] || s[e], t) || _a(o.appContext[e], t);
    return !i && r ? s : i;
  }
}
function _a(e, t) {
  return e && (e[t] || e[vt(t)] || e[Bo(vt(t))]);
}
function qs(e, t, n, r) {
  let o;
  const s = n,
    i = K(e);
  if (i || Re(e)) {
    const a = i && qn(e);
    let l = !1;
    a && ((l = !ct(e)), (e = Fo(e))), (o = new Array(e.length));
    for (let u = 0, c = e.length; u < c; u++)
      o[u] = t(l ? je(e[u]) : e[u], u, void 0, s);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, s);
  } else if (Te(e))
    if (e[Symbol.iterator]) o = Array.from(e, (a, l) => t(a, l, void 0, s));
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        o[l] = t(e[c], c, l, s);
      }
    }
  else o = [];
  return o;
}
function he(e, t, n = {}, r, o) {
  if (Ie.ce || (Ie.parent && Wn(Ie.parent) && Ie.parent.ce))
    return (
      t !== "default" && (n.name = t),
      N(),
      Oe(Pe, null, [oe("slot", n, r && r())], 64)
    );
  let s = e[t];
  s && s._c && (s._d = !1), N();
  const i = s && uc(s(n)),
    a = Oe(
      Pe,
      { key: (n.key || (i && i.key) || `_${t}`) + (!i && r ? "_fb" : "") },
      i || (r ? r() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    a
  );
}
function uc(e) {
  return e.some((t) =>
    $r(t) ? !(t.type === Ht || (t.type === Pe && !uc(t.children))) : !0
  )
    ? e
    : null;
}
function Yh(e, t) {
  const n = {};
  for (const r in e) n[lo(r)] = e[r];
  return n;
}
const Gs = (e) => (e ? (Pc(e) ? Ko(e) : Gs(e.parent)) : null),
  vr = Ne(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Gs(e.parent),
    $root: (e) => Gs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ii(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Ni(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = zo.bind(e.proxy)),
    $watch: (e) => _p.bind(e),
  }),
  bs = (e, t) => e !== we && !e.__isScriptSetup && ge(e, t),
  Zh = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: s,
        accessCache: i,
        type: a,
        appContext: l,
      } = e;
      let u;
      if (t[0] !== "$") {
        const p = i[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return s[t];
          }
        else {
          if (bs(r, t)) return (i[t] = 1), r[t];
          if (o !== we && ge(o, t)) return (i[t] = 2), o[t];
          if ((u = e.propsOptions[0]) && ge(u, t)) return (i[t] = 3), s[t];
          if (n !== we && ge(n, t)) return (i[t] = 4), n[t];
          Ws && (i[t] = 0);
        }
      }
      const c = vr[t];
      let f, d;
      if (c) return t === "$attrs" && He(e.attrs, "get", ""), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== we && ge(n, t)) return (i[t] = 4), n[t];
      if (((d = l.config.globalProperties), ge(d, t))) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return bs(o, t)
        ? ((o[t] = n), !0)
        : r !== we && ge(r, t)
        ? ((r[t] = n), !0)
        : ge(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((s[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: s,
        },
      },
      i
    ) {
      let a;
      return (
        !!n[i] ||
        (e !== we && ge(e, i)) ||
        bs(t, i) ||
        ((a = s[0]) && ge(a, i)) ||
        ge(r, i) ||
        ge(vr, i) ||
        ge(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ge(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function ep() {
  return cc().slots;
}
function tp() {
  return cc().attrs;
}
function cc() {
  const e = Bi();
  return e.setupContext || (e.setupContext = Nc(e));
}
function xa(e) {
  return K(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Ws = !0;
function np(e) {
  const t = Ii(e),
    n = e.proxy,
    r = e.ctx;
  (Ws = !1), t.beforeCreate && Sa(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: d,
    beforeUpdate: p,
    updated: m,
    activated: y,
    deactivated: v,
    beforeDestroy: _,
    beforeUnmount: x,
    destroyed: T,
    unmounted: k,
    render: S,
    renderTracked: V,
    renderTriggered: L,
    errorCaptured: G,
    serverPrefetch: B,
    expose: J,
    inheritAttrs: te,
    components: A,
    directives: se,
    filters: ie,
  } = t;
  if ((u && rp(u, r, null), i))
    for (const ne in i) {
      const le = i[ne];
      Y(le) && (r[ne] = le.bind(n));
    }
  if (o) {
    const ne = o.call(n, n);
    Te(ne) && (e.data = er(ne));
  }
  if (((Ws = !0), s))
    for (const ne in s) {
      const le = s[ne],
        ze = Y(le) ? le.bind(n, n) : Y(le.get) ? le.get.bind(n, n) : kt,
        ft = !Y(le) && Y(le.set) ? le.set.bind(n) : kt,
        Be = X({ get: ze, set: ft });
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (Le) => (Be.value = Le),
      });
    }
  if (a) for (const ne in a) fc(a[ne], r, n, ne);
  if (l) {
    const ne = Y(l) ? l.call(n) : l;
    Reflect.ownKeys(ne).forEach((le) => {
      xn(le, ne[le]);
    });
  }
  c && Sa(c, e, "c");
  function ae(ne, le) {
    K(le) ? le.forEach((ze) => ne(ze.bind(n))) : le && ne(le.bind(n));
  }
  if (
    (ae(Gh, f),
    ae(Li, d),
    ae(Wh, p),
    ae(rc, m),
    ae(Vh, y),
    ae(Uh, v),
    ae(Xh, G),
    ae(Qh, V),
    ae(Jh, L),
    ae(oc, x),
    ae(sc, k),
    ae(Kh, B),
    K(J))
  )
    if (J.length) {
      const ne = e.exposed || (e.exposed = {});
      J.forEach((le) => {
        Object.defineProperty(ne, le, {
          get: () => n[le],
          set: (ze) => (n[le] = ze),
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === kt && (e.render = S),
    te != null && (e.inheritAttrs = te),
    A && (e.components = A),
    se && (e.directives = se),
    B && ec(e);
}
function rp(e, t, n = kt) {
  K(e) && (e = Ks(e));
  for (const r in e) {
    const o = e[r];
    let s;
    Te(o)
      ? "default" in o
        ? (s = qe(o.from || r, o.default, !0))
        : (s = qe(o.from || r))
      : (s = qe(o)),
      De(s)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (i) => (s.value = i),
          })
        : (t[r] = s);
  }
}
function Sa(e, t, n) {
  bt(K(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function fc(e, t, n, r) {
  let o = r.includes(".") ? Ec(n, r) : () => n[r];
  if (Re(e)) {
    const s = t[e];
    Y(s) && Jn(o, s);
  } else if (Y(e)) Jn(o, e.bind(n));
  else if (Te(e))
    if (K(e)) e.forEach((s) => fc(s, t, n, r));
    else {
      const s = Y(e.handler) ? e.handler.bind(n) : t[e.handler];
      Y(s) && Jn(o, s, e);
    }
}
function Ii(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    a = s.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !o.length && !n && !r
      ? (l = t)
      : ((l = {}), o.length && o.forEach((u) => xo(l, u, i, !0)), xo(l, t, i)),
    Te(t) && s.set(t, l),
    l
  );
}
function xo(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && xo(e, s, n, !0), o && o.forEach((i) => xo(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = op[i] || (n && n[i]);
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const op = {
  data: Ca,
  props: Ea,
  emits: Ea,
  methods: mr,
  computed: mr,
  beforeCreate: Ve,
  created: Ve,
  beforeMount: Ve,
  mounted: Ve,
  beforeUpdate: Ve,
  updated: Ve,
  beforeDestroy: Ve,
  beforeUnmount: Ve,
  destroyed: Ve,
  unmounted: Ve,
  activated: Ve,
  deactivated: Ve,
  errorCaptured: Ve,
  serverPrefetch: Ve,
  components: mr,
  directives: mr,
  watch: ip,
  provide: Ca,
  inject: sp,
};
function Ca(e, t) {
  return t
    ? e
      ? function () {
          return Ne(
            Y(e) ? e.call(this, this) : e,
            Y(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function sp(e, t) {
  return mr(Ks(e), Ks(t));
}
function Ks(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function mr(e, t) {
  return e ? Ne(Object.create(null), e, t) : t;
}
function Ea(e, t) {
  return e
    ? K(e) && K(t)
      ? [...new Set([...e, ...t])]
      : Ne(Object.create(null), xa(e), xa(t ?? {}))
    : t;
}
function ip(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ne(Object.create(null), e);
  for (const r in t) n[r] = Ve(e[r], t[r]);
  return n;
}
function dc() {
  return {
    app: null,
    config: {
      isNativeTag: jd,
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
let ap = 0;
function lp(e, t) {
  return function (r, o = null) {
    Y(r) || (r = Ne({}, r)), o != null && !Te(o) && (o = null);
    const s = dc(),
      i = new WeakSet(),
      a = [];
    let l = !1;
    const u = (s.app = {
      _uid: ap++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Fp,
      get config() {
        return s.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          i.has(c) ||
            (c && Y(c.install)
              ? (i.add(c), c.install(u, ...f))
              : Y(c) && (i.add(c), c(u, ...f))),
          u
        );
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u;
      },
      component(c, f) {
        return f ? ((s.components[c] = f), u) : s.components[c];
      },
      directive(c, f) {
        return f ? ((s.directives[c] = f), u) : s.directives[c];
      },
      mount(c, f, d) {
        if (!l) {
          const p = u._ceVNode || oe(r, o);
          return (
            (p.appContext = s),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            f && t ? t(p, c) : e(p, c, d),
            (l = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            Ko(p.component)
          );
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l &&
          (bt(a, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, f) {
        return (s.provides[c] = f), u;
      },
      runWithContext(c) {
        const f = Kn;
        Kn = u;
        try {
          return c();
        } finally {
          Kn = f;
        }
      },
    });
    return u;
  };
}
let Kn = null;
function xn(e, t) {
  if (Me) {
    let n = Me.provides;
    const r = Me.parent && Me.parent.provides;
    r === n && (n = Me.provides = Object.create(r)), (n[e] = t);
  }
}
function qe(e, t, n = !1) {
  const r = Me || Ie;
  if (r || Kn) {
    const o = Kn
      ? Kn._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && Y(t) ? t.call(r && r.proxy) : t;
  }
}
const hc = {},
  pc = () => Object.create(hc),
  gc = (e) => Object.getPrototypeOf(e) === hc;
function up(e, t, n, r = !1) {
  const o = {},
    s = pc();
  (e.propsDefaults = Object.create(null)), mc(e, t, o, s);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n ? (e.props = r ? o : Uu(o)) : e.type.props ? (e.props = o) : (e.props = s),
    (e.attrs = s);
}
function cp(e, t, n, r) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    a = de(o),
    [l] = e.propsOptions;
  let u = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let d = c[f];
        if (qo(e.emitsOptions, d)) continue;
        const p = t[d];
        if (l)
          if (ge(s, d)) p !== s[d] && ((s[d] = p), (u = !0));
          else {
            const m = vt(d);
            o[m] = Js(l, a, m, p, e, !1);
          }
        else p !== s[d] && ((s[d] = p), (u = !0));
      }
    }
  } else {
    mc(e, t, o, s) && (u = !0);
    let c;
    for (const f in a)
      (!t || (!ge(t, f) && ((c = ln(f)) === f || !ge(t, c)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[c] !== void 0) &&
            (o[f] = Js(l, a, f, void 0, e, !0))
          : delete o[f]);
    if (s !== a)
      for (const f in s) (!t || !ge(t, f)) && (delete s[f], (u = !0));
  }
  u && Ft(e.attrs, "set", "");
}
function mc(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1,
    a;
  if (t)
    for (let l in t) {
      if (yr(l)) continue;
      const u = t[l];
      let c;
      o && ge(o, (c = vt(l)))
        ? !s || !s.includes(c)
          ? (n[c] = u)
          : ((a || (a = {}))[c] = u)
        : qo(e.emitsOptions, l) ||
          ((!(l in r) || u !== r[l]) && ((r[l] = u), (i = !0)));
    }
  if (s) {
    const l = de(n),
      u = a || we;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      n[f] = Js(o, l, f, u[f], e, !ge(u, f));
    }
  }
  return i;
}
function Js(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = ge(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && Y(l)) {
        const { propsDefaults: u } = o;
        if (n in u) r = u[n];
        else {
          const c = Vr(o);
          (r = u[n] = l.call(null, t)), c();
        }
      } else r = l;
      o.ce && o.ce._setProp(n, r);
    }
    i[0] &&
      (s && !a ? (r = !1) : i[1] && (r === "" || r === ln(n)) && (r = !0));
  }
  return r;
}
const fp = new WeakMap();
function yc(e, t, n = !1) {
  const r = n ? fp : t.propsCache,
    o = r.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    a = [];
  let l = !1;
  if (!Y(e)) {
    const c = (f) => {
      l = !0;
      const [d, p] = yc(f, t, !0);
      Ne(i, d), p && a.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!s && !l) return Te(e) && r.set(e, Vn), Vn;
  if (K(s))
    for (let c = 0; c < s.length; c++) {
      const f = vt(s[c]);
      Ta(f) && (i[f] = we);
    }
  else if (s)
    for (const c in s) {
      const f = vt(c);
      if (Ta(f)) {
        const d = s[c],
          p = (i[f] = K(d) || Y(d) ? { type: d } : Ne({}, d)),
          m = p.type;
        let y = !1,
          v = !0;
        if (K(m))
          for (let _ = 0; _ < m.length; ++_) {
            const x = m[_],
              T = Y(x) && x.name;
            if (T === "Boolean") {
              y = !0;
              break;
            } else T === "String" && (v = !1);
          }
        else y = Y(m) && m.name === "Boolean";
        (p[0] = y), (p[1] = v), (y || ge(p, "default")) && a.push(f);
      }
    }
  const u = [i, a];
  return Te(e) && r.set(e, u), u;
}
function Ta(e) {
  return e[0] !== "$" && !yr(e);
}
const vc = (e) => e[0] === "_" || e === "$stable",
  Mi = (e) => (K(e) ? e.map(Tt) : [Tt(e)]),
  dp = (e, t, n) => {
    if (t._n) return t;
    const r = fe((...o) => Mi(t(...o)), n);
    return (r._c = !1), r;
  },
  bc = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (vc(o)) continue;
      const s = e[o];
      if (Y(s)) t[o] = dp(o, s, r);
      else if (s != null) {
        const i = Mi(s);
        t[o] = () => i;
      }
    }
  },
  wc = (e, t) => {
    const n = Mi(t);
    e.slots.default = () => n;
  },
  _c = (e, t, n) => {
    for (const r in t) (n || r !== "_") && (e[r] = t[r]);
  },
  hp = (e, t, n) => {
    const r = (e.slots = pc());
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (_c(r, t, n), n && Su(r, "_", o, !0)) : bc(t, r);
    } else t && wc(e, t);
  },
  pp = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = !0,
      i = we;
    if (r.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (s = !1)
          : _c(o, t, n)
        : ((s = !t.$stable), bc(t, o)),
        (i = t);
    } else t && (wc(e, t), (i = { default: 1 }));
    if (s) for (const a in o) !vc(a) && i[a] == null && delete o[a];
  },
  et = Ap;
function gp(e) {
  return mp(e);
}
function mp(e, t) {
  const n = Cu();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: a,
      createComment: l,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: d,
      setScopeId: p = kt,
      insertStaticContent: m,
    } = e,
    y = (
      h,
      g,
      b,
      O = null,
      C = null,
      R = null,
      D = void 0,
      M = null,
      I = !!g.dynamicChildren
    ) => {
      if (h === g) return;
      h && !Fn(h, g) && ((O = E(h)), Le(h, C, R, !0), (h = null)),
        g.patchFlag === -2 && ((I = !1), (g.dynamicChildren = null));
      const { type: P, ref: W, shapeFlag: j } = g;
      switch (P) {
        case Go:
          v(h, g, b, O);
          break;
        case Ht:
          _(h, g, b, O);
          break;
        case co:
          h == null && x(g, b, O, D);
          break;
        case Pe:
          A(h, g, b, O, C, R, D, M, I);
          break;
        default:
          j & 1
            ? S(h, g, b, O, C, R, D, M, I)
            : j & 6
            ? se(h, g, b, O, C, R, D, M, I)
            : (j & 64 || j & 128) && P.process(h, g, b, O, C, R, D, M, I, U);
      }
      W != null && C && Us(W, h && h.ref, R, g || h, !g);
    },
    v = (h, g, b, O) => {
      if (h == null) r((g.el = a(g.children)), b, O);
      else {
        const C = (g.el = h.el);
        g.children !== h.children && u(C, g.children);
      }
    },
    _ = (h, g, b, O) => {
      h == null ? r((g.el = l(g.children || "")), b, O) : (g.el = h.el);
    },
    x = (h, g, b, O) => {
      [h.el, h.anchor] = m(h.children, g, b, O, h.el, h.anchor);
    },
    T = ({ el: h, anchor: g }, b, O) => {
      let C;
      for (; h && h !== g; ) (C = d(h)), r(h, b, O), (h = C);
      r(g, b, O);
    },
    k = ({ el: h, anchor: g }) => {
      let b;
      for (; h && h !== g; ) (b = d(h)), o(h), (h = b);
      o(g);
    },
    S = (h, g, b, O, C, R, D, M, I) => {
      g.type === "svg" ? (D = "svg") : g.type === "math" && (D = "mathml"),
        h == null ? V(g, b, O, C, R, D, M, I) : B(h, g, C, R, D, M, I);
    },
    V = (h, g, b, O, C, R, D, M) => {
      let I, P;
      const { props: W, shapeFlag: j, transition: q, dirs: Q } = h;
      if (
        ((I = h.el = i(h.type, R, W && W.is, W)),
        j & 8
          ? c(I, h.children)
          : j & 16 && G(h.children, I, null, O, C, ws(h, R), D, M),
        Q && fn(h, null, O, "created"),
        L(I, h, h.scopeId, D, O),
        W)
      ) {
        for (const _e in W)
          _e !== "value" && !yr(_e) && s(I, _e, null, W[_e], R, O);
        "value" in W && s(I, "value", null, W.value, R),
          (P = W.onVnodeBeforeMount) && Ct(P, O, h);
      }
      Q && fn(h, null, O, "beforeMount");
      const ue = yp(C, q);
      ue && q.beforeEnter(I),
        r(I, g, b),
        ((P = W && W.onVnodeMounted) || ue || Q) &&
          et(() => {
            P && Ct(P, O, h), ue && q.enter(I), Q && fn(h, null, O, "mounted");
          }, C);
    },
    L = (h, g, b, O, C) => {
      if ((b && p(h, b), O)) for (let R = 0; R < O.length; R++) p(h, O[R]);
      if (C) {
        let R = C.subTree;
        if (
          g === R ||
          (kc(R.type) && (R.ssContent === g || R.ssFallback === g))
        ) {
          const D = C.vnode;
          L(h, D, D.scopeId, D.slotScopeIds, C.parent);
        }
      }
    },
    G = (h, g, b, O, C, R, D, M, I = 0) => {
      for (let P = I; P < h.length; P++) {
        const W = (h[P] = M ? Zt(h[P]) : Tt(h[P]));
        y(null, W, g, b, O, C, R, D, M);
      }
    },
    B = (h, g, b, O, C, R, D) => {
      const M = (g.el = h.el);
      let { patchFlag: I, dynamicChildren: P, dirs: W } = g;
      I |= h.patchFlag & 16;
      const j = h.props || we,
        q = g.props || we;
      let Q;
      if (
        (b && dn(b, !1),
        (Q = q.onVnodeBeforeUpdate) && Ct(Q, b, g, h),
        W && fn(g, h, b, "beforeUpdate"),
        b && dn(b, !0),
        ((j.innerHTML && q.innerHTML == null) ||
          (j.textContent && q.textContent == null)) &&
          c(M, ""),
        P
          ? J(h.dynamicChildren, P, M, b, O, ws(g, C), R)
          : D || le(h, g, M, null, b, O, ws(g, C), R, !1),
        I > 0)
      ) {
        if (I & 16) te(M, j, q, b, C);
        else if (
          (I & 2 && j.class !== q.class && s(M, "class", null, q.class, C),
          I & 4 && s(M, "style", j.style, q.style, C),
          I & 8)
        ) {
          const ue = g.dynamicProps;
          for (let _e = 0; _e < ue.length; _e++) {
            const ye = ue[_e],
              Xe = j[ye],
              Fe = q[ye];
            (Fe !== Xe || ye === "value") && s(M, ye, Xe, Fe, C, b);
          }
        }
        I & 1 && h.children !== g.children && c(M, g.children);
      } else !D && P == null && te(M, j, q, b, C);
      ((Q = q.onVnodeUpdated) || W) &&
        et(() => {
          Q && Ct(Q, b, g, h), W && fn(g, h, b, "updated");
        }, O);
    },
    J = (h, g, b, O, C, R, D) => {
      for (let M = 0; M < g.length; M++) {
        const I = h[M],
          P = g[M],
          W =
            I.el && (I.type === Pe || !Fn(I, P) || I.shapeFlag & 70)
              ? f(I.el)
              : b;
        y(I, P, W, null, O, C, R, D, !0);
      }
    },
    te = (h, g, b, O, C) => {
      if (g !== b) {
        if (g !== we)
          for (const R in g) !yr(R) && !(R in b) && s(h, R, g[R], null, C, O);
        for (const R in b) {
          if (yr(R)) continue;
          const D = b[R],
            M = g[R];
          D !== M && R !== "value" && s(h, R, M, D, C, O);
        }
        "value" in b && s(h, "value", g.value, b.value, C);
      }
    },
    A = (h, g, b, O, C, R, D, M, I) => {
      const P = (g.el = h ? h.el : a("")),
        W = (g.anchor = h ? h.anchor : a(""));
      let { patchFlag: j, dynamicChildren: q, slotScopeIds: Q } = g;
      Q && (M = M ? M.concat(Q) : Q),
        h == null
          ? (r(P, b, O), r(W, b, O), G(g.children || [], b, W, C, R, D, M, I))
          : j > 0 && j & 64 && q && h.dynamicChildren
          ? (J(h.dynamicChildren, q, b, C, R, D, M),
            (g.key != null || (C && g === C.subTree)) && xc(h, g, !0))
          : le(h, g, b, W, C, R, D, M, I);
    },
    se = (h, g, b, O, C, R, D, M, I) => {
      (g.slotScopeIds = M),
        h == null
          ? g.shapeFlag & 512
            ? C.ctx.activate(g, b, O, D, I)
            : ie(g, b, O, C, R, D, I)
          : Ce(h, g, I);
    },
    ie = (h, g, b, O, C, R, D) => {
      const M = (h.component = Np(h, O, C));
      if ((tc(h) && (M.ctx.renderer = U), Lp(M, !1, D), M.asyncDep)) {
        if ((C && C.registerDep(M, ae, D), !h.el)) {
          const I = (M.subTree = oe(Ht));
          _(null, I, g, b);
        }
      } else ae(M, h, g, b, C, R, D);
    },
    Ce = (h, g, b) => {
      const O = (g.component = h.component);
      if (Tp(h, g, b))
        if (O.asyncDep && !O.asyncResolved) {
          ne(O, g, b);
          return;
        } else (O.next = g), O.update();
      else (g.el = h.el), (O.vnode = g);
    },
    ae = (h, g, b, O, C, R, D) => {
      const M = () => {
        if (h.isMounted) {
          let { next: j, bu: q, u: Q, parent: ue, vnode: _e } = h;
          {
            const Ye = Sc(h);
            if (Ye) {
              j && ((j.el = _e.el), ne(h, j, D)),
                Ye.asyncDep.then(() => {
                  h.isUnmounted || M();
                });
              return;
            }
          }
          let ye = j,
            Xe;
          dn(h, !1),
            j ? ((j.el = _e.el), ne(h, j, D)) : (j = _e),
            q && uo(q),
            (Xe = j.props && j.props.onVnodeBeforeUpdate) && Ct(Xe, ue, j, _e),
            dn(h, !0);
          const Fe = _s(h),
            dt = h.subTree;
          (h.subTree = Fe),
            y(dt, Fe, f(dt.el), E(dt), h, C, R),
            (j.el = Fe.el),
            ye === null && kp(h, Fe.el),
            Q && et(Q, C),
            (Xe = j.props && j.props.onVnodeUpdated) &&
              et(() => Ct(Xe, ue, j, _e), C);
        } else {
          let j;
          const { el: q, props: Q } = g,
            { bm: ue, m: _e, parent: ye, root: Xe, type: Fe } = h,
            dt = Wn(g);
          if (
            (dn(h, !1),
            ue && uo(ue),
            !dt && (j = Q && Q.onVnodeBeforeMount) && Ct(j, ye, g),
            dn(h, !0),
            q && Ae)
          ) {
            const Ye = () => {
              (h.subTree = _s(h)), Ae(q, h.subTree, h, C, null);
            };
            dt && Fe.__asyncHydrate ? Fe.__asyncHydrate(q, h, Ye) : Ye();
          } else {
            Xe.ce && Xe.ce._injectChildStyle(Fe);
            const Ye = (h.subTree = _s(h));
            y(null, Ye, b, O, h, C, R), (g.el = Ye.el);
          }
          if ((_e && et(_e, C), !dt && (j = Q && Q.onVnodeMounted))) {
            const Ye = g;
            et(() => Ct(j, ye, Ye), C);
          }
          (g.shapeFlag & 256 ||
            (ye && Wn(ye.vnode) && ye.vnode.shapeFlag & 256)) &&
            h.a &&
            et(h.a, C),
            (h.isMounted = !0),
            (g = b = O = null);
        }
      };
      h.scope.on();
      const I = (h.effect = new Ru(M));
      h.scope.off();
      const P = (h.update = I.run.bind(I)),
        W = (h.job = I.runIfDirty.bind(I));
      (W.i = h), (W.id = h.uid), (I.scheduler = () => Ni(W)), dn(h, !0), P();
    },
    ne = (h, g, b) => {
      g.component = h;
      const O = h.vnode.props;
      (h.vnode = g),
        (h.next = null),
        cp(h, g.props, O, b),
        pp(h, g.children, b),
        un(),
        wa(h),
        cn();
    },
    le = (h, g, b, O, C, R, D, M, I = !1) => {
      const P = h && h.children,
        W = h ? h.shapeFlag : 0,
        j = g.children,
        { patchFlag: q, shapeFlag: Q } = g;
      if (q > 0) {
        if (q & 128) {
          ft(P, j, b, O, C, R, D, M, I);
          return;
        } else if (q & 256) {
          ze(P, j, b, O, C, R, D, M, I);
          return;
        }
      }
      Q & 8
        ? (W & 16 && it(P, C, R), j !== P && c(b, j))
        : W & 16
        ? Q & 16
          ? ft(P, j, b, O, C, R, D, M, I)
          : it(P, C, R, !0)
        : (W & 8 && c(b, ""), Q & 16 && G(j, b, O, C, R, D, M, I));
    },
    ze = (h, g, b, O, C, R, D, M, I) => {
      (h = h || Vn), (g = g || Vn);
      const P = h.length,
        W = g.length,
        j = Math.min(P, W);
      let q;
      for (q = 0; q < j; q++) {
        const Q = (g[q] = I ? Zt(g[q]) : Tt(g[q]));
        y(h[q], Q, b, null, C, R, D, M, I);
      }
      P > W ? it(h, C, R, !0, !1, j) : G(g, b, O, C, R, D, M, I, j);
    },
    ft = (h, g, b, O, C, R, D, M, I) => {
      let P = 0;
      const W = g.length;
      let j = h.length - 1,
        q = W - 1;
      for (; P <= j && P <= q; ) {
        const Q = h[P],
          ue = (g[P] = I ? Zt(g[P]) : Tt(g[P]));
        if (Fn(Q, ue)) y(Q, ue, b, null, C, R, D, M, I);
        else break;
        P++;
      }
      for (; P <= j && P <= q; ) {
        const Q = h[j],
          ue = (g[q] = I ? Zt(g[q]) : Tt(g[q]));
        if (Fn(Q, ue)) y(Q, ue, b, null, C, R, D, M, I);
        else break;
        j--, q--;
      }
      if (P > j) {
        if (P <= q) {
          const Q = q + 1,
            ue = Q < W ? g[Q].el : O;
          for (; P <= q; )
            y(null, (g[P] = I ? Zt(g[P]) : Tt(g[P])), b, ue, C, R, D, M, I),
              P++;
        }
      } else if (P > q) for (; P <= j; ) Le(h[P], C, R, !0), P++;
      else {
        const Q = P,
          ue = P,
          _e = new Map();
        for (P = ue; P <= q; P++) {
          const Ze = (g[P] = I ? Zt(g[P]) : Tt(g[P]));
          Ze.key != null && _e.set(Ze.key, P);
        }
        let ye,
          Xe = 0;
        const Fe = q - ue + 1;
        let dt = !1,
          Ye = 0;
        const lr = new Array(Fe);
        for (P = 0; P < Fe; P++) lr[P] = 0;
        for (P = Q; P <= j; P++) {
          const Ze = h[P];
          if (Xe >= Fe) {
            Le(Ze, C, R, !0);
            continue;
          }
          let St;
          if (Ze.key != null) St = _e.get(Ze.key);
          else
            for (ye = ue; ye <= q; ye++)
              if (lr[ye - ue] === 0 && Fn(Ze, g[ye])) {
                St = ye;
                break;
              }
          St === void 0
            ? Le(Ze, C, R, !0)
            : ((lr[St - ue] = P + 1),
              St >= Ye ? (Ye = St) : (dt = !0),
              y(Ze, g[St], b, null, C, R, D, M, I),
              Xe++);
        }
        const fa = dt ? vp(lr) : Vn;
        for (ye = fa.length - 1, P = Fe - 1; P >= 0; P--) {
          const Ze = ue + P,
            St = g[Ze],
            da = Ze + 1 < W ? g[Ze + 1].el : O;
          lr[P] === 0
            ? y(null, St, b, da, C, R, D, M, I)
            : dt && (ye < 0 || P !== fa[ye] ? Be(St, b, da, 2) : ye--);
        }
      }
    },
    Be = (h, g, b, O, C = null) => {
      const { el: R, type: D, transition: M, children: I, shapeFlag: P } = h;
      if (P & 6) {
        Be(h.component.subTree, g, b, O);
        return;
      }
      if (P & 128) {
        h.suspense.move(g, b, O);
        return;
      }
      if (P & 64) {
        D.move(h, g, b, U);
        return;
      }
      if (D === Pe) {
        r(R, g, b);
        for (let j = 0; j < I.length; j++) Be(I[j], g, b, O);
        r(h.anchor, g, b);
        return;
      }
      if (D === co) {
        T(h, g, b);
        return;
      }
      if (O !== 2 && P & 1 && M)
        if (O === 0) M.beforeEnter(R), r(R, g, b), et(() => M.enter(R), C);
        else {
          const { leave: j, delayLeave: q, afterLeave: Q } = M,
            ue = () => r(R, g, b),
            _e = () => {
              j(R, () => {
                ue(), Q && Q();
              });
            };
          q ? q(R, ue, _e) : _e();
        }
      else r(R, g, b);
    },
    Le = (h, g, b, O = !1, C = !1) => {
      const {
        type: R,
        props: D,
        ref: M,
        children: I,
        dynamicChildren: P,
        shapeFlag: W,
        patchFlag: j,
        dirs: q,
        cacheIndex: Q,
      } = h;
      if (
        (j === -2 && (C = !1),
        M != null && Us(M, null, b, h, !0),
        Q != null && (g.renderCache[Q] = void 0),
        W & 256)
      ) {
        g.ctx.deactivate(h);
        return;
      }
      const ue = W & 1 && q,
        _e = !Wn(h);
      let ye;
      if ((_e && (ye = D && D.onVnodeBeforeUnmount) && Ct(ye, g, h), W & 6))
        Jr(h.component, b, O);
      else {
        if (W & 128) {
          h.suspense.unmount(b, O);
          return;
        }
        ue && fn(h, null, g, "beforeUnmount"),
          W & 64
            ? h.type.remove(h, g, b, U, O)
            : P && !P.hasOnce && (R !== Pe || (j > 0 && j & 64))
            ? it(P, g, b, !1, !0)
            : ((R === Pe && j & 384) || (!C && W & 16)) && it(I, g, b),
          O && $n(h);
      }
      ((_e && (ye = D && D.onVnodeUnmounted)) || ue) &&
        et(() => {
          ye && Ct(ye, g, h), ue && fn(h, null, g, "unmounted");
        }, b);
    },
    $n = (h) => {
      const { type: g, el: b, anchor: O, transition: C } = h;
      if (g === Pe) {
        Nn(b, O);
        return;
      }
      if (g === co) {
        k(h);
        return;
      }
      const R = () => {
        o(b), C && !C.persisted && C.afterLeave && C.afterLeave();
      };
      if (h.shapeFlag & 1 && C && !C.persisted) {
        const { leave: D, delayLeave: M } = C,
          I = () => D(b, R);
        M ? M(h.el, R, I) : I();
      } else R();
    },
    Nn = (h, g) => {
      let b;
      for (; h !== g; ) (b = d(h)), o(h), (h = b);
      o(g);
    },
    Jr = (h, g, b) => {
      const { bum: O, scope: C, job: R, subTree: D, um: M, m: I, a: P } = h;
      ka(I),
        ka(P),
        O && uo(O),
        C.stop(),
        R && ((R.flags |= 8), Le(D, h, g, b)),
        M && et(M, g),
        et(() => {
          h.isUnmounted = !0;
        }, g),
        g &&
          g.pendingBranch &&
          !g.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === g.pendingId &&
          (g.deps--, g.deps === 0 && g.resolve());
    },
    it = (h, g, b, O = !1, C = !1, R = 0) => {
      for (let D = R; D < h.length; D++) Le(h[D], g, b, O, C);
    },
    E = (h) => {
      if (h.shapeFlag & 6) return E(h.component.subTree);
      if (h.shapeFlag & 128) return h.suspense.next();
      const g = d(h.anchor || h.el),
        b = g && g[Bh];
      return b ? d(b) : g;
    };
  let H = !1;
  const F = (h, g, b) => {
      h == null
        ? g._vnode && Le(g._vnode, null, null, !0)
        : y(g._vnode || null, h, g, null, null, null, b),
        (g._vnode = h),
        H || ((H = !0), wa(), Xu(), (H = !1));
    },
    U = {
      p: y,
      um: Le,
      m: Be,
      r: $n,
      mt: ie,
      mc: G,
      pc: le,
      pbc: J,
      n: E,
      o: e,
    };
  let me, Ae;
  return { render: F, hydrate: me, createApp: lp(F, me) };
}
function ws({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function dn({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function yp(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function xc(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (K(r) && K(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = o[s] = Zt(o[s])), (a.el = i.el)),
        !n && a.patchFlag !== -2 && xc(i, a)),
        a.type === Go && (a.el = i.el);
    }
}
function vp(e) {
  const t = e.slice(),
    n = [0];
  let r, o, s, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((o = n[n.length - 1]), e[o] < u)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        (a = (s + i) >> 1), e[n[a]] < u ? (s = a + 1) : (i = a);
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; ) (n[s] = i), (i = t[i]);
  return n;
}
function Sc(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Sc(t);
}
function ka(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const bp = Symbol.for("v-scx"),
  wp = () => qe(bp);
function Jn(e, t, n) {
  return Cc(e, t, n);
}
function Cc(e, t, n = we) {
  const { immediate: r, deep: o, flush: s, once: i } = n,
    a = Ne({}, n);
  let l;
  if (Wo)
    if (s === "sync") {
      const d = wp();
      l = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!t || r) a.once = !0;
    else {
      const d = () => {};
      return (d.stop = kt), (d.resume = kt), (d.pause = kt), d;
    }
  const u = Me;
  a.call = (d, p, m) => bt(d, u, p, m);
  let c = !1;
  s === "post"
    ? (a.scheduler = (d) => {
        et(d, u && u.suspense);
      })
    : s !== "sync" &&
      ((c = !0),
      (a.scheduler = (d, p) => {
        p ? d() : Ni(d);
      })),
    (a.augmentJob = (d) => {
      t && (d.flags |= 4),
        c && ((d.flags |= 2), u && ((d.id = u.uid), (d.i = u)));
    });
  const f = Ph(e, t, a);
  return l && l.push(f), f;
}
function _p(e, t, n) {
  const r = this.proxy,
    o = Re(e) ? (e.includes(".") ? Ec(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  Y(t) ? (s = t) : ((s = t.handler), (n = t));
  const i = Vr(this),
    a = Cc(o, s.bind(r), n);
  return i(), a;
}
function Ec(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
const xp = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${ln(t)}Modifiers`];
function Sp(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || we;
  let o = n;
  const s = t.startsWith("update:"),
    i = s && xp(r, t.slice(7));
  i &&
    (i.trim && (o = n.map((c) => (Re(c) ? c.trim() : c))),
    i.number && (o = n.map(Fs)));
  let a,
    l = r[(a = lo(t))] || r[(a = lo(vt(t)))];
  !l && s && (l = r[(a = lo(ln(t)))]), l && bt(l, e, 6, o);
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), bt(u, e, 6, o);
  }
}
function Tc(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    a = !1;
  if (!Y(e)) {
    const l = (u) => {
      const c = Tc(u, t, !0);
      c && ((a = !0), Ne(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !s && !a
    ? (Te(e) && r.set(e, null), null)
    : (K(s) ? s.forEach((l) => (i[l] = null)) : Ne(i, s),
      Te(e) && r.set(e, i),
      i);
}
function qo(e, t) {
  return !e || !Io(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, ln(t)) || ge(e, t));
}
function _s(e) {
  const {
      type: t,
      vnode: n,
      proxy: r,
      withProxy: o,
      propsOptions: [s],
      slots: i,
      attrs: a,
      emit: l,
      render: u,
      renderCache: c,
      props: f,
      data: d,
      setupState: p,
      ctx: m,
      inheritAttrs: y,
    } = e,
    v = _o(e);
  let _, x;
  try {
    if (n.shapeFlag & 4) {
      const k = o || r,
        S = k;
      (_ = Tt(u.call(S, k, c, f, p, d, m))), (x = a);
    } else {
      const k = t;
      (_ = Tt(
        k.length > 1 ? k(f, { attrs: a, slots: i, emit: l }) : k(f, null)
      )),
        (x = t.props ? a : Cp(a));
    }
  } catch (k) {
    (br.length = 0), Ho(k, e, 1), (_ = oe(Ht));
  }
  let T = _;
  if (x && y !== !1) {
    const k = Object.keys(x),
      { shapeFlag: S } = T;
    k.length &&
      S & 7 &&
      (s && k.some(wi) && (x = Ep(x, s)), (T = Tn(T, x, !1, !0)));
  }
  return (
    n.dirs &&
      ((T = Tn(T, null, !1, !0)),
      (T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs)),
    n.transition && Rr(T, n.transition),
    (_ = T),
    _o(v),
    _
  );
}
const Cp = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Io(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Ep = (e, t) => {
    const n = {};
    for (const r in e) (!wi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Tp(e, t, n) {
  const { props: r, children: o, component: s } = e,
    { props: i, children: a, patchFlag: l } = t,
    u = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Aa(r, i, u) : !!i;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const d = c[f];
        if (i[d] !== r[d] && !qo(u, d)) return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Aa(r, i, u)
        : !0
      : !!i;
  return !1;
}
function Aa(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !qo(n, s)) return !0;
  }
  return !1;
}
function kp({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const kc = (e) => e.__isSuspense;
function Ap(e, t) {
  t && t.pendingBranch
    ? K(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Lh(e);
}
const Pe = Symbol.for("v-fgt"),
  Go = Symbol.for("v-txt"),
  Ht = Symbol.for("v-cmt"),
  co = Symbol.for("v-stc"),
  br = [];
let ot = null;
function N(e = !1) {
  br.push((ot = e ? null : []));
}
function Op() {
  br.pop(), (ot = br[br.length - 1] || null);
}
let Pr = 1;
function Oa(e) {
  (Pr += e), e < 0 && ot && (ot.hasOnce = !0);
}
function Ac(e) {
  return (
    (e.dynamicChildren = Pr > 0 ? ot || Vn : null),
    Op(),
    Pr > 0 && ot && ot.push(e),
    e
  );
}
function z(e, t, n, r, o, s) {
  return Ac($(e, t, n, r, o, s, !0));
}
function Oe(e, t, n, r, o) {
  return Ac(oe(e, t, n, r, o, !0));
}
function $r(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Fn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Oc = ({ key: e }) => e ?? null,
  fo = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Re(e) || De(e) || Y(e)
        ? { i: Ie, r: e, k: t, f: !!n }
        : e
      : null
  );
function $(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  s = e === Pe ? 0 : 1,
  i = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Oc(t),
    ref: t && fo(t),
    scopeId: Vo,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ie,
  };
  return (
    a
      ? (Di(l, n), s & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Re(n) ? 8 : 16),
    Pr > 0 &&
      !i &&
      ot &&
      (l.patchFlag > 0 || s & 6) &&
      l.patchFlag !== 32 &&
      ot.push(l),
    l
  );
}
const oe = Rp;
function Rp(e, t = null, n = null, r = 0, o = null, s = !1) {
  if (((!e || e === ac) && (e = Ht), $r(e))) {
    const a = Tn(e, t, !0);
    return (
      n && Di(a, n),
      Pr > 0 &&
        !s &&
        ot &&
        (a.shapeFlag & 6 ? (ot[ot.indexOf(e)] = a) : ot.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((Bp(e) && (e = e.__vccOpts), t)) {
    t = Rc(t);
    let { class: a, style: l } = t;
    a && !Re(a) && (t.class = pe(a)),
      Te(l) && (Ri(l) && !K(l) && (l = Ne({}, l)), (t.style = Bt(l)));
  }
  const i = Re(e) ? 1 : kc(e) ? 128 : Fh(e) ? 64 : Te(e) ? 4 : Y(e) ? 2 : 0;
  return $(e, t, n, r, o, i, s, !0);
}
function Rc(e) {
  return e ? (Ri(e) || gc(e) ? Ne({}, e) : e) : null;
}
function Tn(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e,
    u = t ? nr(o || {}, t) : o,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Oc(u),
      ref:
        t && t.ref
          ? n && s
            ? K(s)
              ? s.concat(fo(t))
              : [s, fo(t)]
            : fo(t)
          : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Pe ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Tn(e.ssContent),
      ssFallback: e.ssFallback && Tn(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && r && Rr(c, l.clone(c)), c;
}
function Se(e = " ", t = 0) {
  return oe(Go, null, e, t);
}
function Hx(e, t) {
  const n = oe(co, null, e);
  return (n.staticCount = t), n;
}
function Z(e = "", t = !1) {
  return t ? (N(), Oe(Ht, null, e)) : oe(Ht, null, e);
}
function Tt(e) {
  return e == null || typeof e == "boolean"
    ? oe(Ht)
    : K(e)
    ? oe(Pe, null, e.slice())
    : $r(e)
    ? Zt(e)
    : oe(Go, null, String(e));
}
function Zt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Tn(e);
}
function Di(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (K(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Di(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !gc(t)
        ? (t._ctx = Ie)
        : o === 3 &&
          Ie &&
          (Ie.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Y(t)
      ? ((t = { default: t, _ctx: Ie }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Se(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function nr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = pe([t.class, r.class]));
      else if (o === "style") t.style = Bt([t.style, r.style]);
      else if (Io(o)) {
        const s = t[o],
          i = r[o];
        i &&
          s !== i &&
          !(K(s) && s.includes(i)) &&
          (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Ct(e, t, n, r = null) {
  bt(e, t, 7, [n, r]);
}
const Pp = dc();
let $p = 0;
function Np(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || Pp,
    s = {
      uid: $p++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ou(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: yc(r, o),
      emitsOptions: Tc(r, o),
      emit: null,
      emitted: null,
      propsDefaults: we,
      inheritAttrs: r.inheritAttrs,
      ctx: we,
      data: we,
      props: we,
      attrs: we,
      slots: we,
      refs: we,
      setupState: we,
      setupContext: null,
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
    (s.ctx = { _: s }),
    (s.root = t ? t.root : s),
    (s.emit = Sp.bind(null, s)),
    e.ce && e.ce(s),
    s
  );
}
let Me = null;
const Bi = () => Me || Ie;
let So, Qs;
{
  const e = Cu(),
    t = (n, r) => {
      let o;
      return (
        (o = e[n]) || (o = e[n] = []),
        o.push(r),
        (s) => {
          o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
        }
      );
    };
  (So = t("__VUE_INSTANCE_SETTERS__", (n) => (Me = n))),
    (Qs = t("__VUE_SSR_SETTERS__", (n) => (Wo = n)));
}
const Vr = (e) => {
    const t = Me;
    return (
      So(e),
      e.scope.on(),
      () => {
        e.scope.off(), So(t);
      }
    );
  },
  Ra = () => {
    Me && Me.scope.off(), So(null);
  };
function Pc(e) {
  return e.vnode.shapeFlag & 4;
}
let Wo = !1;
function Lp(e, t = !1, n = !1) {
  t && Qs(t);
  const { props: r, children: o } = e.vnode,
    s = Pc(e);
  up(e, r, s, t), hp(e, o, n);
  const i = s ? Ip(e, t) : void 0;
  return t && Qs(!1), i;
}
function Ip(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Zh));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? Nc(e) : null),
      s = Vr(e);
    un();
    const i = zr(r, e, 0, [e.props, o]);
    if ((cn(), s(), wu(i))) {
      if ((Wn(e) || ec(e), i.then(Ra, Ra), t))
        return i
          .then((a) => {
            Pa(e, a, t);
          })
          .catch((a) => {
            Ho(a, e, 0);
          });
      e.asyncDep = i;
    } else Pa(e, i, t);
  } else $c(e, t);
}
function Pa(e, t, n) {
  Y(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Te(t) && (e.setupState = Ku(t)),
    $c(e, n);
}
let $a;
function $c(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && $a && !r.render) {
      const o = r.template || Ii(e).template;
      if (o) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = r,
          u = Ne(Ne({ isCustomElement: s, delimiters: a }, i), l);
        r.render = $a(o, u);
      }
    }
    e.render = r.render || kt;
  }
  {
    const o = Vr(e);
    un();
    try {
      np(e);
    } finally {
      cn(), o();
    }
  }
}
const Mp = {
  get(e, t) {
    return He(e, "get", ""), e[t];
  },
};
function Nc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Mp),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Ko(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ku(xh(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in vr) return vr[n](e);
          },
          has(t, n) {
            return n in t || n in vr;
          },
        }))
    : e.proxy;
}
function Dp(e, t = !0) {
  return Y(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Bp(e) {
  return Y(e) && "__vccOpts" in e;
}
const X = (e, t) => Oh(e, t, Wo);
function Lc(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Te(t) && !K(t)
      ? $r(t)
        ? oe(e, null, [t])
        : oe(e, t)
      : oe(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && $r(n) && (n = [n]),
      oe(e, t, n));
}
const Fp = "3.5.9";
/**
 * @vue/runtime-dom v3.5.9
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Xs;
const Na = typeof window < "u" && window.trustedTypes;
if (Na)
  try {
    Xs = Na.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const Ic = Xs ? (e) => Xs.createHTML(e) : (e) => e,
  jp = "http://www.w3.org/2000/svg",
  Hp = "http://www.w3.org/1998/Math/MathML",
  Mt = typeof document < "u" ? document : null,
  La = Mt && Mt.createElement("template"),
  zp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o =
        t === "svg"
          ? Mt.createElementNS(jp, e)
          : t === "mathml"
          ? Mt.createElementNS(Hp, e)
          : n
          ? Mt.createElement(e, { is: n })
          : Mt.createElement(e);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => Mt.createTextNode(e),
    createComment: (e) => Mt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Mt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === s || !(o = o.nextSibling));

        );
      else {
        La.innerHTML = Ic(
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const a = La.content;
        if (r === "svg" || r === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Ut = "transition",
  cr = "animation",
  Xn = Symbol("_vtc"),
  Mc = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Vp = Ne({}, Hh, Mc),
  hn = (e, t = []) => {
    K(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ia = (e) => (e ? (K(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Up(e) {
  const t = {};
  for (const A in e) A in Mc || (t[A] = e[A]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: r,
      duration: o,
      enterFromClass: s = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = s,
      appearActiveClass: u = i,
      appearToClass: c = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`,
    } = e,
    m = qp(o),
    y = m && m[0],
    v = m && m[1],
    {
      onBeforeEnter: _,
      onEnter: x,
      onEnterCancelled: T,
      onLeave: k,
      onLeaveCancelled: S,
      onBeforeAppear: V = _,
      onAppear: L = x,
      onAppearCancelled: G = T,
    } = t,
    B = (A, se, ie) => {
      Jt(A, se ? c : a), Jt(A, se ? u : i), ie && ie();
    },
    J = (A, se) => {
      (A._isLeaving = !1), Jt(A, f), Jt(A, p), Jt(A, d), se && se();
    },
    te = (A) => (se, ie) => {
      const Ce = A ? L : x,
        ae = () => B(se, A, ie);
      hn(Ce, [se, ae]),
        Ma(() => {
          Jt(se, A ? l : s), It(se, A ? c : a), Ia(Ce) || Da(se, r, y, ae);
        });
    };
  return Ne(t, {
    onBeforeEnter(A) {
      hn(_, [A]), It(A, s), It(A, i);
    },
    onBeforeAppear(A) {
      hn(V, [A]), It(A, l), It(A, u);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(A, se) {
      A._isLeaving = !0;
      const ie = () => J(A, se);
      It(A, f),
        It(A, d),
        Bc(),
        Ma(() => {
          A._isLeaving && (Jt(A, f), It(A, p), Ia(k) || Da(A, r, v, ie));
        }),
        hn(k, [A, ie]);
    },
    onEnterCancelled(A) {
      B(A, !1), hn(T, [A]);
    },
    onAppearCancelled(A) {
      B(A, !0), hn(G, [A]);
    },
    onLeaveCancelled(A) {
      J(A), hn(S, [A]);
    },
  });
}
function qp(e) {
  if (e == null) return null;
  if (Te(e)) return [xs(e.enter), xs(e.leave)];
  {
    const t = xs(e);
    return [t, t];
  }
}
function xs(e) {
  return qd(e);
}
function It(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Xn] || (e[Xn] = new Set())).add(t);
}
function Jt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Xn];
  n && (n.delete(t), n.size || (e[Xn] = void 0));
}
function Ma(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Gp = 0;
function Da(e, t, n, r) {
  const o = (e._endId = ++Gp),
    s = () => {
      o === e._endId && r();
    };
  if (n != null) return setTimeout(s, n);
  const { type: i, timeout: a, propCount: l } = Dc(e, t);
  if (!i) return r();
  const u = i + "end";
  let c = 0;
  const f = () => {
      e.removeEventListener(u, d), s();
    },
    d = (p) => {
      p.target === e && ++c >= l && f();
    };
  setTimeout(() => {
    c < l && f();
  }, a + 1),
    e.addEventListener(u, d);
}
function Dc(e, t) {
  const n = window.getComputedStyle(e),
    r = (m) => (n[m] || "").split(", "),
    o = r(`${Ut}Delay`),
    s = r(`${Ut}Duration`),
    i = Ba(o, s),
    a = r(`${cr}Delay`),
    l = r(`${cr}Duration`),
    u = Ba(a, l);
  let c = null,
    f = 0,
    d = 0;
  t === Ut
    ? i > 0 && ((c = Ut), (f = i), (d = s.length))
    : t === cr
    ? u > 0 && ((c = cr), (f = u), (d = l.length))
    : ((f = Math.max(i, u)),
      (c = f > 0 ? (i > u ? Ut : cr) : null),
      (d = c ? (c === Ut ? s.length : l.length) : 0));
  const p =
    c === Ut && /\b(transform|all)(,|$)/.test(r(`${Ut}Property`).toString());
  return { type: c, timeout: f, propCount: d, hasTransform: p };
}
function Ba(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => Fa(n) + Fa(e[r])));
}
function Fa(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bc() {
  return document.body.offsetHeight;
}
function Wp(e, t, n) {
  const r = e[Xn];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const ja = Symbol("_vod"),
  Kp = Symbol("_vsh"),
  Jp = Symbol(""),
  Qp = /(^|;)\s*display\s*:/;
function Xp(e, t, n) {
  const r = e.style,
    o = Re(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (Re(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && ho(r, a, "");
        }
      else for (const i in t) n[i] == null && ho(r, i, "");
    for (const i in n) i === "display" && (s = !0), ho(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Jp];
      i && (n += ";" + i), (r.cssText = n), (s = Qp.test(n));
    }
  } else t && e.removeAttribute("style");
  ja in e && ((e[ja] = s ? r.display : ""), e[Kp] && (r.display = "none"));
}
const Ha = /\s*!important$/;
function ho(e, t, n) {
  if (K(n)) n.forEach((r) => ho(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = Yp(e, t);
    Ha.test(n)
      ? e.setProperty(ln(r), n.replace(Ha, ""), "important")
      : (e[r] = n);
  }
}
const za = ["Webkit", "Moz", "ms"],
  Ss = {};
function Yp(e, t) {
  const n = Ss[t];
  if (n) return n;
  let r = vt(t);
  if (r !== "filter" && r in e) return (Ss[t] = r);
  r = Bo(r);
  for (let o = 0; o < za.length; o++) {
    const s = za[o] + r;
    if (s in e) return (Ss[t] = s);
  }
  return t;
}
const Va = "http://www.w3.org/1999/xlink";
function Ua(e, t, n, r, o, s = Xd(t)) {
  r && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(Va, t.slice(6, t.length))
      : e.setAttributeNS(Va, t, n)
    : n == null || (s && !Tu(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, s ? "" : an(n) ? String(n) : n);
}
function Zp(e, t, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ic(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const i = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
    (i !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const i = typeof e[t];
    i === "boolean"
      ? (n = Tu(n))
      : n == null && i === "string"
      ? ((n = ""), (s = !0))
      : i === "number" && ((n = 0), (s = !0));
  }
  try {
    e[t] = n;
  } catch {}
  s && e.removeAttribute(t);
}
function jn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function eg(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const qa = Symbol("_vei");
function tg(e, t, n, r, o = null) {
  const s = e[qa] || (e[qa] = {}),
    i = s[t];
  if (r && i) i.value = r;
  else {
    const [a, l] = ng(t);
    if (r) {
      const u = (s[t] = sg(r, o));
      jn(e, a, u, l);
    } else i && (eg(e, a, i, l), (s[t] = void 0));
  }
}
const Ga = /(?:Once|Passive|Capture)$/;
function ng(e) {
  let t;
  if (Ga.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Ga)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : ln(e.slice(2)), t];
}
let Cs = 0;
const rg = Promise.resolve(),
  og = () => Cs || (rg.then(() => (Cs = 0)), (Cs = Date.now()));
function sg(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    bt(ig(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = og()), n;
}
function ig(e, t) {
  if (K(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const Wa = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  ag = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class"
      ? Wp(e, r, i)
      : t === "style"
      ? Xp(e, n, r)
      : Io(t)
      ? wi(t) || tg(e, t, n, r, s)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : lg(e, t, r, i)
        )
      ? (Zp(e, t, r),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          Ua(e, t, r, i, s, t !== "value"))
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        Ua(e, t, r, i));
  };
function lg(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Wa(t) && Y(n))
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
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Wa(t) && Re(n)
    ? !1
    : !!(t in e || (e._isVueCE && (/[A-Z]/.test(t) || !Re(n))));
}
const Fc = new WeakMap(),
  jc = new WeakMap(),
  Co = Symbol("_moveCb"),
  Ka = Symbol("_enterCb"),
  ug = (e) => (delete e.props.mode, e),
  cg = ug({
    name: "TransitionGroup",
    props: Ne({}, Vp, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Bi(),
        r = jh();
      let o, s;
      return (
        rc(() => {
          if (!o.length) return;
          const i = e.moveClass || `${e.name || "v"}-move`;
          if (!gg(o[0].el, n.vnode.el, i)) return;
          o.forEach(dg), o.forEach(hg);
          const a = o.filter(pg);
          Bc(),
            a.forEach((l) => {
              const u = l.el,
                c = u.style;
              It(u, i),
                (c.transform = c.webkitTransform = c.transitionDuration = "");
              const f = (u[Co] = (d) => {
                (d && d.target !== u) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (u.removeEventListener("transitionend", f),
                    (u[Co] = null),
                    Jt(u, i)));
              });
              u.addEventListener("transitionend", f);
            });
        }),
        () => {
          const i = de(e),
            a = Up(i);
          let l = i.tag || Pe;
          if (((o = []), s))
            for (let u = 0; u < s.length; u++) {
              const c = s[u];
              c.el &&
                c.el instanceof Element &&
                (o.push(c),
                Rr(c, Vs(c, a, r, n)),
                Fc.set(c, c.el.getBoundingClientRect()));
            }
          s = t.default ? Zu(t.default()) : [];
          for (let u = 0; u < s.length; u++) {
            const c = s[u];
            c.key != null && Rr(c, Vs(c, a, r, n));
          }
          return oe(l, null, s);
        }
      );
    },
  }),
  fg = cg;
function dg(e) {
  const t = e.el;
  t[Co] && t[Co](), t[Ka] && t[Ka]();
}
function hg(e) {
  jc.set(e, e.el.getBoundingClientRect());
}
function pg(e) {
  const t = Fc.get(e),
    n = jc.get(e),
    r = t.left - n.left,
    o = t.top - n.top;
  if (r || o) {
    const s = e.el.style;
    return (
      (s.transform = s.webkitTransform = `translate(${r}px,${o}px)`),
      (s.transitionDuration = "0s"),
      e
    );
  }
}
function gg(e, t, n) {
  const r = e.cloneNode(),
    o = e[Xn];
  o &&
    o.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }),
    n.split(/\s+/).forEach((a) => a && r.classList.add(a)),
    (r.style.display = "none");
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = Dc(r);
  return s.removeChild(r), i;
}
const Ja = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => uo(t, n) : t;
};
function mg(e) {
  e.target.composing = !0;
}
function Qa(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Es = Symbol("_assign"),
  zx = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e[Es] = Ja(o);
      const s = r || (o.props && o.props.type === "number");
      jn(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), s && (a = Fs(a)), e[Es](a);
      }),
        n &&
          jn(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (jn(e, "compositionstart", mg),
          jn(e, "compositionend", Qa),
          jn(e, "change", Qa));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } },
      i
    ) {
      if (((e[Es] = Ja(i)), e.composing)) return;
      const a =
          (s || e.type === "number") && !/^0\d/.test(e.value)
            ? Fs(e.value)
            : e.value,
        l = t ?? "";
      a !== l &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((r && t === n) || (o && e.value.trim() === l))) ||
          (e.value = l));
    },
  },
  yg = ["ctrl", "shift", "alt", "meta"],
  vg = {
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
    exact: (e, t) => yg.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Hc = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (o, ...s) => {
        for (let i = 0; i < t.length; i++) {
          const a = vg[t[i]];
          if (a && a(o, t)) return;
        }
        return e(o, ...s);
      })
    );
  },
  bg = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  zc = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      r = t.join(".");
    return (
      n[r] ||
      (n[r] = (o) => {
        if (!("key" in o)) return;
        const s = ln(o.key);
        if (t.some((i) => i === s || bg[i] === s)) return e(o);
      })
    );
  },
  wg = Ne({ patchProp: ag }, zp);
let Xa;
function _g() {
  return Xa || (Xa = gp(wg));
}
const Vc = (...e) => {
  const t = _g().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const o = Sg(r);
      if (!o) return;
      const s = t._component;
      !Y(s) && !s.render && !s.template && (s.template = o.innerHTML),
        o.nodeType === 1 && (o.textContent = "");
      const i = n(o, !1, xg(o));
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function xg(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sg(e) {
  return Re(e) ? document.querySelector(e) : e;
}
er({});
const Fi = "-";
function Cg(e) {
  const t = Tg(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(i) {
    const a = i.split(Fi);
    return a[0] === "" && a.length !== 1 && a.shift(), Uc(a, t) || Eg(i);
  }
  function s(i, a) {
    const l = n[i] || [];
    return a && r[i] ? [...l, ...r[i]] : l;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: s };
}
function Uc(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? Uc(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const s = e.join(Fi);
  return (i = t.validators.find(({ validator: a }) => a(s))) == null
    ? void 0
    : i.classGroupId;
}
const Ya = /^\[(.+)\]$/;
function Eg(e) {
  if (Ya.test(e)) {
    const t = Ya.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function Tg(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    Ag(Object.entries(e.classGroups), n).forEach(([o, s]) => {
      Ys(s, r, o, t);
    }),
    r
  );
}
function Ys(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Za(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (kg(o)) {
        Ys(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Ys(i, Za(t, s), n, r);
    });
  });
}
function Za(e, t) {
  let n = e;
  return (
    t.split(Fi).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function kg(e) {
  return e.isThemeGetter;
}
function Ag(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((s) =>
          typeof s == "string"
            ? t + s
            : typeof s == "object"
            ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a]))
            : s
        );
        return [n, o];
      })
    : e;
}
function Og(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(s, i) {
    n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0) return i;
      if ((i = r.get(s)) !== void 0) return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    },
  };
}
const qc = "!";
function Rg(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (s) {
    const i = [];
    let a = 0,
      l = 0,
      u;
    for (let m = 0; m < s.length; m++) {
      let y = s[m];
      if (a === 0) {
        if (y === r && (n || s.slice(m, m + o) === t)) {
          i.push(s.slice(l, m)), (l = m + o);
          continue;
        }
        if (y === "/") {
          u = m;
          continue;
        }
      }
      y === "[" ? a++ : y === "]" && a--;
    }
    const c = i.length === 0 ? s : s.substring(l),
      f = c.startsWith(qc),
      d = f ? c.substring(1) : c,
      p = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: p,
    };
  };
}
function Pg(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function $g(e) {
  return { cache: Og(e.cacheSize), splitModifiers: Rg(e), ...Cg(e) };
}
const Ng = /\s+/;
function Lg(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    s = new Set();
  return e
    .trim()
    .split(Ng)
    .map((i) => {
      const {
        modifiers: a,
        hasImportantModifier: l,
        baseClassName: u,
        maybePostfixModifierPosition: c,
      } = n(i);
      let f = r(c ? u.substring(0, c) : u),
        d = !!c;
      if (!f) {
        if (!c) return { isTailwindClass: !1, originalClassName: i };
        if (((f = r(u)), !f))
          return { isTailwindClass: !1, originalClassName: i };
        d = !1;
      }
      const p = Pg(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: l ? p + qc : p,
        classGroupId: f,
        originalClassName: i,
        hasPostfixModifier: d,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: l, hasPostfixModifier: u } = i,
        c = a + l;
      return s.has(c)
        ? !1
        : (s.add(c), o(l, u).forEach((f) => s.add(a + f)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function Ig() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Gc(t)) && (r && (r += " "), (r += n));
  return r;
}
function Gc(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Gc(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function Mg(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(l) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = $g(u)), (r = n.cache.get), (o = n.cache.set), (s = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = Lg(l, n);
    return o(l, c), c;
  }
  return function () {
    return s(Ig.apply(null, arguments));
  };
}
function Ee(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Wc = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Dg = /^\d+\/\d+$/,
  Bg = new Set(["px", "full", "screen"]),
  Fg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  jg =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Hg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  zg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Vg =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Nt(e) {
  return yn(e) || Bg.has(e) || Dg.test(e);
}
function qt(e) {
  return rr(e, "length", Xg);
}
function yn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function ro(e) {
  return rr(e, "number", yn);
}
function fr(e) {
  return !!e && Number.isInteger(Number(e));
}
function Ug(e) {
  return e.endsWith("%") && yn(e.slice(0, -1));
}
function re(e) {
  return Wc.test(e);
}
function Gt(e) {
  return Fg.test(e);
}
const qg = new Set(["length", "size", "percentage"]);
function Gg(e) {
  return rr(e, qg, Kc);
}
function Wg(e) {
  return rr(e, "position", Kc);
}
const Kg = new Set(["image", "url"]);
function Jg(e) {
  return rr(e, Kg, Zg);
}
function Qg(e) {
  return rr(e, "", Yg);
}
function dr() {
  return !0;
}
function rr(e, t, n) {
  const r = Wc.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function Xg(e) {
  return jg.test(e) && !Hg.test(e);
}
function Kc() {
  return !1;
}
function Yg(e) {
  return zg.test(e);
}
function Zg(e) {
  return Vg.test(e);
}
function em() {
  const e = Ee("colors"),
    t = Ee("spacing"),
    n = Ee("blur"),
    r = Ee("brightness"),
    o = Ee("borderColor"),
    s = Ee("borderRadius"),
    i = Ee("borderSpacing"),
    a = Ee("borderWidth"),
    l = Ee("contrast"),
    u = Ee("grayscale"),
    c = Ee("hueRotate"),
    f = Ee("invert"),
    d = Ee("gap"),
    p = Ee("gradientColorStops"),
    m = Ee("gradientColorStopPositions"),
    y = Ee("inset"),
    v = Ee("margin"),
    _ = Ee("opacity"),
    x = Ee("padding"),
    T = Ee("saturate"),
    k = Ee("scale"),
    S = Ee("sepia"),
    V = Ee("skew"),
    L = Ee("space"),
    G = Ee("translate"),
    B = () => ["auto", "contain", "none"],
    J = () => ["auto", "hidden", "clip", "visible", "scroll"],
    te = () => ["auto", re, t],
    A = () => [re, t],
    se = () => ["", Nt, qt],
    ie = () => ["auto", yn, re],
    Ce = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    ae = () => ["solid", "dashed", "dotted", "double", "none"],
    ne = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    le = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    ze = () => ["", "0", re],
    ft = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    Be = () => [yn, ro],
    Le = () => [yn, re];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [dr],
      spacing: [Nt, qt],
      blur: ["none", "", Gt, re],
      brightness: Be(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Gt, re],
      borderSpacing: A(),
      borderWidth: se(),
      contrast: Be(),
      grayscale: ze(),
      hueRotate: Le(),
      invert: ze(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ug, qt],
      inset: te(),
      margin: te(),
      opacity: Be(),
      padding: A(),
      saturate: Be(),
      scale: Be(),
      sepia: ze(),
      skew: Le(),
      space: A(),
      translate: A(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", re] }],
      container: ["container"],
      columns: [{ columns: [Gt] }],
      "break-after": [{ "break-after": ft() }],
      "break-before": [{ "break-before": ft() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...Ce(), re] }],
      overflow: [{ overflow: J() }],
      "overflow-x": [{ "overflow-x": J() }],
      "overflow-y": [{ "overflow-y": J() }],
      overscroll: [{ overscroll: B() }],
      "overscroll-x": [{ "overscroll-x": B() }],
      "overscroll-y": [{ "overscroll-y": B() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [y] }],
      "inset-x": [{ "inset-x": [y] }],
      "inset-y": [{ "inset-y": [y] }],
      start: [{ start: [y] }],
      end: [{ end: [y] }],
      top: [{ top: [y] }],
      right: [{ right: [y] }],
      bottom: [{ bottom: [y] }],
      left: [{ left: [y] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", fr, re] }],
      basis: [{ basis: te() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", re] }],
      grow: [{ grow: ze() }],
      shrink: [{ shrink: ze() }],
      order: [{ order: ["first", "last", "none", fr, re] }],
      "grid-cols": [{ "grid-cols": [dr] }],
      "col-start-end": [{ col: ["auto", { span: ["full", fr, re] }, re] }],
      "col-start": [{ "col-start": ie() }],
      "col-end": [{ "col-end": ie() }],
      "grid-rows": [{ "grid-rows": [dr] }],
      "row-start-end": [{ row: ["auto", { span: [fr, re] }, re] }],
      "row-start": [{ "row-start": ie() }],
      "row-end": [{ "row-end": ie() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", re] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", re] }],
      gap: [{ gap: [d] }],
      "gap-x": [{ "gap-x": [d] }],
      "gap-y": [{ "gap-y": [d] }],
      "justify-content": [{ justify: ["normal", ...le()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...le(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...le(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [x] }],
      px: [{ px: [x] }],
      py: [{ py: [x] }],
      ps: [{ ps: [x] }],
      pe: [{ pe: [x] }],
      pt: [{ pt: [x] }],
      pr: [{ pr: [x] }],
      pb: [{ pb: [x] }],
      pl: [{ pl: [x] }],
      m: [{ m: [v] }],
      mx: [{ mx: [v] }],
      my: [{ my: [v] }],
      ms: [{ ms: [v] }],
      me: [{ me: [v] }],
      mt: [{ mt: [v] }],
      mr: [{ mr: [v] }],
      mb: [{ mb: [v] }],
      ml: [{ ml: [v] }],
      "space-x": [{ "space-x": [L] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [L] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", re, t] }],
      "min-w": [{ "min-w": [re, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            re,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Gt] },
            Gt,
          ],
        },
      ],
      h: [{ h: [re, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [re, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [re, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [re, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Gt, qt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            ro,
          ],
        },
      ],
      "font-family": [{ font: [dr] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            re,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", yn, ro] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Nt,
            re,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", re] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", re] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [_] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [_] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...ae(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Nt, qt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Nt, re] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: A() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            re,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", re] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [_] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...Ce(), Wg] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Gg] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Jg,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [m] }],
      "gradient-via-pos": [{ via: [m] }],
      "gradient-to-pos": [{ to: [m] }],
      "gradient-from": [{ from: [p] }],
      "gradient-via": [{ via: [p] }],
      "gradient-to": [{ to: [p] }],
      rounded: [{ rounded: [s] }],
      "rounded-s": [{ "rounded-s": [s] }],
      "rounded-e": [{ "rounded-e": [s] }],
      "rounded-t": [{ "rounded-t": [s] }],
      "rounded-r": [{ "rounded-r": [s] }],
      "rounded-b": [{ "rounded-b": [s] }],
      "rounded-l": [{ "rounded-l": [s] }],
      "rounded-ss": [{ "rounded-ss": [s] }],
      "rounded-se": [{ "rounded-se": [s] }],
      "rounded-ee": [{ "rounded-ee": [s] }],
      "rounded-es": [{ "rounded-es": [s] }],
      "rounded-tl": [{ "rounded-tl": [s] }],
      "rounded-tr": [{ "rounded-tr": [s] }],
      "rounded-br": [{ "rounded-br": [s] }],
      "rounded-bl": [{ "rounded-bl": [s] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [_] }],
      "border-style": [{ border: [...ae(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [_] }],
      "divide-style": [{ divide: ae() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...ae()] }],
      "outline-offset": [{ "outline-offset": [Nt, re] }],
      "outline-w": [{ outline: [Nt, qt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: se() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [_] }],
      "ring-offset-w": [{ "ring-offset": [Nt, qt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Gt, Qg] }],
      "shadow-color": [{ shadow: [dr] }],
      opacity: [{ opacity: [_] }],
      "mix-blend": [{ "mix-blend": [...ne(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": ne() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Gt, re] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [T] }],
      sepia: [{ sepia: [S] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [_] }],
      "backdrop-saturate": [{ "backdrop-saturate": [T] }],
      "backdrop-sepia": [{ "backdrop-sepia": [S] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            re,
          ],
        },
      ],
      duration: [{ duration: Le() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", re] }],
      delay: [{ delay: Le() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", re] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [k] }],
      "scale-x": [{ "scale-x": [k] }],
      "scale-y": [{ "scale-y": [k] }],
      rotate: [{ rotate: [fr, re] }],
      "translate-x": [{ "translate-x": [G] }],
      "translate-y": [{ "translate-y": [G] }],
      "skew-x": [{ "skew-x": [V] }],
      "skew-y": [{ "skew-y": [V] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            re,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            re,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": A() }],
      "scroll-mx": [{ "scroll-mx": A() }],
      "scroll-my": [{ "scroll-my": A() }],
      "scroll-ms": [{ "scroll-ms": A() }],
      "scroll-me": [{ "scroll-me": A() }],
      "scroll-mt": [{ "scroll-mt": A() }],
      "scroll-mr": [{ "scroll-mr": A() }],
      "scroll-mb": [{ "scroll-mb": A() }],
      "scroll-ml": [{ "scroll-ml": A() }],
      "scroll-p": [{ "scroll-p": A() }],
      "scroll-px": [{ "scroll-px": A() }],
      "scroll-py": [{ "scroll-py": A() }],
      "scroll-ps": [{ "scroll-ps": A() }],
      "scroll-pe": [{ "scroll-pe": A() }],
      "scroll-pt": [{ "scroll-pt": A() }],
      "scroll-pr": [{ "scroll-pr": A() }],
      "scroll-pb": [{ "scroll-pb": A() }],
      "scroll-pl": [{ "scroll-pl": A() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", re] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Nt, qt, ro] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const Nr = Mg(em),
  el = (e) => Nr(e),
  Jc = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  };
function tm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var s = "", i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        a && (s = o(s, r(a)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return n.apply(null, s);
      if (
        s.toString !== Object.prototype.toString &&
        !s.toString.toString().includes("[native code]")
      )
        return s.toString();
      var i = "";
      for (var a in s) t.call(s, a) && s[a] && (i = o(i, a));
      return i;
    }
    function o(s, i) {
      return i ? (s ? s + " " + i : s + i) : s;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Qc);
var nm = Qc.exports;
const Jo = tm(nm),
  rm = {
    0: "w-0 h-0",
    0.5: "w-0.5 h-0.5",
    1: "w-1 h-1",
    1.5: "w-1.5 h-1.5",
    10: "w-10 h-10",
    11: "w-11 h-11",
    12: "w-12 h-12",
    2: "w-2 h-2",
    2.5: "w-2.5 h-2.5",
    3: "w-3 h-3",
    4: "w-4 h-4",
    5: "w-5 h-5",
    6: "w-6 h-6",
    7: "w-7 h-7",
    8: "w-8 h-8",
    9: "w-9 h-9",
  },
  om = {
    blue: "fill-blue-600",
    gray: "fill-gray-600 dark:fill-gray-300",
    green: "fill-green-500",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    red: "fill-red-600",
    white: "fill-white",
    yellow: "fill-yellow-400",
  };
function sm(e) {
  const t = X(() => rm[e.size.value]),
    n = X(() => om[e.color.value]),
    r = X(() => "text-gray-200 dark:text-gray-600"),
    o = X(() => "animate-spin");
  return { spinnerClasses: X(() => Jo(o.value, r.value, n.value, t.value)) };
}
const im = $(
    "path",
    {
      d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
      fill: "currentColor",
    },
    null,
    -1
  ),
  am = $(
    "path",
    {
      d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
      fill: "currentFill",
    },
    null,
    -1
  ),
  lm = [im, am],
  oo = ke({
    __name: "FwbSpinner",
    props: { color: { default: "blue" }, size: { default: "4" } },
    setup(e) {
      const t = e,
        { spinnerClasses: n } = sm(bo(t));
      return (r, o) => (
        N(),
        z(
          "svg",
          {
            class: pe(be(n)),
            fill: "none",
            role: "status",
            viewBox: "0 0 100 101",
            xmlns: "http://www.w3.org/2000/svg",
          },
          lm,
          2
        )
      );
    },
  }),
  tl = {
    default: {
      default:
        "text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
      blue: "text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
      alternative:
        "font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600",
      dark: "text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700",
      light:
        "text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700",
      green:
        "focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800",
      red: "focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:focus:ring-red-900",
      yellow:
        "focus:outline-none text-white bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900",
      purple:
        "focus:outline-none text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:focus:ring-purple-900",
      pink: "focus:outline-none text-white bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg dark:bg-pink-600 dark:focus:ring-pink-900",
    },
    hover: {
      default: "hover:bg-blue-800 dark:hover:bg-blue-700",
      blue: "hover:bg-blue-800 dark:hover:bg-blue-700",
      alternative:
        "hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700",
      dark: "hover:bg-gray-900 dark:hover:bg-gray-700",
      light: "hover:bg-gray-100 dark:hover:border-gray-600",
      green: "hover:bg-green-800 dark:hover:bg-green-700",
      red: "hover:bg-red-800 dark:hover:bg-red-700",
      yellow: "hover:bg-yellow-500",
      purple: "hover:bg-purple-800 dark:hover:bg-purple-700",
      pink: "hover:bg-pink-800 dark:hover:bg-pink-700",
    },
  },
  nl = {
    default: {
      dark: "text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center dark:border-gray-600 dark:text-gray-400 dark:focus:ring-gray-800",
      default:
        "text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
      blue: "text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
      green:
        "text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800",
      purple:
        "text-purple-700 border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm text-center dark:border-purple-400 dark:text-purple-400 dark:focus:ring-purple-900",
      pink: "text-pink-700 border border-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm text-center dark:border-pink-400 dark:text-pink-400 dark:focus:ring-pink-900",
      red: "text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900",
      yellow:
        "text-yellow-400 border border-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm text-center dark:border-yellow-300 dark:text-yellow-300 dark:focus:ring-yellow-900",
    },
    hover: {
      dark: "hover:text-white hover:bg-gray-900 dark:hover:text-white dark:hover:bg-gray-600",
      default:
        "hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
      blue: "hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
      green:
        "hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600",
      purple:
        "hover:text-white hover:bg-purple-800 dark:hover:text-white dark:hover:bg-purple-500",
      pink: "hover:text-white hover:bg-pink-800 dark:hover:text-white dark:hover:bg-pink-500",
      red: "hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600",
      yellow:
        "hover:text-white hover:bg-yellow-500 dark:hover:text-white dark:hover:bg-yellow-400",
    },
  },
  rl = {
    hover: {
      "cyan-blue": "hover:bg-gradient-to-bl",
      "green-blue": "hover:bg-gradient-to-bl",
      "pink-orange": "hover:bg-gradient-to-bl",
      "purple-blue": "hover:bg-gradient-to-bl",
      "purple-pink": "hover:bg-gradient-to-l",
      "red-yellow": "hover:bg-gradient-to-bl",
      "teal-lime":
        "hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200",
      blue: "hover:bg-gradient-to-br",
      cyan: "hover:bg-gradient-to-br",
      green: "hover:bg-gradient-to-br",
      lime: "hover:bg-gradient-to-br",
      pink: "hover:bg-gradient-to-br",
      purple: "hover:bg-gradient-to-br",
      red: "hover:bg-gradient-to-br",
      teal: "hover:bg-gradient-to-br",
    },
    default: {
      "cyan-blue":
        "text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg",
      "green-blue":
        "text-white bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg",
      "pink-orange":
        "text-white bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg",
      "purple-blue":
        "text-white bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg",
      "purple-pink":
        "text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg",
      "red-yellow":
        "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg",
      "teal-lime":
        "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg",
      blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg",
      cyan: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg",
      green:
        "text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg",
      lime: "text-gray-900 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg",
      pink: "text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg",
      purple:
        "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg",
      red: "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg",
      teal: "text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg",
    },
  },
  ol = {
    default: {
      "cyan-blue":
        "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",
      "green-blue":
        "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
      "pink-orange":
        "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",
      "purple-blue":
        "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
      "purple-pink":
        "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
      "red-yellow":
        "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
      "teal-lime":
        "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800",
    },
    hover: {
      "cyan-blue":
        "group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white",
      "green-blue":
        "group-hover:from-green-400 group-hover:to-blue-600 hover:text-white",
      "pink-orange":
        "group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white",
      "purple-blue":
        "group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white",
      "purple-pink":
        "group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white",
      "red-yellow":
        "group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:hover:text-gray-900",
      "teal-lime":
        "group-hover:from-teal-300 group-hover:to-lime-300 dark:hover:text-gray-900",
    },
  },
  um = {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-base px-6 py-3",
  },
  cm = {
    xs: "text-xs p-1",
    sm: "text-sm p-1.5",
    md: "text-sm p-2",
    lg: "text-base p-2.5",
    xl: "text-base p-3",
  },
  sl = {
    blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
    cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
    green:
      "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
    lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
    pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
    purple:
      "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
    red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
    teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80",
  },
  Ts = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"],
  fm = ["alternative", "light"];
function dm(e) {
  const t = ep(),
    n = X(() => (e.square.value ? cm[e.size.value] : um[e.size.value])),
    r = X(() => {
      const s = !!e.gradient.value,
        i = !!e.color.value,
        a = e.outline.value;
      let l = "",
        u = "";
      if (s && a)
        Ts.includes(e.gradient.value)
          ? console.warn(
              `cannot use outline prop with "${e.gradient.value}" gradient`
            )
          : ((u = ol.default[e.gradient.value]),
            e.disabled.value || (l = ol.hover[e.gradient.value]));
      else if (s)
        (u = rl.default[e.gradient.value]),
          e.disabled.value || (l = rl.hover[e.gradient.value]);
      else if (i && a)
        if (fm.includes(e.color.value))
          console.warn(`cannot use outline prop with "${e.color.value}" color`);
        else {
          const f = e.color.value;
          (u = nl.default[f]), e.disabled.value || (l = nl.hover[f]);
        }
      else {
        const f = e.color.value;
        (u = tl.default[f]), e.disabled.value || (l = tl.hover[f]);
      }
      let c = "";
      return (
        e.shadow.value === ""
          ? e.gradient.value &&
            Ts.includes(e.gradient.value) &&
            (c = sl[e.gradient.value])
          : typeof e.shadow.value == "string" &&
            Ts.includes(e.shadow.value) &&
            (c = sl[e.shadow.value]),
        [
          u,
          l,
          c,
          e.pill.value && "!rounded-full",
          e.disabled.value && "cursor-not-allowed opacity-50",
          s && a ? "p-0.5" : n.value,
          (t.prefix || t.suffix || e.loading.value) &&
            "inline-flex items-center",
          e.class.value,
        ]
          .filter((f) => f)
          .join(" ")
      );
    }),
    o = X(() =>
      e.gradient.value && e.outline.value
        ? [
            "relative bg-white dark:bg-gray-900 rounded-md inline-flex items-center",
            n.value,
            e.disabled.value
              ? ""
              : "group-hover:bg-opacity-0 transition-all ease-in duration-75",
          ]
            .filter((s) => s)
            .join(" ")
        : ""
    );
  return { wrapperClasses: r.value, spanClasses: o.value };
}
function hm(e) {
  const t = { xs: "2.5", sm: "3", md: "4", lg: "5", xl: "6" },
    n = X(() => t[e.size.value]);
  return {
    color: X(() =>
      e.outline.value
        ? e.gradient.value
          ? e.gradient.value.includes("purple")
            ? "purple"
            : e.gradient.value.includes("blue")
            ? "blue"
            : e.gradient.value.includes("pink")
            ? "pink"
            : e.gradient.value.includes("red")
            ? "red"
            : "white"
          : ["alternative", "dark", "light"].includes(e.color.value)
          ? "white"
          : e.color.value === "default"
          ? "blue"
          : e.color.value
        : "white"
    ),
    size: n,
  };
}
const pm = { key: 0, class: "mr-2" },
  gm = { key: 0, class: "mr-2" },
  mm = { key: 1, class: "ml-2" },
  ym = { key: 1, class: "ml-2" },
  vm = ke({
    __name: "FwbButton",
    props: {
      class: { default: "" },
      color: { default: "default" },
      gradient: { default: null },
      size: { default: "md" },
      shadow: { default: null },
      pill: { type: Boolean, default: !1 },
      square: { type: Boolean, default: !1 },
      outline: { type: Boolean, default: !1 },
      loading: { type: Boolean, default: !1 },
      loadingPosition: { default: "prefix" },
      disabled: { type: Boolean, default: !1 },
      href: { default: "" },
      tag: { default: "a" },
    },
    setup(e) {
      const t = e,
        n = X(() => dm(bo(t))),
        r = X(() => el(n.value.wrapperClasses)),
        o = X(() => el(n.value.spanClasses)),
        s = X(() => t.outline && t.gradient),
        i = X(() => t.loading && t.loadingPosition === "prefix"),
        a = X(() => t.loading && t.loadingPosition === "suffix"),
        { color: l, size: u } = hm(bo(t)),
        c = t.tag !== "a" ? Ke(t.tag) : "a",
        f = t.href ? c : "button",
        d = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
      return (p, m) => (
        N(),
        Oe(
          tr(be(f)),
          Eu({
            class: r.value,
            [be(d) || ""]: p.href,
            disabled: be(f) === "button" && p.disabled,
          }),
          {
            default: fe(() => [
              !s.value && (p.$slots.prefix || i.value)
                ? (N(),
                  z("div", pm, [
                    i.value
                      ? (N(),
                        Oe(oo, { key: 0, color: be(l), size: be(u) }, null, 8, [
                          "color",
                          "size",
                        ]))
                      : he(p.$slots, "prefix", { key: 1 }),
                  ]))
                : Z("", !0),
              $(
                "span",
                { class: pe(o.value) },
                [
                  s.value && (p.$slots.prefix || i.value)
                    ? (N(),
                      z("span", gm, [
                        i.value
                          ? (N(),
                            Oe(
                              oo,
                              { key: 0, color: be(l), size: be(u) },
                              null,
                              8,
                              ["color", "size"]
                            ))
                          : he(p.$slots, "prefix", { key: 1 }),
                      ]))
                    : Z("", !0),
                  he(p.$slots, "default"),
                  s.value && (p.$slots.suffix || a.value)
                    ? (N(),
                      z("span", mm, [
                        a.value
                          ? (N(),
                            Oe(
                              oo,
                              { key: 0, color: be(l), size: be(u) },
                              null,
                              8,
                              ["color", "size"]
                            ))
                          : he(p.$slots, "suffix", { key: 1 }),
                      ]))
                    : Z("", !0),
                ],
                2
              ),
              !s.value && (p.$slots.suffix || a.value)
                ? (N(),
                  z("div", ym, [
                    a.value
                      ? (N(),
                        Oe(oo, { key: 0, color: be(l), size: be(u) }, null, 8, [
                          "color",
                          "size",
                        ]))
                      : he(p.$slots, "suffix", { key: 1 }),
                  ]))
                : Z("", !0),
            ]),
            _: 3,
          },
          16,
          ["class", "disabled"]
        )
      );
    },
  });
function bm(e) {
  const t = X(() =>
      e.variant.value === "default"
        ? "block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        : e.variant.value === "image"
        ? "max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        : e.variant.value === "horizontal"
        ? "flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        : ""
    ),
    n = X(() =>
      e.variant.value === "horizontal"
        ? "object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        : ""
    );
  return { cardClasses: t, horizontalImageClasses: n };
}
const wm = ["alt", "src"],
  Vx = ke({
    __name: "FwbCard",
    props: {
      href: { type: String, default: "" },
      imgAlt: { type: String, default: "" },
      imgSrc: { type: String, default: "" },
      variant: { type: String, default: "default" },
    },
    setup(e) {
      const t = e,
        { cardClasses: n, horizontalImageClasses: r } = bm(bo(t)),
        o = X(() => (t.href ? "a" : "div"));
      return (s, i) => (
        N(),
        Oe(
          tr(o.value),
          { class: pe(be(n)), href: e.href },
          {
            default: fe(() => [
              e.imgSrc
                ? (N(),
                  z(
                    "img",
                    {
                      key: 0,
                      alt: e.imgAlt,
                      class: pe([be(r), "rounded-t-lg"]),
                      src: e.imgSrc,
                    },
                    null,
                    10,
                    wm
                  ))
                : Z("", !0),
              $("div", null, [he(s.$slots, "default")]),
            ]),
            _: 3,
          },
          8,
          ["class", "href"]
        )
      );
    },
  });
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var _m =
    typeof global == "object" && global && global.Object === Object && global,
  xm = typeof self == "object" && self && self.Object === Object && self,
  ji = _m || xm || Function("return this")(),
  on = ji.Symbol,
  Xc = Object.prototype,
  Sm = Xc.hasOwnProperty,
  Cm = Xc.toString,
  hr = on ? on.toStringTag : void 0;
function Em(e) {
  var t = Sm.call(e, hr),
    n = e[hr];
  try {
    e[hr] = void 0;
    var r = !0;
  } catch {}
  var o = Cm.call(e);
  return r && (t ? (e[hr] = n) : delete e[hr]), o;
}
var Tm = Object.prototype,
  km = Tm.toString;
function Am(e) {
  return km.call(e);
}
var Om = "[object Null]",
  Rm = "[object Undefined]",
  il = on ? on.toStringTag : void 0;
function Hi(e) {
  return e == null
    ? e === void 0
      ? Rm
      : Om
    : il && il in Object(e)
    ? Em(e)
    : Am(e);
}
function zi(e) {
  return e != null && typeof e == "object";
}
var Pm = "[object Symbol]";
function Vi(e) {
  return typeof e == "symbol" || (zi(e) && Hi(e) == Pm);
}
function $m(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ur = Array.isArray,
  Nm = 1 / 0,
  al = on ? on.prototype : void 0,
  ll = al ? al.toString : void 0;
function Yc(e) {
  if (typeof e == "string") return e;
  if (Ur(e)) return $m(e, Yc) + "";
  if (Vi(e)) return ll ? ll.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Nm ? "-0" : t;
}
function Eo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Lm(e) {
  return e;
}
var Im = "[object AsyncFunction]",
  Mm = "[object Function]",
  Dm = "[object GeneratorFunction]",
  Bm = "[object Proxy]";
function Fm(e) {
  if (!Eo(e)) return !1;
  var t = Hi(e);
  return t == Mm || t == Dm || t == Im || t == Bm;
}
var ks = ji["__core-js_shared__"],
  ul = (function () {
    var e = /[^.]+$/.exec((ks && ks.keys && ks.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function jm(e) {
  return !!ul && ul in e;
}
var Hm = Function.prototype,
  zm = Hm.toString;
function Vm(e) {
  if (e != null) {
    try {
      return zm.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var Um = /[\\^$.*+?()[\]{}|]/g,
  qm = /^\[object .+?Constructor\]$/,
  Gm = Function.prototype,
  Wm = Object.prototype,
  Km = Gm.toString,
  Jm = Wm.hasOwnProperty,
  Qm = RegExp(
    "^" +
      Km.call(Jm)
        .replace(Um, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function Xm(e) {
  if (!Eo(e) || jm(e)) return !1;
  var t = Fm(e) ? Qm : qm;
  return t.test(Vm(e));
}
function Ym(e, t) {
  return e == null ? void 0 : e[t];
}
function Ui(e, t) {
  var n = Ym(e, t);
  return Xm(n) ? n : void 0;
}
function Zm(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var e0 = 800,
  t0 = 16,
  n0 = Date.now;
function r0(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = n0(),
      o = t0 - (r - n);
    if (((n = r), o > 0)) {
      if (++t >= e0) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function o0(e) {
  return function () {
    return e;
  };
}
var To = (function () {
    try {
      var e = Ui(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  s0 = To
    ? function (e, t) {
        return To(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: o0(t),
          writable: !0,
        });
      }
    : Lm,
  i0 = r0(s0),
  a0 = 9007199254740991,
  l0 = /^(?:0|[1-9]\d*)$/;
function Zc(e, t) {
  var n = typeof e;
  return (
    (t = t ?? a0),
    !!t &&
      (n == "number" || (n != "symbol" && l0.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
function u0(e, t, n) {
  t == "__proto__" && To
    ? To(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
function ef(e, t) {
  return e === t || (e !== e && t !== t);
}
var c0 = Object.prototype,
  f0 = c0.hasOwnProperty;
function d0(e, t, n) {
  var r = e[t];
  (!(f0.call(e, t) && ef(r, n)) || (n === void 0 && !(t in e))) && u0(e, t, n);
}
var cl = Math.max;
function h0(e, t, n) {
  return (
    (t = cl(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, o = -1, s = cl(r.length - t, 0), i = Array(s);
        ++o < s;

      )
        i[o] = r[t + o];
      o = -1;
      for (var a = Array(t + 1); ++o < t; ) a[o] = r[o];
      return (a[t] = n(i)), Zm(e, this, a);
    }
  );
}
var p0 = 9007199254740991;
function g0(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= p0;
}
var m0 = "[object Arguments]";
function fl(e) {
  return zi(e) && Hi(e) == m0;
}
var tf = Object.prototype,
  y0 = tf.hasOwnProperty,
  v0 = tf.propertyIsEnumerable,
  nf = fl(
    (function () {
      return arguments;
    })()
  )
    ? fl
    : function (e) {
        return zi(e) && y0.call(e, "callee") && !v0.call(e, "callee");
      },
  b0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  w0 = /^\w*$/;
function _0(e, t) {
  if (Ur(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Vi(e)
    ? !0
    : w0.test(e) || !b0.test(e) || (t != null && e in Object(t));
}
var Lr = Ui(Object, "create");
function x0() {
  (this.__data__ = Lr ? Lr(null) : {}), (this.size = 0);
}
function S0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var C0 = "__lodash_hash_undefined__",
  E0 = Object.prototype,
  T0 = E0.hasOwnProperty;
function k0(e) {
  var t = this.__data__;
  if (Lr) {
    var n = t[e];
    return n === C0 ? void 0 : n;
  }
  return T0.call(t, e) ? t[e] : void 0;
}
var A0 = Object.prototype,
  O0 = A0.hasOwnProperty;
function R0(e) {
  var t = this.__data__;
  return Lr ? t[e] !== void 0 : O0.call(t, e);
}
var P0 = "__lodash_hash_undefined__";
function $0(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = Lr && t === void 0 ? P0 : t),
    this
  );
}
function kn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
kn.prototype.clear = x0;
kn.prototype.delete = S0;
kn.prototype.get = k0;
kn.prototype.has = R0;
kn.prototype.set = $0;
function N0() {
  (this.__data__ = []), (this.size = 0);
}
function Qo(e, t) {
  for (var n = e.length; n--; ) if (ef(e[n][0], t)) return n;
  return -1;
}
var L0 = Array.prototype,
  I0 = L0.splice;
function M0(e) {
  var t = this.__data__,
    n = Qo(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : I0.call(t, n, 1), --this.size, !0;
}
function D0(e) {
  var t = this.__data__,
    n = Qo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function B0(e) {
  return Qo(this.__data__, e) > -1;
}
function F0(e, t) {
  var n = this.__data__,
    r = Qo(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
function or(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
or.prototype.clear = N0;
or.prototype.delete = M0;
or.prototype.get = D0;
or.prototype.has = B0;
or.prototype.set = F0;
var j0 = Ui(ji, "Map");
function H0() {
  (this.size = 0),
    (this.__data__ = {
      hash: new kn(),
      map: new (j0 || or)(),
      string: new kn(),
    });
}
function z0(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
function Xo(e, t) {
  var n = e.__data__;
  return z0(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function V0(e) {
  var t = Xo(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function U0(e) {
  return Xo(this, e).get(e);
}
function q0(e) {
  return Xo(this, e).has(e);
}
function G0(e, t) {
  var n = Xo(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
function On(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
On.prototype.clear = H0;
On.prototype.delete = V0;
On.prototype.get = U0;
On.prototype.has = q0;
On.prototype.set = G0;
var W0 = "Expected a function";
function qi(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(W0);
  var n = function () {
    var r = arguments,
      o = t ? t.apply(this, r) : r[0],
      s = n.cache;
    if (s.has(o)) return s.get(o);
    var i = e.apply(this, r);
    return (n.cache = s.set(o, i) || s), i;
  };
  return (n.cache = new (qi.Cache || On)()), n;
}
qi.Cache = On;
var K0 = 500;
function J0(e) {
  var t = qi(e, function (r) {
      return n.size === K0 && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var Q0 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  X0 = /\\(\\)?/g,
  Y0 = J0(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(Q0, function (n, r, o, s) {
        t.push(o ? s.replace(X0, "$1") : r || n);
      }),
      t
    );
  });
function Z0(e) {
  return e == null ? "" : Yc(e);
}
function Yo(e, t) {
  return Ur(e) ? e : _0(e, t) ? [e] : Y0(Z0(e));
}
var ey = 1 / 0;
function Gi(e) {
  if (typeof e == "string" || Vi(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -ey ? "-0" : t;
}
function ty(e, t) {
  t = Yo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[Gi(t[n++])];
  return n && n == r ? e : void 0;
}
function ny(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
  return e;
}
var dl = on ? on.isConcatSpreadable : void 0;
function ry(e) {
  return Ur(e) || nf(e) || !!(dl && e && e[dl]);
}
function oy(e, t, n, r, o) {
  var s = -1,
    i = e.length;
  for (n || (n = ry), o || (o = []); ++s < i; ) {
    var a = e[s];
    n(a) ? ny(o, a) : (o[o.length] = a);
  }
  return o;
}
function sy(e) {
  var t = e == null ? 0 : e.length;
  return t ? oy(e) : [];
}
function iy(e) {
  return i0(h0(e, void 0, sy), e + "");
}
function ay(e, t) {
  return e != null && t in Object(e);
}
function ly(e, t, n) {
  t = Yo(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var i = Gi(t[r]);
    if (!(s = e != null && n(e, i))) break;
    e = e[i];
  }
  return s || ++r != o
    ? s
    : ((o = e == null ? 0 : e.length),
      !!o && g0(o) && Zc(i, o) && (Ur(e) || nf(e)));
}
function uy(e, t) {
  return e != null && ly(e, t, ay);
}
function cy(e, t, n, r) {
  if (!Eo(e)) return e;
  t = Yo(t, e);
  for (var o = -1, s = t.length, i = s - 1, a = e; a != null && ++o < s; ) {
    var l = Gi(t[o]),
      u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
    if (o != i) {
      var c = a[l];
      (u = void 0), u === void 0 && (u = Eo(c) ? c : Zc(t[o + 1]) ? [] : {});
    }
    d0(a, l, u), (a = a[l]);
  }
  return e;
}
function fy(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var i = t[r],
      a = ty(e, i);
    n(a, i) && cy(s, Yo(i, e), a);
  }
  return s;
}
function dy(e, t) {
  return fy(e, t, function (n, r) {
    return uy(e, r);
  });
}
iy(function (e, t) {
  return e == null ? {} : dy(e, t);
});
new Date().getFullYear();
const hy = $(
    "div",
    {
      class: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    },
    null,
    -1
  ),
  py = { class: "relative bg-white rounded-lg shadow dark:bg-gray-700" },
  gy = $(
    "svg",
    {
      class: "w-5 h-5",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      $("path", {
        "clip-rule": "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        "fill-rule": "evenodd",
      }),
    ],
    -1
  ),
  my = {
    key: 0,
    class: "p-6 rounded-b border-gray-200 border-t dark:border-gray-600",
  },
  yy = ke({
    __name: "FwbModal",
    props: {
      notEscapable: { type: Boolean, default: !1 },
      persistent: { type: Boolean, default: !1 },
      size: { default: "2xl" },
      position: { default: "center" },
    },
    emits: ["close", "click:outside"],
    setup(e, { emit: t }) {
      const n = e,
        r = t,
        o = {
          xs: "max-w-xs",
          sm: "max-w-sm",
          md: "max-w-md",
          lg: "max-w-lg",
          xl: "max-w-xl",
          "2xl": "max-w-2xl",
          "3xl": "max-w-3xl",
          "4xl": "max-w-4xl",
          "5xl": "max-w-5xl",
          "6xl": "max-w-6xl",
          "7xl": "max-w-7xl",
        },
        s = {
          "top-start": "self-start justify-self-start",
          "top-center": "self-start justify-self-center",
          "top-end": "self-start justify-self-end",
          "center-start": "self-center justify-self-start",
          center: "self-center justify-self-center",
          "center-end": "self-center justify-self-end",
          "bottom-start": "self-end justify-self-start",
          "bottom-center": "self-end justify-self-center",
          "bottom-end": "self-end justify-self-end",
        };
      function i() {
        r("close");
      }
      function a() {
        n.persistent || (r("click:outside"), i());
      }
      function l() {
        !n.notEscapable && !n.persistent && i();
      }
      const u = Gu(null);
      return (
        Li(() => {
          u.value && u.value.focus();
        }),
        (c, f) => (
          N(),
          z("div", null, [
            hy,
            $(
              "div",
              {
                ref_key: "modalRef",
                ref: u,
                class:
                  "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full grid",
                tabindex: "0",
                onClick: Hc(a, ["self"]),
                onKeyup: zc(l, ["esc"]),
              },
              [
                $(
                  "div",
                  {
                    class: pe([
                      `${o[c.size]} ${s[c.position]}`,
                      "relative p-4 w-full",
                    ]),
                  },
                  [
                    $("div", py, [
                      $(
                        "div",
                        {
                          class: pe([
                            c.$slots.header
                              ? "border-b border-gray-200 dark:border-gray-600"
                              : "",
                            "p-4 rounded-t flex justify-between items-center",
                          ]),
                        },
                        [
                          he(c.$slots, "header"),
                          c.persistent
                            ? Z("", !0)
                            : (N(),
                              z(
                                "button",
                                {
                                  key: 0,
                                  "aria-label": "close",
                                  class:
                                    "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
                                  type: "button",
                                  onClick: i,
                                },
                                [he(c.$slots, "close-icon", {}, () => [gy])]
                              )),
                        ],
                        2
                      ),
                      $(
                        "div",
                        { class: pe([c.$slots.header ? "" : "pt-0", "p-6"]) },
                        [he(c.$slots, "body")],
                        2
                      ),
                      c.$slots.footer
                        ? (N(), z("div", my, [he(c.$slots, "footer")]))
                        : Z("", !0),
                    ]),
                  ],
                  2
                ),
              ],
              544
            ),
          ])
        )
      );
    },
  }),
  vy = { "aria-label": "Navigation" },
  by = { class: "font-semibold text-gray-900 dark:text-white" },
  wy = { class: "font-semibold text-gray-900 dark:text-white" },
  _y = { class: "font-semibold text-gray-900 dark:text-white" },
  xy = ["disabled"],
  Sy = ["disabled"],
  Cy = {
    key: 0,
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    class: "h-5 w-5",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ey = $(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
      "clip-rule": "evenodd",
    },
    null,
    -1
  ),
  Ty = [Ey],
  ky = ["disabled", "onClick"],
  Ay = ["disabled"],
  Oy = {
    key: 0,
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-width": "0",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    class: "h-5 w-5",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ry = $(
    "path",
    {
      "fill-rule": "evenodd",
      d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      "clip-rule": "evenodd",
    },
    null,
    -1
  ),
  Py = [Ry],
  $y = ["disabled"],
  Ux = ke({
    __name: "FwbPagination",
    props: {
      modelValue: { default: 1 },
      totalPages: { default: void 0 },
      perPage: { default: 10 },
      totalItems: { default: 10 },
      layout: { default: "pagination" },
      showIcons: { type: Boolean, default: !1 },
      sliceLength: { default: 2 },
      previousLabel: { default: "Prev" },
      nextLabel: { default: "Next" },
      enableFirstAndLastButtons: { type: Boolean, default: !1 },
      showLabels: { type: Boolean, default: !0 },
      large: { type: Boolean, default: !1 },
    },
    emits: ["update:model-value", "page-changed"],
    setup(e, { emit: t }) {
      const n = t,
        r = e;
      function o(S) {
        n("update:model-value", S), n("page-changed", S);
      }
      function s() {
        n("update:model-value", r.modelValue - 1),
          n("page-changed", r.modelValue - 1);
      }
      function i() {
        n("update:model-value", r.modelValue + 1),
          n("page-changed", r.modelValue + 1);
      }
      function a() {
        n("update:model-value", 1), n("page-changed", 1);
      }
      function l() {
        const S = u.value;
        n("update:model-value", S), n("page-changed", S);
      }
      const u = X(() =>
          r.totalPages ? r.totalPages : Math.ceil(r.totalItems / r.perPage)
        ),
        c = X(() => r.modelValue <= 1),
        f = X(() => r.modelValue >= u.value),
        d = (S) => S === r.modelValue,
        p = X(() => {
          if (r.layout === "navigation") return [];
          if (r.layout === "table") return [];
          if (u.value <= r.sliceLength * 2 + 1) {
            const L = [];
            for (let G = 1; G <= u.value; G++) L.push(G);
            return L;
          }
          if (r.modelValue <= r.sliceLength) {
            const L = [],
              G =
                Math.abs(r.modelValue - r.sliceLength) +
                r.modelValue +
                r.sliceLength +
                1;
            for (let B = 1; B <= G; B++) L.push(B);
            return L;
          }
          if (r.modelValue >= u.value - r.sliceLength) {
            const L = [];
            for (
              let G = Math.abs(u.value - r.sliceLength * 2);
              G <= u.value;
              G++
            )
              L.push(G);
            return L;
          }
          const S = [],
            V =
              r.modelValue - r.sliceLength > 0
                ? r.modelValue - r.sliceLength
                : 1;
          for (
            let L = V;
            L < r.modelValue + r.sliceLength + 1 && !(L >= u.value);
            L++
          )
            S.push(L);
          return S;
        }),
        m = X(() => r.modelValue * r.perPage - r.perPage + 1),
        y = X(() => {
          const S = r.modelValue * r.perPage;
          return r.totalItems && S > r.totalItems ? r.totalItems : S;
        }),
        v = X(() => (r.totalItems ? r.totalItems : u.value * r.perPage)),
        _ = X(() => r.modelValue === 1),
        x = X(() => r.modelValue === u.value);
      function T(S) {
        return Nr(
          "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
          S &&
            "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white",
          r.large && "px-4 h-10"
        );
      }
      function k(S) {
        const V =
            "flex items-center justify-center first:rounded-l-lg last:rounded-r-lg px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
          L =
            "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white cursor-not-allowed";
        return Nr(
          V,
          S === r.modelValue && L,
          r.large && "px-4 h-10",
          (S > u.value || S < 1) && L,
          r.layout === "navigation" && "first:mr-3",
          (r.layout === "navigation" || r.layout === "table") && "rounded-lg",
          r.layout === "table" &&
            "border-none text-white hover:text-white bg-gray-800 rounded-none first:rounded-l last:rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        );
      }
      return (S, V) => (
        N(),
        z("nav", vy, [
          S.layout === "table"
            ? (N(),
              z(
                "div",
                {
                  key: 0,
                  class: pe([
                    "text-gray-700 dark:text-gray-400 mb-2",
                    S.large ? "text-base" : "text-sm",
                  ]),
                },
                [
                  Se(" Showing "),
                  $("span", by, lt(m.value), 1),
                  Se(" to "),
                  $("span", wy, lt(y.value), 1),
                  Se(" of "),
                  $("span", _y, lt(v.value), 1),
                ],
                2
              ))
            : Z("", !0),
          $(
            "div",
            { class: pe(["inline-flex", S.large && "text-base h-10"]) },
            [
              he(S.$slots, "start"),
              S.enableFirstAndLastButtons
                ? he(S.$slots, "first-button", { key: 0 }, () => [
                    $(
                      "button",
                      { disabled: _.value, class: pe(k(1)), onClick: a },
                      " First ",
                      10,
                      xy
                    ),
                  ])
                : Z("", !0),
              he(
                S.$slots,
                "prev-button",
                { disabled: c.value, decreasePage: s },
                () => [
                  $(
                    "button",
                    {
                      disabled: c.value,
                      class: pe(k(S.modelValue - 1)),
                      onClick: s,
                    },
                    [
                      he(S.$slots, "prev-icon", {}, () => [
                        S.showIcons || S.$slots["prev-icon"]
                          ? (N(), z("svg", Cy, Ty))
                          : Z("", !0),
                      ]),
                      S.showLabels
                        ? (N(),
                          z(Pe, { key: 0 }, [Se(lt(S.previousLabel), 1)], 64))
                        : Z("", !0),
                    ],
                    10,
                    Sy
                  ),
                ]
              ),
              (N(!0),
              z(
                Pe,
                null,
                qs(p.value, (L) =>
                  he(
                    S.$slots,
                    "page-button",
                    { key: L, page: L, setPage: o, disabled: d(L) },
                    () => [
                      $(
                        "button",
                        {
                          disabled: d(L),
                          class: pe(T(L === S.modelValue)),
                          onClick: (G) => o(L),
                        },
                        lt(L),
                        11,
                        ky
                      ),
                    ]
                  )
                ),
                128
              )),
              he(
                S.$slots,
                "next-button",
                { disabled: f.value, increasePage: i },
                () => [
                  $(
                    "button",
                    {
                      disabled: f.value,
                      class: pe(k(S.modelValue + 1)),
                      onClick: i,
                    },
                    [
                      S.showLabels
                        ? (N(), z(Pe, { key: 0 }, [Se(lt(S.nextLabel), 1)], 64))
                        : Z("", !0),
                      he(S.$slots, "next-icon", {}, () => [
                        S.showIcons || S.$slots["next-icon"]
                          ? (N(), z("svg", Oy, Py))
                          : Z("", !0),
                      ]),
                    ],
                    10,
                    Ay
                  ),
                ]
              ),
              S.enableFirstAndLastButtons
                ? he(S.$slots, "last-button", { key: 1 }, () => [
                    $(
                      "button",
                      { disabled: x.value, class: pe(k(u.value)), onClick: l },
                      " Last ",
                      10,
                      $y
                    ),
                  ])
                : Z("", !0),
              he(S.$slots, "end"),
            ],
            2
          ),
        ])
      );
    },
  }),
  Ny = { class: "relative overflow-x-auto shadow-md sm:rounded-lg" },
  Ly = { class: "w-full text-sm text-left text-gray-500 dark:text-gray-400" },
  qx = ke({
    __name: "FwbTable",
    props: {
      striped: { type: Boolean, default: !1 },
      stripedColumns: { type: Boolean, default: !1 },
      hoverable: { type: Boolean, default: !1 },
    },
    setup(e) {
      const t = e;
      return (
        xn("hoverable", t.hoverable),
        xn("striped", t.striped),
        xn("stripedColumns", t.stripedColumns),
        (n, r) => (
          N(), z("div", Ny, [$("table", Ly, [he(n.$slots, "default")])])
        )
      );
    },
  }),
  Iy = {};
function My(e, t) {
  return N(), z("tbody", null, [he(e.$slots, "default")]);
}
const Gx = Jc(Iy, [["render", My]]),
  Dy =
    "px-6 py-4 first:font-medium first:text-gray-900 first:dark:text-white first:whitespace-nowrap last:text-right",
  By =
    "even:bg-gray-white even:dark:bg-gray-900 odd:dark:bg-gray-800 odd:bg-gray-50";
function Fy() {
  const e = qe("stripedColumns");
  return { tableCellClasses: X(() => Jo(Dy, { [By]: e })) };
}
const Wx = ke({
    __name: "FwbTableCell",
    setup(e) {
      const { tableCellClasses: t } = Fy();
      return (n, r) => (
        N(), z("td", { class: pe(be(t)) }, [he(n.$slots, "default")], 2)
      );
    },
  }),
  jy = {},
  Hy = {
    class:
      "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
  };
function zy(e, t) {
  return N(), z("thead", Hy, [$("tr", null, [he(e.$slots, "default")])]);
}
const Kx = Jc(jy, [["render", zy]]),
  Vy = "px-6 py-3 text-xs uppercase",
  Uy =
    "even:bg-white even:dark:bg-gray-900 odd:dark:bg-gray-800 odd:bg-gray-50";
function qy() {
  const e = qe("stripedColumns");
  return { tableHeadCellClasses: X(() => Jo(Vy, { [Uy]: e })) };
}
const Jx = ke({
    __name: "FwbTableHeadCell",
    setup(e) {
      const { tableHeadCellClasses: t } = qy();
      return (n, r) => (
        N(),
        z(
          "th",
          { scope: "col", class: pe(be(t)) },
          [he(n.$slots, "default")],
          2
        )
      );
    },
  }),
  Gy =
    "bg-white dark:bg-gray-800 [&:not(:last-child)]:border-b [&:not(:last-child)]:dark:border-gray-700",
  Wy =
    "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
  Ky = "hover:bg-gray-50 dark:hover:bg-gray-600";
function Jy() {
  const e = qe("striped"),
    t = qe("hoverable");
  return { tableRowClasses: X(() => Jo(Gy, { [Ky]: t, [Wy]: e })) };
}
const Qx = ke({
    __name: "FwbTableRow",
    setup(e) {
      const { tableRowClasses: t } = Jy();
      return (n, r) => (
        N(), z("tr", { class: pe(be(t)) }, [he(n.$slots, "default")], 2)
      );
    },
  }),
  Qy = ["top", "right", "bottom", "left"],
  hl = ["start", "end"],
  pl = Qy.reduce((e, t) => e.concat(t, t + "-" + hl[0], t + "-" + hl[1]), []),
  vn = Math.min,
  mn = Math.max,
  Xy = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Yy = { start: "end", end: "start" };
function Zs(e, t, n) {
  return mn(e, vn(t, n));
}
function Rn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pt(e) {
  return e.split("-")[0];
}
function yt(e) {
  return e.split("-")[1];
}
function rf(e) {
  return e === "x" ? "y" : "x";
}
function Wi(e) {
  return e === "y" ? "height" : "width";
}
function qr(e) {
  return ["top", "bottom"].includes(Pt(e)) ? "y" : "x";
}
function Ki(e) {
  return rf(qr(e));
}
function of(e, t, n) {
  n === void 0 && (n = !1);
  const r = yt(e),
    o = Ki(e),
    s = Wi(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = Ao(i)), [i, Ao(i)];
}
function Zy(e) {
  const t = Ao(e);
  return [ko(e), t, ko(t)];
}
function ko(e) {
  return e.replace(/start|end/g, (t) => Yy[t]);
}
function ev(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    s = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function tv(e, t, n, r) {
  const o = yt(e);
  let s = ev(Pt(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(ko)))), s
  );
}
function Ao(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xy[t]);
}
function nv(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function sf(e) {
  return typeof e != "number"
    ? nv(e)
    : { top: e, right: e, bottom: e, left: e };
}
function wr(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function gl(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = qr(t),
    i = Ki(t),
    a = Wi(i),
    l = Pt(t),
    u = s === "y",
    c = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    d = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: c, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: f };
      break;
    case "left":
      p = { x: r.x - o.width, y: f };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (yt(t)) {
    case "start":
      p[i] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      p[i] += d * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const rv = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    a = s.filter(Boolean),
    l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: f } = gl(u, r, l),
    d = r,
    p = {},
    m = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: _ } = a[y],
      {
        x,
        y: T,
        data: k,
        reset: S,
      } = await _({
        x: c,
        y: f,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: p,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (c = x ?? c),
      (f = T ?? f),
      (p = { ...p, [v]: { ...p[v], ...k } }),
      S &&
        m <= 50 &&
        (m++,
        typeof S == "object" &&
          (S.placement && (d = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : S.rects),
          ({ x: c, y: f } = gl(u, d, l))),
        (y = -1));
  }
  return { x: c, y: f, placement: d, strategy: o, middlewareData: p };
};
async function Zo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: d = !1,
      padding: p = 0,
    } = Rn(t, e),
    m = sf(p),
    y = a[d ? (f === "floating" ? "reference" : "floating") : f],
    v = wr(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null ||
          n
            ? y
            : y.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      })
    ),
    _ =
      f === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    x = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    T = (await (s.isElement == null ? void 0 : s.isElement(x)))
      ? (await (s.getScale == null ? void 0 : s.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    k = wr(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: _,
            offsetParent: x,
            strategy: l,
          })
        : _
    );
  return {
    top: (v.top - k.top + m.top) / T.y,
    bottom: (k.bottom - v.bottom + m.bottom) / T.y,
    left: (v.left - k.left + m.left) / T.x,
    right: (k.right - v.right + m.right) / T.x,
  };
}
const ov = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        platform: i,
        elements: a,
        middlewareData: l,
      } = t,
      { element: u, padding: c = 0 } = Rn(e, t) || {};
    if (u == null) return {};
    const f = sf(c),
      d = { x: n, y: r },
      p = Ki(o),
      m = Wi(p),
      y = await i.getDimensions(u),
      v = p === "y",
      _ = v ? "top" : "left",
      x = v ? "bottom" : "right",
      T = v ? "clientHeight" : "clientWidth",
      k = s.reference[m] + s.reference[p] - d[p] - s.floating[m],
      S = d[p] - s.reference[p],
      V = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let L = V ? V[T] : 0;
    (!L || !(await (i.isElement == null ? void 0 : i.isElement(V)))) &&
      (L = a.floating[T] || s.floating[m]);
    const G = k / 2 - S / 2,
      B = L / 2 - y[m] / 2 - 1,
      J = vn(f[_], B),
      te = vn(f[x], B),
      A = J,
      se = L - y[m] - te,
      ie = L / 2 - y[m] / 2 + G,
      Ce = Zs(A, ie, se),
      ae =
        !l.arrow &&
        yt(o) != null &&
        ie !== Ce &&
        s.reference[m] / 2 - (ie < A ? J : te) - y[m] / 2 < 0,
      ne = ae ? (ie < A ? ie - A : ie - se) : 0;
    return {
      [p]: d[p] + ne,
      data: {
        [p]: Ce,
        centerOffset: ie - Ce - ne,
        ...(ae && { alignmentOffset: ne }),
      },
      reset: ae,
    };
  },
});
function sv(e, t, n) {
  return (
    e
      ? [...n.filter((r) => yt(r) === e), ...n.filter((r) => yt(r) !== e)]
      : n.filter((r) => Pt(r) === r)
  ).filter((r) => (e ? yt(r) === e || (t ? ko(r) !== r : !1) : !0));
}
const iv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "autoPlacement",
        options: e,
        async fn(t) {
          var n, r, o;
          const {
              rects: s,
              middlewareData: i,
              placement: a,
              platform: l,
              elements: u,
            } = t,
            {
              crossAxis: c = !1,
              alignment: f,
              allowedPlacements: d = pl,
              autoAlignment: p = !0,
              ...m
            } = Rn(e, t),
            y = f !== void 0 || d === pl ? sv(f || null, p, d) : d,
            v = await Zo(t, m),
            _ = ((n = i.autoPlacement) == null ? void 0 : n.index) || 0,
            x = y[_];
          if (x == null) return {};
          const T = of(
            x,
            s,
            await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
          );
          if (a !== x) return { reset: { placement: y[0] } };
          const k = [v[Pt(x)], v[T[0]], v[T[1]]],
            S = [
              ...(((r = i.autoPlacement) == null ? void 0 : r.overflows) || []),
              { placement: x, overflows: k },
            ],
            V = y[_ + 1];
          if (V)
            return {
              data: { index: _ + 1, overflows: S },
              reset: { placement: V },
            };
          const L = S.map((B) => {
              const J = yt(B.placement);
              return [
                B.placement,
                J && c
                  ? B.overflows.slice(0, 2).reduce((te, A) => te + A, 0)
                  : B.overflows[0],
                B.overflows,
              ];
            }).sort((B, J) => B[1] - J[1]),
            G =
              ((o = L.filter((B) =>
                B[2].slice(0, yt(B[0]) ? 2 : 3).every((J) => J <= 0)
              )[0]) == null
                ? void 0
                : o[0]) || L[0][0];
          return G !== a
            ? { data: { index: _ + 1, overflows: S }, reset: { placement: G } }
            : {};
        },
      }
    );
  },
  av = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: d,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: m = "none",
              flipAlignment: y = !0,
              ...v
            } = Rn(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const _ = Pt(o),
            x = Pt(a) === a,
            T = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            k = d || (x || !y ? [Ao(a)] : Zy(a));
          !d && m !== "none" && k.push(...tv(a, y, m, T));
          const S = [a, ...k],
            V = await Zo(t, v),
            L = [];
          let G = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((c && L.push(V[_]), f)) {
            const A = of(o, i, T);
            L.push(V[A[0]], V[A[1]]);
          }
          if (
            ((G = [...G, { placement: o, overflows: L }]),
            !L.every((A) => A <= 0))
          ) {
            var B, J;
            const A = (((B = s.flip) == null ? void 0 : B.index) || 0) + 1,
              se = S[A];
            if (se)
              return {
                data: { index: A, overflows: G },
                reset: { placement: se },
              };
            let ie =
              (J = G.filter((Ce) => Ce.overflows[0] <= 0).sort(
                (Ce, ae) => Ce.overflows[1] - ae.overflows[1]
              )[0]) == null
                ? void 0
                : J.placement;
            if (!ie)
              switch (p) {
                case "bestFit": {
                  var te;
                  const Ce =
                    (te = G.map((ae) => [
                      ae.placement,
                      ae.overflows
                        .filter((ne) => ne > 0)
                        .reduce((ne, le) => ne + le, 0),
                    ]).sort((ae, ne) => ae[1] - ne[1])[0]) == null
                      ? void 0
                      : te[0];
                  Ce && (ie = Ce);
                  break;
                }
                case "initialPlacement":
                  ie = a;
                  break;
              }
            if (o !== ie) return { reset: { placement: ie } };
          }
          return {};
        },
      }
    );
  };
async function lv(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Pt(n),
    a = yt(n),
    l = qr(n) === "y",
    u = ["left", "top"].includes(i) ? -1 : 1,
    c = s && l ? -1 : 1,
    f = Rn(t, e);
  let {
    mainAxis: d,
    crossAxis: p,
    alignmentAxis: m,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    a && typeof m == "number" && (p = a === "end" ? m * -1 : m),
    l ? { x: p * c, y: d * u } : { x: d * u, y: p * c }
  );
}
const uv = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: a } = t,
            l = await lv(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: s + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  cv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (v) => {
                  let { x: _, y: x } = v;
                  return { x: _, y: x };
                },
              },
              ...l
            } = Rn(e, t),
            u = { x: n, y: r },
            c = await Zo(t, l),
            f = qr(Pt(o)),
            d = rf(f);
          let p = u[d],
            m = u[f];
          if (s) {
            const v = d === "y" ? "top" : "left",
              _ = d === "y" ? "bottom" : "right",
              x = p + c[v],
              T = p - c[_];
            p = Zs(x, p, T);
          }
          if (i) {
            const v = f === "y" ? "top" : "left",
              _ = f === "y" ? "bottom" : "right",
              x = m + c[v],
              T = m - c[_];
            m = Zs(x, m, T);
          }
          const y = a.fn({ ...t, [d]: p, [f]: m });
          return { ...y, data: { x: y.x - n, y: y.y - r } };
        },
      }
    );
  },
  fv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: s } = t,
            { apply: i = () => {}, ...a } = Rn(e, t),
            l = await Zo(t, a),
            u = Pt(n),
            c = yt(n),
            f = qr(n) === "y",
            { width: d, height: p } = r.floating;
          let m, y;
          u === "top" || u === "bottom"
            ? ((m = u),
              (y =
                c ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = u), (m = c === "end" ? "top" : "bottom"));
          const v = p - l.top - l.bottom,
            _ = d - l.left - l.right,
            x = vn(p - l[m], v),
            T = vn(d - l[y], _),
            k = !t.middlewareData.shift;
          let S = x,
            V = T;
          if (
            (f ? (V = c || k ? vn(T, _) : _) : (S = c || k ? vn(x, v) : v),
            k && !c)
          ) {
            const G = mn(l.left, 0),
              B = mn(l.right, 0),
              J = mn(l.top, 0),
              te = mn(l.bottom, 0);
            f
              ? (V = d - 2 * (G !== 0 || B !== 0 ? G + B : mn(l.left, l.right)))
              : (S =
                  p - 2 * (J !== 0 || te !== 0 ? J + te : mn(l.top, l.bottom)));
          }
          await i({ ...t, availableWidth: V, availableHeight: S });
          const L = await o.getDimensions(s.floating);
          return d !== L.width || p !== L.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ut(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  return ut(e).getComputedStyle(e);
}
const ml = Math.min,
  _r = Math.max,
  Oo = Math.round;
function af(e) {
  const t = At(e);
  let n = parseFloat(t.width),
    r = parseFloat(t.height);
  const o = e.offsetWidth,
    s = e.offsetHeight,
    i = Oo(n) !== o || Oo(r) !== s;
  return i && ((n = o), (r = s)), { width: n, height: r, fallback: i };
}
function sn(e) {
  return uf(e) ? (e.nodeName || "").toLowerCase() : "";
}
let so;
function lf() {
  if (so) return so;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? ((so = e.brands.map((t) => t.brand + "/" + t.version).join(" ")), so)
    : navigator.userAgent;
}
function Ot(e) {
  return e instanceof ut(e).HTMLElement;
}
function tn(e) {
  return e instanceof ut(e).Element;
}
function uf(e) {
  return e instanceof ut(e).Node;
}
function yl(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ut(e).ShadowRoot || e instanceof ShadowRoot;
}
function es(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = At(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function dv(e) {
  return ["table", "td", "th"].includes(sn(e));
}
function ei(e) {
  const t = /firefox/i.test(lf()),
    n = At(e),
    r = n.backdropFilter || n.WebkitBackdropFilter;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (!!r && r !== "none") ||
    (t && n.willChange === "filter") ||
    (t && !!n.filter && n.filter !== "none") ||
    ["transform", "perspective"].some((o) => n.willChange.includes(o)) ||
    ["paint", "layout", "strict", "content"].some((o) => {
      const s = n.contain;
      return s != null && s.includes(o);
    })
  );
}
function cf() {
  return !/^((?!chrome|android).)*safari/i.test(lf());
}
function Ji(e) {
  return ["html", "body", "#document"].includes(sn(e));
}
function ff(e) {
  return tn(e) ? e : e.contextElement;
}
const df = { x: 1, y: 1 };
function Qn(e) {
  const t = ff(e);
  if (!Ot(t)) return df;
  const n = t.getBoundingClientRect(),
    { width: r, height: o, fallback: s } = af(t);
  let i = (s ? Oo(n.width) : n.width) / r,
    a = (s ? Oo(n.height) : n.height) / o;
  return (
    (i && Number.isFinite(i)) || (i = 1),
    (a && Number.isFinite(a)) || (a = 1),
    { x: i, y: a }
  );
}
function Ir(e, t, n, r) {
  var o, s;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    a = ff(e);
  let l = df;
  t && (r ? tn(r) && (l = Qn(r)) : (l = Qn(e)));
  const u = a ? ut(a) : window,
    c = !cf() && n;
  let f =
      (i.left +
        ((c && ((o = u.visualViewport) == null ? void 0 : o.offsetLeft)) ||
          0)) /
      l.x,
    d =
      (i.top +
        ((c && ((s = u.visualViewport) == null ? void 0 : s.offsetTop)) || 0)) /
      l.y,
    p = i.width / l.x,
    m = i.height / l.y;
  if (a) {
    const y = ut(a),
      v = r && tn(r) ? ut(r) : r;
    let _ = y.frameElement;
    for (; _ && r && v !== y; ) {
      const x = Qn(_),
        T = _.getBoundingClientRect(),
        k = getComputedStyle(_);
      (T.x += (_.clientLeft + parseFloat(k.paddingLeft)) * x.x),
        (T.y += (_.clientTop + parseFloat(k.paddingTop)) * x.y),
        (f *= x.x),
        (d *= x.y),
        (p *= x.x),
        (m *= x.y),
        (f += T.x),
        (d += T.y),
        (_ = ut(_).frameElement);
    }
  }
  return {
    width: p,
    height: m,
    top: d,
    right: f + p,
    bottom: d + m,
    left: f,
    x: f,
    y: d,
  };
}
function nn(e) {
  return ((uf(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function ts(e) {
  return tn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function hf(e) {
  return Ir(nn(e)).left + ts(e).scrollLeft;
}
function Mr(e) {
  if (sn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (yl(e) && e.host) || nn(e);
  return yl(t) ? t.host : t;
}
function pf(e) {
  const t = Mr(e);
  return Ji(t) ? t.ownerDocument.body : Ot(t) && es(t) ? t : pf(t);
}
function Ro(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = pf(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    s = ut(r);
  return o
    ? t.concat(s, s.visualViewport || [], es(r) ? r : [])
    : t.concat(r, Ro(r));
}
function vl(e, t, n) {
  return t === "viewport"
    ? wr(
        (function (r, o) {
          const s = ut(r),
            i = nn(r),
            a = s.visualViewport;
          let l = i.clientWidth,
            u = i.clientHeight,
            c = 0,
            f = 0;
          if (a) {
            (l = a.width), (u = a.height);
            const d = cf();
            (d || (!d && o === "fixed")) &&
              ((c = a.offsetLeft), (f = a.offsetTop));
          }
          return { width: l, height: u, x: c, y: f };
        })(e, n)
      )
    : tn(t)
    ? wr(
        (function (r, o) {
          const s = Ir(r, !0, o === "fixed"),
            i = s.top + r.clientTop,
            a = s.left + r.clientLeft,
            l = Ot(r) ? Qn(r) : { x: 1, y: 1 };
          return {
            width: r.clientWidth * l.x,
            height: r.clientHeight * l.y,
            x: a * l.x,
            y: i * l.y,
          };
        })(t, n)
      )
    : wr(
        (function (r) {
          const o = nn(r),
            s = ts(r),
            i = r.ownerDocument.body,
            a = _r(o.scrollWidth, o.clientWidth, i.scrollWidth, i.clientWidth),
            l = _r(
              o.scrollHeight,
              o.clientHeight,
              i.scrollHeight,
              i.clientHeight
            );
          let u = -s.scrollLeft + hf(r);
          const c = -s.scrollTop;
          return (
            At(i).direction === "rtl" &&
              (u += _r(o.clientWidth, i.clientWidth) - a),
            { width: a, height: l, x: u, y: c }
          );
        })(nn(e))
      );
}
function bl(e) {
  return Ot(e) && At(e).position !== "fixed" ? e.offsetParent : null;
}
function wl(e) {
  const t = ut(e);
  let n = bl(e);
  for (; n && dv(n) && At(n).position === "static"; ) n = bl(n);
  return n &&
    (sn(n) === "html" ||
      (sn(n) === "body" && At(n).position === "static" && !ei(n)))
    ? t
    : n ||
        (function (r) {
          let o = Mr(r);
          for (; Ot(o) && !Ji(o); ) {
            if (ei(o)) return o;
            o = Mr(o);
          }
          return null;
        })(e) ||
        t;
}
function hv(e, t, n) {
  const r = Ot(t),
    o = nn(t),
    s = Ir(e, !0, n === "fixed", t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || (!r && n !== "fixed"))
    if (((sn(t) !== "body" || es(o)) && (i = ts(t)), Ot(t))) {
      const l = Ir(t, !0);
      (a.x = l.x + t.clientLeft), (a.y = l.y + t.clientTop);
    } else o && (a.x = hf(o));
  return {
    x: s.left + i.scrollLeft - a.x,
    y: s.top + i.scrollTop - a.y,
    width: s.width,
    height: s.height,
  };
}
const pv = {
    getClippingRect: function (e) {
      let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
      const s =
          n === "clippingAncestors"
            ? (function (u, c) {
                const f = c.get(u);
                if (f) return f;
                let d = Ro(u).filter((v) => tn(v) && sn(v) !== "body"),
                  p = null;
                const m = At(u).position === "fixed";
                let y = m ? Mr(u) : u;
                for (; tn(y) && !Ji(y); ) {
                  const v = At(y),
                    _ = ei(y);
                  (
                    m
                      ? _ || p
                      : _ ||
                        v.position !== "static" ||
                        !p ||
                        !["absolute", "fixed"].includes(p.position)
                  )
                    ? (p = v)
                    : (d = d.filter((x) => x !== y)),
                    (y = Mr(y));
                }
                return c.set(u, d), d;
              })(t, this._c)
            : [].concat(n),
        i = [...s, r],
        a = i[0],
        l = i.reduce((u, c) => {
          const f = vl(t, c, o);
          return (
            (u.top = _r(f.top, u.top)),
            (u.right = ml(f.right, u.right)),
            (u.bottom = ml(f.bottom, u.bottom)),
            (u.left = _r(f.left, u.left)),
            u
          );
        }, vl(t, a, o));
      return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top,
      };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
      let { rect: t, offsetParent: n, strategy: r } = e;
      const o = Ot(n),
        s = nn(n);
      if (n === s) return t;
      let i = { scrollLeft: 0, scrollTop: 0 },
        a = { x: 1, y: 1 };
      const l = { x: 0, y: 0 };
      if (
        (o || (!o && r !== "fixed")) &&
        ((sn(n) !== "body" || es(s)) && (i = ts(n)), Ot(n))
      ) {
        const u = Ir(n);
        (a = Qn(n)), (l.x = u.x + n.clientLeft), (l.y = u.y + n.clientTop);
      }
      return {
        width: t.width * a.x,
        height: t.height * a.y,
        x: t.x * a.x - i.scrollLeft * a.x + l.x,
        y: t.y * a.y - i.scrollTop * a.y + l.y,
      };
    },
    isElement: tn,
    getDimensions: function (e) {
      return Ot(e) ? af(e) : e.getBoundingClientRect();
    },
    getOffsetParent: wl,
    getDocumentElement: nn,
    getScale: Qn,
    async getElementRects(e) {
      let { reference: t, floating: n, strategy: r } = e;
      const o = this.getOffsetParent || wl,
        s = this.getDimensions;
      return {
        reference: hv(t, await o(n), r),
        floating: { x: 0, y: 0, ...(await s(n)) },
      };
    },
    getClientRects: (e) => Array.from(e.getClientRects()),
    isRTL: (e) => At(e).direction === "rtl",
  },
  gv = (e, t, n) => {
    const r = new Map(),
      o = { platform: pv, ...n },
      s = { ...o.platform, _c: r };
    return rv(e, t, { ...o, platform: s });
  },
  Sn = {
    disabled: !1,
    distance: 5,
    skidding: 0,
    container: "body",
    boundary: void 0,
    instantMove: !1,
    disposeTimeout: 150,
    popperTriggers: [],
    strategy: "absolute",
    preventOverflow: !0,
    flip: !0,
    shift: !0,
    overflowPadding: 0,
    arrowPadding: 0,
    arrowOverflow: !0,
    autoHideOnMousedown: !1,
    themes: {
      tooltip: {
        placement: "top",
        triggers: ["hover", "focus", "touch"],
        hideTriggers: (e) => [...e, "click"],
        delay: { show: 200, hide: 0 },
        handleResize: !1,
        html: !1,
        loadingContent: "...",
      },
      dropdown: {
        placement: "bottom",
        triggers: ["click"],
        delay: 0,
        handleResize: !0,
        autoHide: !0,
      },
      menu: {
        $extend: "dropdown",
        triggers: ["hover", "focus"],
        popperTriggers: ["hover"],
        delay: { show: 0, hide: 400 },
      },
    },
  };
function ti(e, t) {
  let n = Sn.themes[e] || {},
    r;
  do
    (r = n[t]),
      typeof r > "u"
        ? n.$extend
          ? (n = Sn.themes[n.$extend] || {})
          : ((n = null), (r = Sn[t]))
        : (n = null);
  while (n);
  return r;
}
function mv(e) {
  const t = [e];
  let n = Sn.themes[e] || {};
  do
    n.$extend && !n.$resetCss
      ? (t.push(n.$extend), (n = Sn.themes[n.$extend] || {}))
      : (n = null);
  while (n);
  return t.map((r) => `v-popper--theme-${r}`);
}
function _l(e) {
  const t = [e];
  let n = Sn.themes[e] || {};
  do
    n.$extend
      ? (t.push(n.$extend), (n = Sn.themes[n.$extend] || {}))
      : (n = null);
  while (n);
  return t;
}
let Dr = !1;
if (typeof window < "u") {
  Dr = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Dr = !0;
      },
    });
    window.addEventListener("test", null, e);
  } catch {}
}
let gf = !1;
typeof window < "u" &&
  typeof navigator < "u" &&
  (gf = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const yv = ["auto", "top", "bottom", "left", "right"].reduce(
    (e, t) => e.concat([t, `${t}-start`, `${t}-end`]),
    []
  ),
  xl = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown",
  },
  Sl = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup",
  };
function Cl(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function As() {
  return new Promise((e) =>
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    })
  );
}
const pt = [];
let pn = null;
const El = {};
function Tl(e) {
  let t = El[e];
  return t || (t = El[e] = []), t;
}
let ni = function () {};
typeof window < "u" && (ni = window.Element);
function ce(e) {
  return function (t) {
    return ti(t.theme, e);
  };
}
const Os = "__floating-vue__popper",
  mf = () =>
    ke({
      name: "VPopper",
      provide() {
        return { [Os]: { parentPopper: this } };
      },
      inject: { [Os]: { default: null } },
      props: {
        theme: { type: String, required: !0 },
        targetNodes: { type: Function, required: !0 },
        referenceNode: { type: Function, default: null },
        popperNode: { type: Function, required: !0 },
        shown: { type: Boolean, default: !1 },
        showGroup: { type: String, default: null },
        ariaId: { default: null },
        disabled: { type: Boolean, default: ce("disabled") },
        positioningDisabled: {
          type: Boolean,
          default: ce("positioningDisabled"),
        },
        placement: {
          type: String,
          default: ce("placement"),
          validator: (e) => yv.includes(e),
        },
        delay: { type: [String, Number, Object], default: ce("delay") },
        distance: { type: [Number, String], default: ce("distance") },
        skidding: { type: [Number, String], default: ce("skidding") },
        triggers: { type: Array, default: ce("triggers") },
        showTriggers: { type: [Array, Function], default: ce("showTriggers") },
        hideTriggers: { type: [Array, Function], default: ce("hideTriggers") },
        popperTriggers: { type: Array, default: ce("popperTriggers") },
        popperShowTriggers: {
          type: [Array, Function],
          default: ce("popperShowTriggers"),
        },
        popperHideTriggers: {
          type: [Array, Function],
          default: ce("popperHideTriggers"),
        },
        container: {
          type: [String, Object, ni, Boolean],
          default: ce("container"),
        },
        boundary: { type: [String, ni], default: ce("boundary") },
        strategy: {
          type: String,
          validator: (e) => ["absolute", "fixed"].includes(e),
          default: ce("strategy"),
        },
        autoHide: { type: [Boolean, Function], default: ce("autoHide") },
        handleResize: { type: Boolean, default: ce("handleResize") },
        instantMove: { type: Boolean, default: ce("instantMove") },
        eagerMount: { type: Boolean, default: ce("eagerMount") },
        popperClass: {
          type: [String, Array, Object],
          default: ce("popperClass"),
        },
        computeTransformOrigin: {
          type: Boolean,
          default: ce("computeTransformOrigin"),
        },
        autoMinSize: { type: Boolean, default: ce("autoMinSize") },
        autoSize: { type: [Boolean, String], default: ce("autoSize") },
        autoMaxSize: { type: Boolean, default: ce("autoMaxSize") },
        autoBoundaryMaxSize: {
          type: Boolean,
          default: ce("autoBoundaryMaxSize"),
        },
        preventOverflow: { type: Boolean, default: ce("preventOverflow") },
        overflowPadding: {
          type: [Number, String],
          default: ce("overflowPadding"),
        },
        arrowPadding: { type: [Number, String], default: ce("arrowPadding") },
        arrowOverflow: { type: Boolean, default: ce("arrowOverflow") },
        flip: { type: Boolean, default: ce("flip") },
        shift: { type: Boolean, default: ce("shift") },
        shiftCrossAxis: { type: Boolean, default: ce("shiftCrossAxis") },
        noAutoFocus: { type: Boolean, default: ce("noAutoFocus") },
        disposeTimeout: { type: Number, default: ce("disposeTimeout") },
      },
      emits: {
        show: () => !0,
        hide: () => !0,
        "update:shown": (e) => !0,
        "apply-show": () => !0,
        "apply-hide": () => !0,
        "close-group": () => !0,
        "close-directive": () => !0,
        "auto-hide": () => !0,
        resize: () => !0,
      },
      data() {
        return {
          isShown: !1,
          isMounted: !1,
          skipTransition: !1,
          classes: { showFrom: !1, showTo: !1, hideFrom: !1, hideTo: !0 },
          result: {
            x: 0,
            y: 0,
            placement: "",
            strategy: this.strategy,
            arrow: { x: 0, y: 0, centerOffset: 0 },
            transformOrigin: null,
          },
          randomId: `popper_${[Math.random(), Date.now()]
            .map((e) => e.toString(36).substring(2, 10))
            .join("_")}`,
          shownChildren: new Set(),
          lastAutoHide: !0,
          pendingHide: !1,
          containsGlobalTarget: !1,
          isDisposed: !0,
          mouseDownContains: !1,
        };
      },
      computed: {
        popperId() {
          return this.ariaId != null ? this.ariaId : this.randomId;
        },
        shouldMountContent() {
          return this.eagerMount || this.isMounted;
        },
        slotData() {
          return {
            popperId: this.popperId,
            isShown: this.isShown,
            shouldMountContent: this.shouldMountContent,
            skipTransition: this.skipTransition,
            autoHide:
              typeof this.autoHide == "function"
                ? this.lastAutoHide
                : this.autoHide,
            show: this.show,
            hide: this.hide,
            handleResize: this.handleResize,
            onResize: this.onResize,
            classes: { ...this.classes, popperClass: this.popperClass },
            result: this.positioningDisabled ? null : this.result,
            attrs: this.$attrs,
          };
        },
        parentPopper() {
          var e;
          return (e = this[Os]) == null ? void 0 : e.parentPopper;
        },
        hasPopperShowTriggerHover() {
          var e, t;
          return (
            ((e = this.popperTriggers) == null
              ? void 0
              : e.includes("hover")) ||
            ((t = this.popperShowTriggers) == null
              ? void 0
              : t.includes("hover"))
          );
        },
      },
      watch: {
        shown: "$_autoShowHide",
        disabled(e) {
          e ? this.dispose() : this.init();
        },
        async container() {
          this.isShown &&
            (this.$_ensureTeleport(), await this.$_computePosition());
        },
        triggers: { handler: "$_refreshListeners", deep: !0 },
        positioningDisabled: "$_refreshListeners",
        ...[
          "placement",
          "distance",
          "skidding",
          "boundary",
          "strategy",
          "overflowPadding",
          "arrowPadding",
          "preventOverflow",
          "shift",
          "shiftCrossAxis",
          "flip",
        ].reduce((e, t) => ((e[t] = "$_computePosition"), e), {}),
      },
      created() {
        this.autoMinSize &&
          console.warn(
            '[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'
          ),
          this.autoMaxSize &&
            console.warn(
              "[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead."
            );
      },
      mounted() {
        this.init(), this.$_detachPopperNode();
      },
      activated() {
        this.$_autoShowHide();
      },
      deactivated() {
        this.hide();
      },
      beforeUnmount() {
        this.dispose();
      },
      methods: {
        show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
          var r, o;
          ((r = this.parentPopper) != null &&
            r.lockedChild &&
            this.parentPopper.lockedChild !== this) ||
            ((this.pendingHide = !1),
            (n || !this.disabled) &&
              (((o = this.parentPopper) == null ? void 0 : o.lockedChild) ===
                this && (this.parentPopper.lockedChild = null),
              this.$_scheduleShow(e, t),
              this.$emit("show"),
              (this.$_showFrameLocked = !0),
              requestAnimationFrame(() => {
                this.$_showFrameLocked = !1;
              })),
            this.$emit("update:shown", !0));
        },
        hide({ event: e = null, skipDelay: t = !1 } = {}) {
          var n;
          if (!this.$_hideInProgress) {
            if (this.shownChildren.size > 0) {
              this.pendingHide = !0;
              return;
            }
            if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
              this.parentPopper &&
                ((this.parentPopper.lockedChild = this),
                clearTimeout(this.parentPopper.lockedChildTimer),
                (this.parentPopper.lockedChildTimer = setTimeout(() => {
                  this.parentPopper.lockedChild === this &&
                    (this.parentPopper.lockedChild.hide({ skipDelay: t }),
                    (this.parentPopper.lockedChild = null));
                }, 1e3)));
              return;
            }
            ((n = this.parentPopper) == null ? void 0 : n.lockedChild) ===
              this && (this.parentPopper.lockedChild = null),
              (this.pendingHide = !1),
              this.$_scheduleHide(e, t),
              this.$emit("hide"),
              this.$emit("update:shown", !1);
          }
        },
        init() {
          var e;
          this.isDisposed &&
            ((this.isDisposed = !1),
            (this.isMounted = !1),
            (this.$_events = []),
            (this.$_preventShow = !1),
            (this.$_referenceNode =
              ((e = this.referenceNode) == null ? void 0 : e.call(this)) ??
              this.$el),
            (this.$_targetNodes = this.targetNodes().filter(
              (t) => t.nodeType === t.ELEMENT_NODE
            )),
            (this.$_popperNode = this.popperNode()),
            (this.$_innerNode =
              this.$_popperNode.querySelector(".v-popper__inner")),
            (this.$_arrowNode = this.$_popperNode.querySelector(
              ".v-popper__arrow-container"
            )),
            this.$_swapTargetAttrs("title", "data-original-title"),
            this.$_detachPopperNode(),
            this.triggers.length && this.$_addEventListeners(),
            this.shown && this.show());
        },
        dispose() {
          this.isDisposed ||
            ((this.isDisposed = !0),
            this.$_removeEventListeners(),
            this.hide({ skipDelay: !0 }),
            this.$_detachPopperNode(),
            (this.isMounted = !1),
            (this.isShown = !1),
            this.$_updateParentShownChildren(!1),
            this.$_swapTargetAttrs("data-original-title", "title"));
        },
        async onResize() {
          this.isShown &&
            (await this.$_computePosition(), this.$emit("resize"));
        },
        async $_computePosition() {
          if (this.isDisposed || this.positioningDisabled) return;
          const e = { strategy: this.strategy, middleware: [] };
          (this.distance || this.skidding) &&
            e.middleware.push(
              uv({ mainAxis: this.distance, crossAxis: this.skidding })
            );
          const t = this.placement.startsWith("auto");
          if (
            (t
              ? e.middleware.push(
                  iv({ alignment: this.placement.split("-")[1] ?? "" })
                )
              : (e.placement = this.placement),
            this.preventOverflow &&
              (this.shift &&
                e.middleware.push(
                  cv({
                    padding: this.overflowPadding,
                    boundary: this.boundary,
                    crossAxis: this.shiftCrossAxis,
                  })
                ),
              !t &&
                this.flip &&
                e.middleware.push(
                  av({ padding: this.overflowPadding, boundary: this.boundary })
                )),
            e.middleware.push(
              ov({ element: this.$_arrowNode, padding: this.arrowPadding })
            ),
            this.arrowOverflow &&
              e.middleware.push({
                name: "arrowOverflow",
                fn: ({ placement: r, rects: o, middlewareData: s }) => {
                  let i;
                  const { centerOffset: a } = s.arrow;
                  return (
                    r.startsWith("top") || r.startsWith("bottom")
                      ? (i = Math.abs(a) > o.reference.width / 2)
                      : (i = Math.abs(a) > o.reference.height / 2),
                    { data: { overflow: i } }
                  );
                },
              }),
            this.autoMinSize || this.autoSize)
          ) {
            const r = this.autoSize
              ? this.autoSize
              : this.autoMinSize
              ? "min"
              : null;
            e.middleware.push({
              name: "autoSize",
              fn: ({ rects: o, placement: s, middlewareData: i }) => {
                var a;
                if ((a = i.autoSize) != null && a.skip) return {};
                let l, u;
                return (
                  s.startsWith("top") || s.startsWith("bottom")
                    ? (l = o.reference.width)
                    : (u = o.reference.height),
                  (this.$_innerNode.style[
                    r === "min"
                      ? "minWidth"
                      : r === "max"
                      ? "maxWidth"
                      : "width"
                  ] = l != null ? `${l}px` : null),
                  (this.$_innerNode.style[
                    r === "min"
                      ? "minHeight"
                      : r === "max"
                      ? "maxHeight"
                      : "height"
                  ] = u != null ? `${u}px` : null),
                  { data: { skip: !0 }, reset: { rects: !0 } }
                );
              },
            });
          }
          (this.autoMaxSize || this.autoBoundaryMaxSize) &&
            ((this.$_innerNode.style.maxWidth = null),
            (this.$_innerNode.style.maxHeight = null),
            e.middleware.push(
              fv({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({ availableWidth: r, availableHeight: o }) => {
                  (this.$_innerNode.style.maxWidth =
                    r != null ? `${r}px` : null),
                    (this.$_innerNode.style.maxHeight =
                      o != null ? `${o}px` : null);
                },
              })
            ));
          const n = await gv(this.$_referenceNode, this.$_popperNode, e);
          Object.assign(this.result, {
            x: n.x,
            y: n.y,
            placement: n.placement,
            strategy: n.strategy,
            arrow: {
              ...n.middlewareData.arrow,
              ...n.middlewareData.arrowOverflow,
            },
          });
        },
        $_scheduleShow(e, t = !1) {
          if (
            (this.$_updateParentShownChildren(!0),
            (this.$_hideInProgress = !1),
            clearTimeout(this.$_scheduleTimer),
            pn &&
              this.instantMove &&
              pn.instantMove &&
              pn !== this.parentPopper)
          ) {
            pn.$_applyHide(!0), this.$_applyShow(!0);
            return;
          }
          t
            ? this.$_applyShow()
            : (this.$_scheduleTimer = setTimeout(
                this.$_applyShow.bind(this),
                this.$_computeDelay("show")
              ));
        },
        $_scheduleHide(e, t = !1) {
          if (this.shownChildren.size > 0) {
            this.pendingHide = !0;
            return;
          }
          this.$_updateParentShownChildren(!1),
            (this.$_hideInProgress = !0),
            clearTimeout(this.$_scheduleTimer),
            this.isShown && (pn = this),
            t
              ? this.$_applyHide()
              : (this.$_scheduleTimer = setTimeout(
                  this.$_applyHide.bind(this),
                  this.$_computeDelay("hide")
                ));
        },
        $_computeDelay(e) {
          const t = this.delay;
          return parseInt((t && t[e]) || t || 0);
        },
        async $_applyShow(e = !1) {
          clearTimeout(this.$_disposeTimer),
            clearTimeout(this.$_scheduleTimer),
            (this.skipTransition = e),
            !this.isShown &&
              (this.$_ensureTeleport(),
              await As(),
              await this.$_computePosition(),
              await this.$_applyShowEffect(),
              this.positioningDisabled ||
                this.$_registerEventListeners(
                  [...Ro(this.$_referenceNode), ...Ro(this.$_popperNode)],
                  "scroll",
                  () => {
                    this.$_computePosition();
                  }
                ));
        },
        async $_applyShowEffect() {
          if (this.$_hideInProgress) return;
          if (this.computeTransformOrigin) {
            const t = this.$_referenceNode.getBoundingClientRect(),
              n = this.$_popperNode.querySelector(".v-popper__wrapper"),
              r = n.parentNode.getBoundingClientRect(),
              o = t.x + t.width / 2 - (r.left + n.offsetLeft),
              s = t.y + t.height / 2 - (r.top + n.offsetTop);
            this.result.transformOrigin = `${o}px ${s}px`;
          }
          (this.isShown = !0),
            this.$_applyAttrsToTarget({
              "aria-describedby": this.popperId,
              "data-popper-shown": "",
            });
          const e = this.showGroup;
          if (e) {
            let t;
            for (let n = 0; n < pt.length; n++)
              (t = pt[n]),
                t.showGroup !== e && (t.hide(), t.$emit("close-group"));
          }
          pt.push(this), document.body.classList.add("v-popper--some-open");
          for (const t of _l(this.theme))
            Tl(t).push(this),
              document.body.classList.add(`v-popper--some-open--${t}`);
          this.$emit("apply-show"),
            (this.classes.showFrom = !0),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !1),
            await As(),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !0),
            this.noAutoFocus || this.$_popperNode.focus();
        },
        async $_applyHide(e = !1) {
          if (this.shownChildren.size > 0) {
            (this.pendingHide = !0), (this.$_hideInProgress = !1);
            return;
          }
          if ((clearTimeout(this.$_scheduleTimer), !this.isShown)) return;
          (this.skipTransition = e),
            Cl(pt, this),
            pt.length === 0 &&
              document.body.classList.remove("v-popper--some-open");
          for (const n of _l(this.theme)) {
            const r = Tl(n);
            Cl(r, this),
              r.length === 0 &&
                document.body.classList.remove(`v-popper--some-open--${n}`);
          }
          pn === this && (pn = null),
            (this.isShown = !1),
            this.$_applyAttrsToTarget({
              "aria-describedby": void 0,
              "data-popper-shown": void 0,
            }),
            clearTimeout(this.$_disposeTimer);
          const t = this.disposeTimeout;
          t !== null &&
            (this.$_disposeTimer = setTimeout(() => {
              this.$_popperNode &&
                (this.$_detachPopperNode(), (this.isMounted = !1));
            }, t)),
            this.$_removeEventListeners("scroll"),
            this.$emit("apply-hide"),
            (this.classes.showFrom = !1),
            (this.classes.showTo = !1),
            (this.classes.hideFrom = !0),
            (this.classes.hideTo = !1),
            await As(),
            (this.classes.hideFrom = !1),
            (this.classes.hideTo = !0);
        },
        $_autoShowHide() {
          this.shown ? this.show() : this.hide();
        },
        $_ensureTeleport() {
          if (this.isDisposed) return;
          let e = this.container;
          if (
            (typeof e == "string"
              ? (e = window.document.querySelector(e))
              : e === !1 && (e = this.$_targetNodes[0].parentNode),
            !e)
          )
            throw new Error("No container for popover: " + this.container);
          e.appendChild(this.$_popperNode), (this.isMounted = !0);
        },
        $_addEventListeners() {
          const e = (n) => {
            (this.isShown && !this.$_hideInProgress) ||
              ((n.usedByTooltip = !0),
              !this.$_preventShow && this.show({ event: n }));
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            xl,
            this.triggers,
            this.showTriggers,
            e
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              xl,
              this.popperTriggers,
              this.popperShowTriggers,
              e
            );
          const t = (n) => {
            n.usedByTooltip || this.hide({ event: n });
          };
          this.$_registerTriggerListeners(
            this.$_targetNodes,
            Sl,
            this.triggers,
            this.hideTriggers,
            t
          ),
            this.$_registerTriggerListeners(
              [this.$_popperNode],
              Sl,
              this.popperTriggers,
              this.popperHideTriggers,
              t
            );
        },
        $_registerEventListeners(e, t, n) {
          this.$_events.push({ targetNodes: e, eventType: t, handler: n }),
            e.forEach((r) =>
              r.addEventListener(t, n, Dr ? { passive: !0 } : void 0)
            );
        },
        $_registerTriggerListeners(e, t, n, r, o) {
          let s = n;
          r != null && (s = typeof r == "function" ? r(s) : r),
            s.forEach((i) => {
              const a = t[i];
              a && this.$_registerEventListeners(e, a, o);
            });
        },
        $_removeEventListeners(e) {
          const t = [];
          this.$_events.forEach((n) => {
            const { targetNodes: r, eventType: o, handler: s } = n;
            !e || e === o
              ? r.forEach((i) => i.removeEventListener(o, s))
              : t.push(n);
          }),
            (this.$_events = t);
        },
        $_refreshListeners() {
          this.isDisposed ||
            (this.$_removeEventListeners(), this.$_addEventListeners());
        },
        $_handleGlobalClose(e, t = !1) {
          this.$_showFrameLocked ||
            (this.hide({ event: e }),
            e.closePopover
              ? this.$emit("close-directive")
              : this.$emit("auto-hide"),
            t &&
              ((this.$_preventShow = !0),
              setTimeout(() => {
                this.$_preventShow = !1;
              }, 300)));
        },
        $_detachPopperNode() {
          this.$_popperNode.parentNode &&
            this.$_popperNode.parentNode.removeChild(this.$_popperNode);
        },
        $_swapTargetAttrs(e, t) {
          for (const n of this.$_targetNodes) {
            const r = n.getAttribute(e);
            r && (n.removeAttribute(e), n.setAttribute(t, r));
          }
        },
        $_applyAttrsToTarget(e) {
          for (const t of this.$_targetNodes)
            for (const n in e) {
              const r = e[n];
              r == null ? t.removeAttribute(n) : t.setAttribute(n, r);
            }
        },
        $_updateParentShownChildren(e) {
          let t = this.parentPopper;
          for (; t; )
            e
              ? t.shownChildren.add(this.randomId)
              : (t.shownChildren.delete(this.randomId),
                t.pendingHide && t.hide()),
              (t = t.parentPopper);
        },
        $_isAimingPopper() {
          const e = this.$_referenceNode.getBoundingClientRect();
          if (xr >= e.left && xr <= e.right && Sr >= e.top && Sr <= e.bottom) {
            const t = this.$_popperNode.getBoundingClientRect(),
              n = xr - Qt,
              r = Sr - Xt,
              o =
                t.left +
                t.width / 2 -
                Qt +
                (t.top + t.height / 2) -
                Xt +
                t.width +
                t.height,
              s = Qt + n * o,
              i = Xt + r * o;
            return (
              io(Qt, Xt, s, i, t.left, t.top, t.left, t.bottom) ||
              io(Qt, Xt, s, i, t.left, t.top, t.right, t.top) ||
              io(Qt, Xt, s, i, t.right, t.top, t.right, t.bottom) ||
              io(Qt, Xt, s, i, t.left, t.bottom, t.right, t.bottom)
            );
          }
          return !1;
        },
      },
      render() {
        return this.$slots.default(this.slotData);
      },
    });
if (typeof document < "u" && typeof window < "u") {
  if (gf) {
    const e = Dr ? { passive: !0, capture: !0 } : !0;
    document.addEventListener("touchstart", (t) => kl(t), e),
      document.addEventListener("touchend", (t) => Al(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => kl(e), !0),
      window.addEventListener("click", (e) => Al(e, !1), !0);
  window.addEventListener("resize", wv);
}
function kl(e, t) {
  for (let n = 0; n < pt.length; n++) {
    const r = pt[n];
    try {
      r.mouseDownContains = r.popperNode().contains(e.target);
    } catch {}
  }
}
function Al(e, t) {
  vv(e, t);
}
function vv(e, t) {
  const n = {};
  for (let r = pt.length - 1; r >= 0; r--) {
    const o = pt[r];
    try {
      const s = (o.containsGlobalTarget =
        o.mouseDownContains || o.popperNode().contains(e.target));
      (o.pendingHide = !1),
        requestAnimationFrame(() => {
          if (((o.pendingHide = !1), !n[o.randomId] && Ol(o, s, e))) {
            if (
              (o.$_handleGlobalClose(e, t),
              !e.closeAllPopover && e.closePopover && s)
            ) {
              let a = o.parentPopper;
              for (; a; ) (n[a.randomId] = !0), (a = a.parentPopper);
              return;
            }
            let i = o.parentPopper;
            for (; i && Ol(i, i.containsGlobalTarget, e); )
              i.$_handleGlobalClose(e, t), (i = i.parentPopper);
          }
        });
    } catch {}
  }
}
function Ol(e, t, n) {
  return n.closeAllPopover || (n.closePopover && t) || (bv(e, n) && !t);
}
function bv(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return (e.lastAutoHide = n), n;
  }
  return e.autoHide;
}
function wv() {
  for (let e = 0; e < pt.length; e++) pt[e].$_computePosition();
}
let Qt = 0,
  Xt = 0,
  xr = 0,
  Sr = 0;
typeof window < "u" &&
  window.addEventListener(
    "mousemove",
    (e) => {
      (Qt = xr), (Xt = Sr), (xr = e.clientX), (Sr = e.clientY);
    },
    Dr ? { passive: !0 } : void 0
  );
function io(e, t, n, r, o, s, i, a) {
  const l =
      ((i - o) * (t - s) - (a - s) * (e - o)) /
      ((a - s) * (n - e) - (i - o) * (r - t)),
    u =
      ((n - e) * (t - s) - (r - t) * (e - o)) /
      ((a - s) * (n - e) - (i - o) * (r - t));
  return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
const _v = { extends: mf() },
  Qi = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  };
function xv(e, t, n, r, o, s) {
  return (
    N(),
    z(
      "div",
      {
        ref: "reference",
        class: pe(["v-popper", { "v-popper--shown": e.slotData.isShown }]),
      },
      [he(e.$slots, "default", Eu(Rc(e.slotData)))],
      2
    )
  );
}
const Sv = Qi(_v, [["render", xv]]);
function Cv() {
  var e = window.navigator.userAgent,
    t = e.indexOf("MSIE ");
  if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var r = e.indexOf("rv:");
    return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10);
  }
  var o = e.indexOf("Edge/");
  return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1;
}
let po;
function ri() {
  ri.init || ((ri.init = !0), (po = Cv() !== -1));
}
var ns = {
  name: "ResizeObserver",
  props: {
    emitOnMount: { type: Boolean, default: !1 },
    ignoreWidth: { type: Boolean, default: !1 },
    ignoreHeight: { type: Boolean, default: !1 },
  },
  emits: ["notify"],
  mounted() {
    ri(),
      zo(() => {
        (this._w = this.$el.offsetWidth),
          (this._h = this.$el.offsetHeight),
          this.emitOnMount && this.emitSize();
      });
    const e = document.createElement("object");
    (this._resizeObject = e),
      e.setAttribute("aria-hidden", "true"),
      e.setAttribute("tabindex", -1),
      (e.onload = this.addResizeHandlers),
      (e.type = "text/html"),
      po && this.$el.appendChild(e),
      (e.data = "about:blank"),
      po || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      ((!this.ignoreWidth && this._w !== this.$el.offsetWidth) ||
        (!this.ignoreHeight && this._h !== this.$el.offsetHeight)) &&
        ((this._w = this.$el.offsetWidth),
        (this._h = this.$el.offsetHeight),
        this.emitSize());
    },
    emitSize() {
      this.$emit("notify", { width: this._w, height: this._h });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener(
        "resize",
        this.compareAndNotify
      ),
        this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject &&
        this._resizeObject.onload &&
        (!po &&
          this._resizeObject.contentDocument &&
          this._resizeObject.contentDocument.defaultView.removeEventListener(
            "resize",
            this.compareAndNotify
          ),
        this.$el.removeChild(this._resizeObject),
        (this._resizeObject.onload = null),
        (this._resizeObject = null));
    },
  },
};
const Ev = Dh();
Ih("data-v-b329ee4c");
const Tv = { class: "resize-observer", tabindex: "-1" };
Mh();
const kv = Ev((e, t, n, r, o, s) => (N(), Oe("div", Tv)));
ns.render = kv;
ns.__scopeId = "data-v-b329ee4c";
ns.__file = "src/components/ResizeObserver.vue";
const yf = (e = "theme") => ({
    computed: {
      themeClass() {
        return mv(this[e]);
      },
    },
  }),
  Av = ke({
    name: "VPopperContent",
    components: { ResizeObserver: ns },
    mixins: [yf()],
    props: {
      popperId: String,
      theme: String,
      shown: Boolean,
      mounted: Boolean,
      skipTransition: Boolean,
      autoHide: Boolean,
      handleResize: Boolean,
      classes: Object,
      result: Object,
    },
    emits: ["hide", "resize"],
    methods: {
      toPx(e) {
        return e != null && !isNaN(e) ? `${e}px` : null;
      },
    },
  }),
  Ov = ["id", "aria-hidden", "tabindex", "data-popper-placement"],
  Rv = { ref: "inner", class: "v-popper__inner" },
  Pv = $("div", { class: "v-popper__arrow-outer" }, null, -1),
  $v = $("div", { class: "v-popper__arrow-inner" }, null, -1),
  Nv = [Pv, $v];
function Lv(e, t, n, r, o, s) {
  const i = Ke("ResizeObserver");
  return (
    N(),
    z(
      "div",
      {
        id: e.popperId,
        ref: "popover",
        class: pe([
          "v-popper__popper",
          [
            e.themeClass,
            e.classes.popperClass,
            {
              "v-popper__popper--shown": e.shown,
              "v-popper__popper--hidden": !e.shown,
              "v-popper__popper--show-from": e.classes.showFrom,
              "v-popper__popper--show-to": e.classes.showTo,
              "v-popper__popper--hide-from": e.classes.hideFrom,
              "v-popper__popper--hide-to": e.classes.hideTo,
              "v-popper__popper--skip-transition": e.skipTransition,
              "v-popper__popper--arrow-overflow":
                e.result && e.result.arrow.overflow,
              "v-popper__popper--no-positioning": !e.result,
            },
          ],
        ]),
        style: Bt(
          e.result
            ? {
                position: e.result.strategy,
                transform: `translate3d(${Math.round(
                  e.result.x
                )}px,${Math.round(e.result.y)}px,0)`,
              }
            : void 0
        ),
        "aria-hidden": e.shown ? "false" : "true",
        tabindex: e.autoHide ? 0 : void 0,
        "data-popper-placement": e.result ? e.result.placement : void 0,
        onKeyup:
          t[2] || (t[2] = zc((a) => e.autoHide && e.$emit("hide"), ["esc"])),
      },
      [
        $("div", {
          class: "v-popper__backdrop",
          onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide")),
        }),
        $(
          "div",
          {
            class: "v-popper__wrapper",
            style: Bt(
              e.result ? { transformOrigin: e.result.transformOrigin } : void 0
            ),
          },
          [
            $(
              "div",
              Rv,
              [
                e.mounted
                  ? (N(),
                    z(
                      Pe,
                      { key: 0 },
                      [
                        $("div", null, [he(e.$slots, "default")]),
                        e.handleResize
                          ? (N(),
                            Oe(i, {
                              key: 0,
                              onNotify:
                                t[1] || (t[1] = (a) => e.$emit("resize", a)),
                            }))
                          : Z("", !0),
                      ],
                      64
                    ))
                  : Z("", !0),
              ],
              512
            ),
            $(
              "div",
              {
                ref: "arrow",
                class: "v-popper__arrow-container",
                style: Bt(
                  e.result
                    ? {
                        left: e.toPx(e.result.arrow.x),
                        top: e.toPx(e.result.arrow.y),
                      }
                    : void 0
                ),
              },
              Nv,
              4
            ),
          ],
          4
        ),
      ],
      46,
      Ov
    )
  );
}
const vf = Qi(Av, [["render", Lv]]),
  bf = {
    methods: {
      show(...e) {
        return this.$refs.popper.show(...e);
      },
      hide(...e) {
        return this.$refs.popper.hide(...e);
      },
      dispose(...e) {
        return this.$refs.popper.dispose(...e);
      },
      onResize(...e) {
        return this.$refs.popper.onResize(...e);
      },
    },
  };
let oi = function () {};
typeof window < "u" && (oi = window.Element);
const Iv = ke({
  name: "VPopperWrapper",
  components: { Popper: Sv, PopperContent: vf },
  mixins: [bf, yf("finalTheme")],
  props: {
    theme: { type: String, default: null },
    referenceNode: { type: Function, default: null },
    shown: { type: Boolean, default: !1 },
    showGroup: { type: String, default: null },
    ariaId: { default: null },
    disabled: { type: Boolean, default: void 0 },
    positioningDisabled: { type: Boolean, default: void 0 },
    placement: { type: String, default: void 0 },
    delay: { type: [String, Number, Object], default: void 0 },
    distance: { type: [Number, String], default: void 0 },
    skidding: { type: [Number, String], default: void 0 },
    triggers: { type: Array, default: void 0 },
    showTriggers: { type: [Array, Function], default: void 0 },
    hideTriggers: { type: [Array, Function], default: void 0 },
    popperTriggers: { type: Array, default: void 0 },
    popperShowTriggers: { type: [Array, Function], default: void 0 },
    popperHideTriggers: { type: [Array, Function], default: void 0 },
    container: { type: [String, Object, oi, Boolean], default: void 0 },
    boundary: { type: [String, oi], default: void 0 },
    strategy: { type: String, default: void 0 },
    autoHide: { type: [Boolean, Function], default: void 0 },
    handleResize: { type: Boolean, default: void 0 },
    instantMove: { type: Boolean, default: void 0 },
    eagerMount: { type: Boolean, default: void 0 },
    popperClass: { type: [String, Array, Object], default: void 0 },
    computeTransformOrigin: { type: Boolean, default: void 0 },
    autoMinSize: { type: Boolean, default: void 0 },
    autoSize: { type: [Boolean, String], default: void 0 },
    autoMaxSize: { type: Boolean, default: void 0 },
    autoBoundaryMaxSize: { type: Boolean, default: void 0 },
    preventOverflow: { type: Boolean, default: void 0 },
    overflowPadding: { type: [Number, String], default: void 0 },
    arrowPadding: { type: [Number, String], default: void 0 },
    arrowOverflow: { type: Boolean, default: void 0 },
    flip: { type: Boolean, default: void 0 },
    shift: { type: Boolean, default: void 0 },
    shiftCrossAxis: { type: Boolean, default: void 0 },
    noAutoFocus: { type: Boolean, default: void 0 },
    disposeTimeout: { type: Number, default: void 0 },
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0,
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    },
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter(
        (e) => e !== this.$refs.popperContent.$el
      );
    },
  },
});
function Mv(e, t, n, r, o, s) {
  const i = Ke("PopperContent"),
    a = Ke("Popper");
  return (
    N(),
    Oe(
      a,
      nr({ ref: "popper" }, e.$props, {
        theme: e.finalTheme,
        "target-nodes": e.getTargetNodes,
        "popper-node": () => e.$refs.popperContent.$el,
        class: [e.themeClass],
        onShow: t[0] || (t[0] = () => e.$emit("show")),
        onHide: t[1] || (t[1] = () => e.$emit("hide")),
        "onUpdate:shown": t[2] || (t[2] = (l) => e.$emit("update:shown", l)),
        onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
        onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
        onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
        onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
        onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
        onResize: t[8] || (t[8] = () => e.$emit("resize")),
      }),
      {
        default: fe(
          ({
            popperId: l,
            isShown: u,
            shouldMountContent: c,
            skipTransition: f,
            autoHide: d,
            show: p,
            hide: m,
            handleResize: y,
            onResize: v,
            classes: _,
            result: x,
          }) => [
            he(e.$slots, "default", { shown: u, show: p, hide: m }),
            oe(
              i,
              {
                ref: "popperContent",
                "popper-id": l,
                theme: e.finalTheme,
                shown: u,
                mounted: c,
                "skip-transition": f,
                "auto-hide": d,
                "handle-resize": y,
                classes: _,
                result: x,
                onHide: m,
                onResize: v,
              },
              {
                default: fe(() => [
                  he(e.$slots, "popper", { shown: u, hide: m }),
                ]),
                _: 2,
              },
              1032,
              [
                "popper-id",
                "theme",
                "shown",
                "mounted",
                "skip-transition",
                "auto-hide",
                "handle-resize",
                "classes",
                "result",
                "onHide",
                "onResize",
              ]
            ),
          ]
        ),
        _: 3,
      },
      16,
      ["theme", "target-nodes", "popper-node", "class"]
    )
  );
}
const Xi = Qi(Iv, [["render", Mv]]);
({ ...Xi });
({ ...Xi });
({ ...Xi });
mf();
const Dv = ["href"],
  Xx = ke({
    __name: "FwbA",
    props: {
      href: { default: "" },
      color: { default: "text-primary-600 dark:text-primary-500" },
    },
    setup(e) {
      return (t, n) => (
        N(),
        z(
          "a",
          {
            href: t.href,
            class: pe([t.color, "inline-flex items-center hover:underline"]),
          },
          [he(t.$slots, "default")],
          10,
          Dv
        )
      );
    },
  }),
  wf = "/bahaaedu/assets/logo-DOQx87fY.png",
  Yi = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  },
  Bv = {
    name: "Header",
    components: { FwbButton: vm, FwbModal: yy },
    data() {
      return { isShowModal: !1 };
    },
    methods: {
      toggleModal() {
        this.isShowModal = !this.isShowModal;
      },
      logout() {
        this.$store.commit("logout"), this.$router.push("/bahaaedu/login");
      },
      isHome() {
        return this.$route.path === "/bahaaedu/";
      },
    },
  },
  Fv = { class: "sticky w-full z-50" },
  jv = { class: "bg-white shadow-md" },
  Hv = { class: "mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8" },
  zv = { class: "flex h-16 items-center justify-between" },
  Vv = { class: "block md:hidden" },
  Uv = { class: "flex-1 md:flex md:items-center md:gap-12" },
  qv = { class: "md:flex md:items-center md:gap-12" },
  Gv = { "aria-label": "Global", class: "hidden md:block" },
  Wv = { class: "flex items-center gap-6 text-sm" },
  Kv = { key: 0 },
  Jv = { key: 1 },
  Qv = { key: 2 },
  Xv = { key: 3 },
  Yv = { key: 4 },
  Zv = { key: 5 },
  eb = { key: 6 },
  tb = { key: 7 },
  nb = { class: "flex items-center gap-4" },
  rb = { class: "sm:flex sm:gap-4" },
  ob = { class: "menu-item" },
  sb = { key: 0, class: "menu-item" },
  ib = { key: 1, class: "menu-item" },
  ab = { key: 2, class: "menu-item" },
  lb = { key: 3, class: "menu-item" },
  ub = { key: 4, class: "menu-item" },
  cb = { key: 5, class: "menu-item" },
  fb = { key: 6, class: "menu-item" },
  db = { key: 7, class: "menu-item" };
function hb(e, t, n, r, o, s) {
  const i = Ke("router-link");
  return (
    N(),
    z("div", Fv, [
      $("header", jv, [
        $("div", Hv, [
          $("div", zv, [
            $("div", Vv, [
              $(
                "button",
                {
                  class:
                    "rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75",
                  onClick:
                    t[0] ||
                    (t[0] = (...a) => s.toggleModal && s.toggleModal(...a)),
                },
                t[2] ||
                  (t[2] = [$("i", { class: "bx bx-menu text-2xl" }, null, -1)])
              ),
            ]),
            $("div", Uv, [
              oe(
                i,
                { to: "/bahaaedu/" },
                {
                  default: fe(
                    () =>
                      t[3] ||
                      (t[3] = [
                        $("span", { class: "sr-only" }, "الرئيسية", -1),
                        $(
                          "img",
                          { src: wf, alt: "logo", class: "w-36" },
                          null,
                          -1
                        ),
                      ])
                  ),
                  _: 1,
                }
              ),
            ]),
            $("div", qv, [
              $("nav", Gv, [
                $("ul", Wv, [
                  $("li", null, [
                    oe(
                      i,
                      {
                        class:
                          "text-gray-500 transition hover:text-gray-500/75",
                        to: "/bahaaedu/",
                      },
                      {
                        default: fe(() => t[4] || (t[4] = [Se(" الرئيسية ")])),
                        _: 1,
                      }
                    ),
                  ]),
                  s.isHome()
                    ? (N(),
                      z(
                        "li",
                        Kv,
                        t[5] ||
                          (t[5] = [
                            $(
                              "a",
                              {
                                class:
                                  "text-gray-500 transition hover:text-gray-500/75",
                                href: "#services",
                              },
                              " خدمات ",
                              -1
                            ),
                          ])
                      ))
                    : Z("", !0),
                  s.isHome()
                    ? (N(),
                      z(
                        "li",
                        Jv,
                        t[6] ||
                          (t[6] = [
                            $(
                              "a",
                              {
                                class:
                                  "text-gray-500 transition hover:text-gray-500/75",
                                href: "#contact",
                              },
                              " اتصل بنا ",
                              -1
                            ),
                          ])
                      ))
                    : Z("", !0),
                  this.$store.state.isAuthenticated
                    ? (N(),
                      z("li", Qv, [
                        oe(
                          i,
                          {
                            class:
                              "text-gray-500 transition hover:text-gray-500/75",
                            to: "/bahaaedu/dashboard",
                          },
                          {
                            default: fe(
                              () => t[7] || (t[7] = [Se(" لوحة التحكم ")])
                            ),
                            _: 1,
                          }
                        ),
                      ]))
                    : Z("", !0),
                  this.$store.state.isAuthenticated
                    ? (N(),
                      z("li", Xv, [
                        oe(
                          i,
                          {
                            class:
                              "text-gray-500 transition hover:text-gray-500/75",
                            to: "/bahaaedu/homeworks",
                          },
                          {
                            default: fe(
                              () => t[8] || (t[8] = [Se(" الواجبات ")])
                            ),
                            _: 1,
                          }
                        ),
                      ]))
                    : Z("", !0),
                  this.$store.state.isAuthenticated
                    ? (N(),
                      z("li", Yv, [
                        oe(
                          i,
                          {
                            class:
                              "text-gray-500 transition hover:text-gray-500/75",
                            to: "/bahaaedu/tests",
                          },
                          {
                            default: fe(
                              () => t[9] || (t[9] = [Se(" الاختبارات ")])
                            ),
                            _: 1,
                          }
                        ),
                      ]))
                    : Z("", !0),
                  this.$store.state.isAuthenticated
                    ? (N(),
                      z("li", Zv, [
                        oe(
                          i,
                          {
                            class:
                              "text-gray-500 transition hover:text-gray-500/75",
                            to: "/bahaaedu/videos",
                          },
                          {
                            default: fe(
                              () => t[10] || (t[10] = [Se(" الفيديوهات ")])
                            ),
                            _: 1,
                          }
                        ),
                      ]))
                    : Z("", !0),
                  this.$store.state.isAuthenticated
                    ? (N(),
                      z("li", eb, [
                        oe(
                          i,
                          {
                            class:
                              "text-gray-500 transition hover:text-gray-500/75",
                            to: "/bahaaedu/questions-bank",
                          },
                          {
                            default: fe(
                              () => t[11] || (t[11] = [Se(" بنك الأسئلة ")])
                            ),
                            _: 1,
                          }
                        ),
                      ]))
                    : Z("", !0),
                  this.$store.state.isAuthenticated
                    ? (N(),
                      z("li", tb, [
                        oe(
                          i,
                          {
                            class:
                              "text-gray-500 transition hover:text-gray-500/75",
                            to: "/bahaaedu/achievements",
                          },
                          {
                            default: fe(
                              () => t[12] || (t[12] = [Se(" الإنجازات ")])
                            ),
                            _: 1,
                          }
                        ),
                      ]))
                    : Z("", !0),
                ]),
              ]),
              $("div", nb, [
                $("div", rb, [
                  this.$store.state.isAuthenticated
                    ? (N(),
                      z(
                        "button",
                        {
                          key: 1,
                          class:
                            "rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow",
                          onClick:
                            t[1] ||
                            (t[1] = (...a) => s.logout && s.logout(...a)),
                        },
                        " تسجيل الخروج "
                      ))
                    : (N(),
                      Oe(
                        i,
                        {
                          key: 0,
                          class:
                            "rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow",
                          to: "/bahaaedu/login",
                        },
                        {
                          default: fe(
                            () => t[13] || (t[13] = [Se(" تسجيل الدخول ")])
                          ),
                          _: 1,
                        }
                      )),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      $(
        "div",
        {
          class: pe([
            "absolute top-18 duration-300 rounded-md shadow-md w-60 h-[440px] bg-white flex flex-col gap-4 p-4",
            {
              "translate-x-0": o.isShowModal,
              "translate-x-full": !o.isShowModal,
            },
          ]),
        },
        [
          $("div", ob, [
            oe(
              i,
              { to: "/bahaaedu/", class: "flex items-center gap-4" },
              {
                default: fe(
                  () =>
                    t[14] ||
                    (t[14] = [
                      $("i", { class: "bx bx-home text-2xl" }, null, -1),
                      $("p", null, "الرئيسية", -1),
                    ])
                ),
                _: 1,
              }
            ),
          ]),
          s.isHome()
            ? (N(),
              z(
                "div",
                sb,
                t[15] ||
                  (t[15] = [
                    $(
                      "a",
                      { href: "#services", class: "flex items-center gap-4" },
                      [
                        $("i", { class: "bx bx-category text-2xl" }),
                        $("p", null, "خدمات"),
                      ],
                      -1
                    ),
                  ])
              ))
            : Z("", !0),
          s.isHome()
            ? (N(),
              z(
                "div",
                ib,
                t[16] ||
                  (t[16] = [
                    $(
                      "a",
                      { href: "#contact", class: "flex items-center gap-4" },
                      [
                        $("i", { class: "bx bx-phone text-2xl" }),
                        $("p", null, "اتصل بنا"),
                      ],
                      -1
                    ),
                  ])
              ))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("div", ab, [
                oe(
                  i,
                  {
                    to: "/bahaaedu/dashboard",
                    class: "flex items-center gap-4",
                  },
                  {
                    default: fe(
                      () =>
                        t[17] ||
                        (t[17] = [
                          $(
                            "i",
                            { class: "bx bxs-dashboard text-2xl" },
                            null,
                            -1
                          ),
                          $("p", null, "لوحة التحكم", -1),
                        ])
                    ),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("div", lb, [
                oe(
                  i,
                  {
                    to: "/bahaaedu/homeworks",
                    class: "flex items-center gap-4",
                  },
                  {
                    default: fe(
                      () =>
                        t[18] ||
                        (t[18] = [
                          $(
                            "i",
                            { class: "bx bx-book-open text-2xl" },
                            null,
                            -1
                          ),
                          $("p", null, "الواجبات", -1),
                        ])
                    ),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("div", ub, [
                oe(
                  i,
                  { to: "/tests", class: "flex items-center gap-4" },
                  {
                    default: fe(
                      () =>
                        t[19] ||
                        (t[19] = [
                          $("i", { class: "bx bx-book text-2xl" }, null, -1),
                          $("p", null, "الاختبارات", -1),
                        ])
                    ),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("div", cb, [
                oe(
                  i,
                  { to: "/bahaaedu/videos", class: "flex items-center gap-4" },
                  {
                    default: fe(
                      () =>
                        t[20] ||
                        (t[20] = [
                          $("i", { class: "bx bx-video text-2xl" }, null, -1),
                          $("p", null, "الفيديوهات", -1),
                        ])
                    ),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("div", fb, [
                oe(
                  i,
                  {
                    to: "/bahaaedu/questions-bank",
                    class: "flex items-center gap-4",
                  },
                  {
                    default: fe(
                      () =>
                        t[21] ||
                        (t[21] = [
                          $("i", { class: "bx bx-book text-2xl" }, null, -1),
                          $("p", null, "بنك الأسئلة", -1),
                        ])
                    ),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("div", db, [
                oe(
                  i,
                  {
                    to: "/bahaaedu/achievements",
                    class: "flex items-center gap-4",
                  },
                  {
                    default: fe(
                      () =>
                        t[22] ||
                        (t[22] = [
                          $("i", { class: "bx bx-trophy text-2xl" }, null, -1),
                          $("p", null, "الإنجازات", -1),
                        ])
                    ),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
        ],
        2
      ),
    ])
  );
}
const pb = Yi(Bv, [["render", hb]]),
  gb = {
    name: "Footer",
    methods: {
      isHome() {
        return this.$route.path === "/bahaaedu/";
      },
      logout() {
        this.$store.commit("logout"), this.$router.push("/bahaaedu/login");
      },
    },
  },
  mb = { class: "mt-10 border-t-2 border-gray-100" },
  yb = { class: "mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8" },
  vb = {
    class: "mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12",
  },
  bb = { key: 0 },
  wb = { key: 1 },
  _b = { key: 2 },
  xb = { key: 3 },
  Sb = { key: 4 },
  Cb = { key: 5 },
  Eb = { key: 6 };
function Tb(e, t, n, r, o, s) {
  const i = Ke("router-link");
  return (
    N(),
    z("footer", mb, [
      $("div", yb, [
        t[10] ||
          (t[10] = $(
            "div",
            { class: "flex justify-center" },
            [$("img", { src: wf, alt: "logo" })],
            -1
          )),
        $("ul", vb, [
          t[9] ||
            (t[9] = $(
              "li",
              null,
              [
                $(
                  "a",
                  {
                    class: "text-gray-700 transition hover:text-gray-700/75",
                    href: "#",
                  },
                  " الرئيسية "
                ),
              ],
              -1
            )),
          s.isHome()
            ? (N(),
              z(
                "li",
                bb,
                t[1] ||
                  (t[1] = [
                    $(
                      "a",
                      {
                        class:
                          "text-gray-700 transition hover:text-gray-700/75",
                        href: "#services",
                      },
                      " خدمات ",
                      -1
                    ),
                  ])
              ))
            : Z("", !0),
          s.isHome()
            ? (N(),
              z(
                "li",
                wb,
                t[2] ||
                  (t[2] = [
                    $(
                      "a",
                      {
                        class:
                          "text-gray-700 transition hover:text-gray-700/75",
                        href: "#contact",
                      },
                      " اتصل بنا ",
                      -1
                    ),
                  ])
              ))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("li", _b, [
                oe(
                  i,
                  {
                    class: "text-gray-700 transition hover:text-gray-700/75",
                    to: "/bahaaedu/dashboard",
                  },
                  {
                    default: fe(() => t[3] || (t[3] = [Se(" لوحة التحكم ")])),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("li", xb, [
                oe(
                  i,
                  {
                    class: "text-gray-700 transition hover:text-gray-700/75",
                    to: "/bahaaedu/homeworks",
                  },
                  {
                    default: fe(() => t[4] || (t[4] = [Se(" الواجبات ")])),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("li", Sb, [
                oe(
                  i,
                  {
                    class: "text-gray-700 transition hover:text-gray-700/75",
                    to: "/bahaaedu/tests",
                  },
                  {
                    default: fe(() => t[5] || (t[5] = [Se(" الاختبارات ")])),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("li", Cb, [
                oe(
                  i,
                  {
                    class: "text-gray-700 transition hover:text-gray-700/75",
                    to: "/bahaaedu/achievements",
                  },
                  {
                    default: fe(() => t[6] || (t[6] = [Se(" الإنجازات ")])),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          this.$store.state.isAuthenticated
            ? (N(),
              z("li", Eb, [
                oe(
                  i,
                  {
                    class: "text-gray-700 transition hover:text-gray-700/75",
                    to: "/bahaaedu/questions-bank",
                  },
                  {
                    default: fe(() => t[7] || (t[7] = [Se(" بنك الأسئلة ")])),
                    _: 1,
                  }
                ),
              ]))
            : Z("", !0),
          $("li", null, [
            this.$store.state.isAuthenticated
              ? (N(),
                z(
                  "button",
                  {
                    key: 1,
                    class: "text-gray-700 transition hover:text-gray-700/75",
                    onClick:
                      t[0] || (t[0] = (...a) => s.logout && s.logout(...a)),
                  },
                  " تسجيل الخروج "
                ))
              : (N(),
                Oe(
                  i,
                  {
                    key: 0,
                    class: "text-gray-700 transition hover:text-gray-700/75",
                    to: "/bahaaedu/login",
                  },
                  {
                    default: fe(() => t[8] || (t[8] = [Se(" تسجيل الدخول ")])),
                    _: 1,
                  }
                )),
          ]),
        ]),
        t[11] ||
          (t[11] = $(
            "ul",
            { class: "mt-12 flex justify-center gap-6 md:gap-8" },
            [
              $("li", null, [
                $(
                  "a",
                  {
                    href: "https://wa.me/+201007038632",
                    rel: "noreferrer",
                    target: "_blank",
                    class: "text-gray-700 transition hover:text-gray-700/75",
                  },
                  [
                    $("span", { class: "sr-only" }, "Whatsapp"),
                    $("i", { class: "bx bxl-whatsapp text-3xl" }),
                  ]
                ),
              ]),
            ],
            -1
          )),
      ]),
    ])
  );
}
const kb = Yi(gb, [["render", Tb]]),
  Ab = {
    name: "App",
    components: { Header: pb, Footer: kb },
    mounted() {
      this.$store.commit("initializeStore");
    },
  };
function Ob(e, t, n, r, o, s) {
  const i = Ke("Header"),
    a = Ke("router-view"),
    l = Ke("Footer");
  return N(), z(Pe, null, [oe(i), oe(a), oe(l)], 64);
}
const Rb = Yi(Ab, [["render", Ob]]),
  Pb = "modulepreload",
  $b = function (e) {
    return "/" + e;
  },
  Rl = {},
  We = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        a =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((l) => {
          if (((l = $b(l)), l in Rl)) return;
          Rl[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : Pb),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, p) => {
              f.addEventListener("load", d),
                f.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    function s(i) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented))
        throw i;
    }
    return o.then((i) => {
      for (const a of i || []) a.status === "rejected" && s(a.reason);
      return t().catch(s);
    });
  };
function Nb() {
  return _f().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function _f() {
  return typeof navigator < "u" && typeof window < "u"
    ? window
    : typeof globalThis < "u"
    ? globalThis
    : {};
}
const Lb = typeof Proxy == "function",
  Ib = "devtools-plugin:setup",
  Mb = "plugin:settings:set";
let Mn, si;
function Db() {
  var e;
  return (
    Mn !== void 0 ||
      (typeof window < "u" && window.performance
        ? ((Mn = !0), (si = window.performance))
        : typeof globalThis < "u" &&
          !((e = globalThis.perf_hooks) === null || e === void 0) &&
          e.performance
        ? ((Mn = !0), (si = globalThis.perf_hooks.performance))
        : (Mn = !1)),
    Mn
  );
}
function Bb() {
  return Db() ? si.now() : Date.now();
}
class Fb {
  constructor(t, n) {
    (this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = t),
      (this.hook = n);
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const a = t.settings[i];
        r[i] = a.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const i = localStorage.getItem(o),
        a = JSON.parse(i);
      Object.assign(s, a);
    } catch {}
    (this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(o, JSON.stringify(i));
        } catch {}
        s = i;
      },
      now() {
        return Bb();
      },
    }),
      n &&
        n.on(Mb, (i, a) => {
          i === this.plugin.id && this.fallbacks.setSettings(a);
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (i, a) =>
            this.target
              ? this.target.on[a]
              : (...l) => {
                  this.onQueue.push({ method: a, args: l });
                },
        }
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (i, a) =>
            this.target
              ? this.target[a]
              : a === "on"
              ? this.proxiedOn
              : Object.keys(this.fallbacks).includes(a)
              ? (...l) => (
                  this.targetQueue.push({
                    method: a,
                    args: l,
                    resolve: () => {},
                  }),
                  this.fallbacks[a](...l)
                )
              : (...l) =>
                  new Promise((u) => {
                    this.targetQueue.push({ method: a, args: l, resolve: u });
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
function jb(e, t) {
  const n = e,
    r = _f(),
    o = Nb(),
    s = Lb && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s)) o.emit(Ib, e, t);
  else {
    const i = s ? new Fb(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i,
    }),
      i && t(i.proxiedTarget);
  }
}
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Hn = typeof document < "u";
function xf(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Hb(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === "Module" ||
    (e.default && xf(e.default))
  );
}
const ve = Object.assign;
function Rs(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = wt(o) ? o.map(e) : e(o);
  }
  return n;
}
const Cr = () => {},
  wt = Array.isArray,
  Sf = /#/g,
  zb = /&/g,
  Vb = /\//g,
  Ub = /=/g,
  qb = /\?/g,
  Cf = /\+/g,
  Gb = /%5B/g,
  Wb = /%5D/g,
  Ef = /%5E/g,
  Kb = /%60/g,
  Tf = /%7B/g,
  Jb = /%7C/g,
  kf = /%7D/g,
  Qb = /%20/g;
function Zi(e) {
  return encodeURI("" + e)
    .replace(Jb, "|")
    .replace(Gb, "[")
    .replace(Wb, "]");
}
function Xb(e) {
  return Zi(e).replace(Tf, "{").replace(kf, "}").replace(Ef, "^");
}
function ii(e) {
  return Zi(e)
    .replace(Cf, "%2B")
    .replace(Qb, "+")
    .replace(Sf, "%23")
    .replace(zb, "%26")
    .replace(Kb, "`")
    .replace(Tf, "{")
    .replace(kf, "}")
    .replace(Ef, "^");
}
function Yb(e) {
  return ii(e).replace(Ub, "%3D");
}
function Zb(e) {
  return Zi(e).replace(Sf, "%23").replace(qb, "%3F");
}
function ew(e) {
  return e == null ? "" : Zb(e).replace(Vb, "%2F");
}
function Br(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const tw = /\/$/,
  nw = (e) => e.replace(tw, "");
function Ps(e, t, n = "/") {
  let r,
    o = {},
    s = "",
    i = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (s = t.slice(l + 1, a > -1 ? a : t.length)),
      (o = e(s))),
    a > -1 && ((r = r || t.slice(0, a)), (i = t.slice(a, t.length))),
    (r = iw(r ?? t, n)),
    { fullPath: r + (s && "?") + s + i, path: r, query: o, hash: Br(i) }
  );
}
function rw(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Pl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function ow(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    Yn(t.matched[r], n.matched[o]) &&
    Af(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Yn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Af(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!sw(e[n], t[n])) return !1;
  return !0;
}
function sw(e, t) {
  return wt(e) ? $l(e, t) : wt(t) ? $l(t, e) : e === t;
}
function $l(e, t) {
  return wt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function iw(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    r = e.split("/"),
    o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let s = n.length - 1,
    i,
    a;
  for (i = 0; i < r.length; i++)
    if (((a = r[i]), a !== "."))
      if (a === "..") s > 1 && s--;
      else break;
  return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
}
const Wt = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Fr;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Fr || (Fr = {}));
var Er;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Er || (Er = {}));
function aw(e) {
  if (!e)
    if (Hn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), nw(e);
}
const lw = /^[^#]+#/;
function uw(e, t) {
  return e.replace(lw, "#") + t;
}
function cw(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const rs = () => ({ left: window.scrollX, top: window.scrollY });
function fw(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      o =
        typeof n == "string"
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = cw(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Nl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ai = new Map();
function dw(e, t) {
  ai.set(e, t);
}
function hw(e) {
  const t = ai.get(e);
  return ai.delete(e), t;
}
let pw = () => location.protocol + "//" + location.host;
function Of(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let a = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      l = o.slice(a);
    return l[0] !== "/" && (l = "/" + l), Pl(l, "");
  }
  return Pl(n, e) + r + o;
}
function gw(e, t, n, r) {
  let o = [],
    s = [],
    i = null;
  const a = ({ state: d }) => {
    const p = Of(e, location),
      m = n.value,
      y = t.value;
    let v = 0;
    if (d) {
      if (((n.value = p), (t.value = d), i && i === m)) {
        i = null;
        return;
      }
      v = y ? d.position - y.position : 0;
    } else r(p);
    o.forEach((_) => {
      _(n.value, m, {
        delta: v,
        type: Fr.pop,
        direction: v ? (v > 0 ? Er.forward : Er.back) : Er.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function u(d) {
    o.push(d);
    const p = () => {
      const m = o.indexOf(d);
      m > -1 && o.splice(m, 1);
    };
    return s.push(p), p;
  }
  function c() {
    const { history: d } = window;
    d.state && d.replaceState(ve({}, d.state, { scroll: rs() }), "");
  }
  function f() {
    for (const d of s) d();
    (s = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", c);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, { passive: !0 }),
    { pauseListeners: l, listen: u, destroy: f }
  );
}
function Ll(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? rs() : null,
  };
}
function mw(e) {
  const { history: t, location: n } = window,
    r = { value: Of(e, n) },
    o = { value: t.state };
  o.value ||
    s(
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
  function s(l, u, c) {
    const f = e.indexOf("#"),
      d =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : pw() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](u, "", d), (o.value = u);
    } catch (p) {
      console.error(p), n[c ? "replace" : "assign"](d);
    }
  }
  function i(l, u) {
    const c = ve({}, t.state, Ll(o.value.back, l, o.value.forward, !0), u, {
      position: o.value.position,
    });
    s(l, c, !0), (r.value = l);
  }
  function a(l, u) {
    const c = ve({}, o.value, t.state, { forward: l, scroll: rs() });
    s(c.current, c, !0);
    const f = ve({}, Ll(r.value, l, null), { position: c.position + 1 }, u);
    s(l, f, !1), (r.value = l);
  }
  return { location: r, state: o, push: a, replace: i };
}
function yw(e) {
  e = aw(e);
  const t = mw(e),
    n = gw(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = ve(
    { location: "", base: e, go: r, createHref: uw.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function vw(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Rf(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Pf = Symbol("");
var Il;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Il || (Il = {}));
function Zn(e, t) {
  return ve(new Error(), { type: e, [Pf]: !0 }, t);
}
function Lt(e, t) {
  return e instanceof Error && Pf in e && (t == null || !!(e.type & t));
}
const Ml = "[^/]+?",
  bw = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ww = /[.+*?^${}()[\]/\\]/g;
function _w(e, t) {
  const n = ve({}, bw, t),
    r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (o += "/");
    for (let f = 0; f < u.length; f++) {
      const d = u[f];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        f || (o += "/"), (o += d.value.replace(ww, "\\$&")), (p += 40);
      else if (d.type === 1) {
        const { value: m, repeatable: y, optional: v, regexp: _ } = d;
        s.push({ name: m, repeatable: y, optional: v });
        const x = _ || Ml;
        if (x !== Ml) {
          p += 10;
          try {
            new RegExp(`(${x})`);
          } catch (k) {
            throw new Error(
              `Invalid custom RegExp for param "${m}" (${x}): ` + k.message
            );
          }
        }
        let T = y ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        f || (T = v && u.length < 2 ? `(?:/${T})` : "/" + T),
          v && (T += "?"),
          (o += T),
          (p += 20),
          v && (p += -8),
          y && (p += -20),
          x === ".*" && (p += -50);
      }
      c.push(p);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function a(u) {
    const c = u.match(i),
      f = {};
    if (!c) return null;
    for (let d = 1; d < c.length; d++) {
      const p = c[d] || "",
        m = s[d - 1];
      f[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return f;
  }
  function l(u) {
    let c = "",
      f = !1;
    for (const d of e) {
      (!f || !c.endsWith("/")) && (c += "/"), (f = !1);
      for (const p of d)
        if (p.type === 0) c += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: y, optional: v } = p,
            _ = m in u ? u[m] : "";
          if (wt(_) && !y)
            throw new Error(
              `Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`
            );
          const x = wt(_) ? _.join("/") : _;
          if (!x)
            if (v)
              d.length < 2 &&
                (c.endsWith("/") ? (c = c.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${m}"`);
          c += x;
        }
    }
    return c || "/";
  }
  return { re: i, score: r, keys: s, parse: a, stringify: l };
}
function xw(e, t) {
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
function $f(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = xw(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Dl(r)) return 1;
    if (Dl(o)) return -1;
  }
  return o.length - r.length;
}
function Dl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Sw = { type: 0, value: "" },
  Cw = /[a-zA-Z0-9_]/;
function Ew(e) {
  if (!e) return [[]];
  if (e === "/") return [[Sw]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), (s = []);
  }
  let a = 0,
    l,
    u = "",
    c = "";
  function f() {
    u &&
      (n === 0
        ? s.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (s.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          s.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (u = ""));
  }
  function d() {
    u += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (u && f(), i()) : l === ":" ? (f(), (n = 1)) : d();
        break;
      case 4:
        d(), (n = r);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : Cw.test(l)
          ? d()
          : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? c[c.length - 1] == "\\"
            ? (c = c.slice(0, -1) + l)
            : (n = 3)
          : (c += l);
        break;
      case 3:
        f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (c = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), o;
}
function Tw(e, t, n) {
  const r = _w(Ew(e.path), n),
    o = ve(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function kw(e, t) {
  const n = [],
    r = new Map();
  t = Hl({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(f) {
    return r.get(f);
  }
  function s(f, d, p) {
    const m = !p,
      y = Fl(f);
    y.aliasOf = p && p.record;
    const v = Hl(t, f),
      _ = [y];
    if ("alias" in f) {
      const k = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const S of k)
        _.push(
          Fl(
            ve({}, y, {
              components: p ? p.record.components : y.components,
              path: S,
              aliasOf: p ? p.record : y,
            })
          )
        );
    }
    let x, T;
    for (const k of _) {
      const { path: S } = k;
      if (d && S[0] !== "/") {
        const V = d.record.path,
          L = V[V.length - 1] === "/" ? "" : "/";
        k.path = d.record.path + (S && L + S);
      }
      if (
        ((x = Tw(k, d, v)),
        p
          ? p.alias.push(x)
          : ((T = T || x),
            T !== x && T.alias.push(x),
            m && f.name && !jl(x) && i(f.name)),
        Nf(x) && l(x),
        y.children)
      ) {
        const V = y.children;
        for (let L = 0; L < V.length; L++) s(V[L], x, p && p.children[L]);
      }
      p = p || x;
    }
    return T
      ? () => {
          i(T);
        }
      : Cr;
  }
  function i(f) {
    if (Rf(f)) {
      const d = r.get(f);
      d &&
        (r.delete(f),
        n.splice(n.indexOf(d), 1),
        d.children.forEach(i),
        d.alias.forEach(i));
    } else {
      const d = n.indexOf(f);
      d > -1 &&
        (n.splice(d, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function a() {
    return n;
  }
  function l(f) {
    const d = Rw(f, n);
    n.splice(d, 0, f), f.record.name && !jl(f) && r.set(f.record.name, f);
  }
  function u(f, d) {
    let p,
      m = {},
      y,
      v;
    if ("name" in f && f.name) {
      if (((p = r.get(f.name)), !p)) throw Zn(1, { location: f });
      (v = p.record.name),
        (m = ve(
          Bl(
            d.params,
            p.keys
              .filter((T) => !T.optional)
              .concat(p.parent ? p.parent.keys.filter((T) => T.optional) : [])
              .map((T) => T.name)
          ),
          f.params &&
            Bl(
              f.params,
              p.keys.map((T) => T.name)
            )
        )),
        (y = p.stringify(m));
    } else if (f.path != null)
      (y = f.path),
        (p = n.find((T) => T.re.test(y))),
        p && ((m = p.parse(y)), (v = p.record.name));
    else {
      if (((p = d.name ? r.get(d.name) : n.find((T) => T.re.test(d.path))), !p))
        throw Zn(1, { location: f, currentLocation: d });
      (v = p.record.name),
        (m = ve({}, d.params, f.params)),
        (y = p.stringify(m));
    }
    const _ = [];
    let x = p;
    for (; x; ) _.unshift(x.record), (x = x.parent);
    return { name: v, path: y, params: m, matched: _, meta: Ow(_) };
  }
  e.forEach((f) => s(f));
  function c() {
    (n.length = 0), r.clear();
  }
  return {
    addRoute: s,
    resolve: u,
    removeRoute: i,
    clearRoutes: c,
    getRoutes: a,
    getRecordMatcher: o,
  };
}
function Bl(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Fl(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Aw(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Aw(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function jl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Ow(e) {
  return e.reduce((t, n) => ve(t, n.meta), {});
}
function Hl(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function Rw(e, t) {
  let n = 0,
    r = t.length;
  for (; n !== r; ) {
    const s = (n + r) >> 1;
    $f(e, t[s]) < 0 ? (r = s) : (n = s + 1);
  }
  const o = Pw(e);
  return o && (r = t.lastIndexOf(o, r - 1)), r;
}
function Pw(e) {
  let t = e;
  for (; (t = t.parent); ) if (Nf(t) && $f(e, t) === 0) return t;
}
function Nf({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function $w(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < r.length; ++o) {
    const s = r[o].replace(Cf, " "),
      i = s.indexOf("="),
      a = Br(i < 0 ? s : s.slice(0, i)),
      l = i < 0 ? null : Br(s.slice(i + 1));
    if (a in t) {
      let u = t[a];
      wt(u) || (u = t[a] = [u]), u.push(l);
    } else t[a] = l;
  }
  return t;
}
function zl(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = Yb(n)), r == null)) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (wt(r) ? r.map((s) => s && ii(s)) : [r && ii(r)]).forEach((s) => {
      s !== void 0 &&
        ((t += (t.length ? "&" : "") + n), s != null && (t += "=" + s));
    });
  }
  return t;
}
function Nw(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = wt(r)
        ? r.map((o) => (o == null ? null : "" + o))
        : r == null
        ? r
        : "" + r);
  }
  return t;
}
const Lw = Symbol(""),
  Vl = Symbol(""),
  ea = Symbol(""),
  Lf = Symbol(""),
  li = Symbol("");
function pr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function en(e, t, n, r, o, s = (i) => i()) {
  const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((a, l) => {
      const u = (d) => {
          d === !1
            ? l(Zn(4, { from: n, to: t }))
            : d instanceof Error
            ? l(d)
            : vw(d)
            ? l(Zn(2, { from: t, to: d }))
            : (i &&
                r.enterCallbacks[o] === i &&
                typeof d == "function" &&
                i.push(d),
              a());
        },
        c = s(() => e.call(r && r.instances[o], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
    });
}
function $s(e, t, n, r, o = (s) => s()) {
  const s = [];
  for (const i of e)
    for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a]))
        if (xf(l)) {
          const c = (l.__vccOpts || l)[t];
          c && s.push(en(c, n, r, i, a, o));
        } else {
          let u = l();
          s.push(() =>
            u.then((c) => {
              if (!c)
                throw new Error(
                  `Couldn't resolve component "${a}" at "${i.path}"`
                );
              const f = Hb(c) ? c.default : c;
              (i.mods[a] = c), (i.components[a] = f);
              const p = (f.__vccOpts || f)[t];
              return p && en(p, n, r, i, a, o)();
            })
          );
        }
    }
  return s;
}
function Ul(e) {
  const t = qe(ea),
    n = qe(Lf),
    r = X(() => {
      const l = be(e.to);
      return t.resolve(l);
    }),
    o = X(() => {
      const { matched: l } = r.value,
        { length: u } = l,
        c = l[u - 1],
        f = n.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(Yn.bind(null, c));
      if (d > -1) return d;
      const p = ql(l[u - 2]);
      return u > 1 && ql(c) === p && f[f.length - 1].path !== p
        ? f.findIndex(Yn.bind(null, l[u - 2]))
        : d;
    }),
    s = X(() => o.value > -1 && Bw(n.params, r.value.params)),
    i = X(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        Af(n.params, r.value.params)
    );
  function a(l = {}) {
    return Dw(l)
      ? t[be(e.replace) ? "replace" : "push"](be(e.to)).catch(Cr)
      : Promise.resolve();
  }
  return {
    route: r,
    href: X(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: a,
  };
}
const Iw = ke({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Ul,
    setup(e, { slots: t }) {
      const n = er(Ul(e)),
        { options: r } = qe(ea),
        o = X(() => ({
          [Gl(e.activeClass, r.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Gl(
            e.exactActiveClass,
            r.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const s = t.default && t.default(n);
        return e.custom
          ? s
          : Lc(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              s
            );
      };
    },
  }),
  Mw = Iw;
function Dw(e) {
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
function Bw(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!wt(o) || o.length !== r.length || r.some((s, i) => s !== o[i]))
      return !1;
  }
  return !0;
}
function ql(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Gl = (e, t, n) => e ?? t ?? n,
  Fw = ke({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = qe(li),
        o = X(() => e.route || r.value),
        s = qe(Vl, 0),
        i = X(() => {
          let u = be(s);
          const { matched: c } = o.value;
          let f;
          for (; (f = c[u]) && !f.components; ) u++;
          return u;
        }),
        a = X(() => o.value.matched[i.value]);
      xn(
        Vl,
        X(() => i.value + 1)
      ),
        xn(Lw, a),
        xn(li, o);
      const l = Gu();
      return (
        Jn(
          () => [l.value, a.value, e.name],
          ([u, c, f], [d, p, m]) => {
            c &&
              ((c.instances[f] = u),
              p &&
                p !== c &&
                u &&
                u === d &&
                (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards),
                c.updateGuards.size || (c.updateGuards = p.updateGuards))),
              u &&
                c &&
                (!p || !Yn(c, p) || !d) &&
                (c.enterCallbacks[f] || []).forEach((y) => y(u));
          },
          { flush: "post" }
        ),
        () => {
          const u = o.value,
            c = e.name,
            f = a.value,
            d = f && f.components[c];
          if (!d) return Wl(n.default, { Component: d, route: u });
          const p = f.props[c],
            m = p
              ? p === !0
                ? u.params
                : typeof p == "function"
                ? p(u)
                : p
              : null,
            v = Lc(
              d,
              ve({}, m, t, {
                onVnodeUnmounted: (_) => {
                  _.component.isUnmounted && (f.instances[c] = null);
                },
                ref: l,
              })
            );
          return Wl(n.default, { Component: v, route: u }) || v;
        }
      );
    },
  });
function Wl(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const jw = Fw;
function Hw(e) {
  const t = kw(e.routes, e),
    n = e.parseQuery || $w,
    r = e.stringifyQuery || zl,
    o = e.history,
    s = pr(),
    i = pr(),
    a = pr(),
    l = Sh(Wt);
  let u = Wt;
  Hn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const c = Rs.bind(null, (E) => "" + E),
    f = Rs.bind(null, ew),
    d = Rs.bind(null, Br);
  function p(E, H) {
    let F, U;
    return (
      Rf(E) ? ((F = t.getRecordMatcher(E)), (U = H)) : (U = E), t.addRoute(U, F)
    );
  }
  function m(E) {
    const H = t.getRecordMatcher(E);
    H && t.removeRoute(H);
  }
  function y() {
    return t.getRoutes().map((E) => E.record);
  }
  function v(E) {
    return !!t.getRecordMatcher(E);
  }
  function _(E, H) {
    if (((H = ve({}, H || l.value)), typeof E == "string")) {
      const g = Ps(n, E, H.path),
        b = t.resolve({ path: g.path }, H),
        O = o.createHref(g.fullPath);
      return ve(g, b, {
        params: d(b.params),
        hash: Br(g.hash),
        redirectedFrom: void 0,
        href: O,
      });
    }
    let F;
    if (E.path != null) F = ve({}, E, { path: Ps(n, E.path, H.path).path });
    else {
      const g = ve({}, E.params);
      for (const b in g) g[b] == null && delete g[b];
      (F = ve({}, E, { params: f(g) })), (H.params = f(H.params));
    }
    const U = t.resolve(F, H),
      me = E.hash || "";
    U.params = c(d(U.params));
    const Ae = rw(r, ve({}, E, { hash: Xb(me), path: U.path })),
      h = o.createHref(Ae);
    return ve(
      { fullPath: Ae, hash: me, query: r === zl ? Nw(E.query) : E.query || {} },
      U,
      { redirectedFrom: void 0, href: h }
    );
  }
  function x(E) {
    return typeof E == "string" ? Ps(n, E, l.value.path) : ve({}, E);
  }
  function T(E, H) {
    if (u !== E) return Zn(8, { from: H, to: E });
  }
  function k(E) {
    return L(E);
  }
  function S(E) {
    return k(ve(x(E), { replace: !0 }));
  }
  function V(E) {
    const H = E.matched[E.matched.length - 1];
    if (H && H.redirect) {
      const { redirect: F } = H;
      let U = typeof F == "function" ? F(E) : F;
      return (
        typeof U == "string" &&
          ((U = U.includes("?") || U.includes("#") ? (U = x(U)) : { path: U }),
          (U.params = {})),
        ve(
          {
            query: E.query,
            hash: E.hash,
            params: U.path != null ? {} : E.params,
          },
          U
        )
      );
    }
  }
  function L(E, H) {
    const F = (u = _(E)),
      U = l.value,
      me = E.state,
      Ae = E.force,
      h = E.replace === !0,
      g = V(F);
    if (g)
      return L(
        ve(x(g), {
          state: typeof g == "object" ? ve({}, me, g.state) : me,
          force: Ae,
          replace: h,
        }),
        H || F
      );
    const b = F;
    b.redirectedFrom = H;
    let O;
    return (
      !Ae &&
        ow(r, U, F) &&
        ((O = Zn(16, { to: b, from: U })), Be(U, U, !0, !1)),
      (O ? Promise.resolve(O) : J(b, U))
        .catch((C) => (Lt(C) ? (Lt(C, 2) ? C : ft(C)) : le(C, b, U)))
        .then((C) => {
          if (C) {
            if (Lt(C, 2))
              return L(
                ve({ replace: h }, x(C.to), {
                  state: typeof C.to == "object" ? ve({}, me, C.to.state) : me,
                  force: Ae,
                }),
                H || b
              );
          } else C = A(b, U, !0, h, me);
          return te(b, U, C), C;
        })
    );
  }
  function G(E, H) {
    const F = T(E, H);
    return F ? Promise.reject(F) : Promise.resolve();
  }
  function B(E) {
    const H = Nn.values().next().value;
    return H && typeof H.runWithContext == "function"
      ? H.runWithContext(E)
      : E();
  }
  function J(E, H) {
    let F;
    const [U, me, Ae] = zw(E, H);
    F = $s(U.reverse(), "beforeRouteLeave", E, H);
    for (const g of U)
      g.leaveGuards.forEach((b) => {
        F.push(en(b, E, H));
      });
    const h = G.bind(null, E, H);
    return (
      F.push(h),
      it(F)
        .then(() => {
          F = [];
          for (const g of s.list()) F.push(en(g, E, H));
          return F.push(h), it(F);
        })
        .then(() => {
          F = $s(me, "beforeRouteUpdate", E, H);
          for (const g of me)
            g.updateGuards.forEach((b) => {
              F.push(en(b, E, H));
            });
          return F.push(h), it(F);
        })
        .then(() => {
          F = [];
          for (const g of Ae)
            if (g.beforeEnter)
              if (wt(g.beforeEnter))
                for (const b of g.beforeEnter) F.push(en(b, E, H));
              else F.push(en(g.beforeEnter, E, H));
          return F.push(h), it(F);
        })
        .then(
          () => (
            E.matched.forEach((g) => (g.enterCallbacks = {})),
            (F = $s(Ae, "beforeRouteEnter", E, H, B)),
            F.push(h),
            it(F)
          )
        )
        .then(() => {
          F = [];
          for (const g of i.list()) F.push(en(g, E, H));
          return F.push(h), it(F);
        })
        .catch((g) => (Lt(g, 8) ? g : Promise.reject(g)))
    );
  }
  function te(E, H, F) {
    a.list().forEach((U) => B(() => U(E, H, F)));
  }
  function A(E, H, F, U, me) {
    const Ae = T(E, H);
    if (Ae) return Ae;
    const h = H === Wt,
      g = Hn ? history.state : {};
    F &&
      (U || h
        ? o.replace(E.fullPath, ve({ scroll: h && g && g.scroll }, me))
        : o.push(E.fullPath, me)),
      (l.value = E),
      Be(E, H, F, h),
      ft();
  }
  let se;
  function ie() {
    se ||
      (se = o.listen((E, H, F) => {
        if (!Jr.listening) return;
        const U = _(E),
          me = V(U);
        if (me) {
          L(ve(me, { replace: !0 }), U).catch(Cr);
          return;
        }
        u = U;
        const Ae = l.value;
        Hn && dw(Nl(Ae.fullPath, F.delta), rs()),
          J(U, Ae)
            .catch((h) =>
              Lt(h, 12)
                ? h
                : Lt(h, 2)
                ? (L(h.to, U)
                    .then((g) => {
                      Lt(g, 20) &&
                        !F.delta &&
                        F.type === Fr.pop &&
                        o.go(-1, !1);
                    })
                    .catch(Cr),
                  Promise.reject())
                : (F.delta && o.go(-F.delta, !1), le(h, U, Ae))
            )
            .then((h) => {
              (h = h || A(U, Ae, !1)),
                h &&
                  (F.delta && !Lt(h, 8)
                    ? o.go(-F.delta, !1)
                    : F.type === Fr.pop && Lt(h, 20) && o.go(-1, !1)),
                te(U, Ae, h);
            })
            .catch(Cr);
      }));
  }
  let Ce = pr(),
    ae = pr(),
    ne;
  function le(E, H, F) {
    ft(E);
    const U = ae.list();
    return (
      U.length ? U.forEach((me) => me(E, H, F)) : console.error(E),
      Promise.reject(E)
    );
  }
  function ze() {
    return ne && l.value !== Wt
      ? Promise.resolve()
      : new Promise((E, H) => {
          Ce.add([E, H]);
        });
  }
  function ft(E) {
    return (
      ne ||
        ((ne = !E),
        ie(),
        Ce.list().forEach(([H, F]) => (E ? F(E) : H())),
        Ce.reset()),
      E
    );
  }
  function Be(E, H, F, U) {
    const { scrollBehavior: me } = e;
    if (!Hn || !me) return Promise.resolve();
    const Ae =
      (!F && hw(Nl(E.fullPath, 0))) ||
      ((U || !F) && history.state && history.state.scroll) ||
      null;
    return zo()
      .then(() => me(E, H, Ae))
      .then((h) => h && fw(h))
      .catch((h) => le(h, E, H));
  }
  const Le = (E) => o.go(E);
  let $n;
  const Nn = new Set(),
    Jr = {
      currentRoute: l,
      listening: !0,
      addRoute: p,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: v,
      getRoutes: y,
      resolve: _,
      options: e,
      push: k,
      replace: S,
      go: Le,
      back: () => Le(-1),
      forward: () => Le(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: ae.add,
      isReady: ze,
      install(E) {
        const H = this;
        E.component("RouterLink", Mw),
          E.component("RouterView", jw),
          (E.config.globalProperties.$router = H),
          Object.defineProperty(E.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => be(l),
          }),
          Hn &&
            !$n &&
            l.value === Wt &&
            (($n = !0), k(o.location).catch((me) => {}));
        const F = {};
        for (const me in Wt)
          Object.defineProperty(F, me, {
            get: () => l.value[me],
            enumerable: !0,
          });
        E.provide(ea, H), E.provide(Lf, Uu(F)), E.provide(li, l);
        const U = E.unmount;
        Nn.add(E),
          (E.unmount = function () {
            Nn.delete(E),
              Nn.size < 1 &&
                ((u = Wt),
                se && se(),
                (se = null),
                (l.value = Wt),
                ($n = !1),
                (ne = !1)),
              U();
          });
      },
    };
  function it(E) {
    return E.reduce((H, F) => H.then(() => B(F)), Promise.resolve());
  }
  return Jr;
}
function zw(e, t) {
  const n = [],
    r = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const a = t.matched[i];
    a && (e.matched.find((u) => Yn(u, a)) ? r.push(a) : n.push(a));
    const l = e.matched[i];
    l && (t.matched.find((u) => Yn(u, l)) || o.push(l));
  }
  return [n, r, o];
}
const Vw = [
    {
      path: "/bahaaedu/",
      component: () => We(() => import("./Home-zB9X0yMB.js"), []),
    },
    {
      path: "/bahaaedu/login",
      component: () => We(() => import("./Login-BhTAfoFg.js"), []),
    },
    {
      path: "/bahaaedu/dashboard",
      component: () =>
        We(() => import("./Dashboard-Be3mVVDI.js"), __vite__mapDeps([0, 1])),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/homeworks",
      component: () =>
        We(() => import("./Homeworks-GjxoMqtB.js"), __vite__mapDeps([2, 1])),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/tests",
      component: () =>
        We(() => import("./Tests-m-CakkpO.js"), __vite__mapDeps([3, 1])),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/videos",
      component: () =>
        We(() => import("./Videos-DsGqeFPG.js"), __vite__mapDeps([4, 1])),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/tests/:id",
      component: () =>
        We(
          () => import("./TestsQuestions-CWDgkThy.js"),
          __vite__mapDeps([5, 6])
        ),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/homeworks/:id",
      component: () =>
        We(
          () => import("./HomeworksQuestions-D2BCFKov.js"),
          __vite__mapDeps([7, 6])
        ),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/videos/:id",
      component: () =>
        We(
          () => import("./VideosQuestions-esyARQ__.js"),
          __vite__mapDeps([8, 6])
        ),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/questions-bank",
      component: () =>
        We(
          () => import("./QuestionsBank-B-GxqSkS.js"),
          __vite__mapDeps([9, 6])
        ),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/achievements",
      component: () =>
        We(() => import("./Achievements-CJd2vIOy.js").then((e) => e.A), []),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/publictest/:id",
      component: () =>
        We(() => import("./PublicTest-BuabF-jQ.js"), __vite__mapDeps([10, 6])),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/:type/answers/:id",
      component: () => We(() => import("./Answers-MqrZaloF.js"), []),
      meta: { requiresAuth: !0 },
    },
    {
      path: "/bahaaedu/plans/:id",
      component: () => We(() => import("./Plans-D4kidN5a.js"), []),
      meta: { requiresAuth: !0 },
    },
  ],
  If = Hw({ history: yw(), routes: Vw });
If.beforeEach((e, t, n) => {
  e.matched.some((r) => r.meta.requireLogin) && !store.state.isAuthenticated
    ? n({ name: "Login", query: { to: e.path } })
    : n();
});
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */ var ta = "store";
function Uw(e) {
  return e === void 0 && (e = null), qe(e !== null ? e : ta);
}
function qw(e, t) {
  return e.filter(t)[0];
}
function ui(e, t) {
  if ((t === void 0 && (t = []), e === null || typeof e != "object")) return e;
  var n = qw(t, function (o) {
    return o.original === e;
  });
  if (n) return n.copy;
  var r = Array.isArray(e) ? [] : {};
  return (
    t.push({ original: e, copy: r }),
    Object.keys(e).forEach(function (o) {
      r[o] = ui(e[o], t);
    }),
    r
  );
}
function sr(e, t) {
  Object.keys(e).forEach(function (n) {
    return t(e[n], n);
  });
}
function Mf(e) {
  return e !== null && typeof e == "object";
}
function Gw(e) {
  return e && typeof e.then == "function";
}
function Ww(e, t) {
  return function () {
    return e(t);
  };
}
function Df(e, t, n) {
  return (
    t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
    function () {
      var r = t.indexOf(e);
      r > -1 && t.splice(r, 1);
    }
  );
}
function Bf(e, t) {
  (e._actions = Object.create(null)),
    (e._mutations = Object.create(null)),
    (e._wrappedGetters = Object.create(null)),
    (e._modulesNamespaceMap = Object.create(null));
  var n = e.state;
  os(e, n, [], e._modules.root, !0), na(e, n, t);
}
function na(e, t, n) {
  var r = e._state,
    o = e._scope;
  (e.getters = {}), (e._makeLocalGettersCache = Object.create(null));
  var s = e._wrappedGetters,
    i = {},
    a = {},
    l = Yd(!0);
  l.run(function () {
    sr(s, function (u, c) {
      (i[c] = Ww(u, e)),
        (a[c] = X(function () {
          return i[c]();
        })),
        Object.defineProperty(e.getters, c, {
          get: function () {
            return a[c].value;
          },
          enumerable: !0,
        });
    });
  }),
    (e._state = er({ data: t })),
    (e._scope = l),
    e.strict && Yw(e),
    r &&
      n &&
      e._withCommit(function () {
        r.data = null;
      }),
    o && o.stop();
}
function os(e, t, n, r, o) {
  var s = !n.length,
    i = e._modules.getNamespace(n);
  if (
    (r.namespaced &&
      (e._modulesNamespaceMap[i], (e._modulesNamespaceMap[i] = r)),
    !s && !o)
  ) {
    var a = ra(t, n.slice(0, -1)),
      l = n[n.length - 1];
    e._withCommit(function () {
      a[l] = r.state;
    });
  }
  var u = (r.context = Kw(e, i, n));
  r.forEachMutation(function (c, f) {
    var d = i + f;
    Jw(e, d, c, u);
  }),
    r.forEachAction(function (c, f) {
      var d = c.root ? f : i + f,
        p = c.handler || c;
      Qw(e, d, p, u);
    }),
    r.forEachGetter(function (c, f) {
      var d = i + f;
      Xw(e, d, c, u);
    }),
    r.forEachChild(function (c, f) {
      os(e, t, n.concat(f), c, o);
    });
}
function Kw(e, t, n) {
  var r = t === "",
    o = {
      dispatch: r
        ? e.dispatch
        : function (s, i, a) {
            var l = Po(s, i, a),
              u = l.payload,
              c = l.options,
              f = l.type;
            return (!c || !c.root) && (f = t + f), e.dispatch(f, u);
          },
      commit: r
        ? e.commit
        : function (s, i, a) {
            var l = Po(s, i, a),
              u = l.payload,
              c = l.options,
              f = l.type;
            (!c || !c.root) && (f = t + f), e.commit(f, u, c);
          },
    };
  return (
    Object.defineProperties(o, {
      getters: {
        get: r
          ? function () {
              return e.getters;
            }
          : function () {
              return Ff(e, t);
            },
      },
      state: {
        get: function () {
          return ra(e.state, n);
        },
      },
    }),
    o
  );
}
function Ff(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {},
      r = t.length;
    Object.keys(e.getters).forEach(function (o) {
      if (o.slice(0, r) === t) {
        var s = o.slice(r);
        Object.defineProperty(n, s, {
          get: function () {
            return e.getters[o];
          },
          enumerable: !0,
        });
      }
    }),
      (e._makeLocalGettersCache[t] = n);
  }
  return e._makeLocalGettersCache[t];
}
function Jw(e, t, n, r) {
  var o = e._mutations[t] || (e._mutations[t] = []);
  o.push(function (i) {
    n.call(e, r.state, i);
  });
}
function Qw(e, t, n, r) {
  var o = e._actions[t] || (e._actions[t] = []);
  o.push(function (i) {
    var a = n.call(
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
      Gw(a) || (a = Promise.resolve(a)),
      e._devtoolHook
        ? a.catch(function (l) {
            throw (e._devtoolHook.emit("vuex:error", l), l);
          })
        : a
    );
  });
}
function Xw(e, t, n, r) {
  e._wrappedGetters[t] ||
    (e._wrappedGetters[t] = function (s) {
      return n(r.state, r.getters, s.state, s.getters);
    });
}
function Yw(e) {
  Jn(
    function () {
      return e._state.data;
    },
    function () {},
    { deep: !0, flush: "sync" }
  );
}
function ra(e, t) {
  return t.reduce(function (n, r) {
    return n[r];
  }, e);
}
function Po(e, t, n) {
  return (
    Mf(e) && e.type && ((n = t), (t = e), (e = e.type)),
    { type: e, payload: t, options: n }
  );
}
var Zw = "vuex bindings",
  Kl = "vuex:mutations",
  Ns = "vuex:actions",
  Dn = "vuex",
  e_ = 0;
function t_(e, t) {
  jb(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [Zw],
    },
    function (n) {
      n.addTimelineLayer({ id: Kl, label: "Vuex Mutations", color: Jl }),
        n.addTimelineLayer({ id: Ns, label: "Vuex Actions", color: Jl }),
        n.addInspector({
          id: Dn,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores...",
        }),
        n.on.getInspectorTree(function (r) {
          if (r.app === e && r.inspectorId === Dn)
            if (r.filter) {
              var o = [];
              Vf(o, t._modules.root, r.filter, ""), (r.rootNodes = o);
            } else r.rootNodes = [zf(t._modules.root, "")];
        }),
        n.on.getInspectorState(function (r) {
          if (r.app === e && r.inspectorId === Dn) {
            var o = r.nodeId;
            Ff(t, o),
              (r.state = o_(
                i_(t._modules, o),
                o === "root" ? t.getters : t._makeLocalGettersCache,
                o
              ));
          }
        }),
        n.on.editInspectorState(function (r) {
          if (r.app === e && r.inspectorId === Dn) {
            var o = r.nodeId,
              s = r.path;
            o !== "root" && (s = o.split("/").filter(Boolean).concat(s)),
              t._withCommit(function () {
                r.set(t._state.data, s, r.state.value);
              });
          }
        }),
        t.subscribe(function (r, o) {
          var s = {};
          r.payload && (s.payload = r.payload),
            (s.state = o),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(Dn),
            n.sendInspectorState(Dn),
            n.addTimelineEvent({
              layerId: Kl,
              event: { time: Date.now(), title: r.type, data: s },
            });
        }),
        t.subscribeAction({
          before: function (r, o) {
            var s = {};
            r.payload && (s.payload = r.payload),
              (r._id = e_++),
              (r._time = Date.now()),
              (s.state = o),
              n.addTimelineEvent({
                layerId: Ns,
                event: {
                  time: r._time,
                  title: r.type,
                  groupId: r._id,
                  subtitle: "start",
                  data: s,
                },
              });
          },
          after: function (r, o) {
            var s = {},
              i = Date.now() - r._time;
            (s.duration = {
              _custom: {
                type: "duration",
                display: i + "ms",
                tooltip: "Action duration",
                value: i,
              },
            }),
              r.payload && (s.payload = r.payload),
              (s.state = o),
              n.addTimelineEvent({
                layerId: Ns,
                event: {
                  time: Date.now(),
                  title: r.type,
                  groupId: r._id,
                  subtitle: "end",
                  data: s,
                },
              });
          },
        });
    }
  );
}
var Jl = 8702998,
  n_ = 6710886,
  r_ = 16777215,
  jf = { label: "namespaced", textColor: r_, backgroundColor: n_ };
function Hf(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function zf(e, t) {
  return {
    id: t || "root",
    label: Hf(t),
    tags: e.namespaced ? [jf] : [],
    children: Object.keys(e._children).map(function (n) {
      return zf(e._children[n], t + n + "/");
    }),
  };
}
function Vf(e, t, n, r) {
  r.includes(n) &&
    e.push({
      id: r || "root",
      label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
      tags: t.namespaced ? [jf] : [],
    }),
    Object.keys(t._children).forEach(function (o) {
      Vf(e, t._children[o], n, r + o + "/");
    });
}
function o_(e, t, n) {
  t = n === "root" ? t : t[n];
  var r = Object.keys(t),
    o = {
      state: Object.keys(e.state).map(function (i) {
        return { key: i, editable: !0, value: e.state[i] };
      }),
    };
  if (r.length) {
    var s = s_(t);
    o.getters = Object.keys(s).map(function (i) {
      return {
        key: i.endsWith("/") ? Hf(i) : i,
        editable: !1,
        value: ci(function () {
          return s[i];
        }),
      };
    });
  }
  return o;
}
function s_(e) {
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      var r = n.split("/");
      if (r.length > 1) {
        var o = t,
          s = r.pop();
        r.forEach(function (i) {
          o[i] ||
            (o[i] = {
              _custom: {
                value: {},
                display: i,
                tooltip: "Module",
                abstract: !0,
              },
            }),
            (o = o[i]._custom.value);
        }),
          (o[s] = ci(function () {
            return e[n];
          }));
      } else
        t[n] = ci(function () {
          return e[n];
        });
    }),
    t
  );
}
function i_(e, t) {
  var n = t.split("/").filter(function (r) {
    return r;
  });
  return n.reduce(
    function (r, o, s) {
      var i = r[o];
      if (!i)
        throw new Error('Missing module "' + o + '" for path "' + t + '".');
      return s === n.length - 1 ? i : i._children;
    },
    t === "root" ? e : e.root._children
  );
}
function ci(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var _t = function (t, n) {
    (this.runtime = n),
      (this._children = Object.create(null)),
      (this._rawModule = t);
    var r = t.state;
    this.state = (typeof r == "function" ? r() : r) || {};
  },
  Uf = { namespaced: { configurable: !0 } };
Uf.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
_t.prototype.addChild = function (t, n) {
  this._children[t] = n;
};
_t.prototype.removeChild = function (t) {
  delete this._children[t];
};
_t.prototype.getChild = function (t) {
  return this._children[t];
};
_t.prototype.hasChild = function (t) {
  return t in this._children;
};
_t.prototype.update = function (t) {
  (this._rawModule.namespaced = t.namespaced),
    t.actions && (this._rawModule.actions = t.actions),
    t.mutations && (this._rawModule.mutations = t.mutations),
    t.getters && (this._rawModule.getters = t.getters);
};
_t.prototype.forEachChild = function (t) {
  sr(this._children, t);
};
_t.prototype.forEachGetter = function (t) {
  this._rawModule.getters && sr(this._rawModule.getters, t);
};
_t.prototype.forEachAction = function (t) {
  this._rawModule.actions && sr(this._rawModule.actions, t);
};
_t.prototype.forEachMutation = function (t) {
  this._rawModule.mutations && sr(this._rawModule.mutations, t);
};
Object.defineProperties(_t.prototype, Uf);
var Pn = function (t) {
  this.register([], t, !1);
};
Pn.prototype.get = function (t) {
  return t.reduce(function (n, r) {
    return n.getChild(r);
  }, this.root);
};
Pn.prototype.getNamespace = function (t) {
  var n = this.root;
  return t.reduce(function (r, o) {
    return (n = n.getChild(o)), r + (n.namespaced ? o + "/" : "");
  }, "");
};
Pn.prototype.update = function (t) {
  qf([], this.root, t);
};
Pn.prototype.register = function (t, n, r) {
  var o = this;
  r === void 0 && (r = !0);
  var s = new _t(n, r);
  if (t.length === 0) this.root = s;
  else {
    var i = this.get(t.slice(0, -1));
    i.addChild(t[t.length - 1], s);
  }
  n.modules &&
    sr(n.modules, function (a, l) {
      o.register(t.concat(l), a, r);
    });
};
Pn.prototype.unregister = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1],
    o = n.getChild(r);
  o && o.runtime && n.removeChild(r);
};
Pn.prototype.isRegistered = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function qf(e, t, n) {
  if ((t.update(n), n.modules))
    for (var r in n.modules) {
      if (!t.getChild(r)) return;
      qf(e.concat(r), t.getChild(r), n.modules[r]);
    }
}
function a_(e) {
  return new Ge(e);
}
var Ge = function (t) {
    var n = this;
    t === void 0 && (t = {});
    var r = t.plugins;
    r === void 0 && (r = []);
    var o = t.strict;
    o === void 0 && (o = !1);
    var s = t.devtools;
    (this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new Pn(t)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._scope = null),
      (this._devtools = s);
    var i = this,
      a = this,
      l = a.dispatch,
      u = a.commit;
    (this.dispatch = function (d, p) {
      return l.call(i, d, p);
    }),
      (this.commit = function (d, p, m) {
        return u.call(i, d, p, m);
      }),
      (this.strict = o);
    var c = this._modules.root.state;
    os(this, c, [], this._modules.root),
      na(this, c),
      r.forEach(function (f) {
        return f(n);
      });
  },
  oa = { state: { configurable: !0 } };
Ge.prototype.install = function (t, n) {
  t.provide(n || ta, this), (t.config.globalProperties.$store = this);
  var r = this._devtools !== void 0 ? this._devtools : !1;
  r && t_(t, this);
};
oa.state.get = function () {
  return this._state.data;
};
oa.state.set = function (e) {};
Ge.prototype.commit = function (t, n, r) {
  var o = this,
    s = Po(t, n, r),
    i = s.type,
    a = s.payload,
    l = { type: i, payload: a },
    u = this._mutations[i];
  u &&
    (this._withCommit(function () {
      u.forEach(function (f) {
        f(a);
      });
    }),
    this._subscribers.slice().forEach(function (c) {
      return c(l, o.state);
    }));
};
Ge.prototype.dispatch = function (t, n) {
  var r = this,
    o = Po(t, n),
    s = o.type,
    i = o.payload,
    a = { type: s, payload: i },
    l = this._actions[s];
  if (l) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (c) {
          return c.before;
        })
        .forEach(function (c) {
          return c.before(a, r.state);
        });
    } catch {}
    var u =
      l.length > 1
        ? Promise.all(
            l.map(function (c) {
              return c(i);
            })
          )
        : l[0](i);
    return new Promise(function (c, f) {
      u.then(
        function (d) {
          try {
            r._actionSubscribers
              .filter(function (p) {
                return p.after;
              })
              .forEach(function (p) {
                return p.after(a, r.state);
              });
          } catch {}
          c(d);
        },
        function (d) {
          try {
            r._actionSubscribers
              .filter(function (p) {
                return p.error;
              })
              .forEach(function (p) {
                return p.error(a, r.state, d);
              });
          } catch {}
          f(d);
        }
      );
    });
  }
};
Ge.prototype.subscribe = function (t, n) {
  return Df(t, this._subscribers, n);
};
Ge.prototype.subscribeAction = function (t, n) {
  var r = typeof t == "function" ? { before: t } : t;
  return Df(r, this._actionSubscribers, n);
};
Ge.prototype.watch = function (t, n, r) {
  var o = this;
  return Jn(
    function () {
      return t(o.state, o.getters);
    },
    n,
    Object.assign({}, r)
  );
};
Ge.prototype.replaceState = function (t) {
  var n = this;
  this._withCommit(function () {
    n._state.data = t;
  });
};
Ge.prototype.registerModule = function (t, n, r) {
  r === void 0 && (r = {}),
    typeof t == "string" && (t = [t]),
    this._modules.register(t, n),
    os(this, this.state, t, this._modules.get(t), r.preserveState),
    na(this, this.state);
};
Ge.prototype.unregisterModule = function (t) {
  var n = this;
  typeof t == "string" && (t = [t]),
    this._modules.unregister(t),
    this._withCommit(function () {
      var r = ra(n.state, t.slice(0, -1));
      delete r[t[t.length - 1]];
    }),
    Bf(this);
};
Ge.prototype.hasModule = function (t) {
  return typeof t == "string" && (t = [t]), this._modules.isRegistered(t);
};
Ge.prototype.hotUpdate = function (t) {
  this._modules.update(t), Bf(this, !0);
};
Ge.prototype._withCommit = function (t) {
  var n = this._committing;
  (this._committing = !0), t(), (this._committing = n);
};
Object.defineProperties(Ge.prototype, oa);
var Gf = is(function (e, t) {
    var n = {};
    return (
      ss(t).forEach(function (r) {
        var o = r.key,
          s = r.val;
        (n[o] = function () {
          var a = this.$store.state,
            l = this.$store.getters;
          if (e) {
            var u = as(this.$store, "mapState", e);
            if (!u) return;
            (a = u.context.state), (l = u.context.getters);
          }
          return typeof s == "function" ? s.call(this, a, l) : a[s];
        }),
          (n[o].vuex = !0);
      }),
      n
    );
  }),
  Wf = is(function (e, t) {
    var n = {};
    return (
      ss(t).forEach(function (r) {
        var o = r.key,
          s = r.val;
        n[o] = function () {
          for (var a = [], l = arguments.length; l--; ) a[l] = arguments[l];
          var u = this.$store.commit;
          if (e) {
            var c = as(this.$store, "mapMutations", e);
            if (!c) return;
            u = c.context.commit;
          }
          return typeof s == "function"
            ? s.apply(this, [u].concat(a))
            : u.apply(this.$store, [s].concat(a));
        };
      }),
      n
    );
  }),
  Kf = is(function (e, t) {
    var n = {};
    return (
      ss(t).forEach(function (r) {
        var o = r.key,
          s = r.val;
        (s = e + s),
          (n[o] = function () {
            if (!(e && !as(this.$store, "mapGetters", e)))
              return this.$store.getters[s];
          }),
          (n[o].vuex = !0);
      }),
      n
    );
  }),
  Jf = is(function (e, t) {
    var n = {};
    return (
      ss(t).forEach(function (r) {
        var o = r.key,
          s = r.val;
        n[o] = function () {
          for (var a = [], l = arguments.length; l--; ) a[l] = arguments[l];
          var u = this.$store.dispatch;
          if (e) {
            var c = as(this.$store, "mapActions", e);
            if (!c) return;
            u = c.context.dispatch;
          }
          return typeof s == "function"
            ? s.apply(this, [u].concat(a))
            : u.apply(this.$store, [s].concat(a));
        };
      }),
      n
    );
  }),
  l_ = function (e) {
    return {
      mapState: Gf.bind(null, e),
      mapGetters: Kf.bind(null, e),
      mapMutations: Wf.bind(null, e),
      mapActions: Jf.bind(null, e),
    };
  };
function ss(e) {
  return u_(e)
    ? Array.isArray(e)
      ? e.map(function (t) {
          return { key: t, val: t };
        })
      : Object.keys(e).map(function (t) {
          return { key: t, val: e[t] };
        })
    : [];
}
function u_(e) {
  return Array.isArray(e) || Mf(e);
}
function is(e) {
  return function (t, n) {
    return (
      typeof t != "string"
        ? ((n = t), (t = ""))
        : t.charAt(t.length - 1) !== "/" && (t += "/"),
      e(t, n)
    );
  };
}
function as(e, t, n) {
  var r = e._modulesNamespaceMap[n];
  return r;
}
function c_(e) {
  e === void 0 && (e = {});
  var t = e.collapsed;
  t === void 0 && (t = !0);
  var n = e.filter;
  n === void 0 &&
    (n = function (c, f, d) {
      return !0;
    });
  var r = e.transformer;
  r === void 0 &&
    (r = function (c) {
      return c;
    });
  var o = e.mutationTransformer;
  o === void 0 &&
    (o = function (c) {
      return c;
    });
  var s = e.actionFilter;
  s === void 0 &&
    (s = function (c, f) {
      return !0;
    });
  var i = e.actionTransformer;
  i === void 0 &&
    (i = function (c) {
      return c;
    });
  var a = e.logMutations;
  a === void 0 && (a = !0);
  var l = e.logActions;
  l === void 0 && (l = !0);
  var u = e.logger;
  return (
    u === void 0 && (u = console),
    function (c) {
      var f = ui(c.state);
      typeof u > "u" ||
        (a &&
          c.subscribe(function (d, p) {
            var m = ui(p);
            if (n(d, f, m)) {
              var y = Yl(),
                v = o(d),
                _ = "mutation " + d.type + y;
              Ql(u, _, t),
                u.log(
                  "%c prev state",
                  "color: #9E9E9E; font-weight: bold",
                  r(f)
                ),
                u.log("%c mutation", "color: #03A9F4; font-weight: bold", v),
                u.log(
                  "%c next state",
                  "color: #4CAF50; font-weight: bold",
                  r(m)
                ),
                Xl(u);
            }
            f = m;
          }),
        l &&
          c.subscribeAction(function (d, p) {
            if (s(d, p)) {
              var m = Yl(),
                y = i(d),
                v = "action " + d.type + m;
              Ql(u, v, t),
                u.log("%c action", "color: #03A9F4; font-weight: bold", y),
                Xl(u);
            }
          }));
    }
  );
}
function Ql(e, t, n) {
  var r = n ? e.groupCollapsed : e.group;
  try {
    r.call(e, t);
  } catch {
    e.log(t);
  }
}
function Xl(e) {
  try {
    e.groupEnd();
  } catch {
    e.log("—— log end ——");
  }
}
function Yl() {
  var e = new Date();
  return (
    " @ " +
    ao(e.getHours(), 2) +
    ":" +
    ao(e.getMinutes(), 2) +
    ":" +
    ao(e.getSeconds(), 2) +
    "." +
    ao(e.getMilliseconds(), 3)
  );
}
function f_(e, t) {
  return new Array(t + 1).join(e);
}
function ao(e, t) {
  return f_("0", t - e.toString().length) + e;
}
var d_ = {
  version: "4.1.0",
  Store: Ge,
  storeKey: ta,
  createStore: a_,
  useStore: Uw,
  mapState: Gf,
  mapMutations: Wf,
  mapGetters: Kf,
  mapActions: Jf,
  createNamespacedHelpers: l_,
  createLogger: c_,
};
const h_ = new d_.Store({
  state: { token: "", isAuthenticated: !1, answers: [] },
  mutations: {
    initializeStore(e) {
      localStorage.getItem("token")
        ? ((e.token = localStorage.getItem("token")), (e.isAuthenticated = !0))
        : ((e.token = ""), (e.isAuthenticated = !1));
    },
    setToken(e, t) {
      (e.token = t), (e.isAuthenticated = !0), localStorage.setItem("token", t);
    },
    logout(e) {
      (e.token = ""),
        (e.isAuthenticated = !1),
        localStorage.removeItem("token");
    },
    setAnswers(e, t) {
      const n = e.answers.find((r) => r.questionId === t.questionId);
      n
        ? t.type === "input"
          ? n.answer.length - 1 !== t.index
            ? n.answer.push(t.answer)
            : (n.answer[t.index] = t.answer)
          : (n.answer = t.answer)
        : (t.type === "input" && t.index === 0 && (t.answer = [t.answer]),
          e.answers.push(t));
    },
  },
  actions: {
    clearAnswers(e) {
      e.answers = [];
    },
  },
  modules: {},
});
var p_ = Object.defineProperty,
  Zl = Object.getOwnPropertySymbols,
  g_ = Object.prototype.hasOwnProperty,
  m_ = Object.prototype.propertyIsEnumerable,
  eu = (e, t, n) =>
    t in e
      ? p_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Qf = (e, t) => {
    for (var n in t || (t = {})) g_.call(t, n) && eu(e, n, t[n]);
    if (Zl) for (var n of Zl(t)) m_.call(t, n) && eu(e, n, t[n]);
    return e;
  },
  ls = (e) => typeof e == "function",
  us = (e) => typeof e == "string",
  Xf = (e) => us(e) && e.trim().length > 0,
  y_ = (e) => typeof e == "number",
  bn = (e) => typeof e > "u",
  jr = (e) => typeof e == "object" && e !== null,
  v_ = (e) => Rt(e, "tag") && Xf(e.tag),
  Yf = (e) => window.TouchEvent && e instanceof TouchEvent,
  Zf = (e) => Rt(e, "component") && ed(e.component),
  b_ = (e) => ls(e) || jr(e),
  ed = (e) => !bn(e) && (us(e) || b_(e) || Zf(e)),
  tu = (e) =>
    jr(e) &&
    ["height", "width", "right", "left", "top", "bottom"].every((t) =>
      y_(e[t])
    ),
  Rt = (e, t) => (jr(e) || ls(e)) && t in e,
  w_ = (
    (e) => () =>
      e++
  )(0);
function Ls(e) {
  return Yf(e) ? e.targetTouches[0].clientX : e.clientX;
}
function nu(e) {
  return Yf(e) ? e.targetTouches[0].clientY : e.clientY;
}
var __ = (e) => {
    bn(e.remove) ? e.parentNode && e.parentNode.removeChild(e) : e.remove();
  },
  Gr = (e) =>
    Zf(e)
      ? Gr(e.component)
      : v_(e)
      ? ke({
          render() {
            return e;
          },
        })
      : typeof e == "string"
      ? e
      : de(be(e)),
  x_ = (e) => {
    if (typeof e == "string") return e;
    const t = Rt(e, "props") && jr(e.props) ? e.props : {},
      n = Rt(e, "listeners") && jr(e.listeners) ? e.listeners : {};
    return { component: Gr(e), props: t, listeners: n };
  },
  S_ = () => typeof window < "u",
  sa = class {
    constructor() {
      this.allHandlers = {};
    }
    getHandlers(e) {
      return this.allHandlers[e] || [];
    }
    on(e, t) {
      const n = this.getHandlers(e);
      n.push(t), (this.allHandlers[e] = n);
    }
    off(e, t) {
      const n = this.getHandlers(e);
      n.splice(n.indexOf(t) >>> 0, 1);
    }
    emit(e, t) {
      this.getHandlers(e).forEach((r) => r(t));
    }
  },
  C_ = (e) => ["on", "off", "emit"].every((t) => Rt(e, t) && ls(e[t])),
  nt;
(function (e) {
  (e.SUCCESS = "success"),
    (e.ERROR = "error"),
    (e.WARNING = "warning"),
    (e.INFO = "info"),
    (e.DEFAULT = "default");
})(nt || (nt = {}));
var $o;
(function (e) {
  (e.TOP_LEFT = "top-left"),
    (e.TOP_CENTER = "top-center"),
    (e.TOP_RIGHT = "top-right"),
    (e.BOTTOM_LEFT = "bottom-left"),
    (e.BOTTOM_CENTER = "bottom-center"),
    (e.BOTTOM_RIGHT = "bottom-right");
})($o || ($o = {}));
var rt;
(function (e) {
  (e.ADD = "add"),
    (e.DISMISS = "dismiss"),
    (e.UPDATE = "update"),
    (e.CLEAR = "clear"),
    (e.UPDATE_DEFAULTS = "update_defaults");
})(rt || (rt = {}));
var gt = "Vue-Toastification",
  ht = {
    type: { type: String, default: nt.DEFAULT },
    classNames: { type: [String, Array], default: () => [] },
    trueBoolean: { type: Boolean, default: !0 },
  },
  td = {
    type: ht.type,
    customIcon: { type: [String, Boolean, Object, Function], default: !0 },
  },
  go = {
    component: { type: [String, Object, Function, Boolean], default: "button" },
    classNames: ht.classNames,
    showOnHover: { type: Boolean, default: !1 },
    ariaLabel: { type: String, default: "close" },
  },
  fi = {
    timeout: { type: [Number, Boolean], default: 5e3 },
    hideProgressBar: { type: Boolean, default: !1 },
    isRunning: { type: Boolean, default: !1 },
  },
  nd = { transition: { type: [Object, String], default: `${gt}__bounce` } },
  E_ = {
    position: { type: String, default: $o.TOP_RIGHT },
    draggable: ht.trueBoolean,
    draggablePercent: { type: Number, default: 0.6 },
    pauseOnFocusLoss: ht.trueBoolean,
    pauseOnHover: ht.trueBoolean,
    closeOnClick: ht.trueBoolean,
    timeout: fi.timeout,
    hideProgressBar: fi.hideProgressBar,
    toastClassName: ht.classNames,
    bodyClassName: ht.classNames,
    icon: td.customIcon,
    closeButton: go.component,
    closeButtonClassName: go.classNames,
    showCloseButtonOnHover: go.showOnHover,
    accessibility: {
      type: Object,
      default: () => ({ toastRole: "alert", closeButtonLabel: "close" }),
    },
    rtl: { type: Boolean, default: !1 },
    eventBus: { type: Object, required: !1, default: () => new sa() },
  },
  T_ = {
    id: { type: [String, Number], required: !0, default: 0 },
    type: ht.type,
    content: { type: [String, Object, Function], required: !0, default: "" },
    onClick: { type: Function, default: void 0 },
    onClose: { type: Function, default: void 0 },
  },
  k_ = {
    container: { type: [Object, Function], default: () => document.body },
    newestOnTop: ht.trueBoolean,
    maxToasts: { type: Number, default: 20 },
    transition: nd.transition,
    toastDefaults: Object,
    filterBeforeCreate: { type: Function, default: (e) => e },
    filterToasts: { type: Function, default: (e) => e },
    containerClassName: ht.classNames,
    onMounted: Function,
    shareAppContext: [Boolean, Object],
  },
  jt = {
    CORE_TOAST: E_,
    TOAST: T_,
    CONTAINER: k_,
    PROGRESS_BAR: fi,
    ICON: td,
    TRANSITION: nd,
    CLOSE_BUTTON: go,
  },
  rd = ke({
    name: "VtProgressBar",
    props: jt.PROGRESS_BAR,
    data() {
      return { hasClass: !0 };
    },
    computed: {
      style() {
        return {
          animationDuration: `${this.timeout}ms`,
          animationPlayState: this.isRunning ? "running" : "paused",
          opacity: this.hideProgressBar ? 0 : 1,
        };
      },
      cpClass() {
        return this.hasClass ? `${gt}__progress-bar` : "";
      },
    },
    watch: {
      timeout() {
        (this.hasClass = !1), this.$nextTick(() => (this.hasClass = !0));
      },
    },
    mounted() {
      this.$el.addEventListener("animationend", this.animationEnded);
    },
    beforeUnmount() {
      this.$el.removeEventListener("animationend", this.animationEnded);
    },
    methods: {
      animationEnded() {
        this.$emit("close-toast");
      },
    },
  });
function A_(e, t) {
  return N(), z("div", { style: Bt(e.style), class: pe(e.cpClass) }, null, 6);
}
rd.render = A_;
var O_ = rd,
  od = ke({
    name: "VtCloseButton",
    props: jt.CLOSE_BUTTON,
    computed: {
      buttonComponent() {
        return this.component !== !1 ? Gr(this.component) : "button";
      },
      classes() {
        const e = [`${gt}__close-button`];
        return (
          this.showOnHover && e.push("show-on-hover"), e.concat(this.classNames)
        );
      },
    },
  }),
  R_ = Se(" × ");
function P_(e, t) {
  return (
    N(),
    Oe(
      tr(e.buttonComponent),
      nr({ "aria-label": e.ariaLabel, class: e.classes }, e.$attrs),
      { default: fe(() => [R_]), _: 1 },
      16,
      ["aria-label", "class"]
    )
  );
}
od.render = P_;
var $_ = od,
  sd = {},
  N_ = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "check-circle",
    class: "svg-inline--fa fa-check-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  L_ = $(
    "path",
    {
      fill: "currentColor",
      d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
    },
    null,
    -1
  ),
  I_ = [L_];
function M_(e, t) {
  return N(), z("svg", N_, I_);
}
sd.render = M_;
var D_ = sd,
  id = {},
  B_ = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "info-circle",
    class: "svg-inline--fa fa-info-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  F_ = $(
    "path",
    {
      fill: "currentColor",
      d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
    },
    null,
    -1
  ),
  j_ = [F_];
function H_(e, t) {
  return N(), z("svg", B_, j_);
}
id.render = H_;
var ru = id,
  ad = {},
  z_ = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-circle",
    class: "svg-inline--fa fa-exclamation-circle fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
  },
  V_ = $(
    "path",
    {
      fill: "currentColor",
      d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
    },
    null,
    -1
  ),
  U_ = [V_];
function q_(e, t) {
  return N(), z("svg", z_, U_);
}
ad.render = q_;
var G_ = ad,
  ld = {},
  W_ = {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "exclamation-triangle",
    class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
  },
  K_ = $(
    "path",
    {
      fill: "currentColor",
      d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",
    },
    null,
    -1
  ),
  J_ = [K_];
function Q_(e, t) {
  return N(), z("svg", W_, J_);
}
ld.render = Q_;
var X_ = ld,
  ud = ke({
    name: "VtIcon",
    props: jt.ICON,
    computed: {
      customIconChildren() {
        return Rt(this.customIcon, "iconChildren")
          ? this.trimValue(this.customIcon.iconChildren)
          : "";
      },
      customIconClass() {
        return us(this.customIcon)
          ? this.trimValue(this.customIcon)
          : Rt(this.customIcon, "iconClass")
          ? this.trimValue(this.customIcon.iconClass)
          : "";
      },
      customIconTag() {
        return Rt(this.customIcon, "iconTag")
          ? this.trimValue(this.customIcon.iconTag, "i")
          : "i";
      },
      hasCustomIcon() {
        return this.customIconClass.length > 0;
      },
      component() {
        return this.hasCustomIcon
          ? this.customIconTag
          : ed(this.customIcon)
          ? Gr(this.customIcon)
          : this.iconTypeComponent;
      },
      iconTypeComponent() {
        return {
          [nt.DEFAULT]: ru,
          [nt.INFO]: ru,
          [nt.SUCCESS]: D_,
          [nt.ERROR]: X_,
          [nt.WARNING]: G_,
        }[this.type];
      },
      iconClasses() {
        const e = [`${gt}__icon`];
        return this.hasCustomIcon ? e.concat(this.customIconClass) : e;
      },
    },
    methods: {
      trimValue(e, t = "") {
        return Xf(e) ? e.trim() : t;
      },
    },
  });
function Y_(e, t) {
  return (
    N(),
    Oe(
      tr(e.component),
      { class: pe(e.iconClasses) },
      { default: fe(() => [Se(lt(e.customIconChildren), 1)]), _: 1 },
      8,
      ["class"]
    )
  );
}
ud.render = Y_;
var Z_ = ud,
  cd = ke({
    name: "VtToast",
    components: { ProgressBar: O_, CloseButton: $_, Icon: Z_ },
    inheritAttrs: !1,
    props: Object.assign({}, jt.CORE_TOAST, jt.TOAST),
    data() {
      return {
        isRunning: !0,
        disableTransitions: !1,
        beingDragged: !1,
        dragStart: 0,
        dragPos: { x: 0, y: 0 },
        dragRect: {},
      };
    },
    computed: {
      classes() {
        const e = [
          `${gt}__toast`,
          `${gt}__toast--${this.type}`,
          `${this.position}`,
        ].concat(this.toastClassName);
        return (
          this.disableTransitions && e.push("disable-transition"),
          this.rtl && e.push(`${gt}__toast--rtl`),
          e
        );
      },
      bodyClasses() {
        return [
          `${gt}__toast-${us(this.content) ? "body" : "component-body"}`,
        ].concat(this.bodyClassName);
      },
      draggableStyle() {
        return this.dragStart === this.dragPos.x
          ? {}
          : this.beingDragged
          ? {
              transform: `translateX(${this.dragDelta}px)`,
              opacity: 1 - Math.abs(this.dragDelta / this.removalDistance),
            }
          : {
              transition: "transform 0.2s, opacity 0.2s",
              transform: "translateX(0)",
              opacity: 1,
            };
      },
      dragDelta() {
        return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
      },
      removalDistance() {
        return tu(this.dragRect)
          ? (this.dragRect.right - this.dragRect.left) * this.draggablePercent
          : 0;
      },
    },
    mounted() {
      this.draggable && this.draggableSetup(),
        this.pauseOnFocusLoss && this.focusSetup();
    },
    beforeUnmount() {
      this.draggable && this.draggableCleanup(),
        this.pauseOnFocusLoss && this.focusCleanup();
    },
    methods: {
      hasProp: Rt,
      getVueComponentFromObj: Gr,
      closeToast() {
        this.eventBus.emit(rt.DISMISS, this.id);
      },
      clickHandler() {
        this.onClick && this.onClick(this.closeToast),
          this.closeOnClick &&
            (!this.beingDragged || this.dragStart === this.dragPos.x) &&
            this.closeToast();
      },
      timeoutHandler() {
        this.closeToast();
      },
      hoverPause() {
        this.pauseOnHover && (this.isRunning = !1);
      },
      hoverPlay() {
        this.pauseOnHover && (this.isRunning = !0);
      },
      focusPause() {
        this.isRunning = !1;
      },
      focusPlay() {
        this.isRunning = !0;
      },
      focusSetup() {
        addEventListener("blur", this.focusPause),
          addEventListener("focus", this.focusPlay);
      },
      focusCleanup() {
        removeEventListener("blur", this.focusPause),
          removeEventListener("focus", this.focusPlay);
      },
      draggableSetup() {
        const e = this.$el;
        e.addEventListener("touchstart", this.onDragStart, { passive: !0 }),
          e.addEventListener("mousedown", this.onDragStart),
          addEventListener("touchmove", this.onDragMove, { passive: !1 }),
          addEventListener("mousemove", this.onDragMove),
          addEventListener("touchend", this.onDragEnd),
          addEventListener("mouseup", this.onDragEnd);
      },
      draggableCleanup() {
        const e = this.$el;
        e.removeEventListener("touchstart", this.onDragStart),
          e.removeEventListener("mousedown", this.onDragStart),
          removeEventListener("touchmove", this.onDragMove),
          removeEventListener("mousemove", this.onDragMove),
          removeEventListener("touchend", this.onDragEnd),
          removeEventListener("mouseup", this.onDragEnd);
      },
      onDragStart(e) {
        (this.beingDragged = !0),
          (this.dragPos = { x: Ls(e), y: nu(e) }),
          (this.dragStart = Ls(e)),
          (this.dragRect = this.$el.getBoundingClientRect());
      },
      onDragMove(e) {
        this.beingDragged &&
          (e.preventDefault(),
          this.isRunning && (this.isRunning = !1),
          (this.dragPos = { x: Ls(e), y: nu(e) }));
      },
      onDragEnd() {
        this.beingDragged &&
          (Math.abs(this.dragDelta) >= this.removalDistance
            ? ((this.disableTransitions = !0),
              this.$nextTick(() => this.closeToast()))
            : setTimeout(() => {
                (this.beingDragged = !1),
                  tu(this.dragRect) &&
                  this.pauseOnHover &&
                  this.dragRect.bottom >= this.dragPos.y &&
                  this.dragPos.y >= this.dragRect.top &&
                  this.dragRect.left <= this.dragPos.x &&
                  this.dragPos.x <= this.dragRect.right
                    ? (this.isRunning = !1)
                    : (this.isRunning = !0);
              }));
      },
    },
  }),
  e1 = ["role"];
function t1(e, t) {
  const n = Ke("Icon"),
    r = Ke("CloseButton"),
    o = Ke("ProgressBar");
  return (
    N(),
    z(
      "div",
      {
        class: pe(e.classes),
        style: Bt(e.draggableStyle),
        onClick:
          t[0] || (t[0] = (...s) => e.clickHandler && e.clickHandler(...s)),
        onMouseenter:
          t[1] || (t[1] = (...s) => e.hoverPause && e.hoverPause(...s)),
        onMouseleave:
          t[2] || (t[2] = (...s) => e.hoverPlay && e.hoverPlay(...s)),
      },
      [
        e.icon
          ? (N(),
            Oe(n, { key: 0, "custom-icon": e.icon, type: e.type }, null, 8, [
              "custom-icon",
              "type",
            ]))
          : Z("v-if", !0),
        $(
          "div",
          {
            role: e.accessibility.toastRole || "alert",
            class: pe(e.bodyClasses),
          },
          [
            typeof e.content == "string"
              ? (N(), z(Pe, { key: 0 }, [Se(lt(e.content), 1)], 2112))
              : (N(),
                Oe(
                  tr(e.getVueComponentFromObj(e.content)),
                  nr(
                    { key: 1, "toast-id": e.id },
                    e.hasProp(e.content, "props") ? e.content.props : {},
                    Yh(
                      e.hasProp(e.content, "listeners")
                        ? e.content.listeners
                        : {}
                    ),
                    { onCloseToast: e.closeToast }
                  ),
                  null,
                  16,
                  ["toast-id", "onCloseToast"]
                )),
          ],
          10,
          e1
        ),
        e.closeButton
          ? (N(),
            Oe(
              r,
              {
                key: 1,
                component: e.closeButton,
                "class-names": e.closeButtonClassName,
                "show-on-hover": e.showCloseButtonOnHover,
                "aria-label": e.accessibility.closeButtonLabel,
                onClick: Hc(e.closeToast, ["stop"]),
              },
              null,
              8,
              [
                "component",
                "class-names",
                "show-on-hover",
                "aria-label",
                "onClick",
              ]
            ))
          : Z("v-if", !0),
        e.timeout
          ? (N(),
            Oe(
              o,
              {
                key: 2,
                "is-running": e.isRunning,
                "hide-progress-bar": e.hideProgressBar,
                timeout: e.timeout,
                onCloseToast: e.timeoutHandler,
              },
              null,
              8,
              ["is-running", "hide-progress-bar", "timeout", "onCloseToast"]
            ))
          : Z("v-if", !0),
      ],
      38
    )
  );
}
cd.render = t1;
var n1 = cd,
  fd = ke({
    name: "VtTransition",
    props: jt.TRANSITION,
    emits: ["leave"],
    methods: {
      hasProp: Rt,
      leave(e) {
        e instanceof HTMLElement &&
          ((e.style.left = e.offsetLeft + "px"),
          (e.style.top = e.offsetTop + "px"),
          (e.style.width = getComputedStyle(e).width),
          (e.style.position = "absolute"));
      },
    },
  });
function r1(e, t) {
  return (
    N(),
    Oe(
      fg,
      {
        tag: "div",
        "enter-active-class": e.transition.enter
          ? e.transition.enter
          : `${e.transition}-enter-active`,
        "move-class": e.transition.move
          ? e.transition.move
          : `${e.transition}-move`,
        "leave-active-class": e.transition.leave
          ? e.transition.leave
          : `${e.transition}-leave-active`,
        onLeave: e.leave,
      },
      { default: fe(() => [he(e.$slots, "default")]), _: 3 },
      8,
      ["enter-active-class", "move-class", "leave-active-class", "onLeave"]
    )
  );
}
fd.render = r1;
var o1 = fd,
  dd = ke({
    name: "VueToastification",
    devtools: { hide: !0 },
    components: { Toast: n1, VtTransition: o1 },
    props: Object.assign({}, jt.CORE_TOAST, jt.CONTAINER, jt.TRANSITION),
    data() {
      return {
        count: 0,
        positions: Object.values($o),
        toasts: {},
        defaults: {},
      };
    },
    computed: {
      toastArray() {
        return Object.values(this.toasts);
      },
      filteredToasts() {
        return this.defaults.filterToasts(this.toastArray);
      },
    },
    beforeMount() {
      const e = this.eventBus;
      e.on(rt.ADD, this.addToast),
        e.on(rt.CLEAR, this.clearToasts),
        e.on(rt.DISMISS, this.dismissToast),
        e.on(rt.UPDATE, this.updateToast),
        e.on(rt.UPDATE_DEFAULTS, this.updateDefaults),
        (this.defaults = this.$props);
    },
    mounted() {
      this.setup(this.container);
    },
    methods: {
      async setup(e) {
        ls(e) && (e = await e()), __(this.$el), e.appendChild(this.$el);
      },
      setToast(e) {
        bn(e.id) || (this.toasts[e.id] = e);
      },
      addToast(e) {
        e.content = x_(e.content);
        const t = Object.assign(
            {},
            this.defaults,
            e.type &&
              this.defaults.toastDefaults &&
              this.defaults.toastDefaults[e.type],
            e
          ),
          n = this.defaults.filterBeforeCreate(t, this.toastArray);
        n && this.setToast(n);
      },
      dismissToast(e) {
        const t = this.toasts[e];
        !bn(t) && !bn(t.onClose) && t.onClose(), delete this.toasts[e];
      },
      clearToasts() {
        Object.keys(this.toasts).forEach((e) => {
          this.dismissToast(e);
        });
      },
      getPositionToasts(e) {
        const t = this.filteredToasts
          .filter((n) => n.position === e)
          .slice(0, this.defaults.maxToasts);
        return this.defaults.newestOnTop ? t.reverse() : t;
      },
      updateDefaults(e) {
        bn(e.container) || this.setup(e.container),
          (this.defaults = Object.assign({}, this.defaults, e));
      },
      updateToast({ id: e, options: t, create: n }) {
        this.toasts[e]
          ? (t.timeout && t.timeout === this.toasts[e].timeout && t.timeout++,
            this.setToast(Object.assign({}, this.toasts[e], t)))
          : n && this.addToast(Object.assign({}, { id: e }, t));
      },
      getClasses(e) {
        return [`${gt}__container`, e].concat(this.defaults.containerClassName);
      },
    },
  });
function s1(e, t) {
  const n = Ke("Toast"),
    r = Ke("VtTransition");
  return (
    N(),
    z("div", null, [
      (N(!0),
      z(
        Pe,
        null,
        qs(
          e.positions,
          (o) => (
            N(),
            z("div", { key: o }, [
              oe(
                r,
                {
                  transition: e.defaults.transition,
                  class: pe(e.getClasses(o)),
                },
                {
                  default: fe(() => [
                    (N(!0),
                    z(
                      Pe,
                      null,
                      qs(
                        e.getPositionToasts(o),
                        (s) => (N(), Oe(n, nr({ key: s.id }, s), null, 16))
                      ),
                      128
                    )),
                  ]),
                  _: 2,
                },
                1032,
                ["transition", "class"]
              ),
            ])
          )
        ),
        128
      )),
    ])
  );
}
dd.render = s1;
var i1 = dd,
  ou = (e = {}, t = !0) => {
    const n = (e.eventBus = e.eventBus || new sa());
    t &&
      zo(() => {
        const s = Vc(i1, Qf({}, e)),
          i = s.mount(document.createElement("div")),
          a = e.onMounted;
        if ((bn(a) || a(i, s), e.shareAppContext)) {
          const l = e.shareAppContext;
          l === !0
            ? console.warn(
                `[${gt}] App to share context with was not provided.`
              )
            : ((s._context.components = l._context.components),
              (s._context.directives = l._context.directives),
              (s._context.mixins = l._context.mixins),
              (s._context.provides = l._context.provides),
              (s.config.globalProperties = l.config.globalProperties));
        }
      });
    const r = (s, i) => {
      const a = Object.assign({}, { id: w_(), type: nt.DEFAULT }, i, {
        content: s,
      });
      return n.emit(rt.ADD, a), a.id;
    };
    (r.clear = () => n.emit(rt.CLEAR, void 0)),
      (r.updateDefaults = (s) => {
        n.emit(rt.UPDATE_DEFAULTS, s);
      }),
      (r.dismiss = (s) => {
        n.emit(rt.DISMISS, s);
      });
    function o(s, { content: i, options: a }, l = !1) {
      const u = Object.assign({}, a, { content: i });
      n.emit(rt.UPDATE, { id: s, options: u, create: l });
    }
    return (
      (r.update = o),
      (r.success = (s, i) => r(s, Object.assign({}, i, { type: nt.SUCCESS }))),
      (r.info = (s, i) => r(s, Object.assign({}, i, { type: nt.INFO }))),
      (r.error = (s, i) => r(s, Object.assign({}, i, { type: nt.ERROR }))),
      (r.warning = (s, i) => r(s, Object.assign({}, i, { type: nt.WARNING }))),
      r
    );
  },
  a1 = () => {
    const e = () => console.warn(`[${gt}] This plugin does not support SSR!`);
    return new Proxy(e, {
      get() {
        return e;
      },
    });
  };
function hd(e) {
  return S_() ? (C_(e) ? ou({ eventBus: e }, !1) : ou(e, !0)) : a1();
}
var pd = Symbol("VueToastification"),
  gd = new sa(),
  l1 = (e, t) => {
    (t == null ? void 0 : t.shareAppContext) === !0 && (t.shareAppContext = e);
    const n = hd(Qf({ eventBus: gd }, t));
    e.provide(pd, n);
  },
  Yx = (e) => {
    const t = Bi() ? qe(pd, void 0) : void 0;
    return t || hd(gd);
  },
  u1 = l1;
function md(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: c1 } = Object.prototype,
  { getPrototypeOf: ia } = Object,
  cs = ((e) => (t) => {
    const n = c1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  xt = (e) => ((e = e.toLowerCase()), (t) => cs(t) === e),
  fs = (e) => (t) => typeof t === e,
  { isArray: ir } = Array,
  Hr = fs("undefined");
function f1(e) {
  return (
    e !== null &&
    !Hr(e) &&
    e.constructor !== null &&
    !Hr(e.constructor) &&
    st(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const yd = xt("ArrayBuffer");
function d1(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && yd(e.buffer)),
    t
  );
}
const h1 = fs("string"),
  st = fs("function"),
  vd = fs("number"),
  ds = (e) => e !== null && typeof e == "object",
  p1 = (e) => e === !0 || e === !1,
  mo = (e) => {
    if (cs(e) !== "object") return !1;
    const t = ia(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  g1 = xt("Date"),
  m1 = xt("File"),
  y1 = xt("Blob"),
  v1 = xt("FileList"),
  b1 = (e) => ds(e) && st(e.pipe),
  w1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (st(e.append) &&
          ((t = cs(e)) === "formdata" ||
            (t === "object" &&
              st(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  _1 = xt("URLSearchParams"),
  [x1, S1, C1, E1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    xt
  ),
  T1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), ir(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length;
    let a;
    for (r = 0; r < i; r++) (a = s[r]), t.call(null, e[a], a, e);
  }
}
function bd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const wn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  wd = (e) => !Hr(e) && e !== wn;
function di() {
  const { caseless: e } = (wd(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && bd(t, o)) || o;
      mo(t[s]) && mo(r)
        ? (t[s] = di(t[s], r))
        : mo(r)
        ? (t[s] = di({}, r))
        : ir(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Wr(arguments[r], n);
  return t;
}
const k1 = (e, t, n, { allOwnKeys: r } = {}) => (
    Wr(
      t,
      (o, s) => {
        n && st(o) ? (e[s] = md(o, n)) : (e[s] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  A1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  O1 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  R1 = (e, t, n, r) => {
    let o, s, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && ia(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  P1 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  $1 = (e) => {
    if (!e) return null;
    if (ir(e)) return e;
    let t = e.length;
    if (!vd(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  N1 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ia(Uint8Array)),
  L1 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  I1 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  M1 = xt("HTMLFormElement"),
  D1 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  su = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  B1 = xt("RegExp"),
  _d = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Wr(n, (o, s) => {
      let i;
      (i = t(o, s, e)) !== !1 && (r[s] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  F1 = (e) => {
    _d(e, (t, n) => {
      if (st(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (st(r)) {
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
  j1 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return ir(e) ? r(e) : r(String(e).split(t)), n;
  },
  H1 = () => {},
  z1 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Is = "abcdefghijklmnopqrstuvwxyz",
  iu = "0123456789",
  xd = { DIGIT: iu, ALPHA: Is, ALPHA_DIGIT: Is + Is.toUpperCase() + iu },
  V1 = (e = 16, t = xd.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function U1(e) {
  return !!(
    e &&
    st(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const q1 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ds(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const s = ir(r) ? [] : {};
            return (
              Wr(r, (i, a) => {
                const l = n(i, o + 1);
                !Hr(l) && (s[a] = l);
              }),
              (t[o] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  G1 = xt("AsyncFunction"),
  W1 = (e) => e && (ds(e) || st(e)) && st(e.then) && st(e.catch),
  Sd = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          wn.addEventListener(
            "message",
            ({ source: o, data: s }) => {
              o === wn && s === n && r.length && r.shift()();
            },
            !1
          ),
          (o) => {
            r.push(o), wn.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    st(wn.postMessage)
  ),
  K1 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(wn)
      : (typeof process < "u" && process.nextTick) || Sd,
  w = {
    isArray: ir,
    isArrayBuffer: yd,
    isBuffer: f1,
    isFormData: w1,
    isArrayBufferView: d1,
    isString: h1,
    isNumber: vd,
    isBoolean: p1,
    isObject: ds,
    isPlainObject: mo,
    isReadableStream: x1,
    isRequest: S1,
    isResponse: C1,
    isHeaders: E1,
    isUndefined: Hr,
    isDate: g1,
    isFile: m1,
    isBlob: y1,
    isRegExp: B1,
    isFunction: st,
    isStream: b1,
    isURLSearchParams: _1,
    isTypedArray: N1,
    isFileList: v1,
    forEach: Wr,
    merge: di,
    extend: k1,
    trim: T1,
    stripBOM: A1,
    inherits: O1,
    toFlatObject: R1,
    kindOf: cs,
    kindOfTest: xt,
    endsWith: P1,
    toArray: $1,
    forEachEntry: L1,
    matchAll: I1,
    isHTMLForm: M1,
    hasOwnProperty: su,
    hasOwnProp: su,
    reduceDescriptors: _d,
    freezeMethods: F1,
    toObjectSet: j1,
    toCamelCase: D1,
    noop: H1,
    toFiniteNumber: z1,
    findKey: bd,
    global: wn,
    isContextDefined: wd,
    ALPHABET: xd,
    generateString: V1,
    isSpecCompliantForm: U1,
    toJSONObject: q1,
    isAsyncFn: G1,
    isThenable: W1,
    setImmediate: Sd,
    asap: K1,
  };
function ee(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
w.inherits(ee, Error, {
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
      config: w.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Cd = ee.prototype,
  Ed = {};
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
  Ed[e] = { value: e };
});
Object.defineProperties(ee, Ed);
Object.defineProperty(Cd, "isAxiosError", { value: !0 });
ee.from = (e, t, n, r, o, s) => {
  const i = Object.create(Cd);
  return (
    w.toFlatObject(
      e,
      i,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    ee.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  );
};
const J1 = null;
function hi(e) {
  return w.isPlainObject(e) || w.isArray(e);
}
function Td(e) {
  return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function au(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = Td(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function Q1(e) {
  return w.isArray(e) && !e.some(hi);
}
const X1 = w.toFlatObject(w, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function hs(e, t, n) {
  if (!w.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = w.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, v) {
        return !w.isUndefined(v[y]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    s = n.dots,
    i = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && w.isSpecCompliantForm(t);
  if (!w.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (w.isDate(m)) return m.toISOString();
    if (!l && w.isBlob(m))
      throw new ee("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(m) || w.isTypedArray(m)
      ? l && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function c(m, y, v) {
    let _ = m;
    if (m && !v && typeof m == "object") {
      if (w.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (w.isArray(m) && Q1(m)) ||
        ((w.isFileList(m) || w.endsWith(y, "[]")) && (_ = w.toArray(m)))
      )
        return (
          (y = Td(y)),
          _.forEach(function (T, k) {
            !(w.isUndefined(T) || T === null) &&
              t.append(
                i === !0 ? au([y], k, s) : i === null ? y : y + "[]",
                u(T)
              );
          }),
          !1
        );
    }
    return hi(m) ? !0 : (t.append(au(v, y, s), u(m)), !1);
  }
  const f = [],
    d = Object.assign(X1, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: hi,
    });
  function p(m, y) {
    if (!w.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(m),
        w.forEach(m, function (_, x) {
          (!(w.isUndefined(_) || _ === null) &&
            o.call(t, _, w.isString(x) ? x.trim() : x, y, d)) === !0 &&
            p(_, y ? y.concat(x) : [x]);
        }),
        f.pop();
    }
  }
  if (!w.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function lu(e) {
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
function aa(e, t) {
  (this._pairs = []), e && hs(e, this, t);
}
const kd = aa.prototype;
kd.append = function (t, n) {
  this._pairs.push([t, n]);
};
kd.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, lu);
      }
    : lu;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Y1(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ad(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Y1,
    o = n && n.serialize;
  let s;
  if (
    (o
      ? (s = o(t, n))
      : (s = w.isURLSearchParams(t) ? t.toString() : new aa(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class uu {
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
    w.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Od = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Z1 = typeof URLSearchParams < "u" ? URLSearchParams : aa,
  ex = typeof FormData < "u" ? FormData : null,
  tx = typeof Blob < "u" ? Blob : null,
  nx = {
    isBrowser: !0,
    classes: { URLSearchParams: Z1, FormData: ex, Blob: tx },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  la = typeof window < "u" && typeof document < "u",
  pi = (typeof navigator == "object" && navigator) || void 0,
  rx =
    la &&
    (!pi || ["ReactNative", "NativeScript", "NS"].indexOf(pi.product) < 0),
  ox =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  sx = (la && window.location.href) || "http://localhost",
  ix = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: la,
        hasStandardBrowserEnv: rx,
        hasStandardBrowserWebWorkerEnv: ox,
        navigator: pi,
        origin: sx,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Je = { ...ix, ...nx };
function ax(e, t) {
  return hs(
    e,
    new Je.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return Je.isNode && w.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function lx(e) {
  return w
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function ux(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function Rd(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      l = s >= n.length;
    return (
      (i = !i && w.isArray(o) ? o.length : i),
      l
        ? (w.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !a)
        : ((!o[i] || !w.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], s) && w.isArray(o[i]) && (o[i] = ux(o[i])),
          !a)
    );
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return (
      w.forEachEntry(e, (r, o) => {
        t(lx(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function cx(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Kr = {
  transitional: Od,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = w.isObject(t);
      if ((s && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t)))
        return o ? JSON.stringify(Rd(t)) : t;
      if (
        w.isArrayBuffer(t) ||
        w.isBuffer(t) ||
        w.isStream(t) ||
        w.isFile(t) ||
        w.isBlob(t) ||
        w.isReadableStream(t)
      )
        return t;
      if (w.isArrayBufferView(t)) return t.buffer;
      if (w.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ax(t, this.formSerializer).toString();
        if ((a = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return hs(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), cx(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Kr.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (w.isResponse(t) || w.isReadableStream(t)) return t;
      if (t && w.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? ee.from(a, ee.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
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
  env: { FormData: Je.classes.FormData, Blob: Je.classes.Blob },
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
w.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Kr.headers[e] = {};
});
const fx = w.toObjectSet([
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
  dx = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && fx[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  cu = Symbol("internals");
function gr(e) {
  return e && String(e).trim().toLowerCase();
}
function yo(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(yo) : String(e);
}
function hx(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const px = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ms(e, t, n, r, o) {
  if (w.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!w.isString(t))) {
    if (w.isString(r)) return t.indexOf(r) !== -1;
    if (w.isRegExp(r)) return r.test(t);
  }
}
function gx(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function mx(e, t) {
  const n = w.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0,
    });
  });
}
class Qe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, l, u) {
      const c = gr(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = w.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || l] = yo(a));
    }
    const i = (a, l) => w.forEach(a, (u, c) => s(u, c, l));
    if (w.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (w.isString(t) && (t = t.trim()) && !px(t)) i(dx(t), n);
    else if (w.isHeaders(t)) for (const [a, l] of t.entries()) s(l, a, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = gr(t)), t)) {
      const r = w.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return hx(o);
        if (w.isFunction(n)) return n.call(this, o, r);
        if (w.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = gr(t)), t)) {
      const r = w.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ms(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (((i = gr(i)), i)) {
        const a = w.findKey(r, i);
        a && (!n || Ms(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return w.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Ms(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      w.forEach(this, (o, s) => {
        const i = w.findKey(r, s);
        if (i) {
          (n[i] = yo(o)), delete n[s];
          return;
        }
        const a = t ? gx(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = yo(o)), (r[a] = !0);
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
      w.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && w.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[cu] = this[cu] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      const a = gr(i);
      r[a] || (mx(o, i), (r[a] = !0));
    }
    return w.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Qe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
w.reduceDescriptors(Qe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
w.freezeMethods(Qe);
function Ds(e, t) {
  const n = this || Kr,
    r = t || n,
    o = Qe.from(r.headers);
  let s = r.data;
  return (
    w.forEach(e, function (a) {
      s = a.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function Pd(e) {
  return !!(e && e.__CANCEL__);
}
function ar(e, t, n) {
  ee.call(this, e ?? "canceled", ee.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
w.inherits(ar, ee, { __CANCEL__: !0 });
function $d(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ee(
          "Request failed with status code " + n.status,
          [ee.ERR_BAD_REQUEST, ee.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function yx(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function vx(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    s = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[s];
      i || (i = u), (n[o] = l), (r[o] = u);
      let f = s,
        d = 0;
      for (; f !== o; ) (d += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), u - i < t)) return;
      const p = c && u - c;
      return p ? Math.round((d * 1e3) / p) : void 0;
    }
  );
}
function bx(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    s;
  const i = (u, c = Date.now()) => {
    (n = c), (o = null), s && (clearTimeout(s), (s = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? i(u, c)
        : ((o = u),
          s ||
            (s = setTimeout(() => {
              (s = null), i(o);
            }, r - f)));
    },
    () => o && i(o),
  ];
}
const No = (e, t, n = 3) => {
    let r = 0;
    const o = vx(50, 250);
    return bx((s) => {
      const i = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        l = i - r,
        u = o(l),
        c = i <= a;
      r = i;
      const f = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && c ? (a - i) / u : void 0,
        event: s,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  fu = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  du =
    (e) =>
    (...t) =>
      w.asap(() => e(...t)),
  wx = Je.hasStandardBrowserEnv
    ? (function () {
        const t =
            Je.navigator && /(msie|trident)/i.test(Je.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(s) {
          let i = s;
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
          (r = o(window.location.href)),
          function (i) {
            const a = w.isString(i) ? o(i) : i;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  _x = Je.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, s) {
          const i = [e + "=" + encodeURIComponent(t)];
          w.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            w.isString(r) && i.push("path=" + r),
            w.isString(o) && i.push("domain=" + o),
            s === !0 && i.push("secure"),
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
function xx(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Sx(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Nd(e, t) {
  return e && !xx(t) ? Sx(e, t) : t;
}
const hu = (e) => (e instanceof Qe ? { ...e } : e);
function An(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f) {
    return w.isPlainObject(u) && w.isPlainObject(c)
      ? w.merge.call({ caseless: f }, u, c)
      : w.isPlainObject(c)
      ? w.merge({}, c)
      : w.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, f) {
    if (w.isUndefined(c)) {
      if (!w.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, c, f);
  }
  function s(u, c) {
    if (!w.isUndefined(c)) return r(void 0, c);
  }
  function i(u, c) {
    if (w.isUndefined(c)) {
      if (!w.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
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
    validateStatus: a,
    headers: (u, c) => o(hu(u), hu(c), !0),
  };
  return (
    w.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = l[c] || o,
        d = f(e[c], t[c], c);
      (w.isUndefined(d) && f !== a) || (n[c] = d);
    }),
    n
  );
}
const Ld = (e) => {
    const t = An({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: s,
      headers: i,
      auth: a,
    } = t;
    (t.headers = i = Qe.from(i)),
      (t.url = Ad(Nd(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (w.isFormData(n)) {
      if (Je.hasStandardBrowserEnv || Je.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((l = i.getContentType()) !== !1) {
        const [u, ...c] = l
          ? l
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        i.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      Je.hasStandardBrowserEnv &&
      (r && w.isFunction(r) && (r = r(t)), r || (r !== !1 && wx(t.url)))
    ) {
      const u = o && s && _x.read(s);
      u && i.set(o, u);
    }
    return t;
  },
  Cx = typeof XMLHttpRequest < "u",
  Ex =
    Cx &&
    function (e) {
      return new Promise(function (n, r) {
        const o = Ld(e);
        let s = o.data;
        const i = Qe.from(o.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o,
          c,
          f,
          d,
          p,
          m;
        function y() {
          p && p(),
            m && m(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c);
        }
        let v = new XMLHttpRequest();
        v.open(o.method.toUpperCase(), o.url, !0), (v.timeout = o.timeout);
        function _() {
          if (!v) return;
          const T = Qe.from(
              "getAllResponseHeaders" in v && v.getAllResponseHeaders()
            ),
            S = {
              data:
                !a || a === "text" || a === "json"
                  ? v.responseText
                  : v.response,
              status: v.status,
              statusText: v.statusText,
              headers: T,
              config: e,
              request: v,
            };
          $d(
            function (L) {
              n(L), y();
            },
            function (L) {
              r(L), y();
            },
            S
          ),
            (v = null);
        }
        "onloadend" in v
          ? (v.onloadend = _)
          : (v.onreadystatechange = function () {
              !v ||
                v.readyState !== 4 ||
                (v.status === 0 &&
                  !(v.responseURL && v.responseURL.indexOf("file:") === 0)) ||
                setTimeout(_);
            }),
          (v.onabort = function () {
            v &&
              (r(new ee("Request aborted", ee.ECONNABORTED, e, v)), (v = null));
          }),
          (v.onerror = function () {
            r(new ee("Network Error", ee.ERR_NETWORK, e, v)), (v = null);
          }),
          (v.ontimeout = function () {
            let k = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const S = o.transitional || Od;
            o.timeoutErrorMessage && (k = o.timeoutErrorMessage),
              r(
                new ee(
                  k,
                  S.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
                  e,
                  v
                )
              ),
              (v = null);
          }),
          s === void 0 && i.setContentType(null),
          "setRequestHeader" in v &&
            w.forEach(i.toJSON(), function (k, S) {
              v.setRequestHeader(S, k);
            }),
          w.isUndefined(o.withCredentials) ||
            (v.withCredentials = !!o.withCredentials),
          a && a !== "json" && (v.responseType = o.responseType),
          u && (([d, m] = No(u, !0)), v.addEventListener("progress", d)),
          l &&
            v.upload &&
            (([f, p] = No(l)),
            v.upload.addEventListener("progress", f),
            v.upload.addEventListener("loadend", p)),
          (o.cancelToken || o.signal) &&
            ((c = (T) => {
              v &&
                (r(!T || T.type ? new ar(null, e, v) : T),
                v.abort(),
                (v = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
        const x = yx(o.url);
        if (x && Je.protocols.indexOf(x) === -1) {
          r(new ee("Unsupported protocol " + x + ":", ee.ERR_BAD_REQUEST, e));
          return;
        }
        v.send(s || null);
      });
    },
  Tx = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const s = function (u) {
        if (!o) {
          (o = !0), a();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof ee ? c : new ar(c instanceof Error ? c.message : c)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), s(new ee(`timeout ${t} of ms exceeded`, ee.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(s)
              : u.removeEventListener("abort", s);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", s));
      const { signal: l } = r;
      return (l.unsubscribe = () => w.asap(a)), l;
    }
  },
  kx = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  Ax = async function* (e, t) {
    for await (const n of Ox(e)) yield* kx(n, t);
  },
  Ox = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  pu = (e, t, n, r) => {
    const o = Ax(e, t);
    let s = 0,
      i,
      a = (l) => {
        i || ((i = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: c } = await o.next();
            if (u) {
              a(), l.close();
              return;
            }
            let f = c.byteLength;
            if (n) {
              let d = (s += f);
              n(d);
            }
            l.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return a(l), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ps =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Id = ps && typeof ReadableStream == "function",
  Rx =
    ps &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Md = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Px =
    Id &&
    Md(() => {
      let e = !1;
      const t = new Request(Je.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  gu = 64 * 1024,
  gi = Id && Md(() => w.isReadableStream(new Response("").body)),
  Lo = { stream: gi && ((e) => e.body) };
ps &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Lo[t] &&
        (Lo[t] = w.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new ee(
                `Response type '${t}' is not supported`,
                ee.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const $x = async (e) => {
    if (e == null) return 0;
    if (w.isBlob(e)) return e.size;
    if (w.isSpecCompliantForm(e))
      return (
        await new Request(Je.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (w.isArrayBufferView(e) || w.isArrayBuffer(e)) return e.byteLength;
    if ((w.isURLSearchParams(e) && (e = e + ""), w.isString(e)))
      return (await Rx(e)).byteLength;
  },
  Nx = async (e, t) => {
    const n = w.toFiniteNumber(e.getContentLength());
    return n ?? $x(t);
  },
  Lx =
    ps &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: s,
        timeout: i,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: d,
      } = Ld(e);
      u = u ? (u + "").toLowerCase() : "text";
      let p = Tx([o, s && s.toAbortSignal()], i),
        m;
      const y =
        p &&
        p.unsubscribe &&
        (() => {
          p.unsubscribe();
        });
      let v;
      try {
        if (
          l &&
          Px &&
          n !== "get" &&
          n !== "head" &&
          (v = await Nx(c, r)) !== 0
        ) {
          let S = new Request(t, { method: "POST", body: r, duplex: "half" }),
            V;
          if (
            (w.isFormData(r) &&
              (V = S.headers.get("content-type")) &&
              c.setContentType(V),
            S.body)
          ) {
            const [L, G] = fu(v, No(du(l)));
            r = pu(S.body, gu, L, G);
          }
        }
        w.isString(f) || (f = f ? "include" : "omit");
        const _ = "credentials" in Request.prototype;
        m = new Request(t, {
          ...d,
          signal: p,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: _ ? f : void 0,
        });
        let x = await fetch(m);
        const T = gi && (u === "stream" || u === "response");
        if (gi && (a || (T && y))) {
          const S = {};
          ["status", "statusText", "headers"].forEach((B) => {
            S[B] = x[B];
          });
          const V = w.toFiniteNumber(x.headers.get("content-length")),
            [L, G] = (a && fu(V, No(du(a), !0))) || [];
          x = new Response(
            pu(x.body, gu, L, () => {
              G && G(), y && y();
            }),
            S
          );
        }
        u = u || "text";
        let k = await Lo[w.findKey(Lo, u) || "text"](x, e);
        return (
          !T && y && y(),
          await new Promise((S, V) => {
            $d(S, V, {
              data: k,
              headers: Qe.from(x.headers),
              status: x.status,
              statusText: x.statusText,
              config: e,
              request: m,
            });
          })
        );
      } catch (_) {
        throw (
          (y && y(),
          _ && _.name === "TypeError" && /fetch/i.test(_.message)
            ? Object.assign(new ee("Network Error", ee.ERR_NETWORK, e, m), {
                cause: _.cause || _,
              })
            : ee.from(_, _ && _.code, e, m))
        );
      }
    }),
  mi = { http: J1, xhr: Ex, fetch: Lx };
w.forEach(mi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const mu = (e) => `- ${e}`,
  Ix = (e) => w.isFunction(e) || e === null || e === !1,
  Dd = {
    getAdapter: (e) => {
      e = w.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let i;
        if (
          ((r = n),
          !Ix(n) && ((r = mi[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ee(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? s.length > 1
            ? `since :
` +
              s.map(mu).join(`
`)
            : " " + mu(s[0])
          : "as no adapter specified";
        throw new ee(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: mi,
  };
function Bs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ar(null, e);
}
function yu(e) {
  return (
    Bs(e),
    (e.headers = Qe.from(e.headers)),
    (e.data = Ds.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Dd.getAdapter(e.adapter || Kr.adapter)(e).then(
      function (r) {
        return (
          Bs(e),
          (r.data = Ds.call(e, e.transformResponse, r)),
          (r.headers = Qe.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Pd(r) ||
            (Bs(e),
            r &&
              r.response &&
              ((r.response.data = Ds.call(e, e.transformResponse, r.response)),
              (r.response.headers = Qe.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Bd = "1.7.7",
  ua = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ua[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const vu = {};
ua.transitional = function (t, n, r) {
  function o(s, i) {
    return (
      "[Axios v" +
      Bd +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (s, i, a) => {
    if (t === !1)
      throw new ee(
        o(i, " has been removed" + (n ? " in " + n : "")),
        ee.ERR_DEPRECATED
      );
    return (
      n &&
        !vu[i] &&
        ((vu[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, i, a) : !0
    );
  };
};
function Mx(e, t, n) {
  if (typeof e != "object")
    throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      i = t[s];
    if (i) {
      const a = e[s],
        l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new ee("option " + s + " must be " + l, ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ee("Unknown option " + s, ee.ERR_BAD_OPTION);
  }
}
const yi = { assertOptions: Mx, validators: ua },
  Kt = yi.validators;
class Cn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new uu(), response: new uu() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = An(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      yi.assertOptions(
        r,
        {
          silentJSONParsing: Kt.transitional(Kt.boolean),
          forcedJSONParsing: Kt.transitional(Kt.boolean),
          clarifyTimeoutError: Kt.transitional(Kt.boolean),
        },
        !1
      ),
      o != null &&
        (w.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : yi.assertOptions(
              o,
              { encode: Kt.function, serialize: Kt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = s && w.merge(s.common, s[n.method]);
    s &&
      w.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete s[m];
        }
      ),
      (n.headers = Qe.concat(i, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((l = l && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c,
      f = 0,
      d;
    if (!l) {
      const m = [yu.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, u),
          d = m.length,
          c = Promise.resolve(n);
        f < d;

      )
        c = c.then(m[f++], m[f++]);
      return c;
    }
    d = a.length;
    let p = n;
    for (f = 0; f < d; ) {
      const m = a[f++],
        y = a[f++];
      try {
        p = m(p);
      } catch (v) {
        y.call(this, v);
        break;
      }
    }
    try {
      c = yu.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = An(this.defaults, t);
    const n = Nd(t.baseURL, t.url);
    return Ad(n, t.params, t.paramsSerializer);
  }
}
w.forEach(["delete", "get", "head", "options"], function (t) {
  Cn.prototype[t] = function (n, r) {
    return this.request(
      An(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
w.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, i, a) {
      return this.request(
        An(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        })
      );
    };
  }
  (Cn.prototype[t] = n()), (Cn.prototype[t + "Form"] = n(!0));
});
class ca {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let s;
        const i = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(s);
          }),
          i
        );
      }),
      t(function (s, i, a) {
        r.reason || ((r.reason = new ar(s, i, a)), n(r.reason));
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
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new ca(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function Dx(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Bx(e) {
  return w.isObject(e) && e.isAxiosError === !0;
}
const vi = {
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
Object.entries(vi).forEach(([e, t]) => {
  vi[t] = e;
});
function Fd(e) {
  const t = new Cn(e),
    n = md(Cn.prototype.request, t);
  return (
    w.extend(n, Cn.prototype, t, { allOwnKeys: !0 }),
    w.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Fd(An(e, o));
    }),
    n
  );
}
const $e = Fd(Kr);
$e.Axios = Cn;
$e.CanceledError = ar;
$e.CancelToken = ca;
$e.isCancel = Pd;
$e.VERSION = Bd;
$e.toFormData = hs;
$e.AxiosError = ee;
$e.Cancel = $e.CanceledError;
$e.all = function (t) {
  return Promise.all(t);
};
$e.spread = Dx;
$e.isAxiosError = Bx;
$e.mergeConfig = An;
$e.AxiosHeaders = Qe;
$e.formToJSON = (e) => Rd(w.isHTMLForm(e) ? new FormData(e) : e);
$e.getAdapter = Dd.getAdapter;
$e.HttpStatusCode = vi;
$e.default = $e;
$e.defaults.baseURL = "/bahaaapi";
const Fx = {
  position: "top-right",
  timeout: 5e3,
  closeOnClick: !0,
  pauseOnHover: !0,
  draggable: !0,
  draggablePercent: 0.6,
};
Vc(Rb).use(If, $e).use(h_).use(u1, Fx).mount("#app");
export {
  We as A,
  vm as B,
  Pe as F,
  Xx as N,
  yy as Q,
  Vx as V,
  Yi as _,
  $e as a,
  $ as b,
  z as c,
  Oe as d,
  Z as e,
  Se as f,
  Hx as g,
  Hc as h,
  jx as i,
  oe as j,
  wf as k,
  qs as l,
  Gx as m,
  pe as n,
  N as o,
  qx as p,
  Wx as q,
  Ke as r,
  Ux as s,
  lt as t,
  Yx as u,
  zx as v,
  fe as w,
  Kx as x,
  Jx as y,
  Qx as z,
};
