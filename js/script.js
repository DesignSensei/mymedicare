const utilities =(() => {
  var jv = Object.create;
  var Dn = Object.defineProperty;
  var Yv = Object.getOwnPropertyDescriptor;
  var Qv = Object.getOwnPropertyNames;
  var $v = Object.getPrototypeOf,
    Zv = Object.prototype.hasOwnProperty;
  var ve = (e, t) => () => (e && (t = e((e = 0))), t);
  var d = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ne = (e, t) => {
      for (var n in t) Dn(e, n, { get: t[n], enumerable: !0 });
    },
    pa = (e, t, n, r) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of Qv(t))
          !Zv.call(e, i) &&
            i !== n &&
            Dn(e, i, {
              get: () => t[i],
              enumerable: !(r = Yv(t, i)) || r.enumerable,
            });
      return e;
    };
  var fe = (e, t, n) => (
      (n = e != null ? jv($v(e)) : {}),
      pa(
        t || !e || !e.__esModule
          ? Dn(n, "default", { value: e, enumerable: !0 })
          : n,
        e
      )
    ),
    Qe = (e) => pa(Dn({}, "__esModule", { value: !0 }), e);
  var Yr = d(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, _) {
        var w = new U.Bare();
        return w.init(l, _);
      }
      function n(l) {
        return l.replace(/[A-Z]/g, function (_) {
          return "-" + _.toLowerCase();
        });
      }
      function r(l) {
        var _ = parseInt(l.slice(1), 16),
          w = (_ >> 16) & 255,
          P = (_ >> 8) & 255,
          F = 255 & _;
        return [w, P, F];
      }
      function i(l, _, w) {
        return (
          "#" + ((1 << 24) | (l << 16) | (_ << 8) | w).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, _) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof _ + "] " + _);
      }
      function u(l, _, w) {
        f("Units do not match [" + l + "]: " + _ + ", " + w);
      }
      function s(l, _, w) {
        if ((_ !== void 0 && (w = _), l === void 0)) return w;
        var P = w;
        return (
          Oe.test(l) || !ke.test(l)
            ? (P = parseInt(l, 10))
            : ke.test(l) && (P = 1e3 * parseFloat(l)),
          0 > P && (P = 0),
          P === P ? P : w
        );
      }
      function f(l) {
        W.debug && window && window.console.warn(l);
      }
      function y(l) {
        for (var _ = -1, w = l ? l.length : 0, P = []; ++_ < w; ) {
          var F = l[_];
          F && P.push(F);
        }
        return P;
      }
      var v = (function (l, _, w) {
          function P(ae) {
            return typeof ae == "object";
          }
          function F(ae) {
            return typeof ae == "function";
          }
          function q() {}
          function te(ae, ne) {
            function V() {
              var Se = new se();
              return F(Se.init) && Se.init.apply(Se, arguments), Se;
            }
            function se() {}
            ne === w && ((ne = ae), (ae = Object)), (V.Bare = se);
            var ue,
              _e = (q[l] = ae[l]),
              Ge = (se[l] = V[l] = new q());
            return (
              (Ge.constructor = V),
              (V.mixin = function (Se) {
                return (se[l] = V[l] = te(V, Se)[l]), V;
              }),
              (V.open = function (Se) {
                if (
                  ((ue = {}),
                  F(Se) ? (ue = Se.call(V, Ge, _e, V, ae)) : P(Se) && (ue = Se),
                  P(ue))
                )
                  for (var nn in ue) _.call(ue, nn) && (Ge[nn] = ue[nn]);
                return F(Ge.init) || (Ge.init = ae), V;
              }),
              V.open(ne)
            );
          }
          return te;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (l, _, w, P) {
              var F = (l /= P) * l,
                q = F * l;
              return (
                _ +
                w * (-2.75 * q * F + 11 * F * F + -15.5 * q + 8 * F + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, _, w, P) {
              var F = (l /= P) * l,
                q = F * l;
              return _ + w * (-1 * q * F + 3 * F * F + -3 * q + 2 * F);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, _, w, P) {
              var F = (l /= P) * l,
                q = F * l;
              return (
                _ +
                w * (0.3 * q * F + -1.6 * F * F + 2.2 * q + -1.8 * F + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, _, w, P) {
              var F = (l /= P) * l,
                q = F * l;
              return _ + w * (2 * q * F + -5 * F * F + 2 * q + 2 * F);
            },
          ],
          linear: [
            "linear",
            function (l, _, w, P) {
              return (w * l) / P + _;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, _, w, P) {
              return w * (l /= P) * l + _;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, _, w, P) {
              return -w * (l /= P) * (l - 2) + _;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, _, w, P) {
              return (l /= P / 2) < 1
                ? (w / 2) * l * l + _
                : (-w / 2) * (--l * (l - 2) - 1) + _;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, _, w, P) {
              return w * (l /= P) * l * l + _;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, _, w, P) {
              return w * ((l = l / P - 1) * l * l + 1) + _;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, _, w, P) {
              return (l /= P / 2) < 1
                ? (w / 2) * l * l * l + _
                : (w / 2) * ((l -= 2) * l * l + 2) + _;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, _, w, P) {
              return w * (l /= P) * l * l * l + _;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, _, w, P) {
              return -w * ((l = l / P - 1) * l * l * l - 1) + _;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, _, w, P) {
              return (l /= P / 2) < 1
                ? (w / 2) * l * l * l * l + _
                : (-w / 2) * ((l -= 2) * l * l * l - 2) + _;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, _, w, P) {
              return w * (l /= P) * l * l * l * l + _;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, _, w, P) {
              return w * ((l = l / P - 1) * l * l * l * l + 1) + _;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, _, w, P) {
              return (l /= P / 2) < 1
                ? (w / 2) * l * l * l * l * l + _
                : (w / 2) * ((l -= 2) * l * l * l * l + 2) + _;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, _, w, P) {
              return -w * Math.cos((l / P) * (Math.PI / 2)) + w + _;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, _, w, P) {
              return w * Math.sin((l / P) * (Math.PI / 2)) + _;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, _, w, P) {
              return (-w / 2) * (Math.cos((Math.PI * l) / P) - 1) + _;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, _, w, P) {
              return l === 0 ? _ : w * Math.pow(2, 10 * (l / P - 1)) + _;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, _, w, P) {
              return l === P
                ? _ + w
                : w * (-Math.pow(2, (-10 * l) / P) + 1) + _;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, _, w, P) {
              return l === 0
                ? _
                : l === P
                ? _ + w
                : (l /= P / 2) < 1
                ? (w / 2) * Math.pow(2, 10 * (l - 1)) + _
                : (w / 2) * (-Math.pow(2, -10 * --l) + 2) + _;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, _, w, P) {
              return -w * (Math.sqrt(1 - (l /= P) * l) - 1) + _;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, _, w, P) {
              return w * Math.sqrt(1 - (l = l / P - 1) * l) + _;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, _, w, P) {
              return (l /= P / 2) < 1
                ? (-w / 2) * (Math.sqrt(1 - l * l) - 1) + _
                : (w / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + _;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, _, w, P, F) {
              return (
                F === void 0 && (F = 1.70158),
                w * (l /= P) * l * ((F + 1) * l - F) + _
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, _, w, P, F) {
              return (
                F === void 0 && (F = 1.70158),
                w * ((l = l / P - 1) * l * ((F + 1) * l + F) + 1) + _
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, _, w, P, F) {
              return (
                F === void 0 && (F = 1.70158),
                (l /= P / 2) < 1
                  ? (w / 2) * l * l * (((F *= 1.525) + 1) * l - F) + _
                  : (w / 2) *
                      ((l -= 2) * l * (((F *= 1.525) + 1) * l + F) + 2) +
                    _
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        b = document,
        I = window,
        O = "bkwld-tram",
        T = /[\-\.0-9]/g,
        R = /[A-Z]/,
        C = "number",
        N = /^(rgb|#)/,
        M = /(em|cm|mm|in|pt|pc|px)$/,
        D = /(em|cm|mm|in|pt|pc|px|%)$/,
        B = /(deg|rad|turn)$/,
        z = "unitless",
        j = /(all|none) 0s ease 0s/,
        Z = /^(width|height)$/,
        J = " ",
        k = b.createElement("a"),
        A = ["Webkit", "Moz", "O", "ms"],
        G = ["-webkit-", "-moz-", "-o-", "-ms-"],
        Y = function (l) {
          if (l in k.style) return { dom: l, css: l };
          var _,
            w,
            P = "",
            F = l.split("-");
          for (_ = 0; _ < F.length; _++)
            P += F[_].charAt(0).toUpperCase() + F[_].slice(1);
          for (_ = 0; _ < A.length; _++)
            if (((w = A[_] + P), w in k.style))
              return { dom: w, css: G[_] + l };
        },
        K = (t.support = {
          bind: Function.prototype.bind,
          transform: Y("transform"),
          transition: Y("transition"),
          backface: Y("backface-visibility"),
          timing: Y("transition-timing-function"),
        });
      if (K.transition) {
        var re = K.timing.dom;
        if (((k.style[re] = g["ease-in-back"][0]), !k.style[re]))
          for (var ie in m) g[ie][0] = m[ie];
      }
      var ce = (t.frame = (function () {
          var l =
            I.requestAnimationFrame ||
            I.webkitRequestAnimationFrame ||
            I.mozRequestAnimationFrame ||
            I.oRequestAnimationFrame ||
            I.msRequestAnimationFrame;
          return l && K.bind
            ? l.bind(I)
            : function (_) {
                I.setTimeout(_, 16);
              };
        })()),
        Ee = (t.now = (function () {
          var l = I.performance,
            _ = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return _ && K.bind
            ? _.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        E = v(function (l) {
          function _(oe, le) {
            var me = y(("" + oe).split(J)),
              pe = me[0];
            le = le || {};
            var xe = H[pe];
            if (!xe) return f("Unsupported property: " + pe);
            if (!le.weak || !this.props[pe]) {
              var Ve = xe[0],
                Pe = this.props[pe];
              return (
                Pe || (Pe = this.props[pe] = new Ve.Bare()),
                Pe.init(this.$el, me, xe, le),
                Pe
              );
            }
          }
          function w(oe, le, me) {
            if (oe) {
              var pe = typeof oe;
              if (
                (le ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && le)
              )
                return (
                  (this.timer = new $({
                    duration: oe,
                    context: this,
                    complete: q,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && le) {
                switch (oe) {
                  case "hide":
                    V.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    _.call(this, oe, me && me[1]);
                }
                return q.call(this);
              }
              if (pe == "function") return void oe.call(this, this);
              if (pe == "object") {
                var xe = 0;
                Ge.call(
                  this,
                  oe,
                  function (Ie, Kv) {
                    Ie.span > xe && (xe = Ie.span), Ie.stop(), Ie.animate(Kv);
                  },
                  function (Ie) {
                    "wait" in Ie && (xe = s(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  xe > 0 &&
                    ((this.timer = new $({ duration: xe, context: this })),
                    (this.active = !0),
                    le && (this.timer.complete = q));
                var Ve = this,
                  Pe = !1,
                  Nn = {};
                ce(function () {
                  Ge.call(Ve, oe, function (Ie) {
                    Ie.active && ((Pe = !0), (Nn[Ie.name] = Ie.nextStyle));
                  }),
                    Pe && Ve.$el.css(Nn);
                });
              }
            }
          }
          function P(oe) {
            (oe = s(oe, 0)),
              this.active
                ? this.queue.push({ options: oe })
                : ((this.timer = new $({
                    duration: oe,
                    context: this,
                    complete: q,
                  })),
                  (this.active = !0));
          }
          function F(oe) {
            return this.active
              ? (this.queue.push({ options: oe, args: arguments }),
                void (this.timer.complete = q))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function q() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var oe = this.queue.shift();
              w.call(this, oe.options, !0, oe.args);
            }
          }
          function te(oe) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var le;
            typeof oe == "string"
              ? ((le = {}), (le[oe] = 1))
              : (le = typeof oe == "object" && oe != null ? oe : this.props),
              Ge.call(this, le, Se),
              _e.call(this);
          }
          function ae(oe) {
            te.call(this, oe), Ge.call(this, oe, nn, Bv);
          }
          function ne(oe) {
            typeof oe != "string" && (oe = "block"),
              (this.el.style.display = oe);
          }
          function V() {
            te.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            te.call(this),
              e.removeData(this.el, O),
              (this.$el = this.el = null);
          }
          function _e() {
            var oe,
              le,
              me = [];
            this.upstream && me.push(this.upstream);
            for (oe in this.props)
              (le = this.props[oe]), le.active && me.push(le.string);
            (me = me.join(",")),
              this.style !== me &&
                ((this.style = me), (this.el.style[K.transition.dom] = me));
          }
          function Ge(oe, le, me) {
            var pe,
              xe,
              Ve,
              Pe,
              Nn = le !== Se,
              Ie = {};
            for (pe in oe)
              (Ve = oe[pe]),
                pe in de
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[pe] = Ve))
                  : (R.test(pe) && (pe = n(pe)),
                    pe in H ? (Ie[pe] = Ve) : (Pe || (Pe = {}), (Pe[pe] = Ve)));
            for (pe in Ie) {
              if (((Ve = Ie[pe]), (xe = this.props[pe]), !xe)) {
                if (!Nn) continue;
                xe = _.call(this, pe);
              }
              le.call(this, xe, Ve);
            }
            me && Pe && me.call(this, Pe);
          }
          function Se(oe) {
            oe.stop();
          }
          function nn(oe, le) {
            oe.set(le);
          }
          function Bv(oe) {
            this.$el.css(oe);
          }
          function Ue(oe, le) {
            l[oe] = function () {
              return this.children
                ? zv.call(this, le, arguments)
                : (this.el && le.apply(this, arguments), this);
            };
          }
          function zv(oe, le) {
            var me,
              pe = this.children.length;
            for (me = 0; pe > me; me++) oe.apply(this.children[me], le);
            return this;
          }
          (l.init = function (oe) {
            if (
              ((this.$el = e(oe)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              W.keepInherited && !W.fallback)
            ) {
              var le = X(this.el, "transition");
              le && !j.test(le) && (this.upstream = le);
            }
            K.backface &&
              W.hideBackface &&
              p(this.el, K.backface.css, "hidden");
          }),
            Ue("add", _),
            Ue("start", w),
            Ue("wait", P),
            Ue("then", F),
            Ue("next", q),
            Ue("stop", te),
            Ue("set", ae),
            Ue("show", ne),
            Ue("hide", V),
            Ue("redraw", se),
            Ue("destroy", ue);
        }),
        U = v(E, function (l) {
          function _(w, P) {
            var F = e.data(w, O) || e.data(w, O, new E.Bare());
            return F.el || F.init(w), P ? F.start(P) : F;
          }
          l.init = function (w, P) {
            var F = e(w);
            if (!F.length) return this;
            if (F.length === 1) return _(F[0], P);
            var q = [];
            return (
              F.each(function (te, ae) {
                q.push(_(ae, P));
              }),
              (this.children = q),
              this
            );
          };
        }),
        h = v(function (l) {
          function _() {
            var q = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(q), te;
          }
          function w(q, te, ae) {
            return te !== void 0 && (ae = te), q in g ? q : ae;
          }
          function P(q) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
            return (te ? i(te[1], te[2], te[3]) : q).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var F = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (q, te, ae, ne) {
            (this.$el = q), (this.el = q[0]);
            var V = te[0];
            ae[2] && (V = ae[2]),
              Q[V] && (V = Q[V]),
              (this.name = V),
              (this.type = ae[1]),
              (this.duration = s(te[1], this.duration, F.duration)),
              (this.ease = w(te[2], this.ease, F.ease)),
              (this.delay = s(te[3], this.delay, F.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Z.test(this.name)),
              (this.unit = ne.unit || this.unit || W.defaultUnit),
              (this.angle = ne.angle || this.angle || W.defaultAngle),
              W.fallback || ne.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    J +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? J + g[this.ease][0] : "") +
                    (this.delay ? J + this.delay + "ms" : "")));
          }),
            (l.set = function (q) {
              (q = this.convert(q, this.type)), this.update(q), this.redraw();
            }),
            (l.transition = function (q) {
              (this.active = !0),
                (q = this.convert(q, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  q == "auto" && (q = _.call(this))),
                (this.nextStyle = q);
            }),
            (l.fallback = function (q) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (q = this.convert(q, this.type)),
                this.auto &&
                  (te == "auto" && (te = this.convert(this.get(), this.type)),
                  q == "auto" && (q = _.call(this))),
                (this.tween = new L({
                  from: te,
                  to: q,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return X(this.el, this.name);
            }),
            (l.update = function (q) {
              p(this.el, this.name, q);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                p(this.el, this.name, this.get()));
              var q = this.tween;
              q && q.context && q.destroy();
            }),
            (l.convert = function (q, te) {
              if (q == "auto" && this.auto) return q;
              var ae,
                ne = typeof q == "number",
                V = typeof q == "string";
              switch (te) {
                case C:
                  if (ne) return q;
                  if (V && q.replace(T, "") === "") return +q;
                  ae = "number(unitless)";
                  break;
                case N:
                  if (V) {
                    if (q === "" && this.original) return this.original;
                    if (te.test(q))
                      return q.charAt(0) == "#" && q.length == 7 ? q : P(q);
                  }
                  ae = "hex or rgb string";
                  break;
                case M:
                  if (ne) return q + this.unit;
                  if (V && te.test(q)) return q;
                  ae = "number(px) or string(unit)";
                  break;
                case D:
                  if (ne) return q + this.unit;
                  if (V && te.test(q)) return q;
                  ae = "number(px) or string(unit or %)";
                  break;
                case B:
                  if (ne) return q + this.angle;
                  if (V && te.test(q)) return q;
                  ae = "number(deg) or string(angle)";
                  break;
                case z:
                  if (ne || (V && D.test(q))) return q;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, q), q;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        c = v(h, function (l, _) {
          l.init = function () {
            _.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), N));
          };
        }),
        S = v(h, function (l, _) {
          (l.init = function () {
            _.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (w) {
              this.$el[this.name](w);
            });
        }),
        x = v(h, function (l, _) {
          function w(P, F) {
            var q, te, ae, ne, V;
            for (q in P)
              (ne = de[q]),
                (ae = ne[0]),
                (te = ne[1] || q),
                (V = this.convert(P[q], ae)),
                F.call(this, te, V, ae);
          }
          (l.init = function () {
            _.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  W.perspective &&
                  ((this.current.perspective = W.perspective),
                  p(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (P) {
              w.call(this, P, function (F, q) {
                this.current[F] = q;
              }),
                p(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (P) {
              var F = this.values(P);
              this.tween = new ee({
                current: this.current,
                values: F,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var q,
                te = {};
              for (q in this.current) te[q] = q in F ? F[q] : this.current[q];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (l.fallback = function (P) {
              var F = this.values(P);
              this.tween = new ee({
                current: this.current,
                values: F,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              p(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (P) {
              var F,
                q = "";
              for (F in P) q += F + "(" + P[F] + ") ";
              return q;
            }),
            (l.values = function (P) {
              var F,
                q = {};
              return (
                w.call(this, P, function (te, ae, ne) {
                  (q[te] = ae),
                    this.current[te] === void 0 &&
                      ((F = 0),
                      ~te.indexOf("scale") && (F = 1),
                      (this.current[te] = this.convert(F, ne)));
                }),
                q
              );
            });
        }),
        L = v(function (l) {
          function _(V) {
            ae.push(V) === 1 && ce(w);
          }
          function w() {
            var V,
              se,
              ue,
              _e = ae.length;
            if (_e)
              for (ce(w), se = Ee(), V = _e; V--; )
                (ue = ae[V]), ue && ue.render(se);
          }
          function P(V) {
            var se,
              ue = e.inArray(V, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
              (ae.length = ue),
              se.length && (ae = ae.concat(se)));
          }
          function F(V) {
            return Math.round(V * ne) / ne;
          }
          function q(V, se, ue) {
            return i(
              V[0] + ue * (se[0] - V[0]),
              V[1] + ue * (se[1] - V[1]),
              V[2] + ue * (se[2] - V[2])
            );
          }
          var te = { ease: g.ease[1], from: 0, to: 1 };
          (l.init = function (V) {
            (this.duration = V.duration || 0), (this.delay = V.delay || 0);
            var se = V.ease || te.ease;
            g[se] && (se = g[se][1]),
              typeof se != "function" && (se = te.ease),
              (this.ease = se),
              (this.update = V.update || o),
              (this.complete = V.complete || o),
              (this.context = V.context || this),
              (this.name = V.name);
            var ue = V.from,
              _e = V.to;
            ue === void 0 && (ue = te.from),
              _e === void 0 && (_e = te.to),
              (this.unit = V.unit || ""),
              typeof ue == "number" && typeof _e == "number"
                ? ((this.begin = ue), (this.change = _e - ue))
                : this.format(_e, ue),
              (this.value = this.begin + this.unit),
              (this.start = Ee()),
              V.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = Ee()),
                (this.active = !0),
                _(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), P(this));
            }),
            (l.render = function (V) {
              var se,
                ue = V - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var _e = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? q(this.startRGB, this.endRGB, _e)
                    : F(this.begin + _e * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (V, se) {
              if (((se += ""), (V += ""), V.charAt(0) == "#"))
                return (
                  (this.startRGB = r(se)),
                  (this.endRGB = r(V)),
                  (this.endHex = V),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(T, ""),
                  _e = V.replace(T, "");
                ue !== _e && u("tween", se, V), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (V = parseFloat(V)),
                (this.begin = this.value = se),
                (this.change = V - se);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            ne = 1e3;
        }),
        $ = v(L, function (l) {
          (l.init = function (_) {
            (this.duration = _.duration || 0),
              (this.complete = _.complete || o),
              (this.context = _.context),
              this.play();
          }),
            (l.render = function (_) {
              var w = _ - this.start;
              w < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ee = v(L, function (l, _) {
          (l.init = function (w) {
            (this.context = w.context),
              (this.update = w.update),
              (this.tweens = []),
              (this.current = w.current);
            var P, F;
            for (P in w.values)
              (F = w.values[P]),
                this.current[P] !== F &&
                  this.tweens.push(
                    new L({
                      name: P,
                      from: this.current[P],
                      to: F,
                      duration: w.duration,
                      delay: w.delay,
                      ease: w.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (w) {
              var P,
                F,
                q = this.tweens.length,
                te = !1;
              for (P = q; P--; )
                (F = this.tweens[P]),
                  F.context &&
                    (F.render(w), (this.current[F.name] = F.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((_.destroy.call(this), this.tweens)) {
                var w,
                  P = this.tweens.length;
                for (w = P; w--; ) this.tweens[w].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        W = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !K.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!K.transition) return (W.fallback = !0);
        W.agentTests.push("(" + l + ")");
        var _ = new RegExp(W.agentTests.join("|"), "i");
        W.fallback = _.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new L(l);
        }),
        (t.delay = function (l, _, w) {
          return new $({ complete: _, duration: l, context: w });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var p = e.style,
        X = e.css,
        Q = { transform: K.transform && K.transform.css },
        H = {
          color: [c, N],
          background: [c, N, "background-color"],
          "outline-color": [c, N],
          "border-color": [c, N],
          "border-top-color": [c, N],
          "border-right-color": [c, N],
          "border-bottom-color": [c, N],
          "border-left-color": [c, N],
          "border-width": [h, M],
          "border-top-width": [h, M],
          "border-right-width": [h, M],
          "border-bottom-width": [h, M],
          "border-left-width": [h, M],
          "border-spacing": [h, M],
          "letter-spacing": [h, M],
          margin: [h, M],
          "margin-top": [h, M],
          "margin-right": [h, M],
          "margin-bottom": [h, M],
          "margin-left": [h, M],
          padding: [h, M],
          "padding-top": [h, M],
          "padding-right": [h, M],
          "padding-bottom": [h, M],
          "padding-left": [h, M],
          "outline-width": [h, M],
          opacity: [h, C],
          top: [h, D],
          right: [h, D],
          bottom: [h, D],
          left: [h, D],
          "font-size": [h, D],
          "text-indent": [h, D],
          "word-spacing": [h, D],
          width: [h, D],
          "min-width": [h, D],
          "max-width": [h, D],
          height: [h, D],
          "min-height": [h, D],
          "max-height": [h, D],
          "line-height": [h, z],
          "scroll-top": [S, C, "scrollTop"],
          "scroll-left": [S, C, "scrollLeft"],
        },
        de = {};
      K.transform &&
        ((H.transform = [x]),
        (de = {
          x: [D, "translateX"],
          y: [D, "translateY"],
          rotate: [B],
          rotateX: [B],
          rotateY: [B],
          scale: [C],
          scaleX: [C],
          scaleY: [C],
          skew: [B],
          skewX: [B],
          skewY: [B],
        })),
        K.transform &&
          K.backface &&
          ((de.z = [D, "translateZ"]),
          (de.rotateZ = [B]),
          (de.scaleZ = [C]),
          (de.perspective = [M]));
      var Oe = /ms/,
        ke = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ha = d((MF, ga) => {
    "use strict";
    var Jv = window.$,
      eE = Yr() && Jv.tram;
    ga.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        i = Function.prototype,
        o = n.push,
        a = n.slice,
        u = n.concat,
        s = r.toString,
        f = r.hasOwnProperty,
        y = n.forEach,
        v = n.map,
        g = n.reduce,
        m = n.reduceRight,
        b = n.filter,
        I = n.every,
        O = n.some,
        T = n.indexOf,
        R = n.lastIndexOf,
        C = Array.isArray,
        N = Object.keys,
        M = i.bind,
        D =
          (e.each =
          e.forEach =
            function (A, G, Y) {
              if (A == null) return A;
              if (y && A.forEach === y) A.forEach(G, Y);
              else if (A.length === +A.length) {
                for (var K = 0, re = A.length; K < re; K++)
                  if (G.call(Y, A[K], K, A) === t) return;
              } else
                for (var ie = e.keys(A), K = 0, re = ie.length; K < re; K++)
                  if (G.call(Y, A[ie[K]], ie[K], A) === t) return;
              return A;
            });
      (e.map = e.collect =
        function (A, G, Y) {
          var K = [];
          return A == null
            ? K
            : v && A.map === v
            ? A.map(G, Y)
            : (D(A, function (re, ie, ce) {
                K.push(G.call(Y, re, ie, ce));
              }),
              K);
        }),
        (e.find = e.detect =
          function (A, G, Y) {
            var K;
            return (
              B(A, function (re, ie, ce) {
                if (G.call(Y, re, ie, ce)) return (K = re), !0;
              }),
              K
            );
          }),
        (e.filter = e.select =
          function (A, G, Y) {
            var K = [];
            return A == null
              ? K
              : b && A.filter === b
              ? A.filter(G, Y)
              : (D(A, function (re, ie, ce) {
                  G.call(Y, re, ie, ce) && K.push(re);
                }),
                K);
          });
      var B =
        (e.some =
        e.any =
          function (A, G, Y) {
            G || (G = e.identity);
            var K = !1;
            return A == null
              ? K
              : O && A.some === O
              ? A.some(G, Y)
              : (D(A, function (re, ie, ce) {
                  if (K || (K = G.call(Y, re, ie, ce))) return t;
                }),
                !!K);
          });
      (e.contains = e.include =
        function (A, G) {
          return A == null
            ? !1
            : T && A.indexOf === T
            ? A.indexOf(G) != -1
            : B(A, function (Y) {
                return Y === G;
              });
        }),
        (e.delay = function (A, G) {
          var Y = a.call(arguments, 2);
          return setTimeout(function () {
            return A.apply(null, Y);
          }, G);
        }),
        (e.defer = function (A) {
          return e.delay.apply(e, [A, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (A) {
          var G, Y, K;
          return function () {
            G ||
              ((G = !0),
              (Y = arguments),
              (K = this),
              eE.frame(function () {
                (G = !1), A.apply(K, Y);
              }));
          };
        }),
        (e.debounce = function (A, G, Y) {
          var K,
            re,
            ie,
            ce,
            Ee,
            E = function () {
              var U = e.now() - ce;
              U < G
                ? (K = setTimeout(E, G - U))
                : ((K = null), Y || ((Ee = A.apply(ie, re)), (ie = re = null)));
            };
          return function () {
            (ie = this), (re = arguments), (ce = e.now());
            var U = Y && !K;
            return (
              K || (K = setTimeout(E, G)),
              U && ((Ee = A.apply(ie, re)), (ie = re = null)),
              Ee
            );
          };
        }),
        (e.defaults = function (A) {
          if (!e.isObject(A)) return A;
          for (var G = 1, Y = arguments.length; G < Y; G++) {
            var K = arguments[G];
            for (var re in K) A[re] === void 0 && (A[re] = K[re]);
          }
          return A;
        }),
        (e.keys = function (A) {
          if (!e.isObject(A)) return [];
          if (N) return N(A);
          var G = [];
          for (var Y in A) e.has(A, Y) && G.push(Y);
          return G;
        }),
        (e.has = function (A, G) {
          return f.call(A, G);
        }),
        (e.isObject = function (A) {
          return A === Object(A);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        j = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        Z = /\\|'|\r|\n|\u2028|\u2029/g,
        J = function (A) {
          return "\\" + j[A];
        },
        k = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (A, G, Y) {
          !G && Y && (G = Y), (G = e.defaults({}, G, e.templateSettings));
          var K = RegExp(
              [
                (G.escape || z).source,
                (G.interpolate || z).source,
                (G.evaluate || z).source,
              ].join("|") + "|$",
              "g"
            ),
            re = 0,
            ie = "__p+='";
          A.replace(K, function (U, h, c, S, x) {
            return (
              (ie += A.slice(re, x).replace(Z, J)),
              (re = x + U.length),
              h
                ? (ie +=
                    `'+
((__t=(` +
                    h +
                    `))==null?'':_.escape(__t))+
'`)
                : c
                ? (ie +=
                    `'+
((__t=(` +
                    c +
                    `))==null?'':__t)+
'`)
                : S &&
                  (ie +=
                    `';
` +
                    S +
                    `
__p+='`),
              U
            );
          }),
            (ie += `';
`);
          var ce = G.variable;
          if (ce) {
            if (!k.test(ce))
              throw new Error("variable is not a bare identifier: " + ce);
          } else
            (ie =
              `with(obj||{}){
` +
              ie +
              `}
`),
              (ce = "obj");
          ie =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            ie +
            `return __p;
`;
          var Ee;
          try {
            Ee = new Function(G.variable || "obj", "_", ie);
          } catch (U) {
            throw ((U.source = ie), U);
          }
          var E = function (U) {
            return Ee.call(this, U, e);
          };
          return (
            (E.source =
              "function(" +
              ce +
              `){
` +
              ie +
              "}"),
            E
          );
        }),
        e
      );
    })();
  });
  var De = d((FF, ba) => {
    "use strict";
    var ge = {},
      St = {},
      xt = [],
      $r = window.Webflow || [],
      lt = window.jQuery,
      He = lt(window),
      tE = lt(document),
      $e = lt.isFunction,
      We = (ge._ = ha()),
      Ea = (ge.tram = Yr() && lt.tram),
      Fn = !1,
      Zr = !1;
    Ea.config.hideBackface = !1;
    Ea.config.keepInherited = !0;
    ge.define = function (e, t, n) {
      St[e] && ya(St[e]);
      var r = (St[e] = t(lt, We, n) || {});
      return ma(r), r;
    };
    ge.require = function (e) {
      return St[e];
    };
    function ma(e) {
      ge.env() &&
        ($e(e.design) && He.on("__wf_design", e.design),
        $e(e.preview) && He.on("__wf_preview", e.preview)),
        $e(e.destroy) && He.on("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && nE(e);
    }
    function nE(e) {
      if (Fn) {
        e.ready();
        return;
      }
      We.contains(xt, e.ready) || xt.push(e.ready);
    }
    function ya(e) {
      $e(e.design) && He.off("__wf_design", e.design),
        $e(e.preview) && He.off("__wf_preview", e.preview),
        $e(e.destroy) && He.off("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && rE(e);
    }
    function rE(e) {
      xt = We.filter(xt, function (t) {
        return t !== e.ready;
      });
    }
    ge.push = function (e) {
      if (Fn) {
        $e(e) && e();
        return;
      }
      $r.push(e);
    };
    ge.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Mn = navigator.userAgent.toLowerCase(),
      _a = (ge.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      iE = (ge.env.chrome =
        /chrome/.test(Mn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Mn.match(/chrome\/(\d+)\./)[1], 10)),
      oE = (ge.env.ios = /(ipod|iphone|ipad)/.test(Mn));
    ge.env.safari = /safari/.test(Mn) && !iE && !oE;
    var Qr;
    _a &&
      tE.on("touchstart mousedown", function (e) {
        Qr = e.target;
      });
    ge.validClick = _a
      ? function (e) {
          return e === Qr || lt.contains(e, Qr);
        }
      : function () {
          return !0;
        };
    var Ia = "resize.webflow orientationchange.webflow load.webflow",
      aE = "scroll.webflow " + Ia;
    ge.resize = Jr(He, Ia);
    ge.scroll = Jr(He, aE);
    ge.redraw = Jr();
    function Jr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = We.throttle(function (i) {
          We.each(n, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (i) {
          typeof i == "function" && (We.contains(n, i) || n.push(i));
        }),
        (r.off = function (i) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = We.filter(n, function (o) {
            return o !== i;
          });
        }),
        r
      );
    }
    ge.location = function (e) {
      window.location = e;
    };
    ge.env() && (ge.location = function () {});
    ge.ready = function () {
      (Fn = !0), Zr ? sE() : We.each(xt, va), We.each($r, va), ge.resize.up();
    };
    function va(e) {
      $e(e) && e();
    }
    function sE() {
      (Zr = !1), We.each(St, ma);
    }
    var mt;
    ge.load = function (e) {
      mt.then(e);
    };
    function Ta() {
      mt && (mt.reject(), He.off("load", mt.resolve)),
        (mt = new lt.Deferred()),
        He.on("load", mt.resolve);
    }
    ge.destroy = function (e) {
      (e = e || {}),
        (Zr = !0),
        He.triggerHandler("__wf_destroy"),
        e.domready != null && (Fn = e.domready),
        We.each(St, ya),
        ge.resize.off(),
        ge.scroll.off(),
        ge.redraw.off(),
        (xt = []),
        ($r = []),
        mt.state() === "pending" && Ta();
    };
    lt(ge.ready);
    Ta();
    ba.exports = window.Webflow = ge;
  });
  var Oa = d((qF, Aa) => {
    "use strict";
    var wa = De();
    wa.define(
      "brand",
      (Aa.exports = function (e) {
        var t = {},
          n = document,
          r = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          s =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var m = r.attr("data-wf-status"),
            b = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(b) && a.hostname !== b && (m = !0),
            m &&
              !u &&
             // ((f = f || v()), //
              g(),
              setTimeout(g, 500),
              e(n).off(s, y).on(s, y);
        };
        function y() {
          var m =
            n.fullScreen ||
            n.mozFullScreen ||
            n.webkitIsFullScreen ||
            n.msFullscreenElement ||
            !!n.webkitFullscreenElement;
          e(f).attr("style", m ? "display: none !important;" : "");
        }
        /* function v() {
          var m = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            I = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return m.append(b, I), m[0];
        } */
        function g() {
          var m = i.children(o),
            b = m.length && m.get(0) === f,
            I = wa.env("editor");
          if (b) {
            I && m.remove();
            return;
          }
          m.length && m.remove(), I || i.append(f);
        }
        return t;
      })
    );
  });
  var xa = d((kF, Sa) => {
    "use strict";
    var ei = De();
    ei.define(
      "edit",
      (Sa.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (ei.env("test") || ei.env("frame")) && !n.fixture && !uE())
        )
          return { exit: 1 };
        var r = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          u = "hashchange",
          s,
          f = n.load || g,
          y = !1;
        try {
          y =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        y
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(u, v).triggerHandler(u);
        function v() {
          s || (/\?edit/.test(a.hash) && f());
        }
        function g() {
          (s = !0),
            (window.WebflowEditor = !0),
            i.off(u, v),
            R(function (N) {
              e.ajax({
                url: T("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(N),
              });
            });
        }
        function m(N) {
          return function (M) {
            if (!M) {
              console.error("Could not load editor data");
              return;
            }
            (M.thirdPartyCookiesSupported = N),
              b(O(M.scriptPath), function () {
                window.WebflowEditor(M);
              });
          };
        }
        function b(N, M) {
          e.ajax({ type: "GET", url: N, dataType: "script", cache: !0 }).then(
            M,
            I
          );
        }
        function I(N, M, D) {
          throw (console.error("Could not load editor script: " + M), D);
        }
        function O(N) {
          return N.indexOf("//") >= 0
            ? N
            : T("https://editor-api.webflow.com" + N);
        }
        function T(N) {
          return N.replace(/([^:])\/\//g, "$1/");
        }
        function R(N) {
          var M = window.document.createElement("iframe");
          (M.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (M.style.display = "none"),
            (M.sandbox = "allow-scripts allow-same-origin");
          var D = function (B) {
            B.data === "WF_third_party_cookies_unsupported"
              ? (C(M, D), N(!1))
              : B.data === "WF_third_party_cookies_supported" &&
                (C(M, D), N(!0));
          };
          (M.onerror = function () {
            C(M, D), N(!1);
          }),
            window.addEventListener("message", D, !1),
            window.document.body.appendChild(M);
        }
        function C(N, M) {
          window.removeEventListener("message", M, !1), N.remove();
        }
        return r;
      })
    );
    function uE() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Ca = d((GF, Ra) => {
    "use strict";
    var cE = De();
    cE.define(
      "focus-visible",
      (Ra.exports = function () {
        function e(n) {
          var r = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function u(C) {
            return !!(
              C &&
              C !== document &&
              C.nodeName !== "HTML" &&
              C.nodeName !== "BODY" &&
              "classList" in C &&
              "contains" in C.classList
            );
          }
          function s(C) {
            var N = C.type,
              M = C.tagName;
            return !!(
              (M === "INPUT" && a[N] && !C.readOnly) ||
              (M === "TEXTAREA" && !C.readOnly) ||
              C.isContentEditable
            );
          }
          function f(C) {
            C.getAttribute("data-wf-focus-visible") ||
              C.setAttribute("data-wf-focus-visible", "true");
          }
          function y(C) {
            C.getAttribute("data-wf-focus-visible") &&
              C.removeAttribute("data-wf-focus-visible");
          }
          function v(C) {
            C.metaKey ||
              C.altKey ||
              C.ctrlKey ||
              (u(n.activeElement) && f(n.activeElement), (r = !0));
          }
          function g() {
            r = !1;
          }
          function m(C) {
            u(C.target) && (r || s(C.target)) && f(C.target);
          }
          function b(C) {
            u(C.target) &&
              C.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              y(C.target));
          }
          function I() {
            document.visibilityState === "hidden" && (i && (r = !0), O());
          }
          function O() {
            document.addEventListener("mousemove", R),
              document.addEventListener("mousedown", R),
              document.addEventListener("mouseup", R),
              document.addEventListener("pointermove", R),
              document.addEventListener("pointerdown", R),
              document.addEventListener("pointerup", R),
              document.addEventListener("touchmove", R),
              document.addEventListener("touchstart", R),
              document.addEventListener("touchend", R);
          }
          function T() {
            document.removeEventListener("mousemove", R),
              document.removeEventListener("mousedown", R),
              document.removeEventListener("mouseup", R),
              document.removeEventListener("pointermove", R),
              document.removeEventListener("pointerdown", R),
              document.removeEventListener("pointerup", R),
              document.removeEventListener("touchmove", R),
              document.removeEventListener("touchstart", R),
              document.removeEventListener("touchend", R);
          }
          function R(C) {
            (C.target.nodeName && C.target.nodeName.toLowerCase() === "html") ||
              ((r = !1), T());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", I, !0),
            O(),
            n.addEventListener("focus", m, !0),
            n.addEventListener("blur", b, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Na = d((XF, Pa) => {
    "use strict";
    var La = De();
    La.define(
      "focus",
      (Pa.exports = function () {
        var e = [],
          t = !1;
        function n(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function r(a) {
          var u = a.target,
            s = u.tagName;
          return (
            (/^a$/i.test(s) && u.href != null) ||
            (/^(button|textarea)$/i.test(s) && u.disabled !== !0) ||
            (/^input$/i.test(s) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(u.type) &&
              !u.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(s) &&
              !Number.isNaN(Number.parseFloat(u.tabIndex))) ||
            /^audio$/i.test(s) ||
            (/^video$/i.test(s) && u.controls === !0)
          );
        }
        function i(a) {
          r(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            La.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: o };
      })
    );
  });
  var Fa = d((UF, Ma) => {
    "use strict";
    var ti = window.jQuery,
      Ze = {},
      qn = [],
      Da = ".w-ix",
      kn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ti(t).triggerHandler(Ze.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ti(t).triggerHandler(Ze.types.OUTRO));
        },
      };
    Ze.triggers = {};
    Ze.types = { INTRO: "w-ix-intro" + Da, OUTRO: "w-ix-outro" + Da };
    Ze.init = function () {
      for (var e = qn.length, t = 0; t < e; t++) {
        var n = qn[t];
        n[0](0, n[1]);
      }
      (qn = []), ti.extend(Ze.triggers, kn);
    };
    Ze.async = function () {
      for (var e in kn) {
        var t = kn[e];
        kn.hasOwnProperty(e) &&
          (Ze.triggers[e] = function (n, r) {
            qn.push([t, r]);
          });
      }
    };
    Ze.async();
    Ma.exports = Ze;
  });
  var rn = d((VF, Ga) => {
    "use strict";
    var ni = Fa();
    function qa(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var lE = window.jQuery,
      Gn = {},
      ka = ".w-ix",
      fE = {
        reset: function (e, t) {
          ni.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ni.triggers.intro(e, t), qa(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ni.triggers.outro(e, t), qa(t, "COMPONENT_INACTIVE");
        },
      };
    Gn.triggers = {};
    Gn.types = { INTRO: "w-ix-intro" + ka, OUTRO: "w-ix-outro" + ka };
    lE.extend(Gn.triggers, fE);
    Ga.exports = Gn;
  });
  var ri = d((WF, Xa) => {
    var dE =
      typeof global == "object" && global && global.Object === Object && global;
    Xa.exports = dE;
  });
  var Be = d((HF, Ua) => {
    var pE = ri(),
      gE = typeof self == "object" && self && self.Object === Object && self,
      hE = pE || gE || Function("return this")();
    Ua.exports = hE;
  });
  var Rt = d((BF, Va) => {
    var vE = Be(),
      EE = vE.Symbol;
    Va.exports = EE;
  });
  var za = d((zF, Ba) => {
    var Wa = Rt(),
      Ha = Object.prototype,
      mE = Ha.hasOwnProperty,
      yE = Ha.toString,
      on = Wa ? Wa.toStringTag : void 0;
    function _E(e) {
      var t = mE.call(e, on),
        n = e[on];
      try {
        e[on] = void 0;
        var r = !0;
      } catch {}
      var i = yE.call(e);
      return r && (t ? (e[on] = n) : delete e[on]), i;
    }
    Ba.exports = _E;
  });
  var ja = d((KF, Ka) => {
    var IE = Object.prototype,
      TE = IE.toString;
    function bE(e) {
      return TE.call(e);
    }
    Ka.exports = bE;
  });
  var ft = d((jF, $a) => {
    var Ya = Rt(),
      wE = za(),
      AE = ja(),
      OE = "[object Null]",
      SE = "[object Undefined]",
      Qa = Ya ? Ya.toStringTag : void 0;
    function xE(e) {
      return e == null
        ? e === void 0
          ? SE
          : OE
        : Qa && Qa in Object(e)
        ? wE(e)
        : AE(e);
    }
    $a.exports = xE;
  });
  var ii = d((YF, Za) => {
    function RE(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    Za.exports = RE;
  });
  var oi = d((QF, Ja) => {
    var CE = ii(),
      LE = CE(Object.getPrototypeOf, Object);
    Ja.exports = LE;
  });
  var ot = d(($F, es) => {
    function PE(e) {
      return e != null && typeof e == "object";
    }
    es.exports = PE;
  });
  var ai = d((ZF, ns) => {
    var NE = ft(),
      DE = oi(),
      ME = ot(),
      FE = "[object Object]",
      qE = Function.prototype,
      kE = Object.prototype,
      ts = qE.toString,
      GE = kE.hasOwnProperty,
      XE = ts.call(Object);
    function UE(e) {
      if (!ME(e) || NE(e) != FE) return !1;
      var t = DE(e);
      if (t === null) return !0;
      var n = GE.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && ts.call(n) == XE;
    }
    ns.exports = UE;
  });
  var rs = d((si) => {
    "use strict";
    Object.defineProperty(si, "__esModule", { value: !0 });
    si.default = VE;
    function VE(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var is = d((ci, ui) => {
    "use strict";
    Object.defineProperty(ci, "__esModule", { value: !0 });
    var WE = rs(),
      HE = BE(WE);
    function BE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ct;
    typeof self < "u"
      ? (Ct = self)
      : typeof window < "u"
      ? (Ct = window)
      : typeof global < "u"
      ? (Ct = global)
      : typeof ui < "u"
      ? (Ct = ui)
      : (Ct = Function("return this")());
    var zE = (0, HE.default)(Ct);
    ci.default = zE;
  });
  var li = d((an) => {
    "use strict";
    an.__esModule = !0;
    an.ActionTypes = void 0;
    an.default = us;
    var KE = ai(),
      jE = ss(KE),
      YE = is(),
      os = ss(YE);
    function ss(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var as = (an.ActionTypes = { INIT: "@@redux/INIT" });
    function us(e, t, n) {
      var r;
      if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
      ) {
        if (typeof n != "function")
          throw new Error("Expected the enhancer to be a function.");
        return n(us)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        u = a,
        s = !1;
      function f() {
        u === a && (u = a.slice());
      }
      function y() {
        return o;
      }
      function v(I) {
        if (typeof I != "function")
          throw new Error("Expected listener to be a function.");
        var O = !0;
        return (
          f(),
          u.push(I),
          function () {
            if (O) {
              (O = !1), f();
              var R = u.indexOf(I);
              u.splice(R, 1);
            }
          }
        );
      }
      function g(I) {
        if (!(0, jE.default)(I))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof I.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (o = i(o, I));
        } finally {
          s = !1;
        }
        for (var O = (a = u), T = 0; T < O.length; T++) O[T]();
        return I;
      }
      function m(I) {
        if (typeof I != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = I), g({ type: as.INIT });
      }
      function b() {
        var I,
          O = v;
        return (
          (I = {
            subscribe: function (R) {
              if (typeof R != "object")
                throw new TypeError("Expected the observer to be an object.");
              function C() {
                R.next && R.next(y());
              }
              C();
              var N = O(C);
              return { unsubscribe: N };
            },
          }),
          (I[os.default] = function () {
            return this;
          }),
          I
        );
      }
      return (
        g({ type: as.INIT }),
        (r = { dispatch: g, subscribe: v, getState: y, replaceReducer: m }),
        (r[os.default] = b),
        r
      );
    }
  });
  var di = d((fi) => {
    "use strict";
    fi.__esModule = !0;
    fi.default = QE;
    function QE(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var fs = d((pi) => {
    "use strict";
    pi.__esModule = !0;
    pi.default = tm;
    var cs = li(),
      $E = ai(),
      n1 = ls($E),
      ZE = di(),
      r1 = ls(ZE);
    function ls(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function JE(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function em(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: cs.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                cs.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function tm(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i]);
      }
      var o = Object.keys(n);
      if (!1) var a;
      var u;
      try {
        em(n);
      } catch (s) {
        u = s;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          y = arguments[1];
        if (u) throw u;
        if (!1) var v;
        for (var g = !1, m = {}, b = 0; b < o.length; b++) {
          var I = o[b],
            O = n[I],
            T = f[I],
            R = O(T, y);
          if (typeof R > "u") {
            var C = JE(I, y);
            throw new Error(C);
          }
          (m[I] = R), (g = g || R !== T);
        }
        return g ? m : f;
      };
    }
  });
  var ps = d((gi) => {
    "use strict";
    gi.__esModule = !0;
    gi.default = nm;
    function ds(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function nm(e, t) {
      if (typeof e == "function") return ds(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
        var o = n[i],
          a = e[o];
        typeof a == "function" && (r[o] = ds(a, t));
      }
      return r;
    }
  });
  var vi = d((hi) => {
    "use strict";
    hi.__esModule = !0;
    hi.default = rm;
    function rm() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var gs = d((Ei) => {
    "use strict";
    Ei.__esModule = !0;
    var im =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    Ei.default = um;
    var om = vi(),
      am = sm(om);
    function sm(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function um() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return function (i, o, a) {
          var u = r(i, o, a),
            s = u.dispatch,
            f = [],
            y = {
              getState: u.getState,
              dispatch: function (g) {
                return s(g);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(y);
            })),
            (s = am.default.apply(void 0, f)(u.dispatch)),
            im({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var mi = d((Xe) => {
    "use strict";
    Xe.__esModule = !0;
    Xe.compose =
      Xe.applyMiddleware =
      Xe.bindActionCreators =
      Xe.combineReducers =
      Xe.createStore =
        void 0;
    var cm = li(),
      lm = Lt(cm),
      fm = fs(),
      dm = Lt(fm),
      pm = ps(),
      gm = Lt(pm),
      hm = gs(),
      vm = Lt(hm),
      Em = vi(),
      mm = Lt(Em),
      ym = di(),
      u1 = Lt(ym);
    function Lt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Xe.createStore = lm.default;
    Xe.combineReducers = dm.default;
    Xe.bindActionCreators = gm.default;
    Xe.applyMiddleware = vm.default;
    Xe.compose = mm.default;
  });
  var ze,
    yi,
    Je,
    _m,
    Im,
    Xn,
    Tm,
    _i = ve(() => {
      "use strict";
      (ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (yi = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Je = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (_m = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Im = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Xn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Tm = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Re,
    bm,
    Un = ve(() => {
      "use strict";
      (Re = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (bm = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var wm,
    hs = ve(() => {
      "use strict";
      wm = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Am,
    Om,
    Sm,
    xm,
    Rm,
    Cm,
    Lm,
    Ii,
    vs = ve(() => {
      "use strict";
      Un();
      ({
        TRANSFORM_MOVE: Am,
        TRANSFORM_SCALE: Om,
        TRANSFORM_ROTATE: Sm,
        TRANSFORM_SKEW: xm,
        STYLE_SIZE: Rm,
        STYLE_FILTER: Cm,
        STYLE_FONT_VARIATION: Lm,
      } = Re),
        (Ii = {
          [Am]: !0,
          [Om]: !0,
          [Sm]: !0,
          [xm]: !0,
          [Rm]: !0,
          [Cm]: !0,
          [Lm]: !0,
        });
    });
  var Te = {};
  Ne(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => jm,
    IX2_ANIMATION_FRAME_CHANGED: () => Vm,
    IX2_CLEAR_REQUESTED: () => Gm,
    IX2_ELEMENT_STATE_CHANGED: () => Km,
    IX2_EVENT_LISTENER_ADDED: () => Xm,
    IX2_EVENT_STATE_CHANGED: () => Um,
    IX2_INSTANCE_ADDED: () => Hm,
    IX2_INSTANCE_REMOVED: () => zm,
    IX2_INSTANCE_STARTED: () => Bm,
    IX2_MEDIA_QUERIES_DEFINED: () => Qm,
    IX2_PARAMETER_CHANGED: () => Wm,
    IX2_PLAYBACK_REQUESTED: () => qm,
    IX2_PREVIEW_REQUESTED: () => Fm,
    IX2_RAW_DATA_IMPORTED: () => Pm,
    IX2_SESSION_INITIALIZED: () => Nm,
    IX2_SESSION_STARTED: () => Dm,
    IX2_SESSION_STOPPED: () => Mm,
    IX2_STOP_REQUESTED: () => km,
    IX2_TEST_FRAME_RENDERED: () => $m,
    IX2_VIEWPORT_WIDTH_CHANGED: () => Ym,
  });
  var Pm,
    Nm,
    Dm,
    Mm,
    Fm,
    qm,
    km,
    Gm,
    Xm,
    Um,
    Vm,
    Wm,
    Hm,
    Bm,
    zm,
    Km,
    jm,
    Ym,
    Qm,
    $m,
    Es = ve(() => {
      "use strict";
      (Pm = "IX2_RAW_DATA_IMPORTED"),
        (Nm = "IX2_SESSION_INITIALIZED"),
        (Dm = "IX2_SESSION_STARTED"),
        (Mm = "IX2_SESSION_STOPPED"),
        (Fm = "IX2_PREVIEW_REQUESTED"),
        (qm = "IX2_PLAYBACK_REQUESTED"),
        (km = "IX2_STOP_REQUESTED"),
        (Gm = "IX2_CLEAR_REQUESTED"),
        (Xm = "IX2_EVENT_LISTENER_ADDED"),
        (Um = "IX2_EVENT_STATE_CHANGED"),
        (Vm = "IX2_ANIMATION_FRAME_CHANGED"),
        (Wm = "IX2_PARAMETER_CHANGED"),
        (Hm = "IX2_INSTANCE_ADDED"),
        (Bm = "IX2_INSTANCE_STARTED"),
        (zm = "IX2_INSTANCE_REMOVED"),
        (Km = "IX2_ELEMENT_STATE_CHANGED"),
        (jm = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (Ym = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (Qm = "IX2_MEDIA_QUERIES_DEFINED"),
        ($m = "IX2_TEST_FRAME_RENDERED");
    });
  var Ae = {};
  Ne(Ae, {
    ABSTRACT_NODE: () => Yy,
    AUTO: () => ky,
    BACKGROUND: () => Py,
    BACKGROUND_COLOR: () => Ly,
    BAR_DELIMITER: () => Uy,
    BORDER_COLOR: () => Ny,
    BOUNDARY_SELECTOR: () => ny,
    CHILDREN: () => Vy,
    COLON_DELIMITER: () => Xy,
    COLOR: () => Dy,
    COMMA_DELIMITER: () => Gy,
    CONFIG_UNIT: () => ly,
    CONFIG_VALUE: () => ay,
    CONFIG_X_UNIT: () => sy,
    CONFIG_X_VALUE: () => ry,
    CONFIG_Y_UNIT: () => uy,
    CONFIG_Y_VALUE: () => iy,
    CONFIG_Z_UNIT: () => cy,
    CONFIG_Z_VALUE: () => oy,
    DISPLAY: () => My,
    FILTER: () => Sy,
    FLEX: () => Fy,
    FONT_VARIATION_SETTINGS: () => xy,
    HEIGHT: () => Cy,
    HTML_ELEMENT: () => Ky,
    IMMEDIATE_CHILDREN: () => Wy,
    IX2_ID_DELIMITER: () => Zm,
    OPACITY: () => Oy,
    PARENT: () => By,
    PLAIN_OBJECT: () => jy,
    PRESERVE_3D: () => zy,
    RENDER_GENERAL: () => $y,
    RENDER_PLUGIN: () => Jy,
    RENDER_STYLE: () => Zy,
    RENDER_TRANSFORM: () => Qy,
    ROTATE_X: () => _y,
    ROTATE_Y: () => Iy,
    ROTATE_Z: () => Ty,
    SCALE_3D: () => yy,
    SCALE_X: () => vy,
    SCALE_Y: () => Ey,
    SCALE_Z: () => my,
    SIBLINGS: () => Hy,
    SKEW: () => by,
    SKEW_X: () => wy,
    SKEW_Y: () => Ay,
    TRANSFORM: () => fy,
    TRANSLATE_3D: () => hy,
    TRANSLATE_X: () => dy,
    TRANSLATE_Y: () => py,
    TRANSLATE_Z: () => gy,
    WF_PAGE: () => Jm,
    WIDTH: () => Ry,
    WILL_CHANGE: () => qy,
    W_MOD_IX: () => ty,
    W_MOD_JS: () => ey,
  });
  var Zm,
    Jm,
    ey,
    ty,
    ny,
    ry,
    iy,
    oy,
    ay,
    sy,
    uy,
    cy,
    ly,
    fy,
    dy,
    py,
    gy,
    hy,
    vy,
    Ey,
    my,
    yy,
    _y,
    Iy,
    Ty,
    by,
    wy,
    Ay,
    Oy,
    Sy,
    xy,
    Ry,
    Cy,
    Ly,
    Py,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    ky,
    Gy,
    Xy,
    Uy,
    Vy,
    Wy,
    Hy,
    By,
    zy,
    Ky,
    jy,
    Yy,
    Qy,
    $y,
    Zy,
    Jy,
    ms = ve(() => {
      "use strict";
      (Zm = "|"),
        (Jm = "data-wf-page"),
        (ey = "w-mod-js"),
        (ty = "w-mod-ix"),
        (ny = ".w-dyn-item"),
        (ry = "xValue"),
        (iy = "yValue"),
        (oy = "zValue"),
        (ay = "value"),
        (sy = "xUnit"),
        (uy = "yUnit"),
        (cy = "zUnit"),
        (ly = "unit"),
        (fy = "transform"),
        (dy = "translateX"),
        (py = "translateY"),
        (gy = "translateZ"),
        (hy = "translate3d"),
        (vy = "scaleX"),
        (Ey = "scaleY"),
        (my = "scaleZ"),
        (yy = "scale3d"),
        (_y = "rotateX"),
        (Iy = "rotateY"),
        (Ty = "rotateZ"),
        (by = "skew"),
        (wy = "skewX"),
        (Ay = "skewY"),
        (Oy = "opacity"),
        (Sy = "filter"),
        (xy = "font-variation-settings"),
        (Ry = "width"),
        (Cy = "height"),
        (Ly = "backgroundColor"),
        (Py = "background"),
        (Ny = "borderColor"),
        (Dy = "color"),
        (My = "display"),
        (Fy = "flex"),
        (qy = "willChange"),
        (ky = "AUTO"),
        (Gy = ","),
        (Xy = ":"),
        (Uy = "|"),
        (Vy = "CHILDREN"),
        (Wy = "IMMEDIATE_CHILDREN"),
        (Hy = "SIBLINGS"),
        (By = "PARENT"),
        (zy = "preserve-3d"),
        (Ky = "HTML_ELEMENT"),
        (jy = "PLAIN_OBJECT"),
        (Yy = "ABSTRACT_NODE"),
        (Qy = "RENDER_TRANSFORM"),
        ($y = "RENDER_GENERAL"),
        (Zy = "RENDER_STYLE"),
        (Jy = "RENDER_PLUGIN");
    });
  var ys = {};
  Ne(ys, {
    ActionAppliesTo: () => bm,
    ActionTypeConsts: () => Re,
    EventAppliesTo: () => yi,
    EventBasedOn: () => Je,
    EventContinuousMouseAxes: () => _m,
    EventLimitAffectedElements: () => Im,
    EventTypeConsts: () => ze,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => Ae,
    InteractionTypeConsts: () => wm,
    QuickEffectDirectionConsts: () => Tm,
    QuickEffectIds: () => Xn,
    ReducedMotionTypes: () => Ii,
  });
  var Me = ve(() => {
    "use strict";
    _i();
    Un();
    hs();
    vs();
    Es();
    ms();
    Un();
    _i();
  });
  var e_,
    _s,
    Is = ve(() => {
      "use strict";
      Me();
      ({ IX2_RAW_DATA_IMPORTED: e_ } = Te),
        (_s = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case e_:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Pt = d((ye) => {
    "use strict";
    Object.defineProperty(ye, "__esModule", { value: !0 });
    var t_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ye.clone = Wn;
    ye.addLast = ws;
    ye.addFirst = As;
    ye.removeLast = Os;
    ye.removeFirst = Ss;
    ye.insert = xs;
    ye.removeAt = Rs;
    ye.replaceAt = Cs;
    ye.getIn = Hn;
    ye.set = Bn;
    ye.setIn = zn;
    ye.update = Ps;
    ye.updateIn = Ns;
    ye.merge = Ds;
    ye.mergeDeep = Ms;
    ye.mergeIn = Fs;
    ye.omit = qs;
    ye.addDefaults = ks;
    var Ts = "INVALID_ARGS";
    function bs(e) {
      throw new Error(e);
    }
    function Ti(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var n_ = {}.hasOwnProperty;
    function Wn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ti(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        n[i] = e[i];
      }
      return n;
    }
    function Fe(e, t, n) {
      var r = n;
      r == null && bs(Ts);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3;
        u < o;
        u++
      )
        a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var f = a[s];
        if (f != null) {
          var y = Ti(f);
          if (y.length)
            for (var v = 0; v <= y.length; v++) {
              var g = y[v];
              if (!(e && r[g] !== void 0)) {
                var m = f[g];
                t && Vn(r[g]) && Vn(m) && (m = Fe(e, t, r[g], m)),
                  !(m === void 0 || m === r[g]) &&
                    (i || ((i = !0), (r = Wn(r))), (r[g] = m));
              }
            }
        }
      }
      return r;
    }
    function Vn(e) {
      var t = typeof e > "u" ? "undefined" : t_(e);
      return e != null && (t === "object" || t === "function");
    }
    function ws(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function As(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Os(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Ss(e) {
      return e.length ? e.slice(1) : e;
    }
    function xs(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function Rs(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Cs(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
      return (i[t] = n), i;
    }
    function Hn(e, t) {
      if ((!Array.isArray(t) && bs(Ts), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var i = t[r];
          if (((n = n?.[i]), n === void 0)) return n;
        }
        return n;
      }
    }
    function Bn(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        i = e ?? r;
      if (i[t] === n) return i;
      var o = Wn(i);
      return (o[t] = n), o;
    }
    function Ls(e, t, n, r) {
      var i = void 0,
        o = t[r];
      if (r === t.length - 1) i = n;
      else {
        var a =
          Vn(e) && Vn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
        i = Ls(a, t, n, r + 1);
      }
      return Bn(e, o, i);
    }
    function zn(e, t, n) {
      return t.length ? Ls(e, t, n, 0) : n;
    }
    function Ps(e, t, n) {
      var r = e?.[t],
        i = n(r);
      return Bn(e, t, i);
    }
    function Ns(e, t, n) {
      var r = Hn(e, t),
        i = n(r);
      return zn(e, t, i);
    }
    function Ds(e, t, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Fe.call.apply(Fe, [null, !1, !1, e, t, n, r, i, o].concat(u))
        : Fe(!1, !1, e, t, n, r, i, o);
    }
    function Ms(e, t, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Fe.call.apply(Fe, [null, !1, !0, e, t, n, r, i, o].concat(u))
        : Fe(!1, !0, e, t, n, r, i, o);
    }
    function Fs(e, t, n, r, i, o, a) {
      var u = Hn(e, t);
      u == null && (u = {});
      for (
        var s = void 0,
          f = arguments.length,
          y = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        y[v - 7] = arguments[v];
      return (
        y.length
          ? (s = Fe.call.apply(Fe, [null, !1, !1, u, n, r, i, o, a].concat(y)))
          : (s = Fe(!1, !1, u, n, r, i, o, a)),
        zn(e, t, s)
      );
    }
    function qs(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
        if (n_.call(e, n[i])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var o = {}, a = Ti(e), u = 0; u < a.length; u++) {
        var s = a[u];
        n.indexOf(s) >= 0 || (o[s] = e[s]);
      }
      return o;
    }
    function ks(e, t, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6;
        s < a;
        s++
      )
        u[s - 6] = arguments[s];
      return u.length
        ? Fe.call.apply(Fe, [null, !0, !1, e, t, n, r, i, o].concat(u))
        : Fe(!0, !1, e, t, n, r, i, o);
    }
    var r_ = {
      clone: Wn,
      addLast: ws,
      addFirst: As,
      removeLast: Os,
      removeFirst: Ss,
      insert: xs,
      removeAt: Rs,
      replaceAt: Cs,
      getIn: Hn,
      set: Bn,
      setIn: zn,
      update: Ps,
      updateIn: Ns,
      merge: Ds,
      mergeDeep: Ms,
      mergeIn: Fs,
      omit: qs,
      addDefaults: ks,
    };
    ye.default = r_;
  });
  var Xs,
    i_,
    o_,
    a_,
    s_,
    u_,
    Gs,
    Us,
    Vs = ve(() => {
      "use strict";
      Me();
      (Xs = fe(Pt())),
        ({
          IX2_PREVIEW_REQUESTED: i_,
          IX2_PLAYBACK_REQUESTED: o_,
          IX2_STOP_REQUESTED: a_,
          IX2_CLEAR_REQUESTED: s_,
        } = Te),
        (u_ = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Gs = Object.create(null, {
          [i_]: { value: "preview" },
          [o_]: { value: "playback" },
          [a_]: { value: "stop" },
          [s_]: { value: "clear" },
        })),
        (Us = (e = u_, t) => {
          if (t.type in Gs) {
            let n = [Gs[t.type]];
            return (0, Xs.setIn)(e, [n], { ...t.payload });
          }
          return e;
        });
    });
  var Ce,
    c_,
    l_,
    f_,
    d_,
    p_,
    g_,
    h_,
    v_,
    E_,
    m_,
    Ws,
    y_,
    Hs,
    Bs = ve(() => {
      "use strict";
      Me();
      (Ce = fe(Pt())),
        ({
          IX2_SESSION_INITIALIZED: c_,
          IX2_SESSION_STARTED: l_,
          IX2_TEST_FRAME_RENDERED: f_,
          IX2_SESSION_STOPPED: d_,
          IX2_EVENT_LISTENER_ADDED: p_,
          IX2_EVENT_STATE_CHANGED: g_,
          IX2_ANIMATION_FRAME_CHANGED: h_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: v_,
          IX2_VIEWPORT_WIDTH_CHANGED: E_,
          IX2_MEDIA_QUERIES_DEFINED: m_,
        } = Te),
        (Ws = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (y_ = 20),
        (Hs = (e = Ws, t) => {
          switch (t.type) {
            case c_: {
              let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
              return (0, Ce.merge)(e, {
                hasBoundaryNodes: n,
                reducedMotion: r,
              });
            }
            case l_:
              return (0, Ce.set)(e, "active", !0);
            case f_: {
              let {
                payload: { step: n = y_ },
              } = t;
              return (0, Ce.set)(e, "tick", e.tick + n);
            }
            case d_:
              return Ws;
            case h_: {
              let {
                payload: { now: n },
              } = t;
              return (0, Ce.set)(e, "tick", n);
            }
            case p_: {
              let n = (0, Ce.addLast)(e.eventListeners, t.payload);
              return (0, Ce.set)(e, "eventListeners", n);
            }
            case g_: {
              let { stateKey: n, newState: r } = t.payload;
              return (0, Ce.setIn)(e, ["eventState", n], r);
            }
            case v_: {
              let { actionListId: n, isPlaying: r } = t.payload;
              return (0, Ce.setIn)(e, ["playbackState", n], r);
            }
            case E_: {
              let { width: n, mediaQueries: r } = t.payload,
                i = r.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: u, min: s, max: f } = r[a];
                if (n >= s && n <= f) {
                  o = u;
                  break;
                }
              }
              return (0, Ce.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case m_:
              return (0, Ce.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Ks = d((x1, zs) => {
    function __() {
      (this.__data__ = []), (this.size = 0);
    }
    zs.exports = __;
  });
  var Kn = d((R1, js) => {
    function I_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    js.exports = I_;
  });
  var sn = d((C1, Ys) => {
    var T_ = Kn();
    function b_(e, t) {
      for (var n = e.length; n--; ) if (T_(e[n][0], t)) return n;
      return -1;
    }
    Ys.exports = b_;
  });
  var $s = d((L1, Qs) => {
    var w_ = sn(),
      A_ = Array.prototype,
      O_ = A_.splice;
    function S_(e) {
      var t = this.__data__,
        n = w_(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : O_.call(t, n, 1), --this.size, !0;
    }
    Qs.exports = S_;
  });
  var Js = d((P1, Zs) => {
    var x_ = sn();
    function R_(e) {
      var t = this.__data__,
        n = x_(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    Zs.exports = R_;
  });
  var tu = d((N1, eu) => {
    var C_ = sn();
    function L_(e) {
      return C_(this.__data__, e) > -1;
    }
    eu.exports = L_;
  });
  var ru = d((D1, nu) => {
    var P_ = sn();
    function N_(e, t) {
      var n = this.__data__,
        r = P_(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    nu.exports = N_;
  });
  var un = d((M1, iu) => {
    var D_ = Ks(),
      M_ = $s(),
      F_ = Js(),
      q_ = tu(),
      k_ = ru();
    function Nt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Nt.prototype.clear = D_;
    Nt.prototype.delete = M_;
    Nt.prototype.get = F_;
    Nt.prototype.has = q_;
    Nt.prototype.set = k_;
    iu.exports = Nt;
  });
  var au = d((F1, ou) => {
    var G_ = un();
    function X_() {
      (this.__data__ = new G_()), (this.size = 0);
    }
    ou.exports = X_;
  });
  var uu = d((q1, su) => {
    function U_(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    su.exports = U_;
  });
  var lu = d((k1, cu) => {
    function V_(e) {
      return this.__data__.get(e);
    }
    cu.exports = V_;
  });
  var du = d((G1, fu) => {
    function W_(e) {
      return this.__data__.has(e);
    }
    fu.exports = W_;
  });
  var et = d((X1, pu) => {
    function H_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    pu.exports = H_;
  });
  var bi = d((U1, gu) => {
    var B_ = ft(),
      z_ = et(),
      K_ = "[object AsyncFunction]",
      j_ = "[object Function]",
      Y_ = "[object GeneratorFunction]",
      Q_ = "[object Proxy]";
    function $_(e) {
      if (!z_(e)) return !1;
      var t = B_(e);
      return t == j_ || t == Y_ || t == K_ || t == Q_;
    }
    gu.exports = $_;
  });
  var vu = d((V1, hu) => {
    var Z_ = Be(),
      J_ = Z_["__core-js_shared__"];
    hu.exports = J_;
  });
  var yu = d((W1, mu) => {
    var wi = vu(),
      Eu = (function () {
        var e = /[^.]+$/.exec((wi && wi.keys && wi.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function eI(e) {
      return !!Eu && Eu in e;
    }
    mu.exports = eI;
  });
  var Ai = d((H1, _u) => {
    var tI = Function.prototype,
      nI = tI.toString;
    function rI(e) {
      if (e != null) {
        try {
          return nI.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    _u.exports = rI;
  });
  var Tu = d((B1, Iu) => {
    var iI = bi(),
      oI = yu(),
      aI = et(),
      sI = Ai(),
      uI = /[\\^$.*+?()[\]{}|]/g,
      cI = /^\[object .+?Constructor\]$/,
      lI = Function.prototype,
      fI = Object.prototype,
      dI = lI.toString,
      pI = fI.hasOwnProperty,
      gI = RegExp(
        "^" +
          dI
            .call(pI)
            .replace(uI, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function hI(e) {
      if (!aI(e) || oI(e)) return !1;
      var t = iI(e) ? gI : cI;
      return t.test(sI(e));
    }
    Iu.exports = hI;
  });
  var wu = d((z1, bu) => {
    function vI(e, t) {
      return e?.[t];
    }
    bu.exports = vI;
  });
  var dt = d((K1, Au) => {
    var EI = Tu(),
      mI = wu();
    function yI(e, t) {
      var n = mI(e, t);
      return EI(n) ? n : void 0;
    }
    Au.exports = yI;
  });
  var jn = d((j1, Ou) => {
    var _I = dt(),
      II = Be(),
      TI = _I(II, "Map");
    Ou.exports = TI;
  });
  var cn = d((Y1, Su) => {
    var bI = dt(),
      wI = bI(Object, "create");
    Su.exports = wI;
  });
  var Cu = d((Q1, Ru) => {
    var xu = cn();
    function AI() {
      (this.__data__ = xu ? xu(null) : {}), (this.size = 0);
    }
    Ru.exports = AI;
  });
  var Pu = d(($1, Lu) => {
    function OI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Lu.exports = OI;
  });
  var Du = d((Z1, Nu) => {
    var SI = cn(),
      xI = "__lodash_hash_undefined__",
      RI = Object.prototype,
      CI = RI.hasOwnProperty;
    function LI(e) {
      var t = this.__data__;
      if (SI) {
        var n = t[e];
        return n === xI ? void 0 : n;
      }
      return CI.call(t, e) ? t[e] : void 0;
    }
    Nu.exports = LI;
  });
  var Fu = d((J1, Mu) => {
    var PI = cn(),
      NI = Object.prototype,
      DI = NI.hasOwnProperty;
    function MI(e) {
      var t = this.__data__;
      return PI ? t[e] !== void 0 : DI.call(t, e);
    }
    Mu.exports = MI;
  });
  var ku = d((e2, qu) => {
    var FI = cn(),
      qI = "__lodash_hash_undefined__";
    function kI(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = FI && t === void 0 ? qI : t),
        this
      );
    }
    qu.exports = kI;
  });
  var Xu = d((t2, Gu) => {
    var GI = Cu(),
      XI = Pu(),
      UI = Du(),
      VI = Fu(),
      WI = ku();
    function Dt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Dt.prototype.clear = GI;
    Dt.prototype.delete = XI;
    Dt.prototype.get = UI;
    Dt.prototype.has = VI;
    Dt.prototype.set = WI;
    Gu.exports = Dt;
  });
  var Wu = d((n2, Vu) => {
    var Uu = Xu(),
      HI = un(),
      BI = jn();
    function zI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Uu(),
          map: new (BI || HI)(),
          string: new Uu(),
        });
    }
    Vu.exports = zI;
  });
  var Bu = d((r2, Hu) => {
    function KI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Hu.exports = KI;
  });
  var ln = d((i2, zu) => {
    var jI = Bu();
    function YI(e, t) {
      var n = e.__data__;
      return jI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    zu.exports = YI;
  });
  var ju = d((o2, Ku) => {
    var QI = ln();
    function $I(e) {
      var t = QI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Ku.exports = $I;
  });
  var Qu = d((a2, Yu) => {
    var ZI = ln();
    function JI(e) {
      return ZI(this, e).get(e);
    }
    Yu.exports = JI;
  });
  var Zu = d((s2, $u) => {
    var eT = ln();
    function tT(e) {
      return eT(this, e).has(e);
    }
    $u.exports = tT;
  });
  var ec = d((u2, Ju) => {
    var nT = ln();
    function rT(e, t) {
      var n = nT(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    Ju.exports = rT;
  });
  var Yn = d((c2, tc) => {
    var iT = Wu(),
      oT = ju(),
      aT = Qu(),
      sT = Zu(),
      uT = ec();
    function Mt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Mt.prototype.clear = iT;
    Mt.prototype.delete = oT;
    Mt.prototype.get = aT;
    Mt.prototype.has = sT;
    Mt.prototype.set = uT;
    tc.exports = Mt;
  });
  var rc = d((l2, nc) => {
    var cT = un(),
      lT = jn(),
      fT = Yn(),
      dT = 200;
    function pT(e, t) {
      var n = this.__data__;
      if (n instanceof cT) {
        var r = n.__data__;
        if (!lT || r.length < dT - 1)
          return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new fT(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    nc.exports = pT;
  });
  var Oi = d((f2, ic) => {
    var gT = un(),
      hT = au(),
      vT = uu(),
      ET = lu(),
      mT = du(),
      yT = rc();
    function Ft(e) {
      var t = (this.__data__ = new gT(e));
      this.size = t.size;
    }
    Ft.prototype.clear = hT;
    Ft.prototype.delete = vT;
    Ft.prototype.get = ET;
    Ft.prototype.has = mT;
    Ft.prototype.set = yT;
    ic.exports = Ft;
  });
  var ac = d((d2, oc) => {
    var _T = "__lodash_hash_undefined__";
    function IT(e) {
      return this.__data__.set(e, _T), this;
    }
    oc.exports = IT;
  });
  var uc = d((p2, sc) => {
    function TT(e) {
      return this.__data__.has(e);
    }
    sc.exports = TT;
  });
  var lc = d((g2, cc) => {
    var bT = Yn(),
      wT = ac(),
      AT = uc();
    function Qn(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new bT(); ++t < n; ) this.add(e[t]);
    }
    Qn.prototype.add = Qn.prototype.push = wT;
    Qn.prototype.has = AT;
    cc.exports = Qn;
  });
  var dc = d((h2, fc) => {
    function OT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    fc.exports = OT;
  });
  var gc = d((v2, pc) => {
    function ST(e, t) {
      return e.has(t);
    }
    pc.exports = ST;
  });
  var Si = d((E2, hc) => {
    var xT = lc(),
      RT = dc(),
      CT = gc(),
      LT = 1,
      PT = 2;
    function NT(e, t, n, r, i, o) {
      var a = n & LT,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var f = o.get(e),
        y = o.get(t);
      if (f && y) return f == t && y == e;
      var v = -1,
        g = !0,
        m = n & PT ? new xT() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < u; ) {
        var b = e[v],
          I = t[v];
        if (r) var O = a ? r(I, b, v, t, e, o) : r(b, I, v, e, t, o);
        if (O !== void 0) {
          if (O) continue;
          g = !1;
          break;
        }
        if (m) {
          if (
            !RT(t, function (T, R) {
              if (!CT(m, R) && (b === T || i(b, T, n, r, o))) return m.push(R);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(b === I || i(b, I, n, r, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    hc.exports = NT;
  });
  var Ec = d((m2, vc) => {
    var DT = Be(),
      MT = DT.Uint8Array;
    vc.exports = MT;
  });
  var yc = d((y2, mc) => {
    function FT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, i) {
          n[++t] = [i, r];
        }),
        n
      );
    }
    mc.exports = FT;
  });
  var Ic = d((_2, _c) => {
    function qT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    _c.exports = qT;
  });
  var Oc = d((I2, Ac) => {
    var Tc = Rt(),
      bc = Ec(),
      kT = Kn(),
      GT = Si(),
      XT = yc(),
      UT = Ic(),
      VT = 1,
      WT = 2,
      HT = "[object Boolean]",
      BT = "[object Date]",
      zT = "[object Error]",
      KT = "[object Map]",
      jT = "[object Number]",
      YT = "[object RegExp]",
      QT = "[object Set]",
      $T = "[object String]",
      ZT = "[object Symbol]",
      JT = "[object ArrayBuffer]",
      eb = "[object DataView]",
      wc = Tc ? Tc.prototype : void 0,
      xi = wc ? wc.valueOf : void 0;
    function tb(e, t, n, r, i, o, a) {
      switch (n) {
        case eb:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case JT:
          return !(e.byteLength != t.byteLength || !o(new bc(e), new bc(t)));
        case HT:
        case BT:
        case jT:
          return kT(+e, +t);
        case zT:
          return e.name == t.name && e.message == t.message;
        case YT:
        case $T:
          return e == t + "";
        case KT:
          var u = XT;
        case QT:
          var s = r & VT;
          if ((u || (u = UT), e.size != t.size && !s)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (r |= WT), a.set(e, t);
          var y = GT(u(e), u(t), r, i, o, a);
          return a.delete(e), y;
        case ZT:
          if (xi) return xi.call(e) == xi.call(t);
      }
      return !1;
    }
    Ac.exports = tb;
  });
  var $n = d((T2, Sc) => {
    function nb(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
      return e;
    }
    Sc.exports = nb;
  });
  var be = d((b2, xc) => {
    var rb = Array.isArray;
    xc.exports = rb;
  });
  var Ri = d((w2, Rc) => {
    var ib = $n(),
      ob = be();
    function ab(e, t, n) {
      var r = t(e);
      return ob(e) ? r : ib(r, n(e));
    }
    Rc.exports = ab;
  });
  var Lc = d((A2, Cc) => {
    function sb(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
        var a = e[n];
        t(a, n, e) && (o[i++] = a);
      }
      return o;
    }
    Cc.exports = sb;
  });
  var Ci = d((O2, Pc) => {
    function ub() {
      return [];
    }
    Pc.exports = ub;
  });
  var Li = d((S2, Dc) => {
    var cb = Lc(),
      lb = Ci(),
      fb = Object.prototype,
      db = fb.propertyIsEnumerable,
      Nc = Object.getOwnPropertySymbols,
      pb = Nc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                cb(Nc(e), function (t) {
                  return db.call(e, t);
                }));
          }
        : lb;
    Dc.exports = pb;
  });
  var Fc = d((x2, Mc) => {
    function gb(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    Mc.exports = gb;
  });
  var kc = d((R2, qc) => {
    var hb = ft(),
      vb = ot(),
      Eb = "[object Arguments]";
    function mb(e) {
      return vb(e) && hb(e) == Eb;
    }
    qc.exports = mb;
  });
  var fn = d((C2, Uc) => {
    var Gc = kc(),
      yb = ot(),
      Xc = Object.prototype,
      _b = Xc.hasOwnProperty,
      Ib = Xc.propertyIsEnumerable,
      Tb = Gc(
        (function () {
          return arguments;
        })()
      )
        ? Gc
        : function (e) {
            return yb(e) && _b.call(e, "callee") && !Ib.call(e, "callee");
          };
    Uc.exports = Tb;
  });
  var Wc = d((L2, Vc) => {
    function bb() {
      return !1;
    }
    Vc.exports = bb;
  });
  var Zn = d((dn, qt) => {
    var wb = Be(),
      Ab = Wc(),
      zc = typeof dn == "object" && dn && !dn.nodeType && dn,
      Hc = zc && typeof qt == "object" && qt && !qt.nodeType && qt,
      Ob = Hc && Hc.exports === zc,
      Bc = Ob ? wb.Buffer : void 0,
      Sb = Bc ? Bc.isBuffer : void 0,
      xb = Sb || Ab;
    qt.exports = xb;
  });
  var Jn = d((P2, Kc) => {
    var Rb = 9007199254740991,
      Cb = /^(?:0|[1-9]\d*)$/;
    function Lb(e, t) {
      var n = typeof e;
      return (
        (t = t ?? Rb),
        !!t &&
          (n == "number" || (n != "symbol" && Cb.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Kc.exports = Lb;
  });
  var er = d((N2, jc) => {
    var Pb = 9007199254740991;
    function Nb(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pb;
    }
    jc.exports = Nb;
  });
  var Qc = d((D2, Yc) => {
    var Db = ft(),
      Mb = er(),
      Fb = ot(),
      qb = "[object Arguments]",
      kb = "[object Array]",
      Gb = "[object Boolean]",
      Xb = "[object Date]",
      Ub = "[object Error]",
      Vb = "[object Function]",
      Wb = "[object Map]",
      Hb = "[object Number]",
      Bb = "[object Object]",
      zb = "[object RegExp]",
      Kb = "[object Set]",
      jb = "[object String]",
      Yb = "[object WeakMap]",
      Qb = "[object ArrayBuffer]",
      $b = "[object DataView]",
      Zb = "[object Float32Array]",
      Jb = "[object Float64Array]",
      ew = "[object Int8Array]",
      tw = "[object Int16Array]",
      nw = "[object Int32Array]",
      rw = "[object Uint8Array]",
      iw = "[object Uint8ClampedArray]",
      ow = "[object Uint16Array]",
      aw = "[object Uint32Array]",
      he = {};
    he[Zb] =
      he[Jb] =
      he[ew] =
      he[tw] =
      he[nw] =
      he[rw] =
      he[iw] =
      he[ow] =
      he[aw] =
        !0;
    he[qb] =
      he[kb] =
      he[Qb] =
      he[Gb] =
      he[$b] =
      he[Xb] =
      he[Ub] =
      he[Vb] =
      he[Wb] =
      he[Hb] =
      he[Bb] =
      he[zb] =
      he[Kb] =
      he[jb] =
      he[Yb] =
        !1;
    function sw(e) {
      return Fb(e) && Mb(e.length) && !!he[Db(e)];
    }
    Yc.exports = sw;
  });
  var Zc = d((M2, $c) => {
    function uw(e) {
      return function (t) {
        return e(t);
      };
    }
    $c.exports = uw;
  });
  var el = d((pn, kt) => {
    var cw = ri(),
      Jc = typeof pn == "object" && pn && !pn.nodeType && pn,
      gn = Jc && typeof kt == "object" && kt && !kt.nodeType && kt,
      lw = gn && gn.exports === Jc,
      Pi = lw && cw.process,
      fw = (function () {
        try {
          var e = gn && gn.require && gn.require("util").types;
          return e || (Pi && Pi.binding && Pi.binding("util"));
        } catch {}
      })();
    kt.exports = fw;
  });
  var tr = d((F2, rl) => {
    var dw = Qc(),
      pw = Zc(),
      tl = el(),
      nl = tl && tl.isTypedArray,
      gw = nl ? pw(nl) : dw;
    rl.exports = gw;
  });
  var Ni = d((q2, il) => {
    var hw = Fc(),
      vw = fn(),
      Ew = be(),
      mw = Zn(),
      yw = Jn(),
      _w = tr(),
      Iw = Object.prototype,
      Tw = Iw.hasOwnProperty;
    function bw(e, t) {
      var n = Ew(e),
        r = !n && vw(e),
        i = !n && !r && mw(e),
        o = !n && !r && !i && _w(e),
        a = n || r || i || o,
        u = a ? hw(e.length, String) : [],
        s = u.length;
      for (var f in e)
        (t || Tw.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              yw(f, s))
          ) &&
          u.push(f);
      return u;
    }
    il.exports = bw;
  });
  var nr = d((k2, ol) => {
    var ww = Object.prototype;
    function Aw(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || ww;
      return e === n;
    }
    ol.exports = Aw;
  });
  var sl = d((G2, al) => {
    var Ow = ii(),
      Sw = Ow(Object.keys, Object);
    al.exports = Sw;
  });
  var rr = d((X2, ul) => {
    var xw = nr(),
      Rw = sl(),
      Cw = Object.prototype,
      Lw = Cw.hasOwnProperty;
    function Pw(e) {
      if (!xw(e)) return Rw(e);
      var t = [];
      for (var n in Object(e)) Lw.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    ul.exports = Pw;
  });
  var yt = d((U2, cl) => {
    var Nw = bi(),
      Dw = er();
    function Mw(e) {
      return e != null && Dw(e.length) && !Nw(e);
    }
    cl.exports = Mw;
  });
  var hn = d((V2, ll) => {
    var Fw = Ni(),
      qw = rr(),
      kw = yt();
    function Gw(e) {
      return kw(e) ? Fw(e) : qw(e);
    }
    ll.exports = Gw;
  });
  var dl = d((W2, fl) => {
    var Xw = Ri(),
      Uw = Li(),
      Vw = hn();
    function Ww(e) {
      return Xw(e, Vw, Uw);
    }
    fl.exports = Ww;
  });
  var hl = d((H2, gl) => {
    var pl = dl(),
      Hw = 1,
      Bw = Object.prototype,
      zw = Bw.hasOwnProperty;
    function Kw(e, t, n, r, i, o) {
      var a = n & Hw,
        u = pl(e),
        s = u.length,
        f = pl(t),
        y = f.length;
      if (s != y && !a) return !1;
      for (var v = s; v--; ) {
        var g = u[v];
        if (!(a ? g in t : zw.call(t, g))) return !1;
      }
      var m = o.get(e),
        b = o.get(t);
      if (m && b) return m == t && b == e;
      var I = !0;
      o.set(e, t), o.set(t, e);
      for (var O = a; ++v < s; ) {
        g = u[v];
        var T = e[g],
          R = t[g];
        if (r) var C = a ? r(R, T, g, t, e, o) : r(T, R, g, e, t, o);
        if (!(C === void 0 ? T === R || i(T, R, n, r, o) : C)) {
          I = !1;
          break;
        }
        O || (O = g == "constructor");
      }
      if (I && !O) {
        var N = e.constructor,
          M = t.constructor;
        N != M &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof N == "function" &&
            N instanceof N &&
            typeof M == "function" &&
            M instanceof M
          ) &&
          (I = !1);
      }
      return o.delete(e), o.delete(t), I;
    }
    gl.exports = Kw;
  });
  var El = d((B2, vl) => {
    var jw = dt(),
      Yw = Be(),
      Qw = jw(Yw, "DataView");
    vl.exports = Qw;
  });
  var yl = d((z2, ml) => {
    var $w = dt(),
      Zw = Be(),
      Jw = $w(Zw, "Promise");
    ml.exports = Jw;
  });
  var Il = d((K2, _l) => {
    var eA = dt(),
      tA = Be(),
      nA = eA(tA, "Set");
    _l.exports = nA;
  });
  var Di = d((j2, Tl) => {
    var rA = dt(),
      iA = Be(),
      oA = rA(iA, "WeakMap");
    Tl.exports = oA;
  });
  var ir = d((Y2, Rl) => {
    var Mi = El(),
      Fi = jn(),
      qi = yl(),
      ki = Il(),
      Gi = Di(),
      xl = ft(),
      Gt = Ai(),
      bl = "[object Map]",
      aA = "[object Object]",
      wl = "[object Promise]",
      Al = "[object Set]",
      Ol = "[object WeakMap]",
      Sl = "[object DataView]",
      sA = Gt(Mi),
      uA = Gt(Fi),
      cA = Gt(qi),
      lA = Gt(ki),
      fA = Gt(Gi),
      _t = xl;
    ((Mi && _t(new Mi(new ArrayBuffer(1))) != Sl) ||
      (Fi && _t(new Fi()) != bl) ||
      (qi && _t(qi.resolve()) != wl) ||
      (ki && _t(new ki()) != Al) ||
      (Gi && _t(new Gi()) != Ol)) &&
      (_t = function (e) {
        var t = xl(e),
          n = t == aA ? e.constructor : void 0,
          r = n ? Gt(n) : "";
        if (r)
          switch (r) {
            case sA:
              return Sl;
            case uA:
              return bl;
            case cA:
              return wl;
            case lA:
              return Al;
            case fA:
              return Ol;
          }
        return t;
      });
    Rl.exports = _t;
  });
  var ql = d((Q2, Fl) => {
    var Xi = Oi(),
      dA = Si(),
      pA = Oc(),
      gA = hl(),
      Cl = ir(),
      Ll = be(),
      Pl = Zn(),
      hA = tr(),
      vA = 1,
      Nl = "[object Arguments]",
      Dl = "[object Array]",
      or = "[object Object]",
      EA = Object.prototype,
      Ml = EA.hasOwnProperty;
    function mA(e, t, n, r, i, o) {
      var a = Ll(e),
        u = Ll(t),
        s = a ? Dl : Cl(e),
        f = u ? Dl : Cl(t);
      (s = s == Nl ? or : s), (f = f == Nl ? or : f);
      var y = s == or,
        v = f == or,
        g = s == f;
      if (g && Pl(e)) {
        if (!Pl(t)) return !1;
        (a = !0), (y = !1);
      }
      if (g && !y)
        return (
          o || (o = new Xi()),
          a || hA(e) ? dA(e, t, n, r, i, o) : pA(e, t, s, n, r, i, o)
        );
      if (!(n & vA)) {
        var m = y && Ml.call(e, "__wrapped__"),
          b = v && Ml.call(t, "__wrapped__");
        if (m || b) {
          var I = m ? e.value() : e,
            O = b ? t.value() : t;
          return o || (o = new Xi()), i(I, O, n, r, o);
        }
      }
      return g ? (o || (o = new Xi()), gA(e, t, n, r, i, o)) : !1;
    }
    Fl.exports = mA;
  });
  var Ui = d(($2, Xl) => {
    var yA = ql(),
      kl = ot();
    function Gl(e, t, n, r, i) {
      return e === t
        ? !0
        : e == null || t == null || (!kl(e) && !kl(t))
        ? e !== e && t !== t
        : yA(e, t, n, r, Gl, i);
    }
    Xl.exports = Gl;
  });
  var Vl = d((Z2, Ul) => {
    var _A = Oi(),
      IA = Ui(),
      TA = 1,
      bA = 2;
    function wA(e, t, n, r) {
      var i = n.length,
        o = i,
        a = !r;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var u = n[i];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        u = n[i];
        var s = u[0],
          f = e[s],
          y = u[1];
        if (a && u[2]) {
          if (f === void 0 && !(s in e)) return !1;
        } else {
          var v = new _A();
          if (r) var g = r(f, y, s, e, t, v);
          if (!(g === void 0 ? IA(y, f, TA | bA, r, v) : g)) return !1;
        }
      }
      return !0;
    }
    Ul.exports = wA;
  });
  var Vi = d((J2, Wl) => {
    var AA = et();
    function OA(e) {
      return e === e && !AA(e);
    }
    Wl.exports = OA;
  });
  var Bl = d((eq, Hl) => {
    var SA = Vi(),
      xA = hn();
    function RA(e) {
      for (var t = xA(e), n = t.length; n--; ) {
        var r = t[n],
          i = e[r];
        t[n] = [r, i, SA(i)];
      }
      return t;
    }
    Hl.exports = RA;
  });
  var Wi = d((tq, zl) => {
    function CA(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    zl.exports = CA;
  });
  var jl = d((nq, Kl) => {
    var LA = Vl(),
      PA = Bl(),
      NA = Wi();
    function DA(e) {
      var t = PA(e);
      return t.length == 1 && t[0][2]
        ? NA(t[0][0], t[0][1])
        : function (n) {
            return n === e || LA(n, e, t);
          };
    }
    Kl.exports = DA;
  });
  var vn = d((rq, Yl) => {
    var MA = ft(),
      FA = ot(),
      qA = "[object Symbol]";
    function kA(e) {
      return typeof e == "symbol" || (FA(e) && MA(e) == qA);
    }
    Yl.exports = kA;
  });
  var ar = d((iq, Ql) => {
    var GA = be(),
      XA = vn(),
      UA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      VA = /^\w*$/;
    function WA(e, t) {
      if (GA(e)) return !1;
      var n = typeof e;
      return n == "number" ||
        n == "symbol" ||
        n == "boolean" ||
        e == null ||
        XA(e)
        ? !0
        : VA.test(e) || !UA.test(e) || (t != null && e in Object(t));
    }
    Ql.exports = WA;
  });
  var Jl = d((oq, Zl) => {
    var $l = Yn(),
      HA = "Expected a function";
    function Hi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(HA);
      var n = function () {
        var r = arguments,
          i = t ? t.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (Hi.Cache || $l)()), n;
    }
    Hi.Cache = $l;
    Zl.exports = Hi;
  });
  var tf = d((aq, ef) => {
    var BA = Jl(),
      zA = 500;
    function KA(e) {
      var t = BA(e, function (r) {
          return n.size === zA && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    ef.exports = KA;
  });
  var rf = d((sq, nf) => {
    var jA = tf(),
      YA =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      QA = /\\(\\)?/g,
      $A = jA(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(YA, function (n, r, i, o) {
            t.push(i ? o.replace(QA, "$1") : r || n);
          }),
          t
        );
      });
    nf.exports = $A;
  });
  var Bi = d((uq, of) => {
    function ZA(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
        i[n] = t(e[n], n, e);
      return i;
    }
    of.exports = ZA;
  });
  var ff = d((cq, lf) => {
    var af = Rt(),
      JA = Bi(),
      e0 = be(),
      t0 = vn(),
      n0 = 1 / 0,
      sf = af ? af.prototype : void 0,
      uf = sf ? sf.toString : void 0;
    function cf(e) {
      if (typeof e == "string") return e;
      if (e0(e)) return JA(e, cf) + "";
      if (t0(e)) return uf ? uf.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -n0 ? "-0" : t;
    }
    lf.exports = cf;
  });
  var pf = d((lq, df) => {
    var r0 = ff();
    function i0(e) {
      return e == null ? "" : r0(e);
    }
    df.exports = i0;
  });
  var En = d((fq, gf) => {
    var o0 = be(),
      a0 = ar(),
      s0 = rf(),
      u0 = pf();
    function c0(e, t) {
      return o0(e) ? e : a0(e, t) ? [e] : s0(u0(e));
    }
    gf.exports = c0;
  });
  var Xt = d((dq, hf) => {
    var l0 = vn(),
      f0 = 1 / 0;
    function d0(e) {
      if (typeof e == "string" || l0(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -f0 ? "-0" : t;
    }
    hf.exports = d0;
  });
  var sr = d((pq, vf) => {
    var p0 = En(),
      g0 = Xt();
    function h0(e, t) {
      t = p0(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[g0(t[n++])];
      return n && n == r ? e : void 0;
    }
    vf.exports = h0;
  });
  var ur = d((gq, Ef) => {
    var v0 = sr();
    function E0(e, t, n) {
      var r = e == null ? void 0 : v0(e, t);
      return r === void 0 ? n : r;
    }
    Ef.exports = E0;
  });
  var yf = d((hq, mf) => {
    function m0(e, t) {
      return e != null && t in Object(e);
    }
    mf.exports = m0;
  });
  var If = d((vq, _f) => {
    var y0 = En(),
      _0 = fn(),
      I0 = be(),
      T0 = Jn(),
      b0 = er(),
      w0 = Xt();
    function A0(e, t, n) {
      t = y0(t, e);
      for (var r = -1, i = t.length, o = !1; ++r < i; ) {
        var a = w0(t[r]);
        if (!(o = e != null && n(e, a))) break;
        e = e[a];
      }
      return o || ++r != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && b0(i) && T0(a, i) && (I0(e) || _0(e)));
    }
    _f.exports = A0;
  });
  var bf = d((Eq, Tf) => {
    var O0 = yf(),
      S0 = If();
    function x0(e, t) {
      return e != null && S0(e, t, O0);
    }
    Tf.exports = x0;
  });
  var Af = d((mq, wf) => {
    var R0 = Ui(),
      C0 = ur(),
      L0 = bf(),
      P0 = ar(),
      N0 = Vi(),
      D0 = Wi(),
      M0 = Xt(),
      F0 = 1,
      q0 = 2;
    function k0(e, t) {
      return P0(e) && N0(t)
        ? D0(M0(e), t)
        : function (n) {
            var r = C0(n, e);
            return r === void 0 && r === t ? L0(n, e) : R0(t, r, F0 | q0);
          };
    }
    wf.exports = k0;
  });
  var cr = d((yq, Of) => {
    function G0(e) {
      return e;
    }
    Of.exports = G0;
  });
  var zi = d((_q, Sf) => {
    function X0(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Sf.exports = X0;
  });
  var Rf = d((Iq, xf) => {
    var U0 = sr();
    function V0(e) {
      return function (t) {
        return U0(t, e);
      };
    }
    xf.exports = V0;
  });
  var Lf = d((Tq, Cf) => {
    var W0 = zi(),
      H0 = Rf(),
      B0 = ar(),
      z0 = Xt();
    function K0(e) {
      return B0(e) ? W0(z0(e)) : H0(e);
    }
    Cf.exports = K0;
  });
  var pt = d((bq, Pf) => {
    var j0 = jl(),
      Y0 = Af(),
      Q0 = cr(),
      $0 = be(),
      Z0 = Lf();
    function J0(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? Q0
        : typeof e == "object"
        ? $0(e)
          ? Y0(e[0], e[1])
          : j0(e)
        : Z0(e);
    }
    Pf.exports = J0;
  });
  var Ki = d((wq, Nf) => {
    var eO = pt(),
      tO = yt(),
      nO = hn();
    function rO(e) {
      return function (t, n, r) {
        var i = Object(t);
        if (!tO(t)) {
          var o = eO(n, 3);
          (t = nO(t)),
            (n = function (u) {
              return o(i[u], u, i);
            });
        }
        var a = e(t, n, r);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Nf.exports = rO;
  });
  var ji = d((Aq, Df) => {
    function iO(e, t, n, r) {
      for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Df.exports = iO;
  });
  var Ff = d((Oq, Mf) => {
    var oO = /\s/;
    function aO(e) {
      for (var t = e.length; t-- && oO.test(e.charAt(t)); );
      return t;
    }
    Mf.exports = aO;
  });
  var kf = d((Sq, qf) => {
    var sO = Ff(),
      uO = /^\s+/;
    function cO(e) {
      return e && e.slice(0, sO(e) + 1).replace(uO, "");
    }
    qf.exports = cO;
  });
  var lr = d((xq, Uf) => {
    var lO = kf(),
      Gf = et(),
      fO = vn(),
      Xf = 0 / 0,
      dO = /^[-+]0x[0-9a-f]+$/i,
      pO = /^0b[01]+$/i,
      gO = /^0o[0-7]+$/i,
      hO = parseInt;
    function vO(e) {
      if (typeof e == "number") return e;
      if (fO(e)) return Xf;
      if (Gf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Gf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = lO(e);
      var n = pO.test(e);
      return n || gO.test(e) ? hO(e.slice(2), n ? 2 : 8) : dO.test(e) ? Xf : +e;
    }
    Uf.exports = vO;
  });
  var Hf = d((Rq, Wf) => {
    var EO = lr(),
      Vf = 1 / 0,
      mO = 17976931348623157e292;
    function yO(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = EO(e)), e === Vf || e === -Vf)) {
        var t = e < 0 ? -1 : 1;
        return t * mO;
      }
      return e === e ? e : 0;
    }
    Wf.exports = yO;
  });
  var Yi = d((Cq, Bf) => {
    var _O = Hf();
    function IO(e) {
      var t = _O(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    Bf.exports = IO;
  });
  var Kf = d((Lq, zf) => {
    var TO = ji(),
      bO = pt(),
      wO = Yi(),
      AO = Math.max;
    function OO(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = n == null ? 0 : wO(n);
      return i < 0 && (i = AO(r + i, 0)), TO(e, bO(t, 3), i);
    }
    zf.exports = OO;
  });
  var Qi = d((Pq, jf) => {
    var SO = Ki(),
      xO = Kf(),
      RO = SO(xO);
    jf.exports = RO;
  });
  var $f = {};
  Ne($f, {
    ELEMENT_MATCHES: () => CO,
    FLEX_PREFIXED: () => $i,
    IS_BROWSER_ENV: () => Ke,
    TRANSFORM_PREFIXED: () => gt,
    TRANSFORM_STYLE_PREFIXED: () => dr,
    withBrowser: () => fr,
  });
  var Qf,
    Ke,
    fr,
    CO,
    $i,
    gt,
    Yf,
    dr,
    pr = ve(() => {
      "use strict";
      (Qf = fe(Qi())),
        (Ke = typeof window < "u"),
        (fr = (e, t) => (Ke ? e() : t)),
        (CO = fr(() =>
          (0, Qf.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        ($i = fr(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            n = "";
          try {
            let { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return n;
          } catch {
            return n;
          }
        }, "flex")),
        (gt = fr(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              n = "Transform",
              { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i] + n;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Yf = gt.split("transform")[0]),
        (dr = Yf ? Yf + "TransformStyle" : "transformStyle");
    });
  var Zi = d((Nq, nd) => {
    var LO = 4,
      PO = 0.001,
      NO = 1e-7,
      DO = 10,
      mn = 11,
      gr = 1 / (mn - 1),
      MO = typeof Float32Array == "function";
    function Zf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Jf(e, t) {
      return 3 * t - 6 * e;
    }
    function ed(e) {
      return 3 * e;
    }
    function hr(e, t, n) {
      return ((Zf(t, n) * e + Jf(t, n)) * e + ed(t)) * e;
    }
    function td(e, t, n) {
      return 3 * Zf(t, n) * e * e + 2 * Jf(t, n) * e + ed(t);
    }
    function FO(e, t, n, r, i) {
      var o,
        a,
        u = 0;
      do
        (a = t + (n - t) / 2), (o = hr(a, r, i) - e), o > 0 ? (n = a) : (t = a);
      while (Math.abs(o) > NO && ++u < DO);
      return a;
    }
    function qO(e, t, n, r) {
      for (var i = 0; i < LO; ++i) {
        var o = td(t, n, r);
        if (o === 0) return t;
        var a = hr(t, n, r) - e;
        t -= a / o;
      }
      return t;
    }
    nd.exports = function (t, n, r, i) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = MO ? new Float32Array(mn) : new Array(mn);
      if (t !== n || r !== i)
        for (var a = 0; a < mn; ++a) o[a] = hr(a * gr, t, r);
      function u(s) {
        for (var f = 0, y = 1, v = mn - 1; y !== v && o[y] <= s; ++y) f += gr;
        --y;
        var g = (s - o[y]) / (o[y + 1] - o[y]),
          m = f + g * gr,
          b = td(m, t, r);
        return b >= PO ? qO(s, m, t, r) : b === 0 ? m : FO(s, f, f + gr, t, r);
      }
      return function (f) {
        return t === n && r === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : hr(u(f), n, i);
      };
    };
  });
  var _n = {};
  Ne(_n, {
    bounce: () => yS,
    bouncePast: () => _S,
    ease: () => kO,
    easeIn: () => GO,
    easeInOut: () => UO,
    easeOut: () => XO,
    inBack: () => lS,
    inCirc: () => aS,
    inCubic: () => BO,
    inElastic: () => pS,
    inExpo: () => rS,
    inOutBack: () => dS,
    inOutCirc: () => uS,
    inOutCubic: () => KO,
    inOutElastic: () => hS,
    inOutExpo: () => oS,
    inOutQuad: () => HO,
    inOutQuart: () => QO,
    inOutQuint: () => JO,
    inOutSine: () => nS,
    inQuad: () => VO,
    inQuart: () => jO,
    inQuint: () => $O,
    inSine: () => eS,
    outBack: () => fS,
    outBounce: () => cS,
    outCirc: () => sS,
    outCubic: () => zO,
    outElastic: () => gS,
    outExpo: () => iS,
    outQuad: () => WO,
    outQuart: () => YO,
    outQuint: () => ZO,
    outSine: () => tS,
    swingFrom: () => ES,
    swingFromTo: () => vS,
    swingTo: () => mS,
  });
  function VO(e) {
    return Math.pow(e, 2);
  }
  function WO(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function HO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function BO(e) {
    return Math.pow(e, 3);
  }
  function zO(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function KO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function jO(e) {
    return Math.pow(e, 4);
  }
  function YO(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function QO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function $O(e) {
    return Math.pow(e, 5);
  }
  function ZO(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function JO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function eS(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function tS(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function nS(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function rS(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function iS(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function oS(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function aS(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function sS(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function uS(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function cS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function lS(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function fS(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function dS(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function pS(e) {
    let t = at,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = 0.3),
        r < 1
          ? ((r = 1), (t = n / 4))
          : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        -(
          r *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / n)
        ));
  }
  function gS(e) {
    let t = at,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = 0.3),
        r < 1
          ? ((r = 1), (t = n / 4))
          : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) + 1);
  }
  function hS(e) {
    let t = at,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (n || (n = 0.3 * 1.5),
        r < 1
          ? ((r = 1), (t = n / 4))
          : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        e < 1
          ? -0.5 *
            (r *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / n))
          : r *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / n) *
              0.5 +
            1);
  }
  function vS(e) {
    let t = at;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function ES(e) {
    let t = at;
    return e * e * ((t + 1) * e - t);
  }
  function mS(e) {
    let t = at;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function yS(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function _S(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var yn,
    at,
    kO,
    GO,
    XO,
    UO,
    Ji = ve(() => {
      "use strict";
      (yn = fe(Zi())),
        (at = 1.70158),
        (kO = (0, yn.default)(0.25, 0.1, 0.25, 1)),
        (GO = (0, yn.default)(0.42, 0, 1, 1)),
        (XO = (0, yn.default)(0, 0, 0.58, 1)),
        (UO = (0, yn.default)(0.42, 0, 0.58, 1));
    });
  var id = {};
  Ne(id, {
    applyEasing: () => TS,
    createBezierEasing: () => IS,
    optimizeFloat: () => In,
  });
  function In(e, t = 5, n = 10) {
    let r = Math.pow(n, t),
      i = Number(Math.round(e * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function IS(e) {
    return (0, rd.default)(...e);
  }
  function TS(e, t, n) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : In(n ? (t > 0 ? n(t) : t) : t > 0 && e && _n[e] ? _n[e](t) : t);
  }
  var rd,
    eo = ve(() => {
      "use strict";
      Ji();
      rd = fe(Zi());
    });
  var sd = {};
  Ne(sd, {
    createElementState: () => ad,
    ixElements: () => FS,
    mergeActionState: () => to,
  });
  function ad(e, t, n, r, i) {
    let o =
      n === bS ? (0, Ut.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Ut.mergeIn)(e, [r], { id: r, ref: t, refId: o, refType: n });
  }
  function to(e, t, n, r, i) {
    let o = kS(i);
    return (0, Ut.mergeIn)(e, [t, MS, n], r, o);
  }
  function kS(e) {
    let { config: t } = e;
    return qS.reduce((n, r) => {
      let i = r[0],
        o = r[1],
        a = t[i],
        u = t[o];
      return a != null && u != null && (n[o] = u), n;
    }, {});
  }
  var Ut,
    Mq,
    bS,
    Fq,
    wS,
    AS,
    OS,
    SS,
    xS,
    RS,
    CS,
    LS,
    PS,
    NS,
    DS,
    od,
    MS,
    FS,
    qS,
    ud = ve(() => {
      "use strict";
      Ut = fe(Pt());
      Me();
      ({
        HTML_ELEMENT: Mq,
        PLAIN_OBJECT: bS,
        ABSTRACT_NODE: Fq,
        CONFIG_X_VALUE: wS,
        CONFIG_Y_VALUE: AS,
        CONFIG_Z_VALUE: OS,
        CONFIG_VALUE: SS,
        CONFIG_X_UNIT: xS,
        CONFIG_Y_UNIT: RS,
        CONFIG_Z_UNIT: CS,
        CONFIG_UNIT: LS,
      } = Ae),
        ({
          IX2_SESSION_STOPPED: PS,
          IX2_INSTANCE_ADDED: NS,
          IX2_ELEMENT_STATE_CHANGED: DS,
        } = Te),
        (od = {}),
        (MS = "refState"),
        (FS = (e = od, t = {}) => {
          switch (t.type) {
            case PS:
              return od;
            case NS: {
              let {
                  elementId: n,
                  element: r,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: u } = o,
                s = e;
              return (
                (0, Ut.getIn)(s, [n, r]) !== r && (s = ad(s, r, a, n, o)),
                to(s, n, u, i, o)
              );
            }
            case DS: {
              let {
                elementId: n,
                actionTypeId: r,
                current: i,
                actionItem: o,
              } = t.payload;
              return to(e, n, r, i, o);
            }
            default:
              return e;
          }
        });
      qS = [
        [wS, xS],
        [AS, RS],
        [OS, CS],
        [SS, LS],
      ];
    });
  var cd = d((no) => {
    "use strict";
    Object.defineProperty(no, "__esModule", { value: !0 });
    function GS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    GS(no, {
      clearPlugin: function () {
        return zS;
      },
      createPluginInstance: function () {
        return HS;
      },
      getPluginConfig: function () {
        return XS;
      },
      getPluginDestination: function () {
        return WS;
      },
      getPluginDuration: function () {
        return US;
      },
      getPluginOrigin: function () {
        return VS;
      },
      renderPlugin: function () {
        return BS;
      },
    });
    var XS = (e) => e.value,
      US = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      VS = (e) => e || { value: 0 },
      WS = (e) => ({ value: e.value }),
      HS = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      BS = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      zS = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var fd = d((ro) => {
    "use strict";
    Object.defineProperty(ro, "__esModule", { value: !0 });
    function KS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    KS(ro, {
      clearPlugin: function () {
        return rx;
      },
      createPluginInstance: function () {
        return tx;
      },
      getPluginConfig: function () {
        return $S;
      },
      getPluginDestination: function () {
        return ex;
      },
      getPluginDuration: function () {
        return ZS;
      },
      getPluginOrigin: function () {
        return JS;
      },
      renderPlugin: function () {
        return nx;
      },
    });
    var jS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      YS = () => window.Webflow.require("spline"),
      QS = (e, t) => e.filter((n) => !t.includes(n)),
      $S = (e, t) => e.value[t],
      ZS = () => null,
      ld = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      JS = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let o = Object.keys(e),
            a = QS(r, o);
          return a.length ? a.reduce((s, f) => ((s[f] = ld[f]), s), e) : e;
        }
        return r.reduce((o, a) => ((o[a] = ld[a]), o), {});
      },
      ex = (e) => e.value,
      tx = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? jS(n) : null;
      },
      nx = (e, t, n) => {
        let r = YS(),
          i = r.getInstance(e),
          o = n.config.target.objectId,
          a = (u) => {
            if (!u)
              throw new Error("Invalid spline app passed to renderSpline");
            let s = o && u.findObjectById(o);
            if (!s) return;
            let { PLUGIN_SPLINE: f } = t;
            f.positionX != null && (s.position.x = f.positionX),
              f.positionY != null && (s.position.y = f.positionY),
              f.positionZ != null && (s.position.z = f.positionZ),
              f.rotationX != null && (s.rotation.x = f.rotationX),
              f.rotationY != null && (s.rotation.y = f.rotationY),
              f.rotationZ != null && (s.rotation.z = f.rotationZ),
              f.scaleX != null && (s.scale.x = f.scaleX),
              f.scaleY != null && (s.scale.y = f.scaleY),
              f.scaleZ != null && (s.scale.z = f.scaleZ);
          };
        i ? a(i.spline) : r.setLoadHandler(e, a);
      },
      rx = () => null;
  });
  var dd = d((ao) => {
    "use strict";
    Object.defineProperty(ao, "__esModule", { value: !0 });
    function ix(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    ix(ao, {
      clearPlugin: function () {
        return px;
      },
      createPluginInstance: function () {
        return fx;
      },
      getPluginConfig: function () {
        return sx;
      },
      getPluginDestination: function () {
        return lx;
      },
      getPluginDuration: function () {
        return ux;
      },
      getPluginOrigin: function () {
        return cx;
      },
      renderPlugin: function () {
        return dx;
      },
    });
    var io = "--wf-rive-fit",
      oo = "--wf-rive-alignment",
      ox = (e) => document.querySelector(`[data-w-id="${e}"]`),
      ax = () => window.Webflow.require("rive"),
      sx = (e, t) => e.value.inputs[t],
      ux = () => null,
      cx = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let i in r) r[i] == null && (n[i] = 0);
        return n;
      },
      lx = (e) => e.value.inputs ?? {},
      fx = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? ox(r) : null;
      },
      dx = (e, { PLUGIN_RIVE: t }, n) => {
        let r = ax(),
          i = r.getInstance(e),
          o = r.rive.StateMachineInputType,
          { name: a, inputs: u = {} } = n.config.value || {};
        function s(f) {
          if (f.loaded) y();
          else {
            let v = () => {
              y(), f?.off("load", v);
            };
            f?.on("load", v);
          }
          function y() {
            let v = f.stateMachineInputs(a);
            if (v != null) {
              if ((f.isPlaying || f.play(a, !1), io in u || oo in u)) {
                let g = f.layout,
                  m = u[io] ?? g.fit,
                  b = u[oo] ?? g.alignment;
                (m !== g.fit || b !== g.alignment) &&
                  (f.layout = g.copyWith({ fit: m, alignment: b }));
              }
              for (let g in u) {
                if (g === io || g === oo) continue;
                let m = v.find((b) => b.name === g);
                if (m != null)
                  switch (m.type) {
                    case o.Boolean: {
                      if (u[g] != null) {
                        let b = !!u[g];
                        m.value = b;
                      }
                      break;
                    }
                    case o.Number: {
                      let b = t[g];
                      b != null && (m.value = b);
                      break;
                    }
                    case o.Trigger: {
                      u[g] && m.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? s(i.rive) : r.setLoadHandler(e, s);
      },
      px = (e, t) => null;
  });
  var uo = d((so) => {
    "use strict";
    Object.defineProperty(so, "__esModule", { value: !0 });
    Object.defineProperty(so, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return gx;
      },
    });
    var pd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function gx(e) {
      let t,
        n,
        r,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof pd[o] == "string" ? pd[o].toLowerCase() : null) || o;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4
          ? ((t = parseInt(s[0] + s[0], 16)),
            (n = parseInt(s[1] + s[1], 16)),
            (r = parseInt(s[2] + s[2], 16)),
            s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255))
          : (s.length === 6 || s.length === 8) &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (n = parseInt(s.substring(2, 4), 16)),
            (r = parseInt(s.substring(4, 6), 16)),
            s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (n = parseInt(s[1], 10)),
          (r = parseInt(s[2], 10)),
          (i = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (n = parseInt(s[1], 10)),
          (r = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          y = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100;
        i = parseFloat(s[3]);
        let g = (1 - Math.abs(2 * v - 1)) * y,
          m = g * (1 - Math.abs(((f / 60) % 2) - 1)),
          b = v - g / 2,
          I,
          O,
          T;
        f >= 0 && f < 60
          ? ((I = g), (O = m), (T = 0))
          : f >= 60 && f < 120
          ? ((I = m), (O = g), (T = 0))
          : f >= 120 && f < 180
          ? ((I = 0), (O = g), (T = m))
          : f >= 180 && f < 240
          ? ((I = 0), (O = m), (T = g))
          : f >= 240 && f < 300
          ? ((I = m), (O = 0), (T = g))
          : ((I = g), (O = 0), (T = m)),
          (t = Math.round((I + b) * 255)),
          (n = Math.round((O + b) * 255)),
          (r = Math.round((T + b) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          y = parseFloat(s[1].replace("%", "")) / 100,
          v = parseFloat(s[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * v - 1)) * y,
          m = g * (1 - Math.abs(((f / 60) % 2) - 1)),
          b = v - g / 2,
          I,
          O,
          T;
        f >= 0 && f < 60
          ? ((I = g), (O = m), (T = 0))
          : f >= 60 && f < 120
          ? ((I = m), (O = g), (T = 0))
          : f >= 120 && f < 180
          ? ((I = 0), (O = g), (T = m))
          : f >= 180 && f < 240
          ? ((I = 0), (O = m), (T = g))
          : f >= 240 && f < 300
          ? ((I = m), (O = 0), (T = g))
          : ((I = g), (O = 0), (T = m)),
          (t = Math.round((I + b) * 255)),
          (n = Math.round((O + b) * 255)),
          (r = Math.round((T + b) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: n, blue: r, alpha: i };
    }
  });
  var gd = d((co) => {
    "use strict";
    Object.defineProperty(co, "__esModule", { value: !0 });
    function hx(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    hx(co, {
      clearPlugin: function () {
        return bx;
      },
      createPluginInstance: function () {
        return Ix;
      },
      getPluginConfig: function () {
        return Ex;
      },
      getPluginDestination: function () {
        return _x;
      },
      getPluginDuration: function () {
        return mx;
      },
      getPluginOrigin: function () {
        return yx;
      },
      renderPlugin: function () {
        return Tx;
      },
    });
    var vx = uo(),
      Ex = (e, t) => e.value[t],
      mx = () => null,
      yx = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(i, 10) };
        if (n.red != null && n.green != null && n.blue != null)
          return (0, vx.normalizeColor)(i);
      },
      _x = (e) => e.value,
      Ix = () => null,
      Tx = (e, t, n) => {
        let r = n.config.target.objectId,
          i = n.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: u, green: s, blue: f, alpha: y } = o,
          v;
        a != null && (v = a + i),
          u != null &&
            f != null &&
            s != null &&
            y != null &&
            (v = `rgba(${u}, ${s}, ${f}, ${y})`),
          v != null && document.documentElement.style.setProperty(r, v);
      },
      bx = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var vd = d((lo) => {
    "use strict";
    Object.defineProperty(lo, "__esModule", { value: !0 });
    Object.defineProperty(lo, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return xx;
      },
    });
    var vr = (Me(), Qe(ys)),
      wx = Er(cd()),
      Ax = Er(fd()),
      Ox = Er(dd()),
      Sx = Er(gd());
    function hd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (hd = function (r) {
        return r ? n : t;
      })(e);
    }
    function Er(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = hd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, o, a)
            : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var xx = new Map([
      [vr.ActionTypeConsts.PLUGIN_LOTTIE, { ...wx }],
      [vr.ActionTypeConsts.PLUGIN_SPLINE, { ...Ax }],
      [vr.ActionTypeConsts.PLUGIN_RIVE, { ...Ox }],
      [vr.ActionTypeConsts.PLUGIN_VARIABLE, { ...Sx }],
    ]);
  });
  var Ed = {};
  Ne(Ed, {
    clearPlugin: () => Eo,
    createPluginInstance: () => Cx,
    getPluginConfig: () => po,
    getPluginDestination: () => ho,
    getPluginDuration: () => Rx,
    getPluginOrigin: () => go,
    isPluginType: () => It,
    renderPlugin: () => vo,
  });
  function It(e) {
    return fo.pluginMethodMap.has(e);
  }
  var fo,
    Tt,
    po,
    go,
    Rx,
    ho,
    Cx,
    vo,
    Eo,
    mo = ve(() => {
      "use strict";
      pr();
      fo = fe(vd());
      (Tt = (e) => (t) => {
        if (!Ke) return () => null;
        let n = fo.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      }),
        (po = Tt("getPluginConfig")),
        (go = Tt("getPluginOrigin")),
        (Rx = Tt("getPluginDuration")),
        (ho = Tt("getPluginDestination")),
        (Cx = Tt("createPluginInstance")),
        (vo = Tt("renderPlugin")),
        (Eo = Tt("clearPlugin"));
    });
  var yd = d((Hq, md) => {
    function Lx(e, t) {
      return e == null || e !== e ? t : e;
    }
    md.exports = Lx;
  });
  var Id = d((Bq, _d) => {
    function Px(e, t, n, r) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
      return n;
    }
    _d.exports = Px;
  });
  var bd = d((zq, Td) => {
    function Nx(e) {
      return function (t, n, r) {
        for (var i = -1, o = Object(t), a = r(t), u = a.length; u--; ) {
          var s = a[e ? u : ++i];
          if (n(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    Td.exports = Nx;
  });
  var Ad = d((Kq, wd) => {
    var Dx = bd(),
      Mx = Dx();
    wd.exports = Mx;
  });
  var yo = d((jq, Od) => {
    var Fx = Ad(),
      qx = hn();
    function kx(e, t) {
      return e && Fx(e, t, qx);
    }
    Od.exports = kx;
  });
  var xd = d((Yq, Sd) => {
    var Gx = yt();
    function Xx(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!Gx(n)) return e(n, r);
        for (
          var i = n.length, o = t ? i : -1, a = Object(n);
          (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;

        );
        return n;
      };
    }
    Sd.exports = Xx;
  });
  var _o = d((Qq, Rd) => {
    var Ux = yo(),
      Vx = xd(),
      Wx = Vx(Ux);
    Rd.exports = Wx;
  });
  var Ld = d(($q, Cd) => {
    function Hx(e, t, n, r, i) {
      return (
        i(e, function (o, a, u) {
          n = r ? ((r = !1), o) : t(n, o, a, u);
        }),
        n
      );
    }
    Cd.exports = Hx;
  });
  var Nd = d((Zq, Pd) => {
    var Bx = Id(),
      zx = _o(),
      Kx = pt(),
      jx = Ld(),
      Yx = be();
    function Qx(e, t, n) {
      var r = Yx(e) ? Bx : jx,
        i = arguments.length < 3;
      return r(e, Kx(t, 4), n, i, zx);
    }
    Pd.exports = Qx;
  });
  var Md = d((Jq, Dd) => {
    var $x = ji(),
      Zx = pt(),
      Jx = Yi(),
      eR = Math.max,
      tR = Math.min;
    function nR(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = r - 1;
      return (
        n !== void 0 &&
          ((i = Jx(n)), (i = n < 0 ? eR(r + i, 0) : tR(i, r - 1))),
        $x(e, Zx(t, 3), i, !0)
      );
    }
    Dd.exports = nR;
  });
  var qd = d((ek, Fd) => {
    var rR = Ki(),
      iR = Md(),
      oR = rR(iR);
    Fd.exports = oR;
  });
  function kd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function aR(e, t) {
    if (kd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (!Object.hasOwn(t, n[i]) || !kd(e[n[i]], t[n[i]])) return !1;
    return !0;
  }
  var Io,
    Gd = ve(() => {
      "use strict";
      Io = aR;
    });
  var rp = {};
  Ne(rp, {
    cleanupHTMLElement: () => rC,
    clearAllStyles: () => nC,
    clearObjectCache: () => bR,
    getActionListProgress: () => oC,
    getAffectedElements: () => Oo,
    getComputedStyle: () => LR,
    getDestinationValues: () => kR,
    getElementId: () => SR,
    getInstanceId: () => AR,
    getInstanceOrigin: () => DR,
    getItemConfigByKey: () => qR,
    getMaxDurationItemIndex: () => np,
    getNamespacedParameterId: () => uC,
    getRenderType: () => Jd,
    getStyleProp: () => GR,
    mediaQueriesEqual: () => lC,
    observeStore: () => CR,
    reduceListToGroup: () => aC,
    reifyState: () => xR,
    renderHTMLElement: () => XR,
    shallowEqual: () => Io,
    shouldAllowMediaQuery: () => cC,
    shouldNamespaceEventParameter: () => sC,
    stringifyTarget: () => fC,
  });
  function bR() {
    mr.clear();
  }
  function AR() {
    return "i" + wR++;
  }
  function SR(e, t) {
    for (let n in e) {
      let r = e[n];
      if (r && r.ref === t) return r.id;
    }
    return "e" + OR++;
  }
  function xR({ events: e, actionLists: t, site: n } = {}) {
    let r = (0, Tr.default)(
        e,
        (a, u) => {
          let { eventTypeId: s } = u;
          return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
        },
        {}
      ),
      i = n && n.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: r,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function CR({ store: e, select: t, onChange: n, comparator: r = RR }) {
    let { getState: i, subscribe: o } = e,
      a = o(s),
      u = t(i());
    function s() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      r(f, u) || ((u = f), n(u, e));
    }
    return a;
  }
  function Vd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      } = e;
      return {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: u,
      };
    }
    return {};
  }
  function Oo({
    config: e,
    event: t,
    eventTarget: n,
    elementRoot: r,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (k, A) =>
          k.concat(
            Oo({
              config: { target: A },
              event: t,
              eventTarget: n,
              elementRoot: r,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: u,
        queryDocument: s,
        getChildElements: f,
        getSiblingElements: y,
        matchSelector: v,
        elementContains: g,
        isSiblingNode: m,
      } = i,
      { target: b } = e;
    if (!b) return [];
    let {
      id: I,
      objectId: O,
      selector: T,
      selectorGuids: R,
      appliesTo: C,
      useEventTarget: N,
    } = Vd(b);
    if (O) return [mr.has(O) ? mr.get(O) : mr.set(O, {}).get(O)];
    if (C === yi.PAGE) {
      let k = a(I);
      return k ? [k] : [];
    }
    let D = (t?.action?.config?.affectedElements ?? {})[I || T] || {},
      B = !!(D.id || D.selector),
      z,
      j,
      Z,
      J = t && u(Vd(t.target));
    if (
      (B
        ? ((z = D.limitAffectedElements), (j = J), (Z = u(D)))
        : (j = Z = u({ id: I, selector: T, selectorGuids: R })),
      t && N)
    ) {
      let k = n && (Z || N === !0) ? [n] : s(J);
      if (Z) {
        if (N === _R) return s(Z).filter((A) => k.some((G) => g(A, G)));
        if (N === Xd) return s(Z).filter((A) => k.some((G) => g(G, A)));
        if (N === Ud) return s(Z).filter((A) => k.some((G) => m(G, A)));
      }
      return k;
    }
    return j == null || Z == null
      ? []
      : Ke && r
      ? s(Z).filter((k) => r.contains(k))
      : z === Xd
      ? s(j, Z)
      : z === yR
      ? f(s(j)).filter(v(Z))
      : z === Ud
      ? y(s(j)).filter(v(Z))
      : s(Z);
  }
  function LR({ element: e, actionItem: t }) {
    if (!Ke) return {};
    let { actionTypeId: n } = t;
    switch (n) {
      case zt:
      case Kt:
      case jt:
      case Yt:
      case wr:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function DR(e, t = {}, n = {}, r, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = r;
    if (It(a)) return go(a)(t[a], r);
    switch (r.actionTypeId) {
      case Wt:
      case Ht:
      case Bt:
      case An:
        return t[r.actionTypeId] || So[r.actionTypeId];
      case On:
        return PR(t[r.actionTypeId], r.config.filters);
      case Sn:
        return NR(t[r.actionTypeId], r.config.fontVariations);
      case Qd:
        return { value: (0, st.default)(parseFloat(o(e, _r)), 1) };
      case zt: {
        let u = o(e, tt),
          s = o(e, nt),
          f,
          y;
        return (
          r.config.widthUnit === ht
            ? (f = Wd.test(u) ? parseFloat(u) : parseFloat(n.width))
            : (f = (0, st.default)(parseFloat(u), parseFloat(n.width))),
          r.config.heightUnit === ht
            ? (y = Wd.test(s) ? parseFloat(s) : parseFloat(n.height))
            : (y = (0, st.default)(parseFloat(s), parseFloat(n.height))),
          { widthValue: f, heightValue: y }
        );
      }
      case Kt:
      case jt:
      case Yt:
        return JR({
          element: e,
          actionTypeId: r.actionTypeId,
          computedStyle: n,
          getStyle: o,
        });
      case wr:
        return { value: (0, st.default)(o(e, Ir), n.display) };
      case TR:
        return t[r.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function kR({ element: e, actionItem: t, elementApi: n }) {
    if (It(t.actionTypeId)) return ho(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Wt:
      case Ht:
      case Bt:
      case An: {
        let { xValue: r, yValue: i, zValue: o } = t.config;
        return { xValue: r, yValue: i, zValue: o };
      }
      case zt: {
        let { getStyle: r, setStyle: i, getProperty: o } = n,
          { widthUnit: a, heightUnit: u } = t.config,
          { widthValue: s, heightValue: f } = t.config;
        if (!Ke) return { widthValue: s, heightValue: f };
        if (a === ht) {
          let y = r(e, tt);
          i(e, tt, ""), (s = o(e, "offsetWidth")), i(e, tt, y);
        }
        if (u === ht) {
          let y = r(e, nt);
          i(e, nt, ""), (f = o(e, "offsetHeight")), i(e, nt, y);
        }
        return { widthValue: s, heightValue: f };
      }
      case Kt:
      case jt:
      case Yt: {
        let {
          rValue: r,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: u,
        } = t.config;
        if (u && u.startsWith("--")) {
          let { getStyle: s } = n,
            f = s(e, u),
            y = (0, zd.normalizeColor)(f);
          return {
            rValue: y.red,
            gValue: y.green,
            bValue: y.blue,
            aValue: y.alpha,
          };
        }
        return { rValue: r, gValue: i, bValue: o, aValue: a };
      }
      case On:
        return t.config.filters.reduce(MR, {});
      case Sn:
        return t.config.fontVariations.reduce(FR, {});
      default: {
        let { value: r } = t.config;
        return { value: r };
      }
    }
  }
  function Jd(e) {
    if (/^TRANSFORM_/.test(e)) return jd;
    if (/^STYLE_/.test(e)) return wo;
    if (/^GENERAL_/.test(e)) return bo;
    if (/^PLUGIN_/.test(e)) return Yd;
  }
  function GR(e, t) {
    return e === wo ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function XR(e, t, n, r, i, o, a, u, s) {
    switch (u) {
      case jd:
        return BR(e, t, n, i, a);
      case wo:
        return eC(e, t, n, i, o, a);
      case bo:
        return tC(e, i, a);
      case Yd: {
        let { actionTypeId: f } = i;
        if (It(f)) return vo(f)(s, t, i);
      }
    }
  }
  function BR(e, t, n, r, i) {
    let o = HR.map((u) => {
        let s = So[u],
          {
            xValue: f = s.xValue,
            yValue: y = s.yValue,
            zValue: v = s.zValue,
            xUnit: g = "",
            yUnit: m = "",
            zUnit: b = "",
          } = t[u] || {};
        switch (u) {
          case Wt:
            return `${cR}(${f}${g}, ${y}${m}, ${v}${b})`;
          case Ht:
            return `${lR}(${f}${g}, ${y}${m}, ${v}${b})`;
          case Bt:
            return `${fR}(${f}${g}) ${dR}(${y}${m}) ${pR}(${v}${b})`;
          case An:
            return `${gR}(${f}${g}, ${y}${m})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    bt(e, gt, i), a(e, gt, o), jR(r, n) && a(e, dr, hR);
  }
  function zR(e, t, n, r) {
    let i = (0, Tr.default)(t, (a, u, s) => `${a} ${s}(${u}${WR(s, n)})`, ""),
      { setStyle: o } = r;
    bt(e, Tn, r), o(e, Tn, i);
  }
  function KR(e, t, n, r) {
    let i = (0, Tr.default)(
        t,
        (a, u, s) => (a.push(`"${s}" ${u}`), a),
        []
      ).join(", "),
      { setStyle: o } = r;
    bt(e, bn, r), o(e, bn, i);
  }
  function jR({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
    return (
      (e === Wt && r !== void 0) ||
      (e === Ht && r !== void 0) ||
      (e === Bt && (t !== void 0 || n !== void 0))
    );
  }
  function ZR(e, t) {
    let n = e.exec(t);
    return n ? n[1] : "";
  }
  function JR({ element: e, actionTypeId: t, computedStyle: n, getStyle: r }) {
    let i = Ao[t],
      o = r(e, i),
      a = QR.test(o) ? o : n[i],
      u = ZR($R, a).split(wn);
    return {
      rValue: (0, st.default)(parseInt(u[0], 10), 255),
      gValue: (0, st.default)(parseInt(u[1], 10), 255),
      bValue: (0, st.default)(parseInt(u[2], 10), 255),
      aValue: (0, st.default)(parseFloat(u[3]), 1),
    };
  }
  function eC(e, t, n, r, i, o) {
    let { setStyle: a } = o;
    switch (r.actionTypeId) {
      case zt: {
        let { widthUnit: u = "", heightUnit: s = "" } = r.config,
          { widthValue: f, heightValue: y } = n;
        f !== void 0 && (u === ht && (u = "px"), bt(e, tt, o), a(e, tt, f + u)),
          y !== void 0 &&
            (s === ht && (s = "px"), bt(e, nt, o), a(e, nt, y + s));
        break;
      }
      case On: {
        zR(e, n, r.config, o);
        break;
      }
      case Sn: {
        KR(e, n, r.config, o);
        break;
      }
      case Kt:
      case jt:
      case Yt: {
        let u = Ao[r.actionTypeId],
          s = Math.round(n.rValue),
          f = Math.round(n.gValue),
          y = Math.round(n.bValue),
          v = n.aValue;
        bt(e, u, o),
          a(e, u, v >= 1 ? `rgb(${s},${f},${y})` : `rgba(${s},${f},${y},${v})`);
        break;
      }
      default: {
        let { unit: u = "" } = r.config;
        bt(e, i, o), a(e, i, n.value + u);
        break;
      }
    }
  }
  function tC(e, t, n) {
    let { setStyle: r } = n;
    switch (t.actionTypeId) {
      case wr: {
        let { value: i } = t.config;
        i === vR && Ke ? r(e, Ir, $i) : r(e, Ir, i);
        return;
      }
    }
  }
  function bt(e, t, n) {
    if (!Ke) return;
    let r = Zd[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, Vt);
    if (!a) {
      o(e, Vt, r);
      return;
    }
    let u = a.split(wn).map($d);
    u.indexOf(r) === -1 && o(e, Vt, u.concat(r).join(wn));
  }
  function ep(e, t, n) {
    if (!Ke) return;
    let r = Zd[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, Vt);
    !a ||
      a.indexOf(r) === -1 ||
      o(
        e,
        Vt,
        a
          .split(wn)
          .map($d)
          .filter((u) => u !== r)
          .join(wn)
      );
  }
  function nC({ store: e, elementApi: t }) {
    let { ixData: n } = e.getState(),
      { events: r = {}, actionLists: i = {} } = n;
    Object.keys(r).forEach((o) => {
      let a = r[o],
        { config: u } = a.action,
        { actionListId: s } = u,
        f = i[s];
      f && Hd({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Hd({ actionList: i[o], elementApi: t });
      });
  }
  function Hd({ actionList: e = {}, event: t, elementApi: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e;
    r &&
      r.forEach((o) => {
        Bd({ actionGroup: o, event: t, elementApi: n });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((u) => {
            Bd({ actionGroup: u, event: t, elementApi: n });
          });
        });
  }
  function Bd({ actionGroup: e, event: t, elementApi: n }) {
    let { actionItems: r } = e;
    r.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        u;
      It(o)
        ? (u = (s) => Eo(o)(s, i))
        : (u = tp({ effect: iC, actionTypeId: o, elementApi: n })),
        Oo({ config: a, event: t, elementApi: n }).forEach(u);
    });
  }
  function rC(e, t, n) {
    let { setStyle: r, getStyle: i } = n,
      { actionTypeId: o } = t;
    if (o === zt) {
      let { config: a } = t;
      a.widthUnit === ht && r(e, tt, ""), a.heightUnit === ht && r(e, nt, "");
    }
    i(e, Vt) && tp({ effect: ep, actionTypeId: o, elementApi: n })(e);
  }
  function iC(e, t, n) {
    let { setStyle: r } = n;
    ep(e, t, n), r(e, t, ""), t === gt && r(e, dr, "");
  }
  function np(e) {
    let t = 0,
      n = 0;
    return (
      e.forEach((r, i) => {
        let { config: o } = r,
          a = o.delay + o.duration;
        a >= t && ((t = a), (n = i));
      }),
      n
    );
  }
  function oC(e, t) {
    let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      u = 0;
    return (
      n.forEach((s, f) => {
        if (r && f === 0) return;
        let { actionItems: y } = s,
          v = y[np(y)],
          { config: g, actionTypeId: m } = v;
        i.id === v.id && (u = a + o);
        let b = Jd(m) === bo ? 0 : g.duration;
        a += g.delay + b;
      }),
      a > 0 ? In(u / a) : 0
    );
  }
  function aC({ actionList: e, actionItemId: t, rawData: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e,
      o = [],
      a = (u) => (
        o.push((0, br.mergeIn)(u, ["config"], { delay: 0, duration: 0 })),
        u.id === t
      );
    return (
      r && r.some(({ actionItems: u }) => u.some(a)),
      i &&
        i.some((u) => {
          let { continuousActionGroups: s } = u;
          return s.some(({ actionItems: f }) => f.some(a));
        }),
      (0, br.setIn)(n, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function sC(e, { basedOn: t }) {
    return (
      (e === ze.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null)) ||
      (e === ze.MOUSE_MOVE && t === Je.ELEMENT)
    );
  }
  function uC(e, t) {
    return e + IR + t;
  }
  function cC(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function lC(e, t) {
    return Io(e && e.sort(), t && t.sort());
  }
  function fC(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + To + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
    return t + To + n + To + r;
  }
  var st,
    Tr,
    yr,
    br,
    zd,
    sR,
    uR,
    cR,
    lR,
    fR,
    dR,
    pR,
    gR,
    hR,
    vR,
    _r,
    Tn,
    bn,
    tt,
    nt,
    Kd,
    ER,
    mR,
    Xd,
    yR,
    Ud,
    _R,
    Ir,
    Vt,
    ht,
    wn,
    IR,
    To,
    jd,
    bo,
    wo,
    Yd,
    Wt,
    Ht,
    Bt,
    An,
    Qd,
    On,
    Sn,
    zt,
    Kt,
    jt,
    Yt,
    wr,
    TR,
    $d,
    Ao,
    Zd,
    mr,
    wR,
    OR,
    RR,
    Wd,
    PR,
    NR,
    MR,
    FR,
    qR,
    So,
    UR,
    VR,
    WR,
    HR,
    YR,
    QR,
    $R,
    tp,
    ip = ve(() => {
      "use strict";
      (st = fe(yd())), (Tr = fe(Nd())), (yr = fe(qd())), (br = fe(Pt()));
      Me();
      Gd();
      eo();
      zd = fe(uo());
      mo();
      pr();
      ({
        BACKGROUND: sR,
        TRANSFORM: uR,
        TRANSLATE_3D: cR,
        SCALE_3D: lR,
        ROTATE_X: fR,
        ROTATE_Y: dR,
        ROTATE_Z: pR,
        SKEW: gR,
        PRESERVE_3D: hR,
        FLEX: vR,
        OPACITY: _r,
        FILTER: Tn,
        FONT_VARIATION_SETTINGS: bn,
        WIDTH: tt,
        HEIGHT: nt,
        BACKGROUND_COLOR: Kd,
        BORDER_COLOR: ER,
        COLOR: mR,
        CHILDREN: Xd,
        IMMEDIATE_CHILDREN: yR,
        SIBLINGS: Ud,
        PARENT: _R,
        DISPLAY: Ir,
        WILL_CHANGE: Vt,
        AUTO: ht,
        COMMA_DELIMITER: wn,
        COLON_DELIMITER: IR,
        BAR_DELIMITER: To,
        RENDER_TRANSFORM: jd,
        RENDER_GENERAL: bo,
        RENDER_STYLE: wo,
        RENDER_PLUGIN: Yd,
      } = Ae),
        ({
          TRANSFORM_MOVE: Wt,
          TRANSFORM_SCALE: Ht,
          TRANSFORM_ROTATE: Bt,
          TRANSFORM_SKEW: An,
          STYLE_OPACITY: Qd,
          STYLE_FILTER: On,
          STYLE_FONT_VARIATION: Sn,
          STYLE_SIZE: zt,
          STYLE_BACKGROUND_COLOR: Kt,
          STYLE_BORDER: jt,
          STYLE_TEXT_COLOR: Yt,
          GENERAL_DISPLAY: wr,
          OBJECT_VALUE: TR,
        } = Re),
        ($d = (e) => e.trim()),
        (Ao = Object.freeze({ [Kt]: Kd, [jt]: ER, [Yt]: mR })),
        (Zd = Object.freeze({
          [gt]: uR,
          [Kd]: sR,
          [_r]: _r,
          [Tn]: Tn,
          [tt]: tt,
          [nt]: nt,
          [bn]: bn,
        })),
        (mr = new Map());
      wR = 1;
      OR = 1;
      RR = (e, t) => e === t;
      (Wd = /px/),
        (PR = (e, t) =>
          t.reduce(
            (n, r) => (n[r.type] == null && (n[r.type] = UR[r.type]), n),
            e || {}
          )),
        (NR = (e, t) =>
          t.reduce(
            (n, r) => (
              n[r.type] == null &&
                (n[r.type] = VR[r.type] || r.defaultValue || 0),
              n
            ),
            e || {}
          ));
      (MR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (FR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (qR = (e, t, n) => {
          if (It(e)) return po(e)(n, t);
          switch (e) {
            case On: {
              let r = (0, yr.default)(n.filters, ({ type: i }) => i === t);
              return r ? r.value : 0;
            }
            case Sn: {
              let r = (0, yr.default)(
                n.fontVariations,
                ({ type: i }) => i === t
              );
              return r ? r.value : 0;
            }
            default:
              return n[t];
          }
        });
      (So = {
        [Wt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Ht]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Bt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [An]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (UR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (VR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (WR = (e, t) => {
          let n = (0, yr.default)(t.filters, ({ type: r }) => r === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (HR = Object.keys(So));
      (YR = "\\(([^)]+)\\)"), (QR = /^rgb/), ($R = RegExp(`rgba?${YR}`));
      tp =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (r) => {
          switch (t) {
            case Wt:
            case Ht:
            case Bt:
            case An:
              e(r, gt, n);
              break;
            case On:
              e(r, Tn, n);
              break;
            case Sn:
              e(r, bn, n);
              break;
            case Qd:
              e(r, _r, n);
              break;
            case zt:
              e(r, tt, n), e(r, nt, n);
              break;
            case Kt:
            case jt:
            case Yt:
              e(r, Ao[t], n);
              break;
            case wr:
              e(r, Ir, n);
              break;
          }
        };
    });
  var wt = d((xo) => {
    "use strict";
    Object.defineProperty(xo, "__esModule", { value: !0 });
    function dC(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    dC(xo, {
      IX2BrowserSupport: function () {
        return pC;
      },
      IX2EasingUtils: function () {
        return hC;
      },
      IX2Easings: function () {
        return gC;
      },
      IX2ElementsReducer: function () {
        return vC;
      },
      IX2VanillaPlugins: function () {
        return EC;
      },
      IX2VanillaUtils: function () {
        return mC;
      },
    });
    var pC = Qt((pr(), Qe($f))),
      gC = Qt((Ji(), Qe(_n))),
      hC = Qt((eo(), Qe(id))),
      vC = Qt((ud(), Qe(sd))),
      EC = Qt((mo(), Qe(Ed))),
      mC = Qt((ip(), Qe(rp)));
    function op(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (op = function (r) {
        return r ? n : t;
      })(e);
    }
    function Qt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = op(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, o, a)
            : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var Or,
    ut,
    yC,
    _C,
    IC,
    TC,
    bC,
    wC,
    Ar,
    ap,
    AC,
    OC,
    Ro,
    SC,
    xC,
    RC,
    CC,
    sp,
    up = ve(() => {
      "use strict";
      Me();
      (Or = fe(wt())),
        (ut = fe(Pt())),
        ({
          IX2_RAW_DATA_IMPORTED: yC,
          IX2_SESSION_STOPPED: _C,
          IX2_INSTANCE_ADDED: IC,
          IX2_INSTANCE_STARTED: TC,
          IX2_INSTANCE_REMOVED: bC,
          IX2_ANIMATION_FRAME_CHANGED: wC,
        } = Te),
        ({
          optimizeFloat: Ar,
          applyEasing: ap,
          createBezierEasing: AC,
        } = Or.IX2EasingUtils),
        ({ RENDER_GENERAL: OC } = Ae),
        ({
          getItemConfigByKey: Ro,
          getRenderType: SC,
          getStyleProp: xC,
        } = Or.IX2VanillaUtils),
        (RC = (e, t) => {
          let {
              position: n,
              parameterId: r,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: u,
              actionTypeId: s,
              customEasingFn: f,
              skipMotion: y,
              skipToValue: v,
            } = e,
            { parameters: g } = t.payload,
            m = Math.max(1 - a, 0.01),
            b = g[r];
          b == null && ((m = 1), (b = u));
          let I = Math.max(b, 0) || 0,
            O = Ar(I - n),
            T = y ? v : Ar(n + O * m),
            R = T * 100;
          if (T === n && e.current) return e;
          let C, N, M, D;
          for (let z = 0, { length: j } = i; z < j; z++) {
            let { keyframe: Z, actionItems: J } = i[z];
            if ((z === 0 && (C = J[0]), R >= Z)) {
              C = J[0];
              let k = i[z + 1],
                A = k && R !== Z;
              (N = A ? k.actionItems[0] : null),
                A && ((M = Z / 100), (D = (k.keyframe - Z) / 100));
            }
          }
          let B = {};
          if (C && !N)
            for (let z = 0, { length: j } = o; z < j; z++) {
              let Z = o[z];
              B[Z] = Ro(s, Z, C.config);
            }
          else if (C && N && M !== void 0 && D !== void 0) {
            let z = (T - M) / D,
              j = C.config.easing,
              Z = ap(j, z, f);
            for (let J = 0, { length: k } = o; J < k; J++) {
              let A = o[J],
                G = Ro(s, A, C.config),
                re = (Ro(s, A, N.config) - G) * Z + G;
              B[A] = re;
            }
          }
          return (0, ut.merge)(e, { position: T, current: B });
        }),
        (CC = (e, t) => {
          let {
              active: n,
              origin: r,
              start: i,
              immediate: o,
              renderType: a,
              verbose: u,
              actionItem: s,
              destination: f,
              destinationKeys: y,
              pluginDuration: v,
              instanceDelay: g,
              customEasingFn: m,
              skipMotion: b,
            } = e,
            I = s.config.easing,
            { duration: O, delay: T } = s.config;
          v != null && (O = v),
            (T = g ?? T),
            a === OC ? (O = 0) : (o || b) && (O = T = 0);
          let { now: R } = t.payload;
          if (n && r) {
            let C = R - (i + T);
            if (u) {
              let z = R - i,
                j = O + T,
                Z = Ar(Math.min(Math.max(0, z / j), 1));
              e = (0, ut.set)(e, "verboseTimeElapsed", j * Z);
            }
            if (C < 0) return e;
            let N = Ar(Math.min(Math.max(0, C / O), 1)),
              M = ap(I, N, m),
              D = {},
              B = null;
            return (
              y.length &&
                (B = y.reduce((z, j) => {
                  let Z = f[j],
                    J = parseFloat(r[j]) || 0,
                    A = (parseFloat(Z) - J) * M + J;
                  return (z[j] = A), z;
                }, {})),
              (D.current = B),
              (D.position = N),
              N === 1 && ((D.active = !1), (D.complete = !0)),
              (0, ut.merge)(e, D)
            );
          }
          return e;
        }),
        (sp = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case yC:
              return t.payload.ixInstances || Object.freeze({});
            case _C:
              return Object.freeze({});
            case IC: {
              let {
                  instanceId: n,
                  elementId: r,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: u,
                  actionListId: s,
                  groupIndex: f,
                  isCarrier: y,
                  origin: v,
                  destination: g,
                  immediate: m,
                  verbose: b,
                  continuous: I,
                  parameterId: O,
                  actionGroups: T,
                  smoothing: R,
                  restingValue: C,
                  pluginInstance: N,
                  pluginDuration: M,
                  instanceDelay: D,
                  skipMotion: B,
                  skipToValue: z,
                } = t.payload,
                { actionTypeId: j } = i,
                Z = SC(j),
                J = xC(Z, j),
                k = Object.keys(g).filter(
                  (G) => g[G] != null && typeof g[G] != "string"
                ),
                { easing: A } = i.config;
              return (0, ut.set)(e, n, {
                id: n,
                elementId: r,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: g,
                destinationKeys: k,
                immediate: m,
                verbose: b,
                current: null,
                actionItem: i,
                actionTypeId: j,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: f,
                renderType: Z,
                isCarrier: y,
                styleProp: J,
                continuous: I,
                parameterId: O,
                actionGroups: T,
                smoothing: R,
                restingValue: C,
                pluginInstance: N,
                pluginDuration: M,
                instanceDelay: D,
                skipMotion: B,
                skipToValue: z,
                customEasingFn:
                  Array.isArray(A) && A.length === 4 ? AC(A) : void 0,
              });
            }
            case TC: {
              let { instanceId: n, time: r } = t.payload;
              return (0, ut.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: r,
              });
            }
            case bC: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let r = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let u = i[a];
                u !== n && (r[u] = e[u]);
              }
              return r;
            }
            case wC: {
              let n = e,
                r = Object.keys(e),
                { length: i } = r;
              for (let o = 0; o < i; o++) {
                let a = r[o],
                  u = e[a],
                  s = u.continuous ? RC : CC;
                n = (0, ut.set)(n, a, s(u, t));
              }
              return n;
            }
            default:
              return e;
          }
        });
    });
  var LC,
    PC,
    NC,
    cp,
    lp = ve(() => {
      "use strict";
      Me();
      ({
        IX2_RAW_DATA_IMPORTED: LC,
        IX2_SESSION_STOPPED: PC,
        IX2_PARAMETER_CHANGED: NC,
      } = Te),
        (cp = (e = {}, t) => {
          switch (t.type) {
            case LC:
              return t.payload.ixParameters || {};
            case PC:
              return {};
            case NC: {
              let { key: n, value: r } = t.payload;
              return (e[n] = r), e;
            }
            default:
              return e;
          }
        });
    });
  var pp = {};
  Ne(pp, { default: () => MC });
  var fp,
    dp,
    DC,
    MC,
    gp = ve(() => {
      "use strict";
      fp = fe(mi());
      Is();
      Vs();
      Bs();
      dp = fe(wt());
      up();
      lp();
      ({ ixElements: DC } = dp.IX2ElementsReducer),
        (MC = (0, fp.combineReducers)({
          ixData: _s,
          ixRequest: Us,
          ixSession: Hs,
          ixElements: DC,
          ixInstances: sp,
          ixParameters: cp,
        }));
    });
  var vp = d((mk, hp) => {
    var FC = ft(),
      qC = be(),
      kC = ot(),
      GC = "[object String]";
    function XC(e) {
      return typeof e == "string" || (!qC(e) && kC(e) && FC(e) == GC);
    }
    hp.exports = XC;
  });
  var mp = d((yk, Ep) => {
    var UC = zi(),
      VC = UC("length");
    Ep.exports = VC;
  });
  var _p = d((_k, yp) => {
    var WC = "\\ud800-\\udfff",
      HC = "\\u0300-\\u036f",
      BC = "\\ufe20-\\ufe2f",
      zC = "\\u20d0-\\u20ff",
      KC = HC + BC + zC,
      jC = "\\ufe0e\\ufe0f",
      YC = "\\u200d",
      QC = RegExp("[" + YC + WC + KC + jC + "]");
    function $C(e) {
      return QC.test(e);
    }
    yp.exports = $C;
  });
  var Rp = d((Ik, xp) => {
    var Tp = "\\ud800-\\udfff",
      ZC = "\\u0300-\\u036f",
      JC = "\\ufe20-\\ufe2f",
      eL = "\\u20d0-\\u20ff",
      tL = ZC + JC + eL,
      nL = "\\ufe0e\\ufe0f",
      rL = "[" + Tp + "]",
      Co = "[" + tL + "]",
      Lo = "\\ud83c[\\udffb-\\udfff]",
      iL = "(?:" + Co + "|" + Lo + ")",
      bp = "[^" + Tp + "]",
      wp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Ap = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      oL = "\\u200d",
      Op = iL + "?",
      Sp = "[" + nL + "]?",
      aL = "(?:" + oL + "(?:" + [bp, wp, Ap].join("|") + ")" + Sp + Op + ")*",
      sL = Sp + Op + aL,
      uL = "(?:" + [bp + Co + "?", Co, wp, Ap, rL].join("|") + ")",
      Ip = RegExp(Lo + "(?=" + Lo + ")|" + uL + sL, "g");
    function cL(e) {
      for (var t = (Ip.lastIndex = 0); Ip.test(e); ) ++t;
      return t;
    }
    xp.exports = cL;
  });
  var Lp = d((Tk, Cp) => {
    var lL = mp(),
      fL = _p(),
      dL = Rp();
    function pL(e) {
      return fL(e) ? dL(e) : lL(e);
    }
    Cp.exports = pL;
  });
  var Np = d((bk, Pp) => {
    var gL = rr(),
      hL = ir(),
      vL = yt(),
      EL = vp(),
      mL = Lp(),
      yL = "[object Map]",
      _L = "[object Set]";
    function IL(e) {
      if (e == null) return 0;
      if (vL(e)) return EL(e) ? mL(e) : e.length;
      var t = hL(e);
      return t == yL || t == _L ? e.size : gL(e).length;
    }
    Pp.exports = IL;
  });
  var Mp = d((wk, Dp) => {
    var TL = "Expected a function";
    function bL(e) {
      if (typeof e != "function") throw new TypeError(TL);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Dp.exports = bL;
  });
  var Po = d((Ak, Fp) => {
    var wL = dt(),
      AL = (function () {
        try {
          var e = wL(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Fp.exports = AL;
  });
  var No = d((Ok, kp) => {
    var qp = Po();
    function OL(e, t, n) {
      t == "__proto__" && qp
        ? qp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    kp.exports = OL;
  });
  var Xp = d((Sk, Gp) => {
    var SL = No(),
      xL = Kn(),
      RL = Object.prototype,
      CL = RL.hasOwnProperty;
    function LL(e, t, n) {
      var r = e[t];
      (!(CL.call(e, t) && xL(r, n)) || (n === void 0 && !(t in e))) &&
        SL(e, t, n);
    }
    Gp.exports = LL;
  });
  var Wp = d((xk, Vp) => {
    var PL = Xp(),
      NL = En(),
      DL = Jn(),
      Up = et(),
      ML = Xt();
    function FL(e, t, n, r) {
      if (!Up(e)) return e;
      t = NL(t, e);
      for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o; ) {
        var s = ML(t[i]),
          f = n;
        if (s === "__proto__" || s === "constructor" || s === "prototype")
          return e;
        if (i != a) {
          var y = u[s];
          (f = r ? r(y, s, u) : void 0),
            f === void 0 && (f = Up(y) ? y : DL(t[i + 1]) ? [] : {});
        }
        PL(u, s, f), (u = u[s]);
      }
      return e;
    }
    Vp.exports = FL;
  });
  var Bp = d((Rk, Hp) => {
    var qL = sr(),
      kL = Wp(),
      GL = En();
    function XL(e, t, n) {
      for (var r = -1, i = t.length, o = {}; ++r < i; ) {
        var a = t[r],
          u = qL(e, a);
        n(u, a) && kL(o, GL(a, e), u);
      }
      return o;
    }
    Hp.exports = XL;
  });
  var Kp = d((Ck, zp) => {
    var UL = $n(),
      VL = oi(),
      WL = Li(),
      HL = Ci(),
      BL = Object.getOwnPropertySymbols,
      zL = BL
        ? function (e) {
            for (var t = []; e; ) UL(t, WL(e)), (e = VL(e));
            return t;
          }
        : HL;
    zp.exports = zL;
  });
  var Yp = d((Lk, jp) => {
    function KL(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    jp.exports = KL;
  });
  var $p = d((Pk, Qp) => {
    var jL = et(),
      YL = nr(),
      QL = Yp(),
      $L = Object.prototype,
      ZL = $L.hasOwnProperty;
    function JL(e) {
      if (!jL(e)) return QL(e);
      var t = YL(e),
        n = [];
      for (var r in e)
        (r == "constructor" && (t || !ZL.call(e, r))) || n.push(r);
      return n;
    }
    Qp.exports = JL;
  });
  var Jp = d((Nk, Zp) => {
    var eP = Ni(),
      tP = $p(),
      nP = yt();
    function rP(e) {
      return nP(e) ? eP(e, !0) : tP(e);
    }
    Zp.exports = rP;
  });
  var tg = d((Dk, eg) => {
    var iP = Ri(),
      oP = Kp(),
      aP = Jp();
    function sP(e) {
      return iP(e, aP, oP);
    }
    eg.exports = sP;
  });
  var rg = d((Mk, ng) => {
    var uP = Bi(),
      cP = pt(),
      lP = Bp(),
      fP = tg();
    function dP(e, t) {
      if (e == null) return {};
      var n = uP(fP(e), function (r) {
        return [r];
      });
      return (
        (t = cP(t)),
        lP(e, n, function (r, i) {
          return t(r, i[0]);
        })
      );
    }
    ng.exports = dP;
  });
  var og = d((Fk, ig) => {
    var pP = pt(),
      gP = Mp(),
      hP = rg();
    function vP(e, t) {
      return hP(e, gP(pP(t)));
    }
    ig.exports = vP;
  });
  var sg = d((qk, ag) => {
    var EP = rr(),
      mP = ir(),
      yP = fn(),
      _P = be(),
      IP = yt(),
      TP = Zn(),
      bP = nr(),
      wP = tr(),
      AP = "[object Map]",
      OP = "[object Set]",
      SP = Object.prototype,
      xP = SP.hasOwnProperty;
    function RP(e) {
      if (e == null) return !0;
      if (
        IP(e) &&
        (_P(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          TP(e) ||
          wP(e) ||
          yP(e))
      )
        return !e.length;
      var t = mP(e);
      if (t == AP || t == OP) return !e.size;
      if (bP(e)) return !EP(e).length;
      for (var n in e) if (xP.call(e, n)) return !1;
      return !0;
    }
    ag.exports = RP;
  });
  var cg = d((kk, ug) => {
    var CP = No(),
      LP = yo(),
      PP = pt();
    function NP(e, t) {
      var n = {};
      return (
        (t = PP(t, 3)),
        LP(e, function (r, i, o) {
          CP(n, i, t(r, i, o));
        }),
        n
      );
    }
    ug.exports = NP;
  });
  var fg = d((Gk, lg) => {
    function DP(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;

      );
      return e;
    }
    lg.exports = DP;
  });
  var pg = d((Xk, dg) => {
    var MP = cr();
    function FP(e) {
      return typeof e == "function" ? e : MP;
    }
    dg.exports = FP;
  });
  var hg = d((Uk, gg) => {
    var qP = fg(),
      kP = _o(),
      GP = pg(),
      XP = be();
    function UP(e, t) {
      var n = XP(e) ? qP : kP;
      return n(e, GP(t));
    }
    gg.exports = UP;
  });
  var Eg = d((Vk, vg) => {
    var VP = Be(),
      WP = function () {
        return VP.Date.now();
      };
    vg.exports = WP;
  });
  var _g = d((Wk, yg) => {
    var HP = et(),
      Do = Eg(),
      mg = lr(),
      BP = "Expected a function",
      zP = Math.max,
      KP = Math.min;
    function jP(e, t, n) {
      var r,
        i,
        o,
        a,
        u,
        s,
        f = 0,
        y = !1,
        v = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(BP);
      (t = mg(t) || 0),
        HP(n) &&
          ((y = !!n.leading),
          (v = "maxWait" in n),
          (o = v ? zP(mg(n.maxWait) || 0, t) : o),
          (g = "trailing" in n ? !!n.trailing : g));
      function m(D) {
        var B = r,
          z = i;
        return (r = i = void 0), (f = D), (a = e.apply(z, B)), a;
      }
      function b(D) {
        return (f = D), (u = setTimeout(T, t)), y ? m(D) : a;
      }
      function I(D) {
        var B = D - s,
          z = D - f,
          j = t - B;
        return v ? KP(j, o - z) : j;
      }
      function O(D) {
        var B = D - s,
          z = D - f;
        return s === void 0 || B >= t || B < 0 || (v && z >= o);
      }
      function T() {
        var D = Do();
        if (O(D)) return R(D);
        u = setTimeout(T, I(D));
      }
      function R(D) {
        return (u = void 0), g && r ? m(D) : ((r = i = void 0), a);
      }
      function C() {
        u !== void 0 && clearTimeout(u), (f = 0), (r = s = i = u = void 0);
      }
      function N() {
        return u === void 0 ? a : R(Do());
      }
      function M() {
        var D = Do(),
          B = O(D);
        if (((r = arguments), (i = this), (s = D), B)) {
          if (u === void 0) return b(s);
          if (v) return clearTimeout(u), (u = setTimeout(T, t)), m(s);
        }
        return u === void 0 && (u = setTimeout(T, t)), a;
      }
      return (M.cancel = C), (M.flush = N), M;
    }
    yg.exports = jP;
  });
  var Tg = d((Hk, Ig) => {
    var YP = _g(),
      QP = et(),
      $P = "Expected a function";
    function ZP(e, t, n) {
      var r = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError($P);
      return (
        QP(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (i = "trailing" in n ? !!n.trailing : i)),
        YP(e, t, { leading: r, maxWait: t, trailing: i })
      );
    }
    Ig.exports = ZP;
  });
  var wg = {};
  Ne(wg, {
    actionListPlaybackChanged: () => Zt,
    animationFrameChanged: () => xr,
    clearRequested: () => bN,
    elementStateChanged: () => Vo,
    eventListenerAdded: () => Sr,
    eventStateChanged: () => Go,
    instanceAdded: () => Xo,
    instanceRemoved: () => Uo,
    instanceStarted: () => Rr,
    mediaQueriesDefined: () => Ho,
    parameterChanged: () => $t,
    playbackRequested: () => IN,
    previewRequested: () => _N,
    rawDataImported: () => Mo,
    sessionInitialized: () => Fo,
    sessionStarted: () => qo,
    sessionStopped: () => ko,
    stopRequested: () => TN,
    testFrameRendered: () => wN,
    viewportWidthChanged: () => Wo,
  });
  var bg,
    JP,
    eN,
    tN,
    nN,
    rN,
    iN,
    oN,
    aN,
    sN,
    uN,
    cN,
    lN,
    fN,
    dN,
    pN,
    gN,
    hN,
    vN,
    EN,
    mN,
    yN,
    Mo,
    Fo,
    qo,
    ko,
    _N,
    IN,
    TN,
    bN,
    Sr,
    wN,
    Go,
    xr,
    $t,
    Xo,
    Rr,
    Uo,
    Vo,
    Zt,
    Wo,
    Ho,
    Cr = ve(() => {
      "use strict";
      Me();
      (bg = fe(wt())),
        ({
          IX2_RAW_DATA_IMPORTED: JP,
          IX2_SESSION_INITIALIZED: eN,
          IX2_SESSION_STARTED: tN,
          IX2_SESSION_STOPPED: nN,
          IX2_PREVIEW_REQUESTED: rN,
          IX2_PLAYBACK_REQUESTED: iN,
          IX2_STOP_REQUESTED: oN,
          IX2_CLEAR_REQUESTED: aN,
          IX2_EVENT_LISTENER_ADDED: sN,
          IX2_TEST_FRAME_RENDERED: uN,
          IX2_EVENT_STATE_CHANGED: cN,
          IX2_ANIMATION_FRAME_CHANGED: lN,
          IX2_PARAMETER_CHANGED: fN,
          IX2_INSTANCE_ADDED: dN,
          IX2_INSTANCE_STARTED: pN,
          IX2_INSTANCE_REMOVED: gN,
          IX2_ELEMENT_STATE_CHANGED: hN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: vN,
          IX2_VIEWPORT_WIDTH_CHANGED: EN,
          IX2_MEDIA_QUERIES_DEFINED: mN,
        } = Te),
        ({ reifyState: yN } = bg.IX2VanillaUtils),
        (Mo = (e) => ({ type: JP, payload: { ...yN(e) } })),
        (Fo = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: eN,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (qo = () => ({ type: tN })),
        (ko = () => ({ type: nN })),
        (_N = ({ rawData: e, defer: t }) => ({
          type: rN,
          payload: { defer: t, rawData: e },
        })),
        (IN = ({
          actionTypeId: e = Re.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: r,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: u,
          rawData: s,
        }) => ({
          type: iN,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: a,
            eventId: r,
            allowEvents: i,
            immediate: o,
            verbose: u,
            rawData: s,
          },
        })),
        (TN = (e) => ({ type: oN, payload: { actionListId: e } })),
        (bN = () => ({ type: aN })),
        (Sr = (e, t) => ({
          type: sN,
          payload: { target: e, listenerParams: t },
        })),
        (wN = (e = 1) => ({ type: uN, payload: { step: e } })),
        (Go = (e, t) => ({ type: cN, payload: { stateKey: e, newState: t } })),
        (xr = (e, t) => ({ type: lN, payload: { now: e, parameters: t } })),
        ($t = (e, t) => ({ type: fN, payload: { key: e, value: t } })),
        (Xo = (e) => ({ type: dN, payload: { ...e } })),
        (Rr = (e, t) => ({ type: pN, payload: { instanceId: e, time: t } })),
        (Uo = (e) => ({ type: gN, payload: { instanceId: e } })),
        (Vo = (e, t, n, r) => ({
          type: hN,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
        })),
        (Zt = ({ actionListId: e, isPlaying: t }) => ({
          type: vN,
          payload: { actionListId: e, isPlaying: t },
        })),
        (Wo = ({ width: e, mediaQueries: t }) => ({
          type: EN,
          payload: { width: e, mediaQueries: t },
        })),
        (Ho = () => ({ type: mN }));
    });
  var Le = {};
  Ne(Le, {
    elementContains: () => Ko,
    getChildElements: () => DN,
    getClosestElement: () => xn,
    getProperty: () => RN,
    getQuerySelector: () => zo,
    getRefType: () => jo,
    getSiblingElements: () => MN,
    getStyle: () => xN,
    getValidDocument: () => LN,
    isSiblingNode: () => NN,
    matchSelector: () => CN,
    queryDocument: () => PN,
    setStyle: () => SN,
  });
  function SN(e, t, n) {
    e.style[t] = n;
  }
  function xN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function RN(e, t) {
    return e[t];
  }
  function CN(e) {
    return (t) => t[Bo](e);
  }
  function zo({ id: e, selector: t }) {
    if (e) {
      let n = e;
      if (e.indexOf(Ag) !== -1) {
        let r = e.split(Ag),
          i = r[0];
        if (((n = r[1]), i !== document.documentElement.getAttribute(Sg)))
          return null;
      }
      return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
    }
    return t;
  }
  function LN(e) {
    return e == null || e === document.documentElement.getAttribute(Sg)
      ? document
      : null;
  }
  function PN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function Ko(e, t) {
    return e.contains(t);
  }
  function NN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function DN(e) {
    let t = [];
    for (let n = 0, { length: r } = e || []; n < r; n++) {
      let { children: i } = e[n],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function MN(e = []) {
    let t = [],
      n = [];
    for (let r = 0, { length: i } = e; r < i; r++) {
      let { parentNode: o } = e[r];
      if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1)
        continue;
      n.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function jo(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? AN
        : ON
      : null;
  }
  var Og,
    Bo,
    Ag,
    AN,
    ON,
    Sg,
    xn,
    xg = ve(() => {
      "use strict";
      Og = fe(wt());
      Me();
      ({ ELEMENT_MATCHES: Bo } = Og.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Ag,
          HTML_ELEMENT: AN,
          PLAIN_OBJECT: ON,
          WF_PAGE: Sg,
        } = Ae);
      xn = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[Bo] && n[Bo](t)) return n;
              n = n.parentNode;
            } while (n != null);
            return null;
          };
    });
  var Yo = d((Kk, Cg) => {
    var FN = et(),
      Rg = Object.create,
      qN = (function () {
        function e() {}
        return function (t) {
          if (!FN(t)) return {};
          if (Rg) return Rg(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    Cg.exports = qN;
  });
  var Lr = d((jk, Lg) => {
    function kN() {}
    Lg.exports = kN;
  });
  var Nr = d((Yk, Pg) => {
    var GN = Yo(),
      XN = Lr();
    function Pr(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Pr.prototype = GN(XN.prototype);
    Pr.prototype.constructor = Pr;
    Pg.exports = Pr;
  });
  var Fg = d((Qk, Mg) => {
    var Ng = Rt(),
      UN = fn(),
      VN = be(),
      Dg = Ng ? Ng.isConcatSpreadable : void 0;
    function WN(e) {
      return VN(e) || UN(e) || !!(Dg && e && e[Dg]);
    }
    Mg.exports = WN;
  });
  var Gg = d(($k, kg) => {
    var HN = $n(),
      BN = Fg();
    function qg(e, t, n, r, i) {
      var o = -1,
        a = e.length;
      for (n || (n = BN), i || (i = []); ++o < a; ) {
        var u = e[o];
        t > 0 && n(u)
          ? t > 1
            ? qg(u, t - 1, n, r, i)
            : HN(i, u)
          : r || (i[i.length] = u);
      }
      return i;
    }
    kg.exports = qg;
  });
  var Ug = d((Zk, Xg) => {
    var zN = Gg();
    function KN(e) {
      var t = e == null ? 0 : e.length;
      return t ? zN(e, 1) : [];
    }
    Xg.exports = KN;
  });
  var Wg = d((Jk, Vg) => {
    function jN(e, t, n) {
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
    Vg.exports = jN;
  });
  var zg = d((eG, Bg) => {
    var YN = Wg(),
      Hg = Math.max;
    function QN(e, t, n) {
      return (
        (t = Hg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, i = -1, o = Hg(r.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = r[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = r[i];
          return (u[t] = n(a)), YN(e, this, u);
        }
      );
    }
    Bg.exports = QN;
  });
  var jg = d((tG, Kg) => {
    function $N(e) {
      return function () {
        return e;
      };
    }
    Kg.exports = $N;
  });
  var $g = d((nG, Qg) => {
    var ZN = jg(),
      Yg = Po(),
      JN = cr(),
      eD = Yg
        ? function (e, t) {
            return Yg(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: ZN(t),
              writable: !0,
            });
          }
        : JN;
    Qg.exports = eD;
  });
  var Jg = d((rG, Zg) => {
    var tD = 800,
      nD = 16,
      rD = Date.now;
    function iD(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = rD(),
          i = nD - (r - n);
        if (((n = r), i > 0)) {
          if (++t >= tD) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Zg.exports = iD;
  });
  var th = d((iG, eh) => {
    var oD = $g(),
      aD = Jg(),
      sD = aD(oD);
    eh.exports = sD;
  });
  var rh = d((oG, nh) => {
    var uD = Ug(),
      cD = zg(),
      lD = th();
    function fD(e) {
      return lD(cD(e, void 0, uD), e + "");
    }
    nh.exports = fD;
  });
  var ah = d((aG, oh) => {
    var ih = Di(),
      dD = ih && new ih();
    oh.exports = dD;
  });
  var uh = d((sG, sh) => {
    function pD() {}
    sh.exports = pD;
  });
  var Qo = d((uG, lh) => {
    var ch = ah(),
      gD = uh(),
      hD = ch
        ? function (e) {
            return ch.get(e);
          }
        : gD;
    lh.exports = hD;
  });
  var dh = d((cG, fh) => {
    var vD = {};
    fh.exports = vD;
  });
  var $o = d((lG, gh) => {
    var ph = dh(),
      ED = Object.prototype,
      mD = ED.hasOwnProperty;
    function yD(e) {
      for (
        var t = e.name + "", n = ph[t], r = mD.call(ph, t) ? n.length : 0;
        r--;

      ) {
        var i = n[r],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    gh.exports = yD;
  });
  var Mr = d((fG, hh) => {
    var _D = Yo(),
      ID = Lr(),
      TD = 4294967295;
    function Dr(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = TD),
        (this.__views__ = []);
    }
    Dr.prototype = _D(ID.prototype);
    Dr.prototype.constructor = Dr;
    hh.exports = Dr;
  });
  var Eh = d((dG, vh) => {
    function bD(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    vh.exports = bD;
  });
  var yh = d((pG, mh) => {
    var wD = Mr(),
      AD = Nr(),
      OD = Eh();
    function SD(e) {
      if (e instanceof wD) return e.clone();
      var t = new AD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = OD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    mh.exports = SD;
  });
  var Th = d((gG, Ih) => {
    var xD = Mr(),
      _h = Nr(),
      RD = Lr(),
      CD = be(),
      LD = ot(),
      PD = yh(),
      ND = Object.prototype,
      DD = ND.hasOwnProperty;
    function Fr(e) {
      if (LD(e) && !CD(e) && !(e instanceof xD)) {
        if (e instanceof _h) return e;
        if (DD.call(e, "__wrapped__")) return PD(e);
      }
      return new _h(e);
    }
    Fr.prototype = RD.prototype;
    Fr.prototype.constructor = Fr;
    Ih.exports = Fr;
  });
  var wh = d((hG, bh) => {
    var MD = Mr(),
      FD = Qo(),
      qD = $o(),
      kD = Th();
    function GD(e) {
      var t = qD(e),
        n = kD[t];
      if (typeof n != "function" || !(t in MD.prototype)) return !1;
      if (e === n) return !0;
      var r = FD(n);
      return !!r && e === r[0];
    }
    bh.exports = GD;
  });
  var xh = d((vG, Sh) => {
    var Ah = Nr(),
      XD = rh(),
      UD = Qo(),
      Zo = $o(),
      VD = be(),
      Oh = wh(),
      WD = "Expected a function",
      HD = 8,
      BD = 32,
      zD = 128,
      KD = 256;
    function jD(e) {
      return XD(function (t) {
        var n = t.length,
          r = n,
          i = Ah.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var o = t[r];
          if (typeof o != "function") throw new TypeError(WD);
          if (i && !a && Zo(o) == "wrapper") var a = new Ah([], !0);
        }
        for (r = a ? r : n; ++r < n; ) {
          o = t[r];
          var u = Zo(o),
            s = u == "wrapper" ? UD(o) : void 0;
          s &&
          Oh(s[0]) &&
          s[1] == (zD | HD | BD | KD) &&
          !s[4].length &&
          s[9] == 1
            ? (a = a[Zo(s[0])].apply(a, s[3]))
            : (a = o.length == 1 && Oh(o) ? a[u]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            y = f[0];
          if (a && f.length == 1 && VD(y)) return a.plant(y).value();
          for (var v = 0, g = n ? t[v].apply(this, f) : y; ++v < n; )
            g = t[v].call(this, g);
          return g;
        };
      });
    }
    Sh.exports = jD;
  });
  var Ch = d((EG, Rh) => {
    var YD = xh(),
      QD = YD();
    Rh.exports = QD;
  });
  var Ph = d((mG, Lh) => {
    function $D(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Lh.exports = $D;
  });
  var Dh = d((yG, Nh) => {
    var ZD = Ph(),
      Jo = lr();
    function JD(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = Jo(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = Jo(t)), (t = t === t ? t : 0)),
        ZD(Jo(e), t, n)
      );
    }
    Nh.exports = JD;
  });
  var Wh,
    Hh,
    Bh,
    zh,
    eM,
    tM,
    nM,
    rM,
    iM,
    oM,
    aM,
    sM,
    uM,
    cM,
    lM,
    fM,
    dM,
    pM,
    gM,
    Kh,
    jh,
    hM,
    vM,
    EM,
    Yh,
    mM,
    yM,
    Qh,
    _M,
    ea,
    $h,
    Mh,
    Fh,
    Zh,
    Cn,
    IM,
    rt,
    Jh,
    TM,
    qe,
    je,
    Ln,
    ev,
    ta,
    qh,
    na,
    bM,
    Rn,
    wM,
    AM,
    OM,
    tv,
    kh,
    SM,
    Gh,
    xM,
    RM,
    CM,
    Xh,
    qr,
    kr,
    Uh,
    Vh,
    nv,
    rv = ve(() => {
      "use strict";
      (Wh = fe(Ch())), (Hh = fe(ur())), (Bh = fe(Dh()));
      Me();
      ra();
      Cr();
      (zh = fe(wt())),
        ({
          MOUSE_CLICK: eM,
          MOUSE_SECOND_CLICK: tM,
          MOUSE_DOWN: nM,
          MOUSE_UP: rM,
          MOUSE_OVER: iM,
          MOUSE_OUT: oM,
          DROPDOWN_CLOSE: aM,
          DROPDOWN_OPEN: sM,
          SLIDER_ACTIVE: uM,
          SLIDER_INACTIVE: cM,
          TAB_ACTIVE: lM,
          TAB_INACTIVE: fM,
          NAVBAR_CLOSE: dM,
          NAVBAR_OPEN: pM,
          MOUSE_MOVE: gM,
          PAGE_SCROLL_DOWN: Kh,
          SCROLL_INTO_VIEW: jh,
          SCROLL_OUT_OF_VIEW: hM,
          PAGE_SCROLL_UP: vM,
          SCROLLING_IN_VIEW: EM,
          PAGE_FINISH: Yh,
          ECOMMERCE_CART_CLOSE: mM,
          ECOMMERCE_CART_OPEN: yM,
          PAGE_START: Qh,
          PAGE_SCROLL: _M,
        } = ze),
        (ea = "COMPONENT_ACTIVE"),
        ($h = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Mh } = Ae),
        ({ getNamespacedParameterId: Fh } = zh.IX2VanillaUtils),
        (Zh = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Cn = Zh(({ element: e, nativeEvent: t }) => e === t.target)),
        (IM = Zh(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (rt = (0, Wh.default)([Cn, IM])),
        (Jh = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: r } = n,
              i = r[t];
            if (i && !bM[i.eventTypeId]) return i;
          }
          return null;
        }),
        (TM = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: r } = n.config;
          return !!Jh(e, r);
        }),
        (qe = ({ store: e, event: t, element: n, eventStateKey: r }, i) => {
          let { action: o, id: a } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            f = Jh(e, s);
          return (
            f &&
              Jt({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + Mh + r.split(Mh)[1],
                actionListId: (0, Hh.default)(f, "action.config.actionListId"),
              }),
            Jt({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: u,
            }),
            Pn({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: u,
            }),
            i
          );
        }),
        (je = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r),
        (Ln = { handler: je(rt, qe) }),
        (ev = { ...Ln, types: [ea, $h].join(" ") }),
        (ta = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (qh = "mouseover mouseout"),
        (na = { types: ta }),
        (bM = { PAGE_START: Qh, PAGE_FINISH: Yh }),
        (Rn = (() => {
          let e = window.pageXOffset !== void 0,
            n =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : n.scrollLeft,
            scrollTop: e ? window.pageYOffset : n.scrollTop,
            stiffScrollTop: (0, Bh.default)(
              e ? window.pageYOffset : n.scrollTop,
              0,
              n.scrollHeight - window.innerHeight
            ),
            scrollWidth: n.scrollWidth,
            scrollHeight: n.scrollHeight,
            clientWidth: n.clientWidth,
            clientHeight: n.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (wM = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (AM = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: r, relatedTarget: i } = t,
            o = e.contains(r);
          if (n === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(n === "mouseout" && o && a);
        }),
        (OM = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: r, clientHeight: i } = Rn(),
            o = n.scrollOffsetValue,
            s = n.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return wM(t.getBoundingClientRect(), {
            left: 0,
            top: s,
            right: r,
            bottom: i - s,
          });
        }),
        (tv = (e) => (t, n) => {
          let { type: r } = t.nativeEvent,
            i = [ea, $h].indexOf(r) !== -1 ? r === ea : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        }),
        (kh = (e) => (t, n) => {
          let r = { elementHovered: AM(t) };
          return (
            ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
              e(t, r)) ||
            r
          );
        }),
        (SM = (e) => (t, n) => {
          let r = { ...n, elementVisible: OM(t) };
          return (
            ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) &&
              e(t, r)) ||
            r
          );
        }),
        (Gh =
          (e) =>
          (t, n = {}) => {
            let { stiffScrollTop: r, scrollHeight: i, innerHeight: o } = Rn(),
              {
                event: { config: a, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: f } = a,
              y = f === "PX",
              v = i - o,
              g = Number((r / v).toFixed(2));
            if (n && n.percentTop === g) return n;
            let m = (y ? s : (o * (s || 0)) / 100) / v,
              b,
              I,
              O = 0;
            n &&
              ((b = g > n.percentTop),
              (I = n.scrollingDown !== b),
              (O = I ? g : n.anchorTop));
            let T = u === Kh ? g >= O + m : g <= O - m,
              R = {
                ...n,
                percentTop: g,
                inBounds: T,
                anchorTop: O,
                scrollingDown: b,
              };
            return (n && T && (I || R.inBounds !== n.inBounds) && e(t, R)) || R;
          }),
        (xM = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (RM = (e) => (t, n) => {
          let r = { finished: document.readyState === "complete" };
          return r.finished && !(n && n.finshed) && e(t), r;
        }),
        (CM = (e) => (t, n) => {
          let r = { started: !0 };
          return n || e(t), r;
        }),
        (Xh =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let r = { clickCount: (n.clickCount % 2) + 1 };
            return (r.clickCount !== n.clickCount && e(t, r)) || r;
          }),
        (qr = (e = !0) => ({
          ...ev,
          handler: je(
            e ? rt : Cn,
            tv((t, n) => (n.isActive ? Ln.handler(t, n) : n))
          ),
        })),
        (kr = (e = !0) => ({
          ...ev,
          handler: je(
            e ? rt : Cn,
            tv((t, n) => (n.isActive ? n : Ln.handler(t, n)))
          ),
        })),
        (Uh = {
          ...na,
          handler: SM((e, t) => {
            let { elementVisible: n } = t,
              { event: r, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[r.action.config.autoStopEventId] && t.triggered
              ? t
              : (r.eventTypeId === jh) === n
              ? (qe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Vh = 0.05),
        (nv = {
          [uM]: qr(),
          [cM]: kr(),
          [sM]: qr(),
          [aM]: kr(),
          [pM]: qr(!1),
          [dM]: kr(!1),
          [lM]: qr(),
          [fM]: kr(),
          [yM]: { types: "ecommerce-cart-open", handler: je(rt, qe) },
          [mM]: { types: "ecommerce-cart-close", handler: je(rt, qe) },
          [eM]: {
            types: "click",
            handler: je(
              rt,
              Xh((e, { clickCount: t }) => {
                TM(e) ? t === 1 && qe(e) : qe(e);
              })
            ),
          },
          [tM]: {
            types: "click",
            handler: je(
              rt,
              Xh((e, { clickCount: t }) => {
                t === 2 && qe(e);
              })
            ),
          },
          [nM]: { ...Ln, types: "mousedown" },
          [rM]: { ...Ln, types: "mouseup" },
          [iM]: {
            types: qh,
            handler: je(
              rt,
              kh((e, t) => {
                t.elementHovered && qe(e);
              })
            ),
          },
          [oM]: {
            types: qh,
            handler: je(
              rt,
              kh((e, t) => {
                t.elementHovered || qe(e);
              })
            ),
          },
          [gM]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: r,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: u,
                  continuousParameterGroupId: s,
                  reverse: f,
                  restingState: y = 0,
                } = n,
                {
                  clientX: v = o.clientX,
                  clientY: g = o.clientY,
                  pageX: m = o.pageX,
                  pageY: b = o.pageY,
                } = r,
                I = u === "X_AXIS",
                O = r.type === "mouseout",
                T = y / 100,
                R = s,
                C = !1;
              switch (a) {
                case Je.VIEWPORT: {
                  T = I
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Je.PAGE: {
                  let {
                    scrollLeft: N,
                    scrollTop: M,
                    scrollWidth: D,
                    scrollHeight: B,
                  } = Rn();
                  T = I ? Math.min(N + m, D) / D : Math.min(M + b, B) / B;
                  break;
                }
                case Je.ELEMENT:
                default: {
                  R = Fh(i, s);
                  let N = r.type.indexOf("mouse") === 0;
                  if (N && rt({ element: t, nativeEvent: r }) !== !0) break;
                  let M = t.getBoundingClientRect(),
                    { left: D, top: B, width: z, height: j } = M;
                  if (!N && !xM({ left: v, top: g }, M)) break;
                  (C = !0), (T = I ? (v - D) / z : (g - B) / j);
                  break;
                }
              }
              return (
                O && (T > 1 - Vh || T < Vh) && (T = Math.round(T)),
                (a !== Je.ELEMENT || C || C !== o.elementHovered) &&
                  ((T = f ? 1 - T : T), e.dispatch($t(R, T))),
                {
                  elementHovered: C,
                  clientX: v,
                  clientY: g,
                  pageX: m,
                  pageY: b,
                }
              );
            },
          },
          [_M]: {
            types: ta,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: r } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Rn(),
                u = i / (o - a);
              (u = r ? 1 - u : u), e.dispatch($t(n, u));
            },
          },
          [EM]: {
            types: ta,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: r },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: u,
                  scrollHeight: s,
                  clientHeight: f,
                } = Rn(),
                {
                  basedOn: y,
                  selectedAxis: v,
                  continuousParameterGroupId: g,
                  startsEntering: m,
                  startsExiting: b,
                  addEndOffset: I,
                  addStartOffset: O,
                  addOffsetValue: T = 0,
                  endOffsetValue: R = 0,
                } = n,
                C = v === "X_AXIS";
              if (y === Je.VIEWPORT) {
                let N = C ? o / u : a / s;
                return (
                  N !== i.scrollPercent && t.dispatch($t(g, N)),
                  { scrollPercent: N }
                );
              } else {
                let N = Fh(r, g),
                  M = e.getBoundingClientRect(),
                  D = (O ? T : 0) / 100,
                  B = (I ? R : 0) / 100;
                (D = m ? D : 1 - D), (B = b ? B : 1 - B);
                let z = M.top + Math.min(M.height * D, f),
                  Z = M.top + M.height * B - z,
                  J = Math.min(f + Z, s),
                  A = Math.min(Math.max(0, f - z), J) / J;
                return (
                  A !== i.scrollPercent && t.dispatch($t(N, A)),
                  { scrollPercent: A }
                );
              }
            },
          },
          [jh]: Uh,
          [hM]: Uh,
          [Kh]: {
            ...na,
            handler: Gh((e, t) => {
              t.scrollingDown && qe(e);
            }),
          },
          [vM]: {
            ...na,
            handler: Gh((e, t) => {
              t.scrollingDown || qe(e);
            }),
          },
          [Yh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je(Cn, RM(qe)),
          },
          [Qh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je(Cn, CM(qe)),
          },
        });
    });
  var _v = {};
  Ne(_v, {
    observeRequests: () => QM,
    startActionGroup: () => Pn,
    startEngine: () => Hr,
    stopActionGroup: () => Jt,
    stopAllActionGroups: () => Ev,
    stopEngine: () => Br,
  });
  function QM(e) {
    At({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: JM }),
      At({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: eF }),
      At({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: tF }),
      At({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: nF });
  }
  function $M(e) {
    At({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Br(e),
          pv({ store: e, elementApi: Le }),
          Hr({ store: e, allowEvents: !0 }),
          gv();
      },
    });
  }
  function ZM(e, t) {
    let n = At({
      store: e,
      select: ({ ixSession: r }) => r.tick,
      onChange: (r) => {
        t(r), n();
      },
    });
  }
  function JM({ rawData: e, defer: t }, n) {
    let r = () => {
      Hr({ store: n, rawData: e, allowEvents: !0 }), gv();
    };
    t ? setTimeout(r, 0) : r();
  }
  function gv() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function eF(e, t) {
    let {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: u,
        testManual: s,
        verbose: f = !0,
      } = e,
      { rawData: y } = e;
    if (r && i && y && u) {
      let v = y.actionLists[r];
      v && (y = GM({ actionList: v, actionItemId: i, rawData: y }));
    }
    if (
      (Hr({ store: t, rawData: y, allowEvents: a, testManual: s }),
      (r && n === Re.GENERAL_START_ACTION) || ia(n))
    ) {
      Jt({ store: t, actionListId: r }),
        vv({ store: t, actionListId: r, eventId: o });
      let v = Pn({
        store: t,
        eventId: o,
        actionListId: r,
        immediate: u,
        verbose: f,
      });
      f && v && t.dispatch(Zt({ actionListId: r, isPlaying: !u }));
    }
  }
  function tF({ actionListId: e }, t) {
    e ? Jt({ store: t, actionListId: e }) : Ev({ store: t }), Br(t);
  }
  function nF(e, t) {
    Br(t), pv({ store: t, elementApi: Le });
  }
  function Hr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Mo(t)),
      i.active ||
        (e.dispatch(
          Fo({
            hasBoundaryNodes: !!document.querySelector(Xr),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        n &&
          (uF(e), rF(), e.getState().ixSession.hasDefinedMediaQueries && $M(e)),
        e.dispatch(qo()),
        iF(e, r));
  }
  function rF() {
    let { documentElement: e } = document;
    e.className.indexOf(iv) === -1 && (e.className += ` ${iv}`);
  }
  function iF(e, t) {
    let n = (r) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(xr(r, o)), t ? ZM(e, n) : requestAnimationFrame(n));
    };
    n(window.performance.now());
  }
  function Br(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: n } = t;
      n.forEach(oF), WM(), e.dispatch(ko());
    }
  }
  function oF({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function aF({
    store: e,
    eventStateKey: t,
    eventTarget: n,
    eventId: r,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: u,
    restingValue: s,
  }) {
    let { ixData: f, ixSession: y } = e.getState(),
      { events: v } = f,
      g = v[r],
      { eventTypeId: m } = g,
      b = {},
      I = {},
      O = [],
      { continuousActionGroups: T } = a,
      { id: R } = a;
    XM(m, i) && (R = UM(t, R));
    let C = y.hasBoundaryNodes && n ? xn(n, Xr) : null;
    T.forEach((N) => {
      let { keyframe: M, actionItems: D } = N;
      D.forEach((B) => {
        let { actionTypeId: z } = B,
          { target: j } = B.config;
        if (!j) return;
        let Z = j.boundaryMode ? C : null,
          J = HM(j) + oa + z;
        if (((I[J] = sF(I[J], M, B)), !b[J])) {
          b[J] = !0;
          let { config: k } = B;
          Ur({
            config: k,
            event: g,
            eventTarget: n,
            elementRoot: Z,
            elementApi: Le,
          }).forEach((A) => {
            O.push({ element: A, key: J });
          });
        }
      });
    }),
      O.forEach(({ element: N, key: M }) => {
        let D = I[M],
          B = (0, ct.default)(D, "[0].actionItems[0]", {}),
          { actionTypeId: z } = B,
          Z = (
            z === Re.PLUGIN_RIVE
              ? (B.config?.target?.selectorGuids || []).length === 0
              : Wr(z)
          )
            ? sa(z)(N, B)
            : null,
          J = aa({ element: N, actionItem: B, elementApi: Le }, Z);
        ua({
          store: e,
          element: N,
          eventId: r,
          actionListId: o,
          actionItem: B,
          destination: J,
          continuous: !0,
          parameterId: R,
          actionGroups: D,
          smoothing: u,
          restingValue: s,
          pluginInstance: Z,
        });
      });
  }
  function sF(e = [], t, n) {
    let r = [...e],
      i;
    return (
      r.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = r.length), r.push({ keyframe: t, actionItems: [] })),
      r[i].actionItems.push(n),
      r
    );
  }
  function uF(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: n } = t;
    hv(e),
      (0, en.default)(n, (i, o) => {
        let a = nv[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        gF({ logic: a, store: e, events: i });
      });
    let { ixSession: r } = e.getState();
    r.eventListeners.length && lF(e);
  }
  function lF(e) {
    let t = () => {
      hv(e);
    };
    cF.forEach((n) => {
      window.addEventListener(n, t), e.dispatch(Sr(window, [n, t]));
    }),
      t();
  }
  function hv(e) {
    let { ixSession: t, ixData: n } = e.getState(),
      r = window.innerWidth;
    if (r !== t.viewportWidth) {
      let { mediaQueries: i } = n;
      e.dispatch(Wo({ width: r, mediaQueries: i }));
    }
  }
  function gF({ logic: e, store: t, events: n }) {
    hF(n);
    let { types: r, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      u = fF(n, pF);
    if (!(0, sv.default)(u)) return;
    (0, en.default)(u, (v, g) => {
      let m = n[g],
        { action: b, id: I, mediaQueries: O = o.mediaQueryKeys } = m,
        { actionListId: T } = b.config;
      BM(O, o.mediaQueryKeys) || t.dispatch(Ho()),
        b.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((C) => {
            let { continuousParameterGroupId: N } = C,
              M = (0, ct.default)(a, `${T}.continuousParameterGroups`, []),
              D = (0, av.default)(M, ({ id: j }) => j === N),
              B = (C.smoothing || 0) / 100,
              z = (C.restingState || 0) / 100;
            D &&
              v.forEach((j, Z) => {
                let J = I + oa + Z;
                aF({
                  store: t,
                  eventStateKey: J,
                  eventTarget: j,
                  eventId: I,
                  eventConfig: C,
                  actionListId: T,
                  parameterGroup: D,
                  smoothing: B,
                  restingValue: z,
                });
              });
          }),
        (b.actionTypeId === Re.GENERAL_START_ACTION || ia(b.actionTypeId)) &&
          vv({ store: t, actionListId: T, eventId: I });
    });
    let s = (v) => {
        let { ixSession: g } = t.getState();
        dF(u, (m, b, I) => {
          let O = n[b],
            T = g.eventState[I],
            { action: R, mediaQueries: C = o.mediaQueryKeys } = O;
          if (!Vr(C, g.mediaQueryKey)) return;
          let N = (M = {}) => {
            let D = i(
              {
                store: t,
                element: m,
                event: O,
                eventConfig: M,
                nativeEvent: v,
                eventStateKey: I,
              },
              T
            );
            zM(D, T) || t.dispatch(Go(I, D));
          };
          R.actionTypeId === Re.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(N)
            : N();
        });
      },
      f = (0, fv.default)(s, YM),
      y = ({ target: v = document, types: g, throttle: m }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((b) => {
            let I = m ? f : s;
            v.addEventListener(b, I), t.dispatch(Sr(v, [b, I]));
          });
      };
    Array.isArray(r) ? r.forEach(y) : typeof r == "string" && y(e);
  }
  function hF(e) {
    if (!jM) return;
    let t = {},
      n = "";
    for (let r in e) {
      let { eventTypeId: i, target: o } = e[r],
        a = zo(o);
      t[a] ||
        ((i === ze.MOUSE_CLICK || i === ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (n += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (n) {
      let r = document.createElement("style");
      (r.textContent = n), document.body.appendChild(r);
    }
  }
  function vv({ store: e, actionListId: t, eventId: n }) {
    let { ixData: r, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = r,
      u = a[n],
      s = o[t];
    if (s && s.useFirstGroupAsInitialState) {
      let f = (0, ct.default)(s, "actionItemGroups[0].actionItems", []),
        y = (0, ct.default)(u, "mediaQueries", r.mediaQueryKeys);
      if (!Vr(y, i.mediaQueryKey)) return;
      f.forEach((v) => {
        let { config: g, actionTypeId: m } = v,
          b =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: u.target, targets: u.targets }
              : g,
          I = Ur({ config: b, event: u, elementApi: Le }),
          O = Wr(m);
        I.forEach((T) => {
          let R = O ? sa(m)(T, v) : null;
          ua({
            destination: aa({ element: T, actionItem: v, elementApi: Le }, R),
            immediate: !0,
            store: e,
            element: T,
            eventId: n,
            actionItem: v,
            actionListId: t,
            pluginInstance: R,
          });
        });
      });
    }
  }
  function Ev({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, en.default)(t, (n) => {
      if (!n.continuous) {
        let { actionListId: r, verbose: i } = n;
        ca(n, e), i && e.dispatch(Zt({ actionListId: r, isPlaying: !1 }));
      }
    });
  }
  function Jt({
    store: e,
    eventId: t,
    eventTarget: n,
    eventStateKey: r,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      u = a.hasBoundaryNodes && n ? xn(n, Xr) : null;
    (0, en.default)(o, (s) => {
      let f = (0, ct.default)(s, "actionItem.config.target.boundaryMode"),
        y = r ? s.eventStateKey === r : !0;
      if (s.actionListId === i && s.eventId === t && y) {
        if (u && f && !Ko(u, s.element)) return;
        ca(s, e),
          s.verbose && e.dispatch(Zt({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Pn({
    store: e,
    eventId: t,
    eventTarget: n,
    eventStateKey: r,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: u,
  }) {
    let { ixData: s, ixSession: f } = e.getState(),
      { events: y } = s,
      v = y[t] || {},
      { mediaQueries: g = s.mediaQueryKeys } = v,
      m = (0, ct.default)(s, `actionLists.${i}`, {}),
      { actionItemGroups: b, useFirstGroupAsInitialState: I } = m;
    if (!b || !b.length) return !1;
    o >= b.length && (0, ct.default)(v, "config.loop") && (o = 0),
      o === 0 && I && o++;
    let T =
        (o === 0 || (o === 1 && I)) && ia(v.action?.actionTypeId)
          ? v.config.delay
          : void 0,
      R = (0, ct.default)(b, [o, "actionItems"], []);
    if (!R.length || !Vr(g, f.mediaQueryKey)) return !1;
    let C = f.hasBoundaryNodes && n ? xn(n, Xr) : null,
      N = FM(R),
      M = !1;
    return (
      R.forEach((D, B) => {
        let { config: z, actionTypeId: j } = D,
          Z = Wr(j),
          { target: J } = z;
        if (!J) return;
        let k = J.boundaryMode ? C : null;
        Ur({
          config: z,
          event: v,
          eventTarget: n,
          elementRoot: k,
          elementApi: Le,
        }).forEach((G, Y) => {
          let K = Z ? sa(j)(G, D) : null,
            re = Z ? KM(j)(G, D) : null;
          M = !0;
          let ie = N === B && Y === 0,
            ce = qM({ element: G, actionItem: D }),
            Ee = aa({ element: G, actionItem: D, elementApi: Le }, K);
          ua({
            store: e,
            element: G,
            actionItem: D,
            eventId: t,
            eventTarget: n,
            eventStateKey: r,
            actionListId: i,
            groupIndex: o,
            isCarrier: ie,
            computedStyle: ce,
            destination: Ee,
            immediate: a,
            verbose: u,
            pluginInstance: K,
            pluginDuration: re,
            instanceDelay: T,
          });
        });
      }),
      M
    );
  }
  function ua(e) {
    let { store: t, computedStyle: n, ...r } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: u,
        continuous: s,
        restingValue: f,
        eventId: y,
      } = r,
      v = !s,
      g = DM(),
      { ixElements: m, ixSession: b, ixData: I } = t.getState(),
      O = NM(m, i),
      { refState: T } = m[O] || {},
      R = jo(i),
      C = b.reducedMotion && Ii[o.actionTypeId],
      N;
    if (C && s)
      switch (I.events[y]?.eventTypeId) {
        case ze.MOUSE_MOVE:
        case ze.MOUSE_MOVE_IN_VIEWPORT:
          N = f;
          break;
        default:
          N = 0.5;
          break;
      }
    let M = kM(i, T, n, o, Le, u);
    if (
      (t.dispatch(
        Xo({
          instanceId: g,
          elementId: O,
          origin: M,
          refType: R,
          skipMotion: C,
          skipToValue: N,
          ...r,
        })
      ),
      mv(document.body, "ix2-animation-started", g),
      a)
    ) {
      vF(t, g);
      return;
    }
    At({ store: t, select: ({ ixInstances: D }) => D[g], onChange: yv }),
      v && t.dispatch(Rr(g, b.tick));
  }
  function ca(e, t) {
    mv(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: n, actionItem: r } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[n] || {};
    a === dv && VM(o, r, Le), t.dispatch(Uo(e.id));
  }
  function mv(e, t, n) {
    let r = document.createEvent("CustomEvent");
    r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
  }
  function vF(e, t) {
    let { ixParameters: n } = e.getState();
    e.dispatch(Rr(t, 0)), e.dispatch(xr(performance.now(), n));
    let { ixInstances: r } = e.getState();
    yv(r[t], e);
  }
  function yv(e, t) {
    let {
        active: n,
        continuous: r,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: u,
        renderType: s,
        current: f,
        groupIndex: y,
        eventId: v,
        eventTarget: g,
        eventStateKey: m,
        actionListId: b,
        isCarrier: I,
        styleProp: O,
        verbose: T,
        pluginInstance: R,
      } = e,
      { ixData: C, ixSession: N } = t.getState(),
      { events: M } = C,
      D = M && M[v] ? M[v] : {},
      { mediaQueries: B = C.mediaQueryKeys } = D;
    if (Vr(B, N.mediaQueryKey) && (r || n || i)) {
      if (f || (s === PM && i)) {
        t.dispatch(Vo(o, u, f, a));
        let { ixElements: z } = t.getState(),
          { ref: j, refType: Z, refState: J } = z[o] || {},
          k = J && J[u];
        (Z === dv || Wr(u)) && MM(j, J, k, v, a, O, Le, s, R);
      }
      if (i) {
        if (I) {
          let z = Pn({
            store: t,
            eventId: v,
            eventTarget: g,
            eventStateKey: m,
            actionListId: b,
            groupIndex: y + 1,
            verbose: T,
          });
          T && !z && t.dispatch(Zt({ actionListId: b, isPlaying: !1 }));
        }
        ca(e, t);
      }
    }
  }
  var av,
    ct,
    sv,
    uv,
    cv,
    lv,
    en,
    fv,
    Gr,
    LM,
    ia,
    oa,
    Xr,
    dv,
    PM,
    iv,
    Ur,
    NM,
    aa,
    At,
    DM,
    MM,
    pv,
    FM,
    qM,
    kM,
    GM,
    XM,
    UM,
    Vr,
    VM,
    WM,
    HM,
    BM,
    zM,
    Wr,
    sa,
    KM,
    ov,
    jM,
    YM,
    cF,
    fF,
    dF,
    pF,
    ra = ve(() => {
      "use strict";
      (av = fe(Qi())),
        (ct = fe(ur())),
        (sv = fe(Np())),
        (uv = fe(og())),
        (cv = fe(sg())),
        (lv = fe(cg())),
        (en = fe(hg())),
        (fv = fe(Tg()));
      Me();
      Gr = fe(wt());
      Cr();
      xg();
      rv();
      (LM = Object.keys(Xn)),
        (ia = (e) => LM.includes(e)),
        ({
          COLON_DELIMITER: oa,
          BOUNDARY_SELECTOR: Xr,
          HTML_ELEMENT: dv,
          RENDER_GENERAL: PM,
          W_MOD_IX: iv,
        } = Ae),
        ({
          getAffectedElements: Ur,
          getElementId: NM,
          getDestinationValues: aa,
          observeStore: At,
          getInstanceId: DM,
          renderHTMLElement: MM,
          clearAllStyles: pv,
          getMaxDurationItemIndex: FM,
          getComputedStyle: qM,
          getInstanceOrigin: kM,
          reduceListToGroup: GM,
          shouldNamespaceEventParameter: XM,
          getNamespacedParameterId: UM,
          shouldAllowMediaQuery: Vr,
          cleanupHTMLElement: VM,
          clearObjectCache: WM,
          stringifyTarget: HM,
          mediaQueriesEqual: BM,
          shallowEqual: zM,
        } = Gr.IX2VanillaUtils),
        ({
          isPluginType: Wr,
          createPluginInstance: sa,
          getPluginDuration: KM,
        } = Gr.IX2VanillaPlugins),
        (ov = navigator.userAgent),
        (jM = ov.match(/iPad/i) || ov.match(/iPhone/)),
        (YM = 12);
      cF = ["resize", "orientationchange"];
      (fF = (e, t) => (0, uv.default)((0, lv.default)(e, t), cv.default)),
        (dF = (e, t) => {
          (0, en.default)(e, (n, r) => {
            n.forEach((i, o) => {
              let a = r + oa + o;
              t(i, r, a);
            });
          });
        }),
        (pF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ur({ config: t, elementApi: Le });
        });
    });
  var bv = d((fa) => {
    "use strict";
    Object.defineProperty(fa, "__esModule", { value: !0 });
    function EF(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    EF(fa, {
      actions: function () {
        return _F;
      },
      destroy: function () {
        return Tv;
      },
      init: function () {
        return wF;
      },
      setEnv: function () {
        return bF;
      },
      store: function () {
        return zr;
      },
    });
    var mF = mi(),
      yF = IF((gp(), Qe(pp))),
      la = (ra(), Qe(_v)),
      _F = TF((Cr(), Qe(wg)));
    function IF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Iv(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Iv = function (r) {
        return r ? n : t;
      })(e);
    }
    function TF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Iv(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, o, a)
            : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var zr = (0, mF.createStore)(yF.default);
    function bF(e) {
      e() && (0, la.observeRequests)(zr);
    }
    function wF(e) {
      Tv(), (0, la.startEngine)({ store: zr, rawData: e, allowEvents: !0 });
    }
    function Tv() {
      (0, la.stopEngine)(zr);
    }
  });
  var Sv = d((RG, Ov) => {
    "use strict";
    var wv = De(),
      Av = bv();
    Av.setEnv(wv.env);
    wv.define(
      "ix2",
      (Ov.exports = function () {
        return Av;
      })
    );
  });
  var Rv = d((CG, xv) => {
    "use strict";
    var tn = De();
    tn.define(
      "links",
      (xv.exports = function (e, t) {
        var n = {},
          r = e(window),
          i,
          o = tn.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          f = /index\.(html|php)$/,
          y = /\/$/,
          v,
          g;
        n.ready = n.design = n.preview = m;
        function m() {
          (i = o && tn.env("design")),
            (g = tn.env("slug") || a.pathname || ""),
            tn.scroll.off(I),
            (v = []);
          for (var T = document.links, R = 0; R < T.length; ++R) b(T[R]);
          v.length && (tn.scroll.on(I), I());
        }
        function b(T) {
          if (!T.getAttribute("hreflang")) {
            var R =
              (i && T.getAttribute("href-disabled")) || T.getAttribute("href");
            if (((u.href = R), !(R.indexOf(":") >= 0))) {
              var C = e(T);
              if (
                u.hash.length > 1 &&
                u.host + u.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var N = e(u.hash);
                N.length && v.push({ link: C, sec: N, active: !1 });
                return;
              }
              if (!(R === "#" || R === "")) {
                var M =
                  u.href === a.href || R === g || (f.test(R) && y.test(g));
                O(C, s, M);
              }
            }
          }
        }
        function I() {
          var T = r.scrollTop(),
            R = r.height();
          t.each(v, function (C) {
            if (!C.link.attr("hreflang")) {
              var N = C.link,
                M = C.sec,
                D = M.offset().top,
                B = M.outerHeight(),
                z = R * 0.5,
                j = M.is(":visible") && D + B - z >= T && D + z <= T + R;
              C.active !== j && ((C.active = j), O(N, s, j));
            }
          });
        }
        function O(T, R, C) {
          var N = T.hasClass(R);
          (C && N) || (!C && !N) || (C ? T.addClass(R) : T.removeClass(R));
        }
        return n;
      })
    );
  });
  var Lv = d((LG, Cv) => {
    "use strict";
    var Kr = De();
    Kr.define(
      "scroll",
      (Cv.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = b() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (k) {
              window.setTimeout(k, 15);
            },
          s = Kr.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            s +
            " > .header, " +
            s +
            " > .w-nav:not([data-no-scroll])",
          y = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(g));
        function b() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var I = /^#[a-zA-Z0-9][\w:.-]*$/;
        function O(k) {
          return I.test(k.hash) && k.host + k.pathname === n.host + n.pathname;
        }
        let T =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function R() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            T.matches
          );
        }
        function C(k, A) {
          var G;
          switch (A) {
            case "add":
              (G = k.attr("tabindex")),
                G
                  ? k.attr("data-wf-tabindex-swap", G)
                  : k.attr("tabindex", "-1");
              break;
            case "remove":
              (G = k.attr("data-wf-tabindex-swap")),
                G
                  ? (k.attr("tabindex", G),
                    k.removeAttr("data-wf-tabindex-swap"))
                  : k.removeAttr("tabindex");
              break;
          }
          k.toggleClass("wf-force-outline-none", A === "add");
        }
        function N(k) {
          var A = k.currentTarget;
          if (
            !(
              Kr.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(A.className))
            )
          ) {
            var G = O(A) ? A.hash : "";
            if (G !== "") {
              var Y = e(G);
              Y.length &&
                (k && (k.preventDefault(), k.stopPropagation()),
                M(G, k),
                window.setTimeout(
                  function () {
                    D(Y, function () {
                      C(Y, "add"),
                        Y.get(0).focus({ preventScroll: !0 }),
                        C(Y, "remove");
                    });
                  },
                  k ? 0 : 300
                ));
            }
          }
        }
        function M(k) {
          if (
            n.hash !== k &&
            r &&
            r.pushState &&
            !(Kr.env.chrome && n.protocol === "file:")
          ) {
            var A = r.state && r.state.hash;
            A !== k && r.pushState({ hash: k }, "", k);
          }
        }
        function D(k, A) {
          var G = i.scrollTop(),
            Y = B(k);
          if (G !== Y) {
            var K = z(k, G, Y),
              re = Date.now(),
              ie = function () {
                var ce = Date.now() - re;
                window.scroll(0, j(G, Y, ce, K)),
                  ce <= K ? u(ie) : typeof A == "function" && A();
              };
            u(ie);
          }
        }
        function B(k) {
          var A = e(f),
            G = A.css("position") === "fixed" ? A.outerHeight() : 0,
            Y = k.offset().top - G;
          if (k.data("scroll") === "mid") {
            var K = i.height() - G,
              re = k.outerHeight();
            re < K && (Y -= Math.round((K - re) / 2));
          }
          return Y;
        }
        function z(k, A, G) {
          if (R()) return 0;
          var Y = 1;
          return (
            a.add(k).each(function (K, re) {
              var ie = parseFloat(re.getAttribute("data-scroll-time"));
              !isNaN(ie) && ie >= 0 && (Y = ie);
            }),
            (472.143 * Math.log(Math.abs(A - G) + 125) - 2e3) * Y
          );
        }
        function j(k, A, G, Y) {
          return G > Y ? A : k + (A - k) * Z(G / Y);
        }
        function Z(k) {
          return k < 0.5
            ? 4 * k * k * k
            : (k - 1) * (2 * k - 2) * (2 * k - 2) + 1;
        }
        function J() {
          var { WF_CLICK_EMPTY: k, WF_CLICK_SCROLL: A } = t;
          o.on(A, v, N),
            o.on(k, y, function (G) {
              G.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: J };
      })
    );
  });
  var Nv = d((PG, Pv) => {
    "use strict";
    var AF = De();
    AF.define(
      "touch",
      (Pv.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new r(o) : null
            );
          });
        function r(o) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            y;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", b, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", b, !1);
          function v(O) {
            var T = O.touches;
            (T && T.length > 1) ||
              ((a = !0),
              T ? ((u = !0), (f = T[0].clientX)) : (f = O.clientX),
              (y = f));
          }
          function g(O) {
            if (a) {
              if (u && O.type === "mousemove") {
                O.preventDefault(), O.stopPropagation();
                return;
              }
              var T = O.touches,
                R = T ? T[0].clientX : O.clientX,
                C = R - y;
              (y = R),
                Math.abs(C) > s &&
                  n &&
                  String(n()) === "" &&
                  (i("swipe", O, { direction: C > 0 ? "right" : "left" }), b());
            }
          }
          function m(O) {
            if (a && ((a = !1), u && O.type === "mouseup")) {
              O.preventDefault(), O.stopPropagation(), (u = !1);
              return;
            }
          }
          function b() {
            a = !1;
          }
          function I() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", b, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", b, !1),
              (o = null);
          }
          this.destroy = I;
        }
        function i(o, a, u) {
          var s = e.Event(o, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Fv = d((NG, Mv) => {
    "use strict";
    var Ot = De(),
      OF = rn(),
      Ye = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Dv = !0,
      SF = /^#[a-zA-Z0-9\-_]+$/;
    Ot.define(
      "dropdown",
      (Mv.exports = function (e, t) {
        var n = t.debounce,
          r = {},
          i = Ot.env(),
          o = !1,
          a,
          u = Ot.env.touch,
          s = ".w-dropdown",
          f = "w--open",
          y = OF.triggers,
          v = 900,
          g = "focusout" + s,
          m = "keydown" + s,
          b = "mouseenter" + s,
          I = "mousemove" + s,
          O = "mouseleave" + s,
          T = (u ? "click" : "mouseup") + s,
          R = "w-close" + s,
          C = "setting" + s,
          N = e(document),
          M;
        (r.ready = D),
          (r.design = function () {
            o && A(), (o = !1), D();
          }),
          (r.preview = function () {
            (o = !0), D();
          });
        function D() {
          (a = i && Ot.env("design")), (M = N.find(s)), M.each(B);
        }
        function B(c, S) {
          var x = e(S),
            L = e.data(S, s);
          L ||
            (L = e.data(S, s, {
              open: !1,
              el: x,
              config: {},
              selectedIdx: -1,
            })),
            (L.toggle = L.el.children(".w-dropdown-toggle")),
            (L.list = L.el.children(".w-dropdown-list")),
            (L.links = L.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (L.complete = K(L)),
            (L.mouseLeave = ie(L)),
            (L.mouseUpOutside = Y(L)),
            (L.mouseMoveOutside = ce(L)),
            z(L);
          var $ = L.toggle.attr("id"),
            ee = L.list.attr("id");
          $ || ($ = "w-dropdown-toggle-" + c),
            ee || (ee = "w-dropdown-list-" + c),
            L.toggle.attr("id", $),
            L.toggle.attr("aria-controls", ee),
            L.toggle.attr("aria-haspopup", "menu"),
            L.toggle.attr("aria-expanded", "false"),
            L.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            L.toggle.prop("tagName") !== "BUTTON" &&
              (L.toggle.attr("role", "button"),
              L.toggle.attr("tabindex") || L.toggle.attr("tabindex", "0")),
            L.list.attr("id", ee),
            L.list.attr("aria-labelledby", $),
            L.links.each(function (p, X) {
              X.hasAttribute("tabindex") || X.setAttribute("tabindex", "0"),
                SF.test(X.hash) && X.addEventListener("click", k.bind(null, L));
            }),
            L.el.off(s),
            L.toggle.off(s),
            L.nav && L.nav.off(s);
          var W = Z(L, Dv);
          a && L.el.on(C, j(L)),
            a ||
              (i && ((L.hovering = !1), k(L)),
              L.config.hover && L.toggle.on(b, re(L)),
              L.el.on(R, W),
              L.el.on(m, Ee(L)),
              L.el.on(g, h(L)),
              L.toggle.on(T, W),
              L.toggle.on(m, U(L)),
              (L.nav = L.el.closest(".w-nav")),
              L.nav.on(R, W));
        }
        function z(c) {
          var S = Number(c.el.css("z-index"));
          (c.manageZ = S === v || S === v + 1),
            (c.config = {
              hover: c.el.attr("data-hover") === "true" && !u,
              delay: c.el.attr("data-delay"),
            });
        }
        function j(c) {
          return function (S, x) {
            (x = x || {}),
              z(c),
              x.open === !0 && J(c, !0),
              x.open === !1 && k(c, { immediate: !0 });
          };
        }
        function Z(c, S) {
          return n(function (x) {
            if (c.open || (x && x.type === "w-close"))
              return k(c, { forceClose: S });
            J(c);
          });
        }
        function J(c) {
          if (!c.open) {
            G(c),
              (c.open = !0),
              c.list.addClass(f),
              c.toggle.addClass(f),
              c.toggle.attr("aria-expanded", "true"),
              y.intro(0, c.el[0]),
              Ot.redraw.up(),
              c.manageZ && c.el.css("z-index", v + 1);
            var S = Ot.env("editor");
            a || N.on(T, c.mouseUpOutside),
              c.hovering && !S && c.el.on(O, c.mouseLeave),
              c.hovering && S && N.on(I, c.mouseMoveOutside),
              window.clearTimeout(c.delayId);
          }
        }
        function k(c, { immediate: S, forceClose: x } = {}) {
          if (c.open && !(c.config.hover && c.hovering && !x)) {
            c.toggle.attr("aria-expanded", "false"), (c.open = !1);
            var L = c.config;
            if (
              (y.outro(0, c.el[0]),
              N.off(T, c.mouseUpOutside),
              N.off(I, c.mouseMoveOutside),
              c.el.off(O, c.mouseLeave),
              window.clearTimeout(c.delayId),
              !L.delay || S)
            )
              return c.complete();
            c.delayId = window.setTimeout(c.complete, L.delay);
          }
        }
        function A() {
          N.find(s).each(function (c, S) {
            e(S).triggerHandler(R);
          });
        }
        function G(c) {
          var S = c.el[0];
          M.each(function (x, L) {
            var $ = e(L);
            $.is(S) || $.has(S).length || $.triggerHandler(R);
          });
        }
        function Y(c) {
          return (
            c.mouseUpOutside && N.off(T, c.mouseUpOutside),
            n(function (S) {
              if (c.open) {
                var x = e(S.target);
                if (!x.closest(".w-dropdown-toggle").length) {
                  var L = e.inArray(c.el[0], x.parents(s)) === -1,
                    $ = Ot.env("editor");
                  if (L) {
                    if ($) {
                      var ee =
                          x.parents().length === 1 &&
                          x.parents("svg").length === 1,
                        W = x.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (ee || W) return;
                    }
                    k(c);
                  }
                }
              }
            })
          );
        }
        function K(c) {
          return function () {
            c.list.removeClass(f),
              c.toggle.removeClass(f),
              c.manageZ && c.el.css("z-index", "");
          };
        }
        function re(c) {
          return function () {
            (c.hovering = !0), J(c);
          };
        }
        function ie(c) {
          return function () {
            (c.hovering = !1), c.links.is(":focus") || k(c);
          };
        }
        function ce(c) {
          return n(function (S) {
            if (c.open) {
              var x = e(S.target),
                L = e.inArray(c.el[0], x.parents(s)) === -1;
              if (L) {
                var $ = x.parents(".w-editor-bem-EditorHoverControls").length,
                  ee = x.parents(".w-editor-bem-RTToolbar").length,
                  W = e(".w-editor-bem-EditorOverlay"),
                  p =
                    W.find(".w-editor-edit-outline").length ||
                    W.find(".w-editor-bem-RTToolbar").length;
                if ($ || ee || p) return;
                (c.hovering = !1), k(c);
              }
            }
          });
        }
        function Ee(c) {
          return function (S) {
            if (!(a || !c.open))
              switch (
                ((c.selectedIdx = c.links.index(document.activeElement)),
                S.keyCode)
              ) {
                case Ye.HOME:
                  return c.open
                    ? ((c.selectedIdx = 0), E(c), S.preventDefault())
                    : void 0;
                case Ye.END:
                  return c.open
                    ? ((c.selectedIdx = c.links.length - 1),
                      E(c),
                      S.preventDefault())
                    : void 0;
                case Ye.ESCAPE:
                  return k(c), c.toggle.focus(), S.stopPropagation();
                case Ye.ARROW_RIGHT:
                case Ye.ARROW_DOWN:
                  return (
                    (c.selectedIdx = Math.min(
                      c.links.length - 1,
                      c.selectedIdx + 1
                    )),
                    E(c),
                    S.preventDefault()
                  );
                case Ye.ARROW_LEFT:
                case Ye.ARROW_UP:
                  return (
                    (c.selectedIdx = Math.max(-1, c.selectedIdx - 1)),
                    E(c),
                    S.preventDefault()
                  );
              }
          };
        }
        function E(c) {
          c.links[c.selectedIdx] && c.links[c.selectedIdx].focus();
        }
        function U(c) {
          var S = Z(c, Dv);
          return function (x) {
            if (!a) {
              if (!c.open)
                switch (x.keyCode) {
                  case Ye.ARROW_UP:
                  case Ye.ARROW_DOWN:
                    return x.stopPropagation();
                }
              switch (x.keyCode) {
                case Ye.SPACE:
                case Ye.ENTER:
                  return S(), x.stopPropagation(), x.preventDefault();
              }
            }
          };
        }
        function h(c) {
          return n(function (S) {
            var { relatedTarget: x, target: L } = S,
              $ = c.el[0],
              ee = $.contains(x) || $.contains(L);
            return ee || k(c), S.stopPropagation();
          });
        }
        return r;
      })
    );
  });
  var qv = d((da) => {
    "use strict";
    Object.defineProperty(da, "__esModule", { value: !0 });
    Object.defineProperty(da, "default", {
      enumerable: !0,
      get: function () {
        return xF;
      },
    });
    function xF(e, t, n, r, i, o, a, u, s, f, y, v, g) {
      return function (m) {
        e(m);
        var b = m.form,
          I = {
            name: b.attr("data-name") || b.attr("name") || "Untitled Form",
            pageId: b.attr("data-wf-page-id") || "",
            elementId: b.attr("data-wf-element-id") || "",
            source: t.href,
            test: n.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              b.html()
            ),
            trackingCookies: r(),
          };
        let O = b.attr("data-wf-flow");
        O && (I.wfFlow = O), i(m);
        var T = o(b, I.fields);
        if (T) return a(T);
        if (((I.fileUploads = u(b)), s(m), !f)) {
          y(m);
          return;
        }
        v.ajax({
          url: g,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (R) {
            R && R.code === 200 && (m.success = !0), y(m);
          })
          .fail(function () {
            y(m);
          });
      };
    }
  });
  var Gv = d((MG, kv) => {
    "use strict";
    var jr = De(),
      RF = (e, t, n, r) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (o) {
              n(o);
            },
            "error-callback": function () {
              r();
            },
          });
      };
    jr.define(
      "forms",
      (kv.exports = function (e, t) {
        let n = "TURNSTILE_LOADED";
        var r = {},
          i = e(document),
          o,
          a = window.location,
          u = window.XDomainRequest && !window.atob,
          s = ".w-form",
          f,
          y = /e(-)?mail/i,
          v = /^\S+@\S+$/,
          g = window.alert,
          m = jr.env(),
          b,
          I,
          O;
        let T = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
          R;
        var C = /list-manage[1-9]?.com/i,
          N = t.debounce(function () {
            g(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              D(), M(), !m && !b && z();
            };
        function M() {
          (f = e("html").attr("data-wf-site")),
            (I = "https://webflow.com/api/v1/form/" + f),
            u &&
              I.indexOf("https://webflow.com") >= 0 &&
              (I = I.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (O = `${I}/signFile`),
            (o = e(s + " form")),
            o.length && o.each(B);
        }
        function D() {
          T &&
            ((R = document.createElement("script")),
            (R.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
            document.head.appendChild(R),
            (R.onload = () => {
              i.trigger(n);
            }));
        }
        function B(h, c) {
          var S = e(c),
            x = e.data(c, s);
          x || (x = e.data(c, s, { form: S })), j(x);
          var L = S.closest("div.w-form");
          (x.done = L.find("> .w-form-done")),
            (x.fail = L.find("> .w-form-fail")),
            (x.fileUploads = L.find(".w-file-upload")),
            x.fileUploads.each(function (W) {
              Ee(W, x);
            }),
            T &&
              ((x.wait = !1),
              Z(x),
              i.on(typeof turnstile < "u" ? "ready" : n, function () {
                RF(
                  T,
                  c,
                  (W) => {
                    (x.turnstileToken = W), j(x);
                  },
                  () => {
                    Z(x);
                  }
                );
              }));
          var $ =
            x.form.attr("aria-label") || x.form.attr("data-name") || "Form";
          x.done.attr("aria-label") || x.form.attr("aria-label", $),
            x.done.attr("tabindex", "-1"),
            x.done.attr("role", "region"),
            x.done.attr("aria-label") ||
              x.done.attr("aria-label", $ + " success"),
            x.fail.attr("tabindex", "-1"),
            x.fail.attr("role", "region"),
            x.fail.attr("aria-label") ||
              x.fail.attr("aria-label", $ + " failure");
          var ee = (x.action = S.attr("action"));
          if (
            ((x.handler = null),
            (x.redirect = S.attr("data-redirect")),
            C.test(ee))
          ) {
            x.handler = re;
            return;
          }
          if (!ee) {
            if (f) {
              x.handler = (() => {
                let W = qv().default;
                return W(j, a, jr, G, ce, J, g, k, Z, f, ie, e, I);
              })();
              return;
            }
            N();
          }
        }
        function z() {
          (b = !0),
            i.on("submit", s + " form", function (W) {
              var p = e.data(this, s);
              p.handler && ((p.evt = W), p.handler(p));
            });
          let h = ".w-checkbox-input",
            c = ".w-radio-input",
            S = "w--redirected-checked",
            x = "w--redirected-focus",
            L = "w--redirected-focus-visible",
            $ = ":focus-visible, [data-wf-focus-visible]",
            ee = [
              ["checkbox", h],
              ["radio", c],
            ];
          i.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + h + ")",
            (W) => {
              e(W.target).siblings(h).toggleClass(S);
            }
          ),
            i.on("change", s + ' form input[type="radio"]', (W) => {
              e(`input[name="${W.target.name}"]:not(${h})`).map((X, Q) =>
                e(Q).siblings(c).removeClass(S)
              );
              let p = e(W.target);
              p.hasClass("w-radio-input") || p.siblings(c).addClass(S);
            }),
            ee.forEach(([W, p]) => {
              i.on(
                "focus",
                s + ` form input[type="${W}"]:not(` + p + ")",
                (X) => {
                  e(X.target).siblings(p).addClass(x),
                    e(X.target).filter($).siblings(p).addClass(L);
                }
              ),
                i.on(
                  "blur",
                  s + ` form input[type="${W}"]:not(` + p + ")",
                  (X) => {
                    e(X.target).siblings(p).removeClass(`${x} ${L}`);
                  }
                );
            });
        }
        function j(h) {
          var c = (h.btn = h.form.find(':input[type="submit"]'));
          (h.wait = h.btn.attr("data-wait") || null),
            (h.success = !1),
            c.prop("disabled", !!(T && !h.turnstileToken)),
            h.label && c.val(h.label);
        }
        function Z(h) {
          var c = h.btn,
            S = h.wait;
          c.prop("disabled", !0), S && ((h.label = c.val()), c.val(S));
        }
        function J(h, c) {
          var S = null;
          return (
            (c = c || {}),
            h
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (x, L) {
                var $ = e(L),
                  ee = $.attr("type"),
                  W =
                    $.attr("data-name") || $.attr("name") || "Field " + (x + 1);
                W = encodeURIComponent(W);
                var p = $.val();
                if (ee === "checkbox") p = $.is(":checked");
                else if (ee === "radio") {
                  if (c[W] === null || typeof c[W] == "string") return;
                  p =
                    h
                      .find('input[name="' + $.attr("name") + '"]:checked')
                      .val() || null;
                }
                typeof p == "string" && (p = e.trim(p)),
                  (c[W] = p),
                  (S = S || Y($, ee, W, p));
              }),
            S
          );
        }
        function k(h) {
          var c = {};
          return (
            h.find(':input[type="file"]').each(function (S, x) {
              var L = e(x),
                $ = L.attr("data-name") || L.attr("name") || "File " + (S + 1),
                ee = L.attr("data-value");
              typeof ee == "string" && (ee = e.trim(ee)), (c[$] = ee);
            }),
            c
          );
        }
        let A = { _mkto_trk: "marketo" };
        function G() {
          return document.cookie.split("; ").reduce(function (c, S) {
            let x = S.split("="),
              L = x[0];
            if (L in A) {
              let $ = A[L],
                ee = x.slice(1).join("=");
              c[$] = ee;
            }
            return c;
          }, {});
        }
        function Y(h, c, S, x) {
          var L = null;
          return (
            c === "password"
              ? (L = "Passwords cannot be submitted.")
              : h.attr("required")
              ? x
                ? y.test(h.attr("type")) &&
                  (v.test(x) ||
                    (L = "Please enter a valid email address for: " + S))
                : (L = "Please fill out the required field: " + S)
              : S === "g-recaptcha-response" &&
                !x &&
                (L = "Please confirm you\u2019re not a robot."),
            L
          );
        }
        function K(h) {
          ce(h), ie(h);
        }
        function re(h) {
          j(h);
          var c = h.form,
            S = {};
          if (/^https/.test(a.href) && !/^https/.test(h.action)) {
            c.attr("method", "post");
            return;
          }
          ce(h);
          var x = J(c, S);
          if (x) return g(x);
          Z(h);
          var L;
          t.each(S, function (p, X) {
            y.test(X) && (S.EMAIL = p),
              /^((full[ _-]?)?name)$/i.test(X) && (L = p),
              /^(first[ _-]?name)$/i.test(X) && (S.FNAME = p),
              /^(last[ _-]?name)$/i.test(X) && (S.LNAME = p);
          }),
            L &&
              !S.FNAME &&
              ((L = L.split(" ")),
              (S.FNAME = L[0]),
              (S.LNAME = S.LNAME || L[1]));
          var $ = h.action.replace("/post?", "/post-json?") + "&c=?",
            ee = $.indexOf("u=") + 2;
          ee = $.substring(ee, $.indexOf("&", ee));
          var W = $.indexOf("id=") + 3;
          (W = $.substring(W, $.indexOf("&", W))),
            (S["b_" + ee + "_" + W] = ""),
            e
              .ajax({ url: $, data: S, dataType: "jsonp" })
              .done(function (p) {
                (h.success = p.result === "success" || /already/.test(p.msg)),
                  h.success || console.info("MailChimp error: " + p.msg),
                  ie(h);
              })
              .fail(function () {
                ie(h);
              });
        }
        function ie(h) {
          var c = h.form,
            S = h.redirect,
            x = h.success;
          if (x && S) {
            jr.location(S);
            return;
          }
          h.done.toggle(x),
            h.fail.toggle(!x),
            x ? h.done.focus() : h.fail.focus(),
            c.toggle(!x),
            j(h);
        }
        function ce(h) {
          h.evt && h.evt.preventDefault(), (h.evt = null);
        }
        function Ee(h, c) {
          if (!c.fileUploads || !c.fileUploads[h]) return;
          var S,
            x = e(c.fileUploads[h]),
            L = x.find("> .w-file-upload-default"),
            $ = x.find("> .w-file-upload-uploading"),
            ee = x.find("> .w-file-upload-success"),
            W = x.find("> .w-file-upload-error"),
            p = L.find(".w-file-upload-input"),
            X = L.find(".w-file-upload-label"),
            Q = X.children(),
            H = W.find(".w-file-upload-error-msg"),
            de = ee.find(".w-file-upload-file"),
            Oe = ee.find(".w-file-remove-link"),
            ke = de.find(".w-file-upload-file-name"),
            l = H.attr("data-w-size-error"),
            _ = H.attr("data-w-type-error"),
            w = H.attr("data-w-generic-error");
          if (
            (m ||
              X.on("click keydown", function (ne) {
                (ne.type === "keydown" && ne.which !== 13 && ne.which !== 32) ||
                  (ne.preventDefault(), p.click());
              }),
            X.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Oe.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            m)
          )
            p.on("click", function (ne) {
              ne.preventDefault();
            }),
              X.on("click", function (ne) {
                ne.preventDefault();
              }),
              Q.on("click", function (ne) {
                ne.preventDefault();
              });
          else {
            Oe.on("click keydown", function (ne) {
              if (ne.type === "keydown") {
                if (ne.which !== 13 && ne.which !== 32) return;
                ne.preventDefault();
              }
              p.removeAttr("data-value"),
                p.val(""),
                ke.html(""),
                L.toggle(!0),
                ee.toggle(!1),
                X.focus();
            }),
              p.on("change", function (ne) {
                (S = ne.target && ne.target.files && ne.target.files[0]),
                  S &&
                    (L.toggle(!1),
                    W.toggle(!1),
                    $.toggle(!0),
                    $.focus(),
                    ke.text(S.name),
                    ae() || Z(c),
                    (c.fileUploads[h].uploading = !0),
                    E(S, q));
              });
            var P = X.outerHeight();
            p.height(P), p.width(1);
          }
          function F(ne) {
            var V = ne.responseJSON && ne.responseJSON.msg,
              se = w;
            typeof V == "string" && V.indexOf("InvalidFileTypeError") === 0
              ? (se = _)
              : typeof V == "string" &&
                V.indexOf("MaxFileSizeError") === 0 &&
                (se = l),
              H.text(se),
              p.removeAttr("data-value"),
              p.val(""),
              $.toggle(!1),
              L.toggle(!0),
              W.toggle(!0),
              W.focus(),
              (c.fileUploads[h].uploading = !1),
              ae() || j(c);
          }
          function q(ne, V) {
            if (ne) return F(ne);
            var se = V.fileName,
              ue = V.postData,
              _e = V.fileId,
              Ge = V.s3Url;
            p.attr("data-value", _e), U(Ge, ue, S, se, te);
          }
          function te(ne) {
            if (ne) return F(ne);
            $.toggle(!1),
              ee.css("display", "inline-block"),
              ee.focus(),
              (c.fileUploads[h].uploading = !1),
              ae() || j(c);
          }
          function ae() {
            var ne = (c.fileUploads && c.fileUploads.toArray()) || [];
            return ne.some(function (V) {
              return V.uploading;
            });
          }
        }
        function E(h, c) {
          var S = new URLSearchParams({ name: h.name, size: h.size });
          e.ajax({ type: "GET", url: `${O}?${S}`, crossDomain: !0 })
            .done(function (x) {
              c(null, x);
            })
            .fail(function (x) {
              c(x);
            });
        }
        function U(h, c, S, x, L) {
          var $ = new FormData();
          for (var ee in c) $.append(ee, c[ee]);
          $.append("file", S, x),
            e
              .ajax({
                type: "POST",
                url: h,
                data: $,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                L(null);
              })
              .fail(function (W) {
                L(W);
              });
        }
        return r;
      })
    );
  });
  var Uv = d((FG, Xv) => {
    "use strict";
    var vt = De(),
      CF = rn(),
      we = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    vt.define(
      "navbar",
      (Xv.exports = function (e, t) {
        var n = {},
          r = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          u,
          s,
          f,
          y,
          v = vt.env(),
          g = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          b = "w--open",
          I = "w--nav-dropdown-open",
          O = "w--nav-dropdown-toggle-open",
          T = "w--nav-dropdown-list-open",
          R = "w--nav-link-open",
          C = CF.triggers,
          N = e();
        (n.ready = n.design = n.preview = M),
          (n.destroy = function () {
            (N = e()), D(), s && s.length && s.each(Z);
          });
        function M() {
          (f = v && vt.env("design")),
            (y = vt.env("editor")),
            (u = e(document.body)),
            (s = o.find(m)),
            s.length && (s.each(j), D(), B());
        }
        function D() {
          vt.resize.off(z);
        }
        function B() {
          vt.resize.on(z);
        }
        function z() {
          s.each(h);
        }
        function j(p, X) {
          var Q = e(X),
            H = e.data(X, m);
          H ||
            (H = e.data(X, m, {
              open: !1,
              el: Q,
              config: {},
              selectedIdx: -1,
            })),
            (H.menu = Q.find(".w-nav-menu")),
            (H.links = H.menu.find(".w-nav-link")),
            (H.dropdowns = H.menu.find(".w-dropdown")),
            (H.dropdownToggle = H.menu.find(".w-dropdown-toggle")),
            (H.dropdownList = H.menu.find(".w-dropdown-list")),
            (H.button = Q.find(".w-nav-button")),
            (H.container = Q.find(".w-container")),
            (H.overlayContainerId = "w-nav-overlay-" + p),
            (H.outside = E(H));
          var de = Q.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            H.button.attr("style", "-webkit-user-select: text;"),
            H.button.attr("aria-label") == null &&
              H.button.attr("aria-label", "menu"),
            H.button.attr("role", "button"),
            H.button.attr("tabindex", "0"),
            H.button.attr("aria-controls", H.overlayContainerId),
            H.button.attr("aria-haspopup", "menu"),
            H.button.attr("aria-expanded", "false"),
            H.el.off(m),
            H.button.off(m),
            H.menu.off(m),
            A(H),
            f
              ? (J(H), H.el.on("setting" + m, G(H)))
              : (k(H),
                H.button.on("click" + m, ce(H)),
                H.menu.on("click" + m, "a", Ee(H)),
                H.button.on("keydown" + m, Y(H)),
                H.el.on("keydown" + m, K(H))),
            h(p, X);
        }
        function Z(p, X) {
          var Q = e.data(X, m);
          Q && (J(Q), e.removeData(X, m));
        }
        function J(p) {
          p.overlay && (W(p, !0), p.overlay.remove(), (p.overlay = null));
        }
        function k(p) {
          p.overlay ||
            ((p.overlay = e(g).appendTo(p.el)),
            p.overlay.attr("id", p.overlayContainerId),
            (p.parent = p.menu.parent()),
            W(p, !0));
        }
        function A(p) {
          var X = {},
            Q = p.config || {},
            H = (X.animation = p.el.attr("data-animation") || "default");
          (X.animOver = /^over/.test(H)),
            (X.animDirect = /left$/.test(H) ? -1 : 1),
            Q.animation !== H && p.open && t.defer(ie, p),
            (X.easing = p.el.attr("data-easing") || "ease"),
            (X.easing2 = p.el.attr("data-easing2") || "ease");
          var de = p.el.attr("data-duration");
          (X.duration = de != null ? Number(de) : 400),
            (X.docHeight = p.el.attr("data-doc-height")),
            (p.config = X);
        }
        function G(p) {
          return function (X, Q) {
            Q = Q || {};
            var H = i.width();
            A(p),
              Q.open === !0 && $(p, !0),
              Q.open === !1 && W(p, !0),
              p.open &&
                t.defer(function () {
                  H !== i.width() && ie(p);
                });
          };
        }
        function Y(p) {
          return function (X) {
            switch (X.keyCode) {
              case we.SPACE:
              case we.ENTER:
                return ce(p)(), X.preventDefault(), X.stopPropagation();
              case we.ESCAPE:
                return W(p), X.preventDefault(), X.stopPropagation();
              case we.ARROW_RIGHT:
              case we.ARROW_DOWN:
              case we.HOME:
              case we.END:
                return p.open
                  ? (X.keyCode === we.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    re(p),
                    X.preventDefault(),
                    X.stopPropagation())
                  : (X.preventDefault(), X.stopPropagation());
            }
          };
        }
        function K(p) {
          return function (X) {
            if (p.open)
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                X.keyCode)
              ) {
                case we.HOME:
                case we.END:
                  return (
                    X.keyCode === we.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    re(p),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case we.ESCAPE:
                  return (
                    W(p),
                    p.button.focus(),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case we.ARROW_LEFT:
                case we.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    re(p),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case we.ARROW_RIGHT:
                case we.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    re(p),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
              }
          };
        }
        function re(p) {
          if (p.links[p.selectedIdx]) {
            var X = p.links[p.selectedIdx];
            X.focus(), Ee(X);
          }
        }
        function ie(p) {
          p.open && (W(p, !0), $(p, !0));
        }
        function ce(p) {
          return a(function () {
            p.open ? W(p) : $(p);
          });
        }
        function Ee(p) {
          return function (X) {
            var Q = e(this),
              H = Q.attr("href");
            if (!vt.validClick(X.currentTarget)) {
              X.preventDefault();
              return;
            }
            H && H.indexOf("#") === 0 && p.open && W(p);
          };
        }
        function E(p) {
          return (
            p.outside && o.off("click" + m, p.outside),
            function (X) {
              var Q = e(X.target);
              (y && Q.closest(".w-editor-bem-EditorOverlay").length) || U(p, Q);
            }
          );
        }
        var U = a(function (p, X) {
          if (p.open) {
            var Q = X.closest(".w-nav-menu");
            p.menu.is(Q) || W(p);
          }
        });
        function h(p, X) {
          var Q = e.data(X, m),
            H = (Q.collapsed = Q.button.css("display") !== "none");
          if ((Q.open && !H && !f && W(Q, !0), Q.container.length)) {
            var de = S(Q);
            Q.links.each(de), Q.dropdowns.each(de);
          }
          Q.open && ee(Q);
        }
        var c = "max-width";
        function S(p) {
          var X = p.container.css(c);
          return (
            X === "none" && (X = ""),
            function (Q, H) {
              (H = e(H)), H.css(c, ""), H.css(c) === "none" && H.css(c, X);
            }
          );
        }
        function x(p, X) {
          X.setAttribute("data-nav-menu-open", "");
        }
        function L(p, X) {
          X.removeAttribute("data-nav-menu-open");
        }
        function $(p, X) {
          if (p.open) return;
          (p.open = !0),
            p.menu.each(x),
            p.links.addClass(R),
            p.dropdowns.addClass(I),
            p.dropdownToggle.addClass(O),
            p.dropdownList.addClass(T),
            p.button.addClass(b);
          var Q = p.config,
            H = Q.animation;
          (H === "none" || !r.support.transform || Q.duration <= 0) && (X = !0);
          var de = ee(p),
            Oe = p.menu.outerHeight(!0),
            ke = p.menu.outerWidth(!0),
            l = p.el.height(),
            _ = p.el[0];
          if (
            (h(0, _),
            C.intro(0, _),
            vt.redraw.up(),
            f || o.on("click" + m, p.outside),
            X)
          ) {
            F();
            return;
          }
          var w = "transform " + Q.duration + "ms " + Q.easing;
          if (
            (p.overlay &&
              ((N = p.menu.prev()), p.overlay.show().append(p.menu)),
            Q.animOver)
          ) {
            r(p.menu)
              .add(w)
              .set({ x: Q.animDirect * ke, height: de })
              .start({ x: 0 })
              .then(F),
              p.overlay && p.overlay.width(ke);
            return;
          }
          var P = l + Oe;
          r(p.menu).add(w).set({ y: -P }).start({ y: 0 }).then(F);
          function F() {
            p.button.attr("aria-expanded", "true");
          }
        }
        function ee(p) {
          var X = p.config,
            Q = X.docHeight ? o.height() : u.height();
          return (
            X.animOver
              ? p.menu.height(Q)
              : p.el.css("position") !== "fixed" && (Q -= p.el.outerHeight(!0)),
            p.overlay && p.overlay.height(Q),
            Q
          );
        }
        function W(p, X) {
          if (!p.open) return;
          (p.open = !1), p.button.removeClass(b);
          var Q = p.config;
          if (
            ((Q.animation === "none" ||
              !r.support.transform ||
              Q.duration <= 0) &&
              (X = !0),
            C.outro(0, p.el[0]),
            o.off("click" + m, p.outside),
            X)
          ) {
            r(p.menu).stop(), _();
            return;
          }
          var H = "transform " + Q.duration + "ms " + Q.easing2,
            de = p.menu.outerHeight(!0),
            Oe = p.menu.outerWidth(!0),
            ke = p.el.height();
          if (Q.animOver) {
            r(p.menu)
              .add(H)
              .start({ x: Oe * Q.animDirect })
              .then(_);
            return;
          }
          var l = ke + de;
          r(p.menu).add(H).start({ y: -l }).then(_);
          function _() {
            p.menu.height(""),
              r(p.menu).set({ x: 0, y: 0 }),
              p.menu.each(L),
              p.links.removeClass(R),
              p.dropdowns.removeClass(I),
              p.dropdownToggle.removeClass(O),
              p.dropdownList.removeClass(T),
              p.overlay &&
                p.overlay.children().length &&
                (N.length ? p.menu.insertAfter(N) : p.menu.prependTo(p.parent),
                p.overlay.attr("style", "").hide()),
              p.el.triggerHandler("w-close"),
              p.button.attr("aria-expanded", "false");
          }
        }
        return n;
      })
    );
  });
  var Hv = d((qG, Wv) => {
    "use strict";
    var Et = De(),
      LF = rn(),
      it = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Vv =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Et.define(
      "slider",
      (Wv.exports = function (e, t) {
        var n = {},
          r = e.tram,
          i = e(document),
          o,
          a,
          u = Et.env(),
          s = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          y =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          g = LF.triggers,
          m,
          b = !1;
        (n.ready = function () {
          (a = Et.env("design")), I();
        }),
          (n.design = function () {
            (a = !0), setTimeout(I, 1e3);
          }),
          (n.preview = function () {
            (a = !1), I();
          }),
          (n.redraw = function () {
            (b = !0), I(), (b = !1);
          }),
          (n.destroy = O);
        function I() {
          (o = i.find(s)), o.length && (o.each(C), !m && (O(), T()));
        }
        function O() {
          Et.resize.off(R), Et.redraw.off(n.redraw);
        }
        function T() {
          Et.resize.on(R), Et.redraw.on(n.redraw);
        }
        function R() {
          o.filter(":visible").each(K);
        }
        function C(E, U) {
          var h = e(U),
            c = e.data(U, s);
          c ||
            (c = e.data(U, s, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: h,
              config: {},
            })),
            (c.mask = h.children(".w-slider-mask")),
            (c.left = h.children(".w-slider-arrow-left")),
            (c.right = h.children(".w-slider-arrow-right")),
            (c.nav = h.children(".w-slider-nav")),
            (c.slides = c.mask.children(".w-slide")),
            c.slides.each(g.reset),
            b && (c.maskWidth = 0),
            h.attr("role") === void 0 && h.attr("role", "region"),
            h.attr("aria-label") === void 0 && h.attr("aria-label", "carousel");
          var S = c.mask.attr("id");
          if (
            (S || ((S = "w-slider-mask-" + E), c.mask.attr("id", S)),
            !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(y).appendTo(c.mask)),
            c.left.attr("role", "button"),
            c.left.attr("tabindex", "0"),
            c.left.attr("aria-controls", S),
            c.left.attr("aria-label") === void 0 &&
              c.left.attr("aria-label", "previous slide"),
            c.right.attr("role", "button"),
            c.right.attr("tabindex", "0"),
            c.right.attr("aria-controls", S),
            c.right.attr("aria-label") === void 0 &&
              c.right.attr("aria-label", "next slide"),
            !r.support.transform)
          ) {
            c.left.hide(), c.right.hide(), c.nav.hide(), (m = !0);
            return;
          }
          c.el.off(s),
            c.left.off(s),
            c.right.off(s),
            c.nav.off(s),
            N(c),
            a
              ? (c.el.on("setting" + s, A(c)), k(c), (c.hasTimer = !1))
              : (c.el.on("swipe" + s, A(c)),
                c.left.on("click" + s, z(c)),
                c.right.on("click" + s, j(c)),
                c.left.on("keydown" + s, B(c, z)),
                c.right.on("keydown" + s, B(c, j)),
                c.nav.on("keydown" + s, "> div", A(c)),
                c.config.autoplay &&
                  !c.hasTimer &&
                  ((c.hasTimer = !0), (c.timerCount = 1), J(c)),
                c.el.on("mouseenter" + s, D(c, !0, "mouse")),
                c.el.on("focusin" + s, D(c, !0, "keyboard")),
                c.el.on("mouseleave" + s, D(c, !1, "mouse")),
                c.el.on("focusout" + s, D(c, !1, "keyboard"))),
            c.nav.on("click" + s, "> div", A(c)),
            u ||
              c.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var x = h.filter(":hidden");
          x.addClass(v);
          var L = h.parents(":hidden");
          L.addClass(v), b || K(E, U), x.removeClass(v), L.removeClass(v);
        }
        function N(E) {
          var U = {};
          (U.crossOver = 0),
            (U.animation = E.el.attr("data-animation") || "slide"),
            U.animation === "outin" &&
              ((U.animation = "cross"), (U.crossOver = 0.5)),
            (U.easing = E.el.attr("data-easing") || "ease");
          var h = E.el.attr("data-duration");
          if (
            ((U.duration = h != null ? parseInt(h, 10) : 500),
            M(E.el.attr("data-infinite")) && (U.infinite = !0),
            M(E.el.attr("data-disable-swipe")) && (U.disableSwipe = !0),
            M(E.el.attr("data-hide-arrows"))
              ? (U.hideArrows = !0)
              : E.config.hideArrows && (E.left.show(), E.right.show()),
            M(E.el.attr("data-autoplay")))
          ) {
            (U.autoplay = !0),
              (U.delay = parseInt(E.el.attr("data-delay"), 10) || 2e3),
              (U.timerMax = parseInt(E.el.attr("data-autoplay-limit"), 10));
            var c = "mousedown" + s + " touchstart" + s;
            a ||
              E.el.off(c).one(c, function () {
                k(E);
              });
          }
          var S = E.right.width();
          (U.edge = S ? S + 40 : 100), (E.config = U);
        }
        function M(E) {
          return E === "1" || E === "true";
        }
        function D(E, U, h) {
          return function (c) {
            if (U) E.hasFocus[h] = U;
            else if (
              e.contains(E.el.get(0), c.relatedTarget) ||
              ((E.hasFocus[h] = U),
              (E.hasFocus.mouse && h === "keyboard") ||
                (E.hasFocus.keyboard && h === "mouse"))
            )
              return;
            U
              ? (E.ariaLiveLabel.attr("aria-live", "polite"),
                E.hasTimer && k(E))
              : (E.ariaLiveLabel.attr("aria-live", "off"), E.hasTimer && J(E));
          };
        }
        function B(E, U) {
          return function (h) {
            switch (h.keyCode) {
              case it.SPACE:
              case it.ENTER:
                return U(E)(), h.preventDefault(), h.stopPropagation();
            }
          };
        }
        function z(E) {
          return function () {
            Y(E, { index: E.index - 1, vector: -1 });
          };
        }
        function j(E) {
          return function () {
            Y(E, { index: E.index + 1, vector: 1 });
          };
        }
        function Z(E, U) {
          var h = null;
          U === E.slides.length && (I(), re(E)),
            t.each(E.anchors, function (c, S) {
              e(c.els).each(function (x, L) {
                e(L).index() === U && (h = S);
              });
            }),
            h != null && Y(E, { index: h, immediate: !0 });
        }
        function J(E) {
          k(E);
          var U = E.config,
            h = U.timerMax;
          (h && E.timerCount++ > h) ||
            (E.timerId = window.setTimeout(function () {
              E.timerId == null || a || (j(E)(), J(E));
            }, U.delay));
        }
        function k(E) {
          window.clearTimeout(E.timerId), (E.timerId = null);
        }
        function A(E) {
          return function (U, h) {
            h = h || {};
            var c = E.config;
            if (a && U.type === "setting") {
              if (h.select === "prev") return z(E)();
              if (h.select === "next") return j(E)();
              if ((N(E), re(E), h.select == null)) return;
              Z(E, h.select);
              return;
            }
            if (U.type === "swipe")
              return c.disableSwipe || Et.env("editor")
                ? void 0
                : h.direction === "left"
                ? j(E)()
                : h.direction === "right"
                ? z(E)()
                : void 0;
            if (E.nav.has(U.target).length) {
              var S = e(U.target).index();
              if (
                (U.type === "click" && Y(E, { index: S }), U.type === "keydown")
              )
                switch (U.keyCode) {
                  case it.ENTER:
                  case it.SPACE: {
                    Y(E, { index: S }), U.preventDefault();
                    break;
                  }
                  case it.ARROW_LEFT:
                  case it.ARROW_UP: {
                    G(E.nav, Math.max(S - 1, 0)), U.preventDefault();
                    break;
                  }
                  case it.ARROW_RIGHT:
                  case it.ARROW_DOWN: {
                    G(E.nav, Math.min(S + 1, E.pages)), U.preventDefault();
                    break;
                  }
                  case it.HOME: {
                    G(E.nav, 0), U.preventDefault();
                    break;
                  }
                  case it.END: {
                    G(E.nav, E.pages), U.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function G(E, U) {
          var h = E.children().eq(U).focus();
          E.children().not(h);
        }
        function Y(E, U) {
          U = U || {};
          var h = E.config,
            c = E.anchors;
          E.previous = E.index;
          var S = U.index,
            x = {};
          S < 0
            ? ((S = c.length - 1),
              h.infinite &&
                ((x.x = -E.endX), (x.from = 0), (x.to = c[0].width)))
            : S >= c.length &&
              ((S = 0),
              h.infinite &&
                ((x.x = c[c.length - 1].width),
                (x.from = -c[c.length - 1].x),
                (x.to = x.from - x.x))),
            (E.index = S);
          var L = E.nav
            .children()
            .eq(S)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          E.nav
            .children()
            .not(L)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            h.hideArrows &&
              (E.index === c.length - 1 ? E.right.hide() : E.right.show(),
              E.index === 0 ? E.left.hide() : E.left.show());
          var $ = E.offsetX || 0,
            ee = (E.offsetX = -c[E.index].x),
            W = { x: ee, opacity: 1, visibility: "" },
            p = e(c[E.index].els),
            X = e(c[E.previous] && c[E.previous].els),
            Q = E.slides.not(p),
            H = h.animation,
            de = h.easing,
            Oe = Math.round(h.duration),
            ke = U.vector || (E.index > E.previous ? 1 : -1),
            l = "opacity " + Oe + "ms " + de,
            _ = "transform " + Oe + "ms " + de;
          if (
            (p.find(Vv).removeAttr("tabindex"),
            p.removeAttr("aria-hidden"),
            p.find("*").removeAttr("aria-hidden"),
            Q.find(Vv).attr("tabindex", "-1"),
            Q.attr("aria-hidden", "true"),
            Q.find("*").attr("aria-hidden", "true"),
            a || (p.each(g.intro), Q.each(g.outro)),
            U.immediate && !b)
          ) {
            r(p).set(W), F();
            return;
          }
          if (E.index === E.previous) return;
          if (
            (a || E.ariaLiveLabel.text(`Slide ${S + 1} of ${c.length}.`),
            H === "cross")
          ) {
            var w = Math.round(Oe - Oe * h.crossOver),
              P = Math.round(Oe - w);
            (l = "opacity " + w + "ms " + de),
              r(X).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              r(p)
                .set({ visibility: "", x: ee, opacity: 0, zIndex: E.depth++ })
                .add(l)
                .wait(P)
                .then({ opacity: 1 })
                .then(F);
            return;
          }
          if (H === "fade") {
            r(X).set({ visibility: "" }).stop(),
              r(p)
                .set({ visibility: "", x: ee, opacity: 0, zIndex: E.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(F);
            return;
          }
          if (H === "over") {
            (W = { x: E.endX }),
              r(X).set({ visibility: "" }).stop(),
              r(p)
                .set({
                  visibility: "",
                  zIndex: E.depth++,
                  x: ee + c[E.index].width * ke,
                })
                .add(_)
                .start({ x: ee })
                .then(F);
            return;
          }
          h.infinite && x.x
            ? (r(E.slides.not(X))
                .set({ visibility: "", x: x.x })
                .add(_)
                .start({ x: ee }),
              r(X).set({ visibility: "", x: x.from }).add(_).start({ x: x.to }),
              (E.shifted = X))
            : (h.infinite &&
                E.shifted &&
                (r(E.shifted).set({ visibility: "", x: $ }),
                (E.shifted = null)),
              r(E.slides).set({ visibility: "" }).add(_).start({ x: ee }));
          function F() {
            (p = e(c[E.index].els)),
              (Q = E.slides.not(p)),
              H !== "slide" && (W.visibility = "hidden"),
              r(Q).set(W);
          }
        }
        function K(E, U) {
          var h = e.data(U, s);
          if (h) {
            if (ce(h)) return re(h);
            a && Ee(h) && re(h);
          }
        }
        function re(E) {
          var U = 1,
            h = 0,
            c = 0,
            S = 0,
            x = E.maskWidth,
            L = x - E.config.edge;
          L < 0 && (L = 0),
            (E.anchors = [{ els: [], x: 0, width: 0 }]),
            E.slides.each(function (ee, W) {
              c - h > L &&
                (U++,
                (h += x),
                (E.anchors[U - 1] = { els: [], x: c, width: 0 })),
                (S = e(W).outerWidth(!0)),
                (c += S),
                (E.anchors[U - 1].width += S),
                E.anchors[U - 1].els.push(W);
              var p = ee + 1 + " of " + E.slides.length;
              e(W).attr("aria-label", p), e(W).attr("role", "group");
            }),
            (E.endX = c),
            a && (E.pages = null),
            E.nav.length && E.pages !== U && ((E.pages = U), ie(E));
          var $ = E.index;
          $ >= U && ($ = U - 1), Y(E, { immediate: !0, index: $ });
        }
        function ie(E) {
          var U = [],
            h,
            c = E.el.attr("data-nav-spacing");
          c && (c = parseFloat(c) + "px");
          for (var S = 0, x = E.pages; S < x; S++)
            (h = e(f)),
              h
                .attr("aria-label", "Show slide " + (S + 1) + " of " + x)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              E.nav.hasClass("w-num") && h.text(S + 1),
              c != null && h.css({ "margin-left": c, "margin-right": c }),
              U.push(h);
          E.nav.empty().append(U);
        }
        function ce(E) {
          var U = E.mask.width();
          return E.maskWidth !== U ? ((E.maskWidth = U), !0) : !1;
        }
        function Ee(E) {
          var U = 0;
          return (
            E.slides.each(function (h, c) {
              U += e(c).outerWidth(!0);
            }),
            E.slidesWidth !== U ? ((E.slidesWidth = U), !0) : !1
          );
        }
        return n;
      })
    );
  });
  Oa();
  xa();
  Ca();
  Na();
  rn();
  Sv();
  Rv();
  Lv();
  Nv();
  Fv();
  Gv();
  Uv();
  Hv();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|cd90f898-3dec-ef4b-bb62-f502e02ce81f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|cd90f898-3dec-ef4b-bb62-f502e02ce81f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727783784365,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|cd90f898-3dec-ef4b-bb62-f502e02ce81f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|cd90f898-3dec-ef4b-bb62-f502e02ce81f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727783784366,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|cd90f898-3dec-ef4b-bb62-f502e02ce81f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|cd90f898-3dec-ef4b-bb62-f502e02ce81f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727784171404,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|cd90f898-3dec-ef4b-bb62-f502e02ce81f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|cd90f898-3dec-ef4b-bb62-f502e02ce81f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727784171404,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727851279441,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727851279441,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727851293898,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727851293898,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727869531761,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727869531761,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727869531761,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727869531761,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f4851",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f4851",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727871747054,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f4851",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f4851",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727871747054,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f4851",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f4851",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727871762309,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f4851",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f4851",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727871762309,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd67",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd67",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd67",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd67",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd9d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd9d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd9d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd9d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd94",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd94",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd94",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd94",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-53",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd82",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd82",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd82",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd82",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-58": {
      id: "e-58",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727938208701,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|82a0dbb6-6a41-322f-36b3-0d2a15dd2b89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|82a0dbb6-6a41-322f-36b3-0d2a15dd2b89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727945491767,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|82a0dbb6-6a41-322f-36b3-0d2a15dd2b89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|82a0dbb6-6a41-322f-36b3-0d2a15dd2b89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727945491767,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|82a0dbb6-6a41-322f-36b3-0d2a15dd2b89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|82a0dbb6-6a41-322f-36b3-0d2a15dd2b89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727945570167,
    },
    "e-64": {
      id: "e-64",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-63",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|82a0dbb6-6a41-322f-36b3-0d2a15dd2b89",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|82a0dbb6-6a41-322f-36b3-0d2a15dd2b89",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1727945570167,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-66" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|0a8183a9-55c1-466e-8f84-62cc1aa54986",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|0a8183a9-55c1-466e-8f84-62cc1aa54986",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728026767965,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-68" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|5c8b217a-0bcf-0b34-3199-884ae90325b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|5c8b217a-0bcf-0b34-3199-884ae90325b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728026775324,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-70" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|083e2ba8-a78a-248e-bad5-8d3ebacf092d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|083e2ba8-a78a-248e-bad5-8d3ebacf092d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728026787690,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-72" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|c57d164a-1a03-2506-9cad-d29e94cc9e0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|c57d164a-1a03-2506-9cad-d29e94cc9e0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728026805699,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-74" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|7f62d6cb-130f-677c-955b-b825de1b5dff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|7f62d6cb-130f-677c-955b-b825de1b5dff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728026938962,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-76" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|29c03f1d-05ce-6df5-4695-6464063731f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|29c03f1d-05ce-6df5-4695-6464063731f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728026949227,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-78" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "be3645f1-e10e-0618-9664-ccefc1d7effb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "be3645f1-e10e-0618-9664-ccefc1d7effb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728026990466,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-80" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "be3645f1-e10e-0618-9664-ccefc1d7f000",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "be3645f1-e10e-0618-9664-ccefc1d7f000",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728027000858,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-82" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|82faf748-68b2-d573-d545-b1d135e741d5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|82faf748-68b2-d573-d545-b1d135e741d5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728027013914,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-84" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|27ae1e85-4bb7-27f6-22e9-71a4db9fbd3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|27ae1e85-4bb7-27f6-22e9-71a4db9fbd3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728027028474,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-86" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|87d15616-1bbe-28e0-f0fe-901ae5eeaa88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|87d15616-1bbe-28e0-f0fe-901ae5eeaa88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728027040001,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-88" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|5376267c-6881-c907-91df-007b4e41edbe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|5376267c-6881-c907-91df-007b4e41edbe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728031622674,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-90" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|02847fe2-aaf5-3d7b-aeea-d083a5edd63b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|02847fe2-aaf5-3d7b-aeea-d083a5edd63b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728032353685,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-92" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|cc418ca9-b6a9-f463-652a-ff81571a153c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|cc418ca9-b6a9-f463-652a-ff81571a153c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728032368388,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-94" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|acc7d082-c092-1b99-b797-67b3e3e0b382",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|acc7d082-c092-1b99-b797-67b3e3e0b382",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728032482060,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-96" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "4304cd69-5cf1-1452-ef6a-fab341e5bb9d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "4304cd69-5cf1-1452-ef6a-fab341e5bb9d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728032513019,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-104" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|a7e6b518-0091-749e-935d-16e805b6a4f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|a7e6b518-0091-749e-935d-16e805b6a4f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728032593794,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728038175917,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728038175918,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728038194948,
    },
    "e-114": {
      id: "e-114",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728038194949,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-116" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|2086e13f-c320-11d9-f74d-5858706ae6b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|2086e13f-c320-11d9-f74d-5858706ae6b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728039507140,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-118" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|e1aa1a5c-f98d-b95d-1546-b7508af20e69",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|e1aa1a5c-f98d-b95d-1546-b7508af20e69",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728039519419,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-120" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f39acd85-9a4f-4ecd-87b1-654fe1883c01",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f39acd85-9a4f-4ecd-87b1-654fe1883c01",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728039877361,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-122" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f39acd85-9a4f-4ecd-87b1-654fe1883c06",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f39acd85-9a4f-4ecd-87b1-654fe1883c06",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728039899146,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-124" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f39acd85-9a4f-4ecd-87b1-654fe1883c08",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f39acd85-9a4f-4ecd-87b1-654fe1883c08",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728039916976,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-126" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f39acd85-9a4f-4ecd-87b1-654fe1883c0a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f39acd85-9a4f-4ecd-87b1-654fe1883c0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728039928616,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-128" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbed6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbed6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728039951242,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-130" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbed8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbed8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728039965457,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-132" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbedb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbedb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728039984985,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-134" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbee3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbee3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728040005936,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-136" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbeeb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbeeb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728040017840,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-138" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbef3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c8e4bc8-3ae5-57b4-f7ba-0d31dd6cbef3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728040026688,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-140" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f35",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f35",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728040058720,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-142" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728040072680,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-144" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728040153705,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-146" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5c9159fc-3a0e-14ec-b275-1b592c8f4f51",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728040163687,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-148" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "2645b19a-cdf8-6f5d-ea3a-8dda1ceb4024",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "2645b19a-cdf8-6f5d-ea3a-8dda1ceb4024",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728040206031,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-150" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "2645b19a-cdf8-6f5d-ea3a-8dda1ceb4027",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "2645b19a-cdf8-6f5d-ea3a-8dda1ceb4027",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728040236627,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-152" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd64",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd64",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044145310,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-154" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd67",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd67",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1728044166820,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-156" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd67",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd67",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044177236,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-158" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044185747,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-160" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044198939,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-162" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd82",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd82",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044214925,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-164" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044237253,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-166" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd94",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd94",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044250700,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-168" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "df198c8c-a0bd-2570-86fc-99303f44cd9d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "df198c8c-a0bd-2570-86fc-99303f44cd9d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044276693,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-170" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|8942d568-0f24-fbc4-9315-0e48085dcaf8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|8942d568-0f24-fbc4-9315-0e48085dcaf8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044322804,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-172" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|41a60e37-6f51-9d4e-5e6b-a89b78af94b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|41a60e37-6f51-9d4e-5e6b-a89b78af94b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044335780,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-174" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|ed6cce55-da5c-ea6f-4a36-bdba48f8b7c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|ed6cce55-da5c-ea6f-4a36-bdba48f8b7c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044357844,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-176" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|ed6cce55-da5c-ea6f-4a36-bdba48f8b7c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|ed6cce55-da5c-ea6f-4a36-bdba48f8b7c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044371372,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-178" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|84041694-a855-c694-6d34-ab69eeba4bfe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|84041694-a855-c694-6d34-ab69eeba4bfe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044521851,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-180" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|f3497f61-05a7-97eb-1db3-2daa9fc67469",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|f3497f61-05a7-97eb-1db3-2daa9fc67469",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044535509,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-182" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|361e7448-bff0-d84d-b66b-30f1bbd136a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|361e7448-bff0-d84d-b66b-30f1bbd136a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044666634,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-184" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|621e0825-b4af-5ac0-00bd-3d21fdbe44c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|621e0825-b4af-5ac0-00bd-3d21fdbe44c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044753557,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-186" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|d79f6896-e535-acc1-a6d5-e8c9ba042435",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|d79f6896-e535-acc1-a6d5-e8c9ba042435",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044795269,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-188" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|e48cde86-8d95-6d18-75f5-2cc237fe0153",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|e48cde86-8d95-6d18-75f5-2cc237fe0153",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044811324,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-190" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|aee7253d-8297-950b-3293-7f6ec11203c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|aee7253d-8297-950b-3293-7f6ec11203c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044819868,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-192" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|889e4f88-aebf-6089-5524-76fbe034c70f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|889e4f88-aebf-6089-5524-76fbe034c70f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044852549,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-194" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|35ecd1eb-1af3-c43c-17ad-9b43766beb14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|35ecd1eb-1af3-c43c-17ad-9b43766beb14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044863501,
    },
    "e-195": {
      id: "e-195",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-196" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|7284cc3b-f10b-e6d3-74ed-48ac864a4821",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|7284cc3b-f10b-e6d3-74ed-48ac864a4821",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044941684,
    },
    "e-197": {
      id: "e-197",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-198" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|2a17d121-c1f7-b05e-ef78-b665b64354ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044957581,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-200" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|24b3d012-81b4-97d9-a3c0-a0740b9caa3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|24b3d012-81b4-97d9-a3c0-a0740b9caa3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728044973364,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-202" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf813",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf813",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045014739,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-204" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf818",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf818",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045029187,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-206" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf820",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf820",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045042420,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-208" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf828",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf828",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045057411,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-210" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf830",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|7239d91c-9136-07b7-bb84-c348d41cf830",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045072011,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-212" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|a40b4a09-6705-b60e-4d23-ae44a4331e5e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|a40b4a09-6705-b60e-4d23-ae44a4331e5e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045090123,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-214" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|2de783e1-a08a-c5e9-7758-4e9716699dc1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|2de783e1-a08a-c5e9-7758-4e9716699dc1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045105459,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-216" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|7337943a-9bd9-6c6e-1f81-d3b18ffcf1c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|7337943a-9bd9-6c6e-1f81-d3b18ffcf1c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045125452,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-218" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|53205273-b75c-5412-f6ac-4b5cca800001",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|53205273-b75c-5412-f6ac-4b5cca800001",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045143524,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-220" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|0285da36-673c-2a99-d3e6-73d29631e27a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|0285da36-673c-2a99-d3e6-73d29631e27a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045199068,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-222" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|8d569129-b36c-db4d-b09c-ebf67c9a1716",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|8d569129-b36c-db4d-b09c-ebf67c9a1716",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045223746,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-224" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9ed091a836b30a70917c|427f3a2a-0f8b-6cf8-1b81-c9ab0493b9a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9ed091a836b30a70917c|427f3a2a-0f8b-6cf8-1b81-c9ab0493b9a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045288002,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-226" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9ed091a836b30a70917c|da112aec-705b-c4ca-e3b8-676da6688057",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9ed091a836b30a70917c|da112aec-705b-c4ca-e3b8-676da6688057",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045305411,
    },
    "e-227": {
      id: "e-227",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-228" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9ed091a836b30a70917c|75ba08b2-301b-fca7-20be-c8c691d86458",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9ed091a836b30a70917c|75ba08b2-301b-fca7-20be-c8c691d86458",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045316587,
    },
    "e-229": {
      id: "e-229",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-230" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9ff5567a83b9fd2ccfb6|c5c13908-7407-6e60-28aa-b47d13b2f08b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9ff5567a83b9fd2ccfb6|c5c13908-7407-6e60-28aa-b47d13b2f08b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728045348643,
    },
    "e-231": {
      id: "e-231",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-232" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|a0a9fa28-98b8-fc84-5b28-53ee6fc71cca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|a0a9fa28-98b8-fc84-5b28-53ee6fc71cca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728102602975,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-234" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|a0a9fa28-98b8-fc84-5b28-53ee6fc71cce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|a0a9fa28-98b8-fc84-5b28-53ee6fc71cce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728102602975,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-236" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|27716129-5f48-54df-a403-456aa1f553b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|27716129-5f48-54df-a403-456aa1f553b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728104681878,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-238" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|27716129-5f48-54df-a403-456aa1f553b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|27716129-5f48-54df-a403-456aa1f553b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728104681878,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-240" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|26f9c096-e9a2-1d35-c677-c39d8e2aa4f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|26f9c096-e9a2-1d35-c677-c39d8e2aa4f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728109996863,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-242" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|26f9c096-e9a2-1d35-c677-c39d8e2aa4f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|26f9c096-e9a2-1d35-c677-c39d8e2aa4f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728109996863,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-244" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|c8e8d001-72be-b58d-17e8-0f9ee2cc7a62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|c8e8d001-72be-b58d-17e8-0f9ee2cc7a62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728111702742,
    },
    "e-245": {
      id: "e-245",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-246" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|c8e8d001-72be-b58d-17e8-0f9ee2cc7a66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|c8e8d001-72be-b58d-17e8-0f9ee2cc7a66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728111702742,
    },
    "e-247": {
      id: "e-247",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-248" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|63af1b2a-649c-b2fd-58aa-ecca915f31ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|63af1b2a-649c-b2fd-58aa-ecca915f31ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728112066703,
    },
    "e-249": {
      id: "e-249",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-250" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|63af1b2a-649c-b2fd-58aa-ecca915f31b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|63af1b2a-649c-b2fd-58aa-ecca915f31b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728112066703,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-252" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e2534e3e936a66de706|63af1b2a-649c-b2fd-58aa-ecca915f31b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e2534e3e936a66de706|63af1b2a-649c-b2fd-58aa-ecca915f31b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728112237827,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-254" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|351707e9-62c5-e9c9-d368-97276d4f8548",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|351707e9-62c5-e9c9-d368-97276d4f8548",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728113105119,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-256" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|351707e9-62c5-e9c9-d368-97276d4f854c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|351707e9-62c5-e9c9-d368-97276d4f854c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728113105119,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-258" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|1cd77719-b977-25e5-7518-460939abdbf1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|1cd77719-b977-25e5-7518-460939abdbf1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728113346118,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-260" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|1cd77719-b977-25e5-7518-460939abdbf5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|1cd77719-b977-25e5-7518-460939abdbf5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728113346118,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-262" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|1cd77719-b977-25e5-7518-460939abdbf6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|1cd77719-b977-25e5-7518-460939abdbf6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728113398411,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-264" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f484f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e578a1eec185a68d835|f7555909-bfd5-9f86-84d1-ccd5224f484f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728113432321,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-266",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "064d84f7-7460-d153-e4ae-6a81228c06a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "064d84f7-7460-d153-e4ae-6a81228c06a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728114482805,
    },
    "e-266": {
      id: "e-266",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-265",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "064d84f7-7460-d153-e4ae-6a81228c06a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "064d84f7-7460-d153-e4ae-6a81228c06a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728114482811,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-268" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fe73c428c9a454e49c951d|fbb19a92-6f0d-6ec3-f255-f3dbd643aab2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fe73c428c9a454e49c951d|fbb19a92-6f0d-6ec3-f255-f3dbd643aab2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728115563169,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-270" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fe73c428c9a454e49c951d|fbb19a92-6f0d-6ec3-f255-f3dbd643aab6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fe73c428c9a454e49c951d|fbb19a92-6f0d-6ec3-f255-f3dbd643aab6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728115563169,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-272" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9ff5567a83b9fd2ccfb6|8da680b8-d8e3-0a94-8213-652e15538b9d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9ff5567a83b9fd2ccfb6|8da680b8-d8e3-0a94-8213-652e15538b9d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116576220,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-274" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "27716129-5f48-54df-a403-456aa1f553b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "27716129-5f48-54df-a403-456aa1f553b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116634168,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-276" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "27716129-5f48-54df-a403-456aa1f553b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "27716129-5f48-54df-a403-456aa1f553b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116640385,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-278" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fe73c428c9a454e49c951d|fbb19a92-6f0d-6ec3-f255-f3dbd643aab7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fe73c428c9a454e49c951d|fbb19a92-6f0d-6ec3-f255-f3dbd643aab7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116675778,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-280" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fe73c428c9a454e49c951d|32a84202-75fc-a3af-5396-2f3ff15c2838",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fe73c428c9a454e49c951d|32a84202-75fc-a3af-5396-2f3ff15c2838",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116687161,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-282" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fe73c428c9a454e49c951d|e84371a4-be48-50bf-93be-c816af2533e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fe73c428c9a454e49c951d|e84371a4-be48-50bf-93be-c816af2533e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116695775,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-284" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|79fcd411-c1a9-fba7-9785-207016587b1a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|79fcd411-c1a9-fba7-9785-207016587b1a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116709031,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-286" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|cdf42721-f69b-394e-2ed4-07f133fa9bae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|cdf42721-f69b-394e-2ed4-07f133fa9bae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116715482,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-288" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbdabf419b537148adecc9|73fdc2ec-4638-01d3-8565-e1754f585c48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbdabf419b537148adecc9|73fdc2ec-4638-01d3-8565-e1754f585c48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116731690,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-290" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbdabf419b537148adecc9|5063b3d1-4a1c-de7d-7029-6a3f6b38f48a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbdabf419b537148adecc9|5063b3d1-4a1c-de7d-7029-6a3f6b38f48a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116737717,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-292" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbdabf419b537148adecc9|69471287-b7e7-5313-ac58-7fcc38048e99",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbdabf419b537148adecc9|69471287-b7e7-5313-ac58-7fcc38048e99",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116746207,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-294" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbd7c70a52e9d8ca39e73a|bbf6a02c-2ad9-dd75-bfd2-fd572a41644a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbd7c70a52e9d8ca39e73a|bbf6a02c-2ad9-dd75-bfd2-fd572a41644a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116763568,
    },
    "e-295": {
      id: "e-295",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-296" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbd7c70a52e9d8ca39e73a|ed936348-779e-d970-8017-7511ac525633",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbd7c70a52e9d8ca39e73a|ed936348-779e-d970-8017-7511ac525633",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116774867,
    },
    "e-297": {
      id: "e-297",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-298" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "4304cd69-5cf1-1452-ef6a-fab341e5bbc4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "4304cd69-5cf1-1452-ef6a-fab341e5bbc4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728116838838,
    },
    "e-301": {
      id: "e-301",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-302",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|4445e6b8-bc25-34f1-0328-f0180d878a9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|4445e6b8-bc25-34f1-0328-f0180d878a9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728274291960,
    },
    "e-303": {
      id: "e-303",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-304",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|ebfc4179-f7fe-7401-569a-7c9d31d55732",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|ebfc4179-f7fe-7401-569a-7c9d31d55732",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728274849887,
    },
    "e-305": {
      id: "e-305",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-306",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|71b28dd7-9b48-da76-4302-6f6af2b942e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|71b28dd7-9b48-da76-4302-6f6af2b942e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728274931487,
    },
    "e-307": {
      id: "e-307",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-308",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|5fdff090-fcf8-26c0-e2d0-de70a5fb4c33",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|5fdff090-fcf8-26c0-e2d0-de70a5fb4c33",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728274997248,
    },
    "e-309": {
      id: "e-309",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-310",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fe73c428c9a454e49c951d|24940966-aa66-bcfa-1dd0-649c36e16643",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fe73c428c9a454e49c951d|24940966-aa66-bcfa-1dd0-649c36e16643",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728275636736,
    },
    "e-311": {
      id: "e-311",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-312",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|c5b4526b-e761-968a-bc6d-734e94cc5ba8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|c5b4526b-e761-968a-bc6d-734e94cc5ba8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728275699319,
    },
    "e-313": {
      id: "e-313",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-314",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbdabf419b537148adecc9|bf6fb383-a60c-5524-c803-92ef43043ee1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbdabf419b537148adecc9|bf6fb383-a60c-5524-c803-92ef43043ee1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1728275760448,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-316",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbd7c70a52e9d8ca39e73a|ab0c9e05-44d7-ef48-ac6a-6eae37147193",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbd7c70a52e9d8ca39e73a|ab0c9e05-44d7-ef48-ac6a-6eae37147193",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728275782472,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-318" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66e05400096a16b32b75b787|a0a9fa28-98b8-fc84-5b28-53ee6fc71ccf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66e05400096a16b32b75b787|a0a9fa28-98b8-fc84-5b28-53ee6fc71ccf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728276364796,
    },
    "e-319": {
      id: "e-319",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-320" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb9e3b9bbb0b15e2761977|351707e9-62c5-e9c9-d368-97276d4f854d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb9e3b9bbb0b15e2761977|351707e9-62c5-e9c9-d368-97276d4f854d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728284459164,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-322" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a2e9150b-3b71-59cf-7d8d-38c7630bd7e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a2e9150b-3b71-59cf-7d8d-38c7630bd7e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728284538418,
    },
    "e-323": {
      id: "e-323",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-324" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "359ec55f-32f1-4048-66a7-e93d930a3b9b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "359ec55f-32f1-4048-66a7-e93d930a3b9b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728284547395,
    },
    "e-325": {
      id: "e-325",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-326" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|eb1a6eeb-45f7-c1ed-9395-1f274641031f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|eb1a6eeb-45f7-c1ed-9395-1f274641031f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728284767450,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-328" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|eb1a6eeb-45f7-c1ed-9395-1f2746410320",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|eb1a6eeb-45f7-c1ed-9395-1f2746410320",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728284778729,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-330" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbd7c70a52e9d8ca39e73a|9cd8cf56-f45f-b5f8-fd02-81b6e941b86b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbd7c70a52e9d8ca39e73a|9cd8cf56-f45f-b5f8-fd02-81b6e941b86b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728284795488,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-332" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbd7c70a52e9d8ca39e73a|9cd8cf56-f45f-b5f8-fd02-81b6e941b86c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbd7c70a52e9d8ca39e73a|9cd8cf56-f45f-b5f8-fd02-81b6e941b86c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728284803401,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-334" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|55b8d0fa-f91d-ee70-bc69-35d49f058d6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|55b8d0fa-f91d-ee70-bc69-35d49f058d6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728285860832,
    },
    "e-335": {
      id: "e-335",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-336" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fbddc5face174ad05019a1|d4eb71f6-8e7d-826f-6ca8-a186557a468c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fbddc5face174ad05019a1|d4eb71f6-8e7d-826f-6ca8-a186557a468c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728286026055,
    },
    "e-337": {
      id: "e-337",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-338",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "064d84f7-7460-d153-e4ae-6a81228c0696",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "064d84f7-7460-d153-e4ae-6a81228c0696",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728366193297,
    },
    "e-338": {
      id: "e-338",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-337",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "064d84f7-7460-d153-e4ae-6a81228c0696",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "064d84f7-7460-d153-e4ae-6a81228c0696",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1728366193300,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-340" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|26f9c096-e9a2-1d35-c677-c39d8e2aa4f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|26f9c096-e9a2-1d35-c677-c39d8e2aa4f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728549899786,
    },
    "e-341": {
      id: "e-341",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-342" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66fb92314bcf4a953223a889|c8e8d001-72be-b58d-17e8-0f9ee2cc7a67",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66fb92314bcf4a953223a889|c8e8d001-72be-b58d-17e8-0f9ee2cc7a67",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1728549928986,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Btn Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["4ac647fa-99f9-c17d-74c5-f09227e79f75"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["4ac647fa-99f9-c17d-74c5-f09227e79f75"],
                },
                xValue: 5,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1727780441156,
    },
    "a-2": {
      id: "a-2",
      title: "Btn Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow",
                  selectorGuids: ["4ac647fa-99f9-c17d-74c5-f09227e79f75"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1727780441156,
    },
    "a-3": {
      id: "a-3",
      title: "Image Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cover-image",
                  selectorGuids: ["87b9c826-16a0-caba-809a-21e99ce2b304"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cover-image",
                  selectorGuids: ["87b9c826-16a0-caba-809a-21e99ce2b304"],
                },
                xValue: 1.05,
                yValue: 1.05,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1727784174740,
    },
    "a-4": {
      id: "a-4",
      title: "Image Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".cover-image",
                  selectorGuids: ["87b9c826-16a0-caba-809a-21e99ce2b304"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1727784174740,
    },
    "a-9": {
      id: "a-9",
      title: "Dropdown Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["47ee74b9-59fc-cad7-0753-35d5f0b301e4"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".plus-icon",
                  selectorGuids: ["47ee74b9-59fc-cad7-0753-35d5f0b301e3"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["47ee74b9-59fc-cad7-0753-35d5f0b301e4"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".plus-icon",
                  selectorGuids: ["47ee74b9-59fc-cad7-0753-35d5f0b301e3"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699084882215,
    },
    "a-10": {
      id: "a-10",
      title: "Dropdown Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["47ee74b9-59fc-cad7-0753-35d5f0b301e4"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".plus-icon",
                  selectorGuids: ["47ee74b9-59fc-cad7-0753-35d5f0b301e3"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699084882215,
    },
    "a-13": {
      id: "a-13",
      title: "Navbar Dropdown Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["4f2b30f5-9c10-d626-a7e5-09d6ff22d402"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-icon",
                  selectorGuids: ["483c57dc-404b-250a-c7ef-510155fa3e01"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["4f2b30f5-9c10-d626-a7e5-09d6ff22d402"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-icon",
                  selectorGuids: ["483c57dc-404b-250a-c7ef-510155fa3e01"],
                },
                zValue: 180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699084882215,
    },
    "a-14": {
      id: "a-14",
      title: "Navbar Dropdown Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-list",
                  selectorGuids: ["4f2b30f5-9c10-d626-a7e5-09d6ff22d402"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-icon",
                  selectorGuids: ["483c57dc-404b-250a-c7ef-510155fa3e01"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699084882215,
    },
    "a-15": {
      id: "a-15",
      title: "Slide Down",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".slide-up",
                  selectorGuids: ["bc66a5d3-4631-8657-b899-6e72929cb2f4"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".slide-up",
                  selectorGuids: ["bc66a5d3-4631-8657-b899-6e72929cb2f4"],
                },
                value: "block",
              },
            },
            {
              id: "a-15-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.901, 0.2, 0.187, 0.79],
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".slide-up",
                  selectorGuids: ["bc66a5d3-4631-8657-b899-6e72929cb2f4"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1727083580726,
    },
    "a-11": {
      id: "a-11",
      title: "Navbar Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c2",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c4",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-11-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c2",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c3",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c4",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c3",
                },
                xValue: 50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c2",
                },
                yValue: 8,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c4",
                },
                yValue: -8,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-9",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c2",
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-11-n-10",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c4",
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1561818688247,
    },
    "a-12": {
      id: "a-12",
      title: "Navbar Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c4",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c2",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c4",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c2",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "df56ecbe-f2e5-53e7-abc1-595b074006c3",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1561818688247,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
