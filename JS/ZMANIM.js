!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("KosherZmanim", [], t)
    : "object" == typeof exports
    ? (exports.KosherZmanim = t())
    : (e.KosherZmanim = t());
})(window, function () {
  return (
    (a = {}),
    (__webpack_require__.m = n =
      [
        function (e, t, n) {
          "use strict";
          function _defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          function _createClass(e, t, n) {
            return (
              t && _defineProperties(e.prototype, t),
              n && _defineProperties(e, n),
              e
            );
          }
          function _inheritsLoose(e, t) {
            (e.prototype = Object.create(t.prototype)),
              ((e.prototype.constructor = e).__proto__ = t);
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function _construct(e, t, n) {
            return (_construct = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()
              ? Reflect.construct
              : function (e, t, n) {
                  var a = [null];
                  a.push.apply(a, t);
                  var r = new (Function.bind.apply(e, a))();
                  return n && _setPrototypeOf(r, n.prototype), r;
                }).apply(null, arguments);
          }
          function _wrapNativeSuper(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return (_wrapNativeSuper = function (e) {
              if (
                null === e ||
                !(function (e) {
                  return (
                    -1 !== Function.toString.call(e).indexOf("[native code]")
                  );
                })(e)
              )
                return e;
              if ("function" != typeof e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, Wrapper);
              }
              function Wrapper() {
                return _construct(
                  e,
                  arguments,
                  _getPrototypeOf(this).constructor
                );
              }
              return (
                (Wrapper.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: Wrapper,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                _setPrototypeOf(Wrapper, e)
              );
            })(e);
          }
          Object.defineProperty(t, "__esModule", {
            value: !0,
          });
          var a = (function (e) {
              function LuxonError() {
                return e.apply(this, arguments) || this;
              }
              return _inheritsLoose(LuxonError, e), LuxonError;
            })(_wrapNativeSuper(Error)),
            r = (function (t) {
              function InvalidDateTimeError(e) {
                return (
                  t.call(this, "Invalid DateTime: " + e.toMessage()) || this
                );
              }
              return (
                _inheritsLoose(InvalidDateTimeError, t), InvalidDateTimeError
              );
            })(a),
            i = (function (t) {
              function InvalidIntervalError(e) {
                return (
                  t.call(this, "Invalid Interval: " + e.toMessage()) || this
                );
              }
              return (
                _inheritsLoose(InvalidIntervalError, t), InvalidIntervalError
              );
            })(a),
            o = (function (t) {
              function InvalidDurationError(e) {
                return (
                  t.call(this, "Invalid Duration: " + e.toMessage()) || this
                );
              }
              return (
                _inheritsLoose(InvalidDurationError, t), InvalidDurationError
              );
            })(a),
            O = (function (e) {
              function ConflictingSpecificationError() {
                return e.apply(this, arguments) || this;
              }
              return (
                _inheritsLoose(ConflictingSpecificationError, e),
                ConflictingSpecificationError
              );
            })(a),
            s = (function (t) {
              function InvalidUnitError(e) {
                return t.call(this, "Invalid unit " + e) || this;
              }
              return _inheritsLoose(InvalidUnitError, t), InvalidUnitError;
            })(a),
            c = (function (e) {
              function InvalidArgumentError() {
                return e.apply(this, arguments) || this;
              }
              return (
                _inheritsLoose(InvalidArgumentError, e), InvalidArgumentError
              );
            })(a),
            u = (function (e) {
              function ZoneIsAbstractError() {
                return e.call(this, "Zone is an abstract class") || this;
              }
              return (
                _inheritsLoose(ZoneIsAbstractError, e), ZoneIsAbstractError
              );
            })(a),
            l = "numeric",
            h = "short",
            m = "long",
            f = {
              year: l,
              month: l,
              day: l,
            },
            d = {
              year: l,
              month: h,
              day: l,
            },
            g = {
              year: l,
              month: m,
              day: l,
            },
            A = {
              year: l,
              month: m,
              day: l,
              weekday: m,
            },
            p = {
              hour: l,
              minute: l,
            },
            C = {
              hour: l,
              minute: l,
              second: l,
            },
            S = {
              hour: l,
              minute: l,
              second: l,
              timeZoneName: h,
            },
            E = {
              hour: l,
              minute: l,
              second: l,
              timeZoneName: m,
            },
            T = {
              hour: l,
              minute: l,
              hour12: !1,
            },
            I = {
              hour: l,
              minute: l,
              second: l,
              hour12: !1,
            },
            y = {
              hour: l,
              minute: l,
              second: l,
              hour12: !1,
              timeZoneName: h,
            },
            M = {
              hour: l,
              minute: l,
              second: l,
              hour12: !1,
              timeZoneName: m,
            },
            H = {
              year: l,
              month: l,
              day: l,
              hour: l,
              minute: l,
            },
            D = {
              year: l,
              month: l,
              day: l,
              hour: l,
              minute: l,
              second: l,
            },
            v = {
              year: l,
              month: h,
              day: l,
              hour: l,
              minute: l,
            },
            w = {
              year: l,
              month: h,
              day: l,
              hour: l,
              minute: l,
              second: l,
            },
            Z = {
              year: l,
              month: h,
              day: l,
              weekday: h,
              hour: l,
              minute: l,
            },
            N = {
              year: l,
              month: m,
              day: l,
              hour: l,
              minute: l,
              timeZoneName: h,
            },
            _ = {
              year: l,
              month: m,
              day: l,
              hour: l,
              minute: l,
              second: l,
              timeZoneName: h,
            },
            L = {
              year: l,
              month: m,
              day: l,
              weekday: m,
              hour: l,
              minute: l,
              timeZoneName: m,
            },
            R = {
              year: l,
              month: m,
              day: l,
              weekday: m,
              hour: l,
              minute: l,
              second: l,
              timeZoneName: m,
            };
          function isUndefined(e) {
            return void 0 === e;
          }
          function isNumber(e) {
            return "number" == typeof e;
          }
          function isInteger(e) {
            return "number" == typeof e && e % 1 == 0;
          }
          function hasIntl() {
            try {
              return "undefined" != typeof Intl && Intl.DateTimeFormat;
            } catch (e) {
              return !1;
            }
          }
          function hasFormatToParts() {
            return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
          }
          function hasRelative() {
            try {
              return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
            } catch (e) {
              return !1;
            }
          }
          function bestBy(e, a, r) {
            if (0 !== e.length)
              return e.reduce(function (e, t) {
                var n = [a(t), t];
                return e && r(e[0], n[0]) === e[0] ? e : n;
              }, null)[1];
          }
          function pick(n, e) {
            return e.reduce(function (e, t) {
              return (e[t] = n[t]), e;
            }, {});
          }
          function hasOwnProperty(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function integerBetween(e, t, n) {
            return isInteger(e) && t <= e && e <= n;
          }
          function padStart(e, t) {
            return (
              void 0 === t && (t = 2),
              e.toString().length < t
                ? ("0".repeat(t) + e).slice(-t)
                : e.toString()
            );
          }
          function parseInteger(e) {
            return isUndefined(e) || null === e || "" === e
              ? void 0
              : parseInt(e, 10);
          }
          function parseMillis(e) {
            if (!isUndefined(e) && null !== e && "" !== e) {
              var t = 1e3 * parseFloat("0." + e);
              return Math.floor(t);
            }
          }
          function roundTo(e, t, n) {
            void 0 === n && (n = !1);
            var a = Math.pow(10, t);
            return (n ? Math.trunc : Math.round)(e * a) / a;
          }
          function isLeapYear(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
          }
          function daysInYear(e) {
            return isLeapYear(e) ? 366 : 365;
          }
          function daysInMonth(e, t) {
            var n =
              (function (e, t) {
                return e - t * Math.floor(e / t);
              })(t - 1, 12) + 1;
            return 2 === n
              ? isLeapYear(e + (t - n) / 12)
                ? 29
                : 28
              : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
          }
          function objToLocalTS(e) {
            var t = Date.UTC(
              e.year,
              e.month - 1,
              e.day,
              e.hour,
              e.minute,
              e.second,
              e.millisecond
            );
            return (
              e.year < 100 &&
                0 <= e.year &&
                (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900),
              +t
            );
          }
          function weeksInWeekYear(e) {
            var t =
                (e +
                  Math.floor(e / 4) -
                  Math.floor(e / 100) +
                  Math.floor(e / 400)) %
                7,
              n = e - 1,
              a =
                (n +
                  Math.floor(n / 4) -
                  Math.floor(n / 100) +
                  Math.floor(n / 400)) %
                7;
            return 4 == t || 3 == a ? 53 : 52;
          }
          function untruncateYear(e) {
            return 99 < e ? e : 60 < e ? 1900 + e : 2e3 + e;
          }
          function parseZoneInfo(e, t, n, a) {
            void 0 === a && (a = null);
            var r = new Date(e),
              i = {
                hour12: !1,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              };
            a && (i.timeZone = a);
            var o = Object.assign(
                {
                  timeZoneName: t,
                },
                i
              ),
              s = hasIntl();
            if (s && hasFormatToParts()) {
              var u = new Intl.DateTimeFormat(n, o)
                .formatToParts(r)
                .find(function (e) {
                  return "timezonename" === e.type.toLowerCase();
                });
              return u ? u.value : null;
            }
            if (s) {
              var l = new Intl.DateTimeFormat(n, i).format(r);
              return new Intl.DateTimeFormat(n, o)
                .format(r)
                .substring(l.length)
                .replace(/^[, \u200e]+/, "");
            }
            return null;
          }
          function signedOffset(e, t) {
            var n = parseInt(e, 10);
            Number.isNaN(n) && (n = 0);
            var a = parseInt(t, 10) || 0;
            return 60 * n + (n < 0 || Object.is(n, -0) ? -a : a);
          }
          function asNumber(e) {
            var t = Number(e);
            if ("boolean" == typeof e || "" === e || Number.isNaN(t))
              throw new c("Invalid unit value " + e);
            return t;
          }
          function normalizeObject(e, t, n) {
            var a = {};
            for (var r in e)
              if (hasOwnProperty(e, r)) {
                if (0 <= n.indexOf(r)) continue;
                var i = e[r];
                if (null == i) continue;
                a[t(r)] = asNumber(i);
              }
            return a;
          }
          function formatOffset(e, t) {
            var n = Math.trunc(e / 60),
              a = Math.abs(e % 60),
              r = 0 <= n && !Object.is(n, -0) ? "+" : "-",
              i = r + Math.abs(n);
            switch (t) {
              case "short":
                return r + padStart(Math.abs(n), 2) + ":" + padStart(a, 2);
              case "narrow":
                return 0 < a ? i + ":" + a : i;
              case "techie":
                return r + padStart(Math.abs(n), 2) + padStart(a, 2);
              default:
                throw new RangeError(
                  "Value format " + t + " is out of range for property format"
                );
            }
          }
          function timeObject(e) {
            return pick(e, ["hour", "minute", "second", "millisecond"]);
          }
          var b =
            /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
          function stringify(e) {
            return JSON.stringify(e, Object.keys(e).sort());
          }
          var J = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            Y = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            V = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
          function months(e) {
            switch (e) {
              case "narrow":
                return V;
              case "short":
                return Y;
              case "long":
                return J;
              case "numeric":
                return [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                ];
              case "2-digit":
                return [
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
                ];
              default:
                return null;
            }
          }
          var x = [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            P = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            k = ["M", "T", "W", "T", "F", "S", "S"];
          function weekdays(e) {
            switch (e) {
              case "narrow":
                return k;
              case "short":
                return P;
              case "long":
                return x;
              case "numeric":
                return ["1", "2", "3", "4", "5", "6", "7"];
              default:
                return null;
            }
          }
          var B = ["AM", "PM"],
            U = ["Before Christ", "Anno Domini"],
            F = ["BC", "AD"],
            K = ["B", "A"];
          function eras(e) {
            switch (e) {
              case "narrow":
                return K;
              case "short":
                return F;
              case "long":
                return U;
              default:
                return null;
            }
          }
          function stringifyTokens(e, t) {
            var n = "",
              a = e,
              r = Array.isArray(a),
              i = 0;
            for (a = r ? a : a[Symbol.iterator](); ; ) {
              var o;
              if (r) {
                if (i >= a.length) break;
                o = a[i++];
              } else {
                if ((i = a.next()).done) break;
                o = i.value;
              }
              var s = o;
              s.literal ? (n += s.val) : (n += t(s.val));
            }
            return n;
          }
          var G = {
              D: f,
              DD: d,
              DDD: g,
              DDDD: A,
              t: p,
              tt: C,
              ttt: S,
              tttt: E,
              T: T,
              TT: I,
              TTT: y,
              TTTT: M,
              f: H,
              ff: v,
              fff: N,
              ffff: L,
              F: D,
              FF: w,
              FFF: _,
              FFFF: R,
            },
            j = (function () {
              function Formatter(e, t) {
                (this.opts = t), (this.loc = e), (this.systemLoc = null);
              }
              (Formatter.create = function (e, t) {
                return void 0 === t && (t = {}), new Formatter(e, t);
              }),
                (Formatter.parseFormat = function (e) {
                  for (
                    var t = null, n = "", a = !1, r = [], i = 0;
                    i < e.length;
                    i++
                  ) {
                    var o = e.charAt(i);
                    "'" === o
                      ? (0 < n.length &&
                          r.push({
                            literal: a,
                            val: n,
                          }),
                        (t = null),
                        (n = ""),
                        (a = !a))
                      : a
                      ? (n += o)
                      : o === t
                      ? (n += o)
                      : (0 < n.length &&
                          r.push({
                            literal: !1,
                            val: n,
                          }),
                        (t = n = o));
                  }
                  return (
                    0 < n.length &&
                      r.push({
                        literal: a,
                        val: n,
                      }),
                    r
                  );
                }),
                (Formatter.macroTokenToFormatOpts = function (e) {
                  return G[e];
                });
              var e = Formatter.prototype;
              return (
                (e.formatWithSystemDefault = function (e, t) {
                  return (
                    null === this.systemLoc &&
                      (this.systemLoc = this.loc.redefaultToSystem()),
                    this.systemLoc
                      .dtFormatter(e, Object.assign({}, this.opts, t))
                      .format()
                  );
                }),
                (e.formatDateTime = function (e, t) {
                  return (
                    void 0 === t && (t = {}),
                    this.loc
                      .dtFormatter(e, Object.assign({}, this.opts, t))
                      .format()
                  );
                }),
                (e.formatDateTimeParts = function (e, t) {
                  return (
                    void 0 === t && (t = {}),
                    this.loc
                      .dtFormatter(e, Object.assign({}, this.opts, t))
                      .formatToParts()
                  );
                }),
                (e.resolvedOptions = function (e, t) {
                  return (
                    void 0 === t && (t = {}),
                    this.loc
                      .dtFormatter(e, Object.assign({}, this.opts, t))
                      .resolvedOptions()
                  );
                }),
                (e.num = function (e, t) {
                  if ((void 0 === t && (t = 0), this.opts.forceSimple))
                    return padStart(e, t);
                  var n = Object.assign({}, this.opts);
                  return (
                    0 < t && (n.padTo = t),
                    this.loc.numberFormatter(n).format(e)
                  );
                }),
                (e.formatDateTimeFromString = function (n, e) {
                  function Bf(e, t) {
                    return a.loc.extract(n, e, t);
                  }
                  function Cf(e) {
                    return n.isOffsetFixed && 0 === n.offset && e.allowZ
                      ? "Z"
                      : n.isValid
                      ? n.zone.formatOffset(n.ts, e.format)
                      : "";
                  }
                  function Df() {
                    return r
                      ? (function (e) {
                          return B[e.hour < 12 ? 0 : 1];
                        })(n)
                      : Bf(
                          {
                            hour: "numeric",
                            hour12: !0,
                          },
                          "dayperiod"
                        );
                  }
                  function Ef(e, t) {
                    return r
                      ? (function (e, t) {
                          return months(t)[e.month - 1];
                        })(n, e)
                      : Bf(
                          t
                            ? {
                                month: e,
                              }
                            : {
                                month: e,
                                day: "numeric",
                              },
                          "month"
                        );
                  }
                  function Ff(e, t) {
                    return r
                      ? (function (e, t) {
                          return weekdays(t)[e.weekday - 1];
                        })(n, e)
                      : Bf(
                          t
                            ? {
                                weekday: e,
                              }
                            : {
                                weekday: e,
                                month: "long",
                                day: "numeric",
                              },
                          "weekday"
                        );
                  }
                  function Hf(e) {
                    return r
                      ? (function (e, t) {
                          return eras(t)[e.year < 0 ? 0 : 1];
                        })(n, e)
                      : Bf(
                          {
                            era: e,
                          },
                          "era"
                        );
                  }
                  var a = this,
                    r = "en" === this.loc.listingMode(),
                    t =
                      this.loc.outputCalendar &&
                      "gregory" !== this.loc.outputCalendar &&
                      hasFormatToParts();
                  return stringifyTokens(
                    Formatter.parseFormat(e),
                    function (e) {
                      switch (e) {
                        case "S":
                          return a.num(n.millisecond);
                        case "u":
                        case "SSS":
                          return a.num(n.millisecond, 3);
                        case "s":
                          return a.num(n.second);
                        case "ss":
                          return a.num(n.second, 2);
                        case "m":
                          return a.num(n.minute);
                        case "mm":
                          return a.num(n.minute, 2);
                        case "h":
                          return a.num(n.hour % 12 == 0 ? 12 : n.hour % 12);
                        case "hh":
                          return a.num(n.hour % 12 == 0 ? 12 : n.hour % 12, 2);
                        case "H":
                          return a.num(n.hour);
                        case "HH":
                          return a.num(n.hour, 2);
                        case "Z":
                          return Cf({
                            format: "narrow",
                            allowZ: a.opts.allowZ,
                          });
                        case "ZZ":
                          return Cf({
                            format: "short",
                            allowZ: a.opts.allowZ,
                          });
                        case "ZZZ":
                          return Cf({
                            format: "techie",
                            allowZ: !1,
                          });
                        case "ZZZZ":
                          return n.zone.offsetName(n.ts, {
                            format: "short",
                            locale: a.loc.locale,
                          });
                        case "ZZZZZ":
                          return n.zone.offsetName(n.ts, {
                            format: "long",
                            locale: a.loc.locale,
                          });
                        case "z":
                          return n.zoneName;
                        case "a":
                          return Df();
                        case "d":
                          return t
                            ? Bf(
                                {
                                  day: "numeric",
                                },
                                "day"
                              )
                            : a.num(n.day);
                        case "dd":
                          return t
                            ? Bf(
                                {
                                  day: "2-digit",
                                },
                                "day"
                              )
                            : a.num(n.day, 2);
                        case "c":
                          return a.num(n.weekday);
                        case "ccc":
                          return Ff("short", !0);
                        case "cccc":
                          return Ff("long", !0);
                        case "ccccc":
                          return Ff("narrow", !0);
                        case "E":
                          return a.num(n.weekday);
                        case "EEE":
                          return Ff("short", !1);
                        case "EEEE":
                          return Ff("long", !1);
                        case "EEEEE":
                          return Ff("narrow", !1);
                        case "L":
                          return t
                            ? Bf(
                                {
                                  month: "numeric",
                                  day: "numeric",
                                },
                                "month"
                              )
                            : a.num(n.month);
                        case "LL":
                          return t
                            ? Bf(
                                {
                                  month: "2-digit",
                                  day: "numeric",
                                },
                                "month"
                              )
                            : a.num(n.month, 2);
                        case "LLL":
                          return Ef("short", !0);
                        case "LLLL":
                          return Ef("long", !0);
                        case "LLLLL":
                          return Ef("narrow", !0);
                        case "M":
                          return t
                            ? Bf(
                                {
                                  month: "numeric",
                                },
                                "month"
                              )
                            : a.num(n.month);
                        case "MM":
                          return t
                            ? Bf(
                                {
                                  month: "2-digit",
                                },
                                "month"
                              )
                            : a.num(n.month, 2);
                        case "MMM":
                          return Ef("short", !1);
                        case "MMMM":
                          return Ef("long", !1);
                        case "MMMMM":
                          return Ef("narrow", !1);
                        case "y":
                          return t
                            ? Bf(
                                {
                                  year: "numeric",
                                },
                                "year"
                              )
                            : a.num(n.year);
                        case "yy":
                          return t
                            ? Bf(
                                {
                                  year: "2-digit",
                                },
                                "year"
                              )
                            : a.num(n.year.toString().slice(-2), 2);
                        case "yyyy":
                          return t
                            ? Bf(
                                {
                                  year: "numeric",
                                },
                                "year"
                              )
                            : a.num(n.year, 4);
                        case "yyyyyy":
                          return t
                            ? Bf(
                                {
                                  year: "numeric",
                                },
                                "year"
                              )
                            : a.num(n.year, 6);
                        case "G":
                          return Hf("short");
                        case "GG":
                          return Hf("long");
                        case "GGGGG":
                          return Hf("narrow");
                        case "kk":
                          return a.num(n.weekYear.toString().slice(-2), 2);
                        case "kkkk":
                          return a.num(n.weekYear, 4);
                        case "W":
                          return a.num(n.weekNumber);
                        case "WW":
                          return a.num(n.weekNumber, 2);
                        case "o":
                          return a.num(n.ordinal);
                        case "ooo":
                          return a.num(n.ordinal, 3);
                        case "q":
                          return a.num(n.quarter);
                        case "qq":
                          return a.num(n.quarter, 2);
                        case "X":
                          return a.num(Math.floor(n.ts / 1e3));
                        case "x":
                          return a.num(n.ts);
                        default:
                          return (function (e) {
                            var t = Formatter.macroTokenToFormatOpts(e);
                            return t ? a.formatWithSystemDefault(n, t) : e;
                          })(e);
                      }
                    }
                  );
                }),
                (e.formatDurationFromString = function (e, t) {
                  function Xf(e) {
                    switch (e[0]) {
                      case "S":
                        return "millisecond";
                      case "s":
                        return "second";
                      case "m":
                        return "minute";
                      case "h":
                        return "hour";
                      case "d":
                        return "day";
                      case "M":
                        return "month";
                      case "y":
                        return "year";
                      default:
                        return null;
                    }
                  }
                  var n,
                    a = this,
                    r = Formatter.parseFormat(t),
                    i = r.reduce(function (e, t) {
                      var n = t.literal,
                        a = t.val;
                      return n ? e : e.concat(a);
                    }, []),
                    o = e.shiftTo.apply(
                      e,
                      i.map(Xf).filter(function (e) {
                        return e;
                      })
                    );
                  return stringifyTokens(
                    r,
                    ((n = o),
                    function (e) {
                      var t = Xf(e);
                      return t ? a.num(n.get(t), e.length) : e;
                    })
                  );
                }),
                Formatter
              );
            })(),
            z = (function () {
              function Invalid(e, t) {
                (this.reason = e), (this.explanation = t);
              }
              return (
                (Invalid.prototype.toMessage = function () {
                  return this.explanation
                    ? this.reason + ": " + this.explanation
                    : this.reason;
                }),
                Invalid
              );
            })(),
            q = (function () {
              function Zone() {}
              var e = Zone.prototype;
              return (
                (e.offsetName = function (e, t) {
                  throw new u();
                }),
                (e.formatOffset = function (e, t) {
                  throw new u();
                }),
                (e.offset = function (e) {
                  throw new u();
                }),
                (e.equals = function (e) {
                  throw new u();
                }),
                _createClass(Zone, [
                  {
                    key: "type",
                    get: function () {
                      throw new u();
                    },
                  },
                  {
                    key: "name",
                    get: function () {
                      throw new u();
                    },
                  },
                  {
                    key: "universal",
                    get: function () {
                      throw new u();
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      throw new u();
                    },
                  },
                ]),
                Zone
              );
            })(),
            W = null,
            X = (function (e) {
              function LocalZone() {
                return e.apply(this, arguments) || this;
              }
              _inheritsLoose(LocalZone, e);
              var t = LocalZone.prototype;
              return (
                (t.offsetName = function (e, t) {
                  return parseZoneInfo(e, t.format, t.locale);
                }),
                (t.formatOffset = function (e, t) {
                  return formatOffset(this.offset(e), t);
                }),
                (t.offset = function (e) {
                  return -new Date(e).getTimezoneOffset();
                }),
                (t.equals = function (e) {
                  return "local" === e.type;
                }),
                _createClass(
                  LocalZone,
                  [
                    {
                      key: "type",
                      get: function () {
                        return "local";
                      },
                    },
                    {
                      key: "name",
                      get: function () {
                        return hasIntl()
                          ? new Intl.DateTimeFormat().resolvedOptions().timeZone
                          : "local";
                      },
                    },
                    {
                      key: "universal",
                      get: function () {
                        return !1;
                      },
                    },
                    {
                      key: "isValid",
                      get: function () {
                        return !0;
                      },
                    },
                  ],
                  [
                    {
                      key: "instance",
                      get: function () {
                        return null === W && (W = new LocalZone()), W;
                      },
                    },
                  ]
                ),
                LocalZone
              );
            })(q),
            $ = RegExp("^" + b.source + "$"),
            Q = {};
          var ee = {
            year: 0,
            month: 1,
            day: 2,
            hour: 3,
            minute: 4,
            second: 5,
          };
          var te = {},
            ne = (function (n) {
              function IANAZone(e) {
                var t;
                return (
                  ((t = n.call(this) || this).zoneName = e),
                  (t.valid = IANAZone.isValidZone(e)),
                  t
                );
              }
              _inheritsLoose(IANAZone, n),
                (IANAZone.create = function (e) {
                  return te[e] || (te[e] = new IANAZone(e)), te[e];
                }),
                (IANAZone.resetCache = function () {
                  (te = {}), (Q = {});
                }),
                (IANAZone.isValidSpecifier = function (e) {
                  return !(!e || !e.match($));
                }),
                (IANAZone.isValidZone = function (e) {
                  try {
                    return (
                      new Intl.DateTimeFormat("en-US", {
                        timeZone: e,
                      }).format(),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                }),
                (IANAZone.parseGMTOffset = function (e) {
                  if (e) {
                    var t = e.match(/^Etc\/GMT([+-]\d{1,2})$/i);
                    if (t) return -60 * parseInt(t[1]);
                  }
                  return null;
                });
              var e = IANAZone.prototype;
              return (
                (e.offsetName = function (e, t) {
                  return parseZoneInfo(e, t.format, t.locale, this.name);
                }),
                (e.formatOffset = function (e, t) {
                  return formatOffset(this.offset(e), t);
                }),
                (e.offset = function (e) {
                  var t = new Date(e),
                    n = (function (e) {
                      return (
                        Q[e] ||
                          (Q[e] = new Intl.DateTimeFormat("en-US", {
                            hour12: !1,
                            timeZone: e,
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })),
                        Q[e]
                      );
                    })(this.name),
                    a = n.formatToParts
                      ? (function (e, t) {
                          for (
                            var n = e.formatToParts(t), a = [], r = 0;
                            r < n.length;
                            r++
                          ) {
                            var i = n[r],
                              o = i.type,
                              s = i.value,
                              u = ee[o];
                            isUndefined(u) || (a[u] = parseInt(s, 10));
                          }
                          return a;
                        })(n, t)
                      : (function (e, t) {
                          var n = e.format(t).replace(/\u200E/g, ""),
                            a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(
                              n
                            ),
                            r = a[1],
                            i = a[2];
                          return [a[3], r, i, a[4], a[5], a[6]];
                        })(n, t),
                    r = a[0],
                    i = a[1],
                    o = a[2],
                    s = a[3],
                    u = +t,
                    l = u % 1e3;
                  return (
                    (objToLocalTS({
                      year: r,
                      month: i,
                      day: o,
                      hour: 24 === s ? 0 : s,
                      minute: a[4],
                      second: a[5],
                      millisecond: 0,
                    }) -
                      (u -= 0 <= l ? l : 1e3 + l)) /
                    6e4
                  );
                }),
                (e.equals = function (e) {
                  return "iana" === e.type && e.name === this.name;
                }),
                _createClass(IANAZone, [
                  {
                    key: "type",
                    get: function () {
                      return "iana";
                    },
                  },
                  {
                    key: "name",
                    get: function () {
                      return this.zoneName;
                    },
                  },
                  {
                    key: "universal",
                    get: function () {
                      return !1;
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      return this.valid;
                    },
                  },
                ]),
                IANAZone
              );
            })(q),
            ae = null,
            re = (function (n) {
              function FixedOffsetZone(e) {
                var t;
                return ((t = n.call(this) || this).fixed = e), t;
              }
              _inheritsLoose(FixedOffsetZone, n),
                (FixedOffsetZone.instance = function (e) {
                  return 0 === e
                    ? FixedOffsetZone.utcInstance
                    : new FixedOffsetZone(e);
                }),
                (FixedOffsetZone.parseSpecifier = function (e) {
                  if (e) {
                    var t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                    if (t) return new FixedOffsetZone(signedOffset(t[1], t[2]));
                  }
                  return null;
                }),
                _createClass(FixedOffsetZone, null, [
                  {
                    key: "utcInstance",
                    get: function () {
                      return null === ae && (ae = new FixedOffsetZone(0)), ae;
                    },
                  },
                ]);
              var e = FixedOffsetZone.prototype;
              return (
                (e.offsetName = function () {
                  return this.name;
                }),
                (e.formatOffset = function (e, t) {
                  return formatOffset(this.fixed, t);
                }),
                (e.offset = function () {
                  return this.fixed;
                }),
                (e.equals = function (e) {
                  return "fixed" === e.type && e.fixed === this.fixed;
                }),
                _createClass(FixedOffsetZone, [
                  {
                    key: "type",
                    get: function () {
                      return "fixed";
                    },
                  },
                  {
                    key: "name",
                    get: function () {
                      return 0 === this.fixed
                        ? "UTC"
                        : "UTC" + formatOffset(this.fixed, "narrow");
                    },
                  },
                  {
                    key: "universal",
                    get: function () {
                      return !0;
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      return !0;
                    },
                  },
                ]),
                FixedOffsetZone
              );
            })(q),
            ie = (function (n) {
              function InvalidZone(e) {
                var t;
                return ((t = n.call(this) || this).zoneName = e), t;
              }
              _inheritsLoose(InvalidZone, n);
              var e = InvalidZone.prototype;
              return (
                (e.offsetName = function () {
                  return null;
                }),
                (e.formatOffset = function () {
                  return "";
                }),
                (e.offset = function () {
                  return NaN;
                }),
                (e.equals = function () {
                  return !1;
                }),
                _createClass(InvalidZone, [
                  {
                    key: "type",
                    get: function () {
                      return "invalid";
                    },
                  },
                  {
                    key: "name",
                    get: function () {
                      return this.zoneName;
                    },
                  },
                  {
                    key: "universal",
                    get: function () {
                      return !1;
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      return !1;
                    },
                  },
                ]),
                InvalidZone
              );
            })(q);
          function normalizeZone(e, t) {
            var n;
            if (isUndefined(e) || null === e) return t;
            if (e instanceof q) return e;
            if (
              (function (e) {
                return "string" == typeof e;
              })(e)
            ) {
              var a = e.toLowerCase();
              return "local" === a
                ? t
                : "utc" === a || "gmt" === a
                ? re.utcInstance
                : null != (n = ne.parseGMTOffset(e))
                ? re.instance(n)
                : ne.isValidSpecifier(a)
                ? ne.create(e)
                : re.parseSpecifier(a) || new ie(e);
            }
            return isNumber(e)
              ? re.instance(e)
              : "object" == typeof e && e.offset && "number" == typeof e.offset
              ? e
              : new ie(e);
          }
          var oe = function () {
              return Date.now();
            },
            se = null,
            ue = null,
            le = null,
            he = null,
            me = !1,
            ce = (function () {
              function Settings() {}
              return (
                (Settings.resetCaches = function () {
                  Ee.resetCache(), ne.resetCache();
                }),
                _createClass(Settings, null, [
                  {
                    key: "now",
                    get: function () {
                      return oe;
                    },
                    set: function (e) {
                      oe = e;
                    },
                  },
                  {
                    key: "defaultZoneName",
                    get: function () {
                      return Settings.defaultZone.name;
                    },
                    set: function (e) {
                      se = e ? normalizeZone(e) : null;
                    },
                  },
                  {
                    key: "defaultZone",
                    get: function () {
                      return se || X.instance;
                    },
                  },
                  {
                    key: "defaultLocale",
                    get: function () {
                      return ue;
                    },
                    set: function (e) {
                      ue = e;
                    },
                  },
                  {
                    key: "defaultNumberingSystem",
                    get: function () {
                      return le;
                    },
                    set: function (e) {
                      le = e;
                    },
                  },
                  {
                    key: "defaultOutputCalendar",
                    get: function () {
                      return he;
                    },
                    set: function (e) {
                      he = e;
                    },
                  },
                  {
                    key: "throwOnInvalid",
                    get: function () {
                      return me;
                    },
                    set: function (e) {
                      me = e;
                    },
                  },
                ]),
                Settings
              );
            })(),
            fe = {};
          function getCachedDTF(e, t) {
            void 0 === t && (t = {});
            var n = JSON.stringify([e, t]),
              a = fe[n];
            return a || ((a = new Intl.DateTimeFormat(e, t)), (fe[n] = a)), a;
          }
          var de = {};
          var ge = {};
          function getCachedRTF(e, t) {
            void 0 === t && (t = {});
            var n = t,
              a =
                (n.base,
                (function (e, t) {
                  if (null == e) return {};
                  var n,
                    a,
                    r = {},
                    i = Object.keys(e);
                  for (a = 0; a < i.length; a++)
                    (n = i[a]), 0 <= t.indexOf(n) || (r[n] = e[n]);
                  return r;
                })(n, ["base"])),
              r = JSON.stringify([e, a]),
              i = ge[r];
            return (
              i || ((i = new Intl.RelativeTimeFormat(e, t)), (ge[r] = i)), i
            );
          }
          var Ae = null;
          function listStuff(e, t, n, a, r) {
            var i = e.listingMode(n);
            return "error" === i ? null : "en" === i ? a(t) : r(t);
          }
          var pe = (function () {
              function PolyNumberFormatter(e, t, n) {
                if (
                  ((this.padTo = n.padTo || 0),
                  (this.floor = n.floor || !1),
                  !t && hasIntl())
                ) {
                  var a = {
                    useGrouping: !1,
                  };
                  0 < n.padTo && (a.minimumIntegerDigits = n.padTo),
                    (this.inf = (function (e, t) {
                      void 0 === t && (t = {});
                      var n = JSON.stringify([e, t]),
                        a = de[n];
                      return (
                        a || ((a = new Intl.NumberFormat(e, t)), (de[n] = a)), a
                      );
                    })(e, a));
                }
              }
              return (
                (PolyNumberFormatter.prototype.format = function (e) {
                  if (this.inf) {
                    var t = this.floor ? Math.floor(e) : e;
                    return this.inf.format(t);
                  }
                  return padStart(
                    this.floor ? Math.floor(e) : roundTo(e, 3),
                    this.padTo
                  );
                }),
                PolyNumberFormatter
              );
            })(),
            Ce = (function () {
              function PolyDateFormatter(e, t, n) {
                var a;
                if (
                  ((this.opts = n),
                  (this.hasIntl = hasIntl()),
                  e.zone.universal && this.hasIntl
                    ? ((a = "UTC"),
                      n.timeZoneName
                        ? (this.dt = e)
                        : (this.dt =
                            0 === e.offset
                              ? e
                              : St.fromMillis(e.ts + 60 * e.offset * 1e3)))
                    : "local" === e.zone.type
                    ? (this.dt = e)
                    : (a = (this.dt = e).zone.name),
                  this.hasIntl)
                ) {
                  var r = Object.assign({}, this.opts);
                  a && (r.timeZone = a), (this.dtf = getCachedDTF(t, r));
                }
              }
              var e = PolyDateFormatter.prototype;
              return (
                (e.format = function () {
                  if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
                  var e = (function (e) {
                      var t = "EEEE, LLLL d, yyyy, h:mm a";
                      switch (
                        stringify(
                          pick(e, [
                            "weekday",
                            "era",
                            "year",
                            "month",
                            "day",
                            "hour",
                            "minute",
                            "second",
                            "timeZoneName",
                            "hour12",
                          ])
                        )
                      ) {
                        case stringify(f):
                          return "M/d/yyyy";
                        case stringify(d):
                          return "LLL d, yyyy";
                        case stringify(g):
                          return "LLLL d, yyyy";
                        case stringify(A):
                          return "EEEE, LLLL d, yyyy";
                        case stringify(p):
                          return "h:mm a";
                        case stringify(C):
                          return "h:mm:ss a";
                        case stringify(S):
                        case stringify(E):
                          return "h:mm a";
                        case stringify(T):
                          return "HH:mm";
                        case stringify(I):
                          return "HH:mm:ss";
                        case stringify(y):
                        case stringify(M):
                          return "HH:mm";
                        case stringify(H):
                          return "M/d/yyyy, h:mm a";
                        case stringify(v):
                          return "LLL d, yyyy, h:mm a";
                        case stringify(N):
                          return "LLLL d, yyyy, h:mm a";
                        case stringify(L):
                          return t;
                        case stringify(D):
                          return "M/d/yyyy, h:mm:ss a";
                        case stringify(w):
                          return "LLL d, yyyy, h:mm:ss a";
                        case stringify(Z):
                          return "EEE, d LLL yyyy, h:mm a";
                        case stringify(_):
                          return "LLLL d, yyyy, h:mm:ss a";
                        case stringify(R):
                          return "EEEE, LLLL d, yyyy, h:mm:ss a";
                        default:
                          return t;
                      }
                    })(this.opts),
                    t = Ee.create("en-US");
                  return j.create(t).formatDateTimeFromString(this.dt, e);
                }),
                (e.formatToParts = function () {
                  return this.hasIntl && hasFormatToParts()
                    ? this.dtf.formatToParts(this.dt.toJSDate())
                    : [];
                }),
                (e.resolvedOptions = function () {
                  return this.hasIntl
                    ? this.dtf.resolvedOptions()
                    : {
                        locale: "en-US",
                        numberingSystem: "latn",
                        outputCalendar: "gregory",
                      };
                }),
                PolyDateFormatter
              );
            })(),
            Se = (function () {
              function PolyRelFormatter(e, t, n) {
                (this.opts = Object.assign(
                  {
                    style: "long",
                  },
                  n
                )),
                  !t && hasRelative() && (this.rtf = getCachedRTF(e, n));
              }
              var e = PolyRelFormatter.prototype;
              return (
                (e.format = function (e, t) {
                  return this.rtf
                    ? this.rtf.format(e, t)
                    : (function (e, t, n, a) {
                        void 0 === n && (n = "always"),
                          void 0 === a && (a = !1);
                        var r = {
                            years: ["year", "yr."],
                            quarters: ["quarter", "qtr."],
                            months: ["month", "mo."],
                            weeks: ["week", "wk."],
                            days: ["day", "day", "days"],
                            hours: ["hour", "hr."],
                            minutes: ["minute", "min."],
                            seconds: ["second", "sec."],
                          },
                          i = -1 === ["hours", "minutes", "seconds"].indexOf(e);
                        if ("auto" === n && i) {
                          var o = "days" === e;
                          switch (t) {
                            case 1:
                              return o ? "tomorrow" : "next " + r[e][0];
                            case -1:
                              return o ? "yesterday" : "last " + r[e][0];
                            case 0:
                              return o ? "today" : "this " + r[e][0];
                          }
                        }
                        var s = Object.is(t, -0) || t < 0,
                          u = Math.abs(t),
                          l = 1 === u,
                          h = r[e],
                          m = a ? (l ? h[1] : h[2] || h[1]) : l ? r[e][0] : e;
                        return s ? u + " " + m + " ago" : "in " + u + " " + m;
                      })(t, e, this.opts.numeric, "long" !== this.opts.style);
                }),
                (e.formatToParts = function (e, t) {
                  return this.rtf ? this.rtf.formatToParts(e, t) : [];
                }),
                PolyRelFormatter
              );
            })(),
            Ee = (function () {
              function Locale(e, t, n, a) {
                var r = (function (e) {
                    var t = e.indexOf("-u-");
                    if (-1 === t) return [e];
                    var n,
                      a = e.substring(0, t);
                    try {
                      n = getCachedDTF(e).resolvedOptions();
                    } catch (e) {
                      n = getCachedDTF(a).resolvedOptions();
                    }
                    var r = n;
                    return [a, r.numberingSystem, r.calendar];
                  })(e),
                  i = r[0],
                  o = r[1],
                  s = r[2];
                (this.locale = i),
                  (this.numberingSystem = t || o || null),
                  (this.outputCalendar = n || s || null),
                  (this.intl = (function (e, t, n) {
                    return hasIntl()
                      ? ((n || t) &&
                          ((e += "-u"),
                          n && (e += "-ca-" + n),
                          t && (e += "-nu-" + t)),
                        e)
                      : [];
                  })(this.locale, this.numberingSystem, this.outputCalendar)),
                  (this.weekdaysCache = {
                    format: {},
                    standalone: {},
                  }),
                  (this.monthsCache = {
                    format: {},
                    standalone: {},
                  }),
                  (this.meridiemCache = null),
                  (this.eraCache = {}),
                  (this.specifiedLocale = a),
                  (this.fastNumbersCached = null);
              }
              (Locale.fromOpts = function (e) {
                return Locale.create(
                  e.locale,
                  e.numberingSystem,
                  e.outputCalendar,
                  e.defaultToEN
                );
              }),
                (Locale.create = function (e, t, n, a) {
                  void 0 === a && (a = !1);
                  var r = e || ce.defaultLocale;
                  return new Locale(
                    r ||
                      (a
                        ? "en-US"
                        : (function () {
                            if (Ae) return Ae;
                            if (hasIntl()) {
                              var e =
                                new Intl.DateTimeFormat().resolvedOptions()
                                  .locale;
                              return (Ae = e && "und" !== e ? e : "en-US");
                            }
                            return (Ae = "en-US");
                          })()),
                    t || ce.defaultNumberingSystem,
                    n || ce.defaultOutputCalendar,
                    r
                  );
                }),
                (Locale.resetCache = function () {
                  (Ae = null), (fe = {}), (de = {}), (ge = {});
                }),
                (Locale.fromObject = function (e) {
                  var t = void 0 === e ? {} : e,
                    n = t.locale,
                    a = t.numberingSystem,
                    r = t.outputCalendar;
                  return Locale.create(n, a, r);
                });
              var e = Locale.prototype;
              return (
                (e.listingMode = function (e) {
                  void 0 === e && (e = !0);
                  var t = hasIntl() && hasFormatToParts(),
                    n = this.isEnglish(),
                    a = !(
                      (null !== this.numberingSystem &&
                        "latn" !== this.numberingSystem) ||
                      (null !== this.outputCalendar &&
                        "gregory" !== this.outputCalendar)
                    );
                  return t || (n && a) || e
                    ? !t || (n && a)
                      ? "en"
                      : "intl"
                    : "error";
                }),
                (e.clone = function (e) {
                  return e && 0 !== Object.getOwnPropertyNames(e).length
                    ? Locale.create(
                        e.locale || this.specifiedLocale,
                        e.numberingSystem || this.numberingSystem,
                        e.outputCalendar || this.outputCalendar,
                        e.defaultToEN || !1
                      )
                    : this;
                }),
                (e.redefaultToEN = function (e) {
                  return (
                    void 0 === e && (e = {}),
                    this.clone(
                      Object.assign({}, e, {
                        defaultToEN: !0,
                      })
                    )
                  );
                }),
                (e.redefaultToSystem = function (e) {
                  return (
                    void 0 === e && (e = {}),
                    this.clone(
                      Object.assign({}, e, {
                        defaultToEN: !1,
                      })
                    )
                  );
                }),
                (e.months = function (n, a, e) {
                  var r = this;
                  return (
                    void 0 === a && (a = !1),
                    void 0 === e && (e = !0),
                    listStuff(this, n, e, months, function () {
                      var t = a
                          ? {
                              month: n,
                              day: "numeric",
                            }
                          : {
                              month: n,
                            },
                        e = a ? "format" : "standalone";
                      return (
                        r.monthsCache[e][n] ||
                          (r.monthsCache[e][n] = (function (e) {
                            for (var t = [], n = 1; n <= 12; n++) {
                              var a = St.utc(2016, n, 1);
                              t.push(e(a));
                            }
                            return t;
                          })(function (e) {
                            return r.extract(e, t, "month");
                          })),
                        r.monthsCache[e][n]
                      );
                    })
                  );
                }),
                (e.weekdays = function (n, a, e) {
                  var r = this;
                  return (
                    void 0 === a && (a = !1),
                    void 0 === e && (e = !0),
                    listStuff(this, n, e, weekdays, function () {
                      var t = a
                          ? {
                              weekday: n,
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          : {
                              weekday: n,
                            },
                        e = a ? "format" : "standalone";
                      return (
                        r.weekdaysCache[e][n] ||
                          (r.weekdaysCache[e][n] = (function (e) {
                            for (var t = [], n = 1; n <= 7; n++) {
                              var a = St.utc(2016, 11, 13 + n);
                              t.push(e(a));
                            }
                            return t;
                          })(function (e) {
                            return r.extract(e, t, "weekday");
                          })),
                        r.weekdaysCache[e][n]
                      );
                    })
                  );
                }),
                (e.meridiems = function (e) {
                  var n = this;
                  return (
                    void 0 === e && (e = !0),
                    listStuff(
                      this,
                      void 0,
                      e,
                      function () {
                        return B;
                      },
                      function () {
                        if (!n.meridiemCache) {
                          var t = {
                            hour: "numeric",
                            hour12: !0,
                          };
                          n.meridiemCache = [
                            St.utc(2016, 11, 13, 9),
                            St.utc(2016, 11, 13, 19),
                          ].map(function (e) {
                            return n.extract(e, t, "dayperiod");
                          });
                        }
                        return n.meridiemCache;
                      }
                    )
                  );
                }),
                (e.eras = function (e, t) {
                  var n = this;
                  return (
                    void 0 === t && (t = !0),
                    listStuff(this, e, t, eras, function () {
                      var t = {
                        era: e,
                      };
                      return (
                        n.eraCache[e] ||
                          (n.eraCache[e] = [
                            St.utc(-40, 1, 1),
                            St.utc(2017, 1, 1),
                          ].map(function (e) {
                            return n.extract(e, t, "era");
                          })),
                        n.eraCache[e]
                      );
                    })
                  );
                }),
                (e.extract = function (e, t, n) {
                  var a = this.dtFormatter(e, t)
                    .formatToParts()
                    .find(function (e) {
                      return e.type.toLowerCase() === n;
                    });
                  return a ? a.value : null;
                }),
                (e.numberFormatter = function (e) {
                  return (
                    void 0 === e && (e = {}),
                    new pe(this.intl, e.forceSimple || this.fastNumbers, e)
                  );
                }),
                (e.dtFormatter = function (e, t) {
                  return void 0 === t && (t = {}), new Ce(e, this.intl, t);
                }),
                (e.relFormatter = function (e) {
                  return (
                    void 0 === e && (e = {}),
                    new Se(this.intl, this.isEnglish(), e)
                  );
                }),
                (e.isEnglish = function () {
                  return (
                    "en" === this.locale ||
                    "en-us" === this.locale.toLowerCase() ||
                    (hasIntl() &&
                      new Intl.DateTimeFormat(this.intl)
                        .resolvedOptions()
                        .locale.startsWith("en-us"))
                  );
                }),
                (e.equals = function (e) {
                  return (
                    this.locale === e.locale &&
                    this.numberingSystem === e.numberingSystem &&
                    this.outputCalendar === e.outputCalendar
                  );
                }),
                _createClass(Locale, [
                  {
                    key: "fastNumbers",
                    get: function () {
                      return (
                        null == this.fastNumbersCached &&
                          (this.fastNumbersCached = (function (e) {
                            return (
                              (!e.numberingSystem ||
                                "latn" === e.numberingSystem) &&
                              ("latn" === e.numberingSystem ||
                                !e.locale ||
                                e.locale.startsWith("en") ||
                                (hasIntl() &&
                                  "latn" ===
                                    new Intl.DateTimeFormat(
                                      e.intl
                                    ).resolvedOptions().numberingSystem))
                            );
                          })(this)),
                        this.fastNumbersCached
                      );
                    },
                  },
                ]),
                Locale
              );
            })();
          function combineRegexes() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var a = t.reduce(function (e, t) {
              return e + t.source;
            }, "");
            return RegExp("^" + a + "$");
          }
          function combineExtractors() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (l) {
              return t
                .reduce(
                  function (e, t) {
                    var n = e[0],
                      a = e[1],
                      r = e[2],
                      i = t(l, r),
                      o = i[0],
                      s = i[1],
                      u = i[2];
                    return [Object.assign(n, o), a || s, u];
                  },
                  [{}, null, 1]
                )
                .slice(0, 2);
            };
          }
          function parse(e) {
            if (null == e) return [null, null];
            for (
              var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), a = 1;
              a < t;
              a++
            )
              n[a - 1] = arguments[a];
            for (var r = 0, i = n; r < i.length; r++) {
              var o = i[r],
                s = o[0],
                u = o[1],
                l = s.exec(e);
              if (l) return u(l);
            }
            return [null, null];
          }
          function simpleParse() {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
              r[t] = arguments[t];
            return function (e, t) {
              var n,
                a = {};
              for (n = 0; n < r.length; n++) a[r[n]] = parseInteger(e[t + n]);
              return [a, null, t + n];
            };
          }
          var Te = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
            Ie = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
            ye = RegExp("" + Ie.source + Te.source + "?"),
            Oe = RegExp("(?:T" + ye.source + ")?"),
            Me = simpleParse("weekYear", "weekNumber", "weekDay"),
            He = simpleParse("year", "ordinal"),
            De = RegExp(
              Ie.source + " ?(?:" + Te.source + "|(" + b.source + "))?"
            ),
            ve = RegExp("(?: " + De.source + ")?");
          function int(e, t, n) {
            var a = e[t];
            return isUndefined(a) ? n : parseInteger(a);
          }
          function extractISOYmd(e, t) {
            return [
              {
                year: int(e, t),
                month: int(e, t + 1, 1),
                day: int(e, t + 2, 1),
              },
              null,
              t + 3,
            ];
          }
          function extractISOTime(e, t) {
            return [
              {
                hour: int(e, t, 0),
                minute: int(e, t + 1, 0),
                second: int(e, t + 2, 0),
                millisecond: parseMillis(e[t + 3]),
              },
              null,
              t + 4,
            ];
          }
          function extractISOOffset(e, t) {
            var n = !e[t] && !e[t + 1],
              a = signedOffset(e[t + 1], e[t + 2]);
            return [{}, n ? null : re.instance(a), t + 3];
          }
          function extractIANAZone(e, t) {
            return [{}, e[t] ? ne.create(e[t]) : null, t + 1];
          }
          var we =
            /^P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?)$/;
          function extractISODuration(e) {
            var t = e[1],
              n = e[2],
              a = e[3],
              r = e[4],
              i = e[5],
              o = e[6],
              s = e[7],
              u = e[8];
            return [
              {
                years: parseInteger(t),
                months: parseInteger(n),
                weeks: parseInteger(a),
                days: parseInteger(r),
                hours: parseInteger(i),
                minutes: parseInteger(o),
                seconds: parseInteger(s),
                milliseconds: parseMillis(u),
              },
            ];
          }
          var Ze = {
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
          function fromStrings(e, t, n, a, r, i, o) {
            var s = {
              year:
                2 === t.length
                  ? untruncateYear(parseInteger(t))
                  : parseInteger(t),
              month: Y.indexOf(n) + 1,
              day: parseInteger(a),
              hour: parseInteger(r),
              minute: parseInteger(i),
            };
            return (
              o && (s.second = parseInteger(o)),
              e &&
                (s.weekday =
                  3 < e.length ? x.indexOf(e) + 1 : P.indexOf(e) + 1),
              s
            );
          }
          var Ne =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
          function extractRFC2822(e) {
            var t,
              n = e[1],
              a = e[2],
              r = e[3],
              i = e[4],
              o = e[5],
              s = e[6],
              u = e[7],
              l = e[8],
              h = e[9],
              m = e[10],
              c = e[11],
              f = fromStrings(n, i, r, a, o, s, u);
            return (t = l ? Ze[l] : h ? 0 : signedOffset(m, c)), [f, new re(t)];
          }
          var _e =
              /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
            Le =
              /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
            Re =
              /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
          function extractRFC1123Or850(e) {
            var t = e[1],
              n = e[2],
              a = e[3];
            return [
              fromStrings(t, e[4], a, n, e[5], e[6], e[7]),
              re.utcInstance,
            ];
          }
          function extractASCII(e) {
            var t = e[1],
              n = e[2],
              a = e[3],
              r = e[4],
              i = e[5],
              o = e[6];
            return [fromStrings(t, e[7], n, a, r, i, o), re.utcInstance];
          }
          var be = combineRegexes(
              /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
              Oe
            ),
            Je = combineRegexes(/(\d{4})-?W(\d\d)(?:-?(\d))?/, Oe),
            Ye = combineRegexes(/(\d{4})-?(\d{3})/, Oe),
            Ve = combineRegexes(ye),
            xe = combineExtractors(
              extractISOYmd,
              extractISOTime,
              extractISOOffset
            ),
            Pe = combineExtractors(Me, extractISOTime, extractISOOffset),
            ke = combineExtractors(He, extractISOTime),
            Be = combineExtractors(extractISOTime, extractISOOffset);
          var Ue = combineRegexes(/(\d{4})-(\d\d)-(\d\d)/, ve),
            Fe = combineRegexes(De),
            Ke = combineExtractors(
              extractISOYmd,
              extractISOTime,
              extractISOOffset,
              extractIANAZone
            ),
            Ge = combineExtractors(
              extractISOTime,
              extractISOOffset,
              extractIANAZone
            );
          var je = {
              weeks: {
                days: 7,
                hours: 168,
                minutes: 10080,
                seconds: 604800,
                milliseconds: 6048e5,
              },
              days: {
                hours: 24,
                minutes: 1440,
                seconds: 86400,
                milliseconds: 864e5,
              },
              hours: {
                minutes: 60,
                seconds: 3600,
                milliseconds: 36e5,
              },
              minutes: {
                seconds: 60,
                milliseconds: 6e4,
              },
              seconds: {
                milliseconds: 1e3,
              },
            },
            ze = Object.assign(
              {
                years: {
                  months: 12,
                  weeks: 52,
                  days: 365,
                  hours: 8760,
                  minutes: 525600,
                  seconds: 31536e3,
                  milliseconds: 31536e6,
                },
                quarters: {
                  months: 3,
                  weeks: 13,
                  days: 91,
                  hours: 2184,
                  minutes: 131040,
                  milliseconds: 78624e5,
                },
                months: {
                  weeks: 4,
                  days: 30,
                  hours: 720,
                  minutes: 43200,
                  seconds: 2592e3,
                  milliseconds: 2592e6,
                },
              },
              je
            ),
            qe = 365.2425,
            We = 30.436875,
            Xe = Object.assign(
              {
                years: {
                  months: 12,
                  weeks: qe / 7,
                  days: qe,
                  hours: 24 * qe,
                  minutes: 525949.2,
                  seconds: 525949.2 * 60,
                  milliseconds: 525949.2 * 60 * 1e3,
                },
                quarters: {
                  months: 3,
                  weeks: qe / 28,
                  days: qe / 4,
                  hours: (24 * qe) / 4,
                  minutes: 131487.3,
                  seconds: (525949.2 * 60) / 4,
                  milliseconds: 7889237999.999999,
                },
                months: {
                  weeks: We / 7,
                  days: We,
                  hours: 24 * We,
                  minutes: 43829.1,
                  seconds: 2629746,
                  milliseconds: 2629746e3,
                },
              },
              je
            ),
            $e = [
              "years",
              "quarters",
              "months",
              "weeks",
              "days",
              "hours",
              "minutes",
              "seconds",
              "milliseconds",
            ],
            Qe = $e.slice(0).reverse();
          function clone(e, t, n) {
            void 0 === n && (n = !1);
            var a = {
              values: n
                ? t.values
                : Object.assign({}, e.values, t.values || {}),
              loc: e.loc.clone(t.loc),
              conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
            };
            return new et(a);
          }
          function convert(e, t, n, a, r) {
            var i = e[r][n],
              o = t[n] / i,
              s =
                !(Math.sign(o) === Math.sign(a[r])) &&
                0 !== a[r] &&
                Math.abs(o) <= 1
                  ? (function (e) {
                      return e < 0 ? Math.floor(e) : Math.ceil(e);
                    })(o)
                  : Math.trunc(o);
            (a[r] += s), (t[n] -= s * i);
          }
          function normalizeValues(n, a) {
            Qe.reduce(function (e, t) {
              return isUndefined(a[t]) ? e : (e && convert(n, a, e, a, t), t);
            }, null);
          }
          var et = (function () {
            function Duration(e) {
              var t = "longterm" === e.conversionAccuracy || !1;
              (this.values = e.values),
                (this.loc = e.loc || Ee.create()),
                (this.conversionAccuracy = t ? "longterm" : "casual"),
                (this.invalid = e.invalid || null),
                (this.matrix = t ? Xe : ze),
                (this.isLuxonDuration = !0);
            }
            (Duration.fromMillis = function (e, t) {
              return Duration.fromObject(
                Object.assign(
                  {
                    milliseconds: e,
                  },
                  t
                )
              );
            }),
              (Duration.fromObject = function (e) {
                if (null == e || "object" != typeof e)
                  throw new c(
                    "Duration.fromObject: argument expected to be an object, got " +
                      (null === e ? "null" : typeof e)
                  );
                return new Duration({
                  values: normalizeObject(e, Duration.normalizeUnit, [
                    "locale",
                    "numberingSystem",
                    "conversionAccuracy",
                    "zone",
                  ]),
                  loc: Ee.fromObject(e),
                  conversionAccuracy: e.conversionAccuracy,
                });
              }),
              (Duration.fromISO = function (e, t) {
                var n = (function (e) {
                  return parse(e, [we, extractISODuration]);
                })(e)[0];
                if (n) {
                  var a = Object.assign(n, t);
                  return Duration.fromObject(a);
                }
                return Duration.invalid(
                  "unparsable",
                  'the input "' + e + "\" can't be parsed as ISO 8601"
                );
              }),
              (Duration.invalid = function (e, t) {
                if ((void 0 === t && (t = null), !e))
                  throw new c(
                    "need to specify a reason the Duration is invalid"
                  );
                var n = e instanceof z ? e : new z(e, t);
                if (ce.throwOnInvalid) throw new o(n);
                return new Duration({
                  invalid: n,
                });
              }),
              (Duration.normalizeUnit = function (e) {
                var t = {
                  year: "years",
                  years: "years",
                  quarter: "quarters",
                  quarters: "quarters",
                  month: "months",
                  months: "months",
                  week: "weeks",
                  weeks: "weeks",
                  day: "days",
                  days: "days",
                  hour: "hours",
                  hours: "hours",
                  minute: "minutes",
                  minutes: "minutes",
                  second: "seconds",
                  seconds: "seconds",
                  millisecond: "milliseconds",
                  milliseconds: "milliseconds",
                }[e ? e.toLowerCase() : e];
                if (!t) throw new s(e);
                return t;
              }),
              (Duration.isDuration = function (e) {
                return (e && e.isLuxonDuration) || !1;
              });
            var e = Duration.prototype;
            return (
              (e.toFormat = function (e, t) {
                void 0 === t && (t = {});
                var n = Object.assign({}, t, {
                  floor: !1 !== t.round && !1 !== t.floor,
                });
                return this.isValid
                  ? j.create(this.loc, n).formatDurationFromString(this, e)
                  : "Invalid Duration";
              }),
              (e.toObject = function (e) {
                if ((void 0 === e && (e = {}), !this.isValid)) return {};
                var t = Object.assign({}, this.values);
                return (
                  e.includeConfig &&
                    ((t.conversionAccuracy = this.conversionAccuracy),
                    (t.numberingSystem = this.loc.numberingSystem),
                    (t.locale = this.loc.locale)),
                  t
                );
              }),
              (e.toISO = function () {
                if (!this.isValid) return null;
                var e = "P";
                return (
                  0 !== this.years && (e += this.years + "Y"),
                  (0 === this.months && 0 === this.quarters) ||
                    (e += this.months + 3 * this.quarters + "M"),
                  0 !== this.weeks && (e += this.weeks + "W"),
                  0 !== this.days && (e += this.days + "D"),
                  (0 === this.hours &&
                    0 === this.minutes &&
                    0 === this.seconds &&
                    0 === this.milliseconds) ||
                    (e += "T"),
                  0 !== this.hours && (e += this.hours + "H"),
                  0 !== this.minutes && (e += this.minutes + "M"),
                  (0 === this.seconds && 0 === this.milliseconds) ||
                    (e +=
                      roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S"),
                  "P" === e && (e += "T0S"),
                  e
                );
              }),
              (e.toJSON = function () {
                return this.toISO();
              }),
              (e.toString = function () {
                return this.toISO();
              }),
              (e.valueOf = function () {
                return this.as("milliseconds");
              }),
              (e.plus = function (e) {
                if (!this.isValid) return this;
                for (
                  var t = friendlyDuration(e), n = {}, a = 0, r = $e;
                  a < r.length;
                  a++
                ) {
                  var i = r[a];
                  (hasOwnProperty(t.values, i) ||
                    hasOwnProperty(this.values, i)) &&
                    (n[i] = t.get(i) + this.get(i));
                }
                return clone(
                  this,
                  {
                    values: n,
                  },
                  !0
                );
              }),
              (e.minus = function (e) {
                if (!this.isValid) return this;
                var t = friendlyDuration(e);
                return this.plus(t.negate());
              }),
              (e.mapUnits = function (e) {
                if (!this.isValid) return this;
                for (
                  var t = {}, n = 0, a = Object.keys(this.values);
                  n < a.length;
                  n++
                ) {
                  var r = a[n];
                  t[r] = asNumber(e(this.values[r], r));
                }
                return clone(
                  this,
                  {
                    values: t,
                  },
                  !0
                );
              }),
              (e.get = function (e) {
                return this[Duration.normalizeUnit(e)];
              }),
              (e.set = function (e) {
                return this.isValid
                  ? clone(this, {
                      values: Object.assign(
                        this.values,
                        normalizeObject(e, Duration.normalizeUnit, [])
                      ),
                    })
                  : this;
              }),
              (e.reconfigure = function (e) {
                var t = void 0 === e ? {} : e,
                  n = t.locale,
                  a = t.numberingSystem,
                  r = t.conversionAccuracy,
                  i = {
                    loc: this.loc.clone({
                      locale: n,
                      numberingSystem: a,
                    }),
                  };
                return r && (i.conversionAccuracy = r), clone(this, i);
              }),
              (e.as = function (e) {
                return this.isValid ? this.shiftTo(e).get(e) : NaN;
              }),
              (e.normalize = function () {
                if (!this.isValid) return this;
                var e = this.toObject();
                return (
                  normalizeValues(this.matrix, e),
                  clone(
                    this,
                    {
                      values: e,
                    },
                    !0
                  )
                );
              }),
              (e.shiftTo = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                if (!this.isValid) return this;
                if (0 === t.length) return this;
                t = t.map(function (e) {
                  return Duration.normalizeUnit(e);
                });
                var a,
                  r = {},
                  i = {},
                  o = this.toObject();
                normalizeValues(this.matrix, o);
                for (var s = 0, u = $e; s < u.length; s++) {
                  var l = u[s];
                  if (0 <= t.indexOf(l)) {
                    a = l;
                    var h = 0;
                    for (var m in i)
                      (h += this.matrix[m][l] * i[m]), (i[m] = 0);
                    isNumber(o[l]) && (h += o[l]);
                    var c = Math.trunc(h);
                    for (var f in ((r[l] = c), (i[l] = h - c), o))
                      $e.indexOf(f) > $e.indexOf(l) &&
                        convert(this.matrix, o, f, r, l);
                  } else isNumber(o[l]) && (i[l] = o[l]);
                }
                for (var d in i)
                  0 !== i[d] &&
                    (r[a] += d === a ? i[d] : i[d] / this.matrix[a][d]);
                return clone(
                  this,
                  {
                    values: r,
                  },
                  !0
                ).normalize();
              }),
              (e.negate = function () {
                if (!this.isValid) return this;
                for (
                  var e = {}, t = 0, n = Object.keys(this.values);
                  t < n.length;
                  t++
                ) {
                  var a = n[t];
                  e[a] = -this.values[a];
                }
                return clone(
                  this,
                  {
                    values: e,
                  },
                  !0
                );
              }),
              (e.equals = function (e) {
                if (!this.isValid || !e.isValid) return !1;
                if (!this.loc.equals(e.loc)) return !1;
                for (var t = 0, n = $e; t < n.length; t++) {
                  var a = n[t];
                  if (this.values[a] !== e.values[a]) return !1;
                }
                return !0;
              }),
              _createClass(Duration, [
                {
                  key: "locale",
                  get: function () {
                    return this.isValid ? this.loc.locale : null;
                  },
                },
                {
                  key: "numberingSystem",
                  get: function () {
                    return this.isValid ? this.loc.numberingSystem : null;
                  },
                },
                {
                  key: "years",
                  get: function () {
                    return this.isValid ? this.values.years || 0 : NaN;
                  },
                },
                {
                  key: "quarters",
                  get: function () {
                    return this.isValid ? this.values.quarters || 0 : NaN;
                  },
                },
                {
                  key: "months",
                  get: function () {
                    return this.isValid ? this.values.months || 0 : NaN;
                  },
                },
                {
                  key: "weeks",
                  get: function () {
                    return this.isValid ? this.values.weeks || 0 : NaN;
                  },
                },
                {
                  key: "days",
                  get: function () {
                    return this.isValid ? this.values.days || 0 : NaN;
                  },
                },
                {
                  key: "hours",
                  get: function () {
                    return this.isValid ? this.values.hours || 0 : NaN;
                  },
                },
                {
                  key: "minutes",
                  get: function () {
                    return this.isValid ? this.values.minutes || 0 : NaN;
                  },
                },
                {
                  key: "seconds",
                  get: function () {
                    return this.isValid ? this.values.seconds || 0 : NaN;
                  },
                },
                {
                  key: "milliseconds",
                  get: function () {
                    return this.isValid ? this.values.milliseconds || 0 : NaN;
                  },
                },
                {
                  key: "isValid",
                  get: function () {
                    return null === this.invalid;
                  },
                },
                {
                  key: "invalidReason",
                  get: function () {
                    return this.invalid ? this.invalid.reason : null;
                  },
                },
                {
                  key: "invalidExplanation",
                  get: function () {
                    return this.invalid ? this.invalid.explanation : null;
                  },
                },
              ]),
              Duration
            );
          })();
          function friendlyDuration(e) {
            if (isNumber(e)) return et.fromMillis(e);
            if (et.isDuration(e)) return e;
            if ("object" == typeof e) return et.fromObject(e);
            throw new c(
              "Unknown duration argument " + e + " of type " + typeof e
            );
          }
          var tt = "Invalid Interval";
          var nt = (function () {
              function Interval(e) {
                (this.s = e.start),
                  (this.e = e.end),
                  (this.invalid = e.invalid || null),
                  (this.isLuxonInterval = !0);
              }
              (Interval.invalid = function (e, t) {
                if ((void 0 === t && (t = null), !e))
                  throw new c(
                    "need to specify a reason the Interval is invalid"
                  );
                var n = e instanceof z ? e : new z(e, t);
                if (ce.throwOnInvalid) throw new i(n);
                return new Interval({
                  invalid: n,
                });
              }),
                (Interval.fromDateTimes = function (e, t) {
                  var n = friendlyDateTime(e),
                    a = friendlyDateTime(t),
                    r = (function (e, t) {
                      return e && e.isValid
                        ? t && t.isValid
                          ? t < e
                            ? nt.invalid(
                                "end before start",
                                "The end of an interval must be after its start, but you had start=" +
                                  e.toISO() +
                                  " and end=" +
                                  t.toISO()
                              )
                            : null
                          : nt.invalid("missing or invalid end")
                        : nt.invalid("missing or invalid start");
                    })(n, a);
                  return null == r
                    ? new Interval({
                        start: n,
                        end: a,
                      })
                    : r;
                }),
                (Interval.after = function (e, t) {
                  var n = friendlyDuration(t),
                    a = friendlyDateTime(e);
                  return Interval.fromDateTimes(a, a.plus(n));
                }),
                (Interval.before = function (e, t) {
                  var n = friendlyDuration(t),
                    a = friendlyDateTime(e);
                  return Interval.fromDateTimes(a.minus(n), a);
                }),
                (Interval.fromISO = function (e, t) {
                  var n = (e || "").split("/", 2),
                    a = n[0],
                    r = n[1];
                  if (a && r) {
                    var i = St.fromISO(a, t),
                      o = St.fromISO(r, t);
                    if (i.isValid && o.isValid)
                      return Interval.fromDateTimes(i, o);
                    if (i.isValid) {
                      var s = et.fromISO(r, t);
                      if (s.isValid) return Interval.after(i, s);
                    } else if (o.isValid) {
                      var u = et.fromISO(a, t);
                      if (u.isValid) return Interval.before(o, u);
                    }
                  }
                  return Interval.invalid(
                    "unparsable",
                    'the input "' + e + "\" can't be parsed asISO 8601"
                  );
                }),
                (Interval.isInterval = function (e) {
                  return (e && e.isLuxonInterval) || !1;
                });
              var e = Interval.prototype;
              return (
                (e.length = function (e) {
                  return (
                    void 0 === e && (e = "milliseconds"),
                    this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN
                  );
                }),
                (e.count = function (e) {
                  if ((void 0 === e && (e = "milliseconds"), !this.isValid))
                    return NaN;
                  var t = this.start.startOf(e),
                    n = this.end.startOf(e);
                  return Math.floor(n.diff(t, e).get(e)) + 1;
                }),
                (e.hasSame = function (e) {
                  return !!this.isValid && this.e.minus(1).hasSame(this.s, e);
                }),
                (e.isEmpty = function () {
                  return this.s.valueOf() === this.e.valueOf();
                }),
                (e.isAfter = function (e) {
                  return !!this.isValid && this.s > e;
                }),
                (e.isBefore = function (e) {
                  return !!this.isValid && this.e <= e;
                }),
                (e.contains = function (e) {
                  return !!this.isValid && this.s <= e && this.e > e;
                }),
                (e.set = function (e) {
                  var t = void 0 === e ? {} : e,
                    n = t.start,
                    a = t.end;
                  return this.isValid
                    ? Interval.fromDateTimes(n || this.s, a || this.e)
                    : this;
                }),
                (e.splitAt = function () {
                  var t = this;
                  if (!this.isValid) return [];
                  for (
                    var e = arguments.length, n = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  for (
                    var r = n
                        .map(friendlyDateTime)
                        .filter(function (e) {
                          return t.contains(e);
                        })
                        .sort(),
                      i = [],
                      o = this.s,
                      s = 0;
                    o < this.e;

                  ) {
                    var u = r[s] || this.e,
                      l = +u > +this.e ? this.e : u;
                    i.push(Interval.fromDateTimes(o, l)), (o = l), (s += 1);
                  }
                  return i;
                }),
                (e.splitBy = function (e) {
                  var t = friendlyDuration(e);
                  if (!this.isValid || !t.isValid || 0 === t.as("milliseconds"))
                    return [];
                  for (var n, a, r = this.s, i = []; r < this.e; )
                    (a = +(n = r.plus(t)) > +this.e ? this.e : n),
                      i.push(Interval.fromDateTimes(r, a)),
                      (r = a);
                  return i;
                }),
                (e.divideEqually = function (e) {
                  return this.isValid
                    ? this.splitBy(this.length() / e).slice(0, e)
                    : [];
                }),
                (e.overlaps = function (e) {
                  return this.e > e.s && this.s < e.e;
                }),
                (e.abutsStart = function (e) {
                  return !!this.isValid && +this.e == +e.s;
                }),
                (e.abutsEnd = function (e) {
                  return !!this.isValid && +e.e == +this.s;
                }),
                (e.engulfs = function (e) {
                  return !!this.isValid && this.s <= e.s && this.e >= e.e;
                }),
                (e.equals = function (e) {
                  return (
                    !(!this.isValid || !e.isValid) &&
                    this.s.equals(e.s) &&
                    this.e.equals(e.e)
                  );
                }),
                (e.intersection = function (e) {
                  if (!this.isValid) return this;
                  var t = this.s > e.s ? this.s : e.s,
                    n = this.e < e.e ? this.e : e.e;
                  return n < t ? null : Interval.fromDateTimes(t, n);
                }),
                (e.union = function (e) {
                  if (!this.isValid) return this;
                  var t = this.s < e.s ? this.s : e.s,
                    n = this.e > e.e ? this.e : e.e;
                  return Interval.fromDateTimes(t, n);
                }),
                (Interval.merge = function (e) {
                  var t = e
                      .sort(function (e, t) {
                        return e.s - t.s;
                      })
                      .reduce(
                        function (e, t) {
                          var n = e[0],
                            a = e[1];
                          return a
                            ? a.overlaps(t) || a.abutsStart(t)
                              ? [n, a.union(t)]
                              : [n.concat([a]), t]
                            : [n, t];
                        },
                        [[], null]
                      ),
                    n = t[0],
                    a = t[1];
                  return a && n.push(a), n;
                }),
                (Interval.xor = function (e) {
                  var t,
                    n = null,
                    a = 0,
                    r = [],
                    i = e.map(function (e) {
                      return [
                        {
                          time: e.s,
                          type: "s",
                        },
                        {
                          time: e.e,
                          type: "e",
                        },
                      ];
                    }),
                    o = (t = Array.prototype).concat
                      .apply(t, i)
                      .sort(function (e, t) {
                        return e.time - t.time;
                      }),
                    s = Array.isArray(o),
                    u = 0;
                  for (o = s ? o : o[Symbol.iterator](); ; ) {
                    var l;
                    if (s) {
                      if (u >= o.length) break;
                      l = o[u++];
                    } else {
                      if ((u = o.next()).done) break;
                      l = u.value;
                    }
                    var h = l;
                    n =
                      1 === (a += "s" === h.type ? 1 : -1)
                        ? h.time
                        : (n &&
                            +n != +h.time &&
                            r.push(Interval.fromDateTimes(n, h.time)),
                          null);
                  }
                  return Interval.merge(r);
                }),
                (e.difference = function () {
                  for (
                    var t = this, e = arguments.length, n = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  return Interval.xor([this].concat(n))
                    .map(function (e) {
                      return t.intersection(e);
                    })
                    .filter(function (e) {
                      return e && !e.isEmpty();
                    });
                }),
                (e.toString = function () {
                  return this.isValid
                    ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")"
                    : tt;
                }),
                (e.toISO = function (e) {
                  return this.isValid
                    ? this.s.toISO(e) + "/" + this.e.toISO(e)
                    : tt;
                }),
                (e.toISODate = function () {
                  return this.isValid
                    ? this.s.toISODate() + "/" + this.e.toISODate()
                    : tt;
                }),
                (e.toISOTime = function (e) {
                  return this.isValid
                    ? this.s.toISOTime(e) + "/" + this.e.toISOTime(e)
                    : tt;
                }),
                (e.toFormat = function (e, t) {
                  var n = (void 0 === t ? {} : t).separator,
                    a = void 0 === n ? " – " : n;
                  return this.isValid
                    ? "" + this.s.toFormat(e) + a + this.e.toFormat(e)
                    : tt;
                }),
                (e.toDuration = function (e, t) {
                  return this.isValid
                    ? this.e.diff(this.s, e, t)
                    : et.invalid(this.invalidReason);
                }),
                (e.mapEndpoints = function (e) {
                  return Interval.fromDateTimes(e(this.s), e(this.e));
                }),
                _createClass(Interval, [
                  {
                    key: "start",
                    get: function () {
                      return this.isValid ? this.s : null;
                    },
                  },
                  {
                    key: "end",
                    get: function () {
                      return this.isValid ? this.e : null;
                    },
                  },
                  {
                    key: "isValid",
                    get: function () {
                      return null === this.invalidReason;
                    },
                  },
                  {
                    key: "invalidReason",
                    get: function () {
                      return this.invalid ? this.invalid.reason : null;
                    },
                  },
                  {
                    key: "invalidExplanation",
                    get: function () {
                      return this.invalid ? this.invalid.explanation : null;
                    },
                  },
                ]),
                Interval
              );
            })(),
            at = (function () {
              function Info() {}
              return (
                (Info.hasDST = function (e) {
                  void 0 === e && (e = ce.defaultZone);
                  var t = St.local().setZone(e).set({
                    month: 12,
                  });
                  return (
                    !e.universal &&
                    t.offset !==
                      t.set({
                        month: 6,
                      }).offset
                  );
                }),
                (Info.isValidIANAZone = function (e) {
                  return ne.isValidSpecifier(e) && ne.isValidZone(e);
                }),
                (Info.normalizeZone = function (e) {
                  return normalizeZone(e, ce.defaultZone);
                }),
                (Info.months = function (e, t) {
                  void 0 === e && (e = "long");
                  var n = void 0 === t ? {} : t,
                    a = n.locale,
                    r = void 0 === a ? null : a,
                    i = n.numberingSystem,
                    o = void 0 === i ? null : i,
                    s = n.outputCalendar,
                    u = void 0 === s ? "gregory" : s;
                  return Ee.create(r, o, u).months(e);
                }),
                (Info.monthsFormat = function (e, t) {
                  void 0 === e && (e = "long");
                  var n = void 0 === t ? {} : t,
                    a = n.locale,
                    r = void 0 === a ? null : a,
                    i = n.numberingSystem,
                    o = void 0 === i ? null : i,
                    s = n.outputCalendar,
                    u = void 0 === s ? "gregory" : s;
                  return Ee.create(r, o, u).months(e, !0);
                }),
                (Info.weekdays = function (e, t) {
                  void 0 === e && (e = "long");
                  var n = void 0 === t ? {} : t,
                    a = n.locale,
                    r = void 0 === a ? null : a,
                    i = n.numberingSystem,
                    o = void 0 === i ? null : i;
                  return Ee.create(r, o, null).weekdays(e);
                }),
                (Info.weekdaysFormat = function (e, t) {
                  void 0 === e && (e = "long");
                  var n = void 0 === t ? {} : t,
                    a = n.locale,
                    r = void 0 === a ? null : a,
                    i = n.numberingSystem,
                    o = void 0 === i ? null : i;
                  return Ee.create(r, o, null).weekdays(e, !0);
                }),
                (Info.meridiems = function (e) {
                  var t = (void 0 === e ? {} : e).locale,
                    n = void 0 === t ? null : t;
                  return Ee.create(n).meridiems();
                }),
                (Info.eras = function (e, t) {
                  void 0 === e && (e = "short");
                  var n = (void 0 === t ? {} : t).locale,
                    a = void 0 === n ? null : n;
                  return Ee.create(a, null, "gregory").eras(e);
                }),
                (Info.features = function () {
                  var e = !1,
                    t = !1,
                    n = !1,
                    a = !1;
                  if (hasIntl()) {
                    (e = !0), (t = hasFormatToParts()), (a = hasRelative());
                    try {
                      n =
                        "America/New_York" ===
                        new Intl.DateTimeFormat("en", {
                          timeZone: "America/New_York",
                        }).resolvedOptions().timeZone;
                    } catch (e) {
                      n = !1;
                    }
                  }
                  return {
                    intl: e,
                    intlTokens: t,
                    zones: n,
                    relative: a,
                  };
                }),
                Info
              );
            })();
          function dayDiff(e, t) {
            function hr(e) {
              return e
                .toUTC(0, {
                  keepLocalTime: !0,
                })
                .startOf("day")
                .valueOf();
            }
            var n = hr(t) - hr(e);
            return Math.floor(et.fromMillis(n).as("days"));
          }
          function _diff(e, t, n, a) {
            var r = (function (e, t, n) {
                for (
                  var a,
                    r,
                    i = {},
                    o = 0,
                    s = [
                      [
                        "years",
                        function (e, t) {
                          return t.year - e.year;
                        },
                      ],
                      [
                        "months",
                        function (e, t) {
                          return t.month - e.month + 12 * (t.year - e.year);
                        },
                      ],
                      [
                        "weeks",
                        function (e, t) {
                          var n = dayDiff(e, t);
                          return (n - (n % 7)) / 7;
                        },
                      ],
                      ["days", dayDiff],
                    ];
                  o < s.length;
                  o++
                ) {
                  var u = s[o],
                    l = u[0],
                    h = u[1];
                  if (0 <= n.indexOf(l)) {
                    var m;
                    a = l;
                    var c,
                      f = h(e, t);
                    if (t < (r = e.plus((((m = {})[l] = f), m))))
                      (e = e.plus((((c = {})[l] = f - 1), c))), (f -= 1);
                    else e = r;
                    i[l] = f;
                  }
                }
                return [e, i, r, a];
              })(e, t, n),
              i = r[0],
              o = r[1],
              s = r[2],
              u = r[3],
              l = t - i,
              h = n.filter(function (e) {
                return (
                  0 <=
                  ["hours", "minutes", "seconds", "milliseconds"].indexOf(e)
                );
              });
            if (0 === h.length) {
              var m;
              if (s < t) s = i.plus((((m = {})[u] = 1), m));
              s !== i && (o[u] = (o[u] || 0) + l / (s - i));
            }
            var c,
              f = et.fromObject(Object.assign(o, a));
            return 0 < h.length
              ? (c = et.fromMillis(l, a)).shiftTo.apply(c, h).plus(f)
              : f;
          }
          var rt = {
              arab: "[٠-٩]",
              arabext: "[۰-۹]",
              bali: "[᭐-᭙]",
              beng: "[০-৯]",
              deva: "[०-९]",
              fullwide: "[０-９]",
              gujr: "[૦-૯]",
              hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
              khmr: "[០-៩]",
              knda: "[೦-೯]",
              laoo: "[໐-໙]",
              limb: "[᥆-᥏]",
              mlym: "[൦-൯]",
              mong: "[᠐-᠙]",
              mymr: "[၀-၉]",
              orya: "[୦-୯]",
              tamldec: "[௦-௯]",
              telu: "[౦-౯]",
              thai: "[๐-๙]",
              tibt: "[༠-༩]",
              latn: "\\d",
            },
            it = {
              arab: [1632, 1641],
              arabext: [1776, 1785],
              bali: [6992, 7001],
              beng: [2534, 2543],
              deva: [2406, 2415],
              fullwide: [65296, 65303],
              gujr: [2790, 2799],
              khmr: [6112, 6121],
              knda: [3302, 3311],
              laoo: [3792, 3801],
              limb: [6470, 6479],
              mlym: [3430, 3439],
              mong: [6160, 6169],
              mymr: [4160, 4169],
              orya: [2918, 2927],
              tamldec: [3046, 3055],
              telu: [3174, 3183],
              thai: [3664, 3673],
              tibt: [3872, 3881],
            },
            ot = rt.hanidec.replace(/[\[|\]]/g, "").split("");
          function digitRegex(e, t) {
            var n = e.numberingSystem;
            return (
              void 0 === t && (t = ""), new RegExp("" + rt[n || "latn"] + t)
            );
          }
          var st = "missing Intl.DateTimeFormat.formatToParts support";
          function intUnit(e, n) {
            return (
              void 0 === n &&
                (n = function (e) {
                  return e;
                }),
              {
                regex: e,
                deser: function (e) {
                  var t = e[0];
                  return n(
                    (function (e) {
                      var t = parseInt(e, 10);
                      if (isNaN(t)) {
                        t = "";
                        for (var n = 0; n < e.length; n++) {
                          var a = e.charCodeAt(n);
                          if (-1 !== e[n].search(rt.hanidec))
                            t += ot.indexOf(e[n]);
                          else
                            for (var r in it) {
                              var i = it[r],
                                o = i[0],
                                s = i[1];
                              o <= a && a <= s && (t += a - o);
                            }
                        }
                        return parseInt(t, 10);
                      }
                      return t;
                    })(t)
                  );
                },
              }
            );
          }
          function fixListRegex(e) {
            return e.replace(/\./, "\\.?");
          }
          function stripInsensitivities(e) {
            return e.replace(/\./, "").toLowerCase();
          }
          function oneOf(n, a) {
            return null === n
              ? null
              : {
                  regex: RegExp(n.map(fixListRegex).join("|")),
                  deser: function (e) {
                    var t = e[0];
                    return (
                      n.findIndex(function (e) {
                        return (
                          stripInsensitivities(t) === stripInsensitivities(e)
                        );
                      }) + a
                    );
                  },
                };
          }
          function offset(e, t) {
            return {
              regex: e,
              deser: function (e) {
                return signedOffset(e[1], e[2]);
              },
              groups: t,
            };
          }
          function simple(e) {
            return {
              regex: e,
              deser: function (e) {
                return e[0];
              },
            };
          }
          var ut = {
            year: {
              "2-digit": "yy",
              numeric: "yyyyy",
            },
            month: {
              numeric: "M",
              "2-digit": "MM",
              short: "MMM",
              long: "MMMM",
            },
            day: {
              numeric: "d",
              "2-digit": "dd",
            },
            weekday: {
              short: "EEE",
              long: "EEEE",
            },
            dayperiod: "a",
            dayPeriod: "a",
            hour: {
              numeric: "h",
              "2-digit": "hh",
            },
            minute: {
              numeric: "m",
              "2-digit": "mm",
            },
            second: {
              numeric: "s",
              "2-digit": "ss",
            },
          };
          var lt = null;
          function maybeExpandMacroToken(e, t) {
            if (e.literal) return e;
            var n = j.macroTokenToFormatOpts(e.val);
            if (!n) return e;
            var a = j
              .create(t, n)
              .formatDateTimeParts((lt = lt || St.fromMillis(1555555555555)))
              .map(function (e) {
                return (function (e, t, n) {
                  var a = e.type,
                    r = e.value;
                  if ("literal" === a)
                    return {
                      literal: !0,
                      val: r,
                    };
                  var i = n[a],
                    o = ut[a];
                  return (
                    "object" == typeof o && (o = o[i]),
                    o
                      ? {
                          literal: !1,
                          val: o,
                        }
                      : void 0
                  );
                })(e, 0, n);
              });
            return a.includes(void 0) ? e : a;
          }
          function explainFromTokens(t, e, n) {
            var a = (function (e, t) {
                var n;
                return (n = Array.prototype).concat.apply(
                  n,
                  e.map(function (e) {
                    return maybeExpandMacroToken(e, t);
                  })
                );
              })(j.parseFormat(n), t),
              r = a.map(function (e) {
                return (function (t, n) {
                  function Ns(e) {
                    return {
                      regex: RegExp(
                        (function (e) {
                          return e.replace(
                            /[\-\[\]{}()*+?.,\\\^$|#\s]/g,
                            "\\$&"
                          );
                        })(e.val)
                      ),
                      deser: function (e) {
                        return e[0];
                      },
                      literal: !0,
                    };
                  }
                  var a = digitRegex(n),
                    r = digitRegex(n, "{2}"),
                    i = digitRegex(n, "{3}"),
                    o = digitRegex(n, "{4}"),
                    s = digitRegex(n, "{6}"),
                    u = digitRegex(n, "{1,2}"),
                    l = digitRegex(n, "{1,3}"),
                    h = digitRegex(n, "{1,6}"),
                    m = digitRegex(n, "{1,9}"),
                    c = digitRegex(n, "{2,4}"),
                    f = digitRegex(n, "{4,6}"),
                    e = (function (e) {
                      if (t.literal) return Ns(e);
                      switch (e.val) {
                        case "G":
                          return oneOf(n.eras("short", !1), 0);
                        case "GG":
                          return oneOf(n.eras("long", !1), 0);
                        case "y":
                          return intUnit(h);
                        case "yy":
                          return intUnit(c, untruncateYear);
                        case "yyyy":
                          return intUnit(o);
                        case "yyyyy":
                          return intUnit(f);
                        case "yyyyyy":
                          return intUnit(s);
                        case "M":
                          return intUnit(u);
                        case "MM":
                          return intUnit(r);
                        case "MMM":
                          return oneOf(n.months("short", !0, !1), 1);
                        case "MMMM":
                          return oneOf(n.months("long", !0, !1), 1);
                        case "L":
                          return intUnit(u);
                        case "LL":
                          return intUnit(r);
                        case "LLL":
                          return oneOf(n.months("short", !1, !1), 1);
                        case "LLLL":
                          return oneOf(n.months("long", !1, !1), 1);
                        case "d":
                          return intUnit(u);
                        case "dd":
                          return intUnit(r);
                        case "o":
                          return intUnit(l);
                        case "ooo":
                          return intUnit(i);
                        case "HH":
                          return intUnit(r);
                        case "H":
                          return intUnit(u);
                        case "hh":
                          return intUnit(r);
                        case "h":
                          return intUnit(u);
                        case "mm":
                          return intUnit(r);
                        case "m":
                        case "q":
                          return intUnit(u);
                        case "qq":
                          return intUnit(r);
                        case "s":
                          return intUnit(u);
                        case "ss":
                          return intUnit(r);
                        case "S":
                          return intUnit(l);
                        case "SSS":
                          return intUnit(i);
                        case "u":
                          return simple(m);
                        case "a":
                          return oneOf(n.meridiems(), 0);
                        case "kkkk":
                          return intUnit(o);
                        case "kk":
                          return intUnit(c, untruncateYear);
                        case "W":
                          return intUnit(u);
                        case "WW":
                          return intUnit(r);
                        case "E":
                        case "c":
                          return intUnit(a);
                        case "EEE":
                          return oneOf(n.weekdays("short", !1, !1), 1);
                        case "EEEE":
                          return oneOf(n.weekdays("long", !1, !1), 1);
                        case "ccc":
                          return oneOf(n.weekdays("short", !0, !1), 1);
                        case "cccc":
                          return oneOf(n.weekdays("long", !0, !1), 1);
                        case "Z":
                        case "ZZ":
                          return offset(
                            new RegExp(
                              "([+-]" + u.source + ")(?::(" + r.source + "))?"
                            ),
                            2
                          );
                        case "ZZZ":
                          return offset(
                            new RegExp(
                              "([+-]" + u.source + ")(" + r.source + ")?"
                            ),
                            2
                          );
                        case "z":
                          return simple(/[a-z_+-/]{1,256}?/i);
                        default:
                          return Ns(e);
                      }
                    })(t) || {
                      invalidReason: st,
                    };
                  return (e.token = t), e;
                })(e, t);
              }),
              i = r.find(function (e) {
                return e.invalidReason;
              });
            if (i)
              return {
                input: e,
                tokens: a,
                invalidReason: i.invalidReason,
              };
            var o = (function (e) {
                return [
                  "^" +
                    e
                      .map(function (e) {
                        return e.regex;
                      })
                      .reduce(function (e, t) {
                        return e + "(" + t.source + ")";
                      }, "") +
                    "$",
                  e,
                ];
              })(r),
              s = o[0],
              u = o[1],
              l = RegExp(s, "i"),
              h = (function (e, t, n) {
                var a = e.match(t);
                if (a) {
                  var r = {},
                    i = 1;
                  for (var o in n)
                    if (hasOwnProperty(n, o)) {
                      var s = n[o],
                        u = s.groups ? s.groups + 1 : 1;
                      !s.literal &&
                        s.token &&
                        (r[s.token.val[0]] = s.deser(a.slice(i, i + u))),
                        (i += u);
                    }
                  return [a, r];
                }
                return [a, {}];
              })(e, l, u),
              m = h[0],
              c = h[1],
              f = c
                ? (function (a) {
                    var e;
                    return (
                      (e = isUndefined(a.Z)
                        ? isUndefined(a.z)
                          ? null
                          : ne.create(a.z)
                        : new re(a.Z)),
                      isUndefined(a.q) || (a.M = 3 * (a.q - 1) + 1),
                      isUndefined(a.h) ||
                        (a.h < 12 && 1 === a.a
                          ? (a.h += 12)
                          : 12 === a.h && 0 === a.a && (a.h = 0)),
                      0 === a.G && a.y && (a.y = -a.y),
                      isUndefined(a.u) || (a.S = parseMillis(a.u)),
                      [
                        Object.keys(a).reduce(function (e, t) {
                          var n = (function (e) {
                            switch (e) {
                              case "S":
                                return "millisecond";
                              case "s":
                                return "second";
                              case "m":
                                return "minute";
                              case "h":
                              case "H":
                                return "hour";
                              case "d":
                                return "day";
                              case "o":
                                return "ordinal";
                              case "L":
                              case "M":
                                return "month";
                              case "y":
                                return "year";
                              case "E":
                              case "c":
                                return "weekday";
                              case "W":
                                return "weekNumber";
                              case "k":
                                return "weekYear";
                              case "q":
                                return "quarter";
                              default:
                                return null;
                            }
                          })(t);
                          return n && (e[n] = a[t]), e;
                        }, {}),
                        e,
                      ]
                    );
                  })(c)
                : [null, null],
              d = f[0],
              g = f[1];
            if (hasOwnProperty(c, "a") && hasOwnProperty(c, "H"))
              throw new O(
                "Can't include meridiem when specifying 24-hour format"
              );
            return {
              input: e,
              tokens: a,
              regex: l,
              rawMatches: m,
              matches: c,
              result: d,
              zone: g,
            };
          }
          var ht = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            mt = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
          function unitOutOfRange(e, t) {
            return new z(
              "unit out of range",
              "you specified " +
                t +
                " (of type " +
                typeof t +
                ") as a " +
                e +
                ", which is invalid"
            );
          }
          function dayOfWeek(e, t, n) {
            var a = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
            return 0 === a ? 7 : a;
          }
          function computeOrdinal(e, t, n) {
            return n + (isLeapYear(e) ? mt : ht)[t - 1];
          }
          function uncomputeOrdinal(e, t) {
            var n = isLeapYear(e) ? mt : ht,
              a = n.findIndex(function (e) {
                return e < t;
              });
            return {
              month: a + 1,
              day: t - n[a],
            };
          }
          function gregorianToWeek(e) {
            var t,
              n = e.year,
              a = e.month,
              r = e.day,
              i = computeOrdinal(n, a, r),
              o = dayOfWeek(n, a, r),
              s = Math.floor((i - o + 10) / 7);
            return (
              s < 1
                ? (s = weeksInWeekYear((t = n - 1)))
                : s > weeksInWeekYear(n)
                ? ((t = n + 1), (s = 1))
                : (t = n),
              Object.assign(
                {
                  weekYear: t,
                  weekNumber: s,
                  weekday: o,
                },
                timeObject(e)
              )
            );
          }
          function weekToGregorian(e) {
            var t,
              n = e.weekYear,
              a = e.weekNumber,
              r = e.weekday,
              i = dayOfWeek(n, 1, 4),
              o = daysInYear(n),
              s = 7 * a + r - i - 3;
            s < 1
              ? (s += daysInYear((t = n - 1)))
              : o < s
              ? ((t = n + 1), (s -= daysInYear(n)))
              : (t = n);
            var u = uncomputeOrdinal(t, s),
              l = u.month,
              h = u.day;
            return Object.assign(
              {
                year: t,
                month: l,
                day: h,
              },
              timeObject(e)
            );
          }
          function gregorianToOrdinal(e) {
            var t = e.year,
              n = computeOrdinal(t, e.month, e.day);
            return Object.assign(
              {
                year: t,
                ordinal: n,
              },
              timeObject(e)
            );
          }
          function ordinalToGregorian(e) {
            var t = e.year,
              n = uncomputeOrdinal(t, e.ordinal),
              a = n.month,
              r = n.day;
            return Object.assign(
              {
                year: t,
                month: a,
                day: r,
              },
              timeObject(e)
            );
          }
          function hasInvalidGregorianData(e) {
            var t = isInteger(e.year),
              n = integerBetween(e.month, 1, 12),
              a = integerBetween(e.day, 1, daysInMonth(e.year, e.month));
            return t
              ? n
                ? !a && unitOutOfRange("day", e.day)
                : unitOutOfRange("month", e.month)
              : unitOutOfRange("year", e.year);
          }
          function hasInvalidTimeData(e) {
            var t = e.hour,
              n = e.minute,
              a = e.second,
              r = e.millisecond,
              i =
                integerBetween(t, 0, 23) ||
                (24 === t && 0 === n && 0 === a && 0 === r),
              o = integerBetween(n, 0, 59),
              s = integerBetween(a, 0, 59),
              u = integerBetween(r, 0, 999);
            return i
              ? o
                ? s
                  ? !u && unitOutOfRange("millisecond", r)
                  : unitOutOfRange("second", a)
                : unitOutOfRange("minute", n)
              : unitOutOfRange("hour", t);
          }
          var ct = "Invalid DateTime";
          function unsupportedZone(e) {
            return new z(
              "unsupported zone",
              'the zone "' + e.name + '" is not supported'
            );
          }
          function possiblyCachedWeekData(e) {
            return (
              null === e.weekData && (e.weekData = gregorianToWeek(e.c)),
              e.weekData
            );
          }
          function clone$1(e, t) {
            var n = {
              ts: e.ts,
              zone: e.zone,
              c: e.c,
              o: e.o,
              loc: e.loc,
              invalid: e.invalid,
            };
            return new St(
              Object.assign({}, n, t, {
                old: n,
              })
            );
          }
          function fixOffset(e, t, n) {
            var a = e - 60 * t * 1e3,
              r = n.offset(a);
            if (t === r) return [a, t];
            a -= 60 * (r - t) * 1e3;
            var i = n.offset(a);
            return r === i
              ? [a, r]
              : [e - 60 * Math.min(r, i) * 1e3, Math.max(r, i)];
          }
          function tsToObj(e, t) {
            var n = new Date((e += 60 * t * 1e3));
            return {
              year: n.getUTCFullYear(),
              month: n.getUTCMonth() + 1,
              day: n.getUTCDate(),
              hour: n.getUTCHours(),
              minute: n.getUTCMinutes(),
              second: n.getUTCSeconds(),
              millisecond: n.getUTCMilliseconds(),
            };
          }
          function objToTS(e, t, n) {
            return fixOffset(objToLocalTS(e), t, n);
          }
          function adjustTime(e, t) {
            var n,
              a = Object.keys(t.values);
            -1 === a.indexOf("milliseconds") && a.push("milliseconds"),
              (t = (n = t).shiftTo.apply(n, a));
            var r = e.o,
              i = e.c.year + t.years,
              o = e.c.month + t.months + 3 * t.quarters,
              s = Object.assign({}, e.c, {
                year: i,
                month: o,
                day:
                  Math.min(e.c.day, daysInMonth(i, o)) + t.days + 7 * t.weeks,
              }),
              u = et
                .fromObject({
                  hours: t.hours,
                  minutes: t.minutes,
                  seconds: t.seconds,
                  milliseconds: t.milliseconds,
                })
                .as("milliseconds"),
              l = fixOffset(objToLocalTS(s), r, e.zone),
              h = l[0],
              m = l[1];
            return (
              0 !== u && ((h += u), (m = e.zone.offset(h))),
              {
                ts: h,
                o: m,
              }
            );
          }
          function parseDataToDateTime(e, t, n, a, r) {
            var i = n.setZone,
              o = n.zone;
            if (e && 0 !== Object.keys(e).length) {
              var s = t || o,
                u = St.fromObject(
                  Object.assign(e, n, {
                    zone: s,
                    setZone: void 0,
                  })
                );
              return i ? u : u.setZone(o);
            }
            return St.invalid(
              new z(
                "unparsable",
                'the input "' + r + "\" can't be parsed as " + a
              )
            );
          }
          function toTechFormat(e, t) {
            return e.isValid
              ? j
                  .create(Ee.create("en-US"), {
                    allowZ: !0,
                    forceSimple: !0,
                  })
                  .formatDateTimeFromString(e, t)
              : null;
          }
          function toTechTimeFormat(e, t) {
            var n = t.suppressSeconds,
              a = void 0 !== n && n,
              r = t.suppressMilliseconds,
              i = void 0 !== r && r,
              o = t.includeOffset,
              s = t.includeZone,
              u = void 0 !== s && s,
              l = t.spaceZone,
              h = void 0 !== l && l,
              m = "HH:mm";
            return (
              (a && 0 === e.second && 0 === e.millisecond) ||
                ((m += ":ss"), (i && 0 === e.millisecond) || (m += ".SSS")),
              (u || o) && h && (m += " "),
              u ? (m += "z") : o && (m += "ZZ"),
              toTechFormat(e, m)
            );
          }
          var ft = {
              month: 1,
              day: 1,
              hour: 0,
              minute: 0,
              second: 0,
              millisecond: 0,
            },
            dt = {
              weekNumber: 1,
              weekday: 1,
              hour: 0,
              minute: 0,
              second: 0,
              millisecond: 0,
            },
            gt = {
              ordinal: 1,
              hour: 0,
              minute: 0,
              second: 0,
              millisecond: 0,
            },
            At = [
              "year",
              "month",
              "day",
              "hour",
              "minute",
              "second",
              "millisecond",
            ],
            pt = [
              "weekYear",
              "weekNumber",
              "weekday",
              "hour",
              "minute",
              "second",
              "millisecond",
            ],
            Ct = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
          function normalizeUnit(e) {
            var t = {
              year: "year",
              years: "year",
              month: "month",
              months: "month",
              day: "day",
              days: "day",
              hour: "hour",
              hours: "hour",
              minute: "minute",
              minutes: "minute",
              quarter: "quarter",
              quarters: "quarter",
              second: "second",
              seconds: "second",
              millisecond: "millisecond",
              milliseconds: "millisecond",
              weekday: "weekday",
              weekdays: "weekday",
              weeknumber: "weekNumber",
              weeksnumber: "weekNumber",
              weeknumbers: "weekNumber",
              weekyear: "weekYear",
              weekyears: "weekYear",
              ordinal: "ordinal",
            }[e.toLowerCase()];
            if (!t) throw new s(e);
            return t;
          }
          function quickDT(e, t) {
            for (var n = 0, a = At; n < a.length; n++) {
              var r = a[n];
              isUndefined(e[r]) && (e[r] = ft[r]);
            }
            var i = hasInvalidGregorianData(e) || hasInvalidTimeData(e);
            if (i) return St.invalid(i);
            var o = ce.now(),
              s = objToTS(e, t.offset(o), t),
              u = s[0],
              l = s[1];
            return new St({
              ts: u,
              zone: t,
              o: l,
            });
          }
          function diffRelative(t, n, a) {
            function Ew(e, t) {
              return (
                (e = roundTo(e, r || a.calendary ? 0 : 2, !0)),
                n.loc.clone(a).relFormatter(a).format(e, t)
              );
            }
            function Fw(e) {
              return a.calendary
                ? n.hasSame(t, e)
                  ? 0
                  : n.startOf(e).diff(t.startOf(e), e).get(e)
                : n.diff(t, e).get(e);
            }
            var r = !!isUndefined(a.round) || a.round;
            if (a.unit) return Ew(Fw(a.unit), a.unit);
            var e = a.units,
              i = Array.isArray(e),
              o = 0;
            for (e = i ? e : e[Symbol.iterator](); ; ) {
              var s;
              if (i) {
                if (o >= e.length) break;
                s = e[o++];
              } else {
                if ((o = e.next()).done) break;
                s = o.value;
              }
              var u = s,
                l = Fw(u);
              if (1 <= Math.abs(l)) return Ew(l, u);
            }
            return Ew(0, a.units[a.units.length - 1]);
          }
          var St = (function () {
            function DateTime(e) {
              var t = e.zone || ce.defaultZone,
                n =
                  e.invalid ||
                  (Number.isNaN(e.ts) ? new z("invalid input") : null) ||
                  (t.isValid ? null : unsupportedZone(t));
              this.ts = isUndefined(e.ts) ? ce.now() : e.ts;
              var a = null,
                r = null;
              if (!n)
                if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) {
                  var i = [e.old.c, e.old.o];
                  (a = i[0]), (r = i[1]);
                } else {
                  var o = t.offset(this.ts);
                  (a = tsToObj(this.ts, o)),
                    (a = (n = Number.isNaN(a.year)
                      ? new z("invalid input")
                      : null)
                      ? null
                      : a),
                    (r = n ? null : o);
                }
              (this._zone = t),
                (this.loc = e.loc || Ee.create()),
                (this.invalid = n),
                (this.weekData = null),
                (this.c = a),
                (this.o = r),
                (this.isLuxonDateTime = !0);
            }
            (DateTime.local = function (e, t, n, a, r, i, o) {
              return isUndefined(e)
                ? new DateTime({
                    ts: ce.now(),
                  })
                : quickDT(
                    {
                      year: e,
                      month: t,
                      day: n,
                      hour: a,
                      minute: r,
                      second: i,
                      millisecond: o,
                    },
                    ce.defaultZone
                  );
            }),
              (DateTime.utc = function (e, t, n, a, r, i, o) {
                return isUndefined(e)
                  ? new DateTime({
                      ts: ce.now(),
                      zone: re.utcInstance,
                    })
                  : quickDT(
                      {
                        year: e,
                        month: t,
                        day: n,
                        hour: a,
                        minute: r,
                        second: i,
                        millisecond: o,
                      },
                      re.utcInstance
                    );
              }),
              (DateTime.fromJSDate = function (e, t) {
                void 0 === t && (t = {});
                var n = (function (e) {
                  return "[object Date]" === Object.prototype.toString.call(e);
                })(e)
                  ? e.valueOf()
                  : NaN;
                if (Number.isNaN(n)) return DateTime.invalid("invalid input");
                var a = normalizeZone(t.zone, ce.defaultZone);
                return a.isValid
                  ? new DateTime({
                      ts: n,
                      zone: a,
                      loc: Ee.fromObject(t),
                    })
                  : DateTime.invalid(unsupportedZone(a));
              }),
              (DateTime.fromMillis = function (e, t) {
                if ((void 0 === t && (t = {}), isNumber(e)))
                  return e < -864e13 || 864e13 < e
                    ? DateTime.invalid("Timestamp out of range")
                    : new DateTime({
                        ts: e,
                        zone: normalizeZone(t.zone, ce.defaultZone),
                        loc: Ee.fromObject(t),
                      });
                throw new c("fromMillis requires a numerical input");
              }),
              (DateTime.fromSeconds = function (e, t) {
                if ((void 0 === t && (t = {}), isNumber(e)))
                  return new DateTime({
                    ts: 1e3 * e,
                    zone: normalizeZone(t.zone, ce.defaultZone),
                    loc: Ee.fromObject(t),
                  });
                throw new c("fromSeconds requires a numerical input");
              }),
              (DateTime.fromObject = function (e) {
                var t = normalizeZone(e.zone, ce.defaultZone);
                if (!t.isValid) return DateTime.invalid(unsupportedZone(t));
                var n = ce.now(),
                  a = t.offset(n),
                  r = normalizeObject(e, normalizeUnit, [
                    "zone",
                    "locale",
                    "outputCalendar",
                    "numberingSystem",
                  ]),
                  i = !isUndefined(r.ordinal),
                  o = !isUndefined(r.year),
                  s = !isUndefined(r.month) || !isUndefined(r.day),
                  u = o || s,
                  l = r.weekYear || r.weekNumber,
                  h = Ee.fromObject(e);
                if ((u || i) && l)
                  throw new O(
                    "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
                  );
                if (s && i)
                  throw new O("Can't mix ordinal dates with month/day");
                var m,
                  c,
                  f = l || (r.weekday && !u),
                  d = tsToObj(n, a);
                f
                  ? ((m = pt), (c = dt), (d = gregorianToWeek(d)))
                  : i
                  ? ((m = Ct), (c = gt), (d = gregorianToOrdinal(d)))
                  : ((m = At), (c = ft));
                var g = !1,
                  A = m,
                  p = Array.isArray(A),
                  C = 0;
                for (A = p ? A : A[Symbol.iterator](); ; ) {
                  var S;
                  if (p) {
                    if (C >= A.length) break;
                    S = A[C++];
                  } else {
                    if ((C = A.next()).done) break;
                    S = C.value;
                  }
                  var E = S;
                  isUndefined(r[E]) ? (r[E] = g ? c[E] : d[E]) : (g = !0);
                }
                var T =
                  (f
                    ? (function (e) {
                        var t = isInteger(e.weekYear),
                          n = integerBetween(
                            e.weekNumber,
                            1,
                            weeksInWeekYear(e.weekYear)
                          ),
                          a = integerBetween(e.weekday, 1, 7);
                        return t
                          ? n
                            ? !a && unitOutOfRange("weekday", e.weekday)
                            : unitOutOfRange("week", e.week)
                          : unitOutOfRange("weekYear", e.weekYear);
                      })(r)
                    : i
                    ? (function (e) {
                        var t = isInteger(e.year),
                          n = integerBetween(e.ordinal, 1, daysInYear(e.year));
                        return t
                          ? !n && unitOutOfRange("ordinal", e.ordinal)
                          : unitOutOfRange("year", e.year);
                      })(r)
                    : hasInvalidGregorianData(r)) || hasInvalidTimeData(r);
                if (T) return DateTime.invalid(T);
                var I = objToTS(
                    f ? weekToGregorian(r) : i ? ordinalToGregorian(r) : r,
                    a,
                    t
                  ),
                  y = new DateTime({
                    ts: I[0],
                    zone: t,
                    o: I[1],
                    loc: h,
                  });
                return r.weekday && u && e.weekday !== y.weekday
                  ? DateTime.invalid(
                      "mismatched weekday",
                      "you can't specify both a weekday of " +
                        r.weekday +
                        " and a date of " +
                        y.toISO()
                    )
                  : y;
              }),
              (DateTime.fromISO = function (e, t) {
                void 0 === t && (t = {});
                var n = (function (e) {
                  return parse(e, [be, xe], [Je, Pe], [Ye, ke], [Ve, Be]);
                })(e);
                return parseDataToDateTime(n[0], n[1], t, "ISO 8601", e);
              }),
              (DateTime.fromRFC2822 = function (e, t) {
                void 0 === t && (t = {});
                var n = (function (e) {
                  return parse(
                    (function (e) {
                      return e
                        .replace(/\([^)]*\)|[\n\t]/g, " ")
                        .replace(/(\s\s+)/g, " ")
                        .trim();
                    })(e),
                    [Ne, extractRFC2822]
                  );
                })(e);
                return parseDataToDateTime(n[0], n[1], t, "RFC 2822", e);
              }),
              (DateTime.fromHTTP = function (e, t) {
                void 0 === t && (t = {});
                var n = (function (e) {
                  return parse(
                    e,
                    [_e, extractRFC1123Or850],
                    [Le, extractRFC1123Or850],
                    [Re, extractASCII]
                  );
                })(e);
                return parseDataToDateTime(n[0], n[1], t, "HTTP", t);
              }),
              (DateTime.fromFormat = function (e, t, n) {
                if (
                  (void 0 === n && (n = {}), isUndefined(e) || isUndefined(t))
                )
                  throw new c(
                    "fromFormat requires an input string and a format"
                  );
                var a = n,
                  r = a.locale,
                  i = void 0 === r ? null : r,
                  o = a.numberingSystem,
                  s = void 0 === o ? null : o,
                  u = (function (e, t, n) {
                    var a = explainFromTokens(e, t, n);
                    return [a.result, a.zone, a.invalidReason];
                  })(
                    Ee.fromOpts({
                      locale: i,
                      numberingSystem: s,
                      defaultToEN: !0,
                    }),
                    e,
                    t
                  ),
                  l = u[0],
                  h = u[1],
                  m = u[2];
                return m
                  ? DateTime.invalid(m)
                  : parseDataToDateTime(l, h, n, "format " + t, e);
              }),
              (DateTime.fromString = function (e, t, n) {
                return void 0 === n && (n = {}), DateTime.fromFormat(e, t, n);
              }),
              (DateTime.fromSQL = function (e, t) {
                void 0 === t && (t = {});
                var n = (function (e) {
                  return parse(e, [Ue, Ke], [Fe, Ge]);
                })(e);
                return parseDataToDateTime(n[0], n[1], t, "SQL", e);
              }),
              (DateTime.invalid = function (e, t) {
                if ((void 0 === t && (t = null), !e))
                  throw new c(
                    "need to specify a reason the DateTime is invalid"
                  );
                var n = e instanceof z ? e : new z(e, t);
                if (ce.throwOnInvalid) throw new r(n);
                return new DateTime({
                  invalid: n,
                });
              }),
              (DateTime.isDateTime = function (e) {
                return (e && e.isLuxonDateTime) || !1;
              });
            var e = DateTime.prototype;
            return (
              (e.get = function (e) {
                return this[e];
              }),
              (e.resolvedLocaleOpts = function (e) {
                void 0 === e && (e = {});
                var t = j.create(this.loc.clone(e), e).resolvedOptions(this);
                return {
                  locale: t.locale,
                  numberingSystem: t.numberingSystem,
                  outputCalendar: t.calendar,
                };
              }),
              (e.toUTC = function (e, t) {
                return (
                  void 0 === e && (e = 0),
                  void 0 === t && (t = {}),
                  this.setZone(re.instance(e), t)
                );
              }),
              (e.toLocal = function () {
                return this.setZone(ce.defaultZone);
              }),
              (e.setZone = function (e, t) {
                var n = void 0 === t ? {} : t,
                  a = n.keepLocalTime,
                  r = void 0 !== a && a,
                  i = n.keepCalendarTime,
                  o = void 0 !== i && i;
                if ((e = normalizeZone(e, ce.defaultZone)).equals(this.zone))
                  return this;
                if (e.isValid) {
                  var s = this.ts;
                  if (r || o) {
                    var u = e.offset(this.ts);
                    s = objToTS(this.toObject(), u, e)[0];
                  }
                  return clone$1(this, {
                    ts: s,
                    zone: e,
                  });
                }
                return DateTime.invalid(unsupportedZone(e));
              }),
              (e.reconfigure = function (e) {
                var t = void 0 === e ? {} : e,
                  n = t.locale,
                  a = t.numberingSystem,
                  r = t.outputCalendar,
                  i = this.loc.clone({
                    locale: n,
                    numberingSystem: a,
                    outputCalendar: r,
                  });
                return clone$1(this, {
                  loc: i,
                });
              }),
              (e.setLocale = function (e) {
                return this.reconfigure({
                  locale: e,
                });
              }),
              (e.set = function (e) {
                if (!this.isValid) return this;
                var t,
                  n = normalizeObject(e, normalizeUnit, []);
                !isUndefined(n.weekYear) ||
                !isUndefined(n.weekNumber) ||
                !isUndefined(n.weekday)
                  ? (t = weekToGregorian(
                      Object.assign(gregorianToWeek(this.c), n)
                    ))
                  : isUndefined(n.ordinal)
                  ? ((t = Object.assign(this.toObject(), n)),
                    isUndefined(n.day) &&
                      (t.day = Math.min(daysInMonth(t.year, t.month), t.day)))
                  : (t = ordinalToGregorian(
                      Object.assign(gregorianToOrdinal(this.c), n)
                    ));
                var a = objToTS(t, this.o, this.zone);
                return clone$1(this, {
                  ts: a[0],
                  o: a[1],
                });
              }),
              (e.plus = function (e) {
                return this.isValid
                  ? clone$1(this, adjustTime(this, friendlyDuration(e)))
                  : this;
              }),
              (e.minus = function (e) {
                return this.isValid
                  ? clone$1(
                      this,
                      adjustTime(this, friendlyDuration(e).negate())
                    )
                  : this;
              }),
              (e.startOf = function (e) {
                if (!this.isValid) return this;
                var t = {},
                  n = et.normalizeUnit(e);
                switch (n) {
                  case "years":
                    t.month = 1;
                  case "quarters":
                  case "months":
                    t.day = 1;
                  case "weeks":
                  case "days":
                    t.hour = 0;
                  case "hours":
                    t.minute = 0;
                  case "minutes":
                    t.second = 0;
                  case "seconds":
                    t.millisecond = 0;
                }
                if (("weeks" === n && (t.weekday = 1), "quarters" === n)) {
                  var a = Math.ceil(this.month / 3);
                  t.month = 3 * (a - 1) + 1;
                }
                return this.set(t);
              }),
              (e.endOf = function (e) {
                var t;
                return this.isValid
                  ? this.plus((((t = {})[e] = 1), t))
                      .startOf(e)
                      .minus(1)
                  : this;
              }),
              (e.toFormat = function (e, t) {
                return (
                  void 0 === t && (t = {}),
                  this.isValid
                    ? j
                        .create(this.loc.redefaultToEN(t))
                        .formatDateTimeFromString(this, e)
                    : ct
                );
              }),
              (e.toLocaleString = function (e) {
                return (
                  void 0 === e && (e = f),
                  this.isValid
                    ? j.create(this.loc.clone(e), e).formatDateTime(this)
                    : ct
                );
              }),
              (e.toLocaleParts = function (e) {
                return (
                  void 0 === e && (e = {}),
                  this.isValid
                    ? j.create(this.loc.clone(e), e).formatDateTimeParts(this)
                    : []
                );
              }),
              (e.toISO = function (e) {
                return (
                  void 0 === e && (e = {}),
                  this.isValid
                    ? this.toISODate() + "T" + this.toISOTime(e)
                    : null
                );
              }),
              (e.toISODate = function () {
                var e = "yyyy-MM-dd";
                return 9999 < this.year && (e = "+" + e), toTechFormat(this, e);
              }),
              (e.toISOWeekDate = function () {
                return toTechFormat(this, "kkkk-'W'WW-c");
              }),
              (e.toISOTime = function (e) {
                var t = void 0 === e ? {} : e,
                  n = t.suppressMilliseconds,
                  a = void 0 !== n && n,
                  r = t.suppressSeconds,
                  i = void 0 !== r && r,
                  o = t.includeOffset;
                return toTechTimeFormat(this, {
                  suppressSeconds: i,
                  suppressMilliseconds: a,
                  includeOffset: void 0 === o || o,
                });
              }),
              (e.toRFC2822 = function () {
                return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ");
              }),
              (e.toHTTP = function () {
                return toTechFormat(
                  this.toUTC(),
                  "EEE, dd LLL yyyy HH:mm:ss 'GMT'"
                );
              }),
              (e.toSQLDate = function () {
                return toTechFormat(this, "yyyy-MM-dd");
              }),
              (e.toSQLTime = function (e) {
                var t = void 0 === e ? {} : e,
                  n = t.includeOffset,
                  a = void 0 === n || n,
                  r = t.includeZone;
                return toTechTimeFormat(this, {
                  includeOffset: a,
                  includeZone: void 0 !== r && r,
                  spaceZone: !0,
                });
              }),
              (e.toSQL = function (e) {
                return (
                  void 0 === e && (e = {}),
                  this.isValid
                    ? this.toSQLDate() + " " + this.toSQLTime(e)
                    : null
                );
              }),
              (e.toString = function () {
                return this.isValid ? this.toISO() : ct;
              }),
              (e.valueOf = function () {
                return this.toMillis();
              }),
              (e.toMillis = function () {
                return this.isValid ? this.ts : NaN;
              }),
              (e.toSeconds = function () {
                return this.isValid ? this.ts / 1e3 : NaN;
              }),
              (e.toJSON = function () {
                return this.toISO();
              }),
              (e.toBSON = function () {
                return this.toJSDate();
              }),
              (e.toObject = function (e) {
                if ((void 0 === e && (e = {}), !this.isValid)) return {};
                var t = Object.assign({}, this.c);
                return (
                  e.includeConfig &&
                    ((t.outputCalendar = this.outputCalendar),
                    (t.numberingSystem = this.loc.numberingSystem),
                    (t.locale = this.loc.locale)),
                  t
                );
              }),
              (e.toJSDate = function () {
                return new Date(this.isValid ? this.ts : NaN);
              }),
              (e.diff = function (e, t, n) {
                if (
                  (void 0 === t && (t = "milliseconds"),
                  void 0 === n && (n = {}),
                  !this.isValid || !e.isValid)
                )
                  return et.invalid(
                    this.invalid || e.invalid,
                    "created by diffing an invalid DateTime"
                  );
                var a = Object.assign(
                    {
                      locale: this.locale,
                      numberingSystem: this.numberingSystem,
                    },
                    n
                  ),
                  r = (function (e) {
                    return Array.isArray(e) ? e : [e];
                  })(t).map(et.normalizeUnit),
                  i = e.valueOf() > this.valueOf(),
                  o = _diff(i ? this : e, i ? e : this, r, a);
                return i ? o.negate() : o;
              }),
              (e.diffNow = function (e, t) {
                return (
                  void 0 === e && (e = "milliseconds"),
                  void 0 === t && (t = {}),
                  this.diff(DateTime.local(), e, t)
                );
              }),
              (e.until = function (e) {
                return this.isValid ? nt.fromDateTimes(this, e) : this;
              }),
              (e.hasSame = function (e, t) {
                if (!this.isValid) return !1;
                if ("millisecond" === t) return this.valueOf() === e.valueOf();
                var n = e.valueOf();
                return this.startOf(t) <= n && n <= this.endOf(t);
              }),
              (e.equals = function (e) {
                return (
                  this.isValid &&
                  e.isValid &&
                  this.valueOf() === e.valueOf() &&
                  this.zone.equals(e.zone) &&
                  this.loc.equals(e.loc)
                );
              }),
              (e.toRelative = function (e) {
                if ((void 0 === e && (e = {}), !this.isValid)) return null;
                var t =
                    e.base ||
                    DateTime.fromObject({
                      zone: this.zone,
                    }),
                  n = e.padding ? (this < t ? -e.padding : e.padding) : 0;
                return diffRelative(
                  t,
                  this.plus(n),
                  Object.assign(e, {
                    numeric: "always",
                    units: [
                      "years",
                      "months",
                      "days",
                      "hours",
                      "minutes",
                      "seconds",
                    ],
                  })
                );
              }),
              (e.toRelativeCalendar = function (e) {
                return (
                  void 0 === e && (e = {}),
                  this.isValid
                    ? diffRelative(
                        e.base ||
                          DateTime.fromObject({
                            zone: this.zone,
                          }),
                        this,
                        Object.assign(e, {
                          numeric: "auto",
                          units: ["years", "months", "days"],
                          calendary: !0,
                        })
                      )
                    : null
                );
              }),
              (DateTime.min = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                if (!t.every(DateTime.isDateTime))
                  throw new c("min requires all arguments be DateTimes");
                return bestBy(
                  t,
                  function (e) {
                    return e.valueOf();
                  },
                  Math.min
                );
              }),
              (DateTime.max = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                if (!t.every(DateTime.isDateTime))
                  throw new c("max requires all arguments be DateTimes");
                return bestBy(
                  t,
                  function (e) {
                    return e.valueOf();
                  },
                  Math.max
                );
              }),
              (DateTime.fromFormatExplain = function (e, t, n) {
                void 0 === n && (n = {});
                var a = n,
                  r = a.locale,
                  i = void 0 === r ? null : r,
                  o = a.numberingSystem,
                  s = void 0 === o ? null : o;
                return explainFromTokens(
                  Ee.fromOpts({
                    locale: i,
                    numberingSystem: s,
                    defaultToEN: !0,
                  }),
                  e,
                  t
                );
              }),
              (DateTime.fromStringExplain = function (e, t, n) {
                return (
                  void 0 === n && (n = {}), DateTime.fromFormatExplain(e, t, n)
                );
              }),
              _createClass(
                DateTime,
                [
                  {
                    key: "isValid",
                    get: function () {
                      return null === this.invalid;
                    },
                  },
                  {
                    key: "invalidReason",
                    get: function () {
                      return this.invalid ? this.invalid.reason : null;
                    },
                  },
                  {
                    key: "invalidExplanation",
                    get: function () {
                      return this.invalid ? this.invalid.explanation : null;
                    },
                  },
                  {
                    key: "locale",
                    get: function () {
                      return this.isValid ? this.loc.locale : null;
                    },
                  },
                  {
                    key: "numberingSystem",
                    get: function () {
                      return this.isValid ? this.loc.numberingSystem : null;
                    },
                  },
                  {
                    key: "outputCalendar",
                    get: function () {
                      return this.isValid ? this.loc.outputCalendar : null;
                    },
                  },
                  {
                    key: "zone",
                    get: function () {
                      return this._zone;
                    },
                  },
                  {
                    key: "zoneName",
                    get: function () {
                      return this.isValid ? this.zone.name : null;
                    },
                  },
                  {
                    key: "year",
                    get: function () {
                      return this.isValid ? this.c.year : NaN;
                    },
                  },
                  {
                    key: "quarter",
                    get: function () {
                      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
                    },
                  },
                  {
                    key: "month",
                    get: function () {
                      return this.isValid ? this.c.month : NaN;
                    },
                  },
                  {
                    key: "day",
                    get: function () {
                      return this.isValid ? this.c.day : NaN;
                    },
                  },
                  {
                    key: "hour",
                    get: function () {
                      return this.isValid ? this.c.hour : NaN;
                    },
                  },
                  {
                    key: "minute",
                    get: function () {
                      return this.isValid ? this.c.minute : NaN;
                    },
                  },
                  {
                    key: "second",
                    get: function () {
                      return this.isValid ? this.c.second : NaN;
                    },
                  },
                  {
                    key: "millisecond",
                    get: function () {
                      return this.isValid ? this.c.millisecond : NaN;
                    },
                  },
                  {
                    key: "weekYear",
                    get: function () {
                      return this.isValid
                        ? possiblyCachedWeekData(this).weekYear
                        : NaN;
                    },
                  },
                  {
                    key: "weekNumber",
                    get: function () {
                      return this.isValid
                        ? possiblyCachedWeekData(this).weekNumber
                        : NaN;
                    },
                  },
                  {
                    key: "weekday",
                    get: function () {
                      return this.isValid
                        ? possiblyCachedWeekData(this).weekday
                        : NaN;
                    },
                  },
                  {
                    key: "ordinal",
                    get: function () {
                      return this.isValid
                        ? gregorianToOrdinal(this.c).ordinal
                        : NaN;
                    },
                  },
                  {
                    key: "monthShort",
                    get: function () {
                      return this.isValid
                        ? at.months("short", {
                            locale: this.locale,
                          })[this.month - 1]
                        : null;
                    },
                  },
                  {
                    key: "monthLong",
                    get: function () {
                      return this.isValid
                        ? at.months("long", {
                            locale: this.locale,
                          })[this.month - 1]
                        : null;
                    },
                  },
                  {
                    key: "weekdayShort",
                    get: function () {
                      return this.isValid
                        ? at.weekdays("short", {
                            locale: this.locale,
                          })[this.weekday - 1]
                        : null;
                    },
                  },
                  {
                    key: "weekdayLong",
                    get: function () {
                      return this.isValid
                        ? at.weekdays("long", {
                            locale: this.locale,
                          })[this.weekday - 1]
                        : null;
                    },
                  },
                  {
                    key: "offset",
                    get: function () {
                      return this.isValid ? +this.o : NaN;
                    },
                  },
                  {
                    key: "offsetNameShort",
                    get: function () {
                      return this.isValid
                        ? this.zone.offsetName(this.ts, {
                            format: "short",
                            locale: this.locale,
                          })
                        : null;
                    },
                  },
                  {
                    key: "offsetNameLong",
                    get: function () {
                      return this.isValid
                        ? this.zone.offsetName(this.ts, {
                            format: "long",
                            locale: this.locale,
                          })
                        : null;
                    },
                  },
                  {
                    key: "isOffsetFixed",
                    get: function () {
                      return this.isValid ? this.zone.universal : null;
                    },
                  },
                  {
                    key: "isInDST",
                    get: function () {
                      return (
                        !this.isOffsetFixed &&
                        (this.offset >
                          this.set({
                            month: 1,
                          }).offset ||
                          this.offset >
                            this.set({
                              month: 5,
                            }).offset)
                      );
                    },
                  },
                  {
                    key: "isInLeapYear",
                    get: function () {
                      return isLeapYear(this.year);
                    },
                  },
                  {
                    key: "daysInMonth",
                    get: function () {
                      return daysInMonth(this.year, this.month);
                    },
                  },
                  {
                    key: "daysInYear",
                    get: function () {
                      return this.isValid ? daysInYear(this.year) : NaN;
                    },
                  },
                  {
                    key: "weeksInWeekYear",
                    get: function () {
                      return this.isValid
                        ? weeksInWeekYear(this.weekYear)
                        : NaN;
                    },
                  },
                ],
                [
                  {
                    key: "DATE_SHORT",
                    get: function () {
                      return f;
                    },
                  },
                  {
                    key: "DATE_MED",
                    get: function () {
                      return d;
                    },
                  },
                  {
                    key: "DATE_FULL",
                    get: function () {
                      return g;
                    },
                  },
                  {
                    key: "DATE_HUGE",
                    get: function () {
                      return A;
                    },
                  },
                  {
                    key: "TIME_SIMPLE",
                    get: function () {
                      return p;
                    },
                  },
                  {
                    key: "TIME_WITH_SECONDS",
                    get: function () {
                      return C;
                    },
                  },
                  {
                    key: "TIME_WITH_SHORT_OFFSET",
                    get: function () {
                      return S;
                    },
                  },
                  {
                    key: "TIME_WITH_LONG_OFFSET",
                    get: function () {
                      return E;
                    },
                  },
                  {
                    key: "TIME_24_SIMPLE",
                    get: function () {
                      return T;
                    },
                  },
                  {
                    key: "TIME_24_WITH_SECONDS",
                    get: function () {
                      return I;
                    },
                  },
                  {
                    key: "TIME_24_WITH_SHORT_OFFSET",
                    get: function () {
                      return y;
                    },
                  },
                  {
                    key: "TIME_24_WITH_LONG_OFFSET",
                    get: function () {
                      return M;
                    },
                  },
                  {
                    key: "DATETIME_SHORT",
                    get: function () {
                      return H;
                    },
                  },
                  {
                    key: "DATETIME_SHORT_WITH_SECONDS",
                    get: function () {
                      return D;
                    },
                  },
                  {
                    key: "DATETIME_MED",
                    get: function () {
                      return v;
                    },
                  },
                  {
                    key: "DATETIME_MED_WITH_SECONDS",
                    get: function () {
                      return w;
                    },
                  },
                  {
                    key: "DATETIME_MED_WITH_WEEKDAY",
                    get: function () {
                      return Z;
                    },
                  },
                  {
                    key: "DATETIME_FULL",
                    get: function () {
                      return N;
                    },
                  },
                  {
                    key: "DATETIME_FULL_WITH_SECONDS",
                    get: function () {
                      return _;
                    },
                  },
                  {
                    key: "DATETIME_HUGE",
                    get: function () {
                      return L;
                    },
                  },
                  {
                    key: "DATETIME_HUGE_WITH_SECONDS",
                    get: function () {
                      return R;
                    },
                  },
                ]
              ),
              DateTime
            );
          })();
          function friendlyDateTime(e) {
            if (St.isDateTime(e)) return e;
            if (e && e.valueOf && isNumber(e.valueOf()))
              return St.fromJSDate(e);
            if (e && "object" == typeof e) return St.fromObject(e);
            throw new c(
              "Unknown datetime argument: " + e + ", of type " + typeof e
            );
          }
          (t.DateTime = St),
            (t.Duration = et),
            (t.FixedOffsetZone = re),
            (t.IANAZone = ne),
            (t.Info = at),
            (t.Interval = nt),
            (t.InvalidZone = ie),
            (t.LocalZone = X),
            (t.Settings = ce),
            (t.Zone = q);
        },
        function (m, c, f) {
          var d;
          !(function () {
            "use strict";
            var i,
              e = 20,
              t = 1,
              n = -7,
              a = 21,
              r = !1,
              u = "[big.js] ",
              o = u + "Invalid ",
              E = o + "decimal places",
              s = o + "rounding mode",
              T = u + "Division by zero",
              l = {},
              I = void 0,
              h = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
            function round(e, t, n, a) {
              var r = e.c;
              if (
                (n === I && (n = i.RM),
                0 !== n && 1 !== n && 2 !== n && 3 !== n)
              )
                throw Error(s);
              if (t < 1)
                (a =
                  (3 === n && (a || !!r[0])) ||
                  (0 === t &&
                    ((1 === n && 5 <= r[0]) ||
                      (2 === n &&
                        (5 < r[0] || (5 === r[0] && (a || r[1] !== I))))))),
                  (r.length = 1),
                  a ? ((e.e = e.e - t + 1), (r[0] = 1)) : (r[0] = e.e = 0);
              else if (t < r.length) {
                if (
                  ((a =
                    (1 === n && 5 <= r[t]) ||
                    (2 === n &&
                      (5 < r[t] ||
                        (5 === r[t] &&
                          (a || r[t + 1] !== I || 1 & r[t - 1])))) ||
                    (3 === n && (a || !!r[0]))),
                  (r.length = t--),
                  a)
                )
                  for (; 9 < ++r[t]; ) (r[t] = 0), t-- || (++e.e, r.unshift(1));
                for (t = r.length; !r[--t]; ) r.pop();
              }
              return e;
            }
            function stringify(e, t, n) {
              var a = e.e,
                r = e.c.join(""),
                i = r.length;
              if (t)
                r =
                  r.charAt(0) +
                  (1 < i ? "." + r.slice(1) : "") +
                  (a < 0 ? "e" : "e+") +
                  a;
              else if (a < 0) {
                for (; ++a; ) r = "0" + r;
                r = "0." + r;
              } else if (0 < a)
                if (++a > i) for (a -= i; a--; ) r += "0";
                else a < i && (r = r.slice(0, a) + "." + r.slice(a));
              else 1 < i && (r = r.charAt(0) + "." + r.slice(1));
              return e.s < 0 && n ? "-" + r : r;
            }
            (l.abs = function () {
              var e = new this.constructor(this);
              return (e.s = 1), e;
            }),
              (l.cmp = function (e) {
                var t,
                  n = this.c,
                  a = (e = new this.constructor(e)).c,
                  r = this.s,
                  i = e.s,
                  o = this.e,
                  s = e.e;
                if (!n[0] || !a[0]) return n[0] ? r : a[0] ? -i : 0;
                if (r != i) return r;
                if (((t = r < 0), o != s)) return (s < o) ^ t ? 1 : -1;
                for (
                  i = (o = n.length) < (s = a.length) ? o : s, r = -1;
                  ++r < i;

                )
                  if (n[r] != a[r]) return (n[r] > a[r]) ^ t ? 1 : -1;
                return o == s ? 0 : (s < o) ^ t ? 1 : -1;
              }),
              (l.div = function (e) {
                var t = this.constructor,
                  n = this.c,
                  a = (e = new t(e)).c,
                  r = this.s == e.s ? 1 : -1,
                  i = t.DP;
                if (i !== ~~i || i < 0 || 1e6 < i) throw Error(E);
                if (!a[0]) throw Error(T);
                if (!n[0]) return new t(0 * r);
                var o,
                  s,
                  u,
                  l,
                  h,
                  m = a.slice(),
                  c = (o = a.length),
                  f = n.length,
                  d = n.slice(0, o),
                  g = d.length,
                  A = e,
                  p = (A.c = []),
                  C = 0,
                  S = i + (A.e = this.e - e.e) + 1;
                for (A.s = r, r = S < 0 ? 0 : S, m.unshift(0); g++ < o; )
                  d.push(0);
                do {
                  for (u = 0; u < 10; u++) {
                    if (o != (g = d.length)) l = g < o ? 1 : -1;
                    else
                      for (h = -1, l = 0; ++h < o; )
                        if (a[h] != d[h]) {
                          l = a[h] > d[h] ? 1 : -1;
                          break;
                        }
                    if (!(l < 0)) break;
                    for (s = g == o ? a : m; g; ) {
                      if (d[--g] < s[g]) {
                        for (h = g; h && !d[--h]; ) d[h] = 9;
                        --d[h], (d[g] += 10);
                      }
                      d[g] -= s[g];
                    }
                    for (; !d[0]; ) d.shift();
                  }
                  (p[C++] = l ? u : ++u),
                    d[0] && l ? (d[g] = n[c] || 0) : (d = [n[c]]);
                } while ((c++ < f || d[0] !== I) && r--);
                return (
                  p[0] || 1 == C || (p.shift(), A.e--, S--),
                  S < C && round(A, S, t.RM, d[0] !== I),
                  A
                );
              }),
              (l.eq = function (e) {
                return 0 === this.cmp(e);
              }),
              (l.gt = function (e) {
                return 0 < this.cmp(e);
              }),
              (l.gte = function (e) {
                return -1 < this.cmp(e);
              }),
              (l.lt = function (e) {
                return this.cmp(e) < 0;
              }),
              (l.lte = function (e) {
                return this.cmp(e) < 1;
              }),
              (l.minus = l.sub =
                function (e) {
                  var t,
                    n,
                    a,
                    r,
                    i = this,
                    o = i.constructor,
                    s = i.s,
                    u = (e = new o(e)).s;
                  if (s != u) return (e.s = -u), i.plus(e);
                  var l = i.c.slice(),
                    h = i.e,
                    m = e.c,
                    c = e.e;
                  if (!l[0] || !m[0])
                    return m[0] ? ((e.s = -u), e) : new o(l[0] ? i : 0);
                  if ((s = h - c)) {
                    for (
                      (a = (r = s < 0)
                        ? ((s = -s), l)
                        : ((c = h), m)).reverse(),
                        u = s;
                      u--;

                    )
                      a.push(0);
                    a.reverse();
                  } else
                    for (
                      n = ((r = l.length < m.length) ? l : m).length, s = u = 0;
                      u < n;
                      u++
                    )
                      if (l[u] != m[u]) {
                        r = l[u] < m[u];
                        break;
                      }
                  if (
                    (r && ((a = l), (l = m), (m = a), (e.s = -e.s)),
                    0 < (u = (n = m.length) - (t = l.length)))
                  )
                    for (; u--; ) l[t++] = 0;
                  for (u = t; s < n; ) {
                    if (l[--n] < m[n]) {
                      for (t = n; t && !l[--t]; ) l[t] = 9;
                      --l[t], (l[n] += 10);
                    }
                    l[n] -= m[n];
                  }
                  for (; 0 === l[--u]; ) l.pop();
                  for (; 0 === l[0]; ) l.shift(), --c;
                  return (
                    l[0] || ((e.s = 1), (l = [(c = 0)])),
                    (e.c = l),
                    (e.e = c),
                    e
                  );
                }),
              (l.mod = function (e) {
                var t,
                  n = this,
                  a = n.constructor,
                  r = n.s,
                  i = (e = new a(e)).s;
                if (!e.c[0]) throw Error(T);
                return (
                  (n.s = e.s = 1),
                  (t = 1 == e.cmp(n)),
                  (n.s = r),
                  (e.s = i),
                  t
                    ? new a(n)
                    : ((r = a.DP),
                      (i = a.RM),
                      (a.DP = a.RM = 0),
                      (n = n.div(e)),
                      (a.DP = r),
                      (a.RM = i),
                      this.minus(n.times(e)))
                );
              }),
              (l.plus = l.add =
                function (e) {
                  var t,
                    n = this,
                    a = n.constructor,
                    r = n.s,
                    i = (e = new a(e)).s;
                  if (r != i) return (e.s = -i), n.minus(e);
                  var o = n.e,
                    s = n.c,
                    u = e.e,
                    l = e.c;
                  if (!s[0] || !l[0]) return l[0] ? e : new a(s[0] ? n : 0 * r);
                  if (((s = s.slice()), (r = o - u))) {
                    for (
                      (t = 0 < r ? ((u = o), l) : ((r = -r), s)).reverse();
                      r--;

                    )
                      t.push(0);
                    t.reverse();
                  }
                  for (
                    s.length - l.length < 0 && ((t = l), (l = s), (s = t)),
                      r = l.length,
                      i = 0;
                    r;
                    s[r] %= 10
                  )
                    i = ((s[--r] = s[r] + l[r] + i) / 10) | 0;
                  for (i && (s.unshift(i), ++u), r = s.length; 0 === s[--r]; )
                    s.pop();
                  return (e.c = s), (e.e = u), e;
                }),
              (l.pow = function (e) {
                var t = this,
                  n = new t.constructor(1),
                  a = n,
                  r = e < 0;
                if (e !== ~~e || e < -1e6 || 1e6 < e)
                  throw Error(o + "exponent");
                for (r && (e = -e); 1 & e && (a = a.times(t)), (e >>= 1); )
                  t = t.times(t);
                return r ? n.div(a) : a;
              }),
              (l.prec = function (e, t) {
                if (e !== ~~e || e < 1 || 1e6 < e) throw Error(o + "precision");
                return round(new this.constructor(this), e, t);
              }),
              (l.round = function (e, t) {
                if (e === I) e = 0;
                else if (e !== ~~e || e < -1e6 || 1e6 < e) throw Error(E);
                return round(new this.constructor(this), e + this.e + 1, t);
              }),
              (l.sqrt = function () {
                var e,
                  t,
                  n,
                  a = this,
                  r = a.constructor,
                  i = a.s,
                  o = a.e,
                  s = new r(0.5);
                if (!a.c[0]) return new r(a);
                if (i < 0) throw Error(u + "No square root");
                for (
                  o =
                    (e =
                      0 === (i = Math.sqrt(a + "")) || i === 1 / 0
                        ? (((t = a.c.join("")).length + o) & 1 || (t += "0"),
                          (o = (((o + 1) / 2) | 0) - (o < 0 || 1 & o)),
                          new r(
                            ((i = Math.sqrt(t)) == 1 / 0
                              ? "5e"
                              : (i = i.toExponential()).slice(
                                  0,
                                  i.indexOf("e") + 1
                                )) + o
                          ))
                        : new r(i)).e + (r.DP += 4);
                  (n = e),
                    (e = s.times(n.plus(a.div(n)))),
                    n.c.slice(0, o).join("") !== e.c.slice(0, o).join("");

                );
                return round(e, (r.DP -= 4) + e.e + 1, r.RM);
              }),
              (l.times = l.mul =
                function (e) {
                  var t,
                    n = this.constructor,
                    a = this.c,
                    r = (e = new n(e)).c,
                    i = a.length,
                    o = r.length,
                    s = this.e,
                    u = e.e;
                  if (((e.s = this.s == e.s ? 1 : -1), !a[0] || !r[0]))
                    return new n(0 * e.s);
                  for (
                    e.e = s + u,
                      i < o &&
                        ((t = a), (a = r), (r = t), (u = i), (i = o), (o = u)),
                      t = new Array((u = i + o));
                    u--;

                  )
                    t[u] = 0;
                  for (s = o; s--; ) {
                    for (o = 0, u = i + s; s < u; )
                      (o = t[u] + r[s] * a[u - s - 1] + o),
                        (t[u--] = o % 10),
                        (o = (o / 10) | 0);
                    t[u] = o;
                  }
                  for (o ? ++e.e : t.shift(), s = t.length; !t[--s]; ) t.pop();
                  return (e.c = t), e;
                }),
              (l.toExponential = function (e, t) {
                var n = this,
                  a = n.c[0];
                if (e !== I) {
                  if (e !== ~~e || e < 0 || 1e6 < e) throw Error(E);
                  for (
                    n = round(new n.constructor(n), ++e, t);
                    n.c.length < e;

                  )
                    n.c.push(0);
                }
                return stringify(n, !0, !!a);
              }),
              (l.toFixed = function (e, t) {
                var n = this,
                  a = n.c[0];
                if (e !== I) {
                  if (e !== ~~e || e < 0 || 1e6 < e) throw Error(E);
                  for (
                    e =
                      e +
                      (n = round(new n.constructor(n), e + n.e + 1, t)).e +
                      1;
                    n.c.length < e;

                  )
                    n.c.push(0);
                }
                return stringify(n, !1, !!a);
              }),
              (l.toJSON = l.toString =
                function () {
                  var e = this,
                    t = e.constructor;
                  return stringify(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
                }),
              (l.toNumber = function () {
                var e = Number(stringify(this, !0, !0));
                if (!0 === this.constructor.strict && !this.eq(e.toString()))
                  throw Error(u + "Imprecise conversion");
                return e;
              }),
              (l.toPrecision = function (e, t) {
                var n = this,
                  a = n.constructor,
                  r = n.c[0];
                if (e !== I) {
                  if (e !== ~~e || e < 1 || 1e6 < e)
                    throw Error(o + "precision");
                  for (n = round(new a(n), e, t); n.c.length < e; ) n.c.push(0);
                }
                return stringify(
                  n,
                  e <= n.e || n.e <= a.NE || n.e >= a.PE,
                  !!r
                );
              }),
              (l.valueOf = function () {
                var e = this.constructor;
                if (!0 === e.strict) throw Error(u + "valueOf disallowed");
                return stringify(this, this.e <= e.NE || this.e >= e.PE, !0);
              }),
              ((i = (function _Big_() {
                function Big(e) {
                  var t = this;
                  if (!(t instanceof Big))
                    return e === I ? _Big_() : new Big(e);
                  if (e instanceof Big)
                    (t.s = e.s), (t.e = e.e), (t.c = e.c.slice());
                  else {
                    if ("string" != typeof e) {
                      if (!0 === Big.strict) throw TypeError(o + "number");
                      e = 0 === e && 1 / e < 0 ? "-0" : String(e);
                    }
                    !(function (e, t) {
                      var n, a, r;
                      if (!h.test(t)) throw Error(o + "number");
                      for (
                        e.s = "-" == t.charAt(0) ? ((t = t.slice(1)), -1) : 1,
                          -1 < (n = t.indexOf(".")) && (t = t.replace(".", "")),
                          0 < (a = t.search(/e/i))
                            ? (n < 0 && (n = a),
                              (n += +t.slice(a + 1)),
                              (t = t.substring(0, a)))
                            : n < 0 && (n = t.length),
                          r = t.length,
                          a = 0;
                        a < r && "0" == t.charAt(a);

                      )
                        ++a;
                      if (a == r) e.c = [(e.e = 0)];
                      else {
                        for (; 0 < r && "0" == t.charAt(--r); );
                        for (e.e = n - a - 1, e.c = [], n = 0; a <= r; )
                          e.c[n++] = +t.charAt(a++);
                      }
                    })(t, e);
                  }
                  t.constructor = Big;
                }
                return (
                  (Big.prototype = l),
                  (Big.DP = e),
                  (Big.RM = t),
                  (Big.NE = n),
                  (Big.PE = a),
                  (Big.strict = r),
                  Big
                );
              })()).default = i.Big =
                i),
              void 0 ===
                (d = function () {
                  return i;
                }.call(c, f, c, m)) || (m.exports = d);
          })();
        },
        function (e, t, n) {
          "use strict";
          n.r(t),
            n.d(t, "getZmanimJson", function () {
              return getZmanimJson;
            }),
            n.d(t, "Time", function () {
              return q;
            }),
            n.d(t, "GeoLocation", function () {
              return y;
            }),
            n.d(t, "GeoLocationUtils", function () {
              return ee;
            }),
            n.d(t, "Zman", function () {
              return W;
            }),
            n.d(t, "Utils", function () {
              return s;
            }),
            n.d(t, "TimeZone", function () {
              return a;
            }),
            n.d(t, "Calendar", function () {
              return i;
            }),
            n.d(t, "MathUtils", function () {
              return w;
            }),
            n.d(t, "StringUtils", function () {
              return l;
            }),
            n.d(t, "IntegerUtils", function () {
              return h;
            }),
            n.d(t, "Long_MIN_VALUE", function () {
              return c;
            }),
            n.d(t, "padZeros", function () {
              return padZeros;
            }),
            n.d(t, "NOAACalculator", function () {
              return v;
            }),
            n.d(t, "SunTimesCalculator", function () {
              return ae;
            }),
            n.d(t, "AstronomicalCalendar", function () {
              return Z;
            }),
            n.d(t, "ZmanimCalendar", function () {
              return K;
            }),
            n.d(t, "ComplexZmanimCalendar", function () {
              return z;
            }),
            n.d(t, "JewishDate", function () {
              return N;
            }),
            n.d(t, "Parsha", function () {
              return L;
            }),
            n.d(t, "JewishCalendar", function () {
              return B;
            }),
            n.d(t, "Daf", function () {
              return re;
            }),
            n.d(t, "YomiCalculator", function () {
              return ie;
            }),
            n.d(t, "YerushalmiYomiCalculator", function () {
              return oe;
            }),
            n.d(t, "HebrewDateFormatter", function () {
              return se;
            }),
            n.d(t, "ZmanimFormatter", function () {
              return Q;
            }),
            n.d(t, "Luxon", function () {
              return ue;
            });
          var s,
            a,
            r,
            i,
            o,
            w,
            u,
            l,
            h,
            m = n(0);
          ((s = s || {}).getAllMethodNames = function (e, t) {
            void 0 === t && (t = !1);
            for (
              var n = new Set();
              (e = Reflect.getPrototypeOf(e)) && Reflect.getPrototypeOf(e);

            )
              Reflect.ownKeys(e)
                .filter(function (e) {
                  return !t || "constructor" !== e;
                })
                .forEach(function (e) {
                  return n.add(e);
                });
            return Array.from(n, function (e) {
              return e.toString();
            }).sort();
          }),
            ((r = a = a || {}).getRawOffset = function (e) {
              var t,
                n = m.DateTime.fromObject({
                  month: 1,
                  day: 1,
                  zone: e,
                }),
                a = n.set({
                  month: 7,
                });
              if (n.offset === a.offset) t = n.offset;
              else {
                var r = Math.max(n.offset, a.offset);
                t = r < 0 ? 0 - r : 0 - Math.min(n.offset, a.offset);
              }
              return 60 * t * 1e3;
            }),
            (r.getDisplayName = function (e, t, n) {
              return (
                void 0 === t && (t = m.DateTime.local()),
                void 0 === n && (n = !1),
                m.Info.normalizeZone(e).offsetName(t.toMillis(), {
                  format: n ? "short" : "long",
                })
              );
            }),
            (r.getDSTSavings = function (e) {
              return m.Info.hasDST(e) ? 36e5 : 0;
            }),
            (r.getOffset = function (e, t) {
              return 60 * m.Info.normalizeZone(e).offset(t) * 1e3;
            }),
            ((o = i = i || {}).JANUARY = 0),
            (o.FEBRUARY = 1),
            (o.MARCH = 2),
            (o.APRIL = 3),
            (o.MAY = 4),
            (o.JUNE = 5),
            (o.JULY = 6),
            (o.AUGUST = 7),
            (o.SEPTEMBER = 8),
            (o.OCTOBER = 9),
            (o.NOVEMBER = 10),
            (o.DECEMBER = 11),
            (o.SUNDAY = 1),
            (o.MONDAY = 2),
            (o.TUESDAY = 3),
            (o.WEDNESDAY = 4),
            (o.THURSDAY = 5),
            (o.FRIDAY = 6),
            (o.SATURDAY = 7),
            (o.DATE = 5),
            (o.MONTH = 2),
            (o.YEAR = 1),
            ((u = w = w || {}).degreesToRadians = function (e) {
              return (e * Math.PI) / 180;
            }),
            (u.radiansToDegrees = function (e) {
              return (180 * e) / Math.PI;
            }),
            ((l = l || {}).compareTo = function (e, t) {
              for (var n = 0; n < Math.min(e.length, t.length); ) {
                if (e.substr(n, 1) !== t.substr(n, 1))
                  return e.charCodeAt(n) - t.charCodeAt(n);
                n++;
              }
              return e.length - t.length;
            }),
            ((h = h || {}).compare = function (e, t) {
              return e === t ? 0 : t < e ? 1 : -1;
            });
          var c = NaN;
          function padZeros(e, t) {
            var n = Math.trunc(e);
            return n >= Math.pow(10, t)
              ? n.toString()
              : "0".repeat(t).concat(n.toString()).slice(-t);
          }
          var f,
            d,
            g =
              ((f = function (e, t) {
                return (f =
                  Object.setPrototypeOf ||
                  ({
                    __proto__: [],
                  } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  })(e, t);
              }),
              function (e, t) {
                function __() {
                  this.constructor = e;
                }
                f(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((__.prototype = t.prototype), new __()));
              }),
            A = ((d = Error), g(BaseCustomError, d), BaseCustomError);
          function BaseCustomError(e) {
            var t = d.call(this, e) || this;
            return (t.name = t.constructor.name), t;
          }
          var p,
            C = (g(NullPointerException, (p = A)), NullPointerException);
          function NullPointerException() {
            return p.call(this) || this;
          }
          var S,
            E =
              (g(IllegalArgumentException, (S = A)), IllegalArgumentException);
          function IllegalArgumentException() {
            return (null !== S && S.apply(this, arguments)) || this;
          }
          var T,
            I = (g(UnsupportedError, (T = A)), UnsupportedError);
          function UnsupportedError() {
            return (null !== T && T.apply(this, arguments)) || this;
          }
          var y =
            ((GeoLocation.prototype.getElevation = function () {
              return this.elevation;
            }),
            (GeoLocation.prototype.setElevation = function (e) {
              if (e < 0) throw new E("Elevation cannot be negative");
              this.elevation = e;
            }),
            (GeoLocation.prototype.setLatitude = function (e, t, n, a) {
              if (t) {
                var r = e + (t + n / 60) / 60;
                if (90 < r || r < 0)
                  throw new E(
                    "Latitude must be between 0 and  90. Use direction of S instead of negative."
                  );
                if ("S" === a) r *= -1;
                else if ("N" !== a)
                  throw new E("Latitude direction must be N or S");
                this.latitude = r;
              } else {
                var i = e;
                if (90 < i || i < -90)
                  throw new E("Latitude must be between -90 and  90");
                this.latitude = i;
              }
            }),
            (GeoLocation.prototype.getLatitude = function () {
              return this.latitude;
            }),
            (GeoLocation.prototype.setLongitude = function (e, t, n, a) {
              if (t) {
                var r = e + (t + n / 60) / 60;
                if (180 < r || this.longitude < 0)
                  throw new E(
                    "Longitude must be between 0 and  180.  Use a direction of W instead of negative."
                  );
                if ("W" === a) r *= -1;
                else if ("E" !== a)
                  throw new E("Longitude direction must be E or W");
                this.longitude = r;
              } else {
                var i = e;
                if (180 < i || i < -180)
                  throw new E("Longitude must be between -180 and  180");
                this.longitude = i;
              }
            }),
            (GeoLocation.prototype.getLongitude = function () {
              return this.longitude;
            }),
            (GeoLocation.prototype.getLocationName = function () {
              return this.locationName;
            }),
            (GeoLocation.prototype.setLocationName = function (e) {
              this.locationName = e;
            }),
            (GeoLocation.prototype.getTimeZone = function () {
              return this.timeZoneId;
            }),
            (GeoLocation.prototype.setTimeZone = function (e) {
              this.timeZoneId = e;
            }),
            (GeoLocation.prototype.getLocalMeanTimeOffset = function () {
              return (
                4 * this.getLongitude() * GeoLocation.MINUTE_MILLIS -
                a.getRawOffset(this.getTimeZone())
              );
            }),
            (GeoLocation.prototype.getAntimeridianAdjustment = function () {
              var e = this.getLocalMeanTimeOffset() / GeoLocation.HOUR_MILLIS;
              return 20 <= e ? 1 : e <= -20 ? -1 : 0;
            }),
            (GeoLocation.prototype.getGeodesicInitialBearing = function (e) {
              return this.vincentyFormula(e, GeoLocation.INITIAL_BEARING);
            }),
            (GeoLocation.prototype.getGeodesicFinalBearing = function (e) {
              return this.vincentyFormula(e, GeoLocation.FINAL_BEARING);
            }),
            (GeoLocation.prototype.getGeodesicDistance = function (e) {
              return this.vincentyFormula(e, GeoLocation.DISTANCE);
            }),
            (GeoLocation.prototype.vincentyFormula = function (e, t) {
              for (
                var n,
                  a = 6356752.3142,
                  r = 1 / 298.257223563,
                  i = w.degreesToRadians(
                    e.getLongitude() - this.getLongitude()
                  ),
                  o = Math.atan(
                    (1 - r) * Math.tan(w.degreesToRadians(this.getLatitude()))
                  ),
                  s = Math.atan(
                    (1 - r) * Math.tan(w.degreesToRadians(e.getLatitude()))
                  ),
                  u = Math.sin(o),
                  l = Math.cos(o),
                  h = Math.sin(s),
                  m = Math.cos(s),
                  c = i,
                  f = 2 * Math.PI,
                  d = 20,
                  g = 0,
                  A = 0,
                  p = 0,
                  C = 0,
                  S = 0,
                  E = 0,
                  T = 0,
                  I = 0;
                1e-12 < Math.abs(c - f) && 0 < --d;

              ) {
                if (
                  ((g = Math.sin(c)),
                  (A = Math.cos(c)),
                  0 ===
                    (p = Math.sqrt(
                      m * g * (m * g) +
                        (l * h - u * m * A) * (l * h - u * m * A)
                    )))
                )
                  return 0;
                (C = u * h + l * m * A),
                  (S = Math.atan2(p, C)),
                  (I = C - (2 * u * h) / (T = 1 - (E = (l * m * g) / p) * E)),
                  Number.isNaN(I) && (I = 0),
                  (f = c),
                  (c =
                    i +
                    (1 - (n = (r / 16) * T * (4 + r * (4 - 3 * T)))) *
                      r *
                      E *
                      (S + n * p * (I + n * C * (2 * I * I - 1))));
              }
              if (0 === d) return Number.NaN;
              var y = (272331606681.9453 * T) / (a * a),
                O = (y / 1024) * (256 + y * (y * (74 - 47 * y) - 128)),
                M =
                  a *
                  (1 + (y / 16384) * (4096 + y * (y * (320 - 175 * y) - 768))) *
                  (S -
                    O *
                      p *
                      (I +
                        (O / 4) *
                          (C * (2 * I * I - 1) -
                            (O / 6) * I * (4 * p * p - 3) * (4 * I * I - 3)))),
                H = w.radiansToDegrees(Math.atan2(m * g, l * h - u * m * A)),
                D = w.radiansToDegrees(Math.atan2(l * g, -u * m + l * h * A));
              return t === GeoLocation.DISTANCE
                ? M
                : t === GeoLocation.INITIAL_BEARING
                ? H
                : t === GeoLocation.FINAL_BEARING
                ? D
                : Number.NaN;
            }),
            (GeoLocation.prototype.getRhumbLineBearing = function (e) {
              var t = w.degreesToRadians(
                  e.getLongitude() - this.getLongitude()
                ),
                n = Math.log(
                  Math.tan(
                    w.degreesToRadians(e.getLatitude()) / 2 + Math.PI / 4
                  ) /
                    Math.tan(
                      w.degreesToRadians(this.getLatitude()) / 2 + Math.PI / 4
                    )
                );
              return (
                Math.abs(t) > Math.PI &&
                  (t = 0 < t ? -(2 * Math.PI - t) : 2 * Math.PI + t),
                w.radiansToDegrees(Math.atan2(t, n))
              );
            }),
            (GeoLocation.prototype.getRhumbLineDistance = function (e) {
              var t =
                  w.degreesToRadians(e.getLatitude()) -
                  w.degreesToRadians(this.getLatitude()),
                n = Math.abs(
                  w.degreesToRadians(e.getLongitude()) -
                    w.degreesToRadians(this.getLongitude())
                ),
                a =
                  t /
                  Math.log(
                    Math.tan(
                      w.degreesToRadians(e.getLatitude()) / 2 + Math.PI / 4
                    ) /
                      Math.tan(
                        w.degreesToRadians(this.getLatitude()) / 2 + Math.PI / 4
                      )
                  );
              return (
                Number.isFinite(a) ||
                  (a = Math.cos(w.degreesToRadians(this.getLatitude()))),
                n > Math.PI && (n = 2 * Math.PI - n),
                6378137 * Math.sqrt(t * t + a * a * n * n)
              );
            }),
            (GeoLocation.prototype.toXML = function () {
              throw new I("This method is deprecated");
            }),
            (GeoLocation.prototype.equals = function (e) {
              if (this === e) return !0;
              if (!(e instanceof GeoLocation)) return !1;
              var t = e;
              return (
                this.latitude === t.latitude &&
                this.longitude === t.longitude &&
                this.elevation === t.elevation &&
                this.locationName === t.locationName &&
                this.timeZoneId === t.getTimeZone()
              );
            }),
            (GeoLocation.prototype.toString = function () {
              return ("Location Name:\t\t\t" + this.getLocationName())
                .concat(
                  "\nLatitude:\t\t\t" + this.getLatitude().toString() + "°"
                )
                .concat(
                  "\nLongitude:\t\t\t" + this.getLongitude().toString() + "°"
                )
                .concat(
                  "\nElevation:\t\t\t" +
                    this.getElevation().toString() +
                    " Meters"
                )
                .concat("\nTimezone ID:\t\t\t" + this.getTimeZone())
                .concat(
                  "\nTimezone Display Name:\t\t" +
                    a.getDisplayName(this.getTimeZone())
                )
                .concat(
                  " (" +
                    a.getDisplayName(
                      this.getTimeZone(),
                      m.DateTime.local(),
                      !0
                    ) +
                    ")"
                )
                .concat(
                  "\nTimezone GMT Offset:\t\t" +
                    (
                      a.getRawOffset(this.getTimeZone()) /
                      GeoLocation.HOUR_MILLIS
                    ).toString()
                )
                .concat(
                  "\nTimezone DST Offset:\t\t" +
                    (
                      a.getDSTSavings(this.getTimeZone()) /
                      GeoLocation.HOUR_MILLIS
                    ).toString()
                );
            }),
            (GeoLocation.prototype.clone = function () {
              return JSON.parse(JSON.stringify(this));
            }),
            (GeoLocation.DISTANCE = 0),
            (GeoLocation.INITIAL_BEARING = 1),
            (GeoLocation.FINAL_BEARING = 2),
            (GeoLocation.HOUR_MILLIS = 60 * (GeoLocation.MINUTE_MILLIS = 6e4)),
            GeoLocation);
          function GeoLocation(e, t, n, a, r) {
            void 0 === e && (e = "Greenwich, England"),
              void 0 === t && (t = 51.4772),
              void 0 === n && (n = 0),
              (this.locationName = null);
            var i = 0;
            r ? (i = a) : (r = a),
              this.setLocationName(e),
              this.setLatitude(t),
              this.setLongitude(n),
              this.setElevation(i),
              this.setTimeZone(r);
          }
          var O = n(1),
            M =
              ((AstronomicalCalculator.prototype.getEarthRadius = function () {
                return this.earthRadius;
              }),
              (AstronomicalCalculator.prototype.setEarthRadius = function (e) {
                this.earthRadius = e;
              }),
              (AstronomicalCalculator.getDefault = function () {
                throw new I(
                  "This method is deprecated, due to the fact that it depends on a circular dependency. Use `new NOAACalculator()` instead."
                );
              }),
              (AstronomicalCalculator.prototype.getElevationAdjustment =
                function (e) {
                  return w.radiansToDegrees(
                    Math.acos(this.earthRadius / (this.earthRadius + e / 1e3))
                  );
                }),
              (AstronomicalCalculator.prototype.adjustZenith = function (e, t) {
                var n = e;
                return (
                  e === AstronomicalCalculator.GEOMETRIC_ZENITH &&
                    (n =
                      e +
                      (this.getSolarRadius() +
                        this.getRefraction() +
                        this.getElevationAdjustment(t))),
                  n
                );
              }),
              (AstronomicalCalculator.prototype.getRefraction = function () {
                return this.refraction;
              }),
              (AstronomicalCalculator.prototype.setRefraction = function (e) {
                this.refraction = e;
              }),
              (AstronomicalCalculator.prototype.getSolarRadius = function () {
                return this.solarRadius;
              }),
              (AstronomicalCalculator.prototype.setSolarRadius = function (e) {
                this.solarRadius = e;
              }),
              (AstronomicalCalculator.prototype.clone = function () {
                return JSON.parse(JSON.stringify(this));
              }),
              (AstronomicalCalculator.prototype.equals = function (e) {
                return this === e;
              }),
              (AstronomicalCalculator.GEOMETRIC_ZENITH = 90),
              AstronomicalCalculator);
          function AstronomicalCalculator() {
            (this.refraction = 34 / 60),
              (this.solarRadius = 16 / 60),
              (this.earthRadius = 6356.9);
          }
          var H,
            D,
            v =
              (((H = function (e, t) {
                return (H =
                  Object.setPrototypeOf ||
                  ({
                    __proto__: [],
                  } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  })(e, t);
              }),
              function (e, t) {
                function __() {
                  this.constructor = e;
                }
                H(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((__.prototype = t.prototype), new __()));
              })(NOAACalculator, (D = M)),
              (NOAACalculator.prototype.getCalculatorName = function () {
                return "US National Oceanic and Atmospheric Administration Algorithm";
              }),
              (NOAACalculator.prototype.getUTCSunrise = function (e, t, n, a) {
                var r = a ? t.getElevation() : 0,
                  i = this.adjustZenith(n, r),
                  o = NOAACalculator.getSunriseUTC(
                    NOAACalculator.getJulianDay(e),
                    t.getLatitude(),
                    -t.getLongitude(),
                    i
                  );
                for (o /= 60; o < 0; ) o += 24;
                for (; 24 <= o; ) o -= 24;
                return o;
              }),
              (NOAACalculator.prototype.getUTCSunset = function (e, t, n, a) {
                var r = a ? t.getElevation() : 0,
                  i = this.adjustZenith(n, r),
                  o = NOAACalculator.getSunsetUTC(
                    NOAACalculator.getJulianDay(e),
                    t.getLatitude(),
                    -t.getLongitude(),
                    i
                  );
                for (o /= 60; o < 0; ) o += 24;
                for (; 24 <= o; ) o -= 24;
                return o;
              }),
              (NOAACalculator.getJulianDay = function (e) {
                var t = e.year,
                  n = e.month,
                  a = e.day;
                n <= 2 && ((t -= 1), (n += 12));
                var r = Math.trunc(t / 100),
                  i = Math.trunc(2 - r + r / 4);
                return (
                  Math.floor(365.25 * (t + 4716)) +
                  Math.floor(30.6001 * (n + 1)) +
                  a +
                  i -
                  1524.5
                );
              }),
              (NOAACalculator.getJulianCenturiesFromJulianDay = function (e) {
                return (
                  (e - NOAACalculator.JULIAN_DAY_JAN_1_2000) /
                  NOAACalculator.JULIAN_DAYS_PER_CENTURY
                );
              }),
              (NOAACalculator.getJulianDayFromJulianCenturies = function (e) {
                return (
                  e * NOAACalculator.JULIAN_DAYS_PER_CENTURY +
                  NOAACalculator.JULIAN_DAY_JAN_1_2000
                );
              }),
              (NOAACalculator.getSunGeometricMeanLongitude = function (e) {
                for (
                  var t = 280.46646 + e * (36000.76983 + 3032e-7 * e);
                  360 < t;

                )
                  t -= 360;
                for (; t < 0; ) t += 360;
                return t;
              }),
              (NOAACalculator.getSunGeometricMeanAnomaly = function (e) {
                return 357.52911 + e * (35999.05029 - 1537e-7 * e);
              }),
              (NOAACalculator.getEarthOrbitEccentricity = function (e) {
                return 0.016708634 - e * (42037e-9 + 1.267e-7 * e);
              }),
              (NOAACalculator.getSunEquationOfCenter = function (e) {
                var t = NOAACalculator.getSunGeometricMeanAnomaly(e),
                  n = w.degreesToRadians(t);
                return (
                  Math.sin(n) * (1.914602 - e * (0.004817 + 14e-6 * e)) +
                  Math.sin(n + n) * (0.019993 - 101e-6 * e) +
                  289e-6 * Math.sin(n + n + n)
                );
              }),
              (NOAACalculator.getSunTrueLongitude = function (e) {
                return (
                  NOAACalculator.getSunGeometricMeanLongitude(e) +
                  NOAACalculator.getSunEquationOfCenter(e)
                );
              }),
              (NOAACalculator.getSunApparentLongitude = function (e) {
                var t = 125.04 - 1934.136 * e;
                return (
                  NOAACalculator.getSunTrueLongitude(e) -
                  0.00569 -
                  0.00478 * Math.sin(w.degreesToRadians(t))
                );
              }),
              (NOAACalculator.getMeanObliquityOfEcliptic = function (e) {
                return (
                  23 +
                  (26 +
                    (21.448 - e * (46.815 + e * (59e-5 - 0.001813 * e))) / 60) /
                    60
                );
              }),
              (NOAACalculator.getObliquityCorrection = function (e) {
                var t = 125.04 - 1934.136 * e;
                return (
                  NOAACalculator.getMeanObliquityOfEcliptic(e) +
                  0.00256 * Math.cos(w.degreesToRadians(t))
                );
              }),
              (NOAACalculator.getSunDeclination = function (e) {
                var t = NOAACalculator.getObliquityCorrection(e),
                  n = NOAACalculator.getSunApparentLongitude(e),
                  a =
                    Math.sin(w.degreesToRadians(t)) *
                    Math.sin(w.degreesToRadians(n));
                return w.radiansToDegrees(Math.asin(a));
              }),
              (NOAACalculator.getEquationOfTime = function (e) {
                var t = NOAACalculator.getObliquityCorrection(e),
                  n = NOAACalculator.getSunGeometricMeanLongitude(e),
                  a = NOAACalculator.getEarthOrbitEccentricity(e),
                  r = NOAACalculator.getSunGeometricMeanAnomaly(e),
                  i = Math.tan(w.degreesToRadians(t) / 2);
                i *= i;
                var o = Math.sin(2 * w.degreesToRadians(n)),
                  s = Math.sin(w.degreesToRadians(r)),
                  u =
                    i * o -
                    2 * a * s +
                    4 * a * i * s * Math.cos(2 * w.degreesToRadians(n)) -
                    0.5 * i * i * Math.sin(4 * w.degreesToRadians(n)) -
                    1.25 * a * a * Math.sin(2 * w.degreesToRadians(r));
                return 4 * w.radiansToDegrees(u);
              }),
              (NOAACalculator.getSunHourAngleAtSunrise = function (e, t, n) {
                var a = w.degreesToRadians(e),
                  r = w.degreesToRadians(t);
                return Math.acos(
                  Math.cos(w.degreesToRadians(n)) /
                    (Math.cos(a) * Math.cos(r)) -
                    Math.tan(a) * Math.tan(r)
                );
              }),
              (NOAACalculator.getSunHourAngleAtSunset = function (e, t, n) {
                var a = w.degreesToRadians(e),
                  r = w.degreesToRadians(t);
                return -Math.acos(
                  Math.cos(w.degreesToRadians(n)) /
                    (Math.cos(a) * Math.cos(r)) -
                    Math.tan(a) * Math.tan(r)
                );
              }),
              (NOAACalculator.getSolarElevation = function (e, t, n) {
                var a = NOAACalculator.getJulianDay(e),
                  r = NOAACalculator.getJulianCenturiesFromJulianDay(a),
                  i = NOAACalculator.getEquationOfTime(r),
                  o = e.hour + 12 + (e.minute + i + e.second / 60) / 60;
                o = ((-360 * o) / 24) % 360;
                var s = w.degreesToRadians(n - o),
                  u = NOAACalculator.getSunDeclination(r),
                  l = w.degreesToRadians(u),
                  h = w.degreesToRadians(t);
                return w.radiansToDegrees(
                  Math.asin(
                    Math.sin(h) * Math.sin(l) +
                      Math.cos(h) * Math.cos(l) * Math.cos(s)
                  )
                );
              }),
              (NOAACalculator.getSolarAzimuth = function (e, t, n) {
                var a = NOAACalculator.getJulianDay(e),
                  r = NOAACalculator.getJulianCenturiesFromJulianDay(a),
                  i = NOAACalculator.getEquationOfTime(r),
                  o = e.hour + 12 + (e.minute + i + e.second / 60) / 60;
                o = ((-360 * o) / 24) % 360;
                var s = w.degreesToRadians(n - o),
                  u = NOAACalculator.getSunDeclination(r),
                  l = w.degreesToRadians(u),
                  h = w.degreesToRadians(t);
                return (
                  w.radiansToDegrees(
                    Math.atan(
                      Math.sin(s) /
                        (Math.cos(s) * Math.sin(h) - Math.tan(l) * Math.cos(h))
                    )
                  ) + 180
                );
              }),
              (NOAACalculator.getSunriseUTC = function (e, t, n, a) {
                var r = NOAACalculator.getJulianCenturiesFromJulianDay(e),
                  i = NOAACalculator.getSolarNoonUTC(r, n),
                  o = NOAACalculator.getJulianCenturiesFromJulianDay(
                    e + i / 1440
                  ),
                  s = NOAACalculator.getEquationOfTime(o),
                  u = NOAACalculator.getSunDeclination(o),
                  l = NOAACalculator.getSunHourAngleAtSunrise(t, u, a),
                  h = n - w.radiansToDegrees(l),
                  m = 4 * h,
                  c = 720 + m - s,
                  f = NOAACalculator.getJulianCenturiesFromJulianDay(
                    NOAACalculator.getJulianDayFromJulianCenturies(r) + c / 1440
                  );
                return (
                  (s = NOAACalculator.getEquationOfTime(f)),
                  (u = NOAACalculator.getSunDeclination(f)),
                  (l = NOAACalculator.getSunHourAngleAtSunrise(t, u, a)),
                  (c = 720 + (m = 4 * (h = n - w.radiansToDegrees(l))) - s)
                );
              }),
              (NOAACalculator.getSolarNoonUTC = function (e, t) {
                var n = NOAACalculator.getJulianCenturiesFromJulianDay(
                    NOAACalculator.getJulianDayFromJulianCenturies(e) + t / 360
                  ),
                  a = NOAACalculator.getEquationOfTime(n),
                  r = 720 + 4 * t - a,
                  i = NOAACalculator.getJulianCenturiesFromJulianDay(
                    NOAACalculator.getJulianDayFromJulianCenturies(e) -
                      0.5 +
                      r / 1440
                  );
                return 720 + 4 * t - (a = NOAACalculator.getEquationOfTime(i));
              }),
              (NOAACalculator.getSunsetUTC = function (e, t, n, a) {
                var r = NOAACalculator.getJulianCenturiesFromJulianDay(e),
                  i = NOAACalculator.getSolarNoonUTC(r, n),
                  o = NOAACalculator.getJulianCenturiesFromJulianDay(
                    e + i / 1440
                  ),
                  s = NOAACalculator.getEquationOfTime(o),
                  u = NOAACalculator.getSunDeclination(o),
                  l = NOAACalculator.getSunHourAngleAtSunset(t, u, a),
                  h = n - w.radiansToDegrees(l),
                  m = 4 * h,
                  c = 720 + m - s,
                  f = NOAACalculator.getJulianCenturiesFromJulianDay(
                    NOAACalculator.getJulianDayFromJulianCenturies(r) + c / 1440
                  );
                return (
                  (s = NOAACalculator.getEquationOfTime(f)),
                  (u = NOAACalculator.getSunDeclination(f)),
                  (l = NOAACalculator.getSunHourAngleAtSunset(t, u, a)),
                  (c = 720 + (m = 4 * (h = n - w.radiansToDegrees(l))) - s)
                );
              }),
              (NOAACalculator.JULIAN_DAY_JAN_1_2000 = 2451545),
              (NOAACalculator.JULIAN_DAYS_PER_CENTURY = 36525),
              NOAACalculator);
          function NOAACalculator() {
            return (null !== D && D.apply(this, arguments)) || this;
          }
          var Z =
            ((AstronomicalCalendar.prototype.getSunrise = function () {
              var e = this.getUTCSunrise(AstronomicalCalendar.GEOMETRIC_ZENITH);
              return Number.isNaN(e) ? null : this.getDateFromTime(e, !0);
            }),
            (AstronomicalCalendar.prototype.getSeaLevelSunrise = function () {
              var e = this.getUTCSeaLevelSunrise(
                AstronomicalCalendar.GEOMETRIC_ZENITH
              );
              return Number.isNaN(e) ? null : this.getDateFromTime(e, !0);
            }),
            (AstronomicalCalendar.prototype.getBeginCivilTwilight =
              function () {
                return this.getSunriseOffsetByDegrees(
                  AstronomicalCalendar.CIVIL_ZENITH
                );
              }),
            (AstronomicalCalendar.prototype.getBeginNauticalTwilight =
              function () {
                return this.getSunriseOffsetByDegrees(
                  AstronomicalCalendar.NAUTICAL_ZENITH
                );
              }),
            (AstronomicalCalendar.prototype.getBeginAstronomicalTwilight =
              function () {
                return this.getSunriseOffsetByDegrees(
                  AstronomicalCalendar.ASTRONOMICAL_ZENITH
                );
              }),
            (AstronomicalCalendar.prototype.getSunset = function () {
              var e = this.getUTCSunset(AstronomicalCalendar.GEOMETRIC_ZENITH);
              return Number.isNaN(e) ? null : this.getDateFromTime(e, !1);
            }),
            (AstronomicalCalendar.prototype.getSeaLevelSunset = function () {
              var e = this.getUTCSeaLevelSunset(
                AstronomicalCalendar.GEOMETRIC_ZENITH
              );
              return Number.isNaN(e) ? null : this.getDateFromTime(e, !1);
            }),
            (AstronomicalCalendar.prototype.getEndCivilTwilight = function () {
              return this.getSunsetOffsetByDegrees(
                AstronomicalCalendar.CIVIL_ZENITH
              );
            }),
            (AstronomicalCalendar.prototype.getEndNauticalTwilight =
              function () {
                return this.getSunsetOffsetByDegrees(
                  AstronomicalCalendar.NAUTICAL_ZENITH
                );
              }),
            (AstronomicalCalendar.prototype.getEndAstronomicalTwilight =
              function () {
                return this.getSunsetOffsetByDegrees(
                  AstronomicalCalendar.ASTRONOMICAL_ZENITH
                );
              }),
            (AstronomicalCalendar.getTimeOffset = function (e, t) {
              return null === e || t === c || Number.isNaN(t)
                ? null
                : e.plus({
                    milliseconds: t,
                  });
            }),
            (AstronomicalCalendar.prototype.getSunriseOffsetByDegrees =
              function (e) {
                var t = this.getUTCSunrise(e);
                return Number.isNaN(t) ? null : this.getDateFromTime(t, !0);
              }),
            (AstronomicalCalendar.prototype.getSunsetOffsetByDegrees =
              function (e) {
                var t = this.getUTCSunset(e);
                return Number.isNaN(t) ? null : this.getDateFromTime(t, !1);
              }),
            (AstronomicalCalendar.prototype.getUTCSunrise = function (e) {
              return this.getAstronomicalCalculator().getUTCSunrise(
                this.getAdjustedDate(),
                this.getGeoLocation(),
                e,
                !0
              );
            }),
            (AstronomicalCalendar.prototype.getUTCSeaLevelSunrise = function (
              e
            ) {
              return this.getAstronomicalCalculator().getUTCSunrise(
                this.getAdjustedDate(),
                this.getGeoLocation(),
                e,
                !1
              );
            }),
            (AstronomicalCalendar.prototype.getUTCSunset = function (e) {
              return this.getAstronomicalCalculator().getUTCSunset(
                this.getAdjustedDate(),
                this.getGeoLocation(),
                e,
                !0
              );
            }),
            (AstronomicalCalendar.prototype.getUTCSeaLevelSunset = function (
              e
            ) {
              return this.getAstronomicalCalculator().getUTCSunset(
                this.getAdjustedDate(),
                this.getGeoLocation(),
                e,
                !1
              );
            }),
            (AstronomicalCalendar.prototype.getTemporalHour = function (e, t) {
              return (
                void 0 === e && (e = this.getSeaLevelSunrise()),
                void 0 === t && (t = this.getSeaLevelSunset()),
                null === e || null === t ? c : (t.valueOf() - e.valueOf()) / 12
              );
            }),
            (AstronomicalCalendar.prototype.getSunTransit = function (e, t) {
              void 0 === e && (e = this.getSeaLevelSunrise()),
                void 0 === t && (t = this.getSeaLevelSunset());
              var n = this.getTemporalHour(e, t);
              return AstronomicalCalendar.getTimeOffset(e, 6 * n);
            }),
            (AstronomicalCalendar.prototype.getDateFromTime = function (e, t) {
              if (Number.isNaN(e)) return null;
              var n = e,
                a = this.getAdjustedDate(),
                r = m.DateTime.utc(a.year, a.month, a.day),
                i = Math.trunc(n);
              n -= i;
              var o = Math.trunc((n *= 60));
              n -= o;
              var s = Math.trunc((n *= 60));
              n -= s;
              var u = Math.trunc(this.getGeoLocation().getLongitude() / 15);
              return (
                t && 18 < u + i
                  ? (r = r.minus({
                      days: 1,
                    }))
                  : !t &&
                    u + i < 6 &&
                    (r = r.plus({
                      days: 1,
                    })),
                r.set({
                  hour: i,
                  minute: o,
                  second: s,
                  millisecond: Math.trunc(1e3 * n),
                })
              );
            }),
            (AstronomicalCalendar.prototype.getSunriseSolarDipFromOffset =
              function (e) {
                if (Number.isNaN(e)) return null;
                for (
                  var t = this.getSeaLevelSunrise(),
                    n = AstronomicalCalendar.getTimeOffset(
                      this.getSeaLevelSunrise(),
                      -e * AstronomicalCalendar.MINUTE_MILLIS
                    ),
                    a = new O.Big(0),
                    r = new O.Big("0.0001");
                  null === t || (e < 0 && t < n) || (0 < e && n < t);

                )
                  (a = 0 < e ? a.add(r) : a.sub(r)),
                    (t = this.getSunriseOffsetByDegrees(
                      AstronomicalCalendar.GEOMETRIC_ZENITH + a.toNumber()
                    ));
                return a.toNumber();
              }),
            (AstronomicalCalendar.prototype.getSunsetSolarDipFromOffset =
              function (e) {
                if (Number.isNaN(e)) return null;
                for (
                  var t = this.getSeaLevelSunset(),
                    n = AstronomicalCalendar.getTimeOffset(
                      this.getSeaLevelSunset(),
                      e * AstronomicalCalendar.MINUTE_MILLIS
                    ),
                    a = new O.Big(0),
                    r = new O.Big("0.001");
                  null == t || (0 < e && t < n) || (e < 0 && n < t);

                )
                  (a = 0 < e ? a.add(r) : a.sub(r)),
                    (t = this.getSunsetOffsetByDegrees(
                      AstronomicalCalendar.GEOMETRIC_ZENITH + a.toNumber()
                    ));
                return a.toNumber();
              }),
            (AstronomicalCalendar.prototype.getAdjustedDate = function () {
              var e = this.getGeoLocation().getAntimeridianAdjustment();
              return 0 === e
                ? this.getDate()
                : this.getDate().plus({
                    days: e,
                  });
            }),
            (AstronomicalCalendar.prototype.toString = function () {
              throw new I(
                "This method is unsupported, due to the fact that it depends on a circular dependency."
              );
            }),
            (AstronomicalCalendar.prototype.toJSON = function () {
              throw new I(
                "This method is unsupported, due to the fact that it depends on a circular dependency. Use `ZmanimFormatter.toJSON(astronomicalCalendar)` instead."
              );
            }),
            (AstronomicalCalendar.prototype.equals = function (e) {
              if (this === e) return !0;
              if (!(e instanceof AstronomicalCalendar)) return !1;
              var t = e;
              return (
                this.getDate().equals(t.getDate()) &&
                this.getGeoLocation().equals(t.getGeoLocation()) &&
                this.getAstronomicalCalculator() ===
                  t.getAstronomicalCalculator()
              );
            }),
            (AstronomicalCalendar.prototype.getGeoLocation = function () {
              return this.geoLocation;
            }),
            (AstronomicalCalendar.prototype.setGeoLocation = function (e) {
              (this.geoLocation = e),
                (this.date = this.date.setZone(e.getTimeZone()));
            }),
            (AstronomicalCalendar.prototype.getAstronomicalCalculator =
              function () {
                return this.astronomicalCalculator;
              }),
            (AstronomicalCalendar.prototype.setAstronomicalCalculator =
              function (e) {
                this.astronomicalCalculator = e;
              }),
            (AstronomicalCalendar.prototype.getDate = function () {
              return this.date;
            }),
            (AstronomicalCalendar.prototype.setDate = function (e) {
              m.DateTime.isDateTime(e)
                ? (this.date = e)
                : e instanceof Date
                ? (this.date = m.DateTime.fromJSDate(e))
                : "string" == typeof e
                ? (this.date = m.DateTime.fromISO(e))
                : "number" == typeof e &&
                  (this.date = m.DateTime.fromMillis(e));
            }),
            (AstronomicalCalendar.prototype.clone = function () {
              var e = new AstronomicalCalendar();
              return (
                e.setDate(this.date),
                e.setAstronomicalCalculator(this.astronomicalCalculator),
                e.setGeoLocation(this.geoLocation),
                e
              );
            }),
            (AstronomicalCalendar.prototype.getClassName = function () {
              return "com.kosherjava.zmanim.AstronomicalCalendar";
            }),
            (AstronomicalCalendar.GEOMETRIC_ZENITH = 90),
            (AstronomicalCalendar.CIVIL_ZENITH = 96),
            (AstronomicalCalendar.NAUTICAL_ZENITH = 102),
            (AstronomicalCalendar.ASTRONOMICAL_ZENITH = 108),
            (AstronomicalCalendar.HOUR_MILLIS =
              60 * (AstronomicalCalendar.MINUTE_MILLIS = 6e4)),
            AstronomicalCalendar);
          function AstronomicalCalendar(e) {
            void 0 === e && (e = new y()),
              this.setDate(
                m.DateTime.fromObject({
                  zone: e.getTimeZone(),
                })
              ),
              this.setGeoLocation(e),
              this.setAstronomicalCalculator(new v());
          }
          var N =
            ((JewishDate.prototype.getMoladHours = function () {
              return this.moladHours;
            }),
            (JewishDate.prototype.setMoladHours = function (e) {
              this.moladHours = e;
            }),
            (JewishDate.prototype.getMoladMinutes = function () {
              return this.moladMinutes;
            }),
            (JewishDate.prototype.setMoladMinutes = function (e) {
              this.moladMinutes = e;
            }),
            (JewishDate.prototype.setMoladChalakim = function (e) {
              this.moladChalakim = e;
            }),
            (JewishDate.prototype.getMoladChalakim = function () {
              return this.moladChalakim;
            }),
            (JewishDate.prototype.getLastDayOfGregorianMonth = function (e) {
              return JewishDate.getLastDayOfGregorianMonth(
                e,
                this.gregorianYear
              );
            }),
            (JewishDate.getLastDayOfGregorianMonth = function (e, t) {
              switch (e) {
                case 2:
                  return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0 ? 29 : 28;
                case 4:
                case 6:
                case 9:
                case 11:
                  return 30;
                default:
                  return 31;
              }
            }),
            (JewishDate.prototype.absDateToDate = function (e) {
              for (
                var t = Math.trunc(e / 366);
                e >= JewishDate.gregorianDateToAbsDate(t + 1, 1, 1);

              )
                t++;
              for (
                var n = 1;
                e >
                JewishDate.gregorianDateToAbsDate(
                  t,
                  n,
                  JewishDate.getLastDayOfGregorianMonth(n, t)
                );

              )
                n++;
              var a = e - JewishDate.gregorianDateToAbsDate(t, n, 1) + 1;
              this.setInternalGregorianDate(t, n, a);
            }),
            (JewishDate.prototype.getAbsDate = function () {
              return this.gregorianAbsDate;
            }),
            (JewishDate.gregorianDateToAbsDate = function (e, t, n) {
              for (var a = n, r = t - 1; 0 < r; r--)
                a += JewishDate.getLastDayOfGregorianMonth(r, e);
              return (
                a +
                365 * (e - 1) +
                Math.trunc((e - 1) / 4) -
                Math.trunc((e - 1) / 100) +
                Math.trunc((e - 1) / 400)
              );
            }),
            (JewishDate.isJewishLeapYear = function (e) {
              return (7 * e + 1) % 19 < 7;
            }),
            (JewishDate.prototype.isJewishLeapYear = function () {
              return JewishDate.isJewishLeapYear(this.getJewishYear());
            }),
            (JewishDate.getLastMonthOfJewishYear = function (e) {
              return JewishDate.isJewishLeapYear(e)
                ? JewishDate.ADAR_II
                : JewishDate.ADAR;
            }),
            (JewishDate.getJewishCalendarElapsedDays = function (e) {
              var t = JewishDate.getChalakimSinceMoladTohu(
                  e,
                  JewishDate.TISHREI
                ),
                n = Math.trunc(t / JewishDate.CHALAKIM_PER_DAY),
                a = Math.trunc(t - n * JewishDate.CHALAKIM_PER_DAY);
              return JewishDate.addDechiyos(e, n, a);
            }),
            (JewishDate.addDechiyos = function (e, t, n) {
              var a = t;
              return (
                (19440 <= n ||
                  (t % 7 == 2 &&
                    9924 <= n &&
                    !JewishDate.isJewishLeapYear(e)) ||
                  (t % 7 == 1 &&
                    16789 <= n &&
                    JewishDate.isJewishLeapYear(e - 1))) &&
                  (a += 1),
                (a % 7 != 0 && a % 7 != 3 && a % 7 != 5) || a++,
                a
              );
            }),
            (JewishDate.getChalakimSinceMoladTohu = function (e, t) {
              var n = JewishDate.getJewishMonthOfYear(e, t),
                a =
                  235 * Math.trunc((e - 1) / 19) +
                  ((e - 1) % 19) * 12 +
                  Math.trunc((((e - 1) % 19) * 7 + 1) / 19) +
                  (n - 1);
              return (
                JewishDate.CHALAKIM_MOLAD_TOHU +
                JewishDate.CHALAKIM_PER_MONTH * a
              );
            }),
            (JewishDate.prototype.getChalakimSinceMoladTohu = function () {
              return JewishDate.getChalakimSinceMoladTohu(
                this.jewishYear,
                this.jewishMonth
              );
            }),
            (JewishDate.getJewishMonthOfYear = function (e, t) {
              var n = JewishDate.isJewishLeapYear(e);
              return ((t + (n ? 6 : 5)) % (n ? 13 : 12)) + 1;
            }),
            (JewishDate.validateJewishDate = function (e, t, n, a, r, i) {
              if (
                t < JewishDate.NISSAN ||
                t > JewishDate.getLastMonthOfJewishYear(e)
              )
                throw new E(
                  "The Jewish month has to be between 1 and 12 (or 13 on a leap year). " +
                    t +
                    " is invalid for the year " +
                    e +
                    "."
                );
              if (n < 1 || 30 < n)
                throw new E(
                  "The Jewish day of month can't be < 1 or > 30. " +
                    n +
                    " is invalid."
                );
              if (
                e < 3761 ||
                (3761 === e &&
                  JewishDate.TISHREI <= t &&
                  t < JewishDate.TEVES) ||
                (3761 === e && t === JewishDate.TEVES && n < 18)
              )
                throw new E(
                  "A Jewish date earlier than 18 Teves, 3761 (1/1/1 Gregorian) can't be set. " +
                    e +
                    ", " +
                    t +
                    ", " +
                    n +
                    " is invalid."
                );
              if (a < 0 || 23 < a)
                throw new E(
                  "Hours < 0 or > 23 can't be set. " + a + " is invalid."
                );
              if (r < 0 || 59 < r)
                throw new E(
                  "Minutes < 0 or > 59 can't be set. " + r + " is invalid."
                );
              if (i < 0 || 17 < i)
                throw new E(
                  "Chalakim/parts < 0 or > 17 can't be set. " +
                    i +
                    " is invalid. For larger numbers such as 793 (TaShTzaG) break the chalakim into minutes (18 chalakim per minutes, so it would be 44 minutes and 1 chelek in the case of 793 (TaShTzaG)"
                );
            }),
            (JewishDate.validateGregorianDate = function (e, t, n) {
              JewishDate.validateGregorianMonth(t),
                JewishDate.validateGregorianDayOfMonth(n),
                JewishDate.validateGregorianYear(e);
            }),
            (JewishDate.validateGregorianMonth = function (e) {
              if (11 < e || e < 0)
                throw new E(
                  "The Gregorian month has to be between 0 - 11. " +
                    e +
                    " is invalid."
                );
            }),
            (JewishDate.validateGregorianDayOfMonth = function (e) {
              if (e <= 0)
                throw new E(
                  "The day of month can't be less than 1. " + e + " is invalid."
                );
            }),
            (JewishDate.validateGregorianYear = function (e) {
              if (e < 1)
                throw new E(
                  "Years < 1 can't be calculated. " + e + " is invalid."
                );
            }),
            (JewishDate.getDaysInJewishYear = function (e) {
              return (
                JewishDate.getJewishCalendarElapsedDays(e + 1) -
                JewishDate.getJewishCalendarElapsedDays(e)
              );
            }),
            (JewishDate.prototype.getDaysInJewishYear = function () {
              return JewishDate.getDaysInJewishYear(this.getJewishYear());
            }),
            (JewishDate.isCheshvanLong = function (e) {
              return JewishDate.getDaysInJewishYear(e) % 10 == 5;
            }),
            (JewishDate.prototype.isCheshvanLong = function () {
              return JewishDate.isCheshvanLong(this.getJewishYear());
            }),
            (JewishDate.isKislevShort = function (e) {
              return JewishDate.getDaysInJewishYear(e) % 10 == 3;
            }),
            (JewishDate.prototype.isKislevShort = function () {
              return JewishDate.isKislevShort(this.getJewishYear());
            }),
            (JewishDate.prototype.getCheshvanKislevKviah = function () {
              return this.isCheshvanLong() && !this.isKislevShort()
                ? JewishDate.SHELAIMIM
                : !this.isCheshvanLong() && this.isKislevShort()
                ? JewishDate.CHASERIM
                : JewishDate.KESIDRAN;
            }),
            (JewishDate.getDaysInJewishMonth = function (e, t) {
              return [
                JewishDate.IYAR,
                JewishDate.TAMMUZ,
                JewishDate.ELUL,
                JewishDate.ADAR_II,
              ].includes(e) ||
                (e === JewishDate.CHESHVAN && !JewishDate.isCheshvanLong(t)) ||
                (e === JewishDate.KISLEV && JewishDate.isKislevShort(t)) ||
                e === JewishDate.TEVES ||
                (e === JewishDate.ADAR && !JewishDate.isJewishLeapYear(t))
                ? 29
                : 30;
            }),
            (JewishDate.prototype.getDaysInJewishMonth = function () {
              return JewishDate.getDaysInJewishMonth(
                this.getJewishMonth(),
                this.getJewishYear()
              );
            }),
            (JewishDate.prototype.absDateToJewishDate = function () {
              for (
                this.jewishYear = Math.trunc(
                  (this.gregorianAbsDate - JewishDate.JEWISH_EPOCH) / 366
                );
                this.gregorianAbsDate >=
                JewishDate.jewishDateToAbsDate(
                  this.jewishYear + 1,
                  JewishDate.TISHREI,
                  1
                );

              )
                this.jewishYear++;
              for (
                this.gregorianAbsDate <
                JewishDate.jewishDateToAbsDate(
                  this.jewishYear,
                  JewishDate.NISSAN,
                  1
                )
                  ? (this.jewishMonth = JewishDate.TISHREI)
                  : (this.jewishMonth = JewishDate.NISSAN);
                this.gregorianAbsDate >
                JewishDate.jewishDateToAbsDate(
                  this.jewishYear,
                  this.jewishMonth,
                  this.getDaysInJewishMonth()
                );

              )
                this.jewishMonth++;
              this.jewishDay =
                this.gregorianAbsDate -
                JewishDate.jewishDateToAbsDate(
                  this.jewishYear,
                  this.jewishMonth,
                  1
                ) +
                1;
            }),
            (JewishDate.jewishDateToAbsDate = function (e, t, n) {
              return (
                JewishDate.getDaysSinceStartOfJewishYear(e, t, n) +
                JewishDate.getJewishCalendarElapsedDays(e) +
                JewishDate.JEWISH_EPOCH
              );
            }),
            (JewishDate.prototype.getMolad = function () {
              var e = new JewishDate(this.getChalakimSinceMoladTohu());
              return (
                6 <= e.getMoladHours() && e.forward(i.DATE, 1),
                e.setMoladHours((e.getMoladHours() + 18) % 24),
                e
              );
            }),
            (JewishDate.moladToAbsDate = function (e) {
              return (
                Math.trunc(e / JewishDate.CHALAKIM_PER_DAY) +
                JewishDate.JEWISH_EPOCH
              );
            }),
            (JewishDate.prototype.setMoladTime = function (e) {
              var t = e;
              this.setMoladHours(Math.trunc(t / JewishDate.CHALAKIM_PER_HOUR)),
                (t -= this.getMoladHours() * JewishDate.CHALAKIM_PER_HOUR),
                this.setMoladMinutes(
                  Math.trunc(t / JewishDate.CHALAKIM_PER_MINUTE)
                ),
                this.setMoladChalakim(
                  t - this.moladMinutes * JewishDate.CHALAKIM_PER_MINUTE
                );
            }),
            (JewishDate.prototype.getDaysSinceStartOfJewishYear = function () {
              return JewishDate.getDaysSinceStartOfJewishYear(
                this.getJewishYear(),
                this.getJewishMonth(),
                this.getJewishDayOfMonth()
              );
            }),
            (JewishDate.getDaysSinceStartOfJewishYear = function (e, t, n) {
              var a = n;
              if (t < JewishDate.TISHREI) {
                for (
                  var r = JewishDate.TISHREI;
                  r <= JewishDate.getLastMonthOfJewishYear(e);
                  r++
                )
                  a += JewishDate.getDaysInJewishMonth(r, e);
                for (r = JewishDate.NISSAN; r < t; r++)
                  a += JewishDate.getDaysInJewishMonth(r, e);
              } else
                for (r = JewishDate.TISHREI; r < t; r++)
                  a += JewishDate.getDaysInJewishMonth(r, e);
              return a;
            }),
            (JewishDate.prototype.setDate = function (e) {
              if (e.year < 1)
                throw new E(
                  "Dates with a BC era are not supported. The year " +
                    e.year +
                    " is invalid."
                );
              (this.gregorianMonth = e.month),
                (this.gregorianDayOfMonth = e.day),
                (this.gregorianYear = e.year),
                (this.gregorianAbsDate = JewishDate.gregorianDateToAbsDate(
                  this.gregorianYear,
                  this.gregorianMonth,
                  this.gregorianDayOfMonth
                )),
                this.absDateToJewishDate(),
                (this.dayOfWeek = Math.abs(this.gregorianAbsDate % 7) + 1);
            }),
            (JewishDate.prototype.setGregorianDate = function (e, t, n) {
              JewishDate.validateGregorianDate(e, t, n),
                this.setInternalGregorianDate(e, t + 1, n);
            }),
            (JewishDate.prototype.setInternalGregorianDate = function (
              e,
              t,
              n
            ) {
              n > JewishDate.getLastDayOfGregorianMonth(t, e) &&
                (n = JewishDate.getLastDayOfGregorianMonth(t, e)),
                (this.gregorianMonth = t),
                (this.gregorianDayOfMonth = n),
                (this.gregorianYear = e),
                (this.gregorianAbsDate = JewishDate.gregorianDateToAbsDate(
                  this.gregorianYear,
                  this.gregorianMonth,
                  this.gregorianDayOfMonth
                )),
                this.absDateToJewishDate(),
                (this.dayOfWeek = Math.abs(this.gregorianAbsDate % 7) + 1);
            }),
            (JewishDate.prototype.setJewishDate = function (e, t, n, a, r, i) {
              void 0 === a && (a = 0),
                void 0 === r && (r = 0),
                void 0 === i && (i = 0),
                JewishDate.validateJewishDate(e, t, n, a, r, i),
                n > JewishDate.getDaysInJewishMonth(t, e) &&
                  (n = JewishDate.getDaysInJewishMonth(t, e)),
                (this.jewishMonth = t),
                (this.jewishDay = n),
                (this.jewishYear = e),
                (this.moladHours = a),
                (this.moladMinutes = r),
                (this.moladChalakim = i),
                (this.gregorianAbsDate = JewishDate.jewishDateToAbsDate(
                  this.jewishYear,
                  this.jewishMonth,
                  this.jewishDay
                )),
                this.absDateToDate(this.gregorianAbsDate),
                (this.dayOfWeek = Math.abs(this.gregorianAbsDate % 7) + 1);
            }),
            (JewishDate.prototype.getDate = function () {
              return m.DateTime.fromObject({
                year: this.gregorianYear,
                month: this.gregorianMonth,
                day: this.gregorianDayOfMonth,
              });
            }),
            (JewishDate.prototype.resetDate = function () {
              this.setDate(m.DateTime.local());
            }),
            (JewishDate.prototype.toString = function () {
              var e,
                t = [
                  "Nissan",
                  "Iyar",
                  "Sivan",
                  "Tammuz",
                  "Av",
                  "Elul",
                  "Tishrei",
                  "Cheshvan",
                  "Kislev",
                  "Teves",
                  "Shevat",
                  "Adar",
                  "Adar II",
                  "Adar I",
                ];
              return (
                (e =
                  this.isJewishLeapYear() &&
                  this.jewishMonth === JewishDate.ADAR
                    ? t[13]
                    : t[this.jewishMonth - 1]),
                this.getJewishDayOfMonth() +
                  " " +
                  e +
                  ", " +
                  this.getJewishYear()
              );
            }),
            (JewishDate.prototype.forward = function (e, t) {
              if (e !== i.DATE && e !== i.MONTH && e !== i.YEAR)
                throw new E(
                  "Unsupported field was passed to Forward. Only Calendar.DATE, Calendar.MONTH or Calendar.YEAR are supported."
                );
              if (t < 1)
                throw new E(
                  "JewishDate.forward() does not support amounts less than 1. See JewishDate.back()"
                );
              if (e === i.DATE)
                for (var n = 0; n < t; n++)
                  this.gregorianDayOfMonth ===
                  JewishDate.getLastDayOfGregorianMonth(
                    this.gregorianMonth,
                    this.gregorianYear
                  )
                    ? ((this.gregorianDayOfMonth = 1),
                      12 === this.gregorianMonth
                        ? this.gregorianYear++
                        : this.gregorianMonth++)
                    : this.gregorianDayOfMonth++,
                    this.jewishDay === this.getDaysInJewishMonth()
                      ? (this.jewishMonth === JewishDate.ELUL
                          ? (this.jewishYear++, this.jewishMonth++)
                          : this.jewishMonth ===
                            JewishDate.getLastMonthOfJewishYear(this.jewishYear)
                          ? (this.jewishMonth = JewishDate.NISSAN)
                          : this.jewishMonth++,
                        (this.jewishDay = 1))
                      : this.jewishDay++,
                    7 === this.dayOfWeek
                      ? (this.dayOfWeek = 1)
                      : this.dayOfWeek++,
                    this.gregorianAbsDate++;
              else
                e === i.MONTH
                  ? this.forwardJewishMonth(t)
                  : e === i.YEAR &&
                    this.setJewishYear(this.getJewishYear() + t);
            }),
            (JewishDate.prototype.forwardJewishMonth = function (e) {
              if (e < 1)
                throw new E(
                  "the amount of months to forward has to be greater than zero."
                );
              for (var t = 0; t < e; t++)
                this.getJewishMonth() === JewishDate.ELUL
                  ? (this.setJewishMonth(JewishDate.TISHREI),
                    this.setJewishYear(this.getJewishYear() + 1))
                  : (!this.isJewishLeapYear() &&
                      this.getJewishMonth() === JewishDate.ADAR) ||
                    (this.isJewishLeapYear() &&
                      this.getJewishMonth() === JewishDate.ADAR_II)
                  ? this.setJewishMonth(JewishDate.NISSAN)
                  : this.setJewishMonth(this.getJewishMonth() + 1);
            }),
            (JewishDate.prototype.back = function () {
              1 === this.gregorianDayOfMonth
                ? (1 === this.gregorianMonth
                    ? ((this.gregorianMonth = 12), this.gregorianYear--)
                    : this.gregorianMonth--,
                  (this.gregorianDayOfMonth =
                    JewishDate.getLastDayOfGregorianMonth(
                      this.gregorianMonth,
                      this.gregorianYear
                    )))
                : this.gregorianDayOfMonth--,
                1 === this.jewishDay
                  ? (this.jewishMonth === JewishDate.NISSAN
                      ? (this.jewishMonth = JewishDate.getLastMonthOfJewishYear(
                          this.jewishYear
                        ))
                      : (this.jewishMonth === JewishDate.TISHREI &&
                          this.jewishYear--,
                        this.jewishMonth--),
                    (this.jewishDay = this.getDaysInJewishMonth()))
                  : this.jewishDay--,
                1 === this.dayOfWeek ? (this.dayOfWeek = 7) : this.dayOfWeek--,
                this.gregorianAbsDate--;
            }),
            (JewishDate.prototype.equals = function (e) {
              if (this === e) return !0;
              if (!(e instanceof JewishDate)) return !1;
              var t = e;
              return this.gregorianAbsDate === t.getAbsDate();
            }),
            (JewishDate.prototype.compareTo = function (e) {
              return h.compare(this.gregorianAbsDate, e.getAbsDate());
            }),
            (JewishDate.prototype.getGregorianMonth = function () {
              return this.gregorianMonth - 1;
            }),
            (JewishDate.prototype.getGregorianDayOfMonth = function () {
              return this.gregorianDayOfMonth;
            }),
            (JewishDate.prototype.getGregorianYear = function () {
              return this.gregorianYear;
            }),
            (JewishDate.prototype.getJewishMonth = function () {
              return this.jewishMonth;
            }),
            (JewishDate.prototype.getJewishDayOfMonth = function () {
              return this.jewishDay;
            }),
            (JewishDate.prototype.getJewishYear = function () {
              return this.jewishYear;
            }),
            (JewishDate.prototype.getDayOfWeek = function () {
              return this.dayOfWeek;
            }),
            (JewishDate.prototype.setGregorianMonth = function (e) {
              JewishDate.validateGregorianMonth(e),
                this.setInternalGregorianDate(
                  this.gregorianYear,
                  e + 1,
                  this.gregorianDayOfMonth
                );
            }),
            (JewishDate.prototype.setGregorianYear = function (e) {
              JewishDate.validateGregorianYear(e),
                this.setInternalGregorianDate(
                  e,
                  this.gregorianMonth,
                  this.gregorianDayOfMonth
                );
            }),
            (JewishDate.prototype.setGregorianDayOfMonth = function (e) {
              JewishDate.validateGregorianDayOfMonth(e),
                this.setInternalGregorianDate(
                  this.gregorianYear,
                  this.gregorianMonth,
                  e
                );
            }),
            (JewishDate.prototype.setJewishMonth = function (e) {
              this.setJewishDate(this.jewishYear, e, this.jewishDay);
            }),
            (JewishDate.prototype.setJewishYear = function (e) {
              this.setJewishDate(e, this.jewishMonth, this.jewishDay);
            }),
            (JewishDate.prototype.setJewishDayOfMonth = function (e) {
              this.setJewishDate(this.jewishYear, this.jewishMonth, e);
            }),
            (JewishDate.prototype.clone = function () {
              var e = new JewishDate(
                this.jewishYear,
                this.jewishMonth,
                this.jewishDay
              );
              return (
                e.setMoladHours(this.moladHours),
                e.setMoladMinutes(this.moladMinutes),
                e.setMoladChalakim(this.moladChalakim),
                e
              );
            }),
            (JewishDate.NISSAN = 1),
            (JewishDate.IYAR = 2),
            (JewishDate.SIVAN = 3),
            (JewishDate.TAMMUZ = 4),
            (JewishDate.AV = 5),
            (JewishDate.ELUL = 6),
            (JewishDate.TISHREI = 7),
            (JewishDate.CHESHVAN = 8),
            (JewishDate.KISLEV = 9),
            (JewishDate.TEVES = 10),
            (JewishDate.SHEVAT = 11),
            (JewishDate.ADAR = 12),
            (JewishDate.ADAR_II = 13),
            (JewishDate.JEWISH_EPOCH = -1373429),
            (JewishDate.CHALAKIM_PER_MINUTE = 18),
            (JewishDate.CHALAKIM_PER_HOUR = 1080),
            (JewishDate.CHALAKIM_PER_DAY = 25920),
            (JewishDate.CHALAKIM_PER_MONTH = 765433),
            (JewishDate.CHALAKIM_MOLAD_TOHU = 31524),
            (JewishDate.CHASERIM = 0),
            (JewishDate.KESIDRAN = 1),
            (JewishDate.SHELAIMIM = 2),
            JewishDate);
          function JewishDate(e, t, n) {
            if (e) {
              if (t) this.setJewishDate(e, t, n);
              else if (e instanceof Date)
                this.setDate(m.DateTime.fromJSDate(e));
              else if (m.DateTime.isDateTime(e)) this.setDate(e);
              else if ("number" == typeof e) {
                var a = e;
                this.absDateToDate(JewishDate.moladToAbsDate(a));
                var r = Math.trunc(a / JewishDate.CHALAKIM_PER_DAY),
                  i = Math.trunc(a - r * JewishDate.CHALAKIM_PER_DAY);
                this.setMoladTime(i);
              }
            } else this.resetDate();
          }
          var _,
            L,
            R,
            b =
              ((_ = function (e, t) {
                return (_ =
                  Object.setPrototypeOf ||
                  ({
                    __proto__: [],
                  } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  })(e, t);
              }),
              function (e, t) {
                function __() {
                  this.constructor = e;
                }
                _(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((__.prototype = t.prototype), new __()));
              }),
            J = i.MONDAY,
            Y = i.TUESDAY,
            V = i.THURSDAY,
            x = i.FRIDAY,
            P = i.SATURDAY;
          ((R = L = L || {})[(R.NONE = 0)] = "NONE"),
            (R[(R.BERESHIS = 1)] = "BERESHIS"),
            (R[(R.NOACH = 2)] = "NOACH"),
            (R[(R.LECH_LECHA = 3)] = "LECH_LECHA"),
            (R[(R.VAYERA = 4)] = "VAYERA"),
            (R[(R.CHAYEI_SARA = 5)] = "CHAYEI_SARA"),
            (R[(R.TOLDOS = 6)] = "TOLDOS"),
            (R[(R.VAYETZEI = 7)] = "VAYETZEI"),
            (R[(R.VAYISHLACH = 8)] = "VAYISHLACH"),
            (R[(R.VAYESHEV = 9)] = "VAYESHEV"),
            (R[(R.MIKETZ = 10)] = "MIKETZ"),
            (R[(R.VAYIGASH = 11)] = "VAYIGASH"),
            (R[(R.VAYECHI = 12)] = "VAYECHI"),
            (R[(R.SHEMOS = 13)] = "SHEMOS"),
            (R[(R.VAERA = 14)] = "VAERA"),
            (R[(R.BO = 15)] = "BO"),
            (R[(R.BESHALACH = 16)] = "BESHALACH"),
            (R[(R.YISRO = 17)] = "YISRO"),
            (R[(R.MISHPATIM = 18)] = "MISHPATIM"),
            (R[(R.TERUMAH = 19)] = "TERUMAH"),
            (R[(R.TETZAVEH = 20)] = "TETZAVEH"),
            (R[(R.KI_SISA = 21)] = "KI_SISA"),
            (R[(R.VAYAKHEL = 22)] = "VAYAKHEL"),
            (R[(R.PEKUDEI = 23)] = "PEKUDEI"),
            (R[(R.VAYIKRA = 24)] = "VAYIKRA"),
            (R[(R.TZAV = 25)] = "TZAV"),
            (R[(R.SHMINI = 26)] = "SHMINI"),
            (R[(R.TAZRIA = 27)] = "TAZRIA"),
            (R[(R.METZORA = 28)] = "METZORA"),
            (R[(R.ACHREI_MOS = 29)] = "ACHREI_MOS"),
            (R[(R.KEDOSHIM = 30)] = "KEDOSHIM"),
            (R[(R.EMOR = 31)] = "EMOR"),
            (R[(R.BEHAR = 32)] = "BEHAR"),
            (R[(R.BECHUKOSAI = 33)] = "BECHUKOSAI"),
            (R[(R.BAMIDBAR = 34)] = "BAMIDBAR"),
            (R[(R.NASSO = 35)] = "NASSO"),
            (R[(R.BEHAALOSCHA = 36)] = "BEHAALOSCHA"),
            (R[(R.SHLACH = 37)] = "SHLACH"),
            (R[(R.KORACH = 38)] = "KORACH"),
            (R[(R.CHUKAS = 39)] = "CHUKAS"),
            (R[(R.BALAK = 40)] = "BALAK"),
            (R[(R.PINCHAS = 41)] = "PINCHAS"),
            (R[(R.MATOS = 42)] = "MATOS"),
            (R[(R.MASEI = 43)] = "MASEI"),
            (R[(R.DEVARIM = 44)] = "DEVARIM"),
            (R[(R.VAESCHANAN = 45)] = "VAESCHANAN"),
            (R[(R.EIKEV = 46)] = "EIKEV"),
            (R[(R.REEH = 47)] = "REEH"),
            (R[(R.SHOFTIM = 48)] = "SHOFTIM"),
            (R[(R.KI_SEITZEI = 49)] = "KI_SEITZEI"),
            (R[(R.KI_SAVO = 50)] = "KI_SAVO"),
            (R[(R.NITZAVIM = 51)] = "NITZAVIM"),
            (R[(R.VAYEILECH = 52)] = "VAYEILECH"),
            (R[(R.HAAZINU = 53)] = "HAAZINU"),
            (R[(R.VZOS_HABERACHA = 54)] = "VZOS_HABERACHA"),
            (R[(R.VAYAKHEL_PEKUDEI = 55)] = "VAYAKHEL_PEKUDEI"),
            (R[(R.TAZRIA_METZORA = 56)] = "TAZRIA_METZORA"),
            (R[(R.ACHREI_MOS_KEDOSHIM = 57)] = "ACHREI_MOS_KEDOSHIM"),
            (R[(R.BEHAR_BECHUKOSAI = 58)] = "BEHAR_BECHUKOSAI"),
            (R[(R.CHUKAS_BALAK = 59)] = "CHUKAS_BALAK"),
            (R[(R.MATOS_MASEI = 60)] = "MATOS_MASEI"),
            (R[(R.NITZAVIM_VAYEILECH = 61)] = "NITZAVIM_VAYEILECH"),
            (R[(R.SHKALIM = 62)] = "SHKALIM"),
            (R[(R.ZACHOR = 63)] = "ZACHOR"),
            (R[(R.PARA = 64)] = "PARA"),
            (R[(R.HACHODESH = 65)] = "HACHODESH");
          var k,
            B =
              (b(JewishCalendar, (k = N)),
              (JewishCalendar.prototype.isUseModernHolidays = function () {
                return this.useModernHolidays;
              }),
              (JewishCalendar.prototype.setUseModernHolidays = function (e) {
                this.useModernHolidays = e;
              }),
              (JewishCalendar.prototype.setInIsrael = function (e) {
                this.inIsrael = e;
              }),
              (JewishCalendar.prototype.getInIsrael = function () {
                return this.inIsrael;
              }),
              (JewishCalendar.prototype.isBirkasHachamah = function () {
                var e = JewishCalendar.getJewishCalendarElapsedDays(
                  this.getJewishYear()
                );
                return (
                  (e += this.getDaysSinceStartOfJewishYear()) % 10227 == 172
                );
              }),
              (JewishCalendar.prototype.getParshaYearType = function () {
                var e =
                  (JewishCalendar.getJewishCalendarElapsedDays(
                    this.getJewishYear()
                  ) +
                    1) %
                  7;
                if ((0 === e && (e = P), this.isJewishLeapYear()))
                  switch (e) {
                    case J:
                      if (this.isKislevShort())
                        return this.getInIsrael() ? 14 : 6;
                      if (this.isCheshvanLong())
                        return this.getInIsrael() ? 15 : 7;
                      break;
                    case Y:
                      return this.getInIsrael() ? 15 : 7;
                    case V:
                      if (this.isKislevShort()) return 8;
                      if (this.isCheshvanLong()) return 9;
                      break;
                    case P:
                      if (this.isKislevShort()) return 10;
                      if (this.isCheshvanLong())
                        return this.getInIsrael() ? 16 : 11;
                  }
                else
                  switch (e) {
                    case J:
                      if (this.isKislevShort()) return 0;
                      if (this.isCheshvanLong())
                        return this.getInIsrael() ? 12 : 1;
                      break;
                    case Y:
                      return this.getInIsrael() ? 12 : 1;
                    case V:
                      if (this.isCheshvanLong()) return 3;
                      if (!this.isKislevShort())
                        return this.getInIsrael() ? 13 : 2;
                      break;
                    case P:
                      if (this.isKislevShort()) return 4;
                      if (this.isCheshvanLong()) return 5;
                  }
                return -1;
              }),
              (JewishCalendar.prototype.getParsha = function () {
                if (this.getDayOfWeek() !== P) return L.NONE;
                var e = this.getParshaYearType(),
                  t =
                    (JewishCalendar.getJewishCalendarElapsedDays(
                      this.getJewishYear()
                    ) %
                      7) +
                    this.getDaysSinceStartOfJewishYear();
                return 0 <= e ? JewishCalendar.parshalist[e][t / 7] : L.NONE;
              }),
              (JewishCalendar.prototype.getSpecialShabbos = function () {
                if (this.getDayOfWeek() === P) {
                  if (
                    ((this.getJewishMonth() === JewishCalendar.SHEVAT &&
                      !this.isJewishLeapYear()) ||
                      (this.getJewishMonth() === JewishCalendar.ADAR &&
                        this.isJewishLeapYear())) &&
                    [25, 27, 29].includes(this.getJewishDayOfMonth())
                  )
                    return L.SHKALIM;
                  if (
                    (this.getJewishMonth() === JewishCalendar.ADAR &&
                      !this.isJewishLeapYear()) ||
                    this.getJewishMonth() === JewishCalendar.ADAR_II
                  ) {
                    if (1 === this.getJewishDayOfMonth()) return L.SHKALIM;
                    if ([8, 9, 11, 13].includes(this.getJewishDayOfMonth()))
                      return L.ZACHOR;
                    if ([18, 20, 22, 23].includes(this.getJewishDayOfMonth()))
                      return L.PARA;
                    if ([25, 27, 29].includes(this.getJewishDayOfMonth()))
                      return L.HACHODESH;
                  }
                  if (
                    this.getJewishMonth() === JewishCalendar.NISSAN &&
                    1 === this.getJewishDayOfMonth()
                  )
                    return L.HACHODESH;
                }
                return L.NONE;
              }),
              (JewishCalendar.prototype.getYomTovIndex = function () {
                var e = this.getJewishDayOfMonth(),
                  t = this.getDayOfWeek();
                switch (this.getJewishMonth()) {
                  case JewishCalendar.NISSAN:
                    if (14 === e) return JewishCalendar.EREV_PESACH;
                    if (
                      15 === e ||
                      21 === e ||
                      !(this.inIsrael || (16 !== e && 22 !== e))
                    )
                      return JewishCalendar.PESACH;
                    if ((17 <= e && e <= 20) || (16 === e && this.inIsrael))
                      return JewishCalendar.CHOL_HAMOED_PESACH;
                    if (
                      this.isUseModernHolidays() &&
                      ((26 === e && 5 === t) ||
                        (28 === e && 2 === t) ||
                        (27 === e && 1 !== t && 6 !== t))
                    )
                      return JewishCalendar.YOM_HASHOAH;
                    break;
                  case JewishCalendar.IYAR:
                    if (
                      this.isUseModernHolidays() &&
                      ((4 === e && 3 === t) ||
                        ((3 === e || 2 === e) && 4 === t) ||
                        (5 === e && 2 === t))
                    )
                      return JewishCalendar.YOM_HAZIKARON;
                    if (
                      this.isUseModernHolidays() &&
                      ((5 === e && 4 === t) ||
                        ((4 === e || 3 === e) && 5 === t) ||
                        (6 === e && 3 === t))
                    )
                      return JewishCalendar.YOM_HAATZMAUT;
                    if (14 === e) return JewishCalendar.PESACH_SHENI;
                    if (18 === e) return JewishCalendar.LAG_BAOMER;
                    if (this.isUseModernHolidays() && 28 === e)
                      return JewishCalendar.YOM_YERUSHALAYIM;
                    break;
                  case JewishCalendar.SIVAN:
                    if (5 === e) return JewishCalendar.EREV_SHAVUOS;
                    if (6 === e || (7 === e && !this.inIsrael))
                      return JewishCalendar.SHAVUOS;
                    break;
                  case JewishCalendar.TAMMUZ:
                    if ((17 === e && 7 !== t) || (18 === e && 1 === t))
                      return JewishCalendar.SEVENTEEN_OF_TAMMUZ;
                    break;
                  case JewishCalendar.AV:
                    if ((1 === t && 10 === e) || (7 !== t && 9 === e))
                      return JewishCalendar.TISHA_BEAV;
                    if (15 === e) return JewishCalendar.TU_BEAV;
                    break;
                  case JewishCalendar.ELUL:
                    if (29 === e) return JewishCalendar.EREV_ROSH_HASHANA;
                    break;
                  case JewishCalendar.TISHREI:
                    if (1 === e || 2 === e) return JewishCalendar.ROSH_HASHANA;
                    if ((3 === e && 7 !== t) || (4 === e && 1 === t))
                      return JewishCalendar.FAST_OF_GEDALYAH;
                    if (9 === e) return JewishCalendar.EREV_YOM_KIPPUR;
                    if (10 === e) return JewishCalendar.YOM_KIPPUR;
                    if (14 === e) return JewishCalendar.EREV_SUCCOS;
                    if (15 === e || (16 === e && !this.inIsrael))
                      return JewishCalendar.SUCCOS;
                    if ((17 <= e && e <= 20) || (16 === e && this.inIsrael))
                      return JewishCalendar.CHOL_HAMOED_SUCCOS;
                    if (21 === e) return JewishCalendar.HOSHANA_RABBA;
                    if (22 === e) return JewishCalendar.SHEMINI_ATZERES;
                    if (23 === e && !this.inIsrael)
                      return JewishCalendar.SIMCHAS_TORAH;
                    break;
                  case JewishCalendar.KISLEV:
                    if (25 <= e) return JewishCalendar.CHANUKAH;
                    break;
                  case JewishCalendar.TEVES:
                    if (1 === e || 2 === e || (3 === e && this.isKislevShort()))
                      return JewishCalendar.CHANUKAH;
                    if (10 === e) return JewishCalendar.TENTH_OF_TEVES;
                    break;
                  case JewishCalendar.SHEVAT:
                    if (15 === e) return JewishCalendar.TU_BESHVAT;
                    break;
                  case JewishCalendar.ADAR:
                    if (this.isJewishLeapYear()) {
                      if (14 === e) return JewishCalendar.PURIM_KATAN;
                      if (15 === e) return JewishCalendar.SHUSHAN_PURIM_KATAN;
                    } else {
                      if (
                        ((11 === e || 12 === e) && 5 === t) ||
                        (13 === e && 6 !== t && 7 !== t)
                      )
                        return JewishCalendar.FAST_OF_ESTHER;
                      if (14 === e) return JewishCalendar.PURIM;
                      if (15 === e) return JewishCalendar.SHUSHAN_PURIM;
                    }
                    break;
                  case JewishCalendar.ADAR_II:
                    if (
                      ((11 === e || 12 === e) && 5 === t) ||
                      (13 === e && 6 !== t && 7 !== t)
                    )
                      return JewishCalendar.FAST_OF_ESTHER;
                    if (14 === e) return JewishCalendar.PURIM;
                    if (15 === e) return JewishCalendar.SHUSHAN_PURIM;
                }
                return -1;
              }),
              (JewishCalendar.prototype.isYomTov = function () {
                var e = this.getYomTovIndex();
                return (
                  !(
                    (this.isErevYomTov() &&
                      e !== JewishCalendar.HOSHANA_RABBA &&
                      e === JewishCalendar.CHOL_HAMOED_PESACH &&
                      20 !== this.getJewishDayOfMonth()) ||
                    (this.isTaanis() && e !== JewishCalendar.YOM_KIPPUR)
                  ) && -1 !== this.getYomTovIndex()
                );
              }),
              (JewishCalendar.prototype.isYomTovAssurBemelacha = function () {
                var e = [
                    JewishCalendar.PESACH,
                    JewishCalendar.SHAVUOS,
                    JewishCalendar.SUCCOS,
                    JewishCalendar.SHEMINI_ATZERES,
                    JewishCalendar.SIMCHAS_TORAH,
                    JewishCalendar.ROSH_HASHANA,
                    JewishCalendar.YOM_KIPPUR,
                  ],
                  t = this.getYomTovIndex();
                return e.includes(t);
              }),
              (JewishCalendar.prototype.isAssurBemelacha = function () {
                return (
                  this.getDayOfWeek() === P || this.isYomTovAssurBemelacha()
                );
              }),
              (JewishCalendar.prototype.hasCandleLighting = function () {
                return this.isTomorrowShabbosOrYomTov();
              }),
              (JewishCalendar.prototype.isTomorrowShabbosOrYomTov =
                function () {
                  return (
                    this.getDayOfWeek() === x ||
                    this.isErevYomTov() ||
                    this.isErevYomTovSheni()
                  );
                }),
              (JewishCalendar.prototype.isErevYomTovSheni = function () {
                return (
                  (this.getJewishMonth() === JewishCalendar.TISHREI &&
                    1 === this.getJewishDayOfMonth()) ||
                  (!this.getInIsrael() &&
                    ((this.getJewishMonth() === JewishCalendar.NISSAN &&
                      [15, 21].includes(this.getJewishDayOfMonth())) ||
                      (this.getJewishMonth() === JewishCalendar.TISHREI &&
                        [15, 22].includes(this.getJewishDayOfMonth())) ||
                      (this.getJewishMonth() === JewishCalendar.SIVAN &&
                        6 === this.getJewishDayOfMonth())))
                );
              }),
              (JewishCalendar.prototype.isAseresYemeiTeshuva = function () {
                return (
                  this.getJewishMonth() === JewishCalendar.TISHREI &&
                  this.getJewishDayOfMonth() <= 10
                );
              }),
              (JewishCalendar.prototype.isCholHamoed = function () {
                return this.isCholHamoedPesach() || this.isCholHamoedSuccos();
              }),
              (JewishCalendar.prototype.isCholHamoedPesach = function () {
                return (
                  this.getYomTovIndex() === JewishCalendar.CHOL_HAMOED_PESACH
                );
              }),
              (JewishCalendar.prototype.isCholHamoedSuccos = function () {
                return (
                  this.getYomTovIndex() === JewishCalendar.CHOL_HAMOED_SUCCOS
                );
              }),
              (JewishCalendar.prototype.isErevYomTov = function () {
                var e = [
                    JewishCalendar.EREV_PESACH,
                    JewishCalendar.EREV_SHAVUOS,
                    JewishCalendar.EREV_ROSH_HASHANA,
                    JewishCalendar.EREV_YOM_KIPPUR,
                    JewishCalendar.EREV_SUCCOS,
                    JewishCalendar.HOSHANA_RABBA,
                  ],
                  t = this.getYomTovIndex();
                return (
                  e.includes(t) ||
                  (t === JewishCalendar.CHOL_HAMOED_PESACH &&
                    20 === this.getJewishDayOfMonth())
                );
              }),
              (JewishCalendar.prototype.isErevRoshChodesh = function () {
                return (
                  29 === this.getJewishDayOfMonth() &&
                  this.getJewishMonth() !== JewishCalendar.ELUL
                );
              }),
              (JewishCalendar.prototype.isTaanis = function () {
                var e = [
                    JewishCalendar.SEVENTEEN_OF_TAMMUZ,
                    JewishCalendar.TISHA_BEAV,
                    JewishCalendar.YOM_KIPPUR,
                    JewishCalendar.FAST_OF_GEDALYAH,
                    JewishCalendar.TENTH_OF_TEVES,
                    JewishCalendar.FAST_OF_ESTHER,
                  ],
                  t = this.getYomTovIndex();
                return e.includes(t);
              }),
              (JewishCalendar.prototype.getDayOfChanukah = function () {
                var e = this.getJewishDayOfMonth();
                return this.isChanukah()
                  ? this.getJewishMonth() === JewishCalendar.KISLEV
                    ? e - 24
                    : this.isKislevShort()
                    ? e + 5
                    : e + 6
                  : -1;
              }),
              (JewishCalendar.prototype.isChanukah = function () {
                return this.getYomTovIndex() === JewishCalendar.CHANUKAH;
              }),
              (JewishCalendar.prototype.isRoshChodesh = function () {
                return (
                  (1 === this.getJewishDayOfMonth() &&
                    this.getJewishMonth() !== JewishCalendar.TISHREI) ||
                  30 === this.getJewishDayOfMonth()
                );
              }),
              (JewishCalendar.prototype.isMacharChodesh = function () {
                return (
                  this.getDayOfWeek() === P &&
                  (30 === this.getJewishDayOfMonth() ||
                    29 === this.getJewishDayOfMonth())
                );
              }),
              (JewishCalendar.prototype.isShabbosMevorchim = function () {
                return (
                  this.getDayOfWeek() === P &&
                  23 <= this.getJewishDayOfMonth() &&
                  this.getJewishDayOfMonth() <= 29 &&
                  this.getJewishMonth() !== JewishCalendar.ELUL
                );
              }),
              (JewishCalendar.prototype.getDayOfOmer = function () {
                var e = -1,
                  t = this.getJewishMonth(),
                  n = this.getJewishDayOfMonth();
                return (
                  t === JewishCalendar.NISSAN && 16 <= n
                    ? (e = n - 15)
                    : t === JewishCalendar.IYAR
                    ? (e = n + 15)
                    : t === JewishCalendar.SIVAN && n < 6 && (e = n + 44),
                  e
                );
              }),
              (JewishCalendar.prototype.getMoladAsDate = function () {
                var e = this.getMolad(),
                  t = new y("Jerusalem, Israel", 31.778, 35.2354, "Etc/GMT+2"),
                  n = (10 * e.getMoladChalakim()) / 3,
                  a = Math.trunc(1e3 * (n - Math.trunc(n)));
                return m.DateTime.fromObject({
                  year: e.getGregorianYear(),
                  month: e.getGregorianMonth() + 1,
                  day: e.getGregorianDayOfMonth(),
                  hour: e.getMoladHours(),
                  minute: e.getMoladMinutes(),
                  second: Math.trunc(n),
                  millisecond: a,
                  zone: t.getTimeZone(),
                }).minus({
                  milliseconds: Math.trunc(t.getLocalMeanTimeOffset()),
                });
              }),
              (JewishCalendar.prototype.getTchilasZmanKidushLevana3Days =
                function () {
                  return this.getMoladAsDate().plus({
                    hours: 72,
                  });
                }),
              (JewishCalendar.prototype.getTchilasZmanKidushLevana7Days =
                function () {
                  return this.getMoladAsDate().plus({
                    hours: 168,
                  });
                }),
              (JewishCalendar.prototype.getSofZmanKidushLevanaBetweenMoldos =
                function () {
                  return this.getMoladAsDate().plus({
                    days: 14,
                    hours: 18,
                    minutes: 22,
                    seconds: 1,
                    milliseconds: 666,
                  });
                }),
              (JewishCalendar.prototype.getSofZmanKidushLevana15Days =
                function () {
                  return this.getMoladAsDate().plus({
                    days: 15,
                  });
                }),
              (JewishCalendar.prototype.getDafYomiBavli = function () {
                throw new I(
                  "This method is not supported, due to a circular dependency. Use `YomiCalculator.getDafYomiBavli(jewishCalendar)` instead"
                );
              }),
              (JewishCalendar.prototype.getDafYomiYerushalmi = function () {
                throw new I(
                  "This method is not supported, due to a circular dependency. Use `YerushalmiYomiCalculator.getDafYomiYerushalmi(jewishCalendar)` instead"
                );
              }),
              (JewishCalendar.prototype.equals = function (e) {
                return (
                  this.getAbsDate() === e.getAbsDate() &&
                  this.getInIsrael() === e.getInIsrael()
                );
              }),
              (JewishCalendar.EREV_PESACH = 0),
              (JewishCalendar.PESACH = 1),
              (JewishCalendar.CHOL_HAMOED_PESACH = 2),
              (JewishCalendar.PESACH_SHENI = 3),
              (JewishCalendar.EREV_SHAVUOS = 4),
              (JewishCalendar.SHAVUOS = 5),
              (JewishCalendar.SEVENTEEN_OF_TAMMUZ = 6),
              (JewishCalendar.TISHA_BEAV = 7),
              (JewishCalendar.TU_BEAV = 8),
              (JewishCalendar.EREV_ROSH_HASHANA = 9),
              (JewishCalendar.ROSH_HASHANA = 10),
              (JewishCalendar.FAST_OF_GEDALYAH = 11),
              (JewishCalendar.EREV_YOM_KIPPUR = 12),
              (JewishCalendar.YOM_KIPPUR = 13),
              (JewishCalendar.EREV_SUCCOS = 14),
              (JewishCalendar.SUCCOS = 15),
              (JewishCalendar.CHOL_HAMOED_SUCCOS = 16),
              (JewishCalendar.HOSHANA_RABBA = 17),
              (JewishCalendar.SHEMINI_ATZERES = 18),
              (JewishCalendar.SIMCHAS_TORAH = 19),
              (JewishCalendar.CHANUKAH = 21),
              (JewishCalendar.TENTH_OF_TEVES = 22),
              (JewishCalendar.TU_BESHVAT = 23),
              (JewishCalendar.FAST_OF_ESTHER = 24),
              (JewishCalendar.PURIM = 25),
              (JewishCalendar.SHUSHAN_PURIM = 26),
              (JewishCalendar.PURIM_KATAN = 27),
              (JewishCalendar.ROSH_CHODESH = 28),
              (JewishCalendar.YOM_HASHOAH = 29),
              (JewishCalendar.YOM_HAZIKARON = 30),
              (JewishCalendar.YOM_HAATZMAUT = 31),
              (JewishCalendar.YOM_YERUSHALAYIM = 32),
              (JewishCalendar.LAG_BAOMER = 33),
              (JewishCalendar.SHUSHAN_PURIM_KATAN = 34),
              (JewishCalendar.parshalist = [
                [
                  L.NONE,
                  L.VAYEILECH,
                  L.HAAZINU,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL_PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.NONE,
                  L.SHMINI,
                  L.TAZRIA_METZORA,
                  L.ACHREI_MOS_KEDOSHIM,
                  L.EMOR,
                  L.BEHAR_BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
                [
                  L.NONE,
                  L.VAYEILECH,
                  L.HAAZINU,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL_PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.NONE,
                  L.SHMINI,
                  L.TAZRIA_METZORA,
                  L.ACHREI_MOS_KEDOSHIM,
                  L.EMOR,
                  L.BEHAR_BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NONE,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS_BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
                [
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL_PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.NONE,
                  L.NONE,
                  L.SHMINI,
                  L.TAZRIA_METZORA,
                  L.ACHREI_MOS_KEDOSHIM,
                  L.EMOR,
                  L.BEHAR_BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM,
                ],
                [
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.NONE,
                  L.SHMINI,
                  L.TAZRIA_METZORA,
                  L.ACHREI_MOS_KEDOSHIM,
                  L.EMOR,
                  L.BEHAR_BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM,
                ],
                [
                  L.NONE,
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL_PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.NONE,
                  L.SHMINI,
                  L.TAZRIA_METZORA,
                  L.ACHREI_MOS_KEDOSHIM,
                  L.EMOR,
                  L.BEHAR_BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM,
                ],
                [
                  L.NONE,
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL_PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.NONE,
                  L.SHMINI,
                  L.TAZRIA_METZORA,
                  L.ACHREI_MOS_KEDOSHIM,
                  L.EMOR,
                  L.BEHAR_BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
                [
                  L.NONE,
                  L.VAYEILECH,
                  L.HAAZINU,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.SHMINI,
                  L.TAZRIA,
                  L.METZORA,
                  L.NONE,
                  L.ACHREI_MOS,
                  L.KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NONE,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS_BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
                [
                  L.NONE,
                  L.VAYEILECH,
                  L.HAAZINU,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.SHMINI,
                  L.TAZRIA,
                  L.METZORA,
                  L.NONE,
                  L.NONE,
                  L.ACHREI_MOS,
                  L.KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM,
                ],
                [
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.SHMINI,
                  L.TAZRIA,
                  L.METZORA,
                  L.ACHREI_MOS,
                  L.NONE,
                  L.KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS,
                  L.MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM,
                ],
                [
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.SHMINI,
                  L.TAZRIA,
                  L.METZORA,
                  L.ACHREI_MOS,
                  L.NONE,
                  L.KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS,
                  L.MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
                [
                  L.NONE,
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.SHMINI,
                  L.TAZRIA,
                  L.METZORA,
                  L.NONE,
                  L.ACHREI_MOS,
                  L.KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
                [
                  L.NONE,
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.SHMINI,
                  L.TAZRIA,
                  L.METZORA,
                  L.NONE,
                  L.ACHREI_MOS,
                  L.KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NONE,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS_BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
                [
                  L.NONE,
                  L.VAYEILECH,
                  L.HAAZINU,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL_PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.NONE,
                  L.SHMINI,
                  L.TAZRIA_METZORA,
                  L.ACHREI_MOS_KEDOSHIM,
                  L.EMOR,
                  L.BEHAR_BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
                [
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL_PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.NONE,
                  L.SHMINI,
                  L.TAZRIA_METZORA,
                  L.ACHREI_MOS_KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM,
                ],
                [
                  L.NONE,
                  L.VAYEILECH,
                  L.HAAZINU,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.SHMINI,
                  L.TAZRIA,
                  L.METZORA,
                  L.NONE,
                  L.ACHREI_MOS,
                  L.KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
                [
                  L.NONE,
                  L.VAYEILECH,
                  L.HAAZINU,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.SHMINI,
                  L.TAZRIA,
                  L.METZORA,
                  L.NONE,
                  L.ACHREI_MOS,
                  L.KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS,
                  L.MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM,
                ],
                [
                  L.NONE,
                  L.NONE,
                  L.HAAZINU,
                  L.NONE,
                  L.NONE,
                  L.BERESHIS,
                  L.NOACH,
                  L.LECH_LECHA,
                  L.VAYERA,
                  L.CHAYEI_SARA,
                  L.TOLDOS,
                  L.VAYETZEI,
                  L.VAYISHLACH,
                  L.VAYESHEV,
                  L.MIKETZ,
                  L.VAYIGASH,
                  L.VAYECHI,
                  L.SHEMOS,
                  L.VAERA,
                  L.BO,
                  L.BESHALACH,
                  L.YISRO,
                  L.MISHPATIM,
                  L.TERUMAH,
                  L.TETZAVEH,
                  L.KI_SISA,
                  L.VAYAKHEL,
                  L.PEKUDEI,
                  L.VAYIKRA,
                  L.TZAV,
                  L.SHMINI,
                  L.TAZRIA,
                  L.METZORA,
                  L.NONE,
                  L.ACHREI_MOS,
                  L.KEDOSHIM,
                  L.EMOR,
                  L.BEHAR,
                  L.BECHUKOSAI,
                  L.BAMIDBAR,
                  L.NASSO,
                  L.BEHAALOSCHA,
                  L.SHLACH,
                  L.KORACH,
                  L.CHUKAS,
                  L.BALAK,
                  L.PINCHAS,
                  L.MATOS_MASEI,
                  L.DEVARIM,
                  L.VAESCHANAN,
                  L.EIKEV,
                  L.REEH,
                  L.SHOFTIM,
                  L.KI_SEITZEI,
                  L.KI_SAVO,
                  L.NITZAVIM_VAYEILECH,
                ],
              ]),
              JewishCalendar);
          function JewishCalendar(e, t, n, a) {
            var r = k.call(this, e, t, n) || this;
            return (
              (r.inIsrael = !1),
              (r.useModernHolidays = !1),
              a && r.setInIsrael(a),
              r
            );
          }
          var U,
            F,
            K =
              (((U = function (e, t) {
                return (U =
                  Object.setPrototypeOf ||
                  ({
                    __proto__: [],
                  } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  })(e, t);
              }),
              function (e, t) {
                function __() {
                  this.constructor = e;
                }
                U(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((__.prototype = t.prototype), new __()));
              })(ZmanimCalendar, (F = Z)),
              (ZmanimCalendar.prototype.isUseElevation = function () {
                return this.useElevation;
              }),
              (ZmanimCalendar.prototype.setUseElevation = function (e) {
                this.useElevation = e;
              }),
              (ZmanimCalendar.prototype.getElevationAdjustedSunrise =
                function () {
                  return this.isUseElevation()
                    ? F.prototype.getSunrise.call(this)
                    : this.getSeaLevelSunrise();
                }),
              (ZmanimCalendar.prototype.getElevationAdjustedSunset =
                function () {
                  return this.isUseElevation()
                    ? F.prototype.getSunset.call(this)
                    : this.getSeaLevelSunset();
                }),
              (ZmanimCalendar.prototype.getTzais = function () {
                return this.getSunsetOffsetByDegrees(
                  ZmanimCalendar.ZENITH_8_POINT_5
                );
              }),
              (ZmanimCalendar.prototype.getAlosHashachar = function () {
                return this.getSunriseOffsetByDegrees(
                  ZmanimCalendar.ZENITH_16_POINT_1
                );
              }),
              (ZmanimCalendar.prototype.getAlos72 = function () {
                return ZmanimCalendar.getTimeOffset(
                  this.getElevationAdjustedSunrise(),
                  -72 * ZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ZmanimCalendar.prototype.getChatzos = function () {
                return this.getSunTransit();
              }),
              (ZmanimCalendar.prototype.getSofZmanShma = function (e, t) {
                return this.getShaahZmanisBasedZman(e, t, 3);
              }),
              (ZmanimCalendar.prototype.getSofZmanShmaGRA = function () {
                return this.getSofZmanShma(
                  this.getElevationAdjustedSunrise(),
                  this.getElevationAdjustedSunset()
                );
              }),
              (ZmanimCalendar.prototype.getSofZmanShmaMGA = function () {
                return this.getSofZmanShma(this.getAlos72(), this.getTzais72());
              }),
              (ZmanimCalendar.prototype.getTzais72 = function () {
                return ZmanimCalendar.getTimeOffset(
                  this.getElevationAdjustedSunset(),
                  72 * ZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ZmanimCalendar.prototype.getCandleLighting = function () {
                return ZmanimCalendar.getTimeOffset(
                  this.getSeaLevelSunset(),
                  -this.getCandleLightingOffset() * ZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ZmanimCalendar.prototype.getSofZmanTfila = function (e, t) {
                return this.getShaahZmanisBasedZman(e, t, 4);
              }),
              (ZmanimCalendar.prototype.getSofZmanTfilaGRA = function () {
                return this.getSofZmanTfila(
                  this.getElevationAdjustedSunrise(),
                  this.getElevationAdjustedSunset()
                );
              }),
              (ZmanimCalendar.prototype.getSofZmanTfilaMGA = function () {
                return this.getSofZmanTfila(
                  this.getAlos72(),
                  this.getTzais72()
                );
              }),
              (ZmanimCalendar.prototype.getMinchaGedola = function (e, t) {
                return (
                  void 0 === e && (e = this.getElevationAdjustedSunrise()),
                  void 0 === t && (t = this.getElevationAdjustedSunset()),
                  this.getShaahZmanisBasedZman(e, t, 6.5)
                );
              }),
              (ZmanimCalendar.prototype.getMinchaKetana = function (e, t) {
                return (
                  void 0 === e && (e = this.getElevationAdjustedSunrise()),
                  void 0 === t && (t = this.getElevationAdjustedSunset()),
                  this.getShaahZmanisBasedZman(e, t, 9.5)
                );
              }),
              (ZmanimCalendar.prototype.getPlagHamincha = function (e, t) {
                return (
                  void 0 === e && (e = this.getElevationAdjustedSunrise()),
                  void 0 === t && (t = this.getElevationAdjustedSunset()),
                  this.getShaahZmanisBasedZman(e, t, 10.75)
                );
              }),
              (ZmanimCalendar.prototype.getShaahZmanisGra = function () {
                return this.getTemporalHour(
                  this.getElevationAdjustedSunrise(),
                  this.getElevationAdjustedSunset()
                );
              }),
              (ZmanimCalendar.prototype.getShaahZmanisMGA = function () {
                return this.getTemporalHour(
                  this.getAlos72(),
                  this.getTzais72()
                );
              }),
              (ZmanimCalendar.prototype.getCandleLightingOffset = function () {
                return this.candleLightingOffset;
              }),
              (ZmanimCalendar.prototype.setCandleLightingOffset = function (e) {
                this.candleLightingOffset = e;
              }),
              (ZmanimCalendar.prototype.getClassName = function () {
                return "com.kosherjava.zmanim.ZmanimCalendar";
              }),
              (ZmanimCalendar.prototype.isAssurBemlacha = function (e, t, n) {
                var a = new B(),
                  r = this.getDate();
                a.setGregorianDate(r.year, r.month - 1, r.day),
                  a.setInIsrael(n);
                var i = this.getElevationAdjustedSunset();
                if (!i) throw new C();
                return (
                  !!(a.hasCandleLighting() && i <= e) ||
                  (a.isAssurBemelacha() && e <= t)
                );
              }),
              (ZmanimCalendar.prototype.getShaahZmanisBasedZman = function (
                e,
                t,
                n
              ) {
                var a = this.getTemporalHour(e, t);
                return ZmanimCalendar.getTimeOffset(e, a * n);
              }),
              (ZmanimCalendar.ZENITH_16_POINT_1 =
                ZmanimCalendar.GEOMETRIC_ZENITH + 16.1),
              (ZmanimCalendar.ZENITH_8_POINT_5 =
                ZmanimCalendar.GEOMETRIC_ZENITH + 8.5),
              ZmanimCalendar);
          function ZmanimCalendar() {
            var e = (null !== F && F.apply(this, arguments)) || this;
            return (e.useElevation = !1), (e.candleLightingOffset = 18), e;
          }
          var G,
            j,
            z =
              (((G = function (e, t) {
                return (G =
                  Object.setPrototypeOf ||
                  ({
                    __proto__: [],
                  } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  })(e, t);
              }),
              function (e, t) {
                function __() {
                  this.constructor = e;
                }
                G(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((__.prototype = t.prototype), new __()));
              })(ComplexZmanimCalendar, (j = K)),
              (ComplexZmanimCalendar.prototype.getShaahZmanis19Point8Degrees =
                function () {
                  return this.getTemporalHour(
                    this.getAlos19Point8Degrees(),
                    this.getTzais19Point8Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis18Degrees =
                function () {
                  return this.getTemporalHour(
                    this.getAlos18Degrees(),
                    this.getTzais18Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis26Degrees =
                function () {
                  return this.getTemporalHour(
                    this.getAlos26Degrees(),
                    this.getTzais26Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis16Point1Degrees =
                function () {
                  return this.getTemporalHour(
                    this.getAlos16Point1Degrees(),
                    this.getTzais16Point1Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis60Minutes =
                function () {
                  return this.getTemporalHour(
                    this.getAlos60(),
                    this.getTzais60()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis72Minutes =
                function () {
                  return this.getShaahZmanisMGA();
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis72MinutesZmanis =
                function () {
                  return this.getTemporalHour(
                    this.getAlos72Zmanis(),
                    this.getTzais72Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis90Minutes =
                function () {
                  return this.getTemporalHour(
                    this.getAlos90(),
                    this.getTzais90()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis90MinutesZmanis =
                function () {
                  return this.getTemporalHour(
                    this.getAlos90Zmanis(),
                    this.getTzais90Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis96MinutesZmanis =
                function () {
                  return this.getTemporalHour(
                    this.getAlos96Zmanis(),
                    this.getTzais96Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanisAteretTorah =
                function () {
                  return this.getTemporalHour(
                    this.getAlos72Zmanis(),
                    this.getTzaisAteretTorah()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis96Minutes =
                function () {
                  return this.getTemporalHour(
                    this.getAlos96(),
                    this.getTzais96()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis120Minutes =
                function () {
                  return this.getTemporalHour(
                    this.getAlos120(),
                    this.getTzais120()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanis120MinutesZmanis =
                function () {
                  return this.getTemporalHour(
                    this.getAlos120Zmanis(),
                    this.getTzais120Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha120MinutesZmanis =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos120Zmanis(),
                    this.getTzais120Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha120Minutes =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos120(),
                    this.getTzais120()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getAlos60 = function () {
                return ComplexZmanimCalendar.getTimeOffset(
                  this.getSunrise(),
                  -60 * ComplexZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ComplexZmanimCalendar.prototype.getAlos72Zmanis = function () {
                var e = this.getShaahZmanisGra();
                return e === c
                  ? null
                  : ComplexZmanimCalendar.getTimeOffset(
                      this.getElevationAdjustedSunrise(),
                      -1.2 * e
                    );
              }),
              (ComplexZmanimCalendar.prototype.getAlos96 = function () {
                return ComplexZmanimCalendar.getTimeOffset(
                  this.getElevationAdjustedSunrise(),
                  -96 * ComplexZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ComplexZmanimCalendar.prototype.getAlos90Zmanis = function () {
                var e = this.getShaahZmanisGra();
                return e === c
                  ? null
                  : ComplexZmanimCalendar.getTimeOffset(
                      this.getElevationAdjustedSunrise(),
                      -1.5 * e
                    );
              }),
              (ComplexZmanimCalendar.prototype.getAlos96Zmanis = function () {
                var e = this.getShaahZmanisGra();
                return e === c
                  ? null
                  : ComplexZmanimCalendar.getTimeOffset(
                      this.getElevationAdjustedSunrise(),
                      -1.6 * e
                    );
              }),
              (ComplexZmanimCalendar.prototype.getAlos90 = function () {
                return ComplexZmanimCalendar.getTimeOffset(
                  this.getElevationAdjustedSunrise(),
                  -90 * ComplexZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ComplexZmanimCalendar.prototype.getAlos120 = function () {
                return ComplexZmanimCalendar.getTimeOffset(
                  this.getElevationAdjustedSunrise(),
                  -120 * ComplexZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ComplexZmanimCalendar.prototype.getAlos120Zmanis = function () {
                var e = this.getShaahZmanisGra();
                return e === c
                  ? null
                  : ComplexZmanimCalendar.getTimeOffset(
                      this.getElevationAdjustedSunrise(),
                      -2 * e
                    );
              }),
              (ComplexZmanimCalendar.prototype.getAlos26Degrees = function () {
                return this.getSunriseOffsetByDegrees(
                  ComplexZmanimCalendar.ZENITH_26_DEGREES
                );
              }),
              (ComplexZmanimCalendar.prototype.getAlos18Degrees = function () {
                return this.getSunriseOffsetByDegrees(
                  ComplexZmanimCalendar.ASTRONOMICAL_ZENITH
                );
              }),
              (ComplexZmanimCalendar.prototype.getAlos19Degrees = function () {
                return this.getSunriseOffsetByDegrees(
                  ComplexZmanimCalendar.ZENITH_19_DEGREES
                );
              }),
              (ComplexZmanimCalendar.prototype.getAlos19Point8Degrees =
                function () {
                  return this.getSunriseOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_19_POINT_8
                  );
                }),
              (ComplexZmanimCalendar.prototype.getAlos16Point1Degrees =
                function () {
                  return this.getSunriseOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_16_POINT_1
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMisheyakir11Point5Degrees =
                function () {
                  return this.getSunriseOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_11_POINT_5
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMisheyakir11Degrees =
                function () {
                  return this.getSunriseOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_11_DEGREES
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMisheyakir10Point2Degrees =
                function () {
                  return this.getSunriseOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_10_POINT_2
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMisheyakir7Point65Degrees =
                function () {
                  return this.getSunriseOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_7_POINT_65
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMisheyakir9Point5Degrees =
                function () {
                  return this.getSunriseOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_9_POINT_5
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA19Point8Degrees =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos19Point8Degrees(),
                    this.getTzais19Point8Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA16Point1Degrees =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos16Point1Degrees(),
                    this.getTzais16Point1Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA18Degrees =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos18Degrees(),
                    this.getTzais18Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA72Minutes =
                function () {
                  return this.getSofZmanShmaMGA();
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA72MinutesZmanis =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos72Zmanis(),
                    this.getTzais72Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA90Minutes =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos90(),
                    this.getTzais90()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA90MinutesZmanis =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos90Zmanis(),
                    this.getTzais90Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA96Minutes =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos96(),
                    this.getTzais96()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA96MinutesZmanis =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos96Zmanis(),
                    this.getTzais96Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShma3HoursBeforeChatzos =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getChatzos(),
                    -180 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaMGA120Minutes =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos120(),
                    this.getTzais120()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaAlos16Point1ToSunset =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos16Point1Degrees(),
                    this.getElevationAdjustedSunset()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaAlos16Point1ToTzaisGeonim7Point083Degrees =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos16Point1Degrees(),
                    this.getTzaisGeonim7Point083Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaKolEliyahu =
                function () {
                  var e = this.getFixedLocalChatzos();
                  if (null === e || null === this.getSunrise()) return null;
                  var t =
                    (e.valueOf() -
                      this.getElevationAdjustedSunrise().valueOf()) /
                    2;
                  return ComplexZmanimCalendar.getTimeOffset(e, -t);
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA19Point8Degrees =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos19Point8Degrees(),
                    this.getTzais19Point8Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA16Point1Degrees =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos16Point1Degrees(),
                    this.getTzais16Point1Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA18Degrees =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos18Degrees(),
                    this.getTzais18Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA72Minutes =
                function () {
                  return this.getSofZmanTfilaMGA();
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA72MinutesZmanis =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos72Zmanis(),
                    this.getTzais72Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA90Minutes =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos90(),
                    this.getTzais90()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA90MinutesZmanis =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos90Zmanis(),
                    this.getTzais90Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA96Minutes =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos96(),
                    this.getTzais96()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA96MinutesZmanis =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos96Zmanis(),
                    this.getTzais96Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaMGA120Minutes =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos120(),
                    this.getTzais120()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfila2HoursBeforeChatzos =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getChatzos(),
                    -120 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaGedola30Minutes =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getChatzos(),
                    30 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaGedola72Minutes =
                function () {
                  return this.getMinchaGedola(
                    this.getAlos72(),
                    this.getTzais72()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaGedola16Point1Degrees =
                function () {
                  return this.getMinchaGedola(
                    this.getAlos16Point1Degrees(),
                    this.getTzais16Point1Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaGedolaGreaterThan30 =
                function () {
                  return null === this.getMinchaGedola30Minutes() ||
                    null === this.getMinchaGedola()
                    ? null
                    : m.DateTime.max(
                        this.getMinchaGedola30Minutes(),
                        this.getMinchaGedola()
                      );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaKetana16Point1Degrees =
                function () {
                  return this.getMinchaKetana(
                    this.getAlos16Point1Degrees(),
                    this.getTzais16Point1Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaKetana72Minutes =
                function () {
                  return this.getMinchaKetana(
                    this.getAlos72(),
                    this.getTzais72()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha60Minutes =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos60(),
                    this.getTzais60()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha72Minutes =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos72(),
                    this.getTzais72()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha90Minutes =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos90(),
                    this.getTzais90()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha96Minutes =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos96(),
                    this.getTzais96()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha96MinutesZmanis =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos96Zmanis(),
                    this.getTzais96Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha90MinutesZmanis =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos90Zmanis(),
                    this.getTzais90Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha72MinutesZmanis =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos72Zmanis(),
                    this.getTzais72Zmanis()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha16Point1Degrees =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos16Point1Degrees(),
                    this.getTzais16Point1Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha19Point8Degrees =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos19Point8Degrees(),
                    this.getTzais19Point8Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha26Degrees =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos26Degrees(),
                    this.getTzais26Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHamincha18Degrees =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos18Degrees(),
                    this.getTzais18Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagAlosToSunset =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos16Point1Degrees(),
                    this.getElevationAdjustedSunset()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagAlos16Point1ToTzaisGeonim7Point083Degrees =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos16Point1Degrees(),
                    this.getTzaisGeonim7Point083Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosRT13Point24Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_13_POINT_24
                  );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosRT58Point5Minutes =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getElevationAdjustedSunset(),
                    58.5 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosRT13Point5MinutesBefore7Point083Degrees =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getSunsetOffsetByDegrees(
                      ComplexZmanimCalendar.ZENITH_7_POINT_083
                    ),
                    -13.5 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosRT2Stars =
                function () {
                  var e = this.getAlos19Point8Degrees(),
                    t = this.getElevationAdjustedSunrise();
                  return null === e || null === t
                    ? null
                    : ComplexZmanimCalendar.getTimeOffset(
                        this.getElevationAdjustedSunset(),
                        (t.valueOf() - e.valueOf()) * (5 / 18)
                      );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosYereim18Minutes =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getElevationAdjustedSunset(),
                    -18 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosYereim2Point99Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_MINUS_3_POINT_05
                  );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosYereim16Point875Minutes =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getElevationAdjustedSunset(),
                    -16.875 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosYereim2Point8Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_MINUS_2_POINT_8
                  );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosYereim13Point5Minutes =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getElevationAdjustedSunset(),
                    -13.5 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getBainHasmashosYereim2Point1Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_MINUS_2_POINT_1
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim3Point7Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_3_POINT_7
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim3Point8Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_3_POINT_8
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim5Point95Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_5_POINT_95
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim3Point65Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_3_POINT_65
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim3Point676Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_3_POINT_676
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim4Point61Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_4_POINT_61
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim4Point37Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_4_POINT_37
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim5Point88Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_5_POINT_88
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim4Point8Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_4_POINT_8
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim6Point45Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_6_POINT_45
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim7Point083Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_7_POINT_083
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim7Point67Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_7_POINT_67
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim8Point5Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_8_POINT_5
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim9Point3Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_9_POINT_3
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisGeonim9Point75Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_9_POINT_75
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzais60 = function () {
                return ComplexZmanimCalendar.getTimeOffset(
                  this.getElevationAdjustedSunset(),
                  60 * ComplexZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ComplexZmanimCalendar.prototype.getTzaisAteretTorah =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getElevationAdjustedSunset(),
                    this.getAteretTorahSunsetOffset() *
                      ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getAteretTorahSunsetOffset =
                function () {
                  return this.ateretTorahSunsetOffset;
                }),
              (ComplexZmanimCalendar.prototype.setAteretTorahSunsetOffset =
                function (e) {
                  this.ateretTorahSunsetOffset = e;
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaAteretTorah =
                function () {
                  return this.getSofZmanShma(
                    this.getAlos72Zmanis(),
                    this.getTzaisAteretTorah()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilahAteretTorah =
                function () {
                  return this.getSofZmanTfila(
                    this.getAlos72Zmanis(),
                    this.getTzaisAteretTorah()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaGedolaAteretTorah =
                function () {
                  return this.getMinchaGedola(
                    this.getAlos72Zmanis(),
                    this.getTzaisAteretTorah()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaKetanaAteretTorah =
                function () {
                  return this.getMinchaKetana(
                    this.getAlos72Zmanis(),
                    this.getTzaisAteretTorah()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHaminchaAteretTorah =
                function () {
                  return this.getPlagHamincha(
                    this.getAlos72Zmanis(),
                    this.getTzaisAteretTorah()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzais72Zmanis = function () {
                var e = this.getShaahZmanisGra();
                return e === c
                  ? null
                  : ComplexZmanimCalendar.getTimeOffset(
                      this.getElevationAdjustedSunset(),
                      1.2 * e
                    );
              }),
              (ComplexZmanimCalendar.prototype.getTzais90Zmanis = function () {
                var e = this.getShaahZmanisGra();
                return e === c
                  ? null
                  : ComplexZmanimCalendar.getTimeOffset(
                      this.getElevationAdjustedSunset(),
                      1.5 * e
                    );
              }),
              (ComplexZmanimCalendar.prototype.getTzais96Zmanis = function () {
                var e = this.getShaahZmanisGra();
                return e === c
                  ? null
                  : ComplexZmanimCalendar.getTimeOffset(
                      this.getElevationAdjustedSunset(),
                      1.6 * e
                    );
              }),
              (ComplexZmanimCalendar.prototype.getTzais90 = function () {
                return ComplexZmanimCalendar.getTimeOffset(
                  this.getElevationAdjustedSunset(),
                  90 * ComplexZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ComplexZmanimCalendar.prototype.getTzais120 = function () {
                return ComplexZmanimCalendar.getTimeOffset(
                  this.getElevationAdjustedSunset(),
                  120 * ComplexZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ComplexZmanimCalendar.prototype.getTzais120Zmanis = function () {
                var e = this.getShaahZmanisGra();
                return e === c
                  ? null
                  : ComplexZmanimCalendar.getTimeOffset(
                      this.getElevationAdjustedSunset(),
                      2 * e
                    );
              }),
              (ComplexZmanimCalendar.prototype.getTzais16Point1Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_16_POINT_1
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzais26Degrees = function () {
                return this.getSunsetOffsetByDegrees(
                  ComplexZmanimCalendar.ZENITH_26_DEGREES
                );
              }),
              (ComplexZmanimCalendar.prototype.getTzais18Degrees = function () {
                return this.getSunsetOffsetByDegrees(
                  ComplexZmanimCalendar.ASTRONOMICAL_ZENITH
                );
              }),
              (ComplexZmanimCalendar.prototype.getTzais19Point8Degrees =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_19_POINT_8
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzais96 = function () {
                return ComplexZmanimCalendar.getTimeOffset(
                  this.getElevationAdjustedSunset(),
                  96 * ComplexZmanimCalendar.MINUTE_MILLIS
                );
              }),
              (ComplexZmanimCalendar.prototype.getFixedLocalChatzos =
                function () {
                  var e = this.getGeoLocation(),
                    t =
                      a.getRawOffset(e.getTimeZone()) /
                      ComplexZmanimCalendar.HOUR_MILLIS;
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getDateFromTime(12 - t, !0),
                    -e.getLocalMeanTimeOffset()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaFixedLocal =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getFixedLocalChatzos(),
                    -180 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaFixedLocal =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getFixedLocalChatzos(),
                    -120 * ComplexZmanimCalendar.MINUTE_MILLIS
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMoladBasedTime = function (
                e,
                t,
                n,
                a
              ) {
                var r = this.getMidnightLastNight(),
                  i = this.getMidnightTonight();
                return e < r || i < e
                  ? null
                  : null !== t || null !== n
                  ? a && !(e < n || t < e)
                    ? n
                    : t
                  : e;
              }),
              (ComplexZmanimCalendar.prototype.getSofZmanKidushLevanaBetweenMoldos =
                function (e, t) {
                  void 0 === e && (e = null), void 0 === t && (t = null);
                  var n = new B(this.getDate());
                  return n.getJewishDayOfMonth() < 11 ||
                    16 < n.getJewishDayOfMonth()
                    ? null
                    : this.getMoladBasedTime(
                        n.getSofZmanKidushLevanaBetweenMoldos(),
                        e,
                        t,
                        !1
                      );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanKidushLevana15Days =
                function (e, t) {
                  void 0 === e && (e = null), void 0 === t && (t = null);
                  var n = new B(this.getDate());
                  return n.getJewishDayOfMonth() < 11 ||
                    17 < n.getJewishDayOfMonth()
                    ? null
                    : this.getMoladBasedTime(
                        n.getSofZmanKidushLevana15Days(),
                        e,
                        t,
                        !1
                      );
                }),
              (ComplexZmanimCalendar.prototype.getTchilasZmanKidushLevana3Days =
                function (e, t) {
                  void 0 === e && (e = null), void 0 === t && (t = null);
                  var n = new B();
                  if (
                    (n.setGregorianDate(
                      this.getDate().year,
                      this.getDate().month - 1,
                      this.getDate().day
                    ),
                    5 < n.getJewishDayOfMonth() && n.getJewishDayOfMonth() < 30)
                  )
                    return null;
                  var a = this.getMoladBasedTime(
                    n.getTchilasZmanKidushLevana3Days(),
                    e,
                    t,
                    !0
                  );
                  return (
                    null === a &&
                      30 === n.getJewishDayOfMonth() &&
                      (n.forward(i.MONTH, 1),
                      (a = this.getMoladBasedTime(
                        n.getTchilasZmanKidushLevana3Days(),
                        null,
                        null,
                        !0
                      ))),
                    a
                  );
                }),
              (ComplexZmanimCalendar.prototype.getZmanMolad = function () {
                var e = new B();
                if (
                  (e.setGregorianDate(
                    this.getDate().year,
                    this.getDate().month - 1,
                    this.getDate().day
                  ),
                  2 < e.getJewishDayOfMonth() && e.getJewishDayOfMonth() < 27)
                )
                  return null;
                var t = this.getMoladBasedTime(
                  e.getMoladAsDate(),
                  null,
                  null,
                  !0
                );
                return (
                  null === t &&
                    26 < e.getJewishDayOfMonth() &&
                    (e.forward(i.MONTH, 1),
                    (t = this.getMoladBasedTime(
                      e.getMoladAsDate(),
                      null,
                      null,
                      !0
                    ))),
                  t
                );
              }),
              (ComplexZmanimCalendar.prototype.getMidnightLastNight =
                function () {
                  return this.getDate().set({
                    hour: 0,
                    minute: 0,
                    second: 0,
                    millisecond: 0,
                  });
                }),
              (ComplexZmanimCalendar.prototype.getMidnightTonight =
                function () {
                  return this.getDate()
                    .plus({
                      days: 1,
                    })
                    .set({
                      hour: 0,
                      minute: 0,
                      second: 0,
                      millisecond: 0,
                    });
                }),
              (ComplexZmanimCalendar.prototype.getTchilasZmanKidushLevana7Days =
                function (e, t) {
                  void 0 === e && (e = null), void 0 === t && (t = null);
                  var n = new B(this.getDate());
                  return n.getJewishDayOfMonth() < 4 ||
                    9 < n.getJewishDayOfMonth()
                    ? null
                    : this.getMoladBasedTime(
                        n.getTchilasZmanKidushLevana7Days(),
                        e,
                        t,
                        !0
                      );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanAchilasChametzGRA =
                function () {
                  return this.getSofZmanTfilaGRA();
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanAchilasChametzMGA72Minutes =
                function () {
                  return this.getSofZmanTfilaMGA72Minutes();
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanAchilasChametzMGA16Point1Degrees =
                function () {
                  return this.getSofZmanTfilaMGA16Point1Degrees();
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanBiurChametzGRA =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getElevationAdjustedSunrise(),
                    5 * this.getShaahZmanisGra()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanBiurChametzMGA72Minutes =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getAlos72(),
                    5 * this.getShaahZmanisMGA()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanBiurChametzMGA16Point1Degrees =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getAlos16Point1Degrees(),
                    5 * this.getShaahZmanis16Point1Degrees()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSolarMidnight = function () {
                var e = this.clone();
                e.setDate(
                  e.getDate().plus({
                    days: 1,
                  })
                );
                var t = this.getSeaLevelSunset(),
                  n = e.getSeaLevelSunrise();
                return ComplexZmanimCalendar.getTimeOffset(
                  t,
                  6 * this.getTemporalHour(t, n)
                );
              }),
              (ComplexZmanimCalendar.prototype.getSunriseBaalHatanya =
                function () {
                  return this.getSunriseOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_1_POINT_583
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSunsetBaalHatanya =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_1_POINT_583
                  );
                }),
              (ComplexZmanimCalendar.prototype.getShaahZmanisBaalHatanya =
                function () {
                  return this.getTemporalHour(
                    this.getSunriseBaalHatanya(),
                    this.getSunsetBaalHatanya()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getAlosBaalHatanya =
                function () {
                  return this.getSunriseOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_16_POINT_9
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanShmaBaalHatanya =
                function () {
                  return this.getSofZmanShma(
                    this.getSunriseBaalHatanya(),
                    this.getSunsetBaalHatanya()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanTfilaBaalHatanya =
                function () {
                  return this.getSofZmanTfila(
                    this.getSunriseBaalHatanya(),
                    this.getSunsetBaalHatanya()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanAchilasChametzBaalHatanya =
                function () {
                  return this.getSofZmanTfilaBaalHatanya();
                }),
              (ComplexZmanimCalendar.prototype.getSofZmanBiurChametzBaalHatanya =
                function () {
                  return ComplexZmanimCalendar.getTimeOffset(
                    this.getSunriseBaalHatanya(),
                    5 * this.getShaahZmanisBaalHatanya()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaGedolaBaalHatanya =
                function () {
                  return this.getMinchaGedola(
                    this.getSunriseBaalHatanya(),
                    this.getSunsetBaalHatanya()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaGedolaBaalHatanyaGreaterThan30 =
                function () {
                  return null === this.getMinchaGedola30Minutes() ||
                    null === this.getMinchaGedolaBaalHatanya()
                    ? null
                    : m.DateTime.max(
                        this.getMinchaGedola30Minutes(),
                        this.getMinchaGedolaBaalHatanya()
                      );
                }),
              (ComplexZmanimCalendar.prototype.getMinchaKetanaBaalHatanya =
                function () {
                  return this.getMinchaKetana(
                    this.getSunriseBaalHatanya(),
                    this.getSunsetBaalHatanya()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getPlagHaminchaBaalHatanya =
                function () {
                  return this.getPlagHamincha(
                    this.getSunriseBaalHatanya(),
                    this.getSunsetBaalHatanya()
                  );
                }),
              (ComplexZmanimCalendar.prototype.getTzaisBaalHatanya =
                function () {
                  return this.getSunsetOffsetByDegrees(
                    ComplexZmanimCalendar.ZENITH_6_DEGREES
                  );
                }),
              (ComplexZmanimCalendar.prototype.getClassName = function () {
                return "com.kosherjava.zmanim.ComplexZmanimCalendar";
              }),
              (ComplexZmanimCalendar.ZENITH_3_POINT_7 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 3.7),
              (ComplexZmanimCalendar.ZENITH_3_POINT_8 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 3.8),
              (ComplexZmanimCalendar.ZENITH_5_POINT_95 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 5.95),
              (ComplexZmanimCalendar.ZENITH_7_POINT_083 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 7 + 5 / 60),
              (ComplexZmanimCalendar.ZENITH_10_POINT_2 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 10.2),
              (ComplexZmanimCalendar.ZENITH_11_DEGREES =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 11),
              (ComplexZmanimCalendar.ZENITH_11_POINT_5 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 11.5),
              (ComplexZmanimCalendar.ZENITH_13_POINT_24 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 13.24),
              (ComplexZmanimCalendar.ZENITH_19_DEGREES =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 19),
              (ComplexZmanimCalendar.ZENITH_19_POINT_8 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 19.8),
              (ComplexZmanimCalendar.ZENITH_26_DEGREES =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 26),
              (ComplexZmanimCalendar.ZENITH_4_POINT_37 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 4.37),
              (ComplexZmanimCalendar.ZENITH_4_POINT_61 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 4.61),
              (ComplexZmanimCalendar.ZENITH_4_POINT_8 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 4.8),
              (ComplexZmanimCalendar.ZENITH_3_POINT_65 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 3.65),
              (ComplexZmanimCalendar.ZENITH_3_POINT_676 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 3.676),
              (ComplexZmanimCalendar.ZENITH_5_POINT_88 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 5.88),
              (ComplexZmanimCalendar.ZENITH_1_POINT_583 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 1.583),
              (ComplexZmanimCalendar.ZENITH_16_POINT_9 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 16.9),
              (ComplexZmanimCalendar.ZENITH_6_DEGREES =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 6),
              (ComplexZmanimCalendar.ZENITH_6_POINT_45 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 6.45),
              (ComplexZmanimCalendar.ZENITH_7_POINT_65 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 7.65),
              (ComplexZmanimCalendar.ZENITH_7_POINT_67 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 7.67),
              (ComplexZmanimCalendar.ZENITH_9_POINT_3 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 9.3),
              (ComplexZmanimCalendar.ZENITH_9_POINT_5 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 9.5),
              (ComplexZmanimCalendar.ZENITH_9_POINT_75 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH + 9.75),
              (ComplexZmanimCalendar.ZENITH_MINUS_2_POINT_1 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH - 2.1),
              (ComplexZmanimCalendar.ZENITH_MINUS_2_POINT_8 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH - 2.8),
              (ComplexZmanimCalendar.ZENITH_MINUS_3_POINT_05 =
                ComplexZmanimCalendar.GEOMETRIC_ZENITH - 3.05),
              ComplexZmanimCalendar);
          function ComplexZmanimCalendar() {
            var e = (null !== j && j.apply(this, arguments)) || this;
            return (e.ateretTorahSunsetOffset = 40), e;
          }
          var q =
            ((Time.prototype.isNegative = function () {
              return this.negative;
            }),
            (Time.prototype.setIsNegative = function (e) {
              this.negative = e;
            }),
            (Time.prototype.getHours = function () {
              return this.hours;
            }),
            (Time.prototype.setHours = function (e) {
              this.hours = e;
            }),
            (Time.prototype.getMinutes = function () {
              return this.minutes;
            }),
            (Time.prototype.setMinutes = function (e) {
              this.minutes = e;
            }),
            (Time.prototype.getSeconds = function () {
              return this.seconds;
            }),
            (Time.prototype.setSeconds = function (e) {
              this.seconds = e;
            }),
            (Time.prototype.getMilliseconds = function () {
              return this.milliseconds;
            }),
            (Time.prototype.setMilliseconds = function (e) {
              this.milliseconds = e;
            }),
            (Time.prototype.getTime = function () {
              return (
                this.hours * Time.HOUR_MILLIS +
                this.minutes * Time.MINUTE_MILLIS +
                this.seconds * Time.SECOND_MILLIS +
                this.milliseconds
              );
            }),
            (Time.prototype.toString = function () {
              throw new I(
                "This method is deprecated, due to the fact that it depends on a circular dependency. Use `new ZmanimFormatter(TimeZone.getTimeZone('UTC')).format(time)` instead"
              );
            }),
            (Time.HOUR_MILLIS =
              60 * (Time.MINUTE_MILLIS = 60 * (Time.SECOND_MILLIS = 1e3))),
            Time);
          function Time(e, t, n, a) {
            if (
              (void 0 === n && (n = 0),
              void 0 === a && (a = 0),
              (this.hours = 0),
              (this.minutes = 0),
              (this.seconds = 0),
              (this.milliseconds = 0),
              (this.negative = !1),
              t)
            )
              (this.hours = e),
                (this.minutes = t),
                (this.seconds = n),
                (this.milliseconds = a);
            else {
              var r = e;
              r < 0 && ((this.negative = !0), (r = Math.abs(r))),
                (this.hours = Math.trunc(r / Time.HOUR_MILLIS)),
                (r -= this.hours * Time.HOUR_MILLIS),
                (this.minutes = Math.trunc(r / Time.MINUTE_MILLIS)),
                (r -= this.minutes * Time.MINUTE_MILLIS),
                (this.seconds = Math.trunc(r / Time.SECOND_MILLIS)),
                (r -= this.seconds * Time.SECOND_MILLIS),
                (this.milliseconds = r);
            }
          }
          var W =
            ((Zman.compareDateOrder = function (e, t) {
              var n,
                a,
                r =
                  (null === (n = e.zman) || void 0 === n
                    ? void 0
                    : n.valueOf()) || 0,
                i =
                  (null === (a = t.zman) || void 0 === a
                    ? void 0
                    : a.valueOf()) || 0;
              return h.compare(r, i);
            }),
            (Zman.compareNameOrder = function (e, t) {
              return l.compareTo(e.label || "", t.label || "");
            }),
            (Zman.compareDurationOrder = function (e, t) {
              return h.compare(e.duration || 0, t.duration || 0);
            }),
            (Zman.prototype.toString = function () {
              return ("\nLabel:\t\t\t" + this.label)
                .concat("\nZman:\t\t\t" + this.zman)
                .concat("\nDuration:\t\t\t" + this.duration)
                .concat("\nDescription:\t\t\t" + this.description);
            }),
            Zman);
          function Zman(e, t) {
            (this.label = t),
              m.DateTime.isDateTime(e)
                ? (this.zman = e)
                : "number" == typeof e && (this.duration = e);
          }
          var X = [
              "getAdjustedDate",
              "getDate",
              "getElevationAdjustedSunrise",
              "getElevationAdjustedSunset",
              "getMidnightLastNight",
              "getMidnightTonight",
              "getSunriseBaalHatanya",
              "getSunsetBaalHatanya",
            ],
            $ = [
              "getMinchaGedola",
              "getMinchaKetana",
              "getPlagHamincha",
              "getSofZmanKidushLevana15Days",
              "getSofZmanKidushLevanaBetweenMoldos",
              "getSunTransit",
              "getTchilasZmanKidushLevana3Days",
              "getTchilasZmanKidushLevana7Days",
              "getTemporalHour",
            ],
            Q =
              ((ZmanimFormatter.prototype.getTimeZone = function () {
                return this.timeZoneId;
              }),
              (ZmanimFormatter.prototype.setTimeZone = function (e) {
                this.timeZoneId = e;
              }),
              (ZmanimFormatter.prototype.setTimeFormat = function (e) {
                switch ((this.timeFormat = e)) {
                  case ZmanimFormatter.SEXAGESIMAL_XSD_FORMAT:
                    this.setSettings(!0, !0, !0);
                    break;
                  case ZmanimFormatter.SEXAGESIMAL_FORMAT:
                    this.setSettings(!1, !1, !1);
                    break;
                  case ZmanimFormatter.SEXAGESIMAL_SECONDS_FORMAT:
                    this.setSettings(!1, !0, !1);
                    break;
                  case ZmanimFormatter.SEXAGESIMAL_MILLIS_FORMAT:
                    this.setSettings(!1, !0, !0);
                }
              }),
              (ZmanimFormatter.prototype.setDateFormat = function (e) {
                this.dateFormat = e;
              }),
              (ZmanimFormatter.prototype.getDateFormat = function () {
                return this.dateFormat;
              }),
              (ZmanimFormatter.prototype.setSettings = function (e, t, n) {
                (this.prependZeroHours = e),
                  (this.useSeconds = t),
                  (this.useMillis = n);
              }),
              (ZmanimFormatter.prototype.format = function (e) {
                var t;
                if (
                  ((t = e instanceof q ? e : new q(e)),
                  this.timeFormat === ZmanimFormatter.XSD_DURATION_FORMAT)
                )
                  return ZmanimFormatter.formatXSDDurationTime(t);
                var n = padZeros(t.getHours(), this.hourNF)
                  .concat(":")
                  .concat(
                    padZeros(t.getMinutes(), ZmanimFormatter.minuteSecondNF)
                  );
                return (
                  this.useSeconds &&
                    (n = n
                      .concat(":")
                      .concat(
                        padZeros(t.getSeconds(), ZmanimFormatter.minuteSecondNF)
                      )),
                  this.useMillis &&
                    (n = n
                      .concat(".")
                      .concat(
                        padZeros(t.getMilliseconds(), ZmanimFormatter.milliNF)
                      )),
                  n
                );
              }),
              (ZmanimFormatter.prototype.formatDateTime = function (e) {
                var t = e.setZone(this.getTimeZone());
                return this.dateFormat === ZmanimFormatter.XSD_DATE_FORMAT
                  ? this.getXSDateTime(t)
                  : t.toFormat(this.dateFormat);
              }),
              (ZmanimFormatter.prototype.getXSDateTime = function (e) {
                return e
                  .setZone(this.getTimeZone())
                  .toFormat(ZmanimFormatter.XSD_DATE_FORMAT.concat("ZZ"));
              }),
              (ZmanimFormatter.formatDigits = function (e) {
                var t = Math.abs(e).toString();
                return 1 === t.length ? "0" + t : t;
              }),
              (ZmanimFormatter.formatXSDDurationTime = function (e) {
                var t, n;
                return (
                  (0 === (t = e instanceof q ? e : new q(e)).getHours() &&
                    0 === t.getMinutes() &&
                    0 === t.getSeconds() &&
                    0 === t.getMilliseconds()) ||
                    ((n = "P".concat("T")),
                    0 !== t.getHours() && (n = n.concat(t.getHours() + "H")),
                    0 !== t.getMinutes() &&
                      (n = n.concat(t.getMinutes() + "M")),
                    (0 === t.getSeconds() && 0 === t.getMilliseconds()) ||
                      (n = (n = n.concat(
                        t.getSeconds() +
                          "." +
                          padZeros(t.getMilliseconds(), ZmanimFormatter.milliNF)
                      )).concat("S")),
                    1 === n.length && n.concat("T0S"),
                    t.isNegative() &&
                      (n = n
                        .substr(0, 0)
                        .concat("-")
                        .concat(n.substr(0, n.length)))),
                  n.toString()
                );
              }),
              (ZmanimFormatter.formatDecimal = function (e) {
                return 0 < e - Math.trunc(e) ? e.toString() : e.toFixed(1);
              }),
              (ZmanimFormatter.toXML = function () {
                throw new I("This method is not supported.");
              }),
              (ZmanimFormatter.toJSON = function (e) {
                var t = {
                  metadata: ZmanimFormatter.getOutputMetadata(e),
                };
                return (
                  (t[ZmanimFormatter.getOutputKey(e)] =
                    ZmanimFormatter.getZmanimOutput(e)),
                  t
                );
              }),
              (ZmanimFormatter.getOutputKey = function (e) {
                switch (!0) {
                  case e instanceof z:
                    return "Zmanim";
                  case e instanceof K:
                    return "BasicZmanim";
                  case e instanceof Z:
                    return "AstronomicalTimes";
                }
              }),
              (ZmanimFormatter.getOutputMetadata = function (e) {
                return {
                  date: e.getDate().toFormat("yyyy-MM-dd"),
                  type: e.getClassName(),
                  algorithm: e.getAstronomicalCalculator().getCalculatorName(),
                  location: e.getGeoLocation().getLocationName(),
                  latitude: e.getGeoLocation().getLatitude().toString(),
                  longitude: e.getGeoLocation().getLongitude().toString(),
                  elevation: ZmanimFormatter.formatDecimal(
                    e.getGeoLocation().getElevation()
                  ),
                  timeZoneName: a.getDisplayName(
                    e.getGeoLocation().getTimeZone(),
                    e.getDate()
                  ),
                  timeZoneID: e.getGeoLocation().getTimeZone(),
                  timeZoneOffset: ZmanimFormatter.formatDecimal(
                    a.getOffset(
                      e.getGeoLocation().getTimeZone(),
                      e.getDate().valueOf()
                    ) / ZmanimFormatter.HOUR_MILLIS
                  ),
                };
              }),
              (ZmanimFormatter.getZmanimOutput = function (t) {
                var n = new ZmanimFormatter(
                    ZmanimFormatter.XSD_DURATION_FORMAT,
                    ZmanimFormatter.XSD_DATE_FORMAT,
                    t.getGeoLocation().getTimeZone()
                  ),
                  a = [],
                  r = [],
                  i = [];
                s
                  .getAllMethodNames(t, !0)
                  .filter(function (e) {
                    return (function (e, t) {
                      return (
                        !!$.includes(e) ||
                        (!X.includes(e) &&
                          0 === t[e].length &&
                          e.startsWith("get"))
                      );
                    })(e, t);
                  })
                  .map(function (e) {
                    return {
                      methodName: e,
                      value: t[e].call(t),
                    };
                  })
                  .filter(function (e) {
                    return (
                      m.DateTime.isDateTime(e.value) ||
                      "number" == typeof e.value ||
                      null === e.value
                    );
                  })
                  .forEach(function (e) {
                    var t = e.methodName.substring(3);
                    if (m.DateTime.isDateTime(e.value)) {
                      var n = {
                        zman: e.value,
                        label: t,
                      };
                      a.push(n);
                    } else
                      "number" == typeof e.value
                        ? ((n = {
                            duration: e.value,
                            label: t,
                          }),
                          r.push(n))
                        : i.push(t);
                  }),
                  a.sort(W.compareDateOrder),
                  (r = r
                    .filter(function (e) {
                      return 1e3 < e.duration;
                    })
                    .sort(W.compareDurationOrder));
                var o = {};
                return (
                  a.forEach(function (e) {
                    o[e.label] = n.formatDateTime(e.zman);
                  }),
                  r.forEach(function (e) {
                    o[e.label] = n.format(Math.trunc(e.duration));
                  }),
                  i.forEach(function (e) {
                    o[e] = "N/A";
                  }),
                  o
                );
              }),
              (ZmanimFormatter.minuteSecondNF = 2),
              (ZmanimFormatter.milliNF = 3),
              (ZmanimFormatter.SEXAGESIMAL_XSD_FORMAT = 0),
              (ZmanimFormatter.DECIMAL_FORMAT = 1),
              (ZmanimFormatter.SEXAGESIMAL_FORMAT = 2),
              (ZmanimFormatter.SEXAGESIMAL_SECONDS_FORMAT = 3),
              (ZmanimFormatter.SEXAGESIMAL_MILLIS_FORMAT = 4),
              (ZmanimFormatter.HOUR_MILLIS =
                60 * (ZmanimFormatter.MINUTE_MILLIS = 6e4)),
              (ZmanimFormatter.XSD_DURATION_FORMAT = 5),
              (ZmanimFormatter.XSD_DATE_FORMAT = "yyyy-LL-dd'T'HH:mm:ss"),
              ZmanimFormatter);
          function ZmanimFormatter(e, t, n) {
            var a;
            (this.prependZeroHours = !1),
              (this.useSeconds = !1),
              (this.useMillis = !1),
              (this.timeFormat = ZmanimFormatter.SEXAGESIMAL_XSD_FORMAT),
              t ? (a = e) : ((a = 0), (t = "h:mm:ss"), (n = e)),
              this.setTimeZone(n),
              this.prependZeroHours && (this.hourNF = 2),
              this.setTimeFormat(a),
              this.setDateFormat(t);
          }
          var ee =
            ((GeoLocationUtils.getGeodesicInitialBearing = function (e, t) {
              return GeoLocationUtils.vincentyFormula(
                e,
                t,
                GeoLocationUtils.INITIAL_BEARING
              );
            }),
            (GeoLocationUtils.getGeodesicFinalBearing = function (e, t) {
              return GeoLocationUtils.vincentyFormula(
                e,
                t,
                GeoLocationUtils.FINAL_BEARING
              );
            }),
            (GeoLocationUtils.getGeodesicDistance = function (e, t) {
              return GeoLocationUtils.vincentyFormula(
                e,
                t,
                GeoLocationUtils.DISTANCE
              );
            }),
            (GeoLocationUtils.vincentyFormula = function (e, t, n) {
              for (
                var a,
                  r = 6356752.3142,
                  i = 1 / 298.257223563,
                  o = w.degreesToRadians(t.getLongitude() - e.getLongitude()),
                  s = Math.atan(
                    (1 - i) * Math.tan(w.degreesToRadians(e.getLatitude()))
                  ),
                  u = Math.atan(
                    (1 - i) * Math.tan(w.degreesToRadians(t.getLatitude()))
                  ),
                  l = Math.sin(s),
                  h = Math.cos(s),
                  m = Math.sin(u),
                  c = Math.cos(u),
                  f = o,
                  d = 2 * Math.PI,
                  g = 20,
                  A = 0,
                  p = 0,
                  C = 0,
                  S = 0,
                  E = 0,
                  T = 0,
                  I = 0,
                  y = 0;
                1e-12 < Math.abs(f - d) && 0 < --g;

              ) {
                if (
                  ((A = Math.sin(f)),
                  (p = Math.cos(f)),
                  0 ===
                    (C = Math.sqrt(
                      c * A * (c * A) +
                        (h * m - l * c * p) * (h * m - l * c * p)
                    )))
                )
                  return 0;
                (S = l * m + h * c * p),
                  (E = Math.atan2(C, S)),
                  (y = S - (2 * l * m) / (I = 1 - (T = (h * c * A) / C) * T)),
                  Number.isNaN(y) && (y = 0),
                  (d = f),
                  (f =
                    o +
                    (1 - (a = (i / 16) * I * (4 + i * (4 - 3 * I)))) *
                      i *
                      T *
                      (E + a * C * (y + a * S * (2 * y * y - 1))));
              }
              if (0 === g) return Number.NaN;
              var O = (272331606681.9453 * I) / (r * r),
                M = (O / 1024) * (256 + O * (O * (74 - 47 * O) - 128)),
                H =
                  r *
                  (1 + (O / 16384) * (4096 + O * (O * (320 - 175 * O) - 768))) *
                  (E -
                    M *
                      C *
                      (y +
                        (M / 4) *
                          (S * (2 * y * y - 1) -
                            (M / 6) * y * (4 * C * C - 3) * (4 * y * y - 3)))),
                D = w.radiansToDegrees(Math.atan2(c * A, h * m - l * c * p)),
                v = w.radiansToDegrees(Math.atan2(h * A, -l * c + h * m * p));
              return n === GeoLocationUtils.DISTANCE
                ? H
                : n === GeoLocationUtils.INITIAL_BEARING
                ? D
                : n === GeoLocationUtils.FINAL_BEARING
                ? v
                : Number.NaN;
            }),
            (GeoLocationUtils.getRhumbLineBearing = function (e, t) {
              var n = w.degreesToRadians(t.getLongitude() - e.getLongitude()),
                a = Math.log(
                  Math.tan(
                    w.degreesToRadians(t.getLatitude()) / 2 + Math.PI / 4
                  ) /
                    Math.tan(
                      w.degreesToRadians(e.getLatitude()) / 2 + Math.PI / 4
                    )
                );
              return (
                Math.abs(n) > Math.PI &&
                  (n = 0 < n ? -(2 * Math.PI - n) : 2 * Math.PI + n),
                w.radiansToDegrees(Math.atan2(n, a))
              );
            }),
            (GeoLocationUtils.getRhumbLineDistance = function (e, t) {
              var n =
                  w.degreesToRadians(e.getLatitude()) -
                  w.degreesToRadians(t.getLatitude()),
                a = Math.abs(
                  w.degreesToRadians(e.getLongitude()) -
                    w.degreesToRadians(t.getLongitude())
                ),
                r =
                  n /
                  Math.log(
                    Math.tan(
                      w.degreesToRadians(e.getLatitude()) / 2 + Math.PI / 4
                    ) /
                      Math.tan(
                        w.degreesToRadians(t.getLatitude()) / 2 + Math.PI / 4
                      )
                  );
              return (
                Number.isFinite(r) ||
                  (r = Math.cos(w.degreesToRadians(t.getLatitude()))),
                a > Math.PI && (a = 2 * Math.PI - a),
                6378137 * Math.sqrt(n * n + r * r * a * a)
              );
            }),
            (GeoLocationUtils.DISTANCE = 0),
            (GeoLocationUtils.INITIAL_BEARING = 1),
            (GeoLocationUtils.FINAL_BEARING = 2),
            GeoLocationUtils);
          function GeoLocationUtils() {}
          var te,
            ne,
            ae =
              (((te = function (e, t) {
                return (te =
                  Object.setPrototypeOf ||
                  ({
                    __proto__: [],
                  } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  })(e, t);
              }),
              function (e, t) {
                function __() {
                  this.constructor = e;
                }
                te(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((__.prototype = t.prototype), new __()));
              })(SunTimesCalculator, (ne = M)),
              (SunTimesCalculator.prototype.getCalculatorName = function () {
                return "US Naval Almanac Algorithm";
              }),
              (SunTimesCalculator.prototype.getUTCSunrise = function (
                e,
                t,
                n,
                a
              ) {
                var r = a ? t.getElevation() : 0,
                  i = this.adjustZenith(n, r);
                return SunTimesCalculator.getTimeUTC(
                  e,
                  t.getLongitude(),
                  t.getLatitude(),
                  i,
                  !0
                );
              }),
              (SunTimesCalculator.prototype.getUTCSunset = function (
                e,
                t,
                n,
                a
              ) {
                var r = a ? t.getElevation() : 0,
                  i = this.adjustZenith(n, r);
                return SunTimesCalculator.getTimeUTC(
                  e,
                  t.getLongitude(),
                  t.getLatitude(),
                  i,
                  !1
                );
              }),
              (SunTimesCalculator.sinDeg = function (e) {
                return Math.sin(w.degreesToRadians(e));
              }),
              (SunTimesCalculator.acosDeg = function (e) {
                return w.radiansToDegrees(Math.acos(e));
              }),
              (SunTimesCalculator.asinDeg = function (e) {
                return w.radiansToDegrees(Math.asin(e));
              }),
              (SunTimesCalculator.tanDeg = function (e) {
                return Math.tan(w.degreesToRadians(e));
              }),
              (SunTimesCalculator.cosDeg = function (e) {
                return Math.cos(w.degreesToRadians(e));
              }),
              (SunTimesCalculator.getHoursFromMeridian = function (e) {
                return e / SunTimesCalculator.DEG_PER_HOUR;
              }),
              (SunTimesCalculator.getApproxTimeDays = function (e, t, n) {
                return n ? e + (6 - t) / 24 : e + (18 - t) / 24;
              }),
              (SunTimesCalculator.getMeanAnomaly = function (e, t, n) {
                return (
                  0.9856 *
                    SunTimesCalculator.getApproxTimeDays(
                      e,
                      SunTimesCalculator.getHoursFromMeridian(t),
                      n
                    ) -
                  3.289
                );
              }),
              (SunTimesCalculator.getSunTrueLongitude = function (e) {
                var t =
                  e +
                  1.916 * SunTimesCalculator.sinDeg(e) +
                  0.02 * SunTimesCalculator.sinDeg(2 * e) +
                  282.634;
                return 360 <= t && (t -= 360), t < 0 && (t += 360), t;
              }),
              (SunTimesCalculator.getSunRightAscensionHours = function (e) {
                var t = 0.91764 * SunTimesCalculator.tanDeg(e),
                  n = (360 / (2 * Math.PI)) * Math.atan(t);
                return (
                  (n += 90 * Math.floor(e / 90) - 90 * Math.floor(n / 90)) /
                  SunTimesCalculator.DEG_PER_HOUR
                );
              }),
              (SunTimesCalculator.getCosLocalHourAngle = function (e, t, n) {
                var a = 0.39782 * SunTimesCalculator.sinDeg(e),
                  r = SunTimesCalculator.cosDeg(SunTimesCalculator.asinDeg(a));
                return (
                  (SunTimesCalculator.cosDeg(n) -
                    a * SunTimesCalculator.sinDeg(t)) /
                  (r * SunTimesCalculator.cosDeg(t))
                );
              }),
              (SunTimesCalculator.getLocalMeanTime = function (e, t, n) {
                return e + t - 0.06571 * n - 6.622;
              }),
              (SunTimesCalculator.getTimeUTC = function (e, t, n, a, r) {
                var i,
                  o = e.ordinal,
                  s = SunTimesCalculator.getMeanAnomaly(o, t, r),
                  u = SunTimesCalculator.getSunTrueLongitude(s),
                  l = SunTimesCalculator.getSunRightAscensionHours(u),
                  h = SunTimesCalculator.getCosLocalHourAngle(u, n, a);
                i = r
                  ? 360 - SunTimesCalculator.acosDeg(h)
                  : SunTimesCalculator.acosDeg(h);
                for (
                  var m =
                    SunTimesCalculator.getLocalMeanTime(
                      i / SunTimesCalculator.DEG_PER_HOUR,
                      l,
                      SunTimesCalculator.getApproxTimeDays(
                        o,
                        SunTimesCalculator.getHoursFromMeridian(t),
                        r
                      )
                    ) - SunTimesCalculator.getHoursFromMeridian(t);
                  m < 0;

                )
                  m += 24;
                for (; 24 <= m; ) m -= 24;
                return m;
              }),
              (SunTimesCalculator.DEG_PER_HOUR = 15),
              SunTimesCalculator);
          function SunTimesCalculator() {
            return (null !== ne && ne.apply(this, arguments)) || this;
          }
          var re =
            ((Daf.prototype.getMasechtaNumber = function () {
              return this.masechtaNumber;
            }),
            (Daf.prototype.setMasechtaNumber = function (e) {
              this.masechtaNumber = e;
            }),
            (Daf.prototype.getDaf = function () {
              return this.daf;
            }),
            (Daf.prototype.setDaf = function (e) {
              this.daf = e;
            }),
            (Daf.prototype.getMasechtaTransliterated = function () {
              return Daf.masechtosBavliTransliterated[this.masechtaNumber];
            }),
            (Daf.setMasechtaTransliterated = function (e) {
              Daf.masechtosBavliTransliterated = e;
            }),
            (Daf.prototype.getMasechta = function () {
              return Daf.masechtosBavli[this.masechtaNumber];
            }),
            (Daf.prototype.getYerushlmiMasechtaTransliterated = function () {
              return Daf.masechtosYerushalmiTransliterated[this.masechtaNumber];
            }),
            (Daf.setYerushlmiMasechtaTransliterated = function (e) {
              Daf.masechtosYerushalmiTransliterated = e;
            }),
            (Daf.prototype.getYerushalmiMasechta = function () {
              return Daf.masechtosYerushlmi[this.masechtaNumber];
            }),
            (Daf.masechtosBavliTransliterated = [
              "Berachos",
              "Shabbos",
              "Eruvin",
              "Pesachim",
              "Shekalim",
              "Yoma",
              "Sukkah",
              "Beitzah",
              "Rosh Hashana",
              "Taanis",
              "Megillah",
              "Moed Katan",
              "Chagigah",
              "Yevamos",
              "Kesubos",
              "Nedarim",
              "Nazir",
              "Sotah",
              "Gitin",
              "Kiddushin",
              "Bava Kamma",
              "Bava Metzia",
              "Bava Basra",
              "Sanhedrin",
              "Makkos",
              "Shevuos",
              "Avodah Zarah",
              "Horiyos",
              "Zevachim",
              "Menachos",
              "Chullin",
              "Bechoros",
              "Arachin",
              "Temurah",
              "Kerisos",
              "Meilah",
              "Kinnim",
              "Tamid",
              "Midos",
              "Niddah",
            ]),
            (Daf.masechtosBavli = [
              "ברכות",
              "שבת",
              "עירובין",
              "פסחים",
              "שקלים",
              "יומא",
              "סוכה",
              "ביצה",
              "ראש השנה",
              "תענית",
              "מגילה",
              "מועד קטן",
              "חגיגה",
              "יבמות",
              "כתובות",
              "נדרים",
              "נזיר",
              "סוטה",
              "גיטין",
              "קידושין",
              "בבא קמא",
              "בבא מציעא",
              "בבא בתרא",
              "סנהדרין",
              "מכות",
              "שבועות",
              "עבודה זרה",
              "הוריות",
              "זבחים",
              "מנחות",
              "חולין",
              "בכורות",
              "ערכין",
              "תמורה",
              "כריתות",
              "מעילה",
              "קינים",
              "תמיד",
              "מידות",
              "נדה",
            ]),
            (Daf.masechtosYerushalmiTransliterated = [
              "Berachos",
              "Pe'ah",
              "Demai",
              "Kilayim",
              "Shevi'is",
              "Terumos",
              "Ma'asros",
              "Ma'aser Sheni",
              "Chalah",
              "Orlah",
              "Bikurim",
              "Shabbos",
              "Eruvin",
              "Pesachim",
              "Beitzah",
              "Rosh Hashanah",
              "Yoma",
              "Sukah",
              "Ta'anis",
              "Shekalim",
              "Megilah",
              "Chagigah",
              "Moed Katan",
              "Yevamos",
              "Kesuvos",
              "Sotah",
              "Nedarim",
              "Nazir",
              "Gitin",
              "Kidushin",
              "Bava Kama",
              "Bava Metzia",
              "Bava Basra",
              "Sanhedrin",
              "Makos",
              "Shevuos",
              "Avodah Zarah",
              "Horayos",
              "Nidah",
              "No Daf Today",
            ]),
            (Daf.masechtosYerushlmi = [
              "ברכות",
              "פיאה",
              "דמאי",
              "כלאיים",
              "שביעית",
              "תרומות",
              "מעשרות",
              "מעשר שני",
              "חלה",
              "עורלה",
              "ביכורים",
              "שבת",
              "עירובין",
              "פסחים",
              "ביצה",
              "ראש השנה",
              "יומא",
              "סוכה",
              "תענית",
              "שקלים",
              "מגילה",
              "חגיגה",
              "מועד קטן",
              "יבמות",
              "כתובות",
              "סוטה",
              "נדרים",
              "נזיר",
              "גיטין",
              "קידושין",
              "בבא קמא",
              "בבא מציעא",
              "בבא בתרא",
              "שבועות",
              "מכות",
              "סנהדרין",
              "עבודה זרה",
              "הוריות",
              "נידה",
              "אין דף היום",
            ]),
            Daf);
          function Daf(e, t) {
            (this.masechtaNumber = e), (this.daf = t);
          }
          var ie =
            ((YomiCalculator.getDafYomiBavli = function (e) {
              var t,
                n = [
                  64, 157, 105, 121, 22, 88, 56, 40, 35, 31, 32, 29, 27, 122,
                  112, 91, 66, 49, 90, 82, 119, 119, 176, 113, 24, 49, 76, 14,
                  120, 110, 142, 61, 34, 34, 28, 22, 4, 9, 5, 73,
                ],
                a = e.getDate(),
                r = this.getJulianDay(a),
                i = 0,
                o = 0;
              if (a < YomiCalculator.dafYomiStartDate)
                throw new E(
                  e +
                    " is prior to organized Daf Yomi Bavli cycles that started on " +
                    YomiCalculator.dafYomiStartDate
                );
              o =
                YomiCalculator.shekalimChangeDate < a ||
                a.equals(YomiCalculator.shekalimChangeDate)
                  ? ((i =
                      8 + (r - YomiCalculator.shekalimJulianChangeDay) / 2711),
                    (r - YomiCalculator.shekalimJulianChangeDay) % 2711)
                  : ((i =
                      1 + (r - YomiCalculator.dafYomiJulianStartDay) / 2702),
                    (r - YomiCalculator.dafYomiJulianStartDay) % 2702);
              var s = 0,
                u = -1,
                l = 0;
              n[4] = i <= 7 ? 13 : 22;
              for (var h = 0, m = n; h < m.length; h++) {
                var c = m[h];
                if ((u++, o < (s = s + c - 1))) {
                  (l = 1 + c - (s - o)),
                    36 === u
                      ? (l += 21)
                      : 37 === u
                      ? (l += 24)
                      : 38 === u && (l += 32),
                    (t = new re(u, l));
                  break;
                }
              }
              return t;
            }),
            (YomiCalculator.getJulianDay = function (e) {
              var t = e.year,
                n = e.month,
                a = e.day;
              n <= 2 && ((t -= 1), (n += 12));
              var r = Math.trunc(t / 100),
                i = 2 - r + Math.trunc(r / 4);
              return Math.trunc(
                Math.floor(365.25 * (t + 4716)) +
                  Math.floor(30.6001 * (n + 1)) +
                  a +
                  i -
                  1524.5
              );
            }),
            (YomiCalculator.dafYomiStartDate = m.DateTime.fromObject({
              year: 1923,
              month: i.SEPTEMBER + 1,
              day: 11,
            })),
            (YomiCalculator.dafYomiJulianStartDay = YomiCalculator.getJulianDay(
              YomiCalculator.dafYomiStartDate
            )),
            (YomiCalculator.shekalimChangeDate = m.DateTime.fromObject({
              year: 1975,
              month: i.JUNE + 1,
              day: 24,
            })),
            (YomiCalculator.shekalimJulianChangeDay =
              YomiCalculator.getJulianDay(YomiCalculator.shekalimChangeDate)),
            YomiCalculator);
          function YomiCalculator() {}
          var oe =
            ((YerushalmiYomiCalculator.getDafYomiYerushalmi = function (e) {
              var t,
                n = YerushalmiYomiCalculator.DAF_YOMI_START_DAY,
                a = YerushalmiYomiCalculator.DAF_YOMI_START_DAY,
                r = e.getDate(),
                i = 0;
              if (
                e.getYomTovIndex() === B.YOM_KIPPUR ||
                e.getYomTovIndex() === B.TISHA_BEAV
              )
                return new re(39, 0);
              if (r < YerushalmiYomiCalculator.DAF_YOMI_START_DAY)
                throw new E(
                  r +
                    " is prior to organized Daf Yomi Yerushlmi cycles that started on " +
                    YerushalmiYomiCalculator.DAF_YOMI_START_DAY
                );
              for (; n < r; )
                n = (n = (a = n).plus({
                  days: YerushalmiYomiCalculator.WHOLE_SHAS_DAFS,
                })).plus({
                  days: YerushalmiYomiCalculator.getNumOfSpecialDays(a, n),
                });
              for (
                var o =
                    r.diff(a, ["days"]).days -
                    YerushalmiYomiCalculator.getNumOfSpecialDays(a, r),
                  s = 0;
                s < YerushalmiYomiCalculator.BLATT_PER_MASECHTA.length;
                s++
              ) {
                if (o <= YerushalmiYomiCalculator.BLATT_PER_MASECHTA[s]) {
                  t = new re(i, o + 1);
                  break;
                }
                (o -= YerushalmiYomiCalculator.BLATT_PER_MASECHTA[s]), i++;
              }
              return t;
            }),
            (YerushalmiYomiCalculator.getNumOfSpecialDays = function (e, t) {
              for (
                var n = new B(e).getJewishYear(),
                  a = new B(t).getJewishYear(),
                  r = 0,
                  i = new B(n, 7, 10),
                  o = new B(n, 5, 9),
                  s = n;
                s <= a;
                s++
              ) {
                i.setJewishYear(s), o.setJewishYear(s);
                var u = m.Interval.fromDateTimes(e, t);
                u.contains(i.getDate()) && r++, u.contains(o.getDate()) && r++;
              }
              return r;
            }),
            (YerushalmiYomiCalculator.DAF_YOMI_START_DAY =
              m.DateTime.fromObject({
                year: 1980,
                month: i.FEBRUARY + 1,
                day: 2,
              })),
            (YerushalmiYomiCalculator.WHOLE_SHAS_DAFS = 1554),
            (YerushalmiYomiCalculator.BLATT_PER_MASECHTA = [
              68, 37, 34, 44, 31, 59, 26, 33, 28, 20, 13, 92, 65, 71, 22, 22,
              42, 26, 26, 33, 34, 22, 19, 85, 72, 47, 40, 47, 54, 48, 44, 37,
              34, 44, 9, 57, 37, 19, 13,
            ]),
            YerushalmiYomiCalculator);
          function YerushalmiYomiCalculator() {}
          var se =
            ((HebrewDateFormatter.prototype.isLongWeekFormat = function () {
              return this.longWeekFormat;
            }),
            (HebrewDateFormatter.prototype.setLongWeekFormat = function (e) {
              (this.longWeekFormat = e),
                (this.weekFormat = {
                  weekday: e ? "long" : "short",
                });
            }),
            (HebrewDateFormatter.prototype.getTransliteratedShabbosDayOfWeek =
              function () {
                return this.transliteratedShabbosDayOfweek;
              }),
            (HebrewDateFormatter.prototype.setTransliteratedShabbosDayOfWeek =
              function (e) {
                this.transliteratedShabbosDayOfweek = e;
              }),
            (HebrewDateFormatter.prototype.getTransliteratedHolidayList =
              function () {
                return this.transliteratedHolidays;
              }),
            (HebrewDateFormatter.prototype.setTransliteratedHolidayList =
              function (e) {
                this.transliteratedHolidays = e;
              }),
            (HebrewDateFormatter.prototype.formatYomTov = function (e) {
              var t = e.getYomTovIndex();
              if (t !== B.CHANUKAH)
                return -1 === t
                  ? ""
                  : this.hebrewFormat
                  ? HebrewDateFormatter.hebrewHolidays[t]
                  : this.transliteratedHolidays[t];
              var n = e.getDayOfChanukah();
              return this.hebrewFormat
                ? this.formatHebrewNumber(n) +
                    " " +
                    HebrewDateFormatter.hebrewHolidays[t]
                : this.transliteratedHolidays[t] + " " + n;
            }),
            (HebrewDateFormatter.prototype.formatRoshChodesh = function (e) {
              if (!e.isRoshChodesh()) return "";
              var t,
                n = e.getJewishMonth();
              30 === e.getJewishDayOfMonth() &&
                (n < B.ADAR || (n === B.ADAR && e.isJewishLeapYear())
                  ? n++
                  : (n = B.NISSAN));
              var a = e.clone();
              return (
                a.setJewishMonth(n),
                (t = this.hebrewFormat
                  ? HebrewDateFormatter.hebrewHolidays[B.ROSH_CHODESH]
                  : this.transliteratedHolidays[B.ROSH_CHODESH]),
                (t += " " + this.formatMonth(a))
              );
            }),
            (HebrewDateFormatter.prototype.isHebrewFormat = function () {
              return this.hebrewFormat;
            }),
            (HebrewDateFormatter.prototype.setHebrewFormat = function (e) {
              this.hebrewFormat = e;
            }),
            (HebrewDateFormatter.prototype.getHebrewOmerPrefix = function () {
              return this.hebrewOmerPrefix;
            }),
            (HebrewDateFormatter.prototype.setHebrewOmerPrefix = function (e) {
              this.hebrewOmerPrefix = e;
            }),
            (HebrewDateFormatter.prototype.getTransliteratedMonthList =
              function () {
                return this.transliteratedMonths;
              }),
            (HebrewDateFormatter.prototype.setTransliteratedMonthList =
              function (e) {
                this.transliteratedMonths = e;
              }),
            (HebrewDateFormatter.prototype.formatDayOfWeek = function (e) {
              if (this.hebrewFormat)
                return this.isLongWeekFormat()
                  ? HebrewDateFormatter.hebrewDaysOfWeek[e.getDayOfWeek() - 1]
                  : 7 === e.getDayOfWeek()
                  ? this.formatHebrewNumber(300)
                  : this.formatHebrewNumber(e.getDayOfWeek());
              if (7 === e.getDayOfWeek())
                return this.isLongWeekFormat()
                  ? this.getTransliteratedShabbosDayOfWeek()
                  : this.getTransliteratedShabbosDayOfWeek().substring(0, 3);
              var t = e.getDate();
              return this.weekFormat
                ? t.toLocaleString(this.weekFormat)
                : t.toISO();
            }),
            (HebrewDateFormatter.prototype.isUseGershGershayim = function () {
              return this.useGershGershayim;
            }),
            (HebrewDateFormatter.prototype.setUseGershGershayim = function (e) {
              this.useGershGershayim = e;
            }),
            (HebrewDateFormatter.prototype.isUseFinalFormLetters = function () {
              return this.useFinalFormLetters;
            }),
            (HebrewDateFormatter.prototype.setUseFinalFormLetters = function (
              e
            ) {
              this.useFinalFormLetters = e;
            }),
            (HebrewDateFormatter.prototype.isUseLongHebrewYears = function () {
              return this.useLonghebrewYears;
            }),
            (HebrewDateFormatter.prototype.setUseLongHebrewYears = function (
              e
            ) {
              this.useLonghebrewYears = e;
            }),
            (HebrewDateFormatter.prototype.format = function (e) {
              return this.isHebrewFormat()
                ? this.formatHebrewNumber(e.getJewishDayOfMonth()) +
                    " " +
                    this.formatMonth(e) +
                    " " +
                    this.formatHebrewNumber(e.getJewishYear())
                : e.getJewishDayOfMonth() +
                    " " +
                    this.formatMonth(e) +
                    ", " +
                    e.getJewishYear();
            }),
            (HebrewDateFormatter.prototype.formatMonth = function (e) {
              var t = e.getJewishMonth();
              return this.isHebrewFormat()
                ? e.isJewishLeapYear() && t === N.ADAR
                  ? this.hebrewMonths[13] +
                    (this.useGershGershayim ? HebrewDateFormatter.GERESH : "")
                  : e.isJewishLeapYear() && t === N.ADAR_II
                  ? this.hebrewMonths[12] +
                    (this.useGershGershayim ? HebrewDateFormatter.GERESH : "")
                  : this.hebrewMonths[t - 1]
                : e.isJewishLeapYear() && t === N.ADAR
                ? this.transliteratedMonths[13]
                : this.transliteratedMonths[t - 1];
            }),
            (HebrewDateFormatter.prototype.formatOmer = function (e) {
              var t = e.getDayOfOmer();
              return -1 === t
                ? ""
                : this.hebrewFormat
                ? this.formatHebrewNumber(t) +
                  " " +
                  this.hebrewOmerPrefix +
                  "עומר"
                : 33 === t
                ? this.transliteratedHolidays[33]
                : "Omer " + t;
            }),
            (HebrewDateFormatter.formatMolad = function (e) {
              var t = e,
                n = t / 25920;
              t -= 25920 * n;
              var a = Math.trunc(t / 1080);
              6 <= a && (n += 1), (t -= 1080 * a);
              var r = Math.trunc(t / 18);
              return (
                "Day: " +
                (n % 7) +
                " hours: " +
                a +
                ", minutes: " +
                r +
                ", chalakim: " +
                (t -= 18 * r)
              );
            }),
            (HebrewDateFormatter.prototype.getFormattedKviah = function (e) {
              var t = new N(e, N.TISHREI, 1),
                n = t.getCheshvanKislevKviah(),
                a = t.getDayOfWeek(),
                r = this.formatHebrewNumber(a);
              (r += n === N.CHASERIM ? "ח" : n === N.SHELAIMIM ? "ש" : "כ"),
                t.setJewishDate(e, N.NISSAN, 15);
              var i = t.getDayOfWeek();
              return (r = (r += this.formatHebrewNumber(i)).replace(
                new RegExp(HebrewDateFormatter.GERESH, "g"),
                ""
              ));
            }),
            (HebrewDateFormatter.prototype.formatDafYomiBavli = function (e) {
              return this.hebrewFormat
                ? e.getMasechta() + " " + this.formatHebrewNumber(e.getDaf())
                : e.getMasechtaTransliterated() + " " + e.getDaf();
            }),
            (HebrewDateFormatter.prototype.formatDafYomiYerushalmi = function (
              e
            ) {
              if (this.hebrewFormat) {
                var t =
                  0 === e.getDaf()
                    ? ""
                    : " " + this.formatHebrewNumber(e.getDaf());
                return e.getYerushalmiMasechta() + t;
              }
              var n = 0 === e.getDaf() ? "" : " " + e.getDaf();
              return e.getYerushlmiMasechtaTransliterated() + n;
            }),
            (HebrewDateFormatter.prototype.formatHebrewNumber = function (e) {
              if (e !== Math.trunc(e))
                throw new E("number must be an integer.");
              if (e < 0) throw new E("negative numbers can't be formatted");
              if (9999 < e) throw new E("numbers > 9999 can't be formatted");
              var t = ["", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"],
                n = ["טו", "טז"],
                a = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];
              if (0 === e) return "אפס";
              var r = e % 1e3,
                i =
                  r < 11 ||
                  (r < 100 && r % 10 == 0) ||
                  (r <= 400 && r % 100 == 0),
                o = Math.trunc(e / 1e3),
                s = "";
              if (e % 1e3 == 0)
                return (
                  (s = s.concat(a[o])),
                  this.isUseGershGershayim() &&
                    (s = s.concat(HebrewDateFormatter.GERESH)),
                  (s = (s = s.concat(" ")).concat("אלפים"))
                );
              this.useLonghebrewYears &&
                1e3 <= e &&
                ((s = s.concat(a[o])),
                this.isUseGershGershayim() &&
                  (s = s.concat(HebrewDateFormatter.GERESH)),
                (s = s.concat(" "))),
                (e %= 1e3);
              var u = Math.trunc(e / 100);
              if (
                ((s = s.concat(
                  ["", "ק", "ר", "ש", "ת", "תק", "תר", "תש", "תת", "תתק"][u]
                )),
                15 == (e %= 100))
              )
                s = s.concat(n[0]);
              else if (16 === e) s = s.concat(n[1]);
              else {
                var l = Math.trunc(e / 10);
                s =
                  e % 10 == 0
                    ? i
                      ? s.concat(t[l])
                      : this.isUseFinalFormLetters()
                      ? s.concat(
                          ["", "י", "ך", "ל", "ם", "ן", "ס", "ע", "ף", "ץ"][l]
                        )
                      : s.concat(t[l])
                    : ((e %= 10), (s = s.concat(t[l])).concat(a[e]));
              }
              return (
                this.isUseGershGershayim() &&
                  (s = i
                    ? s.concat(HebrewDateFormatter.GERESH)
                    : s
                        .substr(0, s.length - 1)
                        .concat(HebrewDateFormatter.GERSHAYIM)
                        .concat(s.substr(s.length - 1, 1))),
                s
              );
            }),
            (HebrewDateFormatter.prototype.getTransliteratedParshiosList =
              function () {
                return this.transliteratedParshaMap;
              }),
            (HebrewDateFormatter.prototype.setTransliteratedParshiosList =
              function (e) {
                this.transliteratedParshaMap = e;
              }),
            (HebrewDateFormatter.prototype.formatParsha = function (e) {
              var t = e.getParsha();
              return this.hebrewFormat
                ? this.hebrewParshaMap[t] || ""
                : this.transliteratedParshaMap[t] || "";
            }),
            (HebrewDateFormatter.prototype.formatSpecialParsha = function (e) {
              var t = e.getSpecialShabbos();
              return this.hebrewFormat
                ? this.hebrewParshaMap[t] || ""
                : this.transliteratedParshaMap[t] || "";
            }),
            (HebrewDateFormatter.GERESH = "׳"),
            (HebrewDateFormatter.GERSHAYIM = "״"),
            (HebrewDateFormatter.hebrewHolidays = [
              "ערב פסח",
              "פסח",
              "חול המועד פסח",
              "פסח שני",
              "ערב שבועות",
              "שבועות",
              "שבעה עשר בתמוז",
              "תשעה באב",
              "ט״ו באב",
              "ערב ראש השנה",
              "ראש השנה",
              "צום גדליה",
              "ערב יום כיפור",
              "יום כיפור",
              "ערב סוכות",
              "סוכות",
              "חול המועד סוכות",
              "הושענא רבה",
              "שמיני עצרת",
              "שמחת תורה",
              "ערב חנוכה",
              "חנוכה",
              "עשרה בטבת",
              "ט״ו בשבט",
              "תענית אסתר",
              "פורים",
              "פורים שושן",
              "פורים קטן",
              "ראש חודש",
              "יום השואה",
              "יום הזיכרון",
              "יום העצמאות",
              "יום ירושלים",
              "ל״ג בעומר",
              "פורים שושן קטן",
            ]),
            (HebrewDateFormatter.hebrewDaysOfWeek = [
              "ראשון",
              "שני",
              "שלישי",
              "רביעי",
              "חמישי",
              "ששי",
              "שבת",
            ]),
            HebrewDateFormatter);
          function HebrewDateFormatter() {
            var e, t;
            (this.hebrewFormat = !1),
              (this.useLonghebrewYears = !1),
              (this.useGershGershayim = !0),
              (this.longWeekFormat = !0),
              (this.useFinalFormLetters = !1),
              (this.weekFormat = null),
              (this.transliteratedParshaMap =
                (((e = {})[L.NONE] = ""),
                (e[L.BERESHIS] = "Bereshis"),
                (e[L.NOACH] = "Noach"),
                (e[L.LECH_LECHA] = "Lech Lecha"),
                (e[L.VAYERA] = "Vayera"),
                (e[L.CHAYEI_SARA] = "Chayei Sara"),
                (e[L.TOLDOS] = "Toldos"),
                (e[L.VAYETZEI] = "Vayetzei"),
                (e[L.VAYISHLACH] = "Vayishlach"),
                (e[L.VAYESHEV] = "Vayeshev"),
                (e[L.MIKETZ] = "Miketz"),
                (e[L.VAYIGASH] = "Vayigash"),
                (e[L.VAYECHI] = "Vayechi"),
                (e[L.SHEMOS] = "Shemos"),
                (e[L.VAERA] = "Vaera"),
                (e[L.BO] = "Bo"),
                (e[L.BESHALACH] = "Beshalach"),
                (e[L.YISRO] = "Yisro"),
                (e[L.MISHPATIM] = "Mishpatim"),
                (e[L.TERUMAH] = "Terumah"),
                (e[L.TETZAVEH] = "Tetzaveh"),
                (e[L.KI_SISA] = "Ki Sisa"),
                (e[L.VAYAKHEL] = "Vayakhel"),
                (e[L.PEKUDEI] = "Pekudei"),
                (e[L.VAYIKRA] = "Vayikra"),
                (e[L.TZAV] = "Tzav"),
                (e[L.SHMINI] = "Shmini"),
                (e[L.TAZRIA] = "Tazria"),
                (e[L.METZORA] = "Metzora"),
                (e[L.ACHREI_MOS] = "Achrei Mos"),
                (e[L.KEDOSHIM] = "Kedoshim"),
                (e[L.EMOR] = "Emor"),
                (e[L.BEHAR] = "Behar"),
                (e[L.BECHUKOSAI] = "Bechukosai"),
                (e[L.BAMIDBAR] = "Bamidbar"),
                (e[L.NASSO] = "Nasso"),
                (e[L.BEHAALOSCHA] = "Beha'aloscha"),
                (e[L.SHLACH] = "Sh'lach"),
                (e[L.KORACH] = "Korach"),
                (e[L.CHUKAS] = "Chukas"),
                (e[L.BALAK] = "Balak"),
                (e[L.PINCHAS] = "Pinchas"),
                (e[L.MATOS] = "Matos"),
                (e[L.MASEI] = "Masei"),
                (e[L.DEVARIM] = "Devarim"),
                (e[L.VAESCHANAN] = "Vaeschanan"),
                (e[L.EIKEV] = "Eikev"),
                (e[L.REEH] = "Re'eh"),
                (e[L.SHOFTIM] = "Shoftim"),
                (e[L.KI_SEITZEI] = "Ki Seitzei"),
                (e[L.KI_SAVO] = "Ki Savo"),
                (e[L.NITZAVIM] = "Nitzavim"),
                (e[L.VAYEILECH] = "Vayeilech"),
                (e[L.HAAZINU] = "Ha'Azinu"),
                (e[L.VZOS_HABERACHA] = "Vezos Habracha"),
                (e[L.VAYAKHEL_PEKUDEI] = "Vayakhel Pekudei"),
                (e[L.TAZRIA_METZORA] = "Tazria Metzora"),
                (e[L.ACHREI_MOS_KEDOSHIM] = "Achrei Mos Kedoshim"),
                (e[L.BEHAR_BECHUKOSAI] = "Behar Bechukosai"),
                (e[L.CHUKAS_BALAK] = "Chukas Balak"),
                (e[L.MATOS_MASEI] = "Matos Masei"),
                (e[L.NITZAVIM_VAYEILECH] = "Nitzavim Vayeilech"),
                (e[L.SHKALIM] = "Shekalim"),
                (e[L.ZACHOR] = "Zachor"),
                (e[L.PARA] = "Parah"),
                (e[L.HACHODESH] = "Hachodesh"),
                e)),
              (this.hebrewParshaMap =
                (((t = {})[L.NONE] = ""),
                (t[L.BERESHIS] = "בראשית"),
                (t[L.NOACH] = "נח"),
                (t[L.LECH_LECHA] = "לך לך"),
                (t[L.VAYERA] = "וירא"),
                (t[L.CHAYEI_SARA] = "חיי שרה"),
                (t[L.TOLDOS] = "תולדות"),
                (t[L.VAYETZEI] = "ויצא"),
                (t[L.VAYISHLACH] = "וישלח"),
                (t[L.VAYESHEV] = "וישב"),
                (t[L.MIKETZ] = "מקץ"),
                (t[L.VAYIGASH] = "ויגש"),
                (t[L.VAYECHI] = "ויחי"),
                (t[L.SHEMOS] = "שמות"),
                (t[L.VAERA] = "וארא"),
                (t[L.BO] = "בא"),
                (t[L.BESHALACH] = "בשלח"),
                (t[L.YISRO] = "יתרו"),
                (t[L.MISHPATIM] = "משפטים"),
                (t[L.TERUMAH] = "תרומה"),
                (t[L.TETZAVEH] = "תצוה"),
                (t[L.KI_SISA] = "כי תשא"),
                (t[L.VAYAKHEL] = "ויקהל"),
                (t[L.PEKUDEI] = "פקודי"),
                (t[L.VAYIKRA] = "ויקרא"),
                (t[L.TZAV] = "צו"),
                (t[L.SHMINI] = "שמיני"),
                (t[L.TAZRIA] = "תזריע"),
                (t[L.METZORA] = "מצרע"),
                (t[L.ACHREI_MOS] = "אחרי מות"),
                (t[L.KEDOSHIM] = "קדושים"),
                (t[L.EMOR] = "אמור"),
                (t[L.BEHAR] = "בהר"),
                (t[L.BECHUKOSAI] = "בחקתי"),
                (t[L.BAMIDBAR] = "במדבר"),
                (t[L.NASSO] = "נשא"),
                (t[L.BEHAALOSCHA] = "בהעלתך"),
                (t[L.SHLACH] = "שלח לך"),
                (t[L.KORACH] = "קרח"),
                (t[L.CHUKAS] = "חוקת"),
                (t[L.BALAK] = "בלק"),
                (t[L.PINCHAS] = "פינחס"),
                (t[L.MATOS] = "מטות"),
                (t[L.MASEI] = "מסעי"),
                (t[L.DEVARIM] = "דברים"),
                (t[L.VAESCHANAN] = "ואתחנן"),
                (t[L.EIKEV] = "עקב"),
                (t[L.REEH] = "ראה"),
                (t[L.SHOFTIM] = "שופטים"),
                (t[L.KI_SEITZEI] = "כי תצא"),
                (t[L.KI_SAVO] = "כי תבוא"),
                (t[L.NITZAVIM] = "ניצבים"),
                (t[L.VAYEILECH] = "וילך"),
                (t[L.HAAZINU] = "האזינו"),
                (t[L.VZOS_HABERACHA] = "וזאת הברכה "),
                (t[L.VAYAKHEL_PEKUDEI] = "ויקהל פקודי"),
                (t[L.TAZRIA_METZORA] = "תזריע מצרע"),
                (t[L.ACHREI_MOS_KEDOSHIM] = "אחרי מות קדושים"),
                (t[L.BEHAR_BECHUKOSAI] = "בהר בחקתי"),
                (t[L.CHUKAS_BALAK] = "חוקת בלק"),
                (t[L.MATOS_MASEI] = "מטות מסעי"),
                (t[L.NITZAVIM_VAYEILECH] = "ניצבים וילך"),
                (t[L.SHKALIM] = "שקלים"),
                (t[L.ZACHOR] = "זכור"),
                (t[L.PARA] = "פרה"),
                (t[L.HACHODESH] = "החדש"),
                t)),
              (this.transliteratedMonths = [
                "Nissan",
                "Iyar",
                "Sivan",
                "Tammuz",
                "Av",
                "Elul",
                "Tishrei",
                "Cheshvan",
                "Kislev",
                "Teves",
                "Shevat",
                "Adar",
                "Adar II",
                "Adar I",
              ]),
              (this.hebrewOmerPrefix = "ב"),
              (this.transliteratedShabbosDayOfweek = "Shabbos"),
              (this.transliteratedHolidays = [
                "Erev Pesach",
                "Pesach",
                "Chol Hamoed Pesach",
                "Pesach Sheni",
                "Erev Shavuos",
                "Shavuos",
                "Seventeenth of Tammuz",
                "Tishah B'Av",
                "Tu B'Av",
                "Erev Rosh Hashana",
                "Rosh Hashana",
                "Fast of Gedalyah",
                "Erev Yom Kippur",
                "Yom Kippur",
                "Erev Succos",
                "Succos",
                "Chol Hamoed Succos",
                "Hoshana Rabbah",
                "Shemini Atzeres",
                "Simchas Torah",
                "Erev Chanukah",
                "Chanukah",
                "Tenth of Teves",
                "Tu B'Shvat",
                "Fast of Esther",
                "Purim",
                "Shushan Purim",
                "Purim Katan",
                "Rosh Chodesh",
                "Yom HaShoah",
                "Yom Hazikaron",
                "Yom Ha'atzmaut",
                "Yom Yerushalayim",
                "Lag B'Omer",
                "Shushan Purim Katan",
              ]),
              (this.hebrewMonths = [
                "ניסן",
                "אייר",
                "סיון",
                "תמוז",
                "אב",
                "אלול",
                "תשרי",
                "חשון",
                "כסלו",
                "טבת",
                "שבט",
                "אדר",
                "אדר ב",
                "אדר א",
              ]);
          }
          function getZmanimJson(e) {
            var t = new y(
                e.locationName || null,
                e.latitude,
                e.longitude,
                e.elevation || 0,
                e.timeZoneId
              ),
              n = e.complexZmanim ? new z(t) : new K(t);
            return n.setDate(e.date || m.DateTime.local()), Q.toJSON(n);
          }
          var ue = m;
        },
      ]),
    (__webpack_require__.c = a),
    (__webpack_require__.d = function (e, t, n) {
      __webpack_require__.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: n,
        });
    }),
    (__webpack_require__.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        });
    }),
    (__webpack_require__.t = function (t, e) {
      if ((1 & e && (t = __webpack_require__(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (__webpack_require__.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          __webpack_require__.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (__webpack_require__.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return __webpack_require__.d(t, "a", t), t;
    }),
    (__webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (__webpack_require__.p = ""),
    __webpack_require__((__webpack_require__.s = 2))
  );
  function __webpack_require__(e) {
    if (a[e]) return a[e].exports;
    var t = (a[e] = {
      i: e,
      l: !1,
      exports: {},
    });
    return (
      n[e].call(t.exports, t, t.exports, __webpack_require__),
      (t.l = !0),
      t.exports
    );
  }
  var n, a;
});
//# sourceMappingURL=kosher-zmanim.min.js.map
