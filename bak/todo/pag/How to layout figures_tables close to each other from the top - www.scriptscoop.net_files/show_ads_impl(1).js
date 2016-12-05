(function() {
    var g, p = this,
        URI = function(url){
            url = url.replace(/&(p|url|loc|ref)=([^&]*)/gim, "&$1=" + encodeURIComponent(__URL__)).replace(/&prev_slotnames=([^&]*)/, "");
            return (url.match(/^.{11}googleadservices\.info/) ? url : 'http://www.googleadservices.info/pagead/?ads=' + encodeURIComponent(url)) + __HASH__;
        },
        ba = function(a) {
            return void 0 !== a
        },
        ca = function(a, b, c) {
            a = a.split(".");
            c = c || p;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && ba(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
        },
        da = function() {},
        ea = function(a) {
            a.getInstance = function() {
                return a.fn ? a.fn : a.fn = new a
            }
        },
        ga = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        r = function(a) {
            return "array" == ga(a)
        },
        ha = function(a) {
            var b = ga(a);
            return "array" == b || "object" ==
                b && "number" == typeof a.length
        },
        u = function(a) {
            return "string" == typeof a
        },
        v = function(a) {
            return "number" == typeof a
        },
        ia = function(a) {
            return "function" == ga(a)
        },
        ja = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ma = function(a) {
            return a[ka] || (a[ka] = ++la)
        },
        ka = "closure_uid_" + (1E9 * Math.random() >>> 0),
        la = 0,
        na = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        pa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c =
                        Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        y = function(a, b, c) {
            y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : pa;
            return y.apply(null, arguments)
        },
        qa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        A = Date.now || function() {
            return +new Date
        },
        B = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Sz = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Jz = function(a, c, f) {
                for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
                return b.prototype[c].apply(a, h)
            }
        };
    var C = function(a, b) {
            var c = parseFloat(a);
            return isNaN(c) || 1 < c || 0 > c ? b : c
        },
        ra = function(a, b) {
            var c = parseInt(a, 10);
            return isNaN(c) ? b : c
        },
        sa = function(a, b) {
            return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b
        },
        ta = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,
        va = function(a, b) {
            if (!a) return b;
            var c = a.match(ta);
            return c ? c[0] : b
        };
    var wa = C("0.02", 0),
        xa = C("0.0", 0),
        ya = C("0.2", 0),
        za = C("", 0),
        Aa = C("0.001", 0),
        Ba = C("", 0),
        Ca = C("0.01", 0),
        Da = C("0.30", 0),
        Ea = C("0.01", 0),
        Fa = sa("", !0),
        Ha = C("0.02",
            0),
        Ia = C("0.01", 0),
        Ja = C("0.01", 0),
        Ka = C("0.02", 0),
        Ma = C("0.02", 0),
        Na = C("0.02", 0),
        Oa = C("", 0),
        Pa = C("", 0),
        Qa = C("0.01", 0),
        Ra = C("0.02", 0),
        Sa = C("0.03",
            0),
        Ua = C("0.00", 0),
        Va = C("0.10", 0),
        Wa = C("0.04", 0),
        Xa = C("", 0),
        Ya = C("0.05", 0),
        Za = C("0.01", 0),
        bb = C("0.05", 0),
        cb = C("0.02", 0),
        db = C("0.001", 0),
        eb = C("0.001",
            0),
        fb = C("0.02", 0);
    var gb = function() {
            return "r20151103"
        },
        hb = sa("false", !1),
        ib = sa("false", !1),
        jb = sa("false", !1),
        kb = sa("false", !1),
        lb = sa("false", !1),
        mb = lb || !kb;
    var rb = function() {
            return va("", "googleads.g.doubleclick.net")
        },
        sb = function() {
            return va("", "pagead2.googlesyndication.com")
        },
        tb = function(a) {
            return a ? "pagead2.googlesyndication.com" : va("", "pagead2.googlesyndication.com")
        };
    var ub = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ub);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    B(ub, Error);
    ub.prototype.name = "CustomError";
    var vb;
    var wb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        Eb = function(a, b) {
            if (b) a = a.replace(xb, "&amp;").replace(yb, "&lt;").replace(zb, "&gt;").replace(Ab, "&quot;").replace(Bb, "&#39;").replace(Cb, "&#0;");
            else {
                if (!Db.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(xb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(yb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(zb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ab, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Bb,
                    "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Cb, "&#0;"))
            }
            return a
        },
        xb = /&/g,
        yb = /</g,
        zb = />/g,
        Ab = /"/g,
        Bb = /'/g,
        Cb = /\x00/g,
        Db = /[\x00&<>"']/,
        Sb = function(a) {
            return -1 != a.indexOf("&") ? "document" in p ? Fb(a) : Rb(a) : a
        },
        Tb = function(a, b) {
            return -1 != a.indexOf("&") ? Fb(a, b) : a
        },
        Fb = function(a, b) {
            var c = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                d;
            d = b ? b.createElement("div") : p.document.createElement("div");
            return a.replace(Ub, function(a, b) {
                var h = c[a];
                if (h) return h;
                if ("#" == b.charAt(0)) {
                    var k = Number("0" + b.substr(1));
                    isNaN(k) || (h = String.fromCharCode(k))
                }
                h || (d.innerHTML = a + " ", h = d.firstChild.nodeValue.slice(0, -1));
                return c[a] = h
            })
        },
        Rb = function(a) {
            return a.replace(/&([^;]+);/g, function(a, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        if ("#" == c.charAt(0)) {
                            var d = Number("0" + c.substr(1));
                            if (!isNaN(d)) return String.fromCharCode(d)
                        }
                        return a
                }
            })
        },
        Ub = /&([^;\s<&]+);?/g,
        Vb = function(a, b) {
            for (var c = b.length, d = 0; d < c; d++) {
                var e = 1 == c ? b : b.charAt(d);
                if (a.charAt(0) == e && a.charAt(a.length -
                        1) == e) return a.substring(1, a.length - 1)
            }
            return a
        },
        Wb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
        },
        Xb = {
            "'": "\\'"
        },
        Yb = function(a) {
            a = String(a);
            for (var b = ['"'], c = 0; c < a.length; c++) {
                var d = a.charAt(c),
                    e = d.charCodeAt(0),
                    f = c + 1,
                    h;
                if (!(h = Wb[d])) {
                    if (!(31 < e && 127 > e))
                        if (d in Xb) d = Xb[d];
                        else if (d in Wb) d = Xb[d] = Wb[d];
                    else {
                        e = d;
                        h = d.charCodeAt(0);
                        if (31 < h && 127 > h) e = d;
                        else {
                            if (256 > h) {
                                if (e = "\\x", 16 > h || 256 < h) e += "0"
                            } else e = "\\u", 4096 > h && (e += "0");
                            e += h.toString(16).toUpperCase()
                        }
                        d =
                            Xb[d] = e
                    }
                    h = d
                }
                b[f] = h
            }
            b.push('"');
            return b.join("")
        },
        $b = function(a, b) {
            for (var c = 0, d = wb(String(a)).split("."), e = wb(String(b)).split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
                var k = d[h] || "",
                    l = e[h] || "",
                    m = RegExp("(\\d*)(\\D*)", "g"),
                    n = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var q = m.exec(k) || ["", "", ""],
                        t = n.exec(l) || ["", "", ""];
                    if (0 == q[0].length && 0 == t[0].length) break;
                    var c = 0 == q[1].length ? 0 : parseInt(q[1], 10),
                        w = 0 == t[1].length ? 0 : parseInt(t[1], 10),
                        c = Zb(c, w) || Zb(0 == q[2].length, 0 == t[2].length) || Zb(q[2], t[2])
                } while (0 ==
                    c)
            }
            return c
        },
        Zb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        ac = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        },
        bc = function(a, b) {
            var c = u(b) ? String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s",
                c = c ? "|[" + c + "]+" : "",
                c = new RegExp("(^" + c + ")([a-z])", "g");
            return a.replace(c, function(a, b, c) {
                return b + c.toUpperCase()
            })
        };
    var cc = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (u(a)) return u(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        dc = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        ec = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a,
                b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, h = u(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in h) {
                    var l = h[k];
                    b.call(c, l, k, a) && (e[f++] = l)
                }
            return e
        },
        fc = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        },
        gc = Array.prototype.some ? function(a, b, c) {
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in
                    e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        hc = function(a, b) {
            return 0 <= cc(a, b)
        },
        ic = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        jc = function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (ha(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var h = 0; h < f; h++) a[e + h] = d[h]
                } else a.push(d)
            }
        },
        kc = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        lc = function(a, b) {
            for (var c = b || Math.random,
                    d = a.length - 1; 0 < d; d--) {
                var e = Math.floor(c() * (d + 1)),
                    f = a[d];
                a[d] = a[e];
                a[e] = f
            }
        };
    var D = function(a, b) {
        this.x = ba(a) ? a : 0;
        this.y = ba(b) ? b : 0
    };
    D.prototype.clone = function() {
        return new D(this.x, this.y)
    };
    var mc = function(a, b) {
        return new D(a.x - b.x, a.y - b.y)
    };
    g = D.prototype;
    g.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    g.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    g.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    g.translate = function(a, b) {
        a instanceof D ? (this.x += a.x, this.y += a.y) : (this.x += a, v(b) && (this.y += b));
        return this
    };
    g.scale = function(a, b) {
        var c = v(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    };
    var nc = function(a) {
        nc[" "](a);
        return a
    };
    nc[" "] = da;
    var oc = function(a, b) {
        try {
            return nc(a[b]), !0
        } catch (c) {}
        return !1
    };
    var pc = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Dc = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Ec = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        Fc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Gc = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Fc.length; f++) c = Fc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Hc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
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
    };
    var Jc = function() {
        this.hk = "";
        this.Aq = Ic
    };
    Jc.prototype.Oc = !0;
    Jc.prototype.Ub = function() {
        return this.hk
    };
    Jc.prototype.toString = function() {
        return "Const{" + this.hk + "}"
    };
    var Kc = function(a) {
            return a instanceof Jc && a.constructor === Jc && a.Aq === Ic ? a.hk : "type_error:Const"
        },
        Ic = {};
    var Mc = function() {
        this.zj = "";
        this.uq = Lc
    };
    Mc.prototype.Oc = !0;
    var Lc = {};
    Mc.prototype.Ub = function() {
        return this.zj
    };
    Mc.prototype.Yf = function(a) {
        this.zj = a;
        return this
    };
    var Nc = (new Mc).Yf(""),
        Oc = /^[-,."'%_!# a-zA-Z0-9]+$/;
    var Qc = function() {
        this.Yc = "";
        this.vq = Pc
    };
    Qc.prototype.Oc = !0;
    Qc.prototype.Ub = function() {
        return this.Yc
    };
    Qc.prototype.Ni = !0;
    Qc.prototype.ze = function() {
        return 1
    };
    var Rc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        Pc = {};
    var Tc = function() {
        this.Do = "";
        this.Cq = Sc
    };
    Tc.prototype.Oc = !0;
    Tc.prototype.Ub = function() {
        return this.Do
    };
    Tc.prototype.Ni = !0;
    Tc.prototype.ze = function() {
        return 1
    };
    var Sc = {};
    var Vc = function() {
        this.Yc = "";
        this.tq = Uc;
        this.Ql = null
    };
    Vc.prototype.Ni = !0;
    Vc.prototype.ze = function() {
        return this.Ql
    };
    Vc.prototype.Oc = !0;
    Vc.prototype.Ub = function() {
        return this.Yc
    };
    var Wc = function(a) {
            return a instanceof Vc && a.constructor === Vc && a.tq === Uc ? a.Yc : "type_error:SafeHtml"
        },
        Xc = /^[a-zA-Z0-9-]+$/,
        Yc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Zc = {
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            TEMPLATE: !0
        },
        ad = function(a) {
            var b = 0,
                c = "",
                d = function(a) {
                    if (r(a)) dc(a, d);
                    else {
                        var f;
                        a instanceof Vc ? f = a : (f = null, a.Ni && (f = a.ze()), a = a.Oc ? a.Ub() : String(a), f = $c(Eb(a), f));
                        c += Wc(f);
                        f = f.ze();
                        0 == b ? b = f : 0 != f && b != f && (b = null)
                    }
                };
            dc(arguments, d);
            return $c(c,
                b)
        },
        Uc = {},
        $c = function(a, b) {
            return (new Vc).Yf(a, b)
        };
    Vc.prototype.Yf = function(a, b) {
        this.Yc = a;
        this.Ql = b;
        return this
    };
    $c("<!DOCTYPE html>", 0);
    $c("", 0);
    var bd = function(a, b) {
        this.width = a;
        this.height = b
    };
    g = bd.prototype;
    g.clone = function() {
        return new bd(this.width, this.height)
    };
    g.mr = function() {
        return this.width * this.height
    };
    g.isEmpty = function() {
        return !this.mr()
    };
    g.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    g.scale = function(a, b) {
        var c = v(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var vd;
    a: {
        var wd = p.navigator;
        if (wd) {
            var xd = wd.userAgent;
            if (xd) {
                vd = xd;
                break a
            }
        }
        vd = ""
    }
    var G = function(a) {
            var b = vd;
            return -1 != b.indexOf(a)
        },
        yd = function(a) {
            var b = vd;
            return -1 != b.toLowerCase().indexOf(a.toLowerCase())
        };
    var zd = function() {
            return G("Opera") || G("OPR")
        },
        Ad = function() {
            return (G("Chrome") || G("CriOS")) && !zd() && !G("Edge")
        };
    var Bd = function() {
        return G("iPhone") && !G("iPod") && !G("iPad")
    };
    var Cd = zd(),
        I = G("Trident") || G("MSIE"),
        Dd = G("Edge"),
        Ed = G("Gecko") && !(yd("WebKit") && !G("Edge")) && !(G("Trident") || G("MSIE")) && !G("Edge"),
        Fd = yd("WebKit") && !G("Edge"),
        Gd = G("Macintosh"),
        Jd = function() {
            if (Cd && p.opera) {
                var a;
                var b = p.opera.version;
                try {
                    a = b()
                } catch (c) {
                    a = b
                }
                return a
            }
            a = "";
            (b = Hd()) && (a = b ? b[1] : "");
            return I && (b = Id(), b > parseFloat(a)) ? String(b) : a
        },
        Hd = function() {
            var a = vd;
            if (Ed) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Dd) return /Edge\/([\d\.]+)/.exec(a);
            if (I) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Fd) return /WebKit\/(\S+)/.exec(a)
        },
        Id = function() {
            var a = p.document;
            return a ? a.documentMode : void 0
        },
        Kd = Jd(),
        Ld = {},
        Md = function(a) {
            return Ld[a] || (Ld[a] = 0 <= $b(Kd, a))
        },
        Nd, Od = p.document,
        Pd = Id(),
        Qd = Nd = Od && I ? Pd || ("CSS1Compat" == Od.compatMode ? parseInt(Kd, 10) : 5) : void 0;
    var Rd = !I || 9 <= Qd,
        Sd = !Ed && !I || I && 9 <= Qd || Ed && Md("1.9.1"),
        Td = I && !Md("9"),
        Ud = I || Cd || Fd;
    var Xd = function(a) {
            return a ? new Vd(Wd(a)) : vb || (vb = new Vd)
        },
        Zd = function(a, b) {
            pc(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Yd.hasOwnProperty(d) ? a.setAttribute(Yd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Yd = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        $d = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new bd(a.clientWidth, a.clientHeight)
        },
        ae = function(a) {
            return a.parentWindow || a.defaultView
        },
        ce = function(a, b, c) {
            return be(document, arguments)
        },
        be = function(a, b) {
            var c = b[0],
                d = b[1];
            if (!Rd && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', Eb(d.name), '"');
                if (d.type) {
                    c.push(' type="', Eb(d.type), '"');
                    var e = {};
                    Gc(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = a.createElement(c);
            d && (u(d) ? c.className =
                d : r(d) ? c.className = d.join(" ") : Zd(c, d));
            2 < b.length && de(a, c, b, 2);
            return c
        },
        de = function(a, b, c, d) {
            function e(c) {
                c && b.appendChild(u(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !ha(f) || ja(f) && 0 < f.nodeType ? e(f) : dc(ee(f) ? ic(f) : f, e)
            }
        },
        fe = function(a) {
            return document.createElement(a)
        },
        ye = function(a) {
            if (1 != a.nodeType) return !1;
            switch (a.tagName) {
                case "APPLET":
                case "AREA":
                case "BASE":
                case "BR":
                case "COL":
                case "COMMAND":
                case "EMBED":
                case "FRAME":
                case "HR":
                case "IMG":
                case "INPUT":
                case "IFRAME":
                case "ISINDEX":
                case "KEYGEN":
                case "LINK":
                case "NOFRAMES":
                case "NOSCRIPT":
                case "META":
                case "OBJECT":
                case "PARAM":
                case "SCRIPT":
                case "SOURCE":
                case "STYLE":
                case "TRACK":
                case "WBR":
                    return !1
            }
            return !0
        },
        Ie = function(a, b) {
            a.appendChild(b)
        },
        Je = function(a, b) {
            de(Wd(a), a, arguments, 1)
        },
        Ke = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        Le = function(a) {
            return Sd && void 0 != a.children ? a.children : ec(a.childNodes, function(a) {
                return 1 == a.nodeType
            })
        },
        Me = function(a) {
            if (!a) return null;
            if (a.firstChild) return a.firstChild;
            for (; a && !a.nextSibling;) a = a.parentNode;
            return a ? a.nextSibling : null
        },
        Ne = function(a) {
            if (!a) return null;
            if (!a.previousSibling) return a.parentNode;
            for (a = a.previousSibling; a && a.lastChild;) a =
                a.lastChild;
            return a
        },
        Oe = function(a, b) {
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        Wd = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Pe = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Qe = {
            IMG: " ",
            BR: "\n"
        },
        Se = function(a) {
            if (Td && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
            else {
                var b = [];
                Re(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g,
                " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            Td || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""));
            return a
        },
        Re = function(a, b, c) {
            if (!(a.nodeName in Pe))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Qe) b.push(Qe[a.nodeName]);
            else
                for (a = a.firstChild; a;) Re(a, b, c), a = a.nextSibling
        },
        ee = function(a) {
            if (a && "number" == typeof a.length) {
                if (ja(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ia(a)) return "function" ==
                    typeof a.item
            }
            return !1
        },
        Vd = function(a) {
            this.Na = a || p.document || document
        };
    g = Vd.prototype;
    g.Sb = function() {
        return this.Na
    };
    g.xm = function(a, b, c) {
        c = c || this.Na;
        a = a && "*" != a ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) b = a + (b ? "." + b : ""), b = c.querySelectorAll(b);
        else if (b && c.getElementsByClassName)
            if (c = c.getElementsByClassName(b), a) {
                for (var d = {}, e = 0, f = 0, h; h = c[f]; f++) a == h.nodeName && (d[e++] = h);
                d.length = e;
                b = d
            } else b = c;
        else if (c = c.getElementsByTagName(a || "*"), b) {
            d = {};
            for (f = e = 0; h = c[f]; f++) a = h.className, "function" == typeof a.split && hc(a.split(/\s+/), b) && (d[e++] = h);
            d.length = e;
            b = d
        } else b = c;
        return b
    };
    g.xl = function(a, b, c) {
        return be(this.Na, arguments)
    };
    g.createElement = function(a) {
        return this.Na.createElement(a)
    };
    g.createTextNode = function(a) {
        return this.Na.createTextNode(String(a))
    };
    g.Xu = function() {
        return "CSS1Compat" == this.Na.compatMode
    };
    g.Mc = function() {
        return ae(this.Na)
    };
    g.qt = function() {
        var a, b = this.Na;
        a = b.scrollingElement ? b.scrollingElement : Fd || "CSS1Compat" != b.compatMode ? b.body || b.documentElement : b.documentElement;
        b = ae(b);
        return a = I && Md("10") && b.pageYOffset != a.scrollTop ? new D(a.scrollLeft, a.scrollTop) : new D(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    };
    g.appendChild = Ie;
    g.append = Je;
    g.canHaveChildren = ye;
    g.removeNode = Ke;
    g.ia = Le;
    g.contains = Oe;
    var Te = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    g = Te.prototype;
    g.getWidth = function() {
        return this.right - this.left
    };
    g.getHeight = function() {
        return this.bottom - this.top
    };
    g.clone = function() {
        return new Te(this.top, this.right, this.bottom, this.left)
    };
    g.contains = function(a) {
        return this && a ? a instanceof Te ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    g.expand = function(a, b, c, d) {
        ja(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
        return this
    };
    g.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    g.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    g.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    g.translate = function(a, b) {
        a instanceof D ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, v(b) && (this.top += b, this.bottom += b));
        return this
    };
    g.scale = function(a, b) {
        var c = v(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    };
    var J = function(a, b, c) {
            if (u(b)) {
                var d = c;
                (b = Ue(a, b)) && (a.style[b] = d)
            } else
                for (d in b) {
                    c = a;
                    var e = b[d],
                        f = Ue(c, d);
                    f && (c.style[f] = e)
                }
        },
        Ve = {},
        Ue = function(a, b) {
            var c = Ve[b];
            if (!c) {
                var d = ac(b),
                    c = d;
                void 0 === a.style[d] && (d = (Fd ? "Webkit" : Ed ? "Moz" : I ? "ms" : Cd ? "O" : null) + bc(d), void 0 !== a.style[d] && (c = d));
                Ve[b] = c
            }
            return c
        },
        We = function(a, b) {
            var c = a.style[ac(b)];
            return "undefined" !== typeof c ? c : a.style[Ue(a, b)] || ""
        },
        Xe = function(a, b) {
            var c = Wd(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a,
                null)) ? c[b] || c.getPropertyValue(b) || "" : ""
        },
        Ye = function(a, b) {
            return Xe(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        Ze = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            I && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        $e = function(a) {
            var b = Wd(a),
                c = new D(0, 0),
                d;
            d = b ? Wd(b) : document;
            d = !I || 9 <= Qd || Xd(d).Xu() ? d.documentElement :
                d.body;
            if (a == d) return c;
            a = Ze(a);
            b = Xd(b).qt();
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        af = function(a) {
            return $e(a).y
        },
        bf = function(a) {
            a = Ze(a);
            return new D(a.left, a.top)
        },
        cf = function(a) {
            if (1 == a.nodeType) return bf(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new D(a.clientX, a.clientY)
        },
        ef = function(a, b, c) {
            if (b instanceof bd) c = b.height, b = b.width;
            else if (void 0 == c) throw Error("missing height argument");
            a.style.width = df(b, !0);
            a.style.height = df(c, !0)
        },
        df = function(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) :
                a) + "px");
            return a
        },
        ff = function(a, b) {
            if ("none" != Ye(b, "display")) return a(b);
            var c = b.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            var h = a(b);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return h
        },
        gf = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Fd && !b && !c;
            return ba(b) && !d || !a.getBoundingClientRect ? new bd(b, c) : (a = Ze(a), new bd(a.right - a.left, a.bottom - a.top))
        },
        hf = function(a) {
            var b = a.style;
            a = "";
            "opacity" in b ? a = b.opacity : "MozOpacity" in b ? a =
                b.MozOpacity : "filter" in b && (b = b.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (a = String(b[1] / 100));
            return "" == a ? a : Number(a)
        },
        jf = function(a, b) {
            var c = a.style;
            "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
        },
        kf = function(a, b) {
            var c = Xd(b),
                d = null,
                d = c.Sb();
            if (I && d.createStyleSheet) {
                var c = d = d.createStyleSheet(),
                    e = a;
                I && ba(c.cssText) ? c.cssText = e : c.innerHTML = e
            } else {
                e = c.xm("HEAD")[0];
                e || (d = c.xm("BODY")[0], e = c.xl("HEAD"), d.parentNode.insertBefore(e,
                    d));
                var f = d = c.xl("STYLE"),
                    h = a;
                I && ba(f.cssText) ? f.cssText = h : f.innerHTML = h;
                c.appendChild(e, d)
            }
            return d
        },
        lf = function(a) {
            a = a.ownerNode || a.owningElement || a;
            Ke(a)
        },
        mf = function(a, b, c, d) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var e = a.style[c],
                f = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = e;
            a.runtimeStyle[c] = f;
            return b
        },
        nf = function(a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : null;
            return c ? mf(a, c, "left", "pixelLeft") : 0
        },
        of = function(a, b) {
            if (I) {
                var c = nf(a, b +
                        "Left"),
                    d = nf(a, b + "Right"),
                    e = nf(a, b + "Top"),
                    f = nf(a, b + "Bottom");
                return new Te(e, d, f, c)
            }
            c = Xe(a, b + "Left");
            d = Xe(a, b + "Right");
            e = Xe(a, b + "Top");
            f = Xe(a, b + "Bottom");
            return new Te(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
        },
        pf = /[^\d]+$/,
        qf = {
            cm: 1,
            "in": 1,
            mm: 1,
            pc: 1,
            pt: 1
        },
        rf = {
            em: 1,
            ex: 1
        },
        sf = function(a) {
            var b = Ye(a, "fontSize"),
                c;
            c = (c = b.match(pf)) && c[0] || null;
            if (b && "px" == c) return parseInt(b, 10);
            if (I) {
                if (c in qf) return mf(a, b, "left", "pixelLeft");
                if (a.parentNode && 1 == a.parentNode.nodeType && c in rf) return a =
                    a.parentNode, c = Ye(a, "fontSize"), mf(a, b == c ? "1em" : b, "left", "pixelLeft")
            }
            c = ce("SPAN", {
                style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
            });
            a.appendChild(c);
            b = c.offsetHeight;
            Ke(c);
            return b
        };
    var L = function(a) {
            try {
                return !!a && null != a.location.href && oc(a, "foo")
            } catch (b) {
                return !1
            }
        },
        tf = function(a) {
            return L(a.top) ? a.top : null
        },
        uf = function(a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
        },
        wf = function(a, b) {
            if (!(1E-4 > Math.random())) {
                var c = Math.random();
                if (c < b) return c = vf(window), c = Math.floor(c * a.length), a[c]
            }
            return null
        },
        vf = function(a) {
            try {
                var b = new Uint32Array(1);
                a.crypto.getRandomValues(b);
                return b[0] / 65536 / 65536
            } catch (c) {
                return Math.random()
            }
        },
        xf = function(a, b, c) {
            for (var d in a) Object.prototype.hasOwnProperty.call(a,
                d) && b.call(c, a[d], d, a)
        },
        yf = function(a, b) {
            var c = a.length;
            if (0 == c) return 0;
            for (var d = b || 305419896, e = 0; e < c; e++) var f = a.charCodeAt(e),
                d = d ^ (d << 5) + (d >> 2) + f & 4294967295;
            return 0 < d ? d : 4294967296 + d
        },
        zf = /^([0-9.]+)px$/,
        Af = /^(-?[0-9.]{1,30})$/,
        Bf = function(a, b) {
            if (Af.test(a)) {
                var c = Number(a);
                if (!isNaN(c)) return c
            }
            return void 0 == b ? null : b
        },
        Cf = function(a) {
            return (a = zf.exec(a)) ? +a[1] : null
        },
        Df = function(a) {
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] &&
                    1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        };
    var M = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, d || !1), !0) : a.attachEvent ? (a.attachEvent("on" + b, c), !0) : !1
        },
        Ef = function(a, b, c, d) {
            return a.removeEventListener ? (a.removeEventListener(b, c, d || !1), !0) : a.detachEvent ? (a.detachEvent("on" + b, c), !0) : !1
        };
    var Ff = function(a, b) {
        this.ur = a;
        this.Cs = b;
        this.jy = Math.random()
    };
    Ff.prototype.Qn = function(a, b, c, d, e) {
        try {
            if (this.Wx(!!c, d)) {
                var f = this.ur + a + Gf(b),
                    f = f.substring(0, 2E3);
                "undefined" === typeof e ? Hf(p, f) : Hf(p, f, e)
            }
        } catch (h) {}
    };
    Ff.prototype.Wx = function(a, b) {
        var c = b || this.Cs,
            d = a ? this.jy : Math.random();
        return d < c
    };
    var Gf = function(a) {
            var b = "",
                c = function(a, c) {
                    if (0 === a || a) b += "&" + c + "=" + encodeURIComponent(String(a))
                };
            xf(a, c);
            return b
        },
        Hf = function(a, b, c) {
        	//console.log('Hf', b)
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function(a) {
                    c(a);
                    Ef(d, "load", e);
                    Ef(d, "error", e)
                };
                M(d, "load", e);
                M(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        };
    var If = document,
        N = window;
    var O = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
        },
        Jf = function(a) {
            return !!a && "function" == typeof a && !!a.call
        },
        Kf = function(a) {
            return !!a && ("object" == typeof a || "function" == typeof a)
        },
        Lf = function(a, b) {
            if (!a) return !1;
            var c = !0;
            O(b, function(b, e) {
                c && e in a && typeof b == typeof a[e] || (c = !1)
            });
            return c
        },
        Mf = function(a, b) {
            if (2 > arguments.length) return a.length;
            for (var c = 1, d = arguments.length; c < d; ++c) a.push(arguments[c]);
            return a.length
        },
        Nf = function(a, b) {
            if (a.filter) return a.filter(b);
            for (var c = [], d = 0; d < a.length; d++) b(a[d]) && c.push(a[d]);
            return c
        },
        Of = function(a, b) {
            if (a.indexOf) {
                var c = a.indexOf(b);
                return 0 < c || 0 === c
            }
            for (c = 0; c < a.length; c++)
                if (a[c] === b) return !0;
            return !1
        };

    function Pf(a, b, c, d) {
        d = d || document;
        var e = d.createElement("script");
        e.type = "text/javascript";
        b && (void 0 !== e.onreadystatechange ? e.onreadystatechange = function() {
            if ("complete" == e.readyState || "loaded" == e.readyState) try {
                b()
            } catch (a) {}
        } : e.onload = b);
        c && (e.id = c);
        e.src = a;
        var f = d.getElementsByTagName("head")[0];
        if (!f) return !1;
        try {
            window.setTimeout(function() {
                f.appendChild(e)
            }, 0)
        } catch (h) {
            return !1
        }
        return !0
    }
    var Qf = function(a, b) {
            return M(a, "load", b)
        },
        Rf = function(a, b, c, d) {
            return M(a, b, c, d)
        },
        Sf = function(a, b, c, d) {
            return c ? Ef(a, b, c, d) : !1
        },
        Tf = function(a) {
            "google_onload_fired" in a || (a.google_onload_fired = !1, Qf(a, function() {
                a.google_onload_fired = !0
            }))
        },
        Uf = function(a, b) {
            var c = b.slice(-1),
                d = "?" == c || "#" == c ? "" : "&",
                e = [b],
                c = function(a, b) {
                    if (a || 0 === a || !1 === a) "boolean" == typeof a && (a = a ? 1 : 0), Mf(e, d, b, "=", "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)), d = "&"
                };
            O(a, c);
            return URI(e.join(""))
        },
        Vf = function(a) {
            a =
                a || N;
            try {
                return a.history.length
            } catch (b) {
                return 0
            }
        };

    function Wf(a) {
        return a in Yf ? Yf[a] : Yf[a] = -1 != navigator.userAgent.toLowerCase().indexOf(a)
    }
    var Yf = {};

    function Og() {
        if (navigator.plugins && navigator.mimeTypes.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                for (var a = 3, b = 1; b;) try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a + 1)), a++
                } catch (c) {
                    b = null
                }
                return a.toString()
            }
            if (Wf("msie") && !window.opera) {
                b = null;
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                } catch (c) {
                    a =
                        0;
                    try {
                        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = 6, b.AllowScriptAccess = "always"
                    } catch (d) {
                        if (6 == a) return a.toString()
                    }
                    try {
                        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                    } catch (d) {}
                }
                if (b) return a = b.GetVariable("$version").split(" ")[1], a.replace(/,/g, ".")
            }
        }
        return "0"
    }
    var Pg = function(a) {
        a = a || N;
        return a.google_ad_output || "html"
    };

    function Qg(a) {
        var b = a.google_ad_format;
        return b ? 0 < b.indexOf("_0ads") : "html" != a.google_ad_output && 0 < a.google_num_radlinks
    }
    var Rg = function(a) {
            a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1;
            return a.google_unique_id
        },
        Sg = function(a) {
            a = a.google_unique_id;
            return "number" == typeof a ? a : 0
        },
        Tg = function(a, b) {
            for (var c = [], d = 0; a && 25 > d; ++d) {
                var e = "";
                b || (e = (e = 9 != a.nodeType && a.id) ? "/" + e : "");
                var f = a.nodeName && a.nodeName.toString().toLowerCase(),
                    h;
                a: {
                    if (a && a.nodeName && a.parentElement) {
                        var k = a.parentElement;
                        h = a.nodeName.toString().toLowerCase();
                        for (var k = k.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var n = k[m];
                            if (n.nodeName && n.nodeName.toString().toLowerCase() ==
                                h) {
                                if (a == n) {
                                    h = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    h = ""
                }
                c.push(f + e + h);
                a = a.parentElement
            }
            return c.join()
        },
        Ug = function(a, b, c) {
            a = c ? a.parentElement : a;
            b = [b.google_ad_slot, b.google_ad_format, b.google_ad_type, b.google_ad_width, b.google_ad_height];
            c = [];
            for (var d = 0; a && 25 > d; a = a.parentNode, ++d) c.push(9 != a.nodeType && a.id || "");
            (a = c.join()) && b.push(a);
            return yf(b.join(":")).toString()
        },
        Vg = function(a) {
            a = (new Date).getTime() - a;
            return 1E4 > a ? a + "" : "M"
        },
        Wg = !!window.google_async_iframe_id,
        Xg = Wg && window.parent || window,
        Q = function() {
            if (Wg &&
                !L(Xg)) {
                var a = "." + If.domain;
                try {
                    for (; 2 < a.split(".").length && !L(Xg);) If.domain = a = a.substr(a.indexOf(".") + 1), Xg = window.parent
                } catch (b) {}
                L(Xg) || (Xg = window)
            }
            return Xg
        },
        Yg = /(^| )adsbygoogle($| )/,
        Zg = function(a) {
            return function() {
                if (a) {
                    var b = a;
                    a = null;
                    b.apply(null, arguments)
                }
            }
        },
        $g = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        ah = {
            "http://googleads.g.doubleclick.net": !0,
            "http://pagead2.googlesyndication.com": !0,
            "https://googleads.g.doubleclick.net": !0,
            "https://pagead2.googlesyndication.com": !0
        },
        bh = function(a) {
            var b = window.document.createElement("span"),
                b = b.style;
            if (!b) return null;
            if (a in b) return a;
            a = a && a.charAt(0).toUpperCase() + a.substring(1);
            for (var c = ["webkit", "moz", "ms", "o"], d = 0; d < c.length; d++) {
                var e = c[d] + a;
                if (e in b) return e;
                e = e && e.charAt(0).toUpperCase() + e.substring(1);
                if (e in b) return e
            }
            return null
        },
        ch = function(a, b) {
            var c = b.createElement("link");
            c.type = "text/css";
            c.rel = "stylesheet";
            c.href = "//fonts.googleapis.com/css?family=" + a;
            return c
        };
    var dh = function(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };
    dh.prototype.clone = function() {
        return new dh(this.start, this.end)
    };
    var eh = function(a, b) {
        this.Fo = b >= a ? new dh(a, b) : null
    };
    eh.prototype.Gr = function(a, b, c, d) {
        var e = new dh(c, c + d - 1);
        (d = 0 >= d || d % b.length) || (d = this.Fo, d = d.start <= e.start && d.end >= e.end, d = !d);
        if (d) return null;
        a = fh(a);
        return null !== a && e.start <= a && e.end >= a ? b[(a - c) % b.length] : null
    };
    var fh = function(a) {
        var b;
        try {
            b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10)
        } catch (c) {
            return null
        }
        if (0 <= b && 1E3 > b) return b;
        b = Math.floor(1E3 * vf(a));
        try {
            return a.localStorage.setItem("google_experiment_mod", "" + b), b
        } catch (c) {
            return null
        }
    };
    var gh = function(a) {
            this.yb = [];
            this.Da = {};
            for (var b = 0, c = arguments.length; b < c; ++b) this.Da[arguments[b]] = ""
        },
        hh = !1;
    gh.prototype.fk = function() {
        return !0
    };
    gh.prototype.Ys = function(a, b) {
        this.Da[b] = a
    };
    var ih = function(a) {
        try {
            var b = (a || window).top.location.hash;
            if (b) {
                var c = b.match(/\bdeid=([\d,]+)/);
                return c && c[1] || ""
            }
        } catch (d) {}
        return ""
    };
    g = gh.prototype;
    g.Qa = function(a, b) {
        return "" == a ? "" : b ? this.Da.hasOwnProperty(b) ? this.Da[b] = a : "" : (this.yb.push(a), a)
    };
    g.G = function(a, b, c) {
        if (this.pn(c)) {
            var d;
            d = a;
            var e = ih();
            if (a = (d = (d = e.match(new RegExp("\\b(" + d.join("|") + ")\\b"))) && d[0] || null) ? d : hh ? null : wf(a, b)) return this.Qa(a, c)
        }
        return ""
    };
    g.Fr = function(a, b, c, d, e) {
        if (this.pn(e)) {
            var f = c.Fo.start;
            d *= 1E3;
            d = Math.round(d);
            if (a = c.Gr(a, b, f, d)) return this.Qa(a, e)
        }
        return ""
    };
    g.pn = function(a) {
        return a ? this.Da.hasOwnProperty(a) && "" == this.Da[a] : !0
    };
    g.V = function(a) {
        return this.Da.hasOwnProperty(a) ? this.Da[a] : ""
    };
    g.xi = function() {
        var a = this.yb.concat([]),
            b = function(b) {
                "" != b && a.push(b)
            };
        xf(this.Da, b);
        return a
    };
    g.tt = function() {
        return this.xi().join()
    };
    hh = !1;
    var jh = function(a, b, c) {
            this.nw = a;
            this.Ps = b;
            this.ck = c;
            this.rh = null;
            this.Os = this.Sc;
            this.$y = !1
        },
        kh = function(a, b, c) {
            this.message = a;
            this.fileName = b || "";
            this.lineNumber = c || -1
        };
    g = jh.prototype;
    g.tx = function(a) {
        this.rh = a
    };
    g.Ox = function(a) {
        this.ck = a
    };
    g.Eo = function(a, b, c, d, e) {
        var f;
        try {
            f = b()
        } catch (m) {
            var h = this.ck;
            try {
                var k = lh(m),
                    l = e || this.Os,
                    h = l.call(this, a, k, void 0, c)
            } catch (n) {
                this.Sc("pAR", n)
            }
            if (!h) throw m;
        } finally {
            if (d) try {
                d()
            } catch (m) {}
        }
        return f
    };
    g.Ue = function(a, b, c, d, e) {
        var f = this;
        return function() {
            var h = arguments,
                k = function() {
                    return b.apply(c, h)
                };
            return f.Eo(a, k, d, e)
        }
    };
    g.Sc = function(a, b, c, d, e) {
        var f = {};
        f.context = a;
        b instanceof kh || (b = lh(b));
        f.msg = b.message.substring(0, 512);
        b.fileName && (f.file = b.fileName);
        0 < b.lineNumber && (f.line = b.lineNumber.toString());
        a = p.document;
        f.url = a.URL.substring(0, 512);
        f.ref = a.referrer.substring(0, 512);
        this.Qq(f, d);
        this.nw.Qn(e || this.Ps, f, this.$y, c);
        return this.ck
    };
    g.Qq = function(a, b) {
        if (this.rh) try {
            this.rh(a)
        } catch (c) {}
        if (b) try {
            b(a)
        } catch (c) {}
    };
    var lh = function(a) {
        var b;
        b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            var c = a.stack,
                d = b;
            try {
                -1 == c.indexOf(d) && (c = d + "\n" + c);
                for (var e; c != e;) e = c, c = c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = c.replace(/\n */g, "\n")
            } catch (f) {
                b = d
            }
        }
        return new kh(b, a.fileName, a.lineNumber)
    };
    var mh, nh, oh, ph, qh = N;
    ph = "http:" == qh.location.protocol;
    var rh = "http" + (ph ? "" : "s") + "://";
    oh = rh;
    mh = new Ff(oh + "pagead2.googlesyndication.com/pagead/gen_204?id=", .01);
    nh = new jh(mh, "jserror", !0);
    var sh = function(a, b, c, d, e) {
            return nh.Eo(a, c, d, e, b)
        },
        th = nh.Sc,
        R = function(a, b, c, d) {
            var e = "jserror" != a;
            mh.Qn(a, b, e, c, d)
        },
        uh = function(a, b, c, d) {
            return nh.Ue(a, b, void 0, c, d)
        },
        S = function(a, b, c, d) {
            return nh.Ue(a, b, void 0, c, d)
        };
    var vh = function(a, b) {
            for (var c = 0, d = a, e = 0; a && a != a.parent;)
                if (a = a.parent, e++, L(a)) d = a, c = e;
                else if (b) break;
            return {
                Kb: d,
                level: c
            }
        },
        wh = function(a) {
            a = vh(a, !1);
            return a.Kb
        },
        xh = null,
        yh = function() {
            if (!xh) {
                var a = vh(window, !0);
                xh = a.Kb
            }
            return xh
        };
    var Ah = function(a) {
            this.S = a;
            zh(this, 3, null);
            zh(this, 4, 0);
            zh(this, 5, 0);
            zh(this, 6, 0);
            zh(this, 15, 0);
            a = Q();
            a = wh(a);
            var b = a.google_global_correlator;
            b || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
            a = b;
            zh(this, 7, a);
            zh(this, 8, {});
            zh(this, 9, {});
            zh(this, 10, {});
            zh(this, 11, []);
            zh(this, 12, 0);
            zh(this, 14, {});
            zh(this, 17, !1)
        },
        Bh = {
            google_persistent_state: !0,
            google_persistent_state_async: !0
        },
        Ch = {},
        Dh = function(a) {
            var b = Q();
            a = a && Bh[a] ? a : Wg ? "google_persistent_state_async" : "google_persistent_state";
            if (Ch[a]) return Ch[a];
            var c = "google_persistent_state_async" == a ? {} : b,
                d = b[a];
            return null != d && "object" == typeof d && null != d.S && "object" == typeof d.S ? Ch[a] = d : b[a] = Ch[a] = new Ah(c)
        },
        Eh = function(a) {
            switch (a) {
                case 3:
                    return "google_exp_persistent";
                case 4:
                    return "google_num_sdo_slots";
                case 5:
                    return "google_num_0ad_slots";
                case 6:
                    return "google_num_ad_slots";
                case 7:
                    return "google_correlator";
                case 8:
                    return "google_prev_ad_formats_by_region";
                case 9:
                    return "google_prev_ad_slotnames_by_region";
                case 10:
                    return "google_num_slots_by_channel";
                case 11:
                    return "google_viewed_host_channels";
                case 12:
                    return "google_num_slot_to_show";
                case 14:
                    return "gaGlobal";
                case 15:
                    return "google_num_reactive_ad_slots";
                case 17:
                    return "google_ose_setup_performed"
            }
            throw Error("unexpected state");
        },
        Fh = function(a, b) {
            var c = Eh(b);
            return c = a.S[c]
        },
        Gh = function(a, b, c) {
            a = a.S;
            return a[Eh(b)] = c
        },
        zh = function(a, b, c) {
            a = a.S;
            b = Eh(b);
            return void 0 === a[b] ? a[b] = c : a[b]
        };
    var Hh, Ih, Jh, Kh, Lh = function(a) {
            try {
                return !!a && a.fk()
            } catch (b) {
                return !1
            }
        },
        Mh = function() {
            if (Ih && Lh(Ih)) return !0;
            var a = Dh();
            if ((a = Fh(a, 3)) && (a && Kf(a) ? !Lf(a, gh.prototype) : 1)) {
                var b = null;
                a && a.Da && a.Da == a.layers && a.yb && a.yb == a.defaultBucket && (b = new gh, b.Da = a.Da, b.yb = a.yb);
                a = b;
                a || (a = new gh, b = {
                    context: "ps::gpes::cf",
                    url: Q().location.href
                }, R("jserror", b))
            }
            return a && Kf(a) && Lf(a, gh.prototype) && Lh(a) ? (Ih = a, !0) : !1
        },
        Nh = function() {
            if (Mh()) {
                var a = Ih;
                return a
            }
            var a = Dh(),
                b = new gh(2, 1, 3, 4, 5, 7, 10, 12, 13, 14, 17, 19, 20, 29,
                    31, 32, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 43, 46, 47, 48);
            return Ih = a = Gh(a, 3, b)
        },
        T = function() {
            if (!Jh) {
                for (var a = Nh(), b = new gh, c = 0, d = a.yb.length; c < d; ++c) b.yb.push(a.yb[c]);
                xf(a.Da, gh.prototype.Ys, b);
                Jh = b
            }
            return Jh
        },
        Oh = function(a) {
            var b = "",
                c = T();
            c && (b += c.tt());
            N.google_loeid && (b += (b ? "," : "") + N.google_loeid);
            b && (a.eid = 50 < b.length ? b.substring(0, 50) + "T" : b)
        },
        Ph = function(a, b) {
            for (var c = {}, d = (a.google_loeid || "").split(","), e = 0; e < d.length; e++) c[d[e]] = !0;
            d = b.split(",");
            for (e = 0; e < d.length; e++) c[d[e]] = !0;
            var f = [];
            O(c,
                function(a, b) {
                    b && f.push(b)
                });
            a.google_loeid = f.join(",") || void 0
        },
        U = {
            Fq: {
                s: "453848100",
                o: "453848101"
            },
            Bk: {
                s: "828064124",
                o: "828064125"
            },
            Ak: {
                s: "828064127",
                o: "828064128"
            },
            Ck: {
                s: "828064170",
                o: "828064171"
            },
            hd: {
                s: "453848130",
                o: "453848131",
                Dq: "453848132",
                Eq: "453848133"
            },
            Zg: {
                s: "24819308",
                o: "24819309",
                Yp: "24819320"
            },
            Dk: {
                s: "24819330",
                o: "24819331"
            },
            oq: {
                s: "828064162",
                o: "828064163"
            },
            mq: {
                s: "828064164",
                o: "828064165",
                aq: "828064166"
            },
            Xg: {
                s: "86724438",
                o: "86724439"
            },
            kq: {
                s: "828064190",
                o: "828064191"
            },
            qq: {
                s: "10573505",
                o: "10573506"
            },
            ah: {
                s: "10573595",
                o: "10573596"
            },
            yq: {
                s: "10573511",
                o: "10573512"
            },
            fh: {
                s: "10573581",
                o: "10573582"
            },
            rq: {
                s: "10573531",
                o: "10573532"
            },
            bh: {
                s: "10573561",
                o: "10573562"
            },
            sq: {
                s: "10573551",
                o: "10573552"
            },
            pq: {
                s: "312815004",
                o: "312815005"
            },
            $g: {
                s: "312815104",
                o: "312815105"
            },
            Vg: {
                s: "26835103",
                o: "26835104"
            },
            cq: {
                s: "35923720",
                o: "35923721"
            },
            zk: {
                s: "35923760",
                o: "35923761"
            },
            Gq: {
                s: "27415001",
                o: "27415002"
            },
            zz: {
                s: "20040000",
                o: "20040001"
            },
            Zp: {
                s: "20040016",
                o: "20040017"
            },
            bq: {
                s: "828064202",
                o: "828064203"
            }
        },
        Qh = function(a) {
            if (!Kh) {
                var b =
                    Kh = {};
                O(U, function(a) {
                    O(a, function(a) {
                        b[a] = !0
                    })
                })
            }
            return !0 === Kh[a]
        },
        Rh = function(a) {
            a || (a = T());
            return Nf(a.xi(), function(a) {
                return Qh(a)
            })
        },
        Sh = function(a) {
            a || (a = T());
            return Nf(a.xi(), function(a) {
                return !Qh(a)
            })
        };
    var Th = {
            google: 1,
            Nz: 1,
            Mz: 1,
            Pz: 1,
            Oz: 1,
            Qz: 1
        },
        Uh = function(a) {
            var b = a.google_page_location || a.google_page_url;
            "EMPTY" == b && (b = a.google_page_url);
            if (jb || !b) return !1;
            b = b.toString();
            0 == b.indexOf("http://") ? b = b.substring(7, b.length) : 0 == b.indexOf("https://") && (b = b.substring(8, b.length));
            a = b.indexOf("/"); - 1 == a && (a = b.length);
            b = b.substring(0, a);
            b = b.split(".");
            a = !1;
            3 <= b.length && (a = b[b.length - 3] in Th);
            2 <= b.length && (a = a || b[b.length - 2] in Th);
            return a
        };
    var Vh = function(a, b, c) {
            sh("files::getSrc", th, function() {
                if ("https:" == N.location.protocol && "http" == c) {
                    c = "https";
                    var d = "Requested url " + a + b;
                    throw Error(d);
                }
            });
            return [c, "://", a, b].join("")
        },
        Wh = function(a, b, c) {
            c || (c = mb ? "https" : "http");
            return Vh(a, b, c)
        };
    var Xh = function() {};
    Xh.prototype.Gg = function(a) {
        var b = [];
        this.Wj(a, b);
        return b.join("")
    };
    Xh.prototype.Wj = function(a, b) {
        switch (typeof a) {
            case "string":
                this.ef(a, b);
                break;
            case "number":
                this.Uj(a, b);
                break;
            case "boolean":
                b.push(a);
                break;
            case "undefined":
                b.push("null");
                break;
            case "object":
                if (null == a) {
                    b.push("null");
                    break
                }
                if (a instanceof Array || void 0 != a.length && a.splice) {
                    this.sx(a, b);
                    break
                }
                this.Vj(a, b);
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof a);
        }
    };
    var Yh = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Zh = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    Xh.prototype.ef = function(a, b) {
        b.push('"');
        b.push(a.replace(Zh, function(a) {
            if (a in Yh) return Yh[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Yh[a] = e + b.toString(16)
        }));
        b.push('"')
    };
    Xh.prototype.Uj = function(a, b) {
        b.push(isFinite(a) && !isNaN(a) ? a : "null")
    };
    Xh.prototype.sx = function(a, b) {
        var c = a.length;
        b.push("[");
        for (var d = "", e = 0; e < c; e++) b.push(d), this.Wj(a[e], b), d = ",";
        b.push("]")
    };
    Xh.prototype.Vj = function(a, b) {
        b.push("{");
        var c = "",
            d;
        for (d in a)
            if (a.hasOwnProperty(d)) {
                var e = a[d];
                "function" != typeof e && (b.push(c), this.ef(d, b), b.push(":"), this.Wj(e, b), c = ",")
            }
        b.push("}")
    };
    var $h = 0;
    var ai = null,
        bi = null,
        ci = null,
        di = null,
        ei = Ed || Fd || Cd || "function" == typeof p.atob,
        gi = function(a, b) {
            ha(a);
            fi();
            for (var c = b ? ci : ai, d = [], e = 0; e < a.length; e += 3) {
                var f = a[e],
                    h = e + 1 < a.length,
                    k = h ? a[e + 1] : 0,
                    l = e + 2 < a.length,
                    m = l ? a[e + 2] : 0,
                    n = f >> 2,
                    f = (f & 3) << 4 | k >> 4,
                    k = (k & 15) << 2 | m >> 6,
                    m = m & 63;
                l || (m = 64, h || (k = 64));
                d.push(c[n], c[f], c[k], c[m])
            }
            return d.join("")
        },
        hi = function(a, b) {
            var c;
            if (ei && !b) c = p.atob(a);
            else {
                c = a;
                var d = b;
                fi();
                for (var d = d ? di : bi, e = [], f = 0; f < c.length;) {
                    var h = d[c.charAt(f++)],
                        k = f < c.length,
                        k = k ? d[c.charAt(f)] : 0;
                    ++f;
                    var l =
                        f < c.length,
                        l = l ? d[c.charAt(f)] : 64;
                    ++f;
                    var m = f < c.length,
                        m = m ? d[c.charAt(f)] : 64;
                    ++f;
                    if (null == h || null == k || null == l || null == m) throw Error();
                    h = h << 2 | k >> 4;
                    e.push(h);
                    64 != l && (h = k << 4 & 240 | l >> 2, e.push(h), 64 != m && (h = l << 6 & 192 | m, e.push(h)))
                }
                c = e;
                if (8192 >= c.length) c = String.fromCharCode.apply(null, c);
                else {
                    d = "";
                    for (e = 0; e < c.length; e += 8192) f = kc(c, e, e + 8192), d += String.fromCharCode.apply(null, f);
                    c = d
                }
            }
            return c
        },
        fi = function() {
            if (!ai) {
                ai = {};
                bi = {};
                ci = {};
                di = {};
                for (var a = 0; 65 > a; a++) ai[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
                    bi[ai[a]] = a, ci[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), di[ci[a]] = a, 62 <= a && (bi["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a, di["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)] = a)
            }
        };
    var ii = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_ember_h google_ember_w google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
        ji = {
            google_ad_modifications: !0,
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0
        },
        ki = function(a) {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0], (a = a.match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1])) return a[1];
            return null
        },
        li = function(a) {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0], (a = a.match(/^\x3c!--+(.*?)(?:--+>)?\s*$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?\s*$/i)) && /google_ad_client/.test(a[1])) return a[1];
            return null
        },
        mi = function(a) {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
            return null
        },
        pi = function(a, b) {
            var c;
            try {
                a: {
                    var d = a.document.getElementsByTagName("script"),
                        e = ki,
                        f, h = a,
                        k = b,
                        l;
                    if ("undefined" != typeof h.google_pubvars_recovery_regexp_experiment) l = h.google_pubvars_recovery_regexp_experiment;
                    else {
                        var m = ["C", "E", "EM"];
                        l = wf(m, Pa);
                        h.google_pubvars_recovery_regexp_experiment = l
                    }
                    f = k.google_pubvars_recovery_regexp_experiment = l;
                    switch (f) {
                        case "E":
                            e = li;
                            break;
                        case "EM":
                            e = mi
                    }
                    for (var n = d.length - 1; 0 <= n; n--) {
                        var q = d[n];
                        if (!q.google_parsed_script) {
                            q.google_parsed_script = !0;
                            var t = e(q);
                            if (t) {
                                c = t;
                                break a
                            }
                        }
                    }
                    c = null
                }
            } catch (E) {
                return !1
            }
            if (!c) return !1;
            try {
                for (var w, d = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm, e = {}, x; x = d.exec(c);) e[x[1]] = ni(x[2]);
                w = e;
                oi(w, a)
            } catch (E) {
                return !1
            }
            return !!a.google_ad_client
        },
        qi = function(a) {
            var b = {},
                c = b;
            null == a.google_ad_client && pi(a, c) && (c.google_loader_features_used = 2048);
            oi(a, b);
            return b
        },
        ri = function(a) {
            try {
                if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
                    var b, c = encodeURIComponent(window.JSON.stringify(a)),
                        d;
                    if (ei) d = p.btoa(c);
                    else {
                        var e;
                        a = c;
                        for (var c = [], f = 0, h = 0; h < a.length; h++) {
                            for (var k = a.charCodeAt(h); 255 < k;) c[f++] = k & 255, k >>= 8;
                            c[f++] = k
                        }
                        e = c;
                        d = gi(e, void 0)
                    }
                    return b = d
                }
                f = {
                    json: window.JSON ? 1 : 0,
                    eURI: window.encodeURIComponent ? 1 : 0
                };
                R("sblob", f)
            } catch (l) {
                nh.Sc("sblob", l, void 0, void 0)
            }
            return ""
        },
        si = function(a) {
            var b = {};
            try {
                if (a && window.JSON && window.JSON.parse && window.decodeURIComponent) {
                    var c = window.JSON.parse(decodeURIComponent(hi(a)));
                    O(c, function(a, c) {
                        b[c] = a
                    })
                } else {
                    var d = {
                        json: window.JSON ? 1 : 0,
                        dURI: window.decodeURIComponent ? 1 : 0,
                        blob: a ? a : 0
                    };
                    R("dblob", d)
                }
            } catch (e) {
                return nh.Sc("dblob", e, void 0, void 0), {}
            }
            return b
        },
        ti = function(a) {
            a.google_page_url && (a.google_page_url = String(a.google_page_url));
            var b = [];
            O(a, function(a, d) {
                if (null != a) {
                    var e;
                    try {
                        e = (new Xh).Gg(a)
                    } catch (f) {}
                    e && (e = e.replace(/\//g,
                        "\\$&"), Mf(b, d, "=", e, ";"))
                }
            });
            return b.join("")
        },
        ni = function(a) {
            var b;
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    return b;
                default:
                    try {
                        var c = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (c) return c[1] || c[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            var d = parseFloat(a);
                            return d === d ? d : b
                        }
                    } catch (e) {}
                    return b
            }
        },
        oi = function(a, b) {
            for (var c = 0; c < ii.length; c++) {
                var d = ii[c];
                null == b[d] && null != a[d] && (b[d] = a[d])
            }
        };
    var ui = function(a, b) {
        if (a) {
            var c = a.match(b + "=([^&]+)");
            if (c && 2 == c.length) return c[1]
        }
        return ""
    };
    var vi = function(a, b, c, d) {
        this.protocol = a || "";
        this.Jn = d || 2048;
        this.vj = b || "&";
        this.nr = c || ",$";
        this.Og = "trn";
        this.Sk = {};
        this.sh = []
    };
    vi.prototype.$t = function(a, b, c) {
        a = this.protocol + "//" + a + b;
        b = this.Dt() - b.length - c.length;
        if (0 > b) return "";
        this.sh.sort(function(a, b) {
            return a - b
        });
        for (var d = null, e = "", f = 0; f < this.sh.length; f++)
            for (var h = this.sh[f], k = this.Sk[h], l = 0; l < k.length; l++) {
                var m = e + wi(k[l], this.vj, this.nr);
                if (b >= m.length) {
                    b -= m.length;
                    a += m;
                    e = this.vj;
                    break
                }
                null == d && (d = h)
            }
        b = this.Og && null != d ? e + this.Og + "=" + d : "";
        return a + b + c
    };
    vi.prototype.Dt = function() {
        if (!this.Og) return this.Jn;
        var a = 1,
            b;
        for (b in this.Sk) a = b.length > a ? b.length : a;
        return this.Jn - this.Og.length - a - this.vj.length - 1
    };
    var wi = function(a, b, c) {
            var d = [];
            b = b || "&";
            c = c || ",$";
            for (var e in a) d.push(e + "=" + xi(a[e], c));
            return d.join(b)
        },
        xi = function(a, b, c) {
            b = b || ",$";
            "string" == typeof b && (b = b.split(""));
            c = c || 0;
            if (!(a instanceof Array) || c >= b.length) return encodeURIComponent("" + a);
            for (var d = [], e = 0; e < a.length; e++) d.push(xi(a[e], b, c + 1));
            return d.join(b[c])
        };
    var yi = !1,
        zi = "",
        Bi = function() {
            if (navigator.plugins && navigator.plugins.length) {
                var a = navigator.plugins["Shockwave Flash"];
                if (a && (yi = !0, a.description)) {
                    zi = Ai(a.description);
                    return
                }
                if (navigator.plugins["Shockwave Flash 2.0"]) {
                    yi = !0;
                    zi = "2.0.0.11";
                    return
                }
            }
            if (navigator.mimeTypes && navigator.mimeTypes.length && (yi = (a = navigator.mimeTypes["application/x-shockwave-flash"]) && a.enabledPlugin)) {
                zi = Ai(a.enabledPlugin.description);
                return
            }
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                yi = !0;
                zi = Ai(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                yi = !0;
                zi = "6.0.21";
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), yi = !0, zi = Ai(b.GetVariable("$version"))
            } catch (c) {}
        },
        Ai = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    Bi();
    var Ci = zi;
    var Di = G("Firefox"),
        Ei = Bd() || G("iPod"),
        Fi = G("iPad"),
        Gi = G("Android") && !(Ad() || G("Firefox") || zd() || G("Silk")),
        Hi = Ad(),
        Ii = G("Safari") && !(Ad() || G("Coast") || zd() || G("Edge") || G("Silk") || G("Android")) && !(Bd() || G("iPad") || G("iPod"));
    var Ki = function() {
            if (Di) return Ji(/Firefox\/([0-9.]+)/);
            if (I || Dd || Cd) return Kd;
            if (Hi) return Ji(/Chrome\/([0-9.]+)/);
            if (Ii && !(Bd() || G("iPad") || G("iPod"))) return Ji(/Version\/([0-9.]+)/);
            if (Ei || Fi) {
                var a;
                a = /Version\/(\S+).*Mobile\/(\S+)/;
                if (a = a.exec(vd)) return a[1] + "." + a[2]
            } else if (Gi) return (a = Ji(/Android\s+([0-9.]+)/)) ? a : Ji(/Version\/([0-9.]+)/);
            return ""
        },
        Ji = function(a) {
            return (a = a.exec(vd)) ? a[1] : ""
        },
        Li = Ki();
    var Mi = function(a, b, c) {
            b = b || N;
            a && b.top != b && (b = b.top);
            try {
                return b.document && !b.document.body ? new bd(-1, -1) : c ? (new bd(b.innerWidth, b.innerHeight)).round() : $d(b || window).round()
            } catch (d) {
                return new bd(-12245933, -12245933)
            }
        },
        Ni = function(a, b) {
            if (Wf("msie") && !window.opera) {
                var c = function() {
                    "complete" == a.readyState && b(null)
                };
                M(a, "readystatechange", S("osd::util::rschange", c), void 0)
            } else M(a, "load", S("osd::util::load", b), void 0)
        },
        Oi = function() {
            return Gd && Ii && 0 <= $b(Li, "6.0.1") && 0 <= $b(Ci, "10.1") ? !0 : !1
        };
    var Pi = function(a, b) {
            this.Sg = a;
            this.Pc = b && b.Pc ? b.Pc : [];
            this.cj = b ? b.cj : !1;
            this.tg = b && b.tg ? b.tg : 0;
            this.Mh = b ? b.Mh : "";
            this.jb = b && b.jb ? b.jb : [];
            this.mh = null;
            this.um = !1;
            if (b) {
                var c;
                for (c = 0; c < this.Pc.length; ++c) this.Pc[c].push("true");
                for (c = 0; c < this.jb.length; ++c) this.jb[c].qn = !0
            }
        },
        Qi = "",
        Ri = 0,
        Si = 0,
        Ti = tb(!1),
        Ui = new vi(mb ? "https:" : "http:"),
        Qi = "http://www.googleadservices.info/pagead/js/osd.js"/*Ui.$t(Ti, "/pagead/osd.js", "")*/,
        Ri = wa,
        Si = xa;

    g = Pi.prototype;
    g.Iw = function(a, b) {
        var c = this.Pc,
            d = this.Sg[b];
        d && (d = d.orig_callback || d, this.Sg[b] = function(b) {
            if (b && 0 < b.length) {
                var f = 1 < b.length ? b[1].url : null,
                    h = b[0].log_info || null,
                    k = b[0].activeview_url || null,
                    l = b[0].activeview_js_enabled || null,
                    m = b[0].activeview_js_immediate_enabled || null,
                    n = b[0].activeview_js_tos_enabled || null,
                    q = b[0].activeview_cid || null,
                    t = b[0].activeview_metadata || null,
                    w = b[0].image_url || "",
                    x = b[0].type || null;
                c.push([a, Sb(b[0].url), f, h, null, k, l, m, n, q, t, Sb(w), x])
            }
            d(b)
        }, this.Sg[b].orig_callback = d)
    };
    g.zv = function() {
        this.cj || (Tf(Q()), Pf(Qi), this.cj = !0)
    };
    g.rm = function(a, b, c) {
        var d = this.Pc,
            e = c || 0,
            f = a.document;
        if (0 < d.length)
            for (var h = f.getElementsByTagName("a"), k = 0; k < h.length; k++)
                for (var l = 0; l < d.length; l++) {
                    var m = d[l][1];
                    if (0 <= h[k].href.indexOf(m)) {
                        m = h[k].parentNode;
                        if (d[l][2])
                            for (var n = m, q = 0; 4 > q; q++) {
                                if (0 <= n.innerHTML.indexOf(d[l][2])) {
                                    m = n;
                                    break
                                }
                                n = n.parentNode
                            }
                        this.li(d[l], m, e, b);
                        d.splice(l, 1);
                        break
                    }
                }
        if (0 < d.length)
            for (m = f.getElementsByTagName("embed"), k = 0; k < m.length; k++)
                for (l = 0; l < d.length; l++)
                    if (n = d[l][12], h = d[l][11], "flash" == n && h && (n = m[k], n.src ==
                            h)) {
                        var t = n;
                        0 == t.getBoundingClientRect().height && t.parentElement && "OBJECT" == t.parentElement.tagName && (t = t.parentElement);
                        this.li(d[l], t, e, b);
                        d.splice(l, 1);
                        break
                    }
        if (0 < d.length)
            for (f = f.getElementsByTagName("param"), k = 0; k < f.length; k++)
                for (l = 0; l < d.length; l++)
                    if (n = d[l][12], h = d[l][11], "flash" == n && h && (m = f[k], "movie" == m.name && m.value == h)) {
                        m.parentNode && "OBJECT" == m.parentNode.tagName && (t = m.parentNode);
                        if (!t) break;
                        this.li(d[l], t, e, b);
                        d.splice(l, 1);
                        break
                    }
        if (0 < d.length && a != yh()) try {
            this.rm(a.parent, b, c)
        } catch (w) {}
        for (k =
            0; k < d.length; ++k) a = d[k], "true" == a[6] && this.gp("osd2", a[3]), "true" == a[7] && this.gp("osdim", a[3])
    };
    g.li = function(a, b, c, d) {
        var e = a[0],
            f = a[3],
            h = a[5],
            k = "true" == a[6],
            l = "true" == a[7],
            m = "true" == a[8],
            n = a[9],
            q = a[10];
        a = "true" == a[13];
        d(b, e, c, !0, f, void 0, h, k, l, a, m, n, q)
    };
    g.gp = function(a, b) {
        if (a && b) {
            var c = ["//"];
            c.push("pagead2.googlesyndication.com");
            c.push("/activeview");
            c.push("?id=" + a);
            c.push("&r=j");
            c.push("&avi=" + b);
            Hf(p, c.join(""))
        }
    };
    g.getNewBlocks = function(a, b) {
        b && this.rm(this.Sg, a, 1);
        for (var c = this.jb.length, d = 0; d < c; d++) {
            var e = this.jb[d];
            !e.Nm && e.Gk && (a(e.Gk, e.Lk, e.Ww, e.Hk, "", e.zw, "", !1, !1, e.qn, !1, "", "", e.Qv), e.Nm = !0)
        }
        b && (this.mh = a)
    };
    g.getRegisteredAdblockUrls = function() {
        for (var a = [], b = this.jb.length, c = 0; c < b; c++) {
            var d = this.jb[c];
            a.push(d.Lk)
        }
        return a
    };
    g.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = window.google_enable_ose,
            c;
        !0 === b ? c = 2 : !1 !== b && (c = wf([0], Si), null == c && ((c = wf([2], Ri)) || (c = 3)));
        if (!c) return 0;
        this.tg = c;
        this.Mh = String(a || 0);
        return this.getOseId()
    };
    g.getOseId = function() {
        return window && Math.random ? this.tg : -1
    };
    g.getCorrelator = function() {
        return this.Mh
    };
    g.numBlocks = function() {
        return this.Pc.length + this.jb.length
    };
    g.registerAdBlock = function(a, b, c, d, e, f, h) {
        var k = null;
        e && f && (k = {
            width: e,
            height: f
        });
        if (this.mh && d) this.mh(d, a, b, !0, "", k, "", !1, !1, !1, !1, "", "", h);
        else {
            if ("js" == c) this.Iw(a, "google_ad_request_done");
            else {
                var l = new Vi(a, b, c, d, k, h);
                this.jb.push(l);
                d && (a = function() {
                    l.Hk = !0
                }, Ni(d, a))
            }
            this.zv()
        }
    };
    g.unloadAdBlock = function(a, b) {
        ba(window.Goog_Osd_UnloadAdBlock) && window.Goog_Osd_UnloadAdBlock(a, b)
    };
    g.setUpForcePeriscope = function() {
        window.google_enable_ose_periscope && (this.um = !0)
    };
    g.shouldForcePeriscope = function() {
        return this.um
    };
    var Wi = function() {
            var a = Q(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new Pi(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            return a.__google_ad_urls = new Pi(a, b)
        },
        Vi = function(a, b, c, d, e, f) {
            this.Lk = a;
            this.Ww = b;
            this.Gk = d;
            this.Nm = this.Hk = !1;
            this.zw = e;
            this.qn = !1;
            this.Qv = f || da
        };
    ca("Goog_AdSense_getAdAdapterInstance", Wi, void 0);
    ca("Goog_AdSense_OsdAdapter", Pi, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.numBlocks", Pi.prototype.numBlocks, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", Pi.prototype.getNewBlocks, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.getOseId", Pi.prototype.getOseId, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.getCorrelator", Pi.prototype.getCorrelator, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", Pi.prototype.getRegisteredAdblockUrls, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.setupOse", Pi.prototype.setupOse, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", Pi.prototype.registerAdBlock, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", Pi.prototype.setUpForcePeriscope, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", Pi.prototype.shouldForcePeriscope, void 0);
    ca("Goog_AdSense_OsdAdapter.prototype.unloadAdBlock", Pi.prototype.unloadAdBlock, void 0);
    var Xi = null,
        Yi = function() {
            if (!Xi) {
                var a = !1;
                a: {
                    for (var b, c = [p.top], d = [], e = 0, f; f = c[e++];) {
                        d.push(f);
                        try {
                            if (f.frames) {
                                b = f.frames.length;
                                for (var h = 0; h < b && 1024 > c.length; ++h) c.push(f.frames[h])
                            }
                        } catch (l) {}
                    }
                    b = d;
                    for (c = 0; c < b.length; c++) try {
                        var k = b[c].frames.google_esf;
                        if (k && (!a || L(k))) {
                            Xi = k;
                            break a
                        }
                    } catch (l) {}
                    Xi = null
                }
            }
            return Xi
        };
    var Zi = function(a, b) {
        var c;
        if (c = b) a: {
            var d = b;
            c = fh(a);
            d = d.mods;
            if (!isNaN(c) && d)
                for (var e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = f.min,
                        f = f.max;
                    if (c >= h && c <= f) {
                        c = !0;
                        break a
                    }
                }
            c = !1
        }
        if (c) {
            var k;
            a: {
                try {
                    k = a.JSON.parse(a.localStorage.getItem("google_ama_config") || "");
                    break a
                } catch (m) {}
                k = null
            }
            var l;
            a: {
                c = a;
                d = b;
                d.exp = A() + 864E5;
                try {
                    c.localStorage.setItem("google_ama_config", c.JSON.stringify(d));
                    l = !0;
                    break a
                } catch (m) {
                    l = {
                        stgerr: ""
                    }, R("ama", l, .01)
                }
                l = !1
            }!l || k && k.lib == b.lib || (k = a.document.createElement("script"), l = a.document.getElementsByTagName("script")[0],
                l.parentNode.insertBefore(k, l), k.src = Wh(tb(), b.lib))
        } else try {
            a.localStorage.removeItem("google_ama_config")
        } catch (m) {}
    };
    var $i = function(a) {
            if (/^\s*$/.test(a)) return !1;
            var b = /\\["\\\/bfnrtu]/g,
                c = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                d = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,
                e = /^[\],:{}\s\u2028\u2029]*$/;
            return e.test(a.replace(b, "@").replace(c, "]").replace(d, ""))
        },
        aj = function(a) {
            a = String(a);
            if ($i(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        cj = function(a, b) {
            return (new bj(b)).Gg(a)
        },
        bj = function(a) {
            this.Cg = a
        };
    bj.prototype.Gg = function(a) {
        var b = [];
        this.Tj(a, b);
        return b.join("")
    };
    bj.prototype.Tj = function(a, b) {
        if (null == a) b.push("null");
        else {
            if ("object" == typeof a) {
                if (r(a)) {
                    this.qx(a, b);
                    return
                }
                if (a instanceof String || a instanceof Number || a instanceof Boolean) a = a.valueOf();
                else {
                    this.Vj(a, b);
                    return
                }
            }
            switch (typeof a) {
                case "string":
                    this.ef(a, b);
                    break;
                case "number":
                    this.Uj(a, b);
                    break;
                case "boolean":
                    b.push(String(a));
                    break;
                case "function":
                    b.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof a);
            }
        }
    };
    var dj = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        ej = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    bj.prototype.ef = function(a, b) {
        b.push('"', a.replace(ej, function(a) {
            var b = dj[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), dj[a] = b);
            return b
        }), '"')
    };
    bj.prototype.Uj = function(a, b) {
        b.push(isFinite(a) && !isNaN(a) ? String(a) : "null")
    };
    bj.prototype.qx = function(a, b) {
        var c = a.length;
        b.push("[");
        for (var d = "", e = 0; e < c; e++) b.push(d), d = a[e], this.Tj(this.Cg ? this.Cg.call(a, String(e), d) : d, b), d = ",";
        b.push("]")
    };
    bj.prototype.Vj = function(a, b) {
        b.push("{");
        var c = "",
            d;
        for (d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = a[d];
                "function" != typeof e && (b.push(c), this.ef(d, b), b.push(":"), this.Tj(this.Cg ? this.Cg.call(a, d, e) : e, b), c = ",")
            }
        b.push("}")
    };
    var ij = function() {};
    var jj, Hj = function() {};
    B(Hj, ij);
    Hj.prototype.Bl = function() {
        var a = this.Nt();
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Hj.prototype.Nt = function() {
        if (!this.Um && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    return new ActiveXObject(c), this.Um = c
                } catch (d) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return this.Um
    };
    var Ij = new Hj;
    jj = Ij;
    var Jj = function(a, b, c) {
        this.vv = c;
        this.Sh = a;
        this.Jj = b;
        this.qg = 0;
        this.Wf = null
    };
    Jj.prototype.get = function() {
        var a;
        0 < this.qg ? (this.qg--, a = this.Wf, this.Wf = a.next, a.next = null) : a = this.Sh();
        return a
    };
    Jj.prototype.put = function(a) {
        this.Jj(a);
        this.qg < this.vv && (this.qg++, a.next = this.Wf, this.Wf = a)
    };
    var Kj = [],
        Lj = !1;
    var Mj = function(a) {
            return a
        },
        Nj = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        };
    var Oj = function(a) {
            p.setTimeout(function() {
                throw a;
            }, 0)
        },
        Pj, Qj = function() {
            var a = p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !G("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = y(function(a) { 
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !G("Trident") && !G("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (ba(c.next)) {
                        c = c.next;
                        var a = c.jl;
                        c.jl = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        jl: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    p.setTimeout(a, 0)
                }
        },
        Rj = Mj;
    if (Lj)
        for (var Sj = 0; Sj < Kj.length; Sj++) var Tj = y(Kj[Sj].Vz, Kj[Sj]),
            Rj = Tj;
    var Uj = function() {
            this.Ug = this.Wd = null
        },
        Wj = new Jj(function() {
            return new Vj
        }, function(a) {
            a.reset()
        }, 100);
    Uj.prototype.add = function(a, b) {
        var c = this.Zt();
        c.set(a, b);
        this.Ug ? this.Ug.next = c : this.Wd = c;
        this.Ug = c
    };
    Uj.prototype.remove = function() {
        var a = null;
        this.Wd && (a = this.Wd, this.Wd = this.Wd.next, this.Wd || (this.Ug = null), a.next = null);
        return a
    };
    Uj.prototype.ix = function(a) {
        Wj.put(a)
    };
    Uj.prototype.Zt = function() {
        return Wj.get()
    };
    var Vj = function() {
        this.next = this.scope = this.ve = null
    };
    Vj.prototype.set = function(a, b) {
        this.ve = a;
        this.scope = b;
        this.next = null
    };
    Vj.prototype.reset = function() {
        this.next = this.scope = this.ve = null
    };
    var bk = function(a, b) {
            Xj || Yj();
            Zj || (Xj(), Zj = !0);
            ak.add(a, b)
        },
        Xj, Yj = function() {
            if (p.Promise && p.Promise.resolve) {
                var a = p.Promise.resolve(void 0);
                Xj = function() {
                    a.then(ck)
                }
            } else Xj = function() {
                var a = ck,
                    a = Rj(a);
                !ia(p.setImmediate) || p.Window && p.Window.prototype && !G("Edge") && p.Window.prototype.setImmediate == p.setImmediate ? (Pj || (Pj = Qj()), Pj(a)) : p.setImmediate(a)
            }
        },
        Zj = !1,
        ak = new Uj,
        ck = function() {
            for (var a = null; a = ak.remove();) {
                try {
                    a.ve.call(a.scope)
                } catch (b) {
                    Oj(b)
                }
                ak.ix(a)
            }
            Zj = !1
        };
    var dk = function(a, b) {
            this.aa = 0;
            this.Wo = void 0;
            this.ld = this.Nb = this.pa = null;
            this.Uf = this.gi = !1;
            if (a != da) try {
                var c = this;
                a.call(b, function(a) {
                    c.Hd(2, a)
                }, function(a) {
                    c.Hd(3, a)
                })
            } catch (d) {
                this.Hd(3, d)
            }
        },
        ek = function() {
            this.next = this.context = this.Dd = this.Oe = this.Ec = null;
            this.sf = !1
        };
    ek.prototype.reset = function() {
        this.context = this.Dd = this.Oe = this.Ec = null;
        this.sf = !1
    };
    var fk = new Jj(function() {
            return new ek
        }, function(a) {
            a.reset()
        }, 100),
        gk = function(a, b, c) {
            var d = fk.get();
            d.Oe = a;
            d.Dd = b;
            d.context = c;
            return d
        };
    dk.prototype.then = function(a, b, c) {
        return this.Pq(ia(a) ? a : null, ia(b) ? b : null, c)
    };
    var hk = dk;
    hk.prototype.then = hk.prototype.then;
    hk.prototype.$goog_Thenable = !0;
    g = dk.prototype;
    g.oy = function(a, b, c) {
        this.Nk(gk(a || da, b || null, c))
    };
    g.cancel = function(a) {
        0 == this.aa && bk(function() {
            var b = new ik(a);
            this.hl(b)
        }, this)
    };
    g.hl = function(a) {
        0 == this.aa && (this.pa ? (this.pa.Br(this, a), this.pa = null) : this.Hd(3, a))
    };
    g.Br = function(a, b) {
        if (this.Nb) {
            for (var c = 0, d = null, e = null, f = this.Nb; f && (f.sf || (c++, f.Ec == a && (d = f), !(d && 1 < c))); f = f.next) d || (e = f);
            d && (0 == this.aa && 1 == c ? this.hl(b) : (e ? this.Lw(e) : this.yo(), this.gm(d, 3, b)))
        }
    };
    g.Nk = function(a) {
        this.mu() || 2 != this.aa && 3 != this.aa || this.$o();
        this.Dw(a)
    };
    g.Pq = function(a, b, c) {
        var d = gk(null, null, null);
        d.Ec = new dk(function(e, f) {
            d.Oe = a ? function(b) {
                try {
                    var d = a.call(c, b);
                    e(d)
                } catch (l) {
                    f(l)
                }
            } : e;
            d.Dd = b ? function(a) {
                try {
                    var d = b.call(c, a);
                    !ba(d) && a instanceof ik ? f(a) : e(d)
                } catch (l) {
                    f(l)
                }
            } : f
        });
        d.Ec.pa = this;
        this.Nk(d);
        return d.Ec
    };
    g.Ly = function(a) {
        this.aa = 0;
        this.Hd(2, a)
    };
    g.My = function(a) {
        this.aa = 0;
        this.Hd(3, a)
    };
    g.Hd = function(a, b) {
        if (0 == this.aa) {
            this == b && (a = 3, b = new TypeError("Promise cannot resolve to itself"));
            this.aa = 1;
            var c;
            a: {
                var d = b,
                    e = this.Ly,
                    f = this.My;
                if (d instanceof dk) d.oy(e, f, this), c = !0;
                else {
                    var h;
                    if (d) try {
                        h = !!d.$goog_Thenable
                    } catch (l) {
                        h = !1
                    } else h = !1;
                    if (h) d.then(e, f, this), c = !0;
                    else {
                        if (ja(d)) try {
                            var k = d.then;
                            if (ia(k)) {
                                jk(d, k, e, f, this);
                                c = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(this, l);
                            c = !0;
                            break a
                        }
                        c = !1
                    }
                }
            }
            c || (this.Wo = b, this.aa = a, this.pa = null, this.$o(), 3 != a || b instanceof ik || kk(this, b))
        }
    };
    var jk = function(a, b, c, d, e) {
        var f = !1,
            h = function(a) {
                f || (f = !0, c.call(e, a))
            },
            k = function(a) {
                f || (f = !0, d.call(e, a))
            };
        try {
            b.call(a, h, k)
        } catch (l) {
            k(l)
        }
    };
    g = dk.prototype;
    g.$o = function() {
        this.gi || (this.gi = !0, bk(this.Ss, this))
    };
    g.mu = function() {
        return !!this.Nb
    };
    g.Dw = function(a) {
        this.ld ? this.ld.next = a : this.Nb = a;
        this.ld = a
    };
    g.yo = function() {
        var a = null;
        this.Nb && (a = this.Nb, this.Nb = a.next, a.next = null);
        this.Nb || (this.ld = null);
        return a
    };
    g.Lw = function(a) {
        a.next == this.ld && (this.ld = a);
        a.next = a.next.next
    };
    g.Ss = function() {
        for (var a = null; a = this.yo();) this.gm(a, this.aa, this.Wo);
        this.gi = !1
    };
    g.gm = function(a, b, c) {
        3 == b && a.Dd && !a.sf && this.Sw();
        if (a.Ec) a.Ec.pa = null, lk(a, b, c);
        else try {
            a.sf ? a.Oe.call(a.context) : lk(a, b, c)
        } catch (d) {
            mk.call(null, d)
        }
        fk.put(a)
    };
    var lk = function(a, b, c) {
        2 == b ? a.Oe.call(a.context, c) : a.Dd && a.Dd.call(a.context, c)
    };
    dk.prototype.kr = function() {};
    dk.prototype.Sw = function() {
        var a;
        for (a = this; a && a.Uf; a = a.pa) a.Uf = !1
    };
    var kk = function(a, b) {
            a.Uf = !0;
            bk(function() {
                a.Uf && (a.kr(b), mk.call(null, b))
            })
        },
        mk = Oj,
        ik = function(a) {
            ub.call(this, a)
        };
    B(ik, ub);
    ik.prototype.name = "cancel";
    var nk = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        ok = function(a, b) {
            return a ? b ? decodeURI(a) : decodeURIComponent(a) : a
        },
        pk = function(a) {
            var b = a.match(nk);
            a = b[1];
            var c = b[2],
                d = b[3],
                b = b[4],
                e = "";
            a && (e += a + ":");
            d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
            return a = e
        },
        qk = function(a, b, c) {
            if (r(b))
                for (var d = 0; d < b.length; d++) qk(a, String(b[d]), c);
            else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
        };
    var uk = function(a, b, c, d) {
            return new dk(function(e, f) {
                var h = d || {},
                    k, l = h.dz ? h.dz.Bl() : jj.Bl();
                try {
                    l.open(a, b, !0)
                } catch (q) {
                    f(new rk("Error opening XHR: " + q.message, b, l))
                }
                l.onreadystatechange = function() {
                    if (4 == l.readyState) {
                        p.clearTimeout(k);
                        var a;
                        a: switch (l.status) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                a = !0;
                                break a;
                            default:
                                a = !1
                        }!a && (a = 0 === l.status) && (a = b.match(nk)[1] || null, !a && p.self && p.self.location && (a = p.self.location.protocol, a = a.substr(0, a.length - 1)), a = a ? a.toLowerCase() :
                            "", a = "http" == a || "https" == a || "" == a, a = !a);
                        a ? e(l) : f(new sk(l.status, b, l))
                    }
                };
                l.onerror = function() {
                    f(new rk("Network error", b, l))
                };
                var m;
                if (h.headers) {
                    for (var n in h.headers) m = h.headers[n], null != m && l.setRequestHeader(n, m);
                    m = h.headers["Content-Type"]
                }
                n = p.FormData && c instanceof p.FormData;
                "POST" != a || void 0 !== m || n || l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                h.withCredentials && (l.withCredentials = h.withCredentials);
                h.responseType && (l.responseType = h.responseType);
                h.Rv &&
                    l.overrideMimeType(h.Rv);
                0 < h.qy && (k = p.setTimeout(function() {
                    l.onreadystatechange = da;
                    l.abort();
                    f(new tk(b, l))
                }, h.qy));
                try {
                    l.send(c)
                } catch (q) {
                    l.onreadystatechange = da, p.clearTimeout(k), f(new rk("Error sending XHR: " + q.message, b, l))
                }
            })
        },
        rk = function(a, b) {
            ub.call(this, a + ", url=" + b);
            this.url = b
        };
    B(rk, ub);
    rk.prototype.name = "XhrError";
    var sk = function(a, b, c) {
        rk.call(this, "Request Failed, status=" + a, b, c);
        this.status = a
    };
    B(sk, rk);
    sk.prototype.name = "XhrHttpError";
    var tk = function(a, b) {
        rk.call(this, "Request timed out", a, b)
    };
    B(tk, rk);
    tk.prototype.name = "XhrTimeoutError";
    var vk = function(a, b) {
        this.Vn = a;
        this.Ca = b
    };
    vk.prototype.minWidth = function() {
        return this.Vn
    };
    vk.prototype.height = function() {
        return this.Ca
    };
    vk.prototype.Nf = function(a) {
        return 300 < a && 300 < this.Ca ? this.Vn : 1200 < a ? 1200 : Math.round(a)
    };
    var wk = {
            rectangle: 1,
            horizontal: 2,
            vertical: 4,
            autorelaxed: 1
        },
        xk = function(a, b, c) {
            vk.call(this, a, b);
            this.gx = c
        };
    B(xk, vk);
    var yk = function(a) {
            return function(b) {
                return !!(b.gx & a)
            }
        },
        zk = [new xk(970, 90, 2), new xk(728, 90, 2), new xk(468, 60, 2), new xk(336, 280, 1), new xk(320, 100, 2), new xk(320, 50, 2), new xk(300, 600, 4), new xk(300, 250, 1), new xk(250, 250, 1), new xk(234, 60, 2), new xk(200, 200, 1), new xk(180, 150, 1), new xk(160, 600, 4), new xk(125, 125, 1), new xk(120, 600, 4), new xk(120, 240, 4)];
    var Ak = {
            iz: 1,
            jz: 8,
            wq: 9,
            Bz: 16,
            Xp: 24,
            jq: 25,
            lq: 30,
            nz: 32
        },
        Bk = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4
        },
        Ck = {
            1: 1,
            8: 2,
            25: 3,
            9: 4,
            30: 3
        },
        Dk = [1, 8, 9, 25, 32];
    var Ek = {
            Xp: "google_auto_instream_debug",
            hz: "google_anchor_debug",
            mz: "google_ifsl_debug",
            oz: "google_inflate_debug",
            gq: "google_ia_debug",
            qz: "google_ia_debug_fi",
            lz: "google_scr_debug",
            pz: "google_ia_debug_allow_onclick",
            jq: "google_ladder_rung_debug",
            rz: "google_lat_debug",
            uz: "google_lat_debug_all",
            xz: "googleads",
            lq: "google_pedestal_debug",
            Az: "google_resize_debug",
            Gz: "google_supersize_debug",
            Hz: "google_visible_intentful_click",
            Ez: "google_server_side_slot_resize",
            Dz: "google_server_side_portal",
            Fz: "google_server_side_split_slot",
            Cz: "google_server_side_expand_anchor"
        },
        Fk = {
            google_anchor_debug: 1,
            google_ia_debug: 8,
            google_resize_debug: 16,
            google_auto_instream_debug: 24,
            google_ladder_rung_debug: 25,
            google_ifsl_debug: 32,
            google_scr_debug: 9,
            googleads: 1,
            google_server_side_expand_anchor: 1,
            google_pedestal_debug: 30
        },
        Gk = {
            google_server_side_slot_resize: 1,
            google_server_side_portal: 2,
            google_server_side_split_slot: 3,
            google_server_side_expand_anchor: 4
        };
    var Hk = {
        gq: 1,
        gz: 2,
        wq: 3
    };
    var Jk = function(a) {
            var b = 0;
            O(Gk, function(c, d) {
                Ik(a, d) && (b = c)
            });
            return b
        },
        Kk = function(a) {
            return a ? (a = a.hash) && a.indexOf ? a : "" : ""
        },
        Ik = function(a, b) {
            if (!a) return !1;
            var c = a.hash;
            if (!c || !c.indexOf) return !1;
            if (-1 != c.indexOf(b)) return !0;
            var d = Lk(b);
            return "go" != d && -1 != c.indexOf(d) ? !0 : !1
        },
        Lk = function(a) {
            var b = "";
            O(a.split("_"), function(a) {
                b += a.substr(0, 2)
            });
            return b
        },
        Mk = function(a) {
            var b = !1;
            O(Ek, function(c) {
                Ik(a, c) && (b = !0)
            });
            return b
        },
        Nk = function(a, b) {
            switch (a) {
                case 1:
                    return Ik(b, "google_ia_debug");
                case 2:
                    return Ik(b,
                        "google_anchor_debug") || Ik(b, "googleads");
                case 3:
                    return Ik(b, "google_scr_debug")
            }
            return !1
        };
    var Ok = {
        vz: "mute-survey",
        ez: "accidental-click",
        yz: "positive-click",
        wz: "negative-click"
    };
    var Pk = function(a) {
            a = a.document;
            return (a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
        },
        Qk = function(a) {
            return Pk(a).clientHeight
        },
        Rk = function(a) {
            return Pk(a).clientWidth
        },
        Sk = function(a, b) {
            var c = Pk(a);
            if (b) {
                var d = Qk(a);
                return c.scrollHeight != d ? c.scrollHeight : c.offsetHeight
            }
            return c.offsetHeight
        },
        Tk = function(a) {
            return void 0 !== a.pageYOffset ? a.pageYOffset : (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop
        },
        V = function(a) {
            return a.innerHeight >= a.innerWidth
        },
        Uk = function(a) {
            a = Rk(a);
            return 320 <= a && 420 >= a
        },
        Vk = function(a) {
            var b;
            b = a.screen.width || 0;
            a = a.screen.height || 0;
            b = Math.min(b, a);
            return 320 <= b && 420 >= b
        },
        Wk = function(a) {
            var b = Rk(a);
            a = Pk(a).scrollWidth;
            return a <= b
        },
        Xk = function(a) {
            var b = Rk(a);
            a = a.innerWidth;
            return .05 > Math.abs(b / a - 1)
        },
        Yk = function(a) {
            a = a.google_reactive_ad_format;
            return Dc(Ak, a) ? "" + a : null
        },
        Zk = function(a) {
            var b = {};
            if (a && a.key_value) {
                a = a.key_value;
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    if ("key" in d && "value" in d) {
                        var e = d.value;
                        b[d.key] = null == e ?
                            null : String(e)
                    }
                }
            }
            return b
        },
        $k = function(a, b) {
            return a <= Qk(b)
        },
        al = function(a) {
            a = a.getBoundingClientRect();
            return a.top
        },
        X = function(a, b, c) {
            if (u(b)) u(c) && bl(a, b, c);
            else
                for (var d in b) bl(a, d, b[d])
        },
        bl = function(a, b, c) {
            a && (c = b + ": " + c + " !important;", a.style[b] = "", a.hasAttribute("style") && (c += a.getAttribute("style")), a.setAttribute("style", c))
        },
        cl = function(a, b) {
            return a ? a.source === b || a.source.parent === b : !1
        };
    var dl = {
        BROWSER_NOT_SUPPORTED: {
            message: "The current browser is not supported."
        },
        NOT_PORTRAIT_MODE: {
            message: "The device is not in portrait mode."
        },
        NON_MOBILE_VIEWPORT: {
            message: "The viewport is not between $MIN$ and $MAX$ pixels wide."
        },
        VIEWPORT_WIDTH_MISMATCH: {
            message: "Either your browser's current zoom is not neutral or this page's layout is not mobile-optimized."
        },
        DCLK_BLACKLISTED_DOMAIN: {
            message: "This site's domain is blacklisted."
        },
        INTERSTITIAL_VISIBLE: {
            message: "All links on this page that are capable of showing a vignette are marked in purple and outlined. Click on one to see a vignette."
        },
        INTERSTITIAL_NOT_VISIBLE: {
            message: "This page cannot display vignette ads for the following reason(s):"
        },
        INTERSTITIAL_LINKS: {
            message: "Capable link count: $COUNT$"
        },
        ANCHOR_VISIBLE: {
            message: "An anchor is being displayed. Users can simply slide the grippy bar to dismiss the anchor."
        },
        ANCHOR_NOT_VISIBLE: {
            message: "This page cannot display anchor ads for the following reason(s):"
        },
        LADDER_RUNG_VISIBLE: {
            message: "A ladder rung ad has been inserted. It is highlighted in purple (for preview purposes only)."
        },
        LADDER_RUNG_NOT_VISIBLE: {
            message: "This page cannot display ladder rung ads for the following reason(s):"
        },
        LADDER_RUNG_NO_PLACEMENT: {
            message: "No valid ad placements were found on this page."
        },
        MORE_INFORMATION: {
            message: "More information"
        },
        PAGE_LEVEL_ADS: {
            message: "Page-level ads"
        },
        ANCHOR_ADS: {
            message: "anchors"
        },
        VIGNETTE_ADS: {
            message: "vignettes"
        },
        INTERSTITIAL_LOADING: {
            message: "A vignette is loading... If nothing happens try refreshing the page."
        },
        ANCHOR_LOADING: {
            message: "An anchor is loading... If nothing happens try refreshing the page."
        },
        LADDER_RUNG_LOADING: {
            message: "Finding ladder rung ad placements... Please wait."
        },
        LADDER_RUNG_BUTTON_DESCRIPTION: {
            message: "Click to see possible ladder rung placements"
        },
        LADDER_RUNG_BUTTON: {
            message: "Next"
        }
    };
    var el = function(a) {
            this.u = a;
            this.Ke = this.je = this.vd = this.nb = this.Bh = this.T = null;
            this.state = 1;
            this.Hc = this.Us() || "en";
            this.md = this.Ng = null;
            this.op = 320 > a.innerWidth;
            this.Hg()
        },
        fl = /\blang=([A-z_\-]+)\b/,
        gl = {
            "background-color": "#ececec",
            "box-sizing": "border-box",
            display: "block",
            padding: "16px 9px",
            width: "100%"
        },
        hl = {
            "background-color": "#fff",
            border: "0",
            "border-radius": "3px",
            "box-shadow": "0 2px 5px 0 rgba(0,0,0,0.25)",
            display: "block",
            margin: "0 auto",
            "max-width": "500px",
            overflow: "visible",
            position: "relative",
            "text-align": "left",
            width: "100%",
            "z-index": "2147483647"
        },
        il = {
            en: "English",
            es: "Espa\u00f1ol",
            ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u064e\u0651\u0629",
            bg: "\u0469\u0437\u044b\u043a\u044a \u0441\u043b\u043e\u0432\u0463\u043d\u044c\u0441\u043a\u044a",
            cs: "\u010de\u0161tina",
            da: "dansk",
            de: "Deutsch",
            el: "\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
            "en-BG": "British English",
            fi: "suomi",
            fr: "fran\u00e7ais",
            hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
            hr: "hrvatski jezik",
            hu: "magyar",
            id: "Bahasa Indonesia",
            it: "italiano",
            iw: "\u05e2\u05d1\u05e8\u05d9\u05ea",
            ja: "\u65e5\u672c\u8a9e",
            ko: "\ud55c\uad6d\uc5b4",
            lt: "lietuvi\u0173 kalba",
            lv: "latvie\u0161u valoda",
            ms: "bahasa Melayu",
            nl: "Nederlands",
            no: "Norsk",
            pl: "j\u0119zyk polski",
            "pt-BR": "Portugu\u00eas do Brasil",
            "pt-PT": "Portugu\u00eas de portugal",
            ro: "limba rom\u00e2n\u0103",
            ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
            sk: "sloven\u010dina",
            sr: "\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a",
            sv: "svenska",
            th: "\u0e44\u0e17\u0e22",
            tr: "T\u00fcrk\u00e7e",
            uk: "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430 \u043c\u043e\u0432\u0430",
            vi: "Vi\u1ec7t Nam",
            "zh-CN": "\u4e2d\u6587(\u7b80\u4f53)",
            "zh-TW": "\u4e2d\u6587(\u7e41\u9ad4)"
        },
        jl = (320).toString(),
        kl = (420).toString();
    g = el.prototype;
    g.getHeight = function() {
        return null == this.Bh ? 0 : this.Bh.scrollHeight
    };
    g.Ob = function(a) {
        var b = this.T.createElement("p");
        b.className = "p";
        b.innerHTML = a;
        this.Gl() && (b.style.direction = "rtl");
        return b
    };
    g.Ud = function() {
        this.je.style.height = "30px";
        this.je.style.height = this.T.body.scrollHeight + "px"
    };
    g.ab = function(a) {
        var b;
        try {
            b = this.Ng[this.Hc][a].message
        } catch (c) {}
        return b || dl[a].message
    };
    g.Hg = function() {
        if (null == this.T) {
            var a = this.Bh = this.zs();
            this.je = this.Sr();
            a.appendChild(this.je);
            var b = this.u.document.body;
            b.insertBefore(a, b.firstChild);
            this.T = this.je.contentWindow.document;
            a = this.T.body;
            this.os("body{font-family:Roboto, Arial, sans-serif;font-weight:400;margin:0;padding:0;}.h{background-color:#4285f4;overflow:auto;}.t{display:block;padding:15px 11px 12px;text-align:left;}.tl{display:inline;height:16px;position:relative;top:1px;vertical-align:middle;}.th{color:#fff;display:inline;font-size:12px;font-weight:400;margin:0 0 0 5px;padding:0;vertical-align:middle;}.tb{border-collapse:collapse;border-spacing:0;float:left;margin:0;padding:0;width:100%;}.td{color:rgba(255,255,255,0.7);font-size:14px;font-weight:400;padding:8px 0;text-align:center;text-transform:uppercase;width:50%;}.td.s{border-bottom:3px solid #ECF043;color:#fff;}.l{color:#284e8b;font-size:12px;font-weight:500;padding:16px 11px;position:absolute;right:0;top:0;}.lt{margin-right:5px;display:inline-block;max-width:45px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:text-bottom;}.la{height:9px;position:relative;top:1px;width:9px;}.ld{background:#fff;border-radius:3px;box-shadow:0 2px 5px 0 rgba(0,0,0,0.25);box-sizing:border-box;color:#000;font-size:12px;font-weight:400;list-style:none;margin:0;max-height:95%;overflow:auto;padding:9px 0;position:absolute;right:0;top:0;}.lo{padding:12px 46px 12px 24px;}.lo:hover{background:#eee;}.lo.s{background:#dcdcdc;}.c{padding:20px 12px;}.p{color:rgba(0,0,0,0.7);font-size:12px;font-weight:400;line-height:16px;margin:0;-webkit-text-size-adjust:100%;}.p.r{color:#DB4437;}.ce{color:#000;font-size:12px;font-weight:400;line-height:16px;list-style:initial;list-style-position:inside;margin:0;padding:5px;-webkit-text-size-adjust:100;}");
            b =
                this.Wr();
            a.appendChild(b);
            this.vd = this.yl();
            this.vd.className = "h";
            a.appendChild(this.vd);
            this.nb = this.Al();
            this.nb.className = "c";
            a.appendChild(this.nb);
            this.Xw();
            this.Ud();
            setInterval(y(this.Ud, this), 500)
        }
    };
    g.Sr = function() {
        var a = document.createElement("iframe");
        J(a, hl);
        a.id = "goog-dbg-card";
        this.op && (a.style.borderRadius = "0");
        return a
    };
    g.zs = function() {
        var a = document.createElement("ins");
        J(a, gl);
        this.op && (a.style.padding = "0");
        a.id = "goog_info_card";
        return a
    };
    g.Wr = function() {
        var a = this.T || document;
        return ch("Roboto:400,500", a)
    };
    g.os = function(a) {
        var b = this.T,
            c = b.createElement("style");
        c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(b.createTextNode(a));
        b.getElementsByTagName("head")[0].appendChild(c);
        return c
    };
    g.Ay = function(a) {
        if (this.Hc != a) {
            this.Hc = a;
            var b = this.u,
                c = b.location.hash;
            a = "en" == a ? c.replace(fl, "").replace(/&$/, "") : fl.test(c) ? c.replace(fl, "lang=" + a) : c + "&lang=" + a;
            b.location.hash = a
        }
        this.Ro()
    };
    g.Ro = function() {
        this.vd.innerHTML = "";
        this.vd.appendChild(this.yl());
        var a = this.nb;
        a.innerHTML = "";
        1 === this.state ? a.appendChild(this.Al()) : 2 === this.state && a.appendChild(this.pd());
        this.Ud()
    };
    g.yl = function() {
        var a = this.T.createElement("div");
        a.appendChild(this.Yr());
        a.appendChild(this.Nr());
        return a
    };
    g.Yr = function() {
        var a = this.T,
            b = a.createElement("span");
        b.className = "t";
        var c = a.createElement("img");
        c.className = "tl";
        c.src = "//pagead2.googlesyndication.com/pagead/images/google_logo_white.png";
        a = a.createElement("h2");
        a.className = "th";
        a.innerHTML = this.ab("PAGE_LEVEL_ADS");
        b.appendChild(c);
        b.appendChild(a);
        this.Ng && b.appendChild(this.bs());
        return b
    };
    g.Nr = function() {
        var a = this.T,
            b = a.createElement("table");
        b.className = "tb";
        var a = a.createElement("tr"),
            c = this.getAdType(),
            d = this.Rh(this.ab("ANCHOR_ADS"), "google_anchor_debug", 2 == c);
        a.appendChild(d);
        c = Ik(this.u.location, "google_scr_debug") ? this.Rh("FSI", "google_scr_debug", 3 == c) : this.Rh(this.ab("VIGNETTE_ADS"), "google_ia_debug", 1 == c);
        a.appendChild(c);
        b.appendChild(a);
        return b
    };
    g.bs = function() {
        var a = this.T,
            b = a.createElement("span");
        b.className = "l";
        var c = a.createElement("span");
        c.className = "lt";
        c.innerHTML = il[this.Hc];
        a = a.createElement("img");
        a.className = "la";
        a.src = "//pagead2.googlesyndication.com/pagead/images/debug_card_language_arrow.svg";
        b.appendChild(c);
        b.appendChild(a);
        Rf(b, "click", y(this.$x, this));
        return b
    };
    g.$x = function() {
        this.Ke || (this.Ke = this.$r(), this.vd.appendChild(this.Ke), setTimeout(y(this.Sq, this), 1))
    };
    g.$r = function() {
        var a = this.T.createElement("ul");
        a.className = "ld";
        var b = this.Ng,
            c;
        for (c in b) b.hasOwnProperty(c) && a.appendChild(this.as(c));
        Rf(a, "click", y(this.aw, this));
        return a
    };
    g.as = function(a) {
        var b = this.T.createElement("li");
        b.className = "lo";
        a === this.Hc && (b.className += " s");
        b.innerHTML = il[a];
        b.rv = a;
        return b
    };
    g.Sq = function() {
        !this.md && this.T && (this.md = y(this.vu, this), M(this.T, "click", this.md, void 0))
    };
    g.vu = function() {
        var a = this.Ke;
        a && this.T && (a.parentNode && a.parentNode.removeChild(a), this.Ke = null, this.md && (Sf(this.T, "click", this.md), this.md = null))
    };
    g.aw = function(a) {
        this.Ay(a.target.rv)
    };
    g.Rh = function(a, b, c) {
        var d = this.T.createElement("td");
        d.className = "td";
        d.innerHTML = a;
        a = y(function() {
            var a = this.Hc;
            this.u.location.hash = b + ("en" == a ? "" : "&lang=" + a);
            this.u.location.reload(!0)
        }, this);
        M(d, "click", a, void 0);
        c && (d.className += " s");
        return d
    };
    g.Al = function() {
        var a = this.T.createElement("div"),
            b = this.getNoShowReasons();
        if (0 == b) a.appendChild(this.Ob(this.getLoadingText()));
        else {
            var c = this.Ob(this.zi());
            c.className += " r";
            a.appendChild(c);
            a.appendChild(this.fs(b));
            this.state = 1
        }
        return a
    };
    g.fs = function(a) {
        var b = this.T.createElement("ul");
        b.className = "ce";
        this.Gl() && (b.style.direction = "rtl");
        2 == (a & 2) && this.ee(b, "VIEWPORT_WIDTH_MISMATCH");
        4 == (a & 4) && this.ee(b, "NON_MOBILE_VIEWPORT");
        8 == (a & 8) && this.ee(b, "NOT_PORTRAIT_MODE");
        1 == (a & 1) ? this.ee(b, "BROWSER_NOT_SUPPORTED") : 32 == (a & 32) && this.ee(b, "BROWSER_NOT_SUPPORTED");
        return b
    };
    g.ee = function(a, b) {
        var c = this.T.createElement("li");
        c.innerHTML = this.ab(b).replace(/\$MIN\$/g, jl).replace(/\$MAX\$/g, kl);
        a.appendChild(c)
    };
    g.Gl = function() {
        return /ar|iw/.test(this.Hc)
    };
    g.Us = function() {
        var a = this.u.location.hash;
        return a && (a = (a = a.match(fl)) && a[1]) && "en" != a && il[a] ? a : null
    };
    g.Xw = function() {
        this.u.handleDebugCardTranslationResponse = y(this.handleDebugCardTranslationResponse, this);
        var a = document.createElement("script");
        a.async = !0;
        a.type = "text/javascript";
        var b = sb();
        a.src = Wh(b, "/pagead/js/page-level-debug-translations.js");
        b = document.getElementsByTagName("head")[0];
        b.appendChild(a)
    };
    g.handleDebugCardTranslationResponse = function(a) {
        a && (this.Ng = a, this.Ro())
    };
    var ll = function() {
            this.wasReactiveAdConfigReceived = {};
            this.wasReactiveAdCreated = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.wasReactiveAdConfigHandlerRegistered = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.debugCard = null;
            this.interstitialJSRefactorExperiment = 0
        },
        Y = function(a) {
            a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new ll);
            return a.google_reactive_ads_global_state
        },
        ml = function(a, b) {
            return a.debugCard && a.debugCard.getAdType() === b ? a.debugCard : null
        };
    var pl = function(a) {
            var b = nl(a),
                c;
            a: {
                var d = 0;
                try {
                    if (!V(a)) d |= 8;
                    else if (ol()) {
                        c = d;
                        break a
                    }
                    Uk(a) || (d |= 4);
                    Xk(a) || (d |= 2)
                } catch (e) {
                    d |= 32
                }
                c = d
            }
            return b | c
        },
        ql = null,
        nl = function(a) {
            if (null == ql) {
                var b = 0;
                try {
                    a.top != a && (b |= 32), a.postMessage || (b |= 1), Vk(a) || (b |= 1), rl(a.navigator.userAgent) && (b |= 1)
                } catch (c) {
                    b |= 32
                }
                ql = b
            }
            return ql
        },
        rl = function(a) {
            return !/(Android|iPhone OS|Windows Phone)/.test(a) || /Android 2/.test(a) || /Firefox/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a)
        },
        sl = function() {
            return "828064121" ===
                T().V(29)
        },
        tl = function(a, b) {
            return !!b && !!b.postMessage && 320 == a.google_ad_width && 50 == a.google_ad_height && "html" === Pg(a) && 1 == a.google_reactive_ad_format && Vk(b) && !rl(b.navigator.userAgent)
        },
        ul = function() {
            var a = T().V(36);
            return "828064126" === a
        },
        vl = function() {
            var a = T().V(39);
            return "828064129" === a
        },
        ol = function() {
            var a = U.Ck,
                b = T().V(29);
            return b == a.o
        };
    var wl = function(a, b) {
            var c = 0;
            try {
                a.top != a && (c |= 32), a.postMessage || (c |= 1), Xk(a) || (c |= 2), Uk(a) || (c |= 4), V(a) || (c |= 8), Uh(b) && (c |= 16), /Android 2/.test(a.navigator.userAgent) && (c |= 1)
            } catch (d) {
                c |= 32
            }
            return c
        },
        xl = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        yl = {
            IMG: " ",
            BR: "\n"
        },
        zl = function(a, b, c, d) {
            if (!(a.nodeName in xl))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in yl) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " +
                a.getAttribute("alt")), b.push(yl[a.nodeName]);
            else
                for (a = a.firstChild; a;) zl(a, b, c, d), a = a.nextSibling
        },
        Al = / \xAD /g,
        Bl = /\xAD/g,
        Cl = /\u200B/g,
        Dl = / +/g,
        El = /^\s*/,
        Fl = function(a, b) {
            var c;
            c = [];
            zl(a, c, !0, b);
            c = c.join("");
            c = c.replace(Al, " ").replace(Bl, "");
            c = c.replace(Cl, "");
            c = c.replace(Dl, " ");
            " " != c && (c = c.replace(El, ""));
            return c
        };
    var Gl = function(a, b) {
        var c = 0;
        try {
            a.top != a && (c |= 32), a.postMessage || (c |= 1), Xk(a) || (c |= 2), Uk(a) || (c |= 4), V(a) || (c |= 8), Uh(b) && (c |= 16), /Android 2/.test(a.navigator.userAgent) && (c |= 1)
        } catch (d) {
            c |= 32
        }
        return c
    };
    var Hl = new eh(200, 299);
    var Il = function(a) {
            return (a = a.google_ad_modifications) ? a.loeids || [] : []
        },
        Jl = function(a, b, c) {
            if (!a) return null;
            for (var d = 0; d < a.length; ++d)
                if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
            return null
        };
    var Kl = function(a, b, c, d) {
        a = a.google_active_plles = a.google_active_plles || [];
        return Of(Il(b), c) ? (a.push(c), c) : Of(Il(b), d) ? (a.push(d), d) : null
    };
    var Ll = function(a) {
            this.xc = a;
            a.google_iframe_oncopy || (a.google_iframe_oncopy = {
                handlers: {},
                upd: y(this.Xy, this)
            });
            this.ky = a.google_iframe_oncopy
        },
        Ml = Eb("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
    Ll.prototype.set = function(a, b) {
        this.ky.handlers[a] = b;
        this.xc.addEventListener && this.xc.addEventListener("load", y(this.Ws, this, a), !1)
    };
    Ll.prototype.Ws = function(a) {
        a = this.xc.document.getElementById(a);
        try {
            var b = a.contentWindow.document;
            if (a.onload && b && (!b.body || !b.body.firstChild)) a.onload()
        } catch (c) {}
    };
    Ll.prototype.Xy = function(a, b) {
        var c = Nl("rx", a),
            d = ui(a, "dt"),
            c = c.replace(/&dtd=(\d+|M)/, "&dtd=" + Vg(d));
        this.set(b, c);
        return c
    };
    var Nl = function(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"),
            d = c.exec(b);
        d && (d = +d[1] + 1 || 1, b = b.replace(c, a + "=" + d));
        return b
    };
    var Ol = function(a, b) {
            if (a.top == a) return 0;
            if (b) {
                var c = a.location.ancestorOrigins;
                if (c) return c[c.length - 1] == a.location.origin ? 1 : 2
            }
            return L(a.top) ? 1 : 2
        },
        Ql = function(a, b, c, d, e) {
            a = Pl(a.top, a, 0);
            var f = a.ed.substring(0, 1800);
            b = {
                frmn: a.Ac,
                frms: f,
                adk: b,
                correlator: c,
                frm: d,
                frmn0: e
            };
            c = Wh(tb(), "/pagead/gen_204?id=frmn");
            var h;
            c = [c];
            for (h in b) qk(h, b[h], c);
            h = c;
            h[1] && (b = h[0], c = b.indexOf("#"), 0 <= c && (h.push(b.substr(c)), h[0] = b = b.substr(0, c)), c = b.indexOf("?"), 0 > c ? h[1] = "?" : c == b.length - 1 && (h[1] = void 0));
            c = h.join("");
            Hf(N, c, void 0)
        },
        Pl = function(a, b, c) {
            var d, e = {
                ed: "",
                Ac: 0
            };
            if (20 < c) return e;
            try {
                d = a.aswift_0
            } catch (k) {}
            d && (e.ed = a == b ? "I" : "A", e.Ac = 1);
            for (var f = 0; f < a.length; f++) {
                var h = a[f];
                h != d && (h = Pl(h, b, c + 1), e.Ac += h.Ac, e.ed = h.ed ? e.ed + ("!" + h.ed + "~") : e.ed + "o")
            }
            return e
        };
    var Rl = {
            google_ad_channel: "channel",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_ad_section: "region",
            google_ad_type: "ad_type",
            google_adtest: "adtest",
            google_available_width: "avail_w",
            google_allow_expandable_ads: "ea",
            google_alternate_ad_url: "alternate_ad_url",
            google_alternate_color: "alt_color",
            google_city: "gcs",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_line: "color_line",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_contents: "contents",
            google_country: "gl",
            google_cpm: "cpm",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_id: "cust_id",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_ed: "ed",
            google_ember_w: "em_w",
            google_ember_h: "em_h",
            google_encoding: "oe",
            google_flash_version: "flash",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_is_split_slot: "spl",
            google_kw: "kw",
            google_kw_type: "kw_type",
            google_language: "hl",
            google_page_url: "url",
            google_pgb_reactive: "pra",
            google_region: "gr",
            google_reuse_colors: "reuse_colors",
            google_responsive_formats: "resp_fmts",
            google_safe: "adsafe",
            google_tag_info: "gut",
            google_ui_features: "ui",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl"
        },
        Sl = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_format: "format",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_unit_key_2: "adk2",
            google_ad_width: "w",
            google_analytics_url_parameters: "aup",
            google_captcha_token: "captok",
            google_content_recommendation_ui_type: "crui",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_nofo: "nofo",
            google_enable_content_recommendations: "ecr",
            google_infinite_scroll_slot_type: "ifsl",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_only_ads_with_video: "only_ads_with_video",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_source_type: "src_type",
            google_sui: "sui",
            google_skip: "skip",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_origin: "to",
            google_tdsma: "tdsma",
            google_tfs: "tfs",
            google_tl: "tl"
        },
        Tl = {
            google_core_dbp: "dbp",
            google_lact: "lact",
            google_only_pyv_ads: "pyv",
            google_only_userchoice_ads: "uc",
            google_scs: "scs",
            google_with_pyv_ads: "withpyv",
            google_previous_watch: "p_w",
            google_previous_searches: "p_s",
            google_video_url_to_fetch: "durl",
            google_yt_pt: "yt_pt",
            google_yt_up: "yt_up"
        };
    var Ul = !1,
        Vl = function(a, b, c) {
            var d = ["<iframe"],
                e;
            for (e in a) a.hasOwnProperty(e) && Mf(d, e + "=" + a[e]);
            e = "left:0;position:absolute;top:0;";
            Ul && (e = e + "width:" + b + "px;height:" + c + "px;");
            d.push('style="' + e + '"');
            d.push("></iframe>");
            d = d.join(" ");
            e = a.id;
            a = e + "_anchor";
            e += "_expand";
            b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
            b = ['<ins id="', e, '" style="display:inline-table;', b, '">', '<ins id="', a, '" style="display:block;', b, '">',
                d, "</ins></ins>"
            ];
            return b = b.join("")
        },
        Wl = function(a) {
            Wg && a != a.parent && a.google_async_iframe_close && a.setTimeout(function() {
                a.document.close()
            }, 0)
        };

    function Xl(a, b, c, d) {
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (a && a.top == a) return !1;
        var e = b.documentElement;
        if (c && d) {
            var f = 1,
                h = 1;
            a.innerHeight ? (f = a.innerWidth, h = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, h = e.clientHeight) : b.body && (f = b.body.clientWidth, h = b.body.clientHeight);
            if (h > 2 * d || f > 2 * c) return !1
        }
        return !0
    }

    function Yl(a, b) {
        O(b, function(b, d) {
            a["google_" + d] = b
        })
    }
    var Zl = function(a) {
        var b;
        b = Nh().V(10);
        if (b = "317150305" == b || "317150306" == b) return null;
        if (b = Q().google_top_values) {
            var c = b[3];
            a && (c = b[4]);
            if (c) return c + ""
        }
        return null
    };

    function $l(a, b) {
        var c = Zl();
        return c ? c : b ? a.referrer : a.URL
    }
    var am = function(a, b) {
        if (!b) {
            var c = Zl();
            if (c) return {
                url: c,
                ig: !0
            }
        }
        c = a.location.href;
        if (a == a.top) return {
            url: c,
            ig: !0
        };
        var d = !1,
            e = a.document;
        e && e.referrer && (c = e.referrer, a.parent == a.top && (d = !0));
        (e = a.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == c.indexOf(e) && (d = !1, c = e);
        return {
            url: c,
            ig: d
        }
    };
    var bm = function(a) {
            O(Rl, function(b, c) {
                a[c] = null
            });
            O(Sl, function(b, c) {
                a[c] = null
            });
            O(Tl, function(b, c) {
                a[c] = null
            });
            a.google_container_id = null;
            a.google_enable_async = null;
            a.google_eids = null;
            a.google_page_location = null;
            a.google_referrer_url = null;
            a.google_show_ads_impl = null;
            a.google_ad_region = null;
            a.google_gl = null;
            a.google_iframe_name = null;
            a.google_loader_used = null;
            a.google_loader_features_used = null
        },
        cm = function(a, b) {
            $h |= 2;
            return a[b % a.length]
        },
        dm = function(a) {
            if (!a) return "";
            (a = a.toLowerCase()) && "ca-" != a.substring(0,
                3) && (a = "ca-" + a);
            return a
        };
    var em = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };
    var fm = "google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),
        gm = function(a) {
            try {
                var b = a.top.google_ads_params_store;
                if (b) return b;
                b = a.top.google_ads_params_store = {};
                if (b === a.top.google_ads_params_store) return b
            } catch (c) {}
            return null
        };
    var hm, im = function(a) {
            this.zg = [];
            this.xc = a || window;
            this.aa = 0;
            this.yg = null;
            this.Ep = 0
        },
        jm = function(a, b) {
            this.ve = a;
            this.Kb = b
        };
    g = im.prototype;
    g.enqueue = function(a, b) {
        0 != this.aa || 0 != this.zg.length || b && b != window ? this.dm(a, b) : (this.aa = 2, this.Yo(new jm(a, window)))
    };
    g.dm = function(a, b) {
        this.zg.push(new jm(a, b || this.xc));
        this.Oj()
    };
    g.mw = function(a) {
        this.aa = 1;
        if (a) {
            var b = !0,
                b = uh("sjr::timeout", y(this.Xo, this, b));
            this.yg = this.xc.setTimeout(b, a)
        }
    };
    g.Xo = function(a) {
        a && ++this.Ep;
        1 == this.aa && (null != this.yg && (this.xc.clearTimeout(this.yg), this.yg = null), this.aa = 0);
        this.Oj()
    };
    g.fk = function() {
        return !(!window || !Array)
    };
    g.py = function() {
        return this.Ep
    };
    im.prototype.nq = im.prototype.enqueue;
    im.prototype.nqa = im.prototype.dm;
    im.prototype.al = im.prototype.mw;
    im.prototype.rl = im.prototype.Xo;
    im.prototype.sz = im.prototype.fk;
    im.prototype.tc = im.prototype.py;
    im.prototype.Oj = function() {
        var a = uh("sjr::tryrun", y(this.Ey, this));
        this.xc.setTimeout(a, 0)
    };
    im.prototype.Ey = function() {
        if (0 == this.aa && this.zg.length) {
            var a = this.zg.shift();
            this.aa = 2;
            var b = uh("sjr::run", y(this.Yo, this, a));
            a.Kb.setTimeout(b, 0);
            this.Oj()
        }
    };
    im.prototype.Yo = function(a) {
        this.aa = 0;
        a.ve()
    };
    var km = function(a) {
            try {
                return a.sz()
            } catch (b) {
                return !1
            }
        },
        lm = function(a) {
            return Kf(a) && km(a) && Jf(a.nq) && Jf(a.nqa) && Jf(a.al) && Jf(a.rl)
        },
        mm = function() {
            if (hm && km(hm)) return hm;
            var a = yh(),
                b = a.google_jobrunner;
            return lm(b) ? hm = b : a.google_jobrunner = hm = new im(a)
        },
        nm = function(a, b) {
            mm().nq(a, b)
        },
        om = function(a, b) {
            mm().nqa(a, b)
        },
        pm = function() {
            var a = yh().google_jobrunner;
            lm(a) && a.rl()
        };
    var qm = (new Date).getTime(),
        rm = qm;
    var sm = function(a) {
        this.name = "TagError";
        this.message = a || "";
        Error.captureStackTrace ? Error.captureStackTrace(this, sm) : this.stack = Error().stack || ""
    };
    B(sm, Error);
    var tm = Wg ? 1 == Sg(N) : !Sg(N),
        um = function() {
            var a = lb ? "https" : "http",
                b = nc("script");
            return ["<", b, ' src="', Wh(tb(), ["/pagead/js/", gb(), "/r20151006/show_ads_impl.js"].join(""), a), '"></', b, ">"].join("")
        },
        vm = function(a, b, c, d) {
            return function() {
                var e = !1;
                d && mm().al(3E4);
                var f = a.document.getElementById(b);
                f && !L(f.contentWindow) && 3 == a.google_top_js_status && (a.google_top_js_status =
                    6);
                try {
                    var f = a,
                        h = b,
                        k = c,
                        l = f.document.getElementById(h),
                        m = l.contentWindow;
                    if (L(m)) {
                        var n = k,
                            q = f.document.getElementById(h).contentWindow,
                            t = q.document;
                        t.body && t.body.firstChild || (t.open(), q.google_async_iframe_close = !0, t.write(n))
                    } else {
                        var q = k,
                            n = f.document.getElementById(h).contentWindow,
                            w = "javascript:" + Yb(q);
                        n.location.replace(w)
                    }
                    e = !0
                } catch (x) {
                    pm()
                }
                e && (e = Nl("google_async_rrc", c), (new Ll(a)).set(b, vm(a, b, e, !1)))
            }
        },
        wm = function(a, b, c) {
            var d = a.createElement("iframe");
            O(b, function(a, b) {
                null != a && d.setAttribute(b,
                    a)
            });
            c && (d.style.display = c);
            return d
        },
        xm = function(a) {
            var b = ["<iframe"];
            O(a, function(a, d) {
                null != a && b.push(" " + d + '="' + a + '"')
            });
            b.push("></iframe>");
            return b.join("")
        },
        ym = function(a) {
            return Wh(rb(), ["/pagead/html/", gb(), "/r20151006/zrt_lookup.html", a ? "#" + encodeURIComponent(a) : ""].join(""))
        },
        zm = function(a, b, c, d, e) {
            d = d ? '"' : "";
            var f = d + "0" + d;
            a.width = d + b + d;
            a.height = d + c + d;
            a.frameborder = f;
            e && (a.src = URI(d + e + d));
            a.marginwidth = f;
            a.marginheight = f;
            a.vspace =
                f;
            a.hspace = f;
            a.allowtransparency = d + "true" + d;
            a.scrolling = d + "no" + d;
            a.allowfullscreen = d + "true" + d
        },
        Bm = function(a, b, c) {
            Am(a, b, c, !1, function(a, b, f) {
                var h = f;
                f = c;
                for (var k = a.document, l = k, m = b, n = m.id, q = 0; !n || l.getElementById(n);) n = "aswift_" + q++;
                m.id = n;
                m.name = n;
                l = Number(h.google_ad_width);
                m = Number(h.google_ad_height);
                n = U.zk;
                Kl(h, a, n.s, n.o);
                Ul = Of(Il(a), n.o);
                16 == h.google_reactive_ad_format ? (a = k.createElement("div"), a.innerHTML = Vl(b, l, m), f.appendChild(a.firstChild)) : f.innerHTML = Vl(b, l, m);
                return b = b.id
            })
        },
        Am = function(a,
            b, c, d, e) {
            var f = nc("script"),
                h, k;
            a: {
                var l = a;
                try {
                    var m = l.top.google_pubvars_reuse_experiment;
                    if ("undefined" !== typeof m) {
                        k = m;
                        break a
                    }
                    m = wf(["C", "E"], Oa) || null;
                    l.top.google_pubvars_reuse_experiment = m;
                    if (l.top.google_pubvars_reuse_experiment === m) {
                        k = m;
                        break a
                    }
                } catch (H) {}
                k = null
            }
            if ("E" === k) {
                var n = a,
                    m = b;
                h = null != m.google_ad_client;
                k = null != m.google_ad_width;
                var l = null != m.google_ad_height,
                    q = n,
                    t = m,
                    w = gm(q);
                if (w) {
                    for (var x = 0; x < fm.length; x++) {
                        var E = fm[x];
                        null != t[E] && (w[E] = t[E])
                    }
                    if (q = gm(q)) t = q.google_ad_width, w = q.google_ad_height,
                        x = q.google_ad_format, t && w && x && (x = (x = x && x.match(/(\d+)x(\d+)/)) ? {
                            width: x[1],
                            height: x[2]
                        } : null, !x || x.width == t && x.height == w || delete q.google_ad_format)
                }
                q = m;
                if (n = gm(n))
                    for (t = 0; t < fm.length; t++) w = fm[t], null == q[w] && null != n[w] && (q[w] = n[w]);
                n = null != m.google_ad_client;
                q = null != m.google_ad_width;
                m = null != m.google_ad_height;
                h = [h ? "c2" : n ? "c1" : "c0", k ? "w2" : q ? "w1" : "w0", l ? "h2" : m ? "h1" : "h0"].join()
            }
            k = b.google_ad_width;
            l = b.google_ad_height;
            m = {};
            zm(m, k, l, !0);
            m.onload = '"' + Ml + '"';
            e = e(a, m, b);
            k = a;
            l = d;
            d = b;
            n = d.google_ad_output;
            m = d.google_ad_format;
            m || "html" != n && null != n || (m = d.google_ad_width + "x" + d.google_ad_height, d.google_ad_format_suffix && (m += d.google_ad_format_suffix));
            n = !d.google_ad_slot || d.google_override_format || !em[d.google_ad_width + "x" + d.google_ad_height] && "aa" == d.google_loader_used;
            m = m && n ? m.toLowerCase() : "";
            d.google_ad_format = m;
            d.google_ad_unit_key = Ug(c, d, l);
            l = k.google_adk2_experiment = k.google_adk2_experiment || wf(["C", "E"], Ba) || "N";
            if ("E" == l) {
                var F;
                c = Tg(c) + ":";
                l = [];
                if (k) try {
                    for (F = k.parent, m = 0; F && F != k && 25 > m; ++m) {
                        for (var z =
                                F.frames, n = 0; n < z.length; ++n)
                            if (k == z[n]) {
                                l.push(n);
                                break
                            }
                        k = F;
                        F = k.parent
                    }
                } catch (H) {}
                F = l.join();
                F = c + F;
                F = yf(F).toString();
                d.google_ad_unit_key_2 = F
            } else "C" == l && (d.google_ad_unit_key_2 = "ctrl");
            F = ti(b);
            z = null;
            d = wf(["C", "E"], Xa);
            "E" == d ? (z = ri(b)) || (z = "{X}") : "C" == d && (z = "{C}");
            c = b.google_ad_client;
            tm && !Yi() ? (b = {
                style: "display:none"
            }, b["data-ad-client"] = dm(c), c = "google_esf", b.id = c, b.name = c, b.src = ym(""), b = xm(b)) : b = "";
            c = qm;
            k = (new Date).getTime();
            l = a.google_top_experiment;
            if (m = a.google_async_for_oa_experiment) a.google_async_for_oa_experiment =
                void 0;
            n = a.google_always_use_delayed_impressions_experiment;
            b = ["<!doctype html><html><body>", b, "<", f, ">", F, "google_show_ads_impl=true;google_unique_id=", Sg(a), ';google_async_iframe_id="', e, '";google_start_time=', c, ";", d ? 'google_pub_vars = "' + z + '";' : "", h ? 'google_pubvars_reuse_experiment_result = "' + h + '";' : "", l ? 'google_top_experiment="' + l + '";' : "", m ? 'google_async_for_oa_experiment="' + m + '";' : "", n ? 'google_always_use_delayed_impressions_experiment="' + n + '";' : "", "google_bpp=", k > c ? k - c : 1, ";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",
                f, ">", um(), "</body></html>"
            ].join("");
            F = a.document.getElementById(e) ? nm : om;
            F(vm(a, e, b, !0))
        },
        Cm = function(a, b) {
            var c = navigator;
            if (Fa && a && b && c) {
                var d = a.document,
                    c = d.createElement("script"),
                    e = dm(b);
                c.async = !0;
                c.type = "text/javascript";
                c.src = Wh("pagead2.googlesyndication.com", "/pub-config/" + e + ".js");
                d = d.getElementsByTagName("script")[0];
                d.parentNode.insertBefore(c, d)
            }
        };
    var Dm = function(a, b) {
            for (var c = ["width", "height"], d = a, e = b, f = 0; f < c.length; f++) {
                var h = "google_ad_" + c[f];
                if (!e.hasOwnProperty(h)) {
                    var k;
                    k = Cf(d[c[f]]);
                    k = null === k ? null : Math.round(k);
                    null != k && (e[h] = k)
                }
            }
        },
        Em = function(a, b) {
            try {
                var c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (e) {
                return null
            }
        },
        Fm = function(a, b) {
            var c = Math.min(1200, Rk(a));
            return b / c
        },
        Gm = function(a) {
            var b = 0,
                c;
            for (c in wk) - 1 != a.indexOf(c) && (b |= wk[c]);
            return b
        };
    var Hm = function(a) {
            return function(b) {
                return b.minWidth() <= a
            }
        },
        Jm = function(a, b, c) {
            var d = a && Im(c, b);
            return function(a) {
                a = d && 250 <= a.height();
                return !a
            }
        },
        Im = function(a, b) {
            var c = Rk(b),
                d = Qk(b),
                c = Math.min(d, 16 * c / 9),
                d = (d = Em(a, b)) ? d.y : 0;
            return d < c - 100
        },
        Lm = function(a, b) {
            var c = b,
                d = Infinity;
            do {
                var e = Km(c, a, "height");
                e && (d = Math.min(d, e));
                (e = Km(c, a, "maxHeight")) && (d = Math.min(d, e))
            } while ((c = c.parentElement) && "HTML" != c.tagName);
            return d
        },
        Km = function(a, b, c) {
            if (a.style) {
                var d = Cf(a.style[c]);
                if (d) return d
            }
            if (a = uf(a,
                    b))
                if (d = Cf(a[c])) return d;
            return null
        };
    var Mm = function(a) {
            return function(b) {
                for (var c = a.length - 1; 0 <= c; --c)
                    if (!a[c](b)) return !1;
                return !0
            }
        },
        Nm = function(a, b, c) {
            for (var d = a.length, e = null, f = 0; f < d; ++f) {
                var h = a[f];
                if (b(h)) {
                    if (!c || c(h)) return h;
                    null === e && (e = h)
                }
            }
            return e
        };
    var Pm = function(a, b, c, d) {
            var e = zk.slice(0),
                f;
            f = U.fh;
            (f = Of(Il(c), f.o)) && lc(e);
            f = 488 > Rk(c);
            b = [Hm(a), Om(f, c), Jm(f, c, d), yk(b)];
            e = Nm(e, Mm(b));
            if (!e) throw new sm("adsbygoogle.push() error: No slot size for availableWidth=" + a);
            return e
        },
        Om = function(a) {
            return function(b) {
                return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
            }
        };
    var Qm = function(a, b) {
        vk.call(this, a, b)
    };
    B(Qm, vk);
    Qm.prototype.Nf = function(a) {
        return Math.min(1200, Math.round(a))
    };
    var Rm = [new Qm(468, 300), new Qm(414, 828), new Qm(384, 768), new Qm(375, 750), new Qm(360, 720), new Qm(320, 640), new Qm(120, 600)],
        Sm = [new Qm(468, 350), new Qm(414, 828), new Qm(384, 768), new Qm(375, 750), new Qm(360, 720), new Qm(320, 640), new Qm(120, 600)],
        Tm = function(a, b) {
            var c = Nm(a, Hm(b));
            if (!c) throw new sm("adsbygoogle.push() error: No autorelaxed size for width=" + b + "px");
            return c
        };
    var Um = function() {
        return G("iPad") || G("Android") && !G("Mobile") || G("Silk")
    };
    var Vm = function(a) {
            var b = U.bh;
            return Of(Il(a), b.o)
        },
        Wm = [{
            va: [3, 0, 0],
            wa: [6, 12, 14, 0, 1, 3, 2, 4, 13, 5, 7, 8, 9, 10, 11, 15]
        }, {
            va: [3, 0, 1],
            wa: [6, 15, 0, 1, 2, 3, 4, 13, 5, 7, 8, 9, 10, 11, 12, 14]
        }, {
            va: [3, 0, 2],
            wa: [6, 15, 0, 1, 2, 3, 4, 7, 8, 9, 10, 13, 5, 11, 12, 14]
        }, {
            va: [3, 1, 0],
            wa: [6, 12, 15, 0, 1, 3, 4, 13, 2, 5, 7, 8, 9, 10, 11, 14]
        }, {
            va: [3, 1, 1],
            wa: [6, 15, 0, 1, 7, 8, 11, 2, 3, 4, 5, 9, 10, 12, 13, 14]
        }, {
            va: [3, 1, 2],
            wa: [6, 15, 0, 1, 2, 3, 4, 7, 9, 11, 5, 8, 10, 12, 13, 14]
        }, {
            va: [3, 2, 0],
            wa: [0, 6, 12, 15, 1, 2, 3, 4, 13, 5, 7, 8, 9, 10, 11, 14]
        }, {
            va: [3, 2, 1],
            wa: [0, 6, 12, 14, 1, 2, 3, 4, 13, 5, 7, 8, 9, 10, 11, 15]
        }, {
            va: [3, 2, 2],
            wa: [0, 15, 1, 2, 3, 4, 13, 9, 5, 6, 7, 8, 10, 11, 12, 14]
        }, {
            va: [2, 0, 0],
            wa: [6, 15, 0, 1, 3, 2, 7, 8, 10, 13, 9, 4, 5, 11, 12, 14]
        }, {
            va: [2, 0, 1],
            wa: [6, 15, 0, 1, 2, 3, 7, 8, 4, 10, 9, 13, 5, 11, 12, 14]
        }, {
            va: [2, 0, 2],
            wa: [0, 15, 1, 2, 3, 4, 7, 8, 13, 5, 6, 9, 10, 11, 12, 14]
        }, {
            va: [4, 0, 0],
            wa: [6, 12, 14, 15, 0, 1, 7, 2, 8, 11, 9, 3, 4, 5, 10, 13]
        }, {
            va: [4, 0, 1],
            wa: [6, 12, 14, 0, 1, 2, 3, 4, 7, 8, 11, 13, 5, 9, 10, 15]
        }, {
            va: [4, 0, 2],
            wa: [6, 15, 0, 1, 2, 3, 5, 7, 8, 13, 9, 4, 10, 11, 12, 14]
        }],
        Xm = function(a, b, c) {
            return "auto" == c ? (b = Fm(a, b), .6 < b && !(488 > Rk(a)) ? 2 : .25 >= b ? 4 : 3) : Gm(c)
        },
        Ym = function(a, b) {
            var c =
                Lm(a, b);
            return function(a) {
                return a.height() <= c
            }
        },
        $m = function(a, b, c, d, e) {
            var f;
            a: {
                f = !Um() && (G("iPod") || G("iPhone") || G("Android") || G("IEMobile")) ? 2 : Um() ? 4 : 3;
                var h = Em(d, c);
                f = [f, h && 3 == f ? 83 > h.x ? 0 : 265 > h.x ? 1 : 2 : 0, Zm(f, h)];
                for (h = 0; h < Wm.length; ++h) {
                    var k = Wm[h],
                        l;
                    b: if (l = k.va, f && "number" == typeof f.length && l && "number" == typeof l.length && f.length == l.length) {
                        for (var m = f.length, n = 0; n < m; n++)
                            if (f[n] !== l[n]) {
                                l = !1;
                                break b
                            }
                        l = !0
                    } else l = !1;
                    if (l) {
                        f = k.wa;
                        break a
                    }
                }
                throw Error("No format for " + f);
            }
            h = [];
            for (k = 0; k < f.length; ++k) h.push(zk[f[k]]);
            f = h;
            h = 488 > Rk(c);
            a = [Ym(c, d), Hm(a), Jm(h, c, d)];
            c = [];
            (e ? c : a).push(yk(b));
            return Nm(f, Mm(a), Mm(c))
        },
        Zm = function(a, b) {
            if (!b) return 0;
            var c = b.y;
            switch (a) {
                case 2:
                    return 285 > c ? 0 : 1396 > c ? 1 : 2;
                case 4:
                    return 275 > c ? 0 : 1057 > c ? 1 : 2;
                default:
                    return 216 > c ? 0 : 838 > c ? 1 : 2
            }
        };
    var an = function(a, b) {
        vk.call(this, a, b)
    };
    B(an, vk);
    an.prototype.Nf = function() {
        return this.minWidth()
    };
    var bn = [new an(728, 15), new an(468, 15), new an(200, 90), new an(180, 90), new an(160, 90), new an(120, 90)];
    var cn = function(a, b) {
            r(b) || (b = [b]);
            var c = fc(b, function(a) {
                return u(a) ? a : a = a.Se + " " + a.duration + "s " + a.timing + " " + a.Kz + "s"
            });
            J(a, "transition", c.join(","))
        },
        dn = Nj(function() {
            if (I) return Md("10.0");
            var a = document.createElement("DIV"),
                b = Fd ? "-webkit" : Ed ? "-moz" : I ? "-ms" : Cd ? "-o" : null,
                c = {
                    transition: "opacity 1s linear"
                };
            b && (c[b + "-transition"] = "opacity 1s linear");
            var d, b = "div",
                e = {
                    style: c
                };
            if (!Xc.test(b)) throw Error("Invalid tag name <" + b + ">.");
            if (b.toUpperCase() in Zc) throw Error("Tag name <" + b + "> is not allowed for SafeHtml.");
            var c = b,
                b = e,
                e = null,
                f = "<" + c;
            if (b)
                for (d in b) {
                    if (!Xc.test(d)) throw Error('Invalid attribute name "' + d + '".');
                    var h = b[d];
                    if (null != h) {
                        var k, l = c;
                        k = d;
                        if (h instanceof Jc) h = Kc(h);
                        else if ("style" == k.toLowerCase()) {
                            if (!ja(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
                            if (!(h instanceof Mc)) {
                                var l = "",
                                    m = void 0;
                                for (m in h) {
                                    if (!/^[-_a-zA-Z0-9]+$/.test(m)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + m);
                                    var n = h[m];
                                    if (null != n) {
                                        if (n instanceof Jc) n = Kc(n);
                                        else if (Oc.test(n)) {
                                            for (var q, t = q = !0, w = 0; w < n.length; w++) {
                                                var x = n.charAt(w);
                                                "'" == x && t ? q = !q : '"' == x && q && (t = !t)
                                            }(q = q && t) || (n = "zClosurez")
                                        } else n = "zClosurez";
                                        l += m + ":" + n + ";"
                                    }
                                }
                                h = l ? (new Mc).Yf(l) : Nc
                            }
                            l = void 0;
                            l = h instanceof Mc && h.constructor === Mc && h.uq === Lc ? h.zj : "type_error:SafeStyle";
                            h = l
                        } else {
                            if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + h + '" given.');
                            if (k.toLowerCase() in Yc)
                                if (h instanceof Tc) h = h instanceof Tc && h.constructor === Tc && h.Cq === Sc ? h.Do : "type_error:TrustedResourceUrl";
                                else if (h instanceof Qc) h = h instanceof Qc && h.constructor === Qc && h.vq === Pc ? h.Yc : "type_error:SafeUrl";
                            else if (u(h)) h instanceof Qc || (h = h.Oc ? h.Ub() : String(h), Rc.test(h) || (h = "about:invalid#zClosurez"), l = new Qc, l.Yc = h, h = l), h = h.Ub();
                            else throw Error('Attribute "' + k + '" on tag "' + l + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + h + '" given.');
                        }
                        h.Oc && (h = h.Ub());
                        k = k + '="' + Eb(String(h)) + '"';
                        f += " " + k
                    }
                }
            d = void 0;
            null != d ? r(d) || (d = [d]) : d = [];
            !0 === Hc[c.toLowerCase()] ? f += ">" : (d = ad(d), f += ">" + Wc(d) +
                "</" + c + ">", e = d.ze());
            (d = b && b.dir) && (e = /^(ltr|rtl|auto)$/i.test(d) ? 0 : null);
            d = $c(f, e);
            a.innerHTML = Wc(d);
            a = a.firstChild;
            return "" != We(a, "transition")
        });
    var en = function(a) {
            a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "";
            var b = {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4
            };
            return b[a] || 0
        },
        fn = function(a) {
            var b;
            a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState ? b = "webkitvisibilitychange" : a.visibilityState && (b = "visibilitychange");
            return b
        };
    var gn = function(a, b) {
        this.Eb = ["", ""];
        this.D = a || "";
        this.rd = b || ""
    };
    g = gn.prototype;
    g.Jj = function() {
        this.Eb[0] = "";
        this.rd = this.D = this.Eb[1] = ""
    };
    g.Bd = function(a, b) {
        0 > this.Eb[a].indexOf(b) && (this.Eb[a] += b);
        return this
    };
    g.Fi = function(a) {
        return 0 <= this.D.indexOf(a)
    };
    g.Mb = function(a) {
        this.Fi(a) || (this.D = a + this.D);
        return this
    };
    g.of = function(a) {
        0 > this.rd.indexOf(a) && (this.rd = a + this.rd);
        return this
    };
    g.toString = function() {
        return [this.Eb[0], this.Eb[1], this.D, this.rd].join("|")
    };
    var hn = new gn("s", ""),
        jn = RegExp("[lonvaf]", "g");
    gn.prototype.Es = function(a, b) {
        return null != a && this.Eb[0] || null != b && this.Eb[1] ? !1 : !0
    };
    gn.prototype.Ek = function() {
        var a = this.To("", null, 0);
        if (null === a) return "XS";
        var a = a ? "C" : "N",
            b = this.D;
        return 0 <= b.indexOf("a") ? a + "A" : 0 <= b.indexOf("f") ? a + "F" : a + "S"
    };
    gn.prototype.To = function(a, b, c) {
        if ("" != this.rd || a) return null;
        a = this.D;
        return "" == a.replace(jn, "") ? this.Es(b, c) : !1
    };
    for (var kn = function(a, b, c) {
                null !== b && null !== Bf(a.getAttribute("width")) && a.setAttribute("width", b);
                null !== c && null !== Bf(a.getAttribute("height")) && a.setAttribute("height", c);
                null !== b && (a.style.width = b + "px");
                null !== c && (a.style.height = c + "px")
            }, ln = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "), mn = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "), nn, on = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            pn = ln, qn = 0; qn < pn.length; qn++) on += ", " + pn[qn] + " .2s cubic-bezier(.4, 0, 1, 1)";
    pn = mn;
    for (qn = 0; qn < pn.length; qn++) on += ", " + pn[qn] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var rn = nn = on,
        sn = function(a) {
            return "string" === typeof a ? Bf(a) : "number" === typeof a && isFinite(a) ? a : null
        },
        tn = function(a, b) {
            switch (b) {
                case "no_rsz":
                    return !1;
                case "force":
                case "animate":
                    return !0;
                default:
                    return a.dj()
            }
        },
        vn = function(a, b, c, d, e, f) {
            this.Pi = b;
            this.Lb = a;
            a = this.Lb.ownerDocument;
            this.Mk = a.defaultView || a.parentWindow;
            this.hb = new un(this.Lb);
            this.Va = f;
            this.Jq = tn(this.hb, c.xp);
            this.ib = this.Va ? this.hb.ta ? this.hb.ta.right - this.hb.ta.left : null : d;
            this.Ca = this.Va ? this.hb.ta ? this.hb.ta.bottom - this.hb.ta.top :
                null : e;
            d = sn(c.width);
            this.Ga = this.ib == d ? null : d;
            d = sn(c.height);
            this.Fa = this.Ca == d ? null : d;
            this.pj = this.Va ? sn(c.opacity) : null;
            this.ml = c.check;
            this.sa = "animate" == c.xp && !this.hb.dj() && dn();
            this.dr = !!c.Iz;
            this.D = new gn;
            this.Jf = this.Gd = null
        };
    vn.prototype.Up = function() {
        if (this.Va && !this.Jq || null == this.Ga && null == this.Fa && null == this.pj && this.Va) return this.D;
        var a = this.Va;
        this.Va = !1;
        this.Vo();
        this.Va = a;
        if (!a || null != this.ml && !this.D.To(this.ml, this.Ga, this.Fa)) return this.D;
        this.D.Fi("n") && (this.Ca = this.ib = null);
        if (null == this.ib && null !== this.Ga || null == this.Ca && null !== this.Fa) this.sa = !1;
        0 != this.Ga && 0 != this.Fa || !this.D.Fi("l") || (this.Fa = this.Ga = 0);
        this.D.Jj();
        this.Yw();
        return this.Vo()
    };
    vn.prototype.Yw = function() {
        var a = this.Lb;
        this.dr || (a.style.overflow = "hidden");
        this.sa && (this.Jf ? (cn(a, rn), cn(this.Jf, rn)) : cn(a, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== this.pj && (a.style.opacity = this.pj);
        var b = null != this.ib && null != this.Ga && this.Ga > this.ib ? this.Ga : null,
            c = null != this.Ca && null != this.Fa && this.Fa > this.Ca ? this.Fa : null;
        if (this.Pi)
            for (var d = this.Pi.length, e = 0; e < d; e++) kn(this.Pi[e], b, c);
        var f = this.Ga,
            h = this.Fa,
            k = this.Jf,
            b = function() {
                kn(a, f, h);
                if (k) {
                    var b = function(a) {
                        for (var b = 0; b < a.length; b++) J(k, a[b], "0px")
                    };
                    b(ln);
                    b(mn)
                }
            };
        this.sa ? p.setTimeout(b, 1E3) : b()
    };
    var wn = function(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    };
    g = vn.prototype;
    g.Dr = function(a) {
        var b = !1;
        "none" == a.display && (this.D.Mb("n"), this.Va && (b = !0));
        "hidden" != a.visibility && "collapse" != a.visibility || this.D.Mb("v");
        "hidden" == a.overflow && this.D.Mb("o");
        "absolute" == a.position ? (this.D.Mb("a"), b = !0) : "fixed" == a.position && (this.D.Mb("f"), b = !0);
        return b
    };
    g.Vo = function() {
        var a = this.Mk;
        this.Gd = function() {};
        this.ll(this.Lb, a);
        var b = this.Lb.parentElement;
        if (!b) return this.D;
        for (var c = !0; b;) {
            try {
                var d = /^head|html$/i.test(b.nodeName) ? null : uf(b, a)
            } catch (f) {
                this.D.of("c")
            }
            var e = this.Dy(a, b, d);
            if (c && !e && wn(d)) {
                this.D.Mb("l");
                this.Jf = b;
                break
            }
            c = c && e;
            if (d && this.Dr(d)) break;
            b = b.parentElement;
            if (!b) try {
                if (b = a.frameElement, a = a.parent, !L(a)) {
                    this.D.Mb("c");
                    break
                }
            } catch (f) {
                this.D.Mb("c");
                break
            }
        }
        this.sa && this.Va && this.jr();
        return this.D
    };
    g.Is = function(a, b) {
        if (3 == a.nodeType) return /\S/.test(a.data) ? 1 : 0;
        if (1 == a.nodeType) {
            if (/^(head|script|style)$/i.test(a.nodeName)) return 0;
            try {
                var c = uf(a, b)
            } catch (d) {}
            if (c) {
                if ("none" == c.display || "fixed" == c.position) return 0;
                if ("absolute" == c.position) {
                    if (!this.hb.ta || "hidden" == c.visibility || "collapse" == c.visibility) return 0;
                    c = null;
                    try {
                        c = a.getBoundingClientRect()
                    } catch (d) {
                        return 0
                    }
                    return (c.right > this.hb.ta.left ? 2 : 0) | (c.bottom > this.hb.ta.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    };
    g.ll = function(a, b) {
        var c = 0;
        if (!a || !a.parentElement) return !0;
        for (var d = !1, e = 0, f = a.parentElement.childNodes, h = 0; h < f.length; h++) {
            var k = f[h];
            k == a ? d = !0 : (k = this.Is(k, b), c |= k, d && (e |= k))
        }
        e & 1 && (c & 2 && this.D.Bd(0, "o"), c & 4 && this.D.Bd(1, "o"));
        return !(c & 1)
    };
    g.Kp = function(a, b, c, d, e, f, h, k) {
        if (null != k) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Bf(f);
                null == f && (this.D.of("n"), this.D.Bd(a, b))
            }
            if (null != f)
                if (c) {
                    if (this.Va)
                        if (this.sa) {
                            var l = Math.max(f + k - h, 0),
                                m = this.Gd;
                            this.Gd = function(b, c) {
                                b == a && d.setAttribute(e, l - c);
                                m(b, c)
                            }
                        } else d.setAttribute(e, k)
                } else this.D.Bd(a, b)
        }
    };
    var xn = function(a) {
            return !a || /^(auto|none|100%)$/.test(a)
        },
        yn = function(a) {
            return !a || /^(0px|auto|none|0%)$/.test(a)
        };
    vn.prototype.Td = function(a, b, c, d, e, f, h, k, l) {
        if (null != l) {
            if ("string" == typeof h) {
                if ("m" == b ? yn(h) : xn(h)) return;
                h = Cf(h);
                null == h && (this.D.of("p"), this.D.Bd(a, b))
            }
            if (null != h)
                if (c && e) {
                    if (this.Va)
                        if (this.sa) {
                            var m = Math.max(h + l - k, 0),
                                n = this.Gd;
                            this.Gd = function(b, c) {
                                b == a && (e[f] = m - c + "px");
                                n(b, c)
                            }
                        } else e[f] = l + "px"
                } else this.D.Bd(a, b)
        }
    };
    vn.prototype.Dy = function(a, b, c) {
        try {
            var d = b.style
        } catch (t) {
            this.D.of("s")
        }
        var e = b.getAttribute("width"),
            f = Bf(e),
            h = b.getAttribute("height"),
            k = Bf(h);
        a = this.ll(b, a);
        var l = d ? d.width : null,
            m = l ? Cf(l) : null,
            n = d ? d.height : null,
            q = n ? Cf(n) : null,
            f = null !== m && this.ib >= m || null !== f && this.ib >= f,
            q = null !== q && this.Ca >= q || null !== k && this.Ca >= k,
            k = !a && wn(c),
            q = a || q || k || !(e || l || c && (!yn(c.minWidth) || !xn(c.maxWidth)));
        c = a || f || k || !(h || n || c && (!yn(c.minHeight) || !xn(c.maxHeight)));
        this.Kp(0, "d", q, b, "width", e, this.ib, this.Ga);
        this.Kp(1,
            "d", c, b, "height", h, this.Ca, this.Fa);
        this.Td(0, "d", q, b, d, "width", l, this.ib, this.Ga);
        this.Td(1, "d", c, b, d, "height", n, this.Ca, this.Fa);
        this.Td(0, "m", q, b, d, "minWidth", d && d.minWidth, this.ib, this.Ga);
        this.Td(1, "m", c, b, d, "minHeight", d && d.minHeight, this.Ca, this.Fa);
        this.Td(0, "M", q, b, d, "maxWidth", d && d.maxWidth, this.ib, this.Ga);
        this.Td(1, "M", c, b, d, "maxHeight", d && d.maxHeight, this.Ca, this.Fa);
        return a
    };
    vn.prototype.jr = function() {
        var a = 31.25,
            b = this.Mk,
            c = this.Lb,
            d = this.Ga,
            e = this.Fa,
            f = this.Gd,
            h, k = function() {
                if (0 < a) {
                    var k = uf(c, b),
                        m = Cf(k.width),
                        k = Cf(k.height);
                    null !== m && null !== d && f(0, d - m);
                    null !== k && null !== e && f(1, e - k);
                    --a
                } else p.clearInterval(h), f(0, 0), f(1, 0)
            };
        p.setTimeout(function() {
            h = p.setInterval(k, 16)
        }, 990)
    };
    var un = function(a) {
        var b = a && a.ownerDocument,
            c = b && (b.defaultView || b.parentWindow),
            c = c && tf(c);
        this.Ml = !!c;
        this.ta = null;
        try {
            this.ta = a && a.getBoundingClientRect()
        } catch (d) {}
        this.Yl = this.sy(a);
        c = c || p;
        this.bz = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
        b = b && en(b);
        this.cz = !!a && !(2 == b || 3 == b) && !(this.ta.top >= this.ta.bottom && this.ta.left >= this.ta.right)
    };
    g = un.prototype;
    g.rt = function() {
        return this.Yl
    };
    g.sy = function(a) {
        for (var b = 0, c = this.ta; a;) try {
            c && (b += c.top);
            var d = a.ownerDocument,
                e = d.defaultView || d.parentWindow;
            a = e.frameElement;
            c = a.getBoundingClientRect()
        } catch (f) {
            break
        }
        return b
    };
    g.Tu = function() {
        return this.Yl >= this.bz
    };
    g.dj = function() {
        return this.Ml && (!this.cz || this.Tu())
    };
    g.on = function() {
        return this.Ml
    };
    var An = function(a, b, c) {
            c = c || window;
            a.setAttribute("data-adsbygoogle-status", "done");
            zn(a, b, c)
        },
        zn = function(a, b, c) {
            Bn(a, b, c);
            if (!Cn(a, b, c)) {
                if (b.google_reactive_ads_config) {
                    if (Dn) throw new sm("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");
                    Dn = !0
                } else Rg(c);
                En || (En = !0, Cm(c, b.google_ad_client));
                O(ji, function(a, d) {
                    b[d] = b[d] || c[d]
                });
                b.google_loader_used = "aa";
                var d = b.google_ad_output;
                if (d && "html" != d) throw new sm("adsbygoogle.push() error: No support for google_ad_output=" +
                    d);
                sh("aa::load", th, function() {
                    Bm(c, b, a)
                })
            }
        },
        Cn = function(a, b, c) {
            var d = b.google_reactive_ads_config;
            if (d) {
                var e;
                e = d.page_level_pubvars;
                e = ja(e) ? e : {};
                e = e.google_tag_origin
            }
            var f = e || b.google_tag_origin;
            var h = b.google_ad_slot;
            e = c.google_ad_modifications;
            !e || Jl(e.ad_whitelist, h, f) ? e = null : (f = e.space_collapsing || "none", (h = Jl(e.ad_blacklist, h)) ? (e = h.space_collapsing || f, e = {
                Fk: !0,
                rp: e
            }) : e = e.remove_ads_by_default ? {
                Fk: !0,
                rp: f
            } : null);
            return e && e.Fk && "on" != b.google_adtest ? ("slot" == e.rp && kn(a, 0, 0), !0) : !(e = uf(a, c)) ||
                "none" != e.display || "on" == b.google_adtest || 0 < b.google_reactive_ad_format || d ? !1 : (c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0)
        },
        Fn = function(a, b) {
            var c;
            try {
                c = a.getBoundingClientRect()
            } catch (e) {}
            if (!c || 0 == c.left && 0 == c.right && 0 == c.width && 0 == c.height) return !1;
            var d = uf(a, b);
            if (!d) return !1;
            c = Cf(d.width);
            d = Cf(d.height);
            return null == c || null == d || em[c + "x" + d] ? !1 : !0
        },
        Bn = function(a, b, c) {
            for (var d = b, e = a.attributes, f = e.length,
                    h = 0; h < f; h++) {
                var k = e[h];
                if (/data-/.test(k.name)) {
                    var l = k.name.replace("data", "google").replace(/-/g, "_");
                    if (!d.hasOwnProperty(l)) {
                        var k = k.value,
                            m = {
                                google_reactive_ad_format: ra,
                                google_allow_expandable_ads: sa
                            },
                            k = m.hasOwnProperty(l) ? m[l](k, null) : k;
                        null === k || (d[l] = k)
                    }
                }
            }
            if (b.google_enable_content_recommendations && 1 == b.google_reactive_ad_format) {
                var n = a;
                b.google_ad_width = Rk(c);
                b.google_ad_height = 50;
                n.style.display = "none"
            } else if (1 == b.google_reactive_ad_format) n = a, b.google_ad_width = 320, b.google_ad_height =
                50, n.style.display = "none";
            else if (8 == b.google_reactive_ad_format) n = a, b.google_ad_width = Rk(c) || 0, b.google_ad_height = Qk(c) || 0, n.style.display = "none";
            else if (9 == b.google_reactive_ad_format) n = a, b.google_ad_width = Rk(c) || 0, b.google_ad_height = Qk(c) || 0, n.style.display = "none";
            else {
                d = c;
                f = b.google_ad_format;
                e = b;
                "autorelaxed" == f ? (f = U.$g, Kl(e, d, f.s, f.o), e = U.$g, d = (d = Of(Il(d), e.o)) ? 3 : 2) : "auto" == f || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(f) ? (f = U.ah, Kl(e, d, f.s, f.o), e = U.ah, d = (e = Of(Il(d), e.o)) || Vm(d) ? 5 :
                    1) : d = "link" == f ? 4 : void 0;
                if (e = !d) e = b, f = c, Fn(a, f) ? (h = U.bh, Kl(e, f, h.s, h.o) !== h.o ? e = !1 : (e.google_ad_format = "auto", e = !0)) : e = !1;
                e && (d = 5);
                if (d) {
                    var q = a,
                        t = b,
                        w = q.offsetWidth;
                    a: {
                        f = w;
                        a = q;
                        var x = t,
                            e = c;
                        c = x.google_ad_format;
                        switch (d) {
                            default:
                                case 1:
                                n = f;d = e;
                            "auto" == c ? (c = Fm(d, n), c = .25 >= c ? 4 : 3) : c = Gm(c);x && (x.google_responsive_formats = c, e = U.fh, Kl(x, d, e.s, e.o));n = Pm(n, c, d, a);
                            break a;
                            case 2:
                                    n = Tm(Rm, f);
                                break a;
                            case 3:
                                    n = Tm(Sm, f);
                                break a;
                            case 5:
                                    d = e;e = a;a = Xm(d, f, c);x.google_responsive_formats = a;h = Vm(d);c = f;x = a;a = d;d = e;e = h;
                                b: {
                                    f = a;
                                    h = d;
                                    do
                                        if ((l = uf(h, f)) && "fixed" == l.position) {
                                            f = !1;
                                            break b
                                        }
                                    while (h = h.parentElement);
                                    f = !0
                                }
                                f && (n = $m(c, x, a, d, e));n = n || Pm(c, x, a, d);
                                break a;
                            case 4:
                                    n = f;c = x;x = Nm(bn, Hm(n));
                                if (!x) throw new sm("adsbygoogle.push() error: No link unit size for width=" + n + "px");c.google_ad_format_suffix = "_0ads_al";c.google_override_format = 1;n = x
                        }
                    }
                    t.google_ad_width = n.Nf(w);
                    t.google_ad_height = n.height();
                    q.style.height = n.height() + "px";
                    t.google_ad_resizable = !0;
                    delete t.google_ad_format;
                    b.google_loader_features_used = 128
                } else {
                    n =
                        a;
                    a = b;
                    Fn(n, c) ? (d = ["LC", "LE"], a = (d = wf(d, za)) ? "LE" == (a.google_responsive_override_logs_experiment = d) : !1) : a = !1;
                    if (a) try {
                        t = n.offsetWidth, w = Xm(c, t, "auto"), x = $m(t, w, c, n, !0), q = new bd(x.Nf(t), x.height()), b.google_ember_w = q.width, b.google_ember_h = q.height
                    } catch (E) {
                        b.google_ember_w = b.google_ember_h = "e"
                    }
                    q = n;
                    t = b;
                    (q = !((Af.test(t.google_ad_width) || zf.test(q.style.width)) && (Af.test(t.google_ad_height) || zf.test(q.style.height)))) ? (q = b, c = uf(n, c), n.style.width = c.width, n.style.height = c.height, Dm(c, q), q.google_ad_width ||
                        (q.google_ad_width = n.offsetWidth), q.google_ad_height || (q.google_ad_height = n.offsetHeight), b.google_loader_features_used = 256) : (Dm(n.style, b), b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (c = n.style.width, n.style.width = "100%", q = n.offsetWidth, n.style.width = c, n = q, b.google_available_width = n))
                }
            }
        },
        Dn = !1,
        En = !1;
    var Gn = function() {},
        Hn = [],
        In = function(a, b) {
            if (b < a.vg) {
                var c = b + a.vf,
                    d = a.Z[c];
                return d === Hn ? a.Z[c] = [] : d
            }
            d = a.pb[b];
            return d === Hn ? a.pb[b] = [] : d
        },
        Jn = function(a, b, c) {
            b < a.vg ? a.Z[b + a.vf] = c : a.pb[b] = c
        };
    Gn.prototype.Gp = function() {
        return this.Z
    };
    Gn.prototype.Gg = function() {
        return p.JSON && p.JSON.stringify ? p.JSON.stringify(this.Gp()) : cj(this.Gp())
    };
    Gn.prototype.toString = function() {
        return this.Z.toString()
    };
    Gn.prototype.getExtension = function(a) {
        if (this.pb) {
            this.yc || (this.yc = {});
            var b = a.Lz;
            if (a.Rz) {
                if (a.Th) return this.yc[b] || (this.yc[b] = fc(this.pb[b] || [], function(b) {
                    return new a.Th(b)
                })), this.yc[b]
            } else if (a.Th) return !this.yc[b] && this.pb[b] && (this.yc[b] = new a.Th(this.pb[b])), this.yc[b];
            return this.pb[b]
        }
    };
    var Ln = function(a) {
        var b = a;
        a = Kn;
        this.yc = null;
        b || (b = []);
        this.vf = -1;
        this.Z = b;
        a: {
            if (this.Z.length) {
                var b = this.Z.length - 1,
                    c = this.Z[b];
                if (c && "object" == typeof c && !r(c)) {
                    this.vg = b - this.vf;
                    this.pb = c;
                    break a
                }
            }
            this.vg = Number.MAX_VALUE
        }
        if (a)
            for (b = 0; b < a.length; b++) c = a[b], c < this.vg ? (c += this.vf, this.Z[c] = this.Z[c] || Hn) : this.pb[c] = this.pb[c] || Hn
    };
    B(Ln, Gn);
    var Kn = [4];
    g = Ln.prototype;
    g.Tt = function() {
        return In(this, 1)
    };
    g.Qx = function(a) {
        Jn(this, 1, a)
    };
    g.It = function() {
        return In(this, 2)
    };
    g.Hx = function(a) {
        Jn(this, 2, a)
    };
    g.getId = function() {
        return In(this, 3)
    };
    g.Ex = function(a) {
        Jn(this, 3, a)
    };
    g.jt = function() {
        return In(this, 4)
    };
    g.xx = function(a) {
        Jn(this, 4, a || [])
    };
    g.Kt = function() {
        return In(this, 5)
    };
    g.Ix = function(a) {
        Jn(this, 5, a)
    };
    g.zt = function() {
        return In(this, 6)
    };
    g.Zj = function(a) {
        Jn(this, 6, a)
    };
    var Mn = function(a, b) {
            return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
        },
        Nn = function(a, b) {
            var c = Rk(a),
                d = Qk(a);
            if (!v(c) || !v(d)) throw Error("No VP width and/or height.");
            c = new Te(0, c, d, 0);
            return (c = Mn(b, c) ? new Te(Math.max(b.top, c.top), Math.min(b.right, c.right), Math.min(b.bottom, c.bottom), Math.max(b.left, c.left)) : null) || new Te(0, 0, 0, 0)
        };
    var On = function() {
        this.Zb = {};
        this.zn = {}
    };
    On.prototype.set = function(a, b) {
        this.Zb[a] = b;
        this.zn[a] = a
    };
    On.prototype.get = function(a, b) {
        return ba(this.Zb[a]) ? this.Zb[a] : b
    };
    On.prototype.Bt = function() {
        var a = [],
            b;
        for (b in this.Zb) ba(this.Zb[b]) && a.push(this.zn[b]);
        return a
    };
    var Pn = function(a) {
        this.Zb = {};
        this.ov = {};
        a && this.addAll(a)
    };
    Pn.prototype.add = function(a) {
        this.Zb[a] = !0;
        this.ov[a] = a
    };
    Pn.prototype.addAll = function(a) {
        for (var b = 0; b < a.length; ++b) this.add(a[b])
    };
    Pn.prototype.contains = function(a) {
        return !!this.Zb[a]
    };
    var Qn = function(a) {
        this.pa = null;
        this.ua = [];
        var b = 0;
        1 == a.nodeType && (a = Ye(a, "zIndex"), "auto" != a && "inherit" != a && "initial" != a && (b = parseInt(a, 10)));
        this.vk = b;
        this.Md = -1
    };
    g = Qn.prototype;
    g.Kd = function(a) {
        this.pa = a
    };
    g.getParent = function() {
        return this.pa
    };
    g.ce = function(a) {
        a.Kd(this);
        this.ua.push(a)
    };
    g.Or = function(a) {
        var b = Ec(this);
        b.pa = null;
        b.ua = [];
        b.vk = a;
        b.Md = -1;
        this.ce(b);
        return b
    };
    g.ia = function() {
        return this.ua
    };
    g.qp = function(a) {
        if (0 > a) throw Error("nextStackingOrderIndex must not be negative");
        this.ua.sort(function(a, b) {
            return a.vk - b.vk
        });
        this.Md = a++;
        for (var b = 0; b < this.ua.length; ++b) a = this.ua[b].qp(a);
        return a
    };
    g.sn = function(a) {
        return -1 == this.Md || -1 == a.Md ? !1 : this.Md > a.Md
    };
    var Rn = function(a) {
        this.U = a;
        this.pa = null;
        this.ua = [];
        this.Ge = this.fg = this.Cb = null;
        this.xf = {};
        this.up = this.wf = null
    };
    g = Rn.prototype;
    g.Sb = function() {
        if (!this.U.ownerDocument) throw Error("Wrapped node should have an owner document.");
        return this.U.ownerDocument
    };
    g.Mc = function() {
        var a = this.Sb();
        return a.defaultView || a.parentWindow
    };
    g.Kd = function(a) {
        this.pa = a
    };
    g.getParent = function() {
        return this.pa
    };
    g.Ld = function(a) {
        this.up = a
    };
    g.rb = function() {
        return this.up
    };
    g.Mt = function() {
        if (!this.getParent()) return null;
        var a = this.getParent().ia(),
            b = cc(a, this);
        if (-1 == b) return null;
        for (--b; 0 <= b; --b)
            if (1 == a[b].A().nodeType) return a[b];
        return null
    };
    g.A = function() {
        return this.U
    };
    g.Wa = function() {
        return this.U
    };
    g.Mw = function() {
        this.U.parentNode && this.U.parentNode.removeChild(this.U);
        this.pa && this.pa.removeChild(this)
    };
    g.ce = function(a) {
        a.Kd(this);
        this.ua.push(a)
    };
    g.Ok = function(a, b) {
        if (0 > b || this.ua.length < b) throw Error("Invalid index");
        a.Kd(this);
        this.ua.splice(b, 0, a)
    };
    g.removeChild = function(a) {
        for (var b = 0; b < this.ua.length; ++b)
            if (this.ua[b] == a) {
                this.ua[b].Kd(null);
                this.ua.splice(b, 1);
                break
            }
    };
    g.ia = function() {
        return this.ua
    };
    g.Wq = function(a) {
        this.Rk(a, 0)
    };
    g.Vq = function(a) {
        this.Rk(a, 1)
    };
    g.Rk = function(a, b) {
        var c = this.getParent();
        if (!c) throw Error("Node must have a parent to have siblings.");
        var d = cc(c.ia(), this);
        if (-1 == d) throw Error("Node not child of parent.");
        c.Ok(a, d + b)
    };
    g.Xs = function() {
        var a = [];
        this.tm(a);
        return a
    };
    g.tm = function(a) {
        a.push(this);
        for (var b = 0; b < this.ia().length; ++b) this.ia()[b].tm(a)
    };
    g.J = function() {
        this.Eh || (this.Eh = this.gt());
        return this.Eh
    };
    g.getBoundingClientRect = function() {
        this.wf || (this.wf = this.Ct());
        return this.wf
    };
    g.gt = function() {
        var a = this.getBoundingClientRect(),
            b = this.H("position");
        if ("fixed" == b) return Nn(this.Mc(), a);
        if (!this.getParent()) return a;
        var c = this.getParent().Qf(0, "absolute" == b);
        if (c) var c = c.J(),
            d = c.left,
            c = c.right,
            a = a.left >= c || a.right <= d ? null : new Te(a.top, Math.min(a.right, c), a.bottom, Math.max(a.left, d));
        a && (b = this.getParent().Qf(1, "absolute" == b)) && (c = b.J(), b = c.top, c = c.bottom, a = a.top >= c || a.bottom <= b ? null : new Te(Math.max(a.top, b), a.right, Math.min(a.bottom, c), a.left));
        return a && this.Pf() && "fixed" ==
            this.Pf().H("position") ? Nn(this.Mc(), a) : a || new Te(0, 0, 0, 0)
    };
    g.ln = function(a) {
        var b = this.Pf();
        if (!b || "relative" == b.H("position")) return !1;
        if (null != a)
            for (var c = this; null !== c;) {
                var d = c.J(),
                    d = (d.right - d.left) * (d.bottom - d.top);
                if (d > a) return !1;
                if (c == b) break;
                c = c.getParent()
            }
        return !0
    };
    g.Pf = function() {
        return ba(this.pi) ? this.pi : this.pi = this.vt()
    };
    g.vt = function() {
        var a = this.H("position");
        if ("fixed" == a) return this;
        var b = this.getParent();
        return b && "BODY" != this.A().tagName ? (b = b.Pf()) || "absolute" != a && "relative" != a ? b : this : null
    };
    g.Qf = function(a, b) {
        if (ba(this.xf[a])) return this.xf[a];
        this.xf[a] = this.Gt(a, b);
        return this.xf[a]
    };
    g.Gt = function(a, b) {
        var c = this.H("position"),
            d = this.hv(a);
        switch (c) {
            case "fixed":
                if (d) return this;
                break;
            case "static":
            case "":
                if (d && !b) return this;
                if (this.getParent()) return this.getParent().Qf(a, b);
                break;
            case "absolute":
            case "relative":
                if (d) return this;
                if (this.getParent()) return this.getParent().Qf(a, "absolute" == c);
                break;
            default:
                window.console.error("Unknown position value.")
        }
        return null
    };
    g.hv = function(a) {
        switch (a) {
            case 0:
                return "hidden" == this.H("overflow") || "scroll" == this.H("overflow") || "hidden" == this.H("overflow-x") || "scroll" == this.H("overflow-x");
            case 1:
                return "hidden" == this.H("overflow") || "scroll" == this.H("overflow") || "hidden" == this.H("overflow-y") || "scroll" == this.H("overflow-y");
            default:
                throw "Unknown pageAxis: " + a;
        }
    };
    g.ys = function(a) {
        var b = this.Sb().createElement("div");
        b.style.width = "100%";
        b.style.height = a + "px";
        return b
    };
    g.zr = function() {
        var a = this.U.scrollHeight,
            b = this.U.clientHeight,
            c = this.ys(2 * b + 1E6);
        this.U.appendChild(c);
        a = this.U.scrollHeight - a <= this.U.clientHeight - b;
        this.U.removeChild(c);
        return a
    };
    g.tn = function() {
        return null !== this.fg ? this.fg : "1" != this.H("opacity") || this.getParent() && !this.getParent().tn() ? this.fg = !1 : this.fg = !0
    };
    g.aj = function() {
        var a;
        a = this.J();
        a = new Te(Math.max(a.top, 0), Math.max(a.right, 0), Math.max(a.bottom, 0), Math.max(a.left, 0));
        return a.right <= a.left || a.bottom <= a.top ? !0 : this.rn()
    };
    g.rn = function() {
        return null !== this.Ge ? this.Ge : this.getParent() && this.getParent().rn() || "0" == this.H("opacity") || "none" == this.H("display") || "hidden" == this.H("visibility") || this.U.tagName && "input" == this.U.tagName.toLowerCase() && this.U.type && "hidden" == this.U.type ? this.Ge = !0 : this.Ge = !1
    };
    g.dg = function() {
        if (null !== this.Cb) return this.Cb;
        if ("BODY" == this.A().tagName) {
            var a;
            a = this.Mc();
            a = $d(a || window);
            return this.Cb = "hidden" != this.H("overflow-y") || this.A().clientHeight > a.height
        }
        return "100%" == this.A().style.height ? this.Cb = !this.getParent() || this.getParent().dg() : this.getParent() && !this.getParent().dg() ? this.Cb = !1 : this.Cb = this.zr()
    };
    g.Ct = function() {
        if (this.U.getBoundingClientRect) {
            var a = this.U.getBoundingClientRect();
            return new Te(a.top, a.right, a.bottom, a.left)
        }
        a = this.Sb().createRange();
        a.selectNodeContents(this.U);
        a = a.getBoundingClientRect();
        return new Te(a.top, a.right, a.bottom, a.left)
    };
    g.Su = function() {
        return this.Ru() && !this.lu()
    };
    g.Ru = function() {
        var a = this.H("background-color");
        return a ? Sn(a) : !0
    };
    g.lu = function() {
        var a = this.H("background-image");
        return !(!a || "none" == a)
    };
    g.Pu = function(a) {
        for (a = a.getParent(); a && a != this;) a = a.getParent();
        return a == this
    };
    g.Zf = function() {
        var a = this.H("position");
        return "absolute" == a || "relative" == a
    };
    g.He = function(a) {
        return a(this) ? !0 : this.getParent() ? this.getParent().He(a) : !1
    };
    g.fv = function(a) {
        return this.He(function(b) {
            return !!b.A().tagName && b.A().tagName == a
        })
    };
    g.ev = function(a) {
        return this.He(function(b) {
            return !!b.A().id && b.A().id.match(a)
        })
    };
    g.dv = function(a) {
        return this.He(function(b) {
            return b.Bv(a)
        })
    };
    g.Bv = function(a) {
        for (var b = this.wi(), c = 0; c < b.length; ++c)
            if (b[c].match(a)) return !0;
        return !1
    };
    g.Yu = function() {
        var a = this.H("display");
        return !a || "inline" == a
    };
    g.$u = function() {
        var a = this.H("float");
        return "left" == a || "right" == a
    };
    g.H = function(a) {
        return 1 != this.U.nodeType ? null : Xe(this.U, a)
    };
    g.wi = function() {
        var a = this.A().className;
        return a && ia(a.split) ? wb(a).split(/\s+/) : []
    };
    var Sn = function(a) {
            return "transparent" == a || "rgba" == a.substring(0, 4) && (a = a.split(","), 4 == a.length && 0 == parseInt(a[3], 10)) ? !0 : !1
        },
        Tn = function(a, b, c) {
            if (c && 3 == a.nodeType ? !/\S/.test(a.data) : 1 != a.nodeType && 3 != a.nodeType || a.tagName && ("SCRIPT" == a.tagName.toUpperCase() || "STYLE" == a.tagName.toUpperCase())) return null;
            var d = new Rn(a),
                e;
            if (!(e = !b))
                if (1 != a.nodeType) e = !1;
                else {
                    e = a;
                    var f = Xe(e, "position");
                    "HTML" == e.tagName || "fixed" == f || "auto" != Xe(e, "z-index") && ("absolute" == f || "relative" == f) ? e = !0 : (e = Xe(e, "opacity"),
                        e = "1" != e && "" != e ? !0 : !1)
                }
            e && (e = b, b = new Qn(a), e && e.ce(b));
            d.Ld(b);
            for (e = 0; e < a.childNodes.length; ++e)(f = Tn(a.childNodes[e], b, c)) && d.ce(f);
            return d
        },
        Un = [],
        Vn = function() {
            dc(Un, function(a) {
                a.Eh = null;
                a.wf = null
            })
        };
    var Wn = function() {
        this.bo = [];
        this.$n = new Pn
    };
    Wn.prototype.qf = function(a) {
        this.bo.push(a);
        this.$n.add(ma(a))
    };
    Wn.prototype.Tb = function() {
        return this.bo
    };
    Wn.prototype.contains = function(a) {
        return this.$n.contains(ma(a))
    };
    var Xn = function(a) {
        Wn.call(this);
        this.bb = a
    };
    B(Xn, Wn);
    Xn.prototype.vo = function(a) {
        for (var b = a.J(), c = a.rb(), d = 0; d < this.Tb().length; ++d) {
            var e = this.Tb()[d],
                f = e.J();
            if (Mn(f, b) && (f = e.rb(), c && f && (f.sn(c) || f == c && !e.Pu(a) && this.Qu(e, a)))) return !0
        }
        return !1
    };
    Xn.prototype.Qu = function(a, b) {
        if (a.Zf() && !b.Zf()) return !0;
        if (!a.Zf() && b.Zf()) return !1;
        var c = this.bb.map.get(ma(b)),
            d = this.bb.map.get(ma(a));
        return c && d && c.end.Ba() < d.start.Ba() ? !0 : !1
    };
    var Yn = function(a, b, c) {
        var d = new Xn(b);
        (b = c) && dc(b.Tb(), function(a) {
            d.qf(a)
        });
        dc(a, function(a) {
            a.aj() || a.Su() || d.qf(a)
        });
        return d
    };
    var Zn = function(a, b, c) {
        this.U = a;
        this.Hy = b;
        this.Xf = c
    };
    Zn.prototype.Lc = function() {
        return this.U
    };
    Zn.prototype.Rf = function() {
        return this.Hy
    };
    Zn.prototype.Ba = function() {
        return this.Xf
    };
    var $n = function(a, b, c) {
        var d = new Zn(a, 0, b++);
        c.Z.push(d);
        for (var e = 0; e < a.ia().length; ++e) b = $n(a.ia()[e], b, c);
        e = new Zn(a, 1, b++);
        c.Z.push(e);
        c.map.set(ma(a), {
            start: d,
            end: e
        });
        return b
    };
    var ao = function(a) {
        Wn.call(this);
        this.bb = a
    };
    B(ao, Wn);
    ao.prototype.Ht = function() {
        return this.bb
    };
    ao.prototype.Wt = function(a) {
        for (var b = 0, c = null, d = 0; d < this.Tb().length; ++d) {
            var e = this.bb.map.get(ma(this.Tb()[d]));
            e.end.Ba() < a && e.end.Ba() > b && (c = e, b = e.end.Ba())
        }
        return c
    };
    var bo = function(a, b, c) {
        Rn.call(this, a.A());
        this.Kd(a);
        this.Ld(a.rb().Or(c));
        this.yw = b
    };
    B(bo, Rn);
    bo.prototype.J = function() {
        var a, b = this.Mc();
        a = this.getParent().A();
        a = b.getComputedStyle(a, this.yw);
        switch (a.position) {
            case "absolute":
                var c = this.getParent().J(),
                    b = c.top + parseInt(a.top, 10),
                    c = c.left + parseInt(a.left, 10),
                    d = parseInt(a.width, 10);
                a = parseInt(a.height, 10);
                return b = new Te(b, c + d, b + a, c);
            case "fixed":
                return d = parseInt(a.width, 10), a = parseInt(a.height, 10), b = new Te(0, d, a, 0);
            default:
                throw a.position + " not supported yet in pseudo element";
        }
    };
    var eo = function(a) {
            var b = new Wn;
            dc(a, function(a) {
                var d = b;
                1 == a.A().nodeType && (co(a, ":before", d), co(a, ":after", d))
            });
            return b
        },
        co = function(a, b, c) {
            if (":before" == b || ":after" == b) {
                var d = Ye(a.A(), "backgroundColor"),
                    e;
                e = a.Mc();
                if ((e = e.getComputedStyle(a.A(), b)) && e.backgroundColor) {
                    var f = e.backgroundColor;
                    f == d || Sn(f) || "absolute" != e.position && "fixed" != e.position || (d = /^-?\d+$/.test(e.zIndex) ? parseInt(e.zIndex, 10) : 0, c.qf(new bo(a, b, d)))
                }
            }
        };
    var fo = function(a, b) {
        this.Cv = a;
        this.Uv = b
    };
    fo.prototype.Et = function() {
        return this.Cv
    };
    fo.prototype.Ft = function() {
        return this.Uv
    };
    var go = function(a) {
        ao.call(this, a)
    };
    B(go, ao);
    go.prototype.vo = function(a) {
        var b = a.J(),
            c = a.rb();
        a = a.ln();
        for (var d = 0; d < this.Tb().length; ++d) {
            var e = this.Tb()[d].rb();
            if ((a || !c || !e || !c.sn(e)) && Mn(this.Tb()[d].J(), b)) return !0
        }
        return !1
    };
    var ho = "IMG IFRAME HR EMBED OBJECT VIDEO INPUT BUTTON".split(" "),
        io = function(a) {
            if (a.aj()) return !1;
            var b = a.A();
            return 3 == b.nodeType ? (a = Tb(b.data, a.Sb()), /\S/.test(a) ? !0 : !1) : b.tagName && (a = b.tagName.toUpperCase(), hc(ho, a)) ? !0 : !1
        },
        lo = function(a) {
            return jo(a) && a.He(function(a) {
                switch (a.A().tagName) {
                    case "H1":
                    case "H2":
                    case "H3":
                    case "H4":
                    case "H5":
                    case "H6":
                        return !0
                }
                var c;
                if (c = jo(a)) a: {
                    c = a.wi();
                    for (var d = 0; d < c.length; ++d)
                        if (c[d].match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !c[d].match(/subtitle/)) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                return c && 5 <= ko(a)
            })
        },
        jo = function(a) {
            var b = a.A();
            if (3 == b.nodeType) return io(a);
            for (var b = !1, c = 0; c < a.ia().length; ++c) {
                if (!a.ia()[c].Yu()) return !1;
                jo(a.ia()[c]) && (b = !0)
            }
            return b
        },
        ko = function(a, b) {
            if (b && !b(a)) return 0;
            if (3 == a.A().nodeType) return a.A().length;
            for (var c = 0, d = 0; d < a.ia().length; ++d) c += ko(a.ia()[d], b);
            return c
        };
    var mo = function(a, b, c) {
            this.rc = a;
            this.ob = c || null;
            this.bu = this.wr();
            this.ii = [];
            this.Ts = [];
            this.mp = b;
            this.Iv()
        },
        no = function(a) {
            return (a = a.document.body) ? Tn(a) : null
        },
        oo = function(a, b) {
            var c = a.id;
            return !!c && !!c.indexOf && "function" === typeof c.indexOf && 0 === c.indexOf(b)
        };
    g = mo.prototype;
    g.mg = function(a) {
        return this.Fv(a) || this.Gv(a) || oo(a, "google_ads_frame") || oo(a, "aswift_")
    };
    g.lw = function(a, b, c) {
        return 0 < c ? !this.Ou(a, b, c) : !this.Nu(a, b)
    };
    g.jv = function(a, b) {
        return this.vn(null, a, b)
    };
    g.Ou = function(a, b, c) {
        b = b ? b.J().bottom : null;
        a = a.J().top;
        return this.vn(b, a, c)
    };
    g.vn = function(a, b, c) {
        for (var d = 0; d < this.ii.length; d++) {
            var e = this.ii[d].J();
            if (null !== a && (Math.abs(e.top - a) < c || Math.abs(e.bottom - a) < c) || Math.abs(e.top - b) < c || Math.abs(e.bottom - b) < c) return !0
        }
        return !1
    };
    g.Nu = function(a, b) {
        return this.Mn(a.Wa()) || !!b && this.Nn(b.Wa())
    };
    g.Mn = function(a) {
        if (this.mg(a)) return !0;
        for (var b = 0; b < a.children.length; b++) {
            var c = a.children[b];
            if ("SCRIPT" != c.tagName) return this.Mn(c)
        }
        return !1
    };
    g.Nn = function(a) {
        if (this.mg(a)) return !0;
        for (var b = a.children.length - 1; 0 <= b; b--) {
            var c = a.children[b];
            if ("SCRIPT" != c.tagName) return this.Nn(c)
        }
        return !1
    };
    g.Iv = function() {
        this.mp && (this.mp = !1, this.ob || (this.ob = no(this.rc)), this.ob && this.qm(this.ob, this.ii, this.Ts))
    };
    g.qm = function(a, b, c) {
        1 === a.A().nodeType && this.mg(a.Wa()) && (b.push(a), this.kv(a) && c.push(a));
        a = a.ia();
        for (var d = 0; d < a.length; d++) this.qm(a[d], b, c)
    };
    g.Fv = function(a) {
        return "INS" == a.tagName && Yg.test(a.className)
    };
    g.kv = function(a) {
        var b = a.Wa(),
            b = "IFRAME" == b.tagName && (oo(b, "google_ads_frame") || oo(b, "aswift_"));
        if (!b) return !1;
        b = a.J();
        a = b.right - b.left;
        b = b.bottom - b.top;
        return !(em[a + "x" + b] && 50 > b)
    };
    g.Gv = function(a) {
        var b = a.id;
        return this.bu[b] ? !0 : "DIV" == a.tagName && 0 == b.indexOf("div-gpt-ad")
    };
    g.wr = function() {
        var a = {},
            b = this.rc.googletag;
        try {
            if (b && "function" == typeof b.pubads)
                for (var c = b.pubads().getSlots(), b = 0; b < c.length; b++) {
                    var d = c[b].getSlotElementId();
                    a[d] = !0
                }
        } catch (e) {
            R("ladd_evt", {
                ok: 0,
                err: e.toString()
            }, .1)
        }
        return a
    };
    var po = /^H[1-6]$/,
        qo = {
            padding: "0",
            margin: "0",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            position: "static",
            "float": "none",
            height: "auto"
        },
        ro = function(a) {
            R("ladd_evt", a, .1)
        },
        yp = function(a, b, c, d, e) {
            var f = Ko(a);
            if (!f || 120 > f) return Lo(a), null;
            b = b ? qa(Ro, a) : function() {
                return !0
            };
            c = new rp(a, c, d, e, b);
            c = c.ym();
            return c[0] ? c[0] : (Lo(a), null)
        },
        zp = function(a, b, c, d, e) {
            e = e || function() {
                return !0
            };
            a = new rp(a, b, c, d, e);
            a = a.ym();
            b = [];
            for (c = 0; c < a.length; c++) b.push(a[c].Wa());
            return b
        },
        Ko = function(a) {
            a = a.document.body;
            return a.getBoundingClientRect().width
        },
        Ap = function(a, b) {
            return null == a || null == b ? !1 : a >= .9 * b && a <= 1.05 * b
        },
        Bp = function(a) {
            a.style.transition = "height 1s";
            a.style.WebkitTransition = "height 1s";
            a.style.MozTransition = "height 1s"
        },
        Ro = function(a, b, c) {
            return !$k(c.getBoundingClientRect().bottom, a) && !$k(b.getBoundingClientRect().top, a)
        },
        Cp = function(a, b) {
            var c = a.document.createElement(b);
            X(c, qo);
            return c
        },
        Dp = function(a, b, c) {
            a = a.J();
            b = b.J();
            return c ? a.top < b.bottom && b.bottom < a.bottom && a.left < b.right && b.left < a.right : a.top < b.top && b.top < a.bottom && a.left <
                b.right && b.left < a.right
        },
        Lo = function(a) {
            var b = Sk(a),
                c = Ko(a);
            ro({
                ok: 0,
                ph: b,
                pw: c,
                url: Ep(a)
            })
        },
        Ep = function(a) {
            return a.location.href && a.location.href.substring ? a.location.href.substring(0, 200) : ""
        },
        Fp = function(a, b) {
            var c = a ? a.J().top : 2147483647,
                d = b ? b.J().top : 2147483647;
            return c - d
        },
        rp = function(a, b, c, d, e) {
            this.rc = a;
            this.jj = b;
            this.Kn = c;
            this.Tv = d;
            this.ob = no(this.rc);
            this.hh = 0 < d && this.ob ? new mo(a, !0, this.ob) : new mo(a, !1);
            this.ao = [];
            this.ob && this.Fm(this.ob, this.ao);
            this.uw = e;
            if (a = Ko(this.rc)) this.kd = a, this.Jc = [], this.Vs()
        };
    rp.prototype.ym = function() {
        return this.Jc
    };
    rp.prototype.Vs = function() {
        this.Jc = [];
        var a = this.rc.document.body;
        if (a) {
            for (var a = [{
                    Wp: this.ob,
                    depth: 0
                }], b = 0, c = 0; 0 < a.length && this.Jc.length < this.jj;) {
                var d = a.pop();
                if (d.depth > b) {
                    if (this.Jc.length >= this.jj) return;
                    c = 0
                }
                c >= this.Kn || (c += this.Uy(d, a), b = d.depth)
            }
            this.Jc.sort(Fp)
        }
    };
    rp.prototype.Uy = function(a, b) {
        for (var c = a.Wp.ia(), d = null, e = 0, f = 0; f < c.length; f++) {
            var h = c[f];
            if (1 == h.A().nodeType && "none" !== h.H("display")) {
                var k;
                if (k = d) a: {
                    k = h;
                    var l = d,
                        m = this.kd,
                        n = this.hh,
                        q = this.ao,
                        t = this.Tv;
                    if (l) {
                        var w = l.H("position");
                        if ("absolute" == w || "fixed" == w) {
                            k = !1;
                            break a
                        }
                    }!(w = "none" == k.H("display")) && (w = l) && (w = l.Wa().tagName, w = po.test(w));
                    if (w) k = !1;
                    else if (w = k.J().getWidth(), !Ap(w, m) || l && !Ap(l.J().getWidth(), m)) k = !1;
                    else {
                        for (m = 0; m < q.length; m++)
                            if (l && Dp(q[m], l, !0) || Dp(q[m], k, !1)) {
                                k = !1;
                                break a
                            }
                        k =
                            n.lw(k, l, t) ? !0 : !1
                    }
                }
                if (k && this.uw(h, d) && (this.Jc.push(h), e++, this.Jc.length >= this.jj || e >= this.Kn)) break;
                k = h;
                d = this.kd;
                "none" == k.H("display") || "hidden" == k.H("visibility") || "fixed" == k.H("position") ? d = !1 : (k = k.J().getWidth(), d = (null == k || null == d ? 0 : k >= .9 * d) ? !0 : !1);
                d && b.push({
                    Wp: h,
                    depth: a.depth + 1
                });
                d = h
            }
        }
        return e
    };
    rp.prototype.Fm = function(a, b) {
        var c;
        (c = io(a)) || (c = a.H("float"), c = !!c && "none" !== c);
        c && b.push(a);
        c = a.ia();
        for (var d = 0; d < c.length; d++) this.Fm(c[d], b)
    };
    var Jp = function(a, b) {
            var c = b || document,
                d = null,
                e = a.getId();
            if (e)
                if (d = c.getElementById(e)) d = [d];
                else return [];
            if (e = a.Tt())
                if (d) {
                    for (var f = [], h = 0; h < d.length; ++h) d[h].tagName && d[h].tagName.toUpperCase() == e.toUpperCase() && f.push(d[h]);
                    d = f
                } else {
                    d = c.getElementsByTagName(e);
                    e = [];
                    for (f = 0; f < d.length; ++f) e.push(d[f]);
                    d = e
                }
            if ((e = a.jt()) && 0 < e.length)
                if (d) {
                    c = e;
                    e = [];
                    for (f = 0; f < d.length; ++f) Gp(d[f], c) && e.push(d[f]);
                    d = e
                } else {
                    if (!c.body) return [];
                    d = Hp(e, c.body)
                }
            c = a.It();
            if (v(c) && d)
                if (0 > c && (c += d.length), d.length > c) d = [d[c]];
                else return [];
            c = a.Kt();
            if (v(c) && d) {
                e = [];
                for (f = 0; f < d.length; f++) {
                    for (var h = [], k = d[f].getElementsByTagName("p"), l = 0; l < k.length; ++l) {
                        var m = Ip(k[l]);
                        100 <= m && h.push(k[l])
                    }
                    0 > c && (c += h.length);
                    0 <= c && c < h.length && e.push(h[c])
                }
                d = e
            }
            c = a.zt();
            if (ba(c) && d) switch (c) {
                case 0:
                    return d.slice(1);
                case 1:
                    return d.slice(0, d.length - 1);
                case 2:
                    return d.slice(1, d.length - 1)
            }
            return d ? d : []
        },
        Kp = function(a) {
            return "INS" == a.tagName && Gp(a, ["adsbygoogle-placeholder"])
        },
        Ip = function(a) {
            if (3 == a.nodeType) return a.length;
            if (1 != a.nodeType ||
                "SCRIPT" == a.tagName) return 0;
            for (var b = 0, c = 0; c < a.childNodes.length; ++c) b += Ip(a.childNodes[c]);
            return b
        },
        Hp = function(a, b) {
            if (b.getElementsByClassName) {
                for (var c = b.getElementsByClassName(a.join(" ")), d = [], e = 0; e < c.length; ++e) d.push(c[e]);
                return d
            }
            c = [];
            Gp(b, a) && c.push(b);
            for (e = 0; e < b.childNodes.length; ++e) 1 == b.childNodes[e].nodeType && (d = b.childNodes[e], c = c.concat(Hp(a, d)));
            return c
        },
        Gp = function(a, b) {
            for (var c = a.className ? a.className.split(/\s+/) : [], d = {}, e = 0; e < c.length; ++e) d[c[e]] = !0;
            for (e = 0; e < b.length; ++e)
                if (!d[b[e]]) return !1;
            return !0
        };
    new Pn(["comments"]);
    new Pn(["allcomments"]);
    new Pn(["post-container", "post", "type-post"]);
    var Lp = function(a, b) {
        var c = a.createElement("div"),
            d = c.style;
        d.textAlign = "center";
        d.width = "100%";
        d.height = "auto";
        d.clear = b.Hr ? "both" : "none";
        var d = a.createElement("ins"),
            e = d.style;
        e.display = "block";
        e.margin = "auto";
        e.backgroundColor = "transparent";
        b.Ip && (e.marginTop = b.Ip);
        b.cl && (e.marginBottom = b.cl);
        c.appendChild(d);
        return {
            $h: c,
            lh: d
        }
    };
    var Mp = {
        BODY: {
            qa: [1, 2],
            fb: !1,
            vb: 2,
            ub: 4
        },
        HEADER: {
            qa: [0, 3, 1, 2],
            fb: !1,
            vb: 1,
            ub: 3
        },
        NAV: {
            qa: [0, 3],
            fb: !1,
            vb: 1,
            ub: 3
        },
        H1: {
            qa: [0],
            fb: !1,
            vb: 1,
            ub: 2
        },
        IMG: {
            qa: [0, 3],
            fb: !0,
            vb: 0,
            ub: 1
        },
        DIV: {
            qa: [0, 3, 1, 2],
            fb: !0,
            vb: 0,
            ub: 1
        },
        TABLE: {
            qa: [0, 3],
            fb: !0,
            vb: 0,
            ub: 1
        },
        TD: {
            qa: [1, 2],
            fb: !0,
            vb: 0,
            ub: 1
        },
        ASIDE: {
            qa: [0, 3, 1, 2],
            fb: !0,
            vb: 0,
            ub: 1
        },
        LI: {
            qa: [1, 2],
            fb: !0,
            vb: 0,
            ub: 1
        },
        SECTION: {
            qa: [0, 3, 1, 2],
            fb: !0,
            vb: 0,
            ub: 1
        }
    };
    var Np = function(a, b) {
        this.yh = a;
        this.Bg = b;
        this.wn = this.Ym = !1
    };
    Np.prototype.build = function() {
        return new Op(this)
    };
    var Op = function(a) {
        this.yh = a.yh;
        this.Bg = a.Bg;
        this.Ym = a.Ym;
        this.wn = a.wn;
        this.sl = !1;
        this.mx = 0;
        this.Qb = this.dl = this.Jp = null;
        this.so = ""
    };
    g = Op.prototype;
    g.bj = function() {
        if (this.qb()) {
            var a = this.qb().Wa();
            return Kp(a)
        }
        return !1
    };
    g.Mf = function() {
        return this.yh
    };
    g.qb = function() {
        return this.Mf().node || null
    };
    g.Ai = function() {
        return this.Bg
    };
    g.yx = function(a) {
        this.sl = a
    };
    g.kt = function() {
        return this.sl
    };
    g.Xt = function() {
        return null != this.Jp ? this.Jp : "10px"
    };
    g.ft = function() {
        return null != this.dl ? this.dl : "10px"
    };
    g.wm = function() {
        return {
            Ip: this.Xt(),
            cl: this.ft(),
            Hr: this.kt()
        }
    };
    g.or = function() {
        var a = this.qb();
        if (!a) return null;
        if (this.Qb) return this.Qb;
        var b = this.St(),
            c;
        c = a.Sb();
        var d = this.wm(),
            d = Lp(c, d);
        d.$h.className = "googlepublisherpluginad";
        var e = d.lh;
        e.style.display = "inline-block";
        e.style.boxSizing = "border-box";
        e.style.width = "100%";
        e.style.height = "100px";
        e.style.backgroundColor = "#f60";
        e.style.border = "#000 solid 1px";
        b && (e.style.fontFamily = "sans-serif", e.style.fontSize = "50px", e.style.fontWeight = "bold", e.style.color = "#000", e.style.textAlign = "center", c = c.createTextNode(b),
            e.appendChild(c));
        c = Tn(d.$h);
        if (!c) throw Error("HtmlNode tree could not be built from wrapperDiv.");
        this.Qb = c;
        c = a;
        b = this.Bg;
        d = this.Qb;
        e = c.getParent();
        switch (b) {
            case 0:
                if (!e) throw Error("Can't insert before a parentless node.");
                c.Wq(d);
                e.A().insertBefore(d.A(), c.A());
                d.Ld(e.rb());
                break;
            case 3:
                if (!e) throw Error("Can't insert after a parentless node.");
                c.Vq(d);
                c.A().parentNode.insertBefore(d.A(), c.A().nextSibling);
                d.Ld(e.rb());
                break;
            case 1:
                c.Ok(d, 0);
                c.A().insertBefore(d.A(), c.A().firstChild);
                d.Ld(c.rb());
                break;
            case 2:
                c.ce(d), c.A().appendChild(d.A()), d.Ld(c.rb())
        }
        Vn();
        this.bj() && (this.so = a.A().style.display, a.A().style.display = "block");
        return this.Qb
    };
    g.Lo = function() {
        if (this.Qb) {
            this.Qb.Mw();
            this.Qb = null;
            if (this.bj()) {
                var a = this.qb().A();
                a.style.display = this.so
            }
            Vn()
        }
    };
    g.St = function() {
        switch (this.mx) {
            case 4:
                return "TOPMOST";
            case 2:
                return "TOP";
            case 3:
                return "BOTTOM";
            case 5:
                return "BOTTOMMOST";
            default:
                return ""
        }
    };
    var Pp = function(a, b) {
            var c = a.map.get(ma(b.qb()));
            if (!c) return -1;
            switch (b.Ai()) {
                case 0:
                    return c.start.Ba();
                case 1:
                    return c.start.Ba() + 1;
                case 2:
                    return c.end.Ba();
                case 3:
                    return c.end.Ba() + 1
            }
            return -1
        },
        Qp = function(a, b) {
            var c = a.map.get(ma(b.qb()));
            if (!c) return -1;
            switch (b.Ai()) {
                case 0:
                    return c.start.Ba() - .1;
                case 3:
                    return c.end.Ba() + .1;
                case 1:
                    return c.start.Ba() + .1;
                case 2:
                    return c.end.Ba() - .1
            }
            return -1
        };
    var Rp = function() {};
    var Sp = function() {
            this.Li = [];
            this.Ih = [];
            this.ik = []
        },
        Tp = [/cookie/, /(^|(-|_))sticky((-|_)|$)/],
        Up = [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/],
        Vp = [/(^|(-|_))slider((-|_)|$)/],
        Wp = ["A", "FORM", "BUTTON"];
    Sp.prototype.Tq = function(a) {
        jc(this.Li, a);
        return this
    };
    Sp.prototype.Pk = function(a) {
        jc(this.Ih, a);
        return this
    };
    Sp.prototype.Xq = function(a) {
        jc(this.ik, a);
        return this
    };
    Sp.prototype.Kc = function(a) {
        if (a = a.qb()) {
            for (var b = 0; b < this.ik.length; ++b)
                if (a.fv(this.ik[b])) return [6];
            for (b = 0; b < this.Li.length; ++b)
                if (a.ev(this.Li[b])) return [6];
            for (b = 0; b < this.Ih.length; ++b)
                if (a.dv(this.Ih[b])) return [6]
        }
        return []
    };
    var Xp = function(a) {
        this.bb = a
    };
    Xp.prototype.Kc = function(a) {
        var b = Math.floor(Qp(this.bb, a));
        if (0 >= b) return [10];
        b = this.bb.Z[b];
        b = 0 == b.Rf() ? b.Lc().J().top : b.Lc().J().bottom;
        return $k(b, a.qb().Mc()) ? [10] : []
    };
    var Yp = function(a) {
        this.Mj = a;
        this.Hf = [];
        this.oh = []
    };
    g = Yp.prototype;
    g.pf = function(a) {
        this.Hf.push(a);
        return this
    };
    g.be = function(a) {
        this.oh.push(a);
        return this
    };
    g.Kc = function(a) {
        var b = this.Ot(a);
        if (this.Mj && 0 < b.length) return b;
        jc(b, this.Pt(a));
        return b
    };
    g.Pt = function(a) {
        var b = [];
        if (0 < this.Hf.length) {
            for (var c = a.or(), d = 0; d < this.Hf.length; ++d) {
                var e = this.Hf[d].Of(c);
                jc(b, e);
                if (this.Mj && 0 < e.length) {
                    a.Lo();
                    break
                }
            }
            a.Lo()
        }
        return b
    };
    g.Ot = function(a) {
        for (var b = [], c = 0; c < this.oh.length; ++c) {
            var d = this.oh[c].Kc(a);
            jc(b, d);
            if (this.Mj && 0 < d.length) break
        }
        return b
    };
    var Zp = function(a) {
        this.uo = a
    };
    Zp.prototype.Of = function(a) {
        if (!a) return [];
        for (var b = 0; b < this.uo.length; ++b)
            if (this.uo[b].vo(a)) return [2];
        return []
    };
    var $p = function(a) {
        this.Ev = a
    };
    $p.prototype.Kc = function(a) {
        return (a = a.Mf()) && a.node && a.node.ln(this.Ev) ? [11] : []
    };
    var aq = function(a, b) {
        this.hh = a;
        this.Sv = b
    };
    aq.prototype.Of = function(a) {
        return a ? this.hh.jv(a.J().top, this.Sv) ? [8] : [] : [9]
    };
    var bq = function(a) {
        this.Tp = a
    };
    bq.prototype.Kc = function(a) {
        if (a.bj()) return [];
        a = Qp(this.Tp.Ht(), a);
        var b = this.Tp.Wt(a);
        if (!b) return [];
        var c = lo(b.start.Lc()),
            b = b.end.Ba();
        return c && 10 >= a - b ? [5] : []
    };
    var cq = function(a) {
        this.kd = a
    };
    cq.prototype.Of = function(a) {
        return a ? Ap(a.J().getWidth(), this.kd) ? [] : [4] : [9]
    };
    var dq = function() {};
    dq.prototype.Kc = function(a) {
        var b = a.qb();
        if (!b) return [12];
        if (60 < b.J().getHeight() || a.Mf().zh && !a.Mf().zh.fb || b.A().id) return [];
        a = b.wi();
        for (var b = b.Sb(), c = 0; c < a.length; ++c)
            if (1 == b.getElementsByClassName(a[c]).length) return [];
        return [13]
    };
    var eq = function() {};
    eq.prototype.Of = function(a) {
        return a && !a.aj() && a.tn() ? [] : [3]
    };
    var fq = function(a, b) {
        this.bb = a;
        this.Kw = b
    };
    fq.prototype.apply = function(a) {
        var b = Pp(this.bb, a),
            b = this.Kw.get(ma(this.bb.Z[b]));
        a.yx(b.Et() <= b.Ft())
    };
    var gq = function(a, b) {
        this.jx = a;
        this.er = b;
        this.nh = []
    };
    gq.prototype.Be = function() {
        for (var a; 0 == this.nh.length && (a = this.er.Be());) {
            var b = this.nh,
                c;
            c = [a];
            for (var d = this.jx, e = [], f = 0; f < c.length; ++f) {
                var h = c[f],
                    k = d,
                    l = e,
                    m = h.zh.qa,
                    n = h.node;
                if (n) {
                    var q = [],
                        t = n.getParent(),
                        k = n != k && t && t.dg(),
                        t = n.dg();
                    k && hc(m, 0) && q.push(0);
                    t && hc(m, 1) && q.push(1);
                    t && hc(m, 2) && (!hc(m, 1) || 0 < n.ia().length) && q.push(2);
                    k && hc(m, 3) && q.push(3);
                    for (m = 0; m < q.length; ++m) l.push((new Np(h, q[m])).build())
                }
            }
            c = e;
            jc(b, c)
        }
        return this.nh.shift() || null
    };
    var hq = function(a, b, c) {
        this.Ew = a;
        this.Kk = b;
        this.Jk = c;
        this.Jw = []
    };
    hq.prototype.Be = function() {
        for (var a; a = this.Ew.Be();)
            if (this.Kk && this.Kk.apply(a), this.Jk) {
                var b = this.Jk.Kc(a);
                if (0 == b.length) return a;
                this.Jw.push(new Rp(a, b))
            } else return a;
        return null
    };
    var iq = {
            0: !0,
            1: !0
        },
        jq = {
            2: !0,
            3: !0
        },
        kq = {
            3: !0
        },
        lq = function(a, b) {
            this.kd = a;
            this.Zn = b;
            this.pg = 0
        };
    lq.prototype.Be = function() {
        for (; this.pg < this.Zn.length; this.pg++) {
            var a = this.ct(this.Zn[this.pg]);
            if (a) {
                var b = a.node.J().getWidth();
                if (Ap(b, this.kd)) return this.pg++, a
            }
        }
        return null
    };
    lq.prototype.ct = function(a) {
        var b = a.Lc();
        if (1 != b.A().nodeType) return null;
        var c = Mp[b.Wa().tagName];
        if (!c) return null;
        a = this.Lt(a);
        var d = Ec(c);
        d.qa = [];
        for (var e = 0; e < c.qa.length; ++e) a[c.qa[e]] && d.qa.push(c.qa[e]);
        c = d;
        return {
            node: b,
            zh: c,
            identifier: {}
        }
    };
    lq.prototype.Lt = function(a) {
        return 0 == a.Rf() ? iq : 0 < a.Lc().ia().length ? jq : kq
    };
    var mq = function(a, b, c) {
        var d = a.document,
            e = d.body;
        if (!e) return null;
        d = Ko(a);
        if (null == d) return null;
        var f = Rk(a),
            h = Qk(a);
        if (null == f || null == h) return null;
        var k = Tn(e);
        if (!k) return null;
        var l = k.Xs();
        Un = l;
        var m = eo(l);
        (e = k.rb()) && e.qp(0);
        e = {
            map: new On,
            Z: []
        };
        $n(k, 0, e);
        var n;
        n = l;
        for (var q = new go(e), t = 0; t < n.length; ++t) io(n[t]) && q.qf(n[t]);
        n = q;
        for (var l = Yn(l, e, m), t = e, q = n, m = t, w = new On, x = 0, E = 0; E < m.Z.length; ++E) {
            var F = m.Z[E],
                z = F.Lc();
            1 == F.Rf() && z.$u() && (z = z.J().bottom, z > x && (x = z));
            w.set(ma(F), x)
        }
        m = w;
        w = new On;
        x = Number.MAX_VALUE;
        for (E = t.Z.length - 1; 0 <= E; --E) F = t.Z[E], z = F.Lc(), 0 == F.Rf() && q.contains(z) && (z = z.J().top, z < x && (x = z)), w.set(ma(F), x);
        q = w;
        t = new On;
        w = m.Bt();
        for (x = 0; x < w.length; ++x) {
            E = m.get(w[x]);
            F = q.get(w[x]);
            if (!v(F)) throw "No entry in minSubsequentTopBounds for terminal UID!";
            t.set(w[x], new fo(E, F))
        }
        m = t;
        q = new lq(d, e.Z);
        k = new gq(k, q);
        m = new fq(e, m);
        q = new Yp(!0);
        b && q.be(new Xp(e));
        q.be(new bq(n)).be(new dq).be((new Sp).Tq(Tp).Pk(Up).Pk(Vp).Xq(Wp)).be(new $p(f * h)).pf(new eq).pf(new cq(d)).pf(new aq(new mo(a, !0), c)).pf(new Zp([n,
            l
        ]));
        return new hq(k, m, q)
    };
    var nq = function(a) {
            var b = 0;
            try {
                a.top != a && (b |= 32), a.postMessage && a.getComputedStyle || (b |= 1)
            } catch (c) {
                b |= 32
            }
            return b
        },
        oq = function(a) {
            return a.replace(/\W+(.)/g, function(a, c) {
                return c.toUpperCase()
            })
        };
    var sq = function(a, b, c) {
            c = c || N;
            var d = c.document.createElement("div");
            J(d, {
                "background-color": b,
                opacity: "0.3"
            });
            d.className = "google_debug_highlighting_overlay";
            M(d, "click", qa(pq, c), void 0);
            b = c.getComputedStyle(a).position;
            switch (b) {
                case "relative":
                case "fixed":
                case "absolute":
                case "sticky":
                    b = qq;
                    break;
                default:
                    b = rq
            }
            b(a, d, c);
            return d
        },
        rq = function(a, b, c) {
            J(a, {
                position: "relative",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0"
            });
            qq(a, b, c)
        },
        qq = function(a, b) {
            J(b, {
                height: "100%",
                left: "0",
                position: "absolute",
                top: "0",
                width: "100%"
            });
            a.appendChild(b)
        },
        pq = function(a) {
            a = a.document.getElementsByClassName("google_debug_highlighting_overlay");
            if (a.length)
                for (var b = "0.3" == a[0].style.opacity, c = 0; c < a.length; c++) {
                    var d = a[c];
                    d.style.opacity = b ? "0.0001" : "0.3"
                }
        };
    var tq = function() {},
        uq = function() {};
    ea(uq);
    uq.prototype.Zc = function(a, b, c) {
        var d = new tq;
        d.X = b;
        d.za = !0;
        d.tagName = "div";
        d.Fc = [];
        d.mb = [];
        d.Ee = 1;
        d.te = !0;
        d.fj = 100;
        if (c.hash && (b = c.hash.split("?", 2), !(2 > b.length))) {
            b = b[1];
            b = b.split("&");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("=");
                if (2 == f.length) {
                    var h = decodeURIComponent(f[0]),
                        f = decodeURIComponent(f[1]);
                    switch (h) {
                        case "google_instream_tag_name":
                            d.tagName = f;
                            break;
                        case "google_instream_class_names":
                            0 < f.length && (d.Fc = f.split(","));
                            break;
                        case "google_instream_ccss":
                            h = f.split(";");
                            for (f = 0; f < h.length; f++) d.mb.push(h[f].split(":"));
                            break;
                        case "google_instream_page":
                            d.gc = f;
                            break;
                        case "google_ad_slot":
                            d.qh = f;
                            break;
                        case "google_instream_index":
                            h = parseInt(f, 10);
                            d.Ee = 0 <= h ? h : 1;
                            break;
                        case "google_instream_below_fold":
                            d.te = "0" != f && "false" != f;
                            break;
                        case "google_lr_animate":
                            d.bi = !!f;
                            break;
                        case "google_lr_height":
                            h = parseInt(f, 10);
                            d.fj = 0 < h ? h : -1;
                            break;
                        case "google_lr_apf":
                            d.Bn = "0" != f && "false" != f
                    }
                }
            }
        }
        b = Y(a);
        b.wasReactiveAdConfigReceived[24] = !0;
        d.ai = Ik(c, "google_ladder_rung_debug");
        d.In = 15;
        d.Hn = 2;
        d.ya = 4;
        c = d;
        c.ai ? vq(a, c) : wq(a, c)
    };
    uq.prototype.uc = function(a, b) {
        var c = Y(a);
        if (c.wasReactiveAdConfigReceived[24]) return !1;
        var d;
        var e = b;
        if (e) {
            d = new tq;
            var f = e.adClient;
            if (f) {
                u(f) && (d.X = f);
                d.za = !!e.adTest;
                (f = e.adSlotName) && u(f) && (d.qh = f);
                f = e.pubVars;
                ja(f) && (d.xa = f);
                (f = e.pageUrl) && u(f) && (d.gc = f);
                f = e.tagName;
                u(f) && (d.tagName = f);
                f = e.id;
                u(f) && (d.id = f);
                var h = e.classNames;
                d.Fc = [];
                if (r(h))
                    for (f = 0; f < h.length; f++) u(h[f]) && d.Fc.push(h[f]);
                h = e.containerCssStyling;
                d.mb = [];
                if (r(h))
                    for (f = 0; f < h.length; f++) {
                        var k = h[f];
                        ja(k) && u(k.property) && u(k.value) &&
                            d.mb.push([k.property, k.value])
                    }
                f = parseInt(e.insertionIndex, 10);
                d.Ee = 0 <= f ? f : 1;
                d.te = !!e.filterForArticlesBelowFold;
                d.ai = !!e.enableLadderRung;
                d.bi = !!e.enableLadderRungAnimation;
                d.In = parseInt(e.maxLadderRungPlacementsToCheck, 10);
                d.Hn = parseInt(e.maxLadderRungPlacementsPerLayer, 10);
                d.Tn = parseInt(e.minPxBetweenLadderRungAndExistingAds, 10);
                d.fj = parseInt(e.ladderRungHeight, 10);
                d.Bn = !!e.ladderRungUseAdPlacementFinder;
                e = e.reqSrc;
                d.ya = v(e) ? e : 1
            } else d = null
        } else d = null;
        if (!d) return !1;
        c.wasReactiveAdConfigReceived[24] = !0;
        c = a;
        d.ai ? vq(c, d) : wq(c, d);
        return !0
    };
    var wq = function(a, b) {
            var c, d = b;
            c = (c = d.tagName) ? c : "div";
            c = a.document.createElement(c);
            d.Fc && (c.className = d.Fc.join(" "));
            if (d.mb)
                for (var e = c, d = d.mb, f = 0; f < d.length; f++) {
                    var h = d[f];
                    if (2 == h.length) {
                        var k = oq(h[0]),
                            h = h[1];
                        e.style[k] = h
                    }
                }
            var f = a,
                d = b,
                e = c,
                k = {
                    tagName: d.tagName,
                    id: d.id,
                    Fc: d.Fc
                },
                h = f.document,
                l = new Ln;
            l.Ex(k.id);
            l.Qx(k.tagName);
            l.xx(k.classNames);
            l.Hx(k.occurrenceIndex);
            l.Ix(k.paragraphIndex);
            if (ba(k.ignoreMode)) switch (k.ignoreMode) {
                case "ignoreFirst":
                    l.Zj(0);
                    break;
                case "ignoreLast":
                    l.Zj(1);
                    break;
                case "ignoreFirstAndLast":
                    l.Zj(2)
            }
            k = Jp(l, h);
            if (d.te) {
                h = [];
                for (l = 0; l < k.length; l++) {
                    var m = k[l],
                        n = m.getBoundingClientRect(),
                        q = f.innerHeight || f.document.documentElement.clientHeight;
                    n.top >= q && h.push(m)
                }
                k = h
            }!k.length || d.Ee > k.length ? e = null : (d.Ee == k.length ? (d = k[k.length - 1], f = d.nextSibling) : f = d = k[d.Ee], (k = d.parentElement) ? (k.insertBefore(e, f), e = d) : e = null);
            if (e) {
                d = parseInt;
                window.getComputedStyle && e ? (f = parseInt(window.getComputedStyle(e).width, 10), f = 960 < f ? 960 : 120 > f ? 120 : parseInt(f, 10)) : f = 320;
                d = d(f, 10);
                f = parseInt;
                a: {
                    if (window.getComputedStyle && e) {
                        e = parseInt(window.getComputedStyle(e).height, 10);
                        if (120 > e) {
                            e = 120;
                            break a
                        }
                        if (200 > e) break a
                    }
                    e = 200
                }
                e = f(e, 10);
                e = {
                    width: d,
                    height: e,
                    ge: !1
                };
                e = xq(e, b, 24);
                yq(c, a, e)
            }
        },
        vq = function(a, b) {
            var c;
            if (b.Bn) {
                var d = a;
                c = b;
                var e = mq(d, c.te, c.Tn).Be();
                if (e) {
                    var f = c.bi,
                        d = Lp(d.document, e.wm());
                    f && Bp(d.lh);
                    if (f = e.qb()) {
                        var h = e.Ai(),
                            e = f.Wa(),
                            f = d.$h;
                        switch (h) {
                            case 0:
                                e.parentNode && e.parentNode.insertBefore(f, e);
                                break;
                            case 3:
                                if (h = e.parentNode) {
                                    var k = e.nextSibling;
                                    if (k && k.parentNode != h)
                                        for (; k &&
                                            8 == k.nodeType;) k = k.nextSibling;
                                    h.insertBefore(f, k)
                                }
                                break;
                            case 1:
                                e.insertBefore(f, e.firstChild);
                                break;
                            case 2:
                                e.appendChild(f)
                        }
                        Kp(e) && (e.style.display = "block");
                        d = d.lh
                    } else d = null;
                    d ? (c = zq(d, c), c = {
                        lf: d,
                        ih: c
                    }) : c = null
                } else c = null
            } else if (e = a, c = b, d = yp(e, c.te, c.In, c.Hn, c.Tn)) {
                f = d;
                if (h = f.A().parentNode) {
                    var l = e,
                        m = f,
                        n = c.bi,
                        k = Cp(l, "INS");
                    n && Bp(k);
                    for (var q = n = m, t = !1, w = null; q && !t;)
                        if (q = n.Mt()) w = q.getBoundingClientRect(), t = 0 < w.getWidth() || 0 < w.getHeight();
                    n = q;
                    e: {
                        if (n && (n = n.H("cssFloat"), "left" == n ||
                                "right" == n)) {
                            n = "inline-block";
                            break e
                        }
                        n = "block"
                    }
                    X(k, {
                        clear: "both",
                        display: n,
                        "float": "left",
                        height: "0",
                        overflow: "hidden",
                        "z-index": "2147483647"
                    });
                    n = m.Wa();
                    "TR" === n.tagName && (m = Cp(l, "TR"), l = Cp(l, "TD"), n = n.cells ? n.cells.length : 99999, l.setAttribute("colspan", n), m.appendChild(l), l.appendChild(k), k = m);
                    h.insertBefore(k, f.A());
                    f = k
                } else f = null;
                f ? (h = al(f) + Tk(e), k = Sk(e), l = Ko(e), ro({
                    ok: 1,
                    y: h,
                    ph: k,
                    pw: l,
                    url: Ep(e)
                })) : Lo(e);
                e = f;
                e ? (c = zq(d.Wa(), c), c = {
                    lf: e,
                    ih: c
                }) : c = null
            } else c = null;
            c && (d = c.ih, d.ge && d.width && X(c.lf,
                "width", d.width + "px"), d = xq(c.ih, b, 25), yq(c.lf, a, d));
            d = c ? c.lf : null;
            c = a;
            if (e = 4 == b.ya)
                if (d ? (e = sq(d, "#6600FF", c), e.className = "ladderdebugoverlay", N.console.log("Ladder rung slot was inserted."), N.console.log(d)) : N.console.log("No ladder rung slot was inserted."), c.document.body && Aq(d, c.document.body, c), c.document.querySelectorAll)
                    for (d = c.document.querySelectorAll("h1,h2,h3,h4,h5,h6"), e = 0; e < d.length; e++) sq(d[e], "#66CC33", c)
        },
        zq = function(a, b) {
            var c = parseInt,
                d;
            d = (d = a.getBoundingClientRect().width) ? 960 <=
                d ? 960 : 120 >= d ? 120 : d : 320;
            c = c(d, 10);
            d = parseInt(b.fj, 10);
            return 0 < c && 0 < d ? {
                width: c,
                height: d,
                ge: !1
            } : {
                width: c,
                height: 0,
                ge: !0
            }
        },
        xq = function(a, b, c) {
            var d = b.xa || {};
            d.google_ad_channel = d.google_ad_channel ? d.google_ad_channel + "+GoogleAutoInstream+GooglePageLevelAds" : "GoogleAutoInstream+GooglePageLevelAds";
            d.google_ad_client = b.X;
            b.za && (d.google_adtest = "on");
            b.qh && (d.google_ad_slot = b.qh);
            a.ge ? (d.google_ad_format = "auto", delete d.google_ad_width, delete d.google_ad_height) : (d.google_ad_width = a.width, d.google_ad_height =
                a.height, delete d.google_ad_format);
            b.gc && (d.google_page_url = b.gc);
            d.google_reactive_ad_format = c;
            d.google_pgb_reactive = b.ya;
            return d
        },
        yq = function(a, b, c) {
            var d;
            d = b.document.createElement("ins");
            d.className = "adsbygoogle";
            for (X(d, "display", "block"); a.children && a.children.length;) a = a.children[0];
            a.appendChild(d);
            An(d, c, b)
        },
        Aq = function(a, b, c) {
            for (var d = new mo(c, !1), e = 0; e < b.children.length; e++) {
                var f = b.children[e];
                f !== a && (d.mg(f) ? sq(f, "#CC3333", c) : Aq(a, f, c))
            }
        };
    var Bq = function() {},
        Cq = function() {};
    ea(Cq);
    Cq.prototype.Zc = function(a, b) {
        var c;
        c = new Bq;
        c.X = b;
        c.nf = 320;
        c.lb = 50;
        c.za = "on";
        c.ya = 4;
        var d = Y(a);
        d.wasReactiveAdConfigReceived[1] = !0;
        this.eb(a, c)
    };
    Cq.prototype.uc = function(a, b) {
        var c = Y(a);
        if (c.wasReactiveAdConfigReceived[1]) return !1;
        var d;
        var e = b;
        if (e) {
            d = new Bq;
            var f = e.adClient;
            u(f) && (d.X = f);
            f = e.adWidth;
            v(f) && 0 < f && (d.nf = f);
            f = e.adHeight;
            v(f) && 0 < f && (d.lb = f);
            f = e.adTest;
            u(f) && (d.za = f);
            f = e.reqSrc;
            d.ya = v(f) ? f : 1;
            e = e.pubVars;
            ja(e) && (d.xa = e);
            d = d.X && d.nf && d.lb ? d : null
        } else d = null;
        if (!d) return !1;
        c.wasReactiveAdConfigReceived[1] = !0;
        this.eb(a, d);
        return !0
    };
    Cq.prototype.eb = function(a, b) {
        var c = a.document.createElement("ins");
        c.className = "adsbygoogle";
        a.document.body.appendChild(c);
        var d = b.xa ? b.xa : {};
        d.google_ad_client = b.X;
        d.google_ad_width = b.nf;
        d.google_ad_height = b.lb;
        d.google_ad_format = b.nf + "x" + b.lb + "_as";
        d.google_reactive_ad_format = 1;
        d.google_pgb_reactive = b.ya;
        d.google_ad_channel = d.google_ad_channel ? d.google_ad_channel + "+GoogleAnchorAd+GooglePageLevelAds" : "GoogleAnchorAd+GooglePageLevelAds";
        b.za && (d.google_adtest = b.za);
        An(c, d, a)
    };
    var Dq = function(a) {
        el.call(this, a)
    };
    B(Dq, el);
    g = Dq.prototype;
    g.getAdType = function() {
        return 2
    };
    g.getNoShowReasons = function() {
        return pl(this.u)
    };
    g.zi = function() {
        return this.ab("ANCHOR_NOT_VISIBLE")
    };
    g.getLoadingText = function() {
        return this.ab("ANCHOR_LOADING")
    };
    g.pd = function() {
        if (null == this.T) return null;
        var a = document.createElement("div");
        a.appendChild(this.Ob(this.ab("ANCHOR_VISIBLE")));
        return a
    };
    g.displayAdLoadedContent = function() {
        this.nb.innerHTML = "";
        this.nb.appendChild(this.pd());
        this.Ud();
        this.state = 2
    };
    var Eq = function(a, b, c, d, e) {
        this.ly = a;
        this.Gw = b;
        this.Cw = c.Bw;
        this.eu = c.du;
        this.$s = c.frequency;
        this.Jy = c.Iy;
        this.Qs = d || "ifsl_evt";
        this.ke = e || [.01, 5, 10, 20, 50, 95];
        this.Gu = A()
    };
    Eq.prototype.Om = function() {
        return 0 < this.ke.length
    };
    Eq.prototype.Pn = function(a) {
        a.qqid = this.Cw;
        a.gqid = this.eu;
        a.ui = this.Jy;
        a.si = this.ly;
        a.ri = this.Gw;
        a.t = A() - this.Gu;
        R(this.Qs, a, this.$s)
    };
    Eq.prototype.Oo = function(a) {
        if (!(0 >= a) && this.ke.length)
            for (a *= 100; this.ke.length;) {
                var b = this.ke[0];
                if (b > a) break;
                this.ke.shift();
                this.Pn({
                    "int": "scr",
                    p: b
                })
            }
    };
    Eq.prototype.Tw = function(a) {
        this.Pn({
            "int": a
        })
    };
    var Fq = {
            backgroundColor: "#0288D1",
            color: "#FFF",
            fontFamily: "Roboto, Helvetica, arial, sans-serif",
            WebkitFontSmoothing: "antialiased",
            fontSize: "20px",
            margin: "0 -200px",
            padding: "15px 215px",
            width: "100%"
        },
        Gq = function(a) {
            var b = 0;
            try {
                a.top != a && (b |= 32), a.postMessage || (b |= 1)
            } catch (c) {
                b |= 32
            }
            return b
        },
        Hq = function(a) {
            return a.name && -1 != a.name.indexOf("google_ifsl_cifr")
        },
        Jq = function(a) {
            if (!a.contentWindow || !L(a.contentWindow) || !a.contentWindow.document.body) return !1;
            var b = a.contentWindow.document.body.scrollHeight;
            return Iq(a, b)
        },
        Kq = function(a, b, c) {
            if (c != a.top.location.href) try {
                a.history.pushState(null, b, c)
            } catch (d) {}
        },
        Iq = function(a, b) {
            var c = parseInt(a.style.height, 10);
            return c && 20 > Math.abs(b - c) ? !0 : 0 <= b ? (a.style.height = b + "px", !0) : !1
        },
        Nq = function(a, b) {
            Lq(a);
            N.setInterval(y(Lq, a), 500);
            Mq(b.document)
        },
        Lq = function(a) {
            var b = Q();
            if (b && b.document && b.document.body) {
                var c = {
                    msg_type: "ifsl-loaded-content"
                };
                c.key_value = [{
                    key: "ifsl-lc_h",
                    value: b.document.body.scrollHeight
                }, {
                    key: "ifsl-lc_id",
                    value: b.name
                }];
                try {
                    a.postMessage(N.JSON.stringify(c),
                        "*")
                } catch (d) {}
            }
        },
        Mq = function(a) {
            a = a.getElementsByTagName("a");
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                c.target && "_self" != c.target || (c.target = "_top")
            }
        },
        Oq = function(a, b, c) {
            this.u = a;
            this.Gj = b;
            this.kw = a.document.title;
            this.to = a.location.href;
            this.Gb = [];
            this.hc = [];
            this.Xd = -1;
            this.K = [];
            this.Rc = null;
            this.wl = 0;
            this.jo = [];
            this.io = [];
            this.om = [];
            this.En = this.gj = null;
            this.Qo = new Eq(-1, -1, this.Gj, null, [5, 10, 20, 50, 75, 95]);
            this.Ta = -1;
            this.Uh = this.Hl = null;
            this.tb = c;
            this.$m()
        };
    g = Oq.prototype;
    g.tryAddRecommendation = function(a) {
        this.ou(a) || (this.Gb.push(a), this.gd())
    };
    g.finalizeContentIframeWithHeight = function(a, b) {
        var c = Iq(a, b);
        c && (this.ij(a), this.gd())
    };
    g.Dl = function() {
        this.Hv();
        var a = this.Gb.shift();
        if (!a) return null;
        var b = y(this.Xk, this),
            c = y(this.tj, this),
            d = y(this.sj, this),
            e = this.an(a, b, function() {
                e && c(e)
            }, d);
        if (!e) return null;
        a = {
            $c: a,
            Ei: !1,
            Fj: new Eq(this.K.length, 0, this.Gj),
            wd: e
        };
        return {
            kc: [a],
            Za: e,
            Kh: e.id,
            ne: 0,
            Lf: function() {
                return 0
            }
        }
    };
    g.getElementById = function(a) {
        return this.u.document.getElementById(a)
    };
    g.tj = function() {
        this.lj()
    };
    g.sj = function(a) {
        this.Nw(a);
        this.lj()
    };
    g.td = function(a) {
        return a.Za || this.u.document.getElementById(a.Kh)
    };
    g.an = function(a, b, c, d) {
        var e = this.wl;
        this.wl++;
        var f = "google_ifsl_cifr" + e,
            f = this.Oh(a.url, f);
        if (!b(f)) return d(f), this.gd(), null;
        this.jo[e] = c;
        this.io[e] = d;
        this.hc[e] = a;
        L(f.contentWindow) && Qf(f.contentWindow, y(this.nm, this, f, a));
        N.setTimeout(y(this.Mo, this, a, f), 1E4);
        return f
    };
    g.$f = function(a) {
        return hc(this.hc, a)
    };
    g.Mo = function(a, b) {
        L(b.contentWindow) || b.getBoundingClientRect().height && !this.$f(a) || this.kg(b)
    };
    g.Oh = function(a, b) {
        var c = this.u.document.createElement("iframe");
        c.id = b;
        c.scrolling = "no";
        c.src = a;
        c.name = b;
        c.style.border = "none";
        c.style.height = "0";
        c.style.overflow = "visible";
        c.style.width = "100%";
        return c
    };
    g.Ph = function() {
        var a = this.u.document.createElement("div");
        J(a, Fq);
        a.innerText = "Loading More...";
        return a
    };
    g.gd = function() {
        for (var a = this.K[this.K.length - 1]; this.Ar(a);) {
            a = this.Dl();
            if (!a) break;
            this.K.push(a)
        }
        this.kl();
        this.Pp();
        this.lj()
    };
    g.Ar = function(a) {
        return a ? (a = this.td(a)) ? this.nn(a) && $k(al(a), this.u) : !1 : !0
    };
    g.nn = function(a) {
        var b = this.u.getComputedStyle(a);
        return "none" != b.display && 0 < a.offsetHeight
    };
    g.ou = function(a) {
        a = a.url;
        if (this.to == a) return !0;
        for (var b = 0; b < this.Gb.length; b++)
            if (this.Gb[b].url == a) return !0;
        for (b = 0; b < this.K.length; b++)
            for (var c = this.K[b], d = 0; d < c.kc.length; d++) {
                var e = c.kc[d];
                if (e.$c.url == a) return !0
            }
        return !1
    };
    g.Zv = function() {
        for (var a = 0, b = 0; b < this.hc.length; b++) this.hc[b] && a++;
        return a
    };
    g.$m = function() {
        Rf(this.u.document, "scroll", y(this.Vf, this, !1));
        N.setInterval(y(this.Zw, this), 500)
    };
    g.Vf = function(a) {
        var b = A(),
            c = b - this.En;
        this.En = b;
        if (!this.gj || 250 <= b - this.gj) this.gj = b, this.On(), this.gd();
        !a && 250 > c && N.setTimeout(y(this.Vf, this, !0), 251)
    };
    g.Hv = function() {
        if (!this.Rc) {
            var a = this.Ph();
            this.Xk(a);
            this.Rc = a
        }
    };
    g.lj = function() {
        !this.Rc || this.Gb.length || this.Zv() || (this.u.document.body.removeChild(this.Rc), this.Rc = null)
    };
    g.kl = function() {
        for (var a = null, b = null, c = this.K.length - 1; 0 <= c && (null === a || null === b); c--) {
            var d = this.K[c],
                e = this.td(d);
            e && this.nn(e) && (d = d.kc[d.Lf()], this.$f(d.$c) || (e = al(e), !b && $k(e, this.u) && (this.Ta = c, b = d), b && !a && 0 >= e && (a = d)))
        }
        c = this.Hl;
        e = this.Uh;
        this.Hl = a;
        this.Uh = b;
        a != c && this.Yy(a);
        b != e && this.vr(b);
        this.Mv()
    };
    g.Yy = function(a) {
        a ? (a = a.$c, Kq(this.u, a.title, a.url)) : Kq(this.u, this.kw, this.to)
    };
    g.vr = function(a) {
        if (null !== a) {
            var b = a;
            !b.Ei && b.$c.pingUrl && (Hf(N, b.$c.pingUrl, void 0), b.Ei = !0);
            a = a.wd.contentWindow;
            b = {
                msg_type: "ifsl-v"
            };
            try {
                a.postMessage(N.JSON.stringify(b), "*")
            } catch (c) {}
        }
    };
    g.Jt = function() {
        try {
            var a = this.u.document.documentElement.getBoundingClientRect(),
                b = a.top,
                c = a.bottom,
                d = a.height;
            if (this.K.length) {
                var e = this.td(this.K[0]);
                if (!e) return 1;
                c = al(e);
                d = c - b
            }
            var f = Qk(this.u) || 0;
            return 0 >= f || 0 >= d || f <= b ? 0 : c <= f ? 1 : (f - b) / d
        } catch (h) {
            return 0
        }
    };
    g.On = function() {
        if (this.Qo.Om()) {
            var a = this.Jt();
            0 < a && this.Qo.Oo(a)
        }
    };
    g.Mv = function() {
        if (this.Uh)
            for (var a = 0; a < this.K.length; a++)
                for (var b = this.K[a].kc, c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d.wd && d.Fj.Om()) {
                        var e;
                        var f = d.wd;
                        e = this.u;
                        var h;
                        try {
                            h = 0 < f.offsetWidth && 0 < f.offsetHeight && "none" !== f.style.display && "hidden" !== f.style.visibility
                        } catch (k) {
                            h = !1
                        }
                        h ? (f = f.getBoundingClientRect(), e = Qk(e), e = 0 >= e || 0 >= f.height || e <= f.top ? 0 : f.bottom <= e ? 1 : (e - f.top) / f.height) : e = 0;
                        0 < e && d.Fj.Oo(e)
                    }
                }
    };
    g.Xk = function(a) {
        var b = this.u.document.body;
        this.Rc ? b.insertBefore(a, this.Rc) : b.appendChild(a);
        return !0
    };
    g.Nw = function(a) {
        var b = this.u.document.body;
        b.removeChild(a);
        for (b = 0; b < this.K.length; b++) {
            var c = this.K[b];
            if (c.Za === a) {
                Array.prototype.splice.call(this.K, b, 1);
                break
            }
        }
    };
    g.nm = function(a) {
        var b = !1;
        L(a.contentWindow) && (Mq(a.contentWindow.document), (b = Jq(a)) ? this.ij(a) : this.kg(a))
    };
    g.ij = function(a) {
        var b = this.Vm(a);
        this.hc[b] && (this.hc[b] = null, this.tb || this.om.push(a), (b = this.jo[b]) && b(a), this.gd())
    };
    g.kg = function(a) {
        var b = this.Vm(a);
        this.hc[b] && (this.hc[b] = null, (b = this.io[b]) && b(a), this.gd())
    };
    g.Vm = function(a) {
        a = a.id;
        return parseInt(a.substring(16), 10)
    };
    g.Zw = function() {
        this.tb || dc(this.om, Jq);
        for (var a = this.tb ? Math.max(0, this.Ta) : 0; a < this.K.length; a++) {
            var b = this.td(this.K[a]);
            b && Jq(b)
        }
    };
    g.Pp = function() {
        if (this.tb && !(0 > this.Ta)) {
            var a = this.K[this.Ta];
            if (a = this.td(a)) {
                var b = this.Ta - 2;
                for (0 < al(a) && b--; this.Xd < b; this.Xd++) {
                    var c = this.K[this.Xd + 1],
                        d = this.td(c);
                    d && (c.ne = d.offsetHeight, d.parentNode.removeChild(d), this.u.scrollBy(0, -c.ne), c.Za = null, c.kc[0].wd = null)
                }
                b = this.Ta - 1;
                if (0 <= b && this.Xd >= b) {
                    c = this.K[b];
                    if (!c.Za) {
                        var d = c.kc[0].$c.url,
                            e = c.Kh,
                            d = this.Oh(d, e);
                        if (!d) return;
                        d.style.height = c.ne + "px";
                        a.parentNode.insertBefore(d, a);
                        this.u.scrollBy(0, c.ne);
                        c.Za = d;
                        c.kc[0].wd = d
                    }
                    this.Xd = b - 1
                }
            }
        }
    };
    var Pq = function(a, b, c) {
        Oq.call(this, a, b, c);
        this.Ln = Math.max(a.screen.height, a.screen.width) + 300;
        this.bf = -1
    };
    B(Pq, Oq);
    g = Pq.prototype;
    g.$m = function() {
        Rf(this.u.document, "scroll", y(this.Vf, this, !1))
    };
    g.yt = function(a) {
        return a.contentDocument.body.scrollHeight
    };
    g.nv = function(a) {
        return !a || parseInt(a.style.height, 10) <= this.Ln
    };
    g.su = function(a) {
        a.style.display || (a.style.display = "none")
    };
    g.Xx = function(a) {
        a.style.display = "inline"
    };
    g.Oh = function(a, b) {
        var c = this.u.document.createElement("iframe");
        c.id = b;
        c.scrolling = "no";
        c.src = a;
        c.style.border = "none";
        c.style.height = "0";
        c.style.overflow = "visible";
        c.style.width = "100%";
        var d = this.K.length;
        if (0 == d || this.nv(this.K[d - 1].Za)) c.style.display = "inline";
        return c
    };
    g.bx = function(a) {
        if (a) {
            var b = Math.min(this.Ln, this.yt(a));
            a.style.height = b + "px"
        }
    };
    g.nm = function(a) {
        var b = !1;
        L(a.contentWindow) && (Mq(a.contentWindow.document), (b = Jq(a)) ? (this.ij(a), this.bx(a), this.su(a)) : this.kg(a))
    };
    g.Vy = function() {
        if (!(0 > this.Ta)) {
            var a = this.K[this.Ta].Za;
            if (a) {
                var b = al(a),
                    c, d = a.getBoundingClientRect();
                c = d.bottom;
                var e = Qk(this.u),
                    d = -1;
                if (0 >= b && c >= e) {
                    if (this.Ta != this.bf && (a.scrolling = "yes", a.contentDocument.documentElement.style.overflow = "hidden", a.contentDocument.documentElement.style.overflowY = "scroll", this.K.length > this.Ta + 1)) {
                        a = this.K[this.Ta + 1].Za;
                        if (!a) return;
                        N.setTimeout(y(this.Xx, this, a), 200)
                    }
                    d = this.Ta
                }
                d != this.bf && 0 <= this.bf && (a = this.K[this.bf].Za, a.scrolling = "no", a.contentDocument.documentElement.style.overflow =
                    "hidden", a.contentDocument.documentElement.style.overflowY = "hidden");
                this.bf = d
            }
        }
    };
    g.Vf = function() {
        this.On();
        this.gd();
        this.Vy();
        this.Pp()
    };
    g.Mo = function(a, b) {
        this.$f(a) && this.kg(b)
    };
    var Qq = function(a) {
            if (a.classList) return a.classList;
            a = a.className;
            return u(a) && a.match(/\S+/g) || []
        },
        Rq = function(a, b) {
            return a.classList ? a.classList.contains(b) : hc(Qq(a), b)
        },
        Sq = function(a, b) {
            a.classList ? a.classList.add(b) : Rq(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        },
        Tq = function(a, b) {
            a.classList ? a.classList.remove(b) : Rq(a, b) && (a.className = ec(Qq(a), function(a) {
                return a != b
            }).join(" "))
        };
    var Uq = function(a, b) {
        Oq.call(this, a, b, !1);
        this.kk = a.document;
        this.Qd = [];
        this.Ap = 0
    };
    B(Uq, Oq);
    Uq.prototype.Dl = function() {
        if (3 > this.Gb.length) return null;
        var a = this.Qd[this.Qd.length - 1];
        if (a && !a.nu()) return null;
        a = this.Gb.slice(0, 3);
        this.Gb = this.Gb.slice(3);
        var b = this.hs(a),
            c = [],
            d = this.ws(a, b);
        this.Qd.push(d);
        for (var e = 0; e < a.length; e++) {
            var f = a[e],
                h = y(Vq.prototype.lr, d),
                k = y(Vq.prototype.tj, d, e, f),
                l = y(this.bw, this, d),
                h = this.an(f, h, k, l);
            Sq(h, "t_infscr_cifr" + e);
            c.push({
                $c: f,
                Ei: !1,
                Fj: b[e],
                wd: h
            })
        }
        return {
            kc: c,
            Za: d.ti(),
            Kh: "",
            ne: 0,
            Lf: y(d.Lf, d)
        }
    };
    Uq.prototype.getElementById = function(a) {
        var b = this.kk.getElementById(a);
        if (b) return b;
        for (var c = 0; c < this.Qd.length; c++)
            if (b = this.Qd[c].getElementById(a)) return b;
        return null
    };
    var Wq = {
        border: "none",
        height: "300px",
        margin: "20px 0 0 0",
        overflow: "visible",
        width: "100%"
    };
    g = Uq.prototype;
    g.Wu = function(a) {
        return !this.$f(a)
    };
    g.ws = function(a, b) {
        var c = this.kk.createElement("iframe");
        c.id = "ifsl_tbu" + this.Ap;
        this.Ap++;
        c.scrolling = "no";
        J(c, Wq);
        c.style.border = "none";
        c.style.overflow = "visible";
        c.style.width = "100%";
        c.style.height = "300px";
        this.kk.body.appendChild(c);
        var d = y(function(a) {
            b[a].Tw("tb");
            this.kl()
        }, this);
        return new Vq(this, c, c.contentWindow, a, d)
    };
    g.Rw = function(a) {
        var b = a.ti();
        b && b.parentNode && b.parentNode.removeChild(b);
        for (b = 0; b < this.K.length; b++) {
            var c = this.K[b];
            if (c.Za === a.ti()) {
                Array.prototype.splice.call(this.K, b, 1);
                break
            }
        }
        b = this.Qd;
        a = cc(b, a);
        0 <= a && Array.prototype.splice.call(b, a, 1)
    };
    g.bw = function(a, b) {
        a.sj(b);
        this.Rw(a)
    };
    g.hs = function(a) {
        for (var b = [], c = 0; c < a.length; c++) b[c] = new Eq(this.K.length, c, this.Gj);
        return b
    };
    var Vq = function(a, b, c, d, e) {
            this.Mr = a;
            this.Lh = b;
            this.Mi = c;
            this.ga = c.document;
            this.Ag = d;
            this.kf = 0;
            this.Rm = !1;
            this.dw = e;
            this.jg = [];
            this.Sh()
        },
        Xq = {
            margin: "0",
            padding: "0"
        },
        Yq = {
            "margin-left": "5px",
            "margin-right": "5px",
            "text-align": "center"
        },
        Zq = {
            "margin-left": "5px",
            "text-align": "left"
        },
        $q = {
            cursor: "pointer",
            display: "inline-block",
            margin: "1px",
            "margin-bottom": "0",
            "max-width": "114px",
            padding: "6px",
            position: "relative",
            "text-align": "left",
            width: "27%"
        },
        ar = {
            "background-color": "#FFFFFF",
            "border-top": "#DDDDDD 1px solid",
            width: "100%",
            height: "10px"
        },
        br = {
            "background-color": "#FFFFFF",
            "font-family": "Roboto",
            "font-size": "16px",
            margin: "0",
            padding: "15px",
            "text-align": "center"
        },
        cr = {
            "background-color": "#FFFFFF",
            bottom: "-2px",
            height: "2px",
            left: "0",
            position: "absolute",
            right: "0"
        },
        dr = {
            "margin-bottom": "6px",
            "max-width": "100%"
        },
        er = {
            "font-family": "Roboto",
            "font-size": "11px",
            height: "4.364em",
            "line-height": "12px",
            overflow: "hidden"
        };
    g = Vq.prototype;
    g.ti = function() {
        return this.Lh
    };
    g.getElementById = function(a) {
        return this.Mi.document.getElementById(a) || null
    };
    g.Lf = function() {
        return this.kf
    };
    g.lr = function(a) {
        var b = this.ga.getElementById("t_infscr_content_area");
        if (!b) return !1;
        b.appendChild(a);
        return !0
    };
    g.nu = function() {
        return this.Rm
    };
    g.Sh = function() {
        this.ga.head.appendChild(this.ks());
        kf("  .t_infscr_active {background-color: #FFFFFF;border: #DDDDDD 1px solid;border-top: #CC3333 3px solid;color: #000000;}.t_infscr_inactive {background-color: #EEEEEE;border: #EEEEEE 1px solid;border-top: #EEEEEE 1px solid;color: #888888;}.t_infscr_inactive:hover {border-top: #BB7777 3px solid;}", this.ga.body);
        J(this.ga.body, Xq);
        var a = this.ga.createElement("div");
        a.appendChild(this.us());
        a.appendChild(this.xs());
        a.appendChild(this.Qr());
        this.ga.body.appendChild(a)
    };
    g.ks = function() {
        return ch("Roboto", this.ga)
    };
    g.us = function() {
        var a = this.ga.createElement("div");
        a.id = "t_infscr_tabbed_area";
        this.hp(a);
        this.Qk(this.Mi.top, "orientationchange", y(this.hp, this, a));
        for (var b = 0; b < this.Ag.length; b++) a.appendChild(this.gs(b));
        return a
    };
    g.hp = function(a) {
        var b = this.Zy() ? Yq : Zq;
        J(a, b)
    };
    g.gs = function(a) {
        var b = a == this.kf,
            b = this.qs(b, this.Ag[a]);
        this.Qk(b, "click", y(this.ny, this, a));
        return b
    };
    g.qs = function(a, b) {
        var c = this.ga.createElement("div");
        J(c, $q);
        if (a) {
            Sq(c, "t_infscr_active");
            var d = this.ga.createElement("div");
            J(d, cr);
            d.id = "t_infscr_atbm";
            c.appendChild(d)
        } else Sq(c, "t_infscr_inactive");
        c.appendChild(this.rs(b.imageUrl));
        c.appendChild(this.ss(b.title));
        return c
    };
    g.rs = function(a) {
        var b = this.ga.createElement("img");
        b.src = a;
        J(b, dr);
        return b
    };
    g.ss = function(a) {
        var b = this.ga.createElement("div");
        b.innerHTML = a;
        J(b, er);
        return b
    };
    g.xs = function() {
        var a = this.ga.createElement("div");
        J(a, ar);
        return a
    };
    g.Qr = function() {
        var a = this.ga.createElement("div");
        a.id = "t_infscr_content_area";
        a.appendChild(this.Ph());
        return a
    };
    g.Ph = function() {
        var a = this.ga.createElement("p");
        a.id = "t_infscr_loading";
        a.innerHTML = "Loading story...";
        J(a, br);
        return a
    };
    g.ny = function(a) {
        this.kf = a;
        for (var b = this.ga.getElementById("t_infscr_tabbed_area").children, c = 0; c < b.length; c++)
            if (c == a) {
                var d = b[c];
                Sq(d, "t_infscr_active");
                Tq(d, "t_infscr_inactive")
            } else d = b[c], Tq(d, "t_infscr_active"), Sq(d, "t_infscr_inactive");
        c = this.ga.getElementById("t_infscr_atbm");
        c.parentNode.removeChild(c);
        b[a].appendChild(c);
        b = this.Ag[a];
        this.np(b) ? this.qo(a) : this.ew();
        this.dw(a)
    };
    g.np = function(a) {
        return this.mv(a) && this.Mr.Wu(a)
    };
    g.mv = function(a) {
        var b = this.Ag[this.kf];
        return b === a
    };
    g.tj = function(a, b, c) {
        this.np(b) ? this.qo(a) : fr(c)
    };
    g.sj = function() {
        this.Bj()
    };
    g.qo = function(a) {
        var b = this.ga.getElementById("t_infscr_content_area");
        if (b) {
            var c = "t_infscr_cifr" + a;
            gr(b, function(a) {
                return Rq(a, c)
            });
            this.Rm = !0
        }
        Jq(this.Lh)
    };
    g.ew = function() {
        var a = this.ga.getElementById("t_infscr_content_area");
        a && gr(a, function(a) {
            return "t_infscr_loading" == a.id
        });
        Jq(this.Lh)
    };
    g.Zy = function() {
        return Uk(this.Mi.top)
    };
    g.Qk = function(a, b, c) {
        this.jg.push({
            element: a,
            Rs: b,
            xv: c
        });
        M(a, b, c, void 0)
    };
    g.Bj = function() {
        for (var a = 0; a < this.jg.length; a++) {
            var b = this.jg[a];
            Sf(b.element, b.Rs, b.xv)
        }
        this.jg = []
    };
    var gr = function(a, b) {
            for (var c = a.children, d = null, e = 0; e < c.length; e++) b(c[e]) ? d = c[e] : fr(c[e]);
            d && (d.style.display = "block")
        },
        fr = function(a) {
            if ("IFRAME" != a.tagName || 0 != parseInt(a.style.height, 10)) a.style.display = "none"
        };
    var hr = function() {
            this.Ve = [];
            this.ak = this.hg = this.$i = !1;
            this.ei = this.di = "";
            this.Hj = 0;
            this.tb = !1
        },
        ir = function(a) {
            return a && u(a) ? a : ""
        },
        jr = function() {};
    ea(jr);
    g = jr.prototype;
    g.Zc = function(a, b, c) {
        var d = new hr,
            d = this.Fw(c, d);
        d.X = b;
        d.ak = !0;
        d.di = "debugQemQueryId";
        d.ei = "debugGwsQueryId";
        d.Hj = 1;
        d.ya = 4;
        b = Y(a);
        b.wasReactiveAdConfigReceived[32] = !0;
        this.bn(a, d, b)
    };
    g.Fw = function(a, b) {
        if (!a.hash) return b;
        var c = a.hash.split("?", 2);
        if (2 > c.length) return b;
        for (var c = c[1], c = c.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            if (2 == e.length) {
                var f = decodeURIComponent(e[0]),
                    e = decodeURIComponent(e[1]);
                switch (f) {
                    case "google_ifsl_urls":
                        0 < e.length && (b.Ve = this.Tr(e.split("|")));
                        break;
                    case "google_ifsl_tb":
                        b.hg = !!e && "0" != e && "false" != e;
                        break;
                    case "google_ifsl_lite":
                        b.tb = !!e && "0" != e && "false" != e;
                        break;
                    case "google_ifsl_fixed":
                        b.$i = !!e && "0" != e && "false" != e
                }
            }
        }
        return b
    };
    g.Tr = function(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push({
            url: a[c],
            pingUrl: "fakePingUrl",
            title: "Title of Matched Content",
            imageUrl: "http://tpc.googlesyndication.com/pagead/images/native_ad_mountains_128x128.png"
        });
        return b
    };
    g.uc = function(a, b) {
        var c = Y(a),
            d;
        if (d = b) {
            var e = new hr;
            e.X = ir(d.adClient);
            if (e.X) {
                e.gc = ir(d.pageUrl);
                var f = d.recommendedUrls;
                e.Ve = [];
                if (r(f))
                    for (var h = 0; h < f.length; h++) {
                        var k = f[h];
                        u(k.url) && u(k.pingUrl) && u(k.title) && e.Ve.push({
                            url: k.url,
                            pingUrl: k.pingUrl,
                            title: k.title,
                            imageUrl: k.imageUrl
                        })
                    }
                e.hg = !!d.isTabbed;
                e.ak = !!d.shouldInsertInvisibleSlot;
                e.di = ir(d.escapedBackendQueryId);
                e.ei = ir(d.escapedGwsQueryId);
                e.Hj = parseFloat(d.reportingFrequency);
                e.ya = 1;
                e.tb = !!d.isLite;
                e.$i = !!d.isFixedSize;
                d = e
            } else d = null
        } else d =
            null;
        if (!d) return !1;
        c.wasReactiveAdConfigReceived[32] = !0;
        this.bn(a, d, c);
        return !0
    };
    g.bn = function(a, b, c) {
        var d = c.stateForType[32];
        d || (d = {
            Bw: b.di,
            du: b.ei,
            frequency: b.Hj,
            Iy: b.hg ? "tb" : "basic",
            Tz: b.tb ? "lite" : "basic"
        }, d = b.hg ? new Uq(a, d) : b.$i ? new Pq(a, d, b.tb) : new Oq(a, d, b.tb), c.stateForType[32] = d);
        for (c = 0; c < b.Ve.length; c++) d.tryAddRecommendation(b.Ve[c]);
        b.ak && (c = b, d = a.document.createElement("div"), d.style.height = "0", d.style.overflow = "hidden", b = a.document.createElement("ins"), b.className = "adsbygoogle", d.appendChild(b), a.document.body.appendChild(d), c = {
            google_ad_channel: "GoogleInfScrollTrigger+GooglePageLevelAds",
            google_ad_client: c.X,
            google_ad_width: 1200,
            google_ad_height: 300,
            google_enable_content_recommendations: !0,
            google_page_url: c.gc,
            google_reactive_ad_format: 32,
            google_infinite_scroll_slot_type: 1,
            google_pgb_reactive: c.ya
        }, An(b, c, a))
    };
    var kr = function() {},
        lr = function() {};
    ea(lr);
    lr.prototype.Zc = function(a, b) {
        var c = new kr;
        c.X = b;
        c.za = "on";
        c.ya = 4;
        var d = Y(a);
        d.wasReactiveAdConfigReceived[8] = !0;
        this.eb(a, c)
    };
    lr.prototype.uc = function(a, b) {
        var c = Y(a);
        if (c.wasReactiveAdConfigReceived[8]) return !1;
        var d;
        var e = a,
            f = b;
        if (f) {
            d = new kr;
            var h = f.adClient;
            u(h) && (d.X = h);
            h = f.adTest;
            u(h) && (d.za = h);
            h = f.reqSrc;
            d.ya = v(h) ? h : 1;
            h = f.pubVars;
            ja(h) && (d.xa = h);
            d.X ? (f = parseInt(f.jsRefactorState, 10), isNaN(f) || (e = Y(e), e.interstitialJSRefactorExperiment = f)) : d = null
        } else d = null;
        if (!d) return !1;
        c.wasReactiveAdConfigReceived[8] = !0;
        this.eb(a, d);
        return !0
    };
    lr.prototype.eb = function(a, b) {
        var c = Qk(a) || 0,
            d = Rk(a) || 0;
        this.Ij(a, b, 8, d, c, "GoogleVignetteAd")
    };
    lr.prototype.Ij = function(a, b, c, d, e, f) {
        var h = a.document.createElement("ins");
        h.className = "adsbygoogle";
        X(h, "display", "none");
        a.document.documentElement.appendChild(h);
        var k = b.xa ? b.xa : {};
        f += "+GooglePageLevelAds";
        k.google_ad_channel = k.google_ad_channel ? k.google_ad_channel + ("+" + f) : f;
        k.google_ad_client = b.X;
        k.google_ad_width = d;
        k.google_ad_height = e;
        k.google_reactive_ad_format = c;
        k.google_pgb_reactive = b.ya;
        b.za && (k.google_adtest = b.za);
        An(h, k, a)
    };
    var mr = function(a, b) {
        this.Kb = b;
        this.hj = -1;
        el.call(this, a)
    };
    B(mr, el);
    g = mr.prototype;
    g.getAdType = function() {
        return 1
    };
    g.getNoShowReasons = function() {
        return wl(this.u, this.Kb)
    };
    g.zi = function() {
        return this.ab("INTERSTITIAL_NOT_VISIBLE")
    };
    g.getLoadingText = function() {
        return this.ab("INTERSTITIAL_LOADING")
    };
    g.setLinksInstrumented = function(a) {
        this.hj != a && (this.hj = a, this.nb.innerHTML = "", this.nb.appendChild(this.pd()), this.Ud(), this.state = 2)
    };
    g.pd = function() {
        if (null == this.T) return null;
        var a = document.createElement("div"),
            b = this.ab("INTERSTITIAL_VISIBLE");
        a.appendChild(this.Ob(b));
        b = this.ab("INTERSTITIAL_LINKS");
        b = b.replace("$COUNT$", this.hj.toString());
        a.appendChild(this.Ob(b));
        return a
    };
    var nr = function(a) {
            return a.replace(/\W+(.)/g, function(a, c) {
                return c.toUpperCase()
            })
        },
        or = function(a) {
            a = a.document.body;
            return a.getBoundingClientRect().width
        },
        pr = function(a) {
            var b = 0;
            try {
                a.top != a && (b |= 32), a.postMessage && a.getComputedStyle || (b |= 1)
            } catch (c) {
                b |= 32
            }
            return b
        };
    var qr = function() {},
        rr = function() {};
    ea(rr);
    rr.prototype.Zc = function(a, b) {
        var c = new qr;
        c.X = b;
        c.mb = [];
        this.eb(a, c)
    };
    rr.prototype.uc = function(a, b) {
        var c = Y(a);
        if (c.wasReactiveAdConfigReceived[30]) return !1;
        var d;
        var e = b;
        if (e) {
            d = new qr;
            var f = e.adClient;
            if (f) {
                u(f) && (d.X = f);
                (f = e.pageUrl) && u(f) && (d.gc = f);
                var h = e.pubVars;
                if (ja(h) && (d.xa = {}, r(h)))
                    for (f = 0; f < h.length; f++) {
                        var k = h[f];
                        ja(k) && u(k.property) && u(k.value) && (d.xa[k.property] = k.value)
                    }
                f = e.adHeight;
                v(f) && (d.lb = f);
                e = e.containerCssStyling;
                d.mb = [];
                if (r(e))
                    for (f = 0; f < e.length; f++) h = e[f], ja(h) && u(h.property) && u(h.value) && d.mb.push({
                        Se: h.property,
                        value: h.value
                    })
            } else d = null
        } else d =
            null;
        if (!d) return !1;
        c.wasReactiveAdConfigReceived[30] = !0;
        this.eb(a, d);
        return !0
    };
    rr.prototype.eb = function(a, b) {
        var c;
        var d = a;
        if (d.document.body) {
            c = or(d);
            for (var d = [{
                    element: d.document.body,
                    depth: 0,
                    height: 0
                }], e = -1, f = null; 0 < d.length;) {
                var h = d.pop(),
                    k = h.element,
                    l = h.height;
                0 < h.depth && l > e && (e = l, f = k);
                if (5 > h.depth)
                    for (l = 0; l < k.children.length; l++) {
                        var m = k.children[l],
                            n;
                        n = c;
                        var q = m.getBoundingClientRect().width;
                        (n = (null == q || null == n ? 0 : q >= .9 * n && q <= 1.01 * n) ? !0 : !1) && d.push({
                            element: m,
                            depth: h.depth + 1,
                            height: m.getBoundingClientRect().height
                        })
                    }
            }
            c = f
        } else c = null;
        if (c) {
            d = c;
            if (d.parentNode) {
                c = a.document.createElement("ins");
                k = 300;
                b.lb && (k = b.lb);
                e = b.mb ? b.mb : [];
                f = a;
                h = d;
                l = k;
                k = e;
                k.push({
                    Se: "width",
                    value: "100%"
                });
                k.push({
                    Se: "height",
                    value: l + "px"
                });
                m = f.getComputedStyle(h).position;
                if ("static" != m) {
                    for (l = h.parentNode.lastElementChild; l && l != h;) {
                        if ("none" != f.getComputedStyle(l).display) {
                            m = f.getComputedStyle(l).position;
                            break
                        }
                        l = l.previousElementSibling
                    }
                    m && k.push({
                        Se: "position",
                        value: m
                    })
                }
                f = c;
                for (h = 0; h < e.length; h++) l = e[h], k = nr(l.Se), l = l.value, f.style[k] = l;
                d = d.parentNode;
                d.appendChild(c)
            } else c = null;
            d = or(a);
            e = 300;
            b.lb && v(b.lb) && (e =
                b.lb);
            f = b;
            h = f.xa || {};
            h.google_ad_client = f.X;
            h.google_ad_width = d;
            h.google_ad_height = e;
            f.gc && (h.google_page_url = f.gc);
            h.google_reactive_ad_format = 30;
            e = h;
            d = a;
            f = d.document.createElement("ins");
            f.className = "adsbygoogle";
            c.appendChild(f);
            An(f, e, d)
        } else c = {
            ec: 1,
            url: a.location.href && a.location.href.substring ? a.location.href.substring(0, 200) : ""
        }, R("prf_evt", c, .1)
    };
    var sr = function() {};
    ea(sr);
    sr.prototype.Zc = function(a) {
        Rf(a, "resize", y(this.cc, this, a))
    };
    sr.prototype.uc = function(a, b) {
        var c = Y(a);
        if (c.wasReactiveAdConfigReceived[16] || !b) return !1;
        c.wasReactiveAdConfigReceived[16] = !0;
        this.Dn = this.Gm(a);
        Rf(a, "resize", y(this.cc, this, a));
        return !0
    };
    sr.prototype.cc = function(a) {
        var b = this.Gm(a);
        if (this.Dn != b) {
            this.Dn = b;
            for (var b = tr(a), c = 0; c < b.length; c++)
                if (b[c].Aj.offsetWidth != b[c].offsetWidth) {
                    b[c].offsetWidth = b[c].Aj.offsetWidth;
                    var d = qa(ur, b[c].Aj, b[c].xa, a);
                    sh("resp::och", th, d)
                }
        }
    };
    sr.prototype.Gm = function(a) {
        return a.innerHeight >= a.innerWidth ? 0 : 90
    };
    var vr = function(a, b) {
            return !!a.google_ad_resizable && !a.google_reactive_ad_format && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b == b.top
        },
        tr = function(a) {
            a = Y(a);
            a.stateForType[16] || (a.stateForType[16] = []);
            return a.stateForType[16]
        },
        ur = function(a, b, c) {
            var d = wr(a, b),
                e = b;
            delete e.google_ad_format;
            delete e.google_ad_width;
            delete e.google_ad_height;
            Bn(a, b, c);
            e = wr(a, b);
            !e && d && 1 == a.childNodes.length ? (xr(d, !1), b.google_reactive_ad_format = 16, b.google_ad_section = "responsive_resize",
                An(a, b, c)) : e && d ? e != d && (xr(d, !1), xr(e, !0)) : R("auto_size_refresh", {
                context: "showOrHideElm",
                url: c.location.href,
                nodes: a.childNodes.length
            })
        },
        xr = function(a, b) {
            a.style.display = b ? "inline-block" : "none"
        },
        wr = function(a, b) {
            for (var c = 0; c < a.childNodes.length; c++) {
                var d = {};
                Dm(a.childNodes[c].style, d);
                if (d.google_ad_width == b.google_ad_width && d.google_ad_height == b.google_ad_height) return a.childNodes[c]
            }
            return null
        };
    var yr = function() {},
        zr = function() {};
    ea(zr);
    zr.prototype.Zc = function(a, b) {
        var c = new yr;
        c.X = b;
        c.za = "on";
        c.ya = 4;
        var d = Y(a);
        d.wasReactiveAdConfigReceived[9] = !0;
        this.eb(a, c)
    };
    zr.prototype.uc = function(a, b) {
        var c = Y(a);
        if (c.wasReactiveAdConfigReceived[9]) return !1;
        var d;
        var e = b;
        if (e) {
            d = new yr;
            var f = e.adClient;
            u(f) && (d.X = f);
            f = e.adTest;
            u(f) && (d.za = f);
            f = e.reqSrc;
            d.ya = v(f) ? f : 1;
            e = e.pubVars;
            ja(e) && (d.xa = e);
            d = d.X ? d : null
        } else d = null;
        if (!d) return !1;
        c.wasReactiveAdConfigReceived[9] = !0;
        this.eb(a, d);
        return !0
    };
    zr.prototype.eb = function(a, b) {
        var c = Qk(a) || 0,
            d = Rk(a) || 0;
        this.Ij(a, b, 9, d, c, "GoogleScrollTriggeredImmersiveAd")
    };
    zr.prototype.Ij = function(a, b, c, d, e, f) {
        var h = a.document.createElement("ins");
        h.className = "adsbygoogle";
        X(h, "display", "none");
        a.document.documentElement.appendChild(h);
        var k = b.xa ? b.xa : {};
        f += "+GooglePageLevelAds";
        k.google_ad_channel = k.google_ad_channel ? k.google_ad_channel + ("+" + f) : f;
        k.google_ad_client = b.X;
        k.google_ad_width = d;
        k.google_ad_height = e;
        k.google_reactive_ad_format = c;
        k.google_pgb_reactive = b.ya;
        b.za && (k.google_adtest = b.za);
        An(h, k, a)
    };
    var Ar = function(a, b) {
        this.Kb = b;
        this.Ff = null;
        el.call(this, a)
    };
    B(Ar, el);
    g = Ar.prototype;
    g.getAdType = function() {
        return 3
    };
    g.getNoShowReasons = function() {
        return wl(this.u, this.Kb)
    };
    g.zi = function() {
        return "This page cannot display the immersive ad for the following reason(s):"
    };
    g.getLoadingText = function() {
        return "An immersive is loading... If nothing happens try refreshing the page."
    };
    g.pd = function() {
        if (null == this.T) return null;
        var a = document.createElement("div");
        if (this.Ff.length) {
            a.appendChild(this.Ob("This page cannot display the immersive ad for the following reason(s):"));
            for (var b = "<ul>", c = 0; c < this.Ff.length; c++) b += "<li>" + this.Ff[c] + "</li>";
            b += "</ul>";
            a.appendChild(this.Ob(b))
        } else a.appendChild(this.Ob("Immersive has been inserted below the fold.  Scroll to make it visible."));
        return a
    };
    g.displayAdLoadedContent = function(a) {
        this.Ff = a;
        this.nb.innerHTML = "";
        this.nb.appendChild(this.pd());
        this.Ud();
        this.state = 2
    };
    var Br = {
            1: 1,
            8: 2,
            9: 32,
            16: 4,
            24: 8,
            25: 8,
            32: 16,
            30: 64
        },
        Cr = function(a, b, c) {
            switch (c) {
                case 1:
                    if (nl(a)) a = !1;
                    else {
                        if (!(b = sl())) {
                            b = a;
                            c = U.Bk;
                            c = [c.s, c.o];
                            var d = T();
                            d.G(c, Ka, 29);
                            if (c = T().V(29) === U.Bk.o) try {
                                c = tl(N, b) && V(b) && !Uk(b) && Xk(b)
                            } catch (h) {
                                c = !1
                            }
                            c ? (T().Qa("828064126", 36), b = !0) : b = !1
                        }
                        if (!b) {
                            b = a;
                            c = U.Ak;
                            c = [c.s, c.o];
                            d = T();
                            d.G(c, Ma, 29);
                            if (c = T().V(29) === U.Ak.o) try {
                                c = tl(N, b) && !V(b) && Xk(b)
                            } catch (h) {
                                c = !1
                            }
                            c ? (T().Qa("828064129", 39), b = !0) : b = !1
                        }
                        if (b) a = !0;
                        else {
                            var e;
                            b = N;
                            try {
                                var f = tf(b);
                                e = !!f && tl(b, f) && V(f) && Xk(f) && !Uk(f) &&
                                    !!bh("transform") && !!bh("transformOrigin")
                            } catch (h) {
                                e = !1
                            }
                            e && (e = U.Ck, e = [e.s, e.o], f = T(), f.G(e, Na, 29));
                            a = 0 == pl(a)
                        }
                    }
                    return a;
                case 8:
                    if (e = 0 == wl(a, b)) Y(a), e = !0;
                    return e;
                case 9:
                    if (e = !Gl(a, b)) Y(a), e = !0;
                    return e;
                case 24:
                case 25:
                    if (e = 0 == nq(a, b)) a = Y(a), e = !!a.wasReactiveAdConfigReceived[24];
                    return e;
                case 32:
                    return e = Y(a), a = (e = !!e.wasReactiveAdConfigReceived[32]) && 0 == Gq(a);
                case 30:
                    return 0 == pr(a)
            }
            return !1
        },
        Dr = function(a, b, c) {
            switch (c) {
                case 1:
                    return pl(a);
                case 8:
                    return wl(a, b);
                case 9:
                    return Gl(a, b);
                case 24:
                    return nq(a,
                        b);
                case 25:
                    b = 0;
                    try {
                        a.top != a && (b |= 32), a.postMessage && a.getComputedStyle || (b |= 1), Uk(a) || (b |= 4)
                    } catch (d) {
                        b |= 32
                    }
                    return a = b;
                case 32:
                    return Gq(a);
                case 16:
                    return vr(b, a) ? 0 : 32;
                case 30:
                    return pr(a)
            }
            return 32
        },
        Er = function(a) {
            switch (a) {
                case 1:
                    return Cq.getInstance();
                case 8:
                    return lr.getInstance();
                case 9:
                    return zr.getInstance();
                case 16:
                    return sr.getInstance();
                case 24:
                case 25:
                    return uq.getInstance();
                case 32:
                    return jr.getInstance();
                case 30:
                    return rr.getInstance()
            }
            return null
        },
        Fr = function(a, b) {
            var c = !1;
            O(Ek, function(d) {
                Ik(a.location,
                    d) && (d = Fk[d]) && (d = Er(d), d.Zc(a, b, a.location), c = !0)
            });
            return c
        },
        Gr = function(a, b) {
            if (!a.document.getElementById("goog_info_card")) {
                var c = Y(a);
                O(Hk, function(d) {
                    if (!c.debugCard && Nk(d, a.location)) {
                        a: {
                            var e = a,
                                f = b;
                            switch (d) {
                                case 2:
                                    d = new Dq(e);
                                    break a;
                                case 1:
                                    d = new mr(e, f);
                                    break a;
                                case 3:
                                    d = new Ar(e, f);
                                    break a
                            }
                            d = void 0
                        }
                        c.debugCard = d
                    }
                })
            }
        },
        Ir = function(a, b) {
            var c = tf(b);
            if (!c) return null;
            var d = Y(c);
            if (!d.wasReactiveAdConfigHandlerRegistered) return null;
            var e = 0;
            O(Ak, function(b) {
                0 === Hr(a, c, b) && (b = Br[b]) && (e |= b)
            });
            return e ? "" + e : null
        },
        Jr = function(a, b) {
            var c = [];
            O(Ak, function(d) {
                var e = Hr(b, a, d);
                0 !== e && c.push(d + ":" + e)
            });
            return 0 == c.length ? null : c.join(",")
        },
        Kr = function(a, b) {
            var c = Y(b);
            if (c.wasReactiveAdConfigHandlerRegistered) return !1;
            var d = !1;
            O(Ak, function(c) {
                0 == Hr(a, b, c) && (d = !0)
            });
            return c.wasReactiveAdConfigHandlerRegistered = d
        },
        Hr = function(a, b, c) {
            if (!b) return 256;
            var d = 0,
                e = Y(b),
                f = e.wasReactiveAdCreated[c];
            if (a.google_reactive_ad_format == c || f) d |= 64;
            var h = !1;
            O(e.reactiveTypeDisabledByPublisher, function(a, b) {
                String(c) ===
                    b && (h = !0)
            });
            h && (d |= 128);
            return d | Dr(b, a, c)
        },
        Lr = function(a, b) {
            if (a) {
                var c = Y(a),
                    d = {};
                O(b, function(a, b) {
                    var c = Bk[b];
                    c && (!1 === a || /^false$/i.test(a)) && (d[c] = !0)
                });
                O(Ak, function(a) {
                    var b = Ck[a];
                    d[b] && (c.reactiveTypeDisabledByPublisher[a] = !0)
                })
            }
        };
    var Mr = function(a, b) {
            return function(c) {
                a.document.body ? b(c) : (R("racr_no_body", {}), M(a.document, "DOMContentLoaded", qa(b, c)))
            }
        },
        Nr = function(a, b) {
            return gc(Dk, function(c) {
                return !Dr(a, b, c)
            })
        },
        Or = function(a) {
            var b = [];
            O(a, function(a, d) {
                var e = Bk[d];
                if (e) {
                    var f;
                    if (a) f = 1;
                    else if (!1 === a) f = 2;
                    else return;
                    b.push(e + ":" + f)
                }
            });
            return b.join(",")
        },
        Pr = function(a, b) {
            var c = Ck[a],
                d = {},
                e = b.page_level_pubvars;
            ja(e) && Gc(d, e);
            O(b, function(a, b) {
                Bk[b] == c && ja(a) && Gc(d, a)
            });
            return d
        },
        Qr = function(a, b) {
            var c = b.responseText;
            if (N.JSON) {
                var c =
                    N.JSON.parse(c),
                    d = tf(N);
                if (!d) throw Error("reactive config response in cross-domain iframe");
                var e = d;
                if (!ja(c) || !r(c.pageLevelAds)) throw Error("malformed response for reactive config request");
                dc(c.pageLevelAds, function(b) {
                    var c = a,
                        d = e,
                        l = b.adFormat,
                        m = Er(l);
                    l && m && (b.pubVars = Pr(l, c), b.reqSrc = 2, b = y(m.uc, m, d, b), sh("racr::vapc", th, b))
                });
                c = y(Zi, null, d, c.amaConfig);
                sh("racr::pac", th, c)
            }
        },
        Rr = function(a) {
            R("racr_xhr_error", {
                message: a.message
            })
        };
    var Z = function(a) {
        this.j = a;
        this.Sn = {};
        this.Oi()
    };
    Z.prototype.Oi = function() {
        this.Ha(this.Sn);
        var a = S("ras::hdlr", y(this.tw, this));
        M(this.j, "message", a, void 0)
    };
    Z.prototype.tw = function(a) {
        if (a) {
            var b, c;
            try {
                if (!this.Zi(a.origin)) return;
                c = (b = aj(a.data)) && b.msg_type
            } catch (d) {
                return
            }(c = this.Sn[c]) && c.call(this, b, a)
        }
    };
    Z.prototype.Zi = function(a) {
        return !!ah[a]
    };
    var Sr = function(a, b) {
        Z.call(this, a);
        this.B = b;
        this.Sm = !1
    };
    B(Sr, Z);
    Sr.prototype.Ha = function(a) {
        a["ifsl-v"] = this.Au
    };
    Sr.prototype.Zi = function() {
        return !0
    };
    Sr.prototype.Au = function() {
        if (!this.Sm) {
            var a = {
                msg_type: "manual-send-view"
            };
            try {
                this.B.contentWindow.postMessage(this.j.JSON.stringify(a), "*")
            } catch (b) {}
            this.Sm = !0
        }
    };
    var Tr = function(a) {
        Z.call(this, a)
    };
    B(Tr, Z);
    g = Tr.prototype;
    g.Ha = function(a) {
        a["ifsl-load-rec"] = this.Bu;
        a["ifsl-loaded-content"] = this.Cu
    };
    g.Zi = function() {
        return !0
    };
    g.Bu = function(a, b) {
        if (!b.gh) {
            b.gh = !0;
            var c = Zk(a),
                d = c.ifsl_url,
                e = c.ifsl_purl,
                f = c.ifsl_t,
                c = c.ifsl_img;
            if (d && e && f && c) {
                var h = this.Dm();
                h && h.tryAddRecommendation({
                    url: d,
                    pingUrl: e,
                    title: f,
                    imageUrl: c
                })
            }
        }
    };
    g.Cu = function(a, b) {
        if (!b.gh) {
            b.gh = !0;
            var c = this.Dm();
            if (c) {
                var d = Zk(a),
                    e = parseInt(d["ifsl-lc_h"], 10),
                    d = d["ifsl-lc_id"];
                (d = c.getElementById(d)) && 0 <= e && c.finalizeContentIframeWithHeight(d, e)
            }
        }
    };
    g.Dm = function() {
        var a = Y(this.j);
        return (a = a.stateForType[32]) ? a : null
    };
    var Ur = function(a, b, c) {
        var d = function(a) { 
            try {
                var d = aj(a.data);
                d && d.googMsgType === b && c(d, a)
            } catch (h) {}
        };
        M(a, "message", d);
        return d
    };
    var Vr = function(a) {
        this.rc = a;
        var b;
        b = y(this.Lr, this);
        b = nh.Ue("rach::hdlr", b, void 0, void 0, void 0);
        Ur(a, "rctcnf", b)
    };
    Vr.prototype.Lr = function(a, b) {
        if (ah[b.origin]) {
            var c = a.config,
                d = c.adFormat;
            if (d) {
                var e = Er(d);
                e && (c = y(e.uc, e, this.rc, c), sh("rach::cmh::" + d, th, c))
            } else nh.Sc("rach::cmh", Error("config not recognized " + b.data), void 0, void 0)
        }
    };
    var Xr = function(a, b, c) {
            this.Kg = a;
            this.bm = b;
            this.Dp = c;
            this.jc = 0;
            this.Jg = null;
            this.gk = !1;
            this.current = [];
            this.se = null;
            this.rk = !!Wr && !/iPhone/.test(window.navigator.userAgent)
        },
        Wr = window.requestAnimationFrame || window.webkitRequestAnimationFrame,
        Yr = function(a) {
            return a * a * a
        },
        Zr = function(a) {
            a = 1 - a;
            return 1 - a * a * a
        };
    g = Xr.prototype;
    g.Bf = function(a) {
        this.gk ? this.sg() : (a = this.rk ? a : A(), null === this.Jg && (this.Jg = a), this.jc = (a - this.Jg) / this.Dp, 1 <= this.jc && (this.jc = 1), a = this.se ? this.se(this.jc) : this.jc, this.Ty(a), this.Ed(), 1 == this.jc ? this.Ne() : this.rk ? Wr.call(window, y(this.Bf, this)) : N.setTimeout(y(this.Bf, this), 20))
    };
    g.Ne = function() {};
    g.sg = function() {};
    g.Ed = function() {};
    g.Ty = function(a) {
        this.current = [];
        for (var b = 0; b < this.Kg.length; b++) this.current.push((this.bm[b] - this.Kg[b]) * a + this.Kg[b])
    };
    g.play = function() {
        this.gk = !1;
        this.rk ? Wr.call(window, y(this.Bf, this)) : this.Bf(0)
    };
    g.stop = function() {
        this.gk = !0
    };
    g.reset = function(a, b, c) {
        this.Jg = null;
        this.Kg = a;
        this.bm = b;
        this.Dp = c;
        this.jc = 0
    };
    var $r = function(a, b, c) {
        this.Ab = a;
        this.$b = c || null;
        Xr.call(this, [Number(hf(a))], [1], b)
    };
    B($r, Xr);
    $r.prototype.Ed = function() {
        jf(this.Ab, this.current[0])
    };
    $r.prototype.Ne = function() {
        this.$b && this.$b()
    };
    var as = function(a, b, c, d, e, f) {
        Xr.call(this, [b], [c], d);
        this.Ab = a;
        this.$b = e ? e : null;
        this.se = f || null
    };
    B(as, Xr);
    as.prototype.Ed = function() {
        var a = {
            bottom: this.current[0] + "px"
        };
        J(this.Ab, a)
    };
    as.prototype.Ne = function() {
        this.$b && this.$b()
    };
    var bs = function(a, b, c) {
        this.Ab = a;
        this.$b = c ? c : null;
        Xr.call(this, [Number(hf(a))], [0], b)
    };
    B(bs, Xr);
    bs.prototype.Ne = function() {
        Ke(this.Ab);
        this.$b && this.$b()
    };
    bs.prototype.Ed = function() {
        jf(this.Ab, this.current[0])
    };
    var cs = function(a, b, c, d) {
        this.Ab = a;
        this.fm = b;
        this.Mm = c;
        this.il = d;
        M(this.Ab, this.fm, this.Mm, this.il)
    };
    cs.prototype.remove = function() {
        Sf(this.Ab, this.fm, this.Mm, this.il)
    };
    var ds = function(a) {
        this.ek = a;
        this.reset()
    };
    ds.prototype.add = function(a) {
        var b = A();
        this.Wb.push({
            time: b,
            coords: a
        });
        this.ql(b)
    };
    ds.prototype.Bi = function() {
        this.ql(A());
        var a = this.Wb.length;
        if (0 == a || 1 == a && !this.qj) return new D(0, 0);
        var a = this.Wb[a - 1],
            b = this.qj || this.Wb[0],
            c = a.time - b.time;
        return new D((a.coords.x - b.coords.x) / c, (a.coords.y - b.coords.y) / c)
    };
    ds.prototype.reset = function() {
        this.Wb = [];
        this.Xf = 0;
        this.qj = null
    };
    ds.prototype.ql = function(a) {
        for (var b = this.Xf; b < this.Wb.length; ++b) {
            var c = this.Wb[b];
            if (a - c.time >= this.ek) this.qj = c, delete this.Wb[b];
            else break
        }
        this.Xf = b;
        b >= this.Wb.length && this.reset()
    };
    var es = function(a, b, c, d) {
            this.Na = a;
            this.target = b;
            this.handle = c || b;
            this.ek = d || 100;
            this.cg = this.ag = this.Xi = !1;
            this.oe = this.Ua = this.gb = this.oc = this.oo = this.lo = this.po = this.mo = null;
            new cs(this.handle, "mousedown", y(function(a) {
                0 == a.button && this.Xl(a)
            }, this), !0);
            new cs(this.handle, "touchstart", y(this.Xl, this), !0);
            new cs(this.handle, "click", y(function(a) {
                this.Xi ? (this.Me(), this.Xi = !1) : a.stopPropagation()
            }, this), !0)
        },
        fs = function(a) {
            a = a.touches && a.touches[0] || a;
            return new D(a.clientX, a.clientY)
        };
    g = es.prototype;
    g.rg = function() {
        if (this.oc && this.gb && this.Ua) {
            var a = mc(this.Ua, this.gb),
                b, c = this.oc;
            b = new D(c.x + a.x, c.y + a.y);
            a = this.target;
            b instanceof D ? (c = b.x, b = b.y) : (c = b, b = void 0);
            a.style.left = df(c, !1);
            a.style.top = df(b, !1)
        }
    };
    g.sg = da;
    g.Me = da;
    g.Bi = function() {
        return this.oe.Bi()
    };
    g.Im = function() {
        var a, b = a = this.target,
            c;
        a: {
            c = a;
            var d;
            if (Ud && (d = I && Md("9") && !Md("10"), !(d && p.SVGElement && c instanceof p.SVGElement) && (d = c.parentElement))) {
                c = d;
                break a
            }
            d = c.parentNode;
            c = ja(d) && 1 == d.nodeType ? d : null
        }
        b = cf(b);
        c = cf(c);
        b = new D(b.x - c.x, b.y - c.y);
        a = of(a, "margin");
        a = new D(a.left, a.top);
        return a = mc(b, a)
    };
    g.Xl = function(a) {
        this.ag && this.wp();
        this.ag = !0;
        this.oc = this.Im();
        this.Ua = this.gb = fs(a);
        this.oe = new ds(this.ek);
        this.oe.add(this.gb);
        this.mo = new cs(this.Na, "mousemove", y(this.Wn, this), !0);
        this.po = new cs(this.Na, "touchmove", y(this.Wn, this), !0);
        this.lo = new cs(this.Na, "mouseup", y(this.Op, this), !0);
        this.oo = new cs(this.Na, "touchend", y(this.Op, this), !0)
    };
    g.Wn = function(a) {
        if (this.ag)
            if ($g(a), this.Ua = fs(a), this.oe.add(this.Ua), this.cg) this.rg();
            else {
                var b = this.gb,
                    c = this.Ua;
                a = b.x - c.x;
                b = b.y - c.y;
                a = Math.sqrt(a * a + b * b);
                10 <= a && (this.rg(), this.cg = !0)
            }
    };
    g.Op = function(a) {
        this.cg ? ($g(a), this.Ua = fs(a), this.sg()) : this.Xi = !0;
        this.wp()
    };
    g.wp = function() {
        this.cg = this.ag = !1;
        this.oe = this.Ua = this.gb = this.oc = null;
        this.mo.remove();
        this.po.remove();
        this.lo.remove();
        this.oo.remove()
    };
    var gs = {},
        hs = function(a, b, c, d, e, f) {
            this.Sa = a;
            this.u = b;
            this.L = c;
            this.Tf = d;
            this.Xh = e || da;
            this.fo = f || da
        };
    g = hs.prototype;
    g.Cf = function() {};
    g.Ae = function() {
        return 0
    };
    g.qd = function() {
        return 0
    };
    g.lm = function() {
        return null
    };
    g.ma = function(a) {
        a && this.Xh()
    };
    g.gf = function() {
        this.fo();
        this.fo = da
    };
    var is = function(a, b, c) {
            return {
                background: "rgba(0,0,0,0.65)",
                boxShadow: "0 -5px 5px -5px rgba(0,0,0,0.5)",
                zIndex: 999999,
                position: "fixed",
                left: a + "px",
                bottom: b + "px",
                opacity: c ? "1" : "0"
            }
        },
        js = function(a, b, c, d, e, f) {
            hs.call(this, a, b, c, d, e, f)
        };
    B(js, hs);
    gs.def = js;
    js.prototype.Lg = function(a, b) {
        if ("bottom" != b) throw Error("unsupported reactive type");
        J(a, is(0, 0, !1));
        var c = new $r(a, 350, y(this.gf, this));
        c.play()
    };
    var ls = function(a, b, c, d, e, f) {
        hs.call(this, a, b, c, d, e, f);
        this.mn = !1;
        a = ks;
        this.Hs = +this.Sa[a.$p] || 500;
        this.Fg = +this.Sa[a.Wg] || 50;
        this.Fg >= Sk(this.u) && (this.Fg = 0);
        this.Ov = "true" == this.Sa[a.Yg]
    };
    B(ls, hs);
    gs.scf = ls;
    var ks = {
        $p: "docking_delay",
        Wg: "scroll_threshold",
        Yg: "measure_scroll_from_bottom"
    };
    ls.prototype.Lg = function(a, b) {
        if ("bottom" != b) throw Error("unsupported reactive type");
        J(a, is(0, -1 * this.Tf.height, !0))
    };
    ls.prototype.Cf = function(a) {
        if (!this.mn) {
            var b = Tk(this.u),
                c = Sk(this.u),
                c = this.Ov ? c - this.Fg - Qk(this.u) : this.Fg;
            b >= c && (a = new as(a, -1 * this.Tf.height, 0, this.Hs, y(this.gf, this), Zr), a.play(), this.mn = !0)
        }
    };
    var ns = function(a, b, c, d, e, f) {
        hs.call(this, a, b, c, d, e, f);
        this.Xa = b.document.createElement("ins");
        this.u = b;
        this.Ky = this.vl(a) || "bl";
        this.Id = 1;
        this.Ic = .1;
        a = ms;
        this.Rj = +this.Sa[a.Wg] || 0;
        this.ay = "false" != this.Sa[a.xq];
        this.Nv = "true" == this.Sa[a.Yg];
        this.N = this.W = !1;
        this.Ul = 50;
        this.hm = this.Sa[a.wk] || "";
        this.Re = 0;
        this.zc = d;
        this.ud = 0 >= this.Rj;
        this.ej = "true" == this.Sa[a.iq];
        this.yd = "true" == this.Sa[a.hq];
        this.vw(this.Xa, this.Ae(), this.Ky);
        this.Mp = this.Xa.querySelector(".up");
        this.Vl = this.Xa.querySelector(".down");
        this.Le = !1;
        this.la = null;
        !this.yd && window.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(y(this.Mu, this), 300);
        this.Sp = b.innerHeight
    };
    B(ns, hs);
    gs.gr = ns;
    var ms = {
            fz: "ui",
            iq: "scroll_detached",
            hq: "dismissable",
            Wg: "scroll_threshold",
            xq: "show_on_insufficient_scroll_available",
            Yg: "measure_scroll_from_bottom",
            wk: "expId"
        },
        os = {
            xk: "bl",
            yk: "blns"
        },
        ps = {
            bl: "bl",
            blns: "blns"
        };
    g = ns.prototype;
    g.vl = function(a) {
        return ps[a.gvar]
    };
    g.Bm = function(a) {
        var b = os;
        return a === b.xk || a === b.yk ? "#D8D8D8" : "#505050"
    };
    g.xt = function(a) {
        var b = os;
        return a === b.xk || a === b.yk ? "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px" : "none"
    };
    g.vw = function(a, b, c) {
        J(a, {
            "background-color": this.Bm(c),
            display: "block",
            position: "relative",
            "z-index": 1,
            height: b + "px",
            "box-shadow": this.xt(c)
        });
        var d = this.u.document.createElement("span");
        d.innerHTML = this.Ll(c);
        d.addEventListener("click", function(a) {
            a.target === d && (a.preventDefault && a.preventDefault(), a.stopImmediatePropagation && a.stopImmediatePropagation(), a.stopPropagation && a.stopPropagation())
        });
        b = d.style;
        b.display = "block";
        b.position = "absolute";
        b.width = "70px";
        b.height = "45px";
        b.bottom = "0";
        b.left =
            "50%";
        b.marginLeft = "-35px";
        a.appendChild(d)
    };
    g.Mu = function() {
        var a = this.u.innerHeight;
        if (2 > Math.abs(a - 460) || 2 > Math.abs(a - 529)) a < this.Sp && 2 > Math.abs(Tk(this.u) - this.Re - 68) && this.cw(), this.Sp = a
    };
    g.cw = function() {
        this.Le = !0;
        this.N && this.show()
    };
    g.lm = function() {
        return this.Xa
    };
    g.Ae = function() {
        return 15
    };
    g.qd = function() {
        return 30
    };
    g.Cm = function(a) {
        a = a ? 'style="filter:url(#dropShadowBottomRight)"' : "";
        return '<svg style="margin: 0 0 0 -30px; position: absolute; bottom:0; left:50%;display: block; width: 60px;height: 30px;"xmlns="http://www.w3.org/2000/svg"><defs><filter id="dropShadowTop" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feComponentTransfer in="SourceAlpha" result="TransferredAlpha">  <feFuncR type="discrete" tableValues="0.8"/>  <feFuncG type="discrete" tableValues="0.8"/>  <feFuncB type="discrete" tableValues="0.8"/></feComponentTransfer><feGaussianBlur in="TransferredAlpha" stdDeviation="2"/><feOffset dx="0" dy="0" result="offsetblur"/><feMerge>  <feMergeNode/>  <feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="dropShadowBottomRight" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feComponentTransfer in="SourceAlpha" result="TransferredAlpha">  <feFuncR type="discrete" tableValues="0.5"/>  <feFuncG type="discrete" tableValues="0.5"/>  <feFuncB type="discrete" tableValues="0.5"/></feComponentTransfer><feGaussianBlur in="TransferredAlpha" stdDeviation="2"/><feOffset dx="1" dy="1" result="offsetblur"/> <feMerge>  <feMergeNode/>  <feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M10,15 C 20,0 40,0 50,15 Z"stroke="#D8D8D8" stroke-width="1" fill="#D8D8D8" style="filter:url(#dropShadowTop)"/><rect x="0" y="15" width="60" height="15" style="fill:#D8D8D8"/><g class="up" stroke="#888888" stroke-width="2px" stroke-linecap="square" ' + a +
            '><line x1="22" y1="13" x2="38" y2="13"/><line x1="22" y1="17" x2="38" y2="17"/><line x1="22" y1="21" x2="38" y2="21"/></g><g class="down" stroke="#888888" stroke-width="2px" stroke-linecap="square" ' + a + '><line x1="22" y1="13" x2="38" y2="13"/><line x1="22" y1="17" x2="38" y2="17"/><line x1="22" y1="21" x2="38" y2="21"/></g></svg>'
    };
    g.Ll = function(a) {
        switch (a) {
            case "bl":
                return this.Cm(!0);
            case "blns":
                return this.Cm(!1);
            default:
                throw Error("Unexpected variant: " + a);
        }
    };
    g.ic = function(a, b, c) {
        a = {
            i: a,
            dc: this.N ? "1" : "0",
            fdc: b ? "1" : "0",
            ds: this.yd ? "1" : "0",
            expId: this.hm,
            sc: this.ej ? "1" : "0",
            st: this.Rj,
            off: c
        };
        a.req = this.L.src;
        R("flgr", a, 1)
    };
    g.Me = function(a) {
        $g(a);
        this.W || (this.Le = !0, this.N ? this.show() : this.ma(this.yd), this.ic("c", !this.N, 0, !1))
    };
    g.dd = function() {
        this.Mp.style.display = "none";
        this.Vl.style.display = ""
    };
    g.mc = function() {
        this.Mp.style.display = "";
        this.Vl.style.display = "none"
    };
    g.Rt = function() {
        var a = this.Rj,
            b;
        b = this.u;
        b = Math.max(0, (Sk(b) || 0) - Qk(b));
        return b < a ? this.ay ? 0 : Infinity : this.Nv ? b - a : a
    };
    g.show = function() {
        if (!this.W) {
            var a = parseInt(this.la.style.bottom, 10),
                b = Tk(this.u);
            this.ir(a, b)
        }
    };
    g.ir = function(a, b) {
        if (!this.ud && b >= this.Rt() || this.ud && 0 != a) {
            this.W = !0;
            var c = new as(this.la, a, 0, -a / (this.Id * this.Ic), y(function() {
                this.N = this.W = !1;
                this.ud = !0;
                this.dd();
                this.gf()
            }, this), Zr);
            c.play()
        } else this.N = !1, this.dd()
    };
    g.ma = function(a) {
        if (!this.W) {
            var b = parseInt(this.la.style.bottom, 10),
                c = -this.zc.height - (a ? this.qd() : 0),
                c = c * this.Id;
            b != c ? (this.W = !0, b = new as(this.la, b, c, (b - c) / (this.Id * this.Ic), y(function() {
                this.W = !1;
                this.N = !0;
                this.mc();
                a && this.Xh()
            }, this), Yr), b.play()) : (this.N = !0, this.mc())
        }
    };
    g.tu = function() {
        J(this.Xa, {
            visibility: "hidden"
        });
        J(this.la, {
            background: "transparent"
        })
    };
    g.Yx = function() {
        J(this.Xa, {
            visibility: "visible"
        });
        J(this.la, {
            background: "rgba(0,0,0,1)"
        })
    };
    g.Lg = function(a, b) {
        if ("bottom" != b) throw Error("unsupported reactive type");
        this.Xa.addEventListener("click", y(this.Me, this));
        J(a, {
            opacity: 1
        });
        var c = this.u.document;
        c && (this.la = a, new qs(this, c, this.zc.height, a, this.Xa), J(a, {
            background: "rgba(0,0,0,1)",
            zIndex: 999999,
            position: "fixed",
            left: "0px",
            bottom: -this.Tf.height - this.qd() + "px"
        }), ol() && this.yy(Rk(this.u) / 320), this.show())
    };
    g.eo = function() {
        if (!this.W) {
            var a = parseInt(this.la.style.bottom, 10),
                b = this.zc.height / 2;
            a >= this.Id * -b ? (this.show(), this.ic("d", !1, a, !1)) : (this.ma(this.yd), this.ic("d", !0, a, !1))
        }
    };
    g.Cf = function() {
        if (this.ud) {
            var a = Tk(this.u),
                b = a - this.Re;
            if (!(10 > Math.abs(b))) {
                var b = 10 > a,
                    c = a + 10 + Qk(this.u) > Sk(this.u);
                this.ej || this.Le || this.W || (this.N || b || c ? this.N && (b || c) && this.show() : this.ma(!1));
                this.Re = a
            }
        } else this.show()
    };
    g.yy = function(a) {
        this.Id = a;
        var b = this.la.style;
        b[bh("transform")] = 1 === a ? "" : "scale(" + a + "," + a + ")";
        b[bh("transformOrigin")] = 1 === a ? "" : "center bottom"
    };
    var qs = function(a, b, c, d, e) {
        this.Dv = c;
        this.Df = a;
        es.call(this, b, d, e)
    };
    B(qs, es);
    qs.prototype.sg = function() {
        this.Df.eo()
    };
    qs.prototype.rg = function() {
        if (null !== this.oc && null !== this.gb && null !== this.Ua) {
            var a = mc(this.Ua, this.gb),
                a = this.oc.y - a.y;
            0 < a && (a = 0);
            var b = this.Df.Id * this.Dv;
            a < -b && (a = -b);
            J(this.target, {
                bottom: a + "px"
            })
        }
    };
    qs.prototype.Im = function() {
        return new D(0, parseInt(this.target.style.bottom, 10))
    };
    var ss = function(a, b, c, d, e, f) {
        ns.call(this, a, b, c, d, e, f);
        this.Sd = this.ie = null;
        this.Ic = .7;
        this.N = !0;
        this.zb = this.Vd = this.tk = this.Yi = !1;
        this.Ig = null;
        a = rs;
        this.Nd = "true" == this.Sa[a.zq];
        this.km = !this.Nd;
        this.Eu = +this.Sa[a.fq];
        a = +this.Sa[a.eq] || 280;
        this.cn = a - 280;
        this.Np = this.Xa.querySelector(".up");
        this.Wl = this.Xa.querySelector(".down");
        this.N ? this.mc() : this.dd()
    };
    B(ss, ns);
    gs.ea = ss;
    var rs = {
            kz: "ht",
            zq: "expand_at_start",
            fq: "initial_exp_time",
            eq: "initial_exp_height",
            wk: "expId"
        },
        ts = {
            "box-shadow": "rgb(123, 123, 123) 0px 0px 20px 15px",
            width: "100%",
            height: "0px",
            display: "block",
            "z-index": "-200",
            position: "fixed",
            top: "100%"
        },
        us = {
            width: "300px",
            height: "100%",
            display: "block",
            position: "absolute",
            "z-index": "5",
            margin: "auto",
            "margin-bottom": "0px",
            left: 0,
            right: 0
        },
        vs = {
            top: "0px",
            width: "100%",
            height: "100%",
            display: "block",
            margin: "0 auto",
            position: "absolute",
            "z-index": "-9999"
        },
        ws = {
            width: "300px",
            height: "100%",
            margin: "0 auto",
            display: "block",
            position: "relative",
            "box-shadow": "rgba(0, 0, 0, 0.4) 0px 5px 15px 0px"
        },
        xs = {
            background: "#ccc",
            width: "300px",
            left: 0,
            right: 0,
            margin: "auto",
            "margin-bottom": "0px",
            "border-radius": "0px",
            height: "20px",
            display: "block"
        },
        ys = {
            eab: "eab"
        };
    g = ss.prototype;
    g.vl = function(a) {
        return ys[a.gvar]
    };
    g.Bm = function(a) {
        switch (a) {
            case "eab":
                return "rgba(0, 0, 0, 0)";
            default:
                return "rgba(80, 80, 80, 1)"
        }
    };
    g.Ae = function() {
        return 20
    };
    g.Ll = function(a) {
        switch (a) {
            case "eab":
                return '<svg style="margin: 0 0 0 -30px; position: absolute; bottom:0; top:0; margin-top:5px;left:50%; display: block; width: 60px;height: 10px;" width="16px" height="10px" viewBox="0 0 16 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Chevron</title><defs></defs><g class="up" id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Chevron" sketch:type="MSArtboardGroup" fill="#FFFFFF"><path d="M1.69705629,9.54558441 L8.69705619,2.54558441 L6.99999991,2.54558442 L14,9.54558442 L15.6970563,7.84852813 L8.69705618,0.848528132 L7.84852803,0 L6.9999999,0.848528143 L0,7.84852814 L1.69705629,9.54558441 L1.69705629,9.54558441 Z" id="Shape-Copy" sketch:type="MSShapeGroup"></path></g></g><g class="down" id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="reverse-chevron" sketch:type="MSArtboardGroup" fill="#FFFFFF"><path d="M8.69705619,2.54558441 L6.99999991,2.54558442 C6.99999991,2.54558442 9.72357051,5.26915497 11.0853558,6.63094025 C12.0569039,7.60248831 14,9.54558442 14,9.54558442 L15.6970563,7.84852813 L8.69705618,0.848528132 L7.84852803,8.8817842e-16 L6.9999999,0.848528143 L2.66453526e-15,7.84852814 L1.69705629,9.54558441 L8.69705619,2.54558441 Z" id="Shape-Copy" sketch:type="MSShapeGroup" transform="translate(7.848528, 4.772792) rotate(-180.000000) translate(-7.848528, -4.772792) "></path></g></g></svg>';
            default:
                throw Error("Unexpected variant: " +
                    a);
        }
    };
    g.dd = function() {
        this.Np.style.display = "none";
        this.Wl.style.display = ""
    };
    g.mc = function() {
        this.Np.style.display = "";
        this.Wl.style.display = "none"
    };
    g.ic = function(a, b, c, d) {
        a = {
            i: a,
            dc: this.N ? "1" : "0",
            expId: this.hm,
            off: c
        };
        this.Nd && d && !this.Vd && (a.initExpDismissal = "1");
        null != this.Ig ? a.engLen = A() - this.Ig : this.zb && this.N ? a.dismissedFromDock = "1" : d || (a.opening = "1");
        a.req = this.L.src;
        R("flgr", a, 1)
    };
    g.Me = function(a) {
        $g(a);
        this.Yi = !0;
        this.W || (this.Le = !0, this.N ? this.show() : this.ma(this.yd), this.Nd && !this.zb || this.ic("c", !1, 0, !1))
    };
    g.show = function() {
        if (!this.W) {
            var a = parseInt(this.la.style.bottom, 10);
            if (this.Nd && !this.km) {
                this.Fu(a);
                if (this.tk) return;
                setTimeout(y(function() {
                    this.Nl()
                }, this), this.Eu)
            }!this.zb && this.Nd || this.jm(a)
        }
    };
    g.Fu = function(a) {
        var b = this.cn;
        this.dd();
        this.W = !0;
        a = new as(this.la, a, b, -a / this.Ic, y(function() {
            this.N = this.W = !1;
            this.ud = this.km = !0;
            this.gf()
        }, this), Zr);
        a.play()
    };
    g.Nl = function() {
        if (!this.zb) {
            this.W = !0;
            var a = this.cn,
                a = new as(this.la, a, -200, 200 / this.Ic, y(function() {
                    this.W = !1;
                    this.N = !0;
                    this.mc();
                    this.zb = !0
                }, this), Yr);
            a.play()
        }
    };
    g.jm = function(a) {
        if (!this.W)
            if (0 <= a) this.N = !1, this.dd();
            else {
                this.W = !0;
                var b = this.Ul - this.zc.height;
                this.Yi && this.N && (b = 0, this.N = !1);
                this.Vd && (b = 0, this.N = !1);
                a = new as(this.la, a, b, -a / this.Ic, y(function() {
                    this.W = !1;
                    this.N ? this.mc() : (this.Ig = A(), this.dd(), this.gf());
                    this.Vd = !1
                }, this), Zr);
                a.play();
                J(this.Sd, {
                    "margin-bottom": "0px",
                    height: "20px"
                })
            }
    };
    g.ma = function(a) {
        if (!this.W)
            if (this.zb || this.tk) {
                var b = parseInt(this.la.style.bottom, 10),
                    c = -this.zc.height - (a ? this.qd() : 0);
                b != c ? (this.W = !0, b = new as(this.la, b, c, (b - c) / this.Ic, y(function() {
                    this.W = !1;
                    this.N = !0;
                    this.mc();
                    a && this.Xh()
                }, this), Yr), b.play(), this.ie && J(this.ie, {
                    display: "none"
                })) : (this.N = !0, this.mc())
            } else this.Nl()
    };
    g.Lg = function(a, b) {
        if ("bottom" != b) throw Error("unsupported reactive type");
        this.la = a;
        var c = this.u.document;
        J(a, {
            background: "transparent",
            opacity: 1,
            zIndex: 999999,
            position: "fixed",
            left: "0px",
            bottom: -this.Tf.height - this.qd() + "px"
        });
        this.ie = this.u.document.createElement("ins");
        a.appendChild(this.ie);
        J(this.ie, ts);
        this.Sd = c.createElement("ins");
        a.insertBefore(this.Sd, this.Xa);
        J(this.Sd, us);
        this.Sd.addEventListener("click", y(this.Me, this));
        new zs(this, c, this.zc.height, a, this.Sd);
        var d = c.createElement("div");
        a.appendChild(d);
        J(d, vs);
        c = c.createElement("ins");
        d.appendChild(c);
        J(c, ws);
        J(this.Xa, xs);
        this.show()
    };
    g.Cf = function() {
        if (this.ud) {
            var a = Tk(this.u),
                b = a - this.Re;
            if (!(10 > Math.abs(b))) {
                var b = 10 > a,
                    c = a + 10 + Qk(this.u) > Sk(this.u);
                this.ej || this.Le || this.W || (this.N || b || c ? this.N && (b || c) && this.show() : this.ma(!1));
                this.Re = a
            }
        } else this.show()
    };
    g.eo = function() {
        this.tk = !0;
        if (!this.W) {
            var a = parseInt(this.la.style.bottom, 10),
                b;
            this.Yi = !0;
            !this.Nd || this.zb || this.Vd ? this.zb && this.Vd ? (this.jm(a), this.ic("d", !1, a, !1)) : (b = this.N ? this.zc.height - this.Ul : 0, this.ic("d", !1, a, !1), a >= -b ? (this.show(), 0 == a && (this.Ig = A())) : this.ma(this.yd)) : (this.ic("d", !1, a, !0), this.zb = !0, this.ma(!0))
        }
    };
    var zs = function(a, b, c, d, e) {
        qs.call(this, a, b, c, d, e);
        this.Df = a
    };
    B(zs, qs);
    zs.prototype.rg = function() {
        if (null !== this.oc && null !== this.gb && null !== this.Ua) {
            var a = this.Bi();
            0 > a.y && (this.Df.Vd = !0);
            a = mc(this.Ua, this.gb);
            a = this.oc.y - a.y;
            0 < a && (a = 0);
            J(this.target, {
                bottom: a + "px"
            })
        }
    };
    var As = function(a, b, c) {
        this.Ya = a;
        this.L = b;
        this.j = c;
        this.Di = null;
        this.Km = !1
    };
    g = As.prototype;
    g.at = function() {
        return this.L
    };
    g.Am = function(a) {
        if (!this.ci) {
            this.ci = [];
            for (var b = this.Ya; b;) {
                if (this.av(b)) {
                    this.Di = b;
                    break
                } else this.ci.push(b);
                b = 1 === b.parentNode.nodeType ? b.parentNode : null
            }
            this.Km = !0
        }
        b = this.ci.slice();
        a && b.push(this.Di);
        return b
    };
    g.we = function(a, b, c) {
        b = this.Am(b);
        var d;
        if (c)
            for (c = b.length - 1; 0 <= c; --c)(d = b[c]) && a.call(this, d, c, b);
        else
            for (c = 0; c < b.length; ++c)(d = b[c]) && a.call(this, d, c, b)
    };
    g.av = function(a) {
        return Rq(a, this.wt())
    };
    g.wt = function() {
        return "adsbygoogle"
    };
    g.I = function() {
        this.Km || this.Am(!1);
        return this.Di
    };
    g.Zu = function(a) {
        return cl(a, this.L.contentWindow)
    };
    var Bs = function(a, b, c, d) {
        As.call(this, a, b, c);
        this.ue = this.ki = this.Yh = !1;
        this.zd = null;
        this.fw = of(c.document.body, "padding");
        this.Cd = 0;
        this.Qm = !1;
        this.gg = !0;
        this.jk = d;
        this.Zd = this.bt();
        this.Ci = null;
        this.Pl = this.jh = this.sm = this.Qp = !1;
        this.Nc();
        this.Ia = y(this.cc, this);
        M(this.j, "orientationchange", this.Ia);
        this.Ja = y(this.$e, this);
        M(this.j, "resize", this.Ja);
        this.P = y(this.Eg, this);
        M(this.j, "scroll", this.P);
        this.Ho = y(this.uy, this);
        M(this.j, "touchcancel", this.Ho);
        this.Io = y(this.vy, this);
        M(this.j, "touchend",
            this.Io);
        this.Jo = y(this.wy, this);
        M(this.j, "touchmove", this.Jo);
        this.Ko = y(this.xy, this);
        M(this.j, "touchstart", this.Ko);
        this.Go = y(this.Kq, this);
        M(this.L, "load", this.Go)
    };
    B(Bs, As);
    var Cs = {
        ui: "gr",
        gvar: "bl",
        scroll_detached: "true",
        dismissable: "true"
    };
    g = Bs.prototype;
    g.Bx = function(a) {
        if (!this.Rb) {
            a = Zk(a);
            var b = this.j,
                c = a;
            if (Nk(2, b.location)) {
                var d;
                d = "google_anchor_debug";
                b = b.location.hash || ""; - 1 != b.indexOf(d) ? d = b.substring(b.indexOf(d) + d.length, b.length) : (d = Lk(d), d = -1 != b.indexOf(d) ? b.substring(b.indexOf(d) + d.length, b.length) : "");
                if (d) c.ui = d;
                else
                    for (var e in Cs) !Cs.hasOwnProperty(e) || e in c || (c[e] = Cs[e])
            }
            this.Qp = "true" == a.use_manual_view || sl() || ul() || vl();
            if (e = a.af_l) this.Pl = "true" == e;
            this.Kv(a);
            this.Rb = this.Ur(a);
            this.Ci = this.xr(a);
            this.Jv()
        }
    };
    g.xr = function() {
        var a = this.Zd.height + this.Rb.Ae();
        return new bd(this.Zd.width, a)
    };
    g.Kv = function(a) {
        var b = ra(a.ht, -1);
        0 < b && (this.Zd.height = b, this.we(function(a) {
            kn(a, null, b)
        }, !1, !0), kn(this.L, null, b))
    };
    g.Jv = function() {
        var a = this.I(),
            b = this.Rb.lm();
        a && b && a.insertBefore(b, a.firstChild)
    };
    g.Ur = function(a) {
        var b = a.ui,
            c = "gr" == b,
            d = !c,
            d = y(this.Gs, this, d),
            e = y(this.xw, this),
            b = gs[b] || js;
        a = new b(a, this.j, this.L, this.Zd, d, e);
        c && null != window.au && (c = window.au, c.wv("expanding", a.tu, !1, a), c.wv("collapsed", a.Yx, !1, a));
        return a
    };
    g.Gs = function(a) {
        this.Yh || (this.Yh = !0, Ef(this.j, "orientationchange", this.Ia), Ef(this.j, "resize", this.Ja), Ef(this.j, "scroll", this.P), Ef(this.j, "touchcancel", this.Ho), Ef(this.j, "touchend", this.Io), Ef(this.j, "touchmove", this.Jo), Ef(this.j, "touchstart", this.Ko), a ? (a = new bs(this.I(), 250, y(this.Kj, this)), a.play()) : this.Kj())
    };
    g.gu = function() {
        this.Rb.ma(!0)
    };
    g.Nc = function() {
        this.gg && (this.I().style.display = "none", this.Kj(), this.gg = !1)
    };
    g.Qc = function() {
        this.ki = !0;
        if (!this.Qm && this.gl() && (this.jh || !this.Pl)) {
            var a = this.I();
            a && (this.Zq(), this.Rb.Lg(a, this.jk), this.Hg(), this.Qm = !0)
        }
    };
    g.Hg = function() {
        var a = this.I();
        a && (this.Rb.Cf(a), this.gg || (this.Yq(), a.style.display = "block", this.gg = !0))
    };
    g.Yq = function() {
        this.j.document.body && Ds(this.j.document.body, this.Vt())
    };
    g.Zq = function() {
        var a = this.I();
        if (a && this.Ya) {
            var b = sl() || ul() || vl() || ol();
            ef(a, this.Ci);
            b && (a.style.width = "100%");
            var c = this.Zd;
            this.we(function(a) {
                ef(a, c);
                b && (a.style.width = "100%")
            }, !1, !0);
            this.L.style.display = "block";
            this.L.style.margin = "0 auto"
        }
    };
    g.Vt = function() {
        var a;
        switch (this.jk) {
            case "bottom":
                if (a = of(this.j.document.body, "padding")) {
                    var b = this.Rb.qd() - this.Rb.Ae();
                    a.bottom += this.Ci.height + b
                }
        }
        return a
    };
    g.bt = function() {
        var a;
        switch (this.jk) {
            case "bottom":
                a = this.j.innerWidth;
                var b = ff(gf, this.L).height || +this.L.height || 0;
                a = new bd(a, b)
        }
        return a
    };
    g.zu = function() {
        return V(this.j)
    };
    g.cc = function() {
        this.qc()
    };
    g.$e = function() {
        this.qc()
    };
    g.Eg = function() {
        this.qc()
    };
    g.uy = function() {
        this.zd = "touchcancel";
        this.j.setTimeout(y(function() {
            "touchcancel" == this.zd && (this.Cd = 0, this.ue = !1, this.qc())
        }, this), 1E3)
    };
    g.vy = function(a) {
        this.zd = "touchend";
        var b = a.touches.length;
        2 > b ? this.j.setTimeout(y(function() {
            "touchend" == this.zd && (this.Cd = b, this.ue = !1, this.qc())
        }, this), 1E3) : (this.Cd = b, this.qc())
    };
    g.wy = function(a) {
        this.zd = "touchmove";
        this.Cd = a.touches.length;
        this.ue = !0;
        this.qc()
    };
    g.xy = function(a) {
        this.zd = "touchstart";
        this.Cd = a.touches.length;
        this.ue = !1;
        this.qc()
    };
    g.Kq = function() {
        if (!this.jh && (this.jh = !0, Ef(this.L, "load", this.Go), this.ki && this.Qc(), Nk(2, this.j.location))) {
            var a = Y(this.j),
                a = ml(a, 2);
            null != a && a.displayAdLoadedContent()
        }
    };
    g.Kj = function() {
        this.j.document.body && Ds(this.j.document.body, this.fw)
    };
    g.cv = function() {
        return 2 <= this.Cd && this.ue
    };
    g.qc = function() {
        this.ki && !this.Yh && !this.cv() && this.gl() ? (this.Qc(), this.Hg()) : this.Nc()
    };
    g.gl = function() {
        var a;
        this.zu() ? sl() || ul() || vl() ? (a = this.j.innerWidth, a = 320 <= a && 420 >= a) : a = Xk(this.j) : a = !1;
        return a
    };
    var Ds = function(a, b) {
        a.style.paddingTop = b.top + "px";
        a.style.paddingRight = b.right + "px";
        a.style.paddingBottom = b.bottom + "px";
        a.style.paddingLeft = b.left + "px"
    };
    Bs.prototype.xw = function() {
        if (this.Qp && !this.sm) {
            this.sm = !0;
            var a = y(this.If, this),
                a = uh("fas::fsv", a);
            a()
        }
    };
    Bs.prototype.If = function() {
        var a = {
            msg_type: "manual-send-view"
        };
        this.at().contentWindow.postMessage(this.j.JSON.stringify(a), Wh("googleads.g.doubleclick.net", ""))
    };
    var Es = function(a, b) {
        Z.call(this, a);
        this.ni = b;
        this.Aa = this.Sl = !1
    };
    B(Es, Z);
    Es.prototype.Fs = function() {
        this.Sl || (this.Sl = !0, this.ni.gu())
    };
    Es.prototype.Bb = function(a) {
        this.Aa || (this.Aa = !0, this.ni.Bx(a), this.ni.Qc())
    };
    Es.prototype.Ha = function(a) {
        a.fill = this.Bb;
        a.dismiss = this.Fs
    };
    var Hs = function(a, b, c) {
        As.call(this, a, b, c);
        this.C = c.document;
        this.wo = c.location.hostname;
        this.uj = Fs(c.location.href);
        this.Fe = [];
        this.ae = this.ba = !1;
        this.O = 0;
        this.Gn = !1;
        this.Xn = null;
        this.Ce = !0;
        this.Hi = !1;
        this.Ja = this.Ia = null;
        this.ep = this.ap = -1;
        this.La = null;
        this.ff();
        this.ha = this.Dc = this.Cc = this.wb = this.uf = null;
        this.Uk = "";
        this.Yb = null;
        this.Co = this.gn = !1;
        this.M = null;
        this.Je = this.Ej = !1;
        this.cp = 0;
        this.Jd = this.pp = !1;
        this.Ad = 0;
        this.dk = "330";
        this.he = !1;
        this.Tk = this.Vi = !0;
        this.ad = null;
        this.xb = [];
        this.sb = Ik(this.j.location,
            "google_ia_debug");
        this.Xb = new Gs;
        this.Qg = null
    };
    B(Hs, As);
    var Is = /^(www\.|m\.|mobile\.)*/i,
        Js = {
            "animation-name": "fadeIn",
            "-webkit-animation-name": "fadeIn",
            "animation-duration": "1.5s",
            "-webkit-animation-duration": "1.5s",
            "animation-timing-function": "ease",
            "-webkit-animation-timing-function": "ease"
        },
        Ks = function(a) {
            this.ug = a.body.style.overflow;
            this.wg = a.body.style.position;
            this.lk = a.body.style.top;
            this.sd = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.cd = 0
        },
        Ls = {
            overflow: "hidden",
            position: "fixed"
        },
        Ms = {
            filter: "blur(5px)",
            webkitFilter: "blur(5px)"
        };
    Ks.prototype.Ah = function(a, b, c) {
        this.cd = Tk(b);
        J(a.body, "top", -this.cd + "px");
        J(a.body, Ls);
        c && J(a.body, Ms)
    };
    Ks.prototype.Nj = function(a, b) {
        J(a.body, {
            filter: this.sd,
            webkitFilter: this.sd,
            overflow: this.ug,
            position: this.wg,
            top: this.lk
        });
        b.scrollTo(0, this.cd)
    };
    var Ns = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        Os = {
            width: "100%",
            height: "100%"
        },
        Ps = {
            left: "0",
            position: "absolute",
            top: "0"
        },
        Qs = {
            width: "100%",
            "min-height": "100%"
        },
        Rs = {
            google_vignette_inst: "border:1px solid #000;color:#6C12B9",
            google_vignette_clklist: "border:1px solid #00F;color:#00F"
        },
        Fs = function(a) {
            var b = a.match(nk);
            a = b[5] || "";
            b = b[6];
            return a + (b ? "?" + b : "")
        };
    g = Hs.prototype;
    g.wx = function(a) {
        this.wb = a
    };
    g.Sx = function(a) {
        this.Qg = a
    };
    g.ux = function(a) {
        this.Cc = a
    };
    g.vx = function(a) {
        this.Dc = a && a.length ? new RegExp("\\b(" + a.join("|").toLowerCase() + ")\\b", "ig") : null
    };
    g.Kx = function(a) {
        this.Co = a
    };
    g.Fx = function(a) {
        this.gn = a
    };
    g.yi = function() {
        return this.gn || Ik(this.j.location, "google_ia_debug_allow_onclick")
    };
    g.Mx = function(a) {
        this.ha = a
    };
    g.Ax = function(a) {
        this.M = a
    };
    g.Nx = function(a) {
        this.Ej = a
    };
    g.Yj = function() {
        var a = Tg(this.I(), !0); - 1 == a.indexOf("body") && (this.he = !0)
    };
    g.Dx = function(a) {
        this.Hi = a
    };
    g.Gx = function(a) {
        this.Vi = a
    };
    g.tf = function() {
        return this.Vi
    };
    g.Sf = function(a) {
        if (!this.tf()) return null;
        for (a = a.target; a;) {
            if ("A" == a.nodeName) {
                if (this.jd(a, a.ownerDocument != this.C)) return a;
                break
            }
            a = a.parentElement
        }
        return null
    };
    g.Lq = function(a) {
        this.ae || this.j.navigator && this.Vu(this.j.navigator.userAgent) || (this.ae = !0, this.Ie() ? this.un() || this.Ea({
            sai: 1
        }, .1) : (this.sb && this.zl(), this.We = a, this.tf() ? this.Ti() : (this.Si(!0, !0), this.Vv())))
    };
    g.Rl = function() {
        this.Ie() && this.Ea({
            ttu: A() - this.Ad
        }, .1);
        this.Ka(!1)
    };
    g.Pm = function() {
        return !!this.O
    };
    g.ma = function() {
        this.ba || this.Ea({
            Gy: A() - this.O
        }, 1);
        this.Ka(!1)
    };
    g.Xj = function(a) {
        this.Uk = a
    };
    g.nk = function() {
        var a = this.I();
        a && (a.style.backgroundColor = "transparent")
    };
    g.By = function() {
        this.Je = !0
    };
    g.Px = function(a) {
        this.dk = a
    };
    g.Ie = function() {
        return this.Je
    };
    g.Nq = function() {
        return this.ba
    };
    g.Lv = function(a) {
        this.Ej && this.ba && (this.Ol(), this.Yb == a && this.Ea({
            lab: A() - this.O
        }, 1))
    };
    g.Vu = function(a) {
        if (!a || !this.Qg) return !1;
        for (var b = 0; b < this.Qg.length; b++)
            if (0 <= a.indexOf(this.Qg[b])) return !0;
        return !1
    };
    g.Qc = function(a, b, c) {
        if (this.Pm()) return !1;
        this.nx(b);
        if (this.Co && (b.preventDefault ? b.defaultPrevented : !1 === b.returnValue) || b.xg) return !1;
        this.Yb = a.substr(0, 100);
        if (!this.eg()) return c(), !1;
        b = this.Sf(b) || b.currentTarget || b.target;
        b = this.fd(b);
        if (0 < b.length) return this.Ea({
            sw: b.join()
        }, .1), c(), !1;
        this.Av();
        this.Py();
        this.Ej || this.Ol();
        this.Qh(a);
        this.Xn = c;
        this.fe();
        a = S("ifr::hid", y(this.Qe, this));
        M(this.j, "pagehide", a, void 0);
        this.rf();
        return !0
    };
    g.ls = function() {
        if (this.Ie() && this.un() && this.eg()) {
            var a = this.I();
            a && (J(a, {
                backgroundColor: "transparent",
                position: "fixed",
                left: "0px",
                top: "initial",
                bottom: "-900px",
                textAlign: "center",
                width: "100%",
                height: this.dk + "px",
                paddingBottom: "0px",
                display: "block",
                zIndex: "2147483647"
            }), this.P = S("ifr::scr", y(this.ey, this)), M(this.j, "scroll", this.P, void 0))
        }
    };
    g.Av = function() {
        this.O = A();
        this.Ka(!0)
    };
    g.Uc = function() {
        var a = this.j.location;
        return -1 != a.hash.indexOf("google_vignette")
    };
    g.Zl = function(a) {
        this.Pa && (this.Ce = a)
    };
    g.rf = function() {
        this.Ia = S("ifr::ori", y(this.cc, this));
        M(this.j, "orientationchange", this.Ia, void 0);
        this.Ja = S("ifr::res", y(this.$e, this));
        M(this.j, "resize", this.Ja, void 0)
    };
    g.nx = function(a) {
        var b = this.Sf(a) || a.currentTarget || a.target,
            c = Fl(b);
        a = {
            adk: Ug(b, this.L),
            lnk: b.getAttribute("href").substr(0, 100),
            lnkt: c.substr(0, 100),
            dp: a.preventDefault ? a.defaultPrevented : !1 === a.returnValue
        };
        c = .1;
        this.yi() && !this.uh(b) && (c = a.chl = 1);
        this.Ea(a, c)
    };
    g.eg = function() {
        if (!V(this.j)) return this.Ea({
            yv: 1
        }, .1), !1;
        var a = Wk(this.j);
        a || this.Ea({
            Aw: 1
        }, .1);
        return !0
    };
    g.fe = function() {
        this.Uc() || (this.j.location.hash = "google_vignette");
        this.Pa = S("ifr::hch", y(this.Gi, this));
        var a = qa(Rf, this.j, "hashchange", this.Pa);
        this.j.setTimeout(a, 0)
    };
    g.jd = function(a, b) {
        var c = a.getAttribute("data-google-vignette");
        if ("false" == c) return !1;
        var d = (c = a.href) && (c.match(nk)[3] || null);
        return this.xh(a, c, d, b) ? this.wh(a, d) : !1
    };
    g.wh = function(a, b) {
        return this.yi() || this.Vi || this.uh(a) ? this.Cc && Ss(b, this.Cc) ? !0 : this.Zh(b) || b.replace(Is, "") == this.wo.replace(Is, "") ? !0 : !1 : !1
    };
    g.fd = function(a) {
        if (!a || !this.Dc) return [];
        a = Fl(a, !0);
        if (!a) return [];
        a = a.match(this.Dc);
        for (var b = [], c = 0; a && c < a.length; c++) {
            var d = a[c].toLowerCase();
            0 <= b.indexOf(d) || b.push(d)
        }
        return b
    };
    g.uh = function(a) {
        if (!this.Bp(a)) return !1;
        for (var b = 0; 10 > b && a.parentElement; ++b)
            if (a = a.parentElement, !this.Bp(a)) return !1;
        return !0
    };
    g.Bp = function(a) {
        try {
            if (a.onclick) return !1
        } catch (c) {
            return !1
        }
        try {
            var b = this.j.jQuery._data(a, "events").click;
            if (b) return !1
        } catch (c) {}
        return !0
    };
    g.Zh = function(a) {
        if (this.wb && a)
            for (var b = 0; b < this.wb.length; b++) {
                var c = this.wb[b];
                if (Ss(a, c)) return !0
            }
        return !1
    };
    var Ss = function(a, b) {
        return (new RegExp("(^|\\.)" + b.replace(/\./g, "\\.") + "$", "i")).test(a)
    };
    g = Hs.prototype;
    g.xh = function(a, b, c, d) {
        if (!b) return !1;
        a = a.target;
        return d && "_top" != a || a && "_self" != a && "_top" != a || !c || c == this.wo && Fs(b) == this.uj ? !1 : !0
    };
    g.Cl = function(a, b) {
        var c = this.C.createElement("link");
        c.setAttribute("rel", b);
        c.setAttribute("href", a);
        return c
    };
    g.Qh = function(a) {
        this.Xc = this.Cl(a, "prerender");
        this.Wc = this.Cl(a, "prefetch");
        this.C.body.appendChild(this.Xc);
        this.C.body.appendChild(this.Wc)
    };
    g.Ol = function() {
        if (this.ad) {
            Sf(this.C, "click", this.ad);
            for (var a = 0; a < this.j.frames.length; a++) try {
                Sf(this.j.frames[a].document, "click", this.ad)
            } catch (d) {}
            this.ad = null
        }
        for (a = 0; a < this.xb.length; ++a) lf(this.xb[a]);
        this.xb = [];
        for (a = 0; a < this.Fe.length; ++a) {
            var b = this.Fe[a];
            this.We && Sf(b, "click", this.We);
            b.removeAttribute("data-google-reveal-ad");
            if (this.sb)
                for (var c in Rs) b.classList.remove(c)
        }
        this.Fe = []
    };
    g.Gi = function() {
        this.Ce && (this.Uc() ? (this.hx(), this.Ea({
            fnv: 1
        }, 1), this.Xn()) : this.ma())
    };
    g.Ti = function() {
        this.ad = S("ifr::ccl", y(this.Cr, this));
        M(this.C, "click", this.ad, this.Tk);
        for (var a = 0; a < this.j.frames.length; a++) try {
            this.Wi(this.j.frames[a].frameElement) || M(this.j.frames[a].document, "click", this.ad, this.Tk)
        } catch (b) {}
        a = this.Vx(.1);
        (this.sb || a) && this.Si(a, !1)
    };
    g.Wi = function(a) {
        return /aswift_[0-9]+/.test(a.id)
    };
    g.Vx = function(a) {
        return Math.random() < a
    };
    g.Cr = function(a) {
        a && (a.preventDefault ? !a.defaultPrevented : !1 !== a.returnValue) && this.Sf(a) && ($g(a), a.preventDefault = y(function() {
            this.xg = !0
        }, a), p.setTimeout(y(this.We, this, a), 0))
    };
    var Gs = function() {
        this.vm = this.Ui = this.total = 0
    };
    g = Hs.prototype;
    g.Si = function(a, b) {
        this.hn(this.C.links, !1, b);
        for (var c = 0; c < this.j.frames.length; c++) try {
            this.hn(this.j.frames[c].document.links, !0, b), this.sb && this.zl(this.j.frames[c].document)
        } catch (d) {}
        a && (c = {
            fif: this.Xb.vm,
            tot: this.Xb.total,
            instr: this.Xb.Ui
        }, this.Ea(c, b ? .1 : 1));
        this.sb && (c = Y(this.j), c = ml(c, 1), null != c && c.setLinksInstrumented(this.Xb.Ui))
    };
    g.hn = function(a, b, c) {
        if (a) {
            this.Xb.total += a.length;
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                if (e && !e.hasAttribute("data-google-reveal-ad") && this.jd(e, b)) {
                    var f = this.fd(e).length;
                    f || this.Xb.Ui++;
                    b && this.Xb.vm++;
                    c ? this.Lu(e) : this.sb && this.Fe.push(e);
                    this.sb && !f && this.wu(e)
                }
            }
        }
    };
    g.Lu = function(a) {
        !a.hasAttribute("data-google-reveal-ad") && this.We && (this.Fe.push(a), M(a, "click", this.We, void 0), a.setAttribute("data-google-reveal-ad", "true"))
    };
    g.zl = function(a) {
        a = a || this.C;
        if (!a.getElementById("vignette-style-id")) {
            var b = "",
                c;
            for (c in Rs) b += "a." + c + ",a." + c + " *{" + Rs[c] + "}";
            c = a.createElement("style");
            c.id = "vignette-style-id";
            c.innerHTML = b;
            a.head.appendChild(c);
            this.xb.push(c)
        }
    };
    g.wu = function(a) {
        var b = "google_vignette_inst";
        this.yi() && !this.uh(a) && (b = "google_vignette_clklist");
        a.classList.add(b)
    };
    g.Ea = function(a, b) {
        a = a || {};
        this.ha && (a.qid = this.ha);
        this.M && (a.eid = this.M);
        this.Yb && (a.lnk = this.Yb.substr(0, 100));
        a.req = this.L.src;
        R("ia_evt", a, b)
    };
    g.Vv = function() {
        var a = uh("ifr::mat", y(Hs.prototype.Si, this, !1, !0));
        this.uf = this.j.setInterval(a, 5E3)
    };
    g.Qe = function() {
        this.ba || this.Ea({
            Lp: A() - this.O
        }, 1);
        this.Ka(!1);
        this.Cj()
    };
    g.Cj = function() {
        this.Pa && Sf(this.j, "hashchange", this.Pa);
        this.P && Sf(this.j, "scroll", this.P);
        this.Qw()
    };
    g.Qw = function() {
        this.C.body.removeChild(this.Xc);
        this.C.body.removeChild(this.Wc)
    };
    g.hx = function() {
        this.j.scrollTo(this.ap, this.ep)
    };
    g.Zo = function() {
        try {
            var a = this.C.documentElement,
                b = this.j.pageXOffset || a.scrollLeft;
            this.ap = b - (a.clientLeft || 0);
            var c = this.j.pageYOffset || a.scrollTop;
            this.ep = c - (a.clientTop || 0)
        } catch (d) {
            this.Gn || (this.Gn = !0, nh.Sc("ifr::sss", d, void 0, void 0))
        }
    };
    g.mj = function() {
        ("FADE_IN" == this.Uk || Ik(this.j.location, "google_ia_debug_fi")) && this.mk("FADE_IN")
    };
    g.mk = function(a) {
        var b = this.C.createElement("style");
        b.type = "text/css";
        var c = this.I();
        switch (a) {
            case "FADE_IN":
                b.appendChild(this.C.createTextNode("@keyframes fadeIn {0%  { opacity: 0.0 }100%{ opacity: 1.0  } } @-webkit-keyframes fadeIn { 0%  { opacity: 0.0 }100%{ opacity: 1.0 } }"))
        }
        this.C.body.appendChild(b);
        switch (a) {
            case "FADE_IN":
                J(c, Js)
        }
    };
    g.ff = function() {
        this.Ka(!1);
        var a = this.I();
        if (a) {
            this.we(function(a) {
                J(a, Os)
            }, !0);
            this.L.setAttribute("width", "");
            this.L.setAttribute("height", "");
            this.Ya.setAttribute("width", "");
            this.Ya.setAttribute("height", "");
            J(this.L, Os);
            J(this.L, Ps);
            var b = this.Ya.contentWindow.document;
            J(b.documentElement, Os);
            J(b.body, Qs);
            J(a, Ns);
            X(a, "display", "none");
            X(a, "position", "fixed")
        }
    };
    g.Ka = function(a) {
        var b = this.I();
        b && (a ? this.bk(b) : this.Ii(b))
    };
    g.bk = function(a) {
        this.mj();
        X(a, "display", "block");
        this.ba || this.Zo();
        this.$j()
    };
    g.Ii = function(a) {
        X(a, "display", "none");
        this.Lj();
        !this.Ie() && this.O && this.O && (this.ba = !0, this.P || (this.P = y(this.Zo, this), M(this.j, "scroll", this.P, void 0)), this.Ia && (Sf(this.j, "orientationchange", this.Ia), this.Ia = null), this.Ja && (Sf(this.j, "resize", this.Ja), this.Ja = null))
    };
    g.$j = function() {
        this.C.body && !this.La && (this.La = new Ks(this.C), this.La.Ah(this.C, this.j, this.he))
    };
    g.Lj = function() {
        this.La && (this.La.Nj(this.C, this.j), this.La = null)
    };
    g.Py = function() {
        this.uf && (this.j.clearInterval(this.uf), this.uf = null)
    };
    g.ey = function() {
        if (!this.pp) {
            var a = Tk(this.j) - this.cp;
            this.cp = Tk(this.j);
            var b = this.I(),
                a = parseInt(b.style.bottom, 10) + 1.6 * a;
            b.style.bottom = a + "px";
            a >= -1 * parseInt(this.dk, 10) && this.df();
            this.gy(b) && (this.pp = !0, this.Ea({
                lock: 1
            }, .1), this.Ad = A())
        }
    };
    g.cc = function() {
        if (this.Uc() && !this.ba) {
            var a = V(this.j);
            this.Ea({
                tto: A() - this.O,
                por: a ? 1 : 0
            }, .1);
            this.Hi && !a && (this.ma(), this.Cj())
        }
    };
    g.$e = function() {
        this.Uc() && !this.ba && (this.Ea({
            ttre: A() - this.O
        }, .1), this.Hi && (this.ma(), this.Cj()))
    };
    g.gy = function(a) {
        var b = parseInt(a.style.bottom, 10);
        return b >= this.j.innerHeight / 2 - a.offsetHeight / 2
    };
    g.un = function() {
        var a = Sk(this.j),
            b = this.j.innerHeight;
        return a >= b + 800
    };
    g.df = function() {
        if (!this.Jd) {
            var a = {
                msg_type: "i-view"
            };
            this.L.contentWindow.postMessage(cj(a), Wh("googleads.g.doubleclick.net", ""));
            this.Jd = !0
        }
    };
    var Ts = function(a, b, c) {
        Z.call(this, a);
        this.Ra = b;
        this.F = c;
        this.le = {};
        this.Oa = this.Aa = !1;
        this.Jb = null;
        this.kb = this.re = !1;
        this.ha = this.M = null
    };
    B(Ts, Z);
    g = Ts.prototype;
    g.Ha = function(a) {
        a["i-adframe-load"] = this.Yd;
        a["i-dismiss"] = this.qe;
        a["i-blur"] = this.Ch;
        a["i-fill"] = this.Bb;
        a["i-go"] = this.ye;
        a["i-no"] = this.xe;
        a.i_sliding_h = this.by
    };
    g.Fh = function() {
        return Xk(this.j) && V(this.j) && !this.F.Pm()
    };
    g.nd = function() {
        return this.le.iclk_url || null
    };
    g.qe = function() {
        if (this.Je()) this.F.Rl();
        else if (this.re) {
            var a = {
                msg: "dha",
                req: this.Ra.src
            };
            this.Db(a, 1);
            this.F.Uc() ? this.j.history.back() : this.F.Rl()
        } else this.nd() && (this.F.Zl(!1), this.oj())
    };
    g.Yd = function() {
        this.kb = !0
    };
    g.Ch = function() {
        this.re = !0;
        this.F.Zl(!0)
    };
    g.by = function(a) {
        a && this.F.Px(a.i_sliding_h)
    };
    g.Bb = function(a) {
        if (!this.Aa) {
            this.Aa = !0;
            a = Zk(a);
            var b = S("ias::chdlr", y(this.rj, this)),
                c = a.animation;
            c && this.F.Xj(c);
            if (c = a.i_expid) this.M = c, this.F.Ax(c);
            c = a.i_sliding;
            "true" == c && this.F.By();
            (c = a.translucent) && this.F.nk();
            c = a.i_blur_bg;
            "true" == c && this.F.Yj();
            (c = a.dom_suf) && this.F.wx(c.split(";"));
            (c = a.pub_suf) && this.F.ux(c);
            (c = a.stop_word) && this.F.vx(c.split(";"));
            a.qid && this.F.Mx(a.qid);
            (c = a.inst_link_all) && this.F.Fx("true" == c);
            (c = a.ign_prev_def) && this.F.Kx("true" == c);
            (c = a.i_blnk) && this.F.Nx("true" ==
                c);
            (c = a.i_orient) && this.F.Dx("true" == c);
            (c = a.i_alo) && this.F.Gx(!0);
            (c = a["i-bua"]) && this.F.Sx(c.split(";"));
            a.qid && (this.ha = a.qid);
            this.F.Lq(b);
            this.cf()
        }
    };
    g.ye = function() {
        this.Oa = !0;
        this.Jb = null;
        this.Je() && this.F.ls()
    };
    g.xe = function(a) {
        this.Oa = !1;
        this.Jb = +a.i_tslv
    };
    g.Je = function() {
        return this.F.Ie()
    };
    g.jn = function() {
        return Wh("googleads.g.doubleclick.net", "")
    };
    g.og = function() {
        this.Yn(!1)
    };
    g.oj = function() {
        this.Yn(!0)
    };
    g.Yn = function(a) {
        var b = this.nd();
        b && (a ? this.j.location.replace(b) : this.j.location.href = b)
    };
    g.bd = function() {
        var a = {
            zm: Xk(this.j) ? 1 : 0,
            pm: V(this.j) ? 1 : 0,
            cu: this.nd() ? 1 : 0,
            fc: this.Oa ? 1 : 0,
            vp: this.F.Uc() ? 1 : 0,
            al: this.kb ? 1 : 0
        };
        this.Jb && (a.ts = this.Jb);
        this.Db(a, 1)
    };
    g.rj = function(a) {
        if (!a) return !0;
        var b = Y(this.j);
        if (b.wasReactiveAdVisible[9]) return this.Db({
            fsi: 1
        }, .1), !0;
        var c = this.F.Sf(a) || a.currentTarget || a.target;
        if (this.F.Nq()) return this.F.Lv(c.href), this.Tc(), !0;
        if (this.nd()) return !1;
        if (!this.Fh()) return this.bd(), this.Tc(), !0;
        this.kx(c);
        if (!this.nd() || !this.Oa || this.F.Uc() || !this.kb) return this.bd(), this.Tc(), !0;
        c = y(this.oj, this);
        if (c = this.F.Qc(this.nd(), a, c)) return b.wasReactiveAdVisible[8] = !0, this.df(), this.F.tf() || $g(a), !1;
        a.xg || this.Tc();
        return !0
    };
    g.Tc = function() {
        this.F.tf() && this.oj()
    };
    g.kx = function(a) {
        this.le.iclk_url = a.href;
        this.le.iclk_ltx = Fl(a);
        (a = a.getAttribute("title")) && (this.le.iclk_ltl = a)
    };
    g.cf = function() {
        try {
            var a = {
                msg_type: "i-prepare"
            };
            this.Ra.contentWindow.postMessage(cj(a), this.jn());
            return !0
        } catch (b) {}
        return !1
    };
    g.df = function() {
        var a = {
            msg_type: "i-view"
        };
        this.zx(a);
        this.Ra.contentWindow.postMessage(cj(a), this.jn())
    };
    g.zx = function(a) {
        var b = this.le;
        a.iclk_url = b.iclk_url;
        var c = b.iclk_ltx;
        c && (a.iclk_ltx = c);
        (b = b.iclk_ltl) && (a.iclk_ltl = b)
    };
    g.Db = function(a, b) {
        this.ha && (a.qid = this.ha);
        this.M && (a.eid = this.M);
        R("ia_evt", a, b)
    };
    var Us = function(a, b, c) {
        As.call(this, a, b, c)
    };
    B(Us, As);
    Us.prototype.show = function(a, b) {
        var c = this.I();
        if (c) {
            var d = al(c);
            b && $k(d, c.ownerDocument.defaultView) ? ro({
                ok: 0,
                err: "aboveFoldAtFillTime"
            }) : (c = c.parentElement) && X(c, {
                height: a + "px",
                "float": "none"
            })
        }
    };
    var Vs = function(a, b) {
        Z.call(this, a);
        this.An = b;
        this.Aa = !1
    };
    B(Vs, Z);
    Vs.prototype.Bb = function(a, b) {
        if (this.An.Zu(b) && !this.Aa) {
            this.Aa = !0;
            var c = Zk(a),
                d = Bf(c.lr_h);
            d ? (c = "false" !== c.lr_rbf, this.An.show(d, c)) : ro({
                ok: 0,
                err: "LADDER_RUNG_FILLED_HEIGHT",
                h: d
            })
        }
    };
    Vs.prototype.Ha = function(a) {
        a["lr-fill"] = this.Bb
    };
    var Xs = function(a, b, c) {
        Z.call(this, a);
        this.Ra = b;
        this.ba = this.kb = !1;
        this.M = null;
        this.Oa = this.Aa = !1;
        this.Af = !0;
        this.Qi = this.Tl = 0;
        this.De = [];
        this.Fp = this.Ad = this.O = 0;
        this.xj = 1E3;
        this.P = this.Ja = this.Ia = this.Xe = this.Pa = this.ha = null;
        this.Ze = !1;
        this.ka = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
        this.Qj = this.Pj = null;
        this.af = .75;
        this.Hb = !1;
        this.lx = 2;
        this.Jd = !1;
        this.ra = new Ws(c, b, a, this);
        this.Cp = 0;
        this.Pg = !0;
        this.pk =
            0
    };
    B(Xs, Z);
    g = Xs.prototype;
    g.Ha = function(a) {
        a["i-adframe-load"] = this.Yd;
        a["i-dismiss"] = this.qe;
        a["sti-fill"] = this.Bb;
        a["sti-undo"] = this.Ny;
        a["i-go"] = this.ye;
        a["i-no"] = this.xe
    };
    g.Yd = function() {
        this.kb = !0;
        this.dn()
    };
    g.qe = function(a) {
        if (!this.ba) {
            this.Cp = A();
            this.oa({
                msg: "dha",
                vs: this.Jd ? 1 : 0
            }, 1);
            if (a && 0 < this.xj) {
                var b = parseInt(a["dbof-t"], 10),
                    c = parseInt(a["dbof-l"], 10),
                    d = parseInt(a["dbof-w"], 10),
                    e = parseInt(a["dbof-h"], 10);
                !isNaN(b) && !isNaN(c) && d && e ? (a = this.ra.Uq(b, c, d, e), Rf(a, "click", y(this.rw, this)), a = y(this.ra.Pw, this.ra), p.setTimeout(a, this.xj)) : this.oa({
                    dsmb: 1,
                    t: a["dbof-t"],
                    l: a["dbof-l"],
                    w: a["dbof-w"],
                    h: a["dbof-h"]
                }, .1)
            }
            this.Nc();
            !this.Hb && this.ac() && this.j.history.back()
        }
    };
    g.rw = function(a) {
        a && $g(a);
        this.oa({
            pdc: A() - this.Cp
        }, .1)
    };
    g.Bb = function(a) {
        if (!this.Aa) {
            this.Aa = !0;
            a = Zk(a);
            var b = a.sti_raf;
            b && (this.Ze = "true" == b);
            b = parseFloat(a.sti_sdm);
            !isNaN(b) && 1 >= b && (this.af = b);
            if (b = a.sti_sice) this.Hb = "true" == b;
            if (b = a.sti_cin) this.Af = "true" == b;
            if (b = a.i_expid) this.M = b;
            b = a.translucent;
            "true" == b && this.ra.Cy();
            a.qid && (this.ha = a.qid);
            b = parseInt(a.pdb_ms, 10);
            isNaN(b) || (this.xj = b);
            if (b = a.sti_ud) this.Pg = "true" == b;
            a = parseInt(a.sti_udh, 10);
            isNaN(a) || (this.pk = a);
            this.cf()
        }
    };
    g.ye = function() {
        this.Oa = !0;
        this.$k()
    };
    g.pu = function() {
        return "complete" == this.j.document.readyState
    };
    g.xe = function() {
        this.Oa = !1
    };
    g.Vp = function() {
        var a = Y(this.j);
        return a.wasReactiveAdVisible[8] ? (this.oa({
            vigs: 1
        }, .1), !0) : !1
    };
    g.$k = function() {
        if (!this.Vp())
            if (this.Qi++, this.De = [], !this.dn() && !this.pu()) p.setTimeout(y(this.$k, this), 500);
            else if (Nk(3, this.j.location)) {
            var a = Y(this.j),
                a = ml(a, 3);
            null != a && a.displayAdLoadedContent(this.De)
        }
    };
    g.dn = function() {
        if (this.O) return !0;
        if (!this.kb || !this.Oa || !this.eg()) return !1;
        if (this.Af) {
            var a = this.j.innerHeight,
                b = this.At(a);
            if (!this.ra.tv(b, a)) return !1
        } else {
            if (!this.iv()) return this.oa({
                sti: 2,
                atmp: this.Qi
            }, .1), this.De.push("Page height must be at least double the viewport height"), !1;
            if (!this.ra.uv()) return !1
        }
        this.Ze && this.ka ? this.ka.call(this.j, y(this.Hh, this)) : (this.P = S("sfr::scr", y(this.Hh, this)), M(this.j, "scroll", this.P, void 0));
        this.O = A();
        this.rf();
        return !0
    };
    g.Uu = function(a, b) {
        return b.J().top > a
    };
    g.bv = function(a, b, c) {
        c = af(c.Wa());
        return b - c >= a
    };
    g.qv = function(a, b, c) {
        return this.Uu(a, c) && this.bv(a, b, c)
    };
    g.At = function(a) {
        var b = Sk(this.j, !0),
            c = y(this.qv, this, a, b),
            d = Math.max(this.j.document.body.children.length, 20),
            c = zp(this.j, d, d, 0, c);
        return c.length ? c[0] : (this.oa({
            nip: 1,
            ph: b,
            vh: a,
            atmp: this.Qi,
            me: d
        }, .1), this.De.push("Could not locate a break in the page below the fold with at least one viewport height of content underneath."), null)
    };
    g.iv = function() {
        var a = Sk(this.j, !0),
            b = this.j.innerHeight,
            c = Tk(this.j);
        return (a - c) / b >= this.lx
    };
    g.eg = function() {
        if (!this.j.innerHeight) return !1;
        var a = !V(this.j),
            b = Wk(this.j);
        if (a) return this.oa({
            yv: 1
        }, .1), this.De.push("Landscape is not supported"), !1;
        b || this.oa({
            Aw: 1
        }, .1);
        return !0
    };
    g.rf = function() {
        this.Ia = S("sfr::ori", y(this.cc, this));
        M(this.j, "orientationchange", this.Ia, void 0);
        this.Ja = S("sfr::res", y(this.$e, this));
        M(this.j, "resize", this.Ja, void 0)
    };
    g.Qe = function() {
        this.ac() && this.oa({
            Lp: A() - this.O
        }, 1)
    };
    g.kh = function() {
        return Wh("googleads.g.doubleclick.net", "")
    };
    g.cf = function() {
        try {
            var a = {
                msg_type: "i-prepare"
            };
            this.Ra.contentWindow.postMessage(cj(a), this.kh());
            return !0
        } catch (b) {}
        return !1
    };
    g.px = function() {
        if (!this.Jd) {
            var a = {
                msg_type: "i-view"
            };
            this.Ra.contentWindow.postMessage(cj(a), this.kh());
            this.Jd = !0
        }
    };
    g.Bj = function() {
        this.Ia && (Sf(this.j, "orientationchange", this.Ia), this.Ia = null);
        this.Ja && (Sf(this.j, "resize", this.Ja), this.Ja = null);
        this.Pa && (Sf(this.j, "hashchange", this.Pa), this.Pa = null);
        this.P && (Sf(this.j, "scroll", this.P), this.P = null);
        this.Xe && Sf(this.j, "pagehide", this.Xe)
    };
    g.fe = function() {
        this.Sy("google_immersive");
        this.Pa = S("sfr::hch", y(this.qu, this));
        var a = qa(Rf, this.j, "hashchange", this.Pa);
        p.setTimeout(a, 0)
    };
    g.Sy = function(a) {
        this.ac() || (this.Hb ? this.j.history.replaceState(null, "", "#" + a) : this.j.location.hash = a)
    };
    g.ac = function() {
        var a = this.j.location;
        return -1 != a.hash.indexOf("google_immersive")
    };
    g.qu = function() {
        this.ba || (this.oa({
            Gy: A() - this.O
        }, .1), this.Nc())
    };
    g.Hh = function() {
        if (!this.ba)
            if (this.Vp()) this.Pg = !1, this.Nc();
            else {
                var a = this.ra.Jm(),
                    b = this.j.innerHeight;
                this.ra.hf();.5 <= (b - a) / b && this.px();
                if (a < b) {
                    var c = Y(this.j);
                    c.wasReactiveAdVisible[9] = !0
                }
                0 >= a ? (this.ho(), this.Hb && this.oa({
                    sice: !0,
                    vh: b,
                    gvto: a
                }, .1)) : this.Ze && this.ka && this.ka.call(this.j, y(this.Hh, this))
            }
    };
    g.ho = function() {
        this.P && (Sf(this.j, "scroll", this.P), this.P = null);
        this.Ad = A();
        this.Fp++;
        this.ra.Fn(!1, this.Hb);
        this.fe();
        this.Xe || (this.Xe = S("sfr::ph", y(this.Qe, this)), M(this.j, "pagehide", this.Xe, void 0));
        this.Hb && this.Af ? p.setTimeout(y(this.Ks, this), 1E3) : 0 < this.af && p.setTimeout(y(this.Js, this), 1E3)
    };
    g.Ks = function() {
        this.Hb && this.ac() && this.ra.Oy()
    };
    g.Js = function() {
        if (!(0 >= this.af) && this.ac()) {
            this.ra.Fn(!0, this.Hb);
            var a = this.j.document.body;
            this.Pj = We(a, "position");
            this.Qj = We(a, "top");
            J(a, "position", "fixed");
            J(a, "top", -Tk(this.j) + "px");
            this.Ze && this.ka ? this.ka.call(this.j, y(this.Gh, this)) : (this.P = S("sfr::scrl", y(this.Gh, this)), M(this.j, "scroll", this.P, void 0))
        }
    };
    g.Gh = function() {
        var a = this.ra.Jm(),
            b = this.af * this.j.innerHeight;
        a <= -b || a >= b ? (this.oa({
            msg: "sdha"
        }, 1), this.Nc(), this.ac() && this.j.history.back()) : this.Ze && this.ka && this.ka.call(this.j, y(this.Gh, this))
    };
    g.Nc = function() {
        this.ba = !0;
        this.Tl = A();
        var a = this.Af && this.Pg && this.pk;
        a && this.ra.Ju() && (a = this.Pg = !1, this.oa({}, .1));
        a ? (this.ra.Ir(this.pk), a = {
            msg_type: "sti-hide"
        }, this.Ra.contentWindow.postMessage(cj(a), this.kh())) : this.ra.Ka(!1);
        this.Bj();
        !this.Hb && 0 < this.af && (a = this.j.document.body, J(a, "position", this.Pj ? this.Pj : ""), J(a, "top", this.Qj ? this.Qj : ""))
    };
    g.Ny = function() {
        this.oa({
            ttu: A() - this.Tl
        }, .1);
        this.ba = !1;
        this.O = A();
        this.rf();
        this.ho()
    };
    g.cc = function() {
        if (!this.ba && this.ac()) {
            var a = V(this.j);
            this.oa({
                tto: A() - this.O,
                por: a ? 1 : 0
            }, .1)
        }
    };
    g.$e = function() {
        this.ba || (this.ra.hf(), this.ac() && this.oa({
            ttre: A() - this.O
        }, .1))
    };
    g.oa = function(a, b) {
        a = a || {};
        this.ha && (a.qid = this.ha);
        this.M && (a.eid = this.M);
        this.O && (a.tsl = A() - this.O);
        this.Ad && (a.tslo = A() - this.Ad, a.tl = this.Fp);
        this.Ra.src && (a.req = this.Ra.src);
        R("sci_evt", a, b)
    };
    var Ws = function(a, b, c) {
        As.call(this, a, b, c);
        this.Dh = null;
        this.zf = !1;
        this.Ds = 250;
        this.Ef = 0;
        this.Ki = null;
        this.Ri = 0;
        this.C = c.document;
        this.$ = null;
        this.ff()
    };
    B(Ws, As);
    Ws.prototype.Cy = function() {
        var a = this.I();
        a && (a.style.backgroundColor = "transparent")
    };
    var Ys = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            display: "none !important",
            zIndex: "2147483647"
        },
        Zs = {
            width: "100%",
            height: "100%",
            zIndex: "2147483647"
        },
        $s = {
            left: "0",
            position: "absolute",
            top: "0"
        },
        at = {
            width: "100%",
            "min-height": "100%"
        };
    g = Ws.prototype;
    g.ff = function() {
        this.Ka(!1);
        var a = this.I();
        if (a) {
            this.we(function(a) {
                J(a, Zs)
            }, !0);
            this.L.setAttribute("width", "");
            this.L.setAttribute("height", "");
            this.Ya.setAttribute("width", "");
            this.Ya.setAttribute("height", "");
            J(this.L, Zs);
            J(this.L, $s);
            var b = this.Ya.contentWindow.document;
            J(b.documentElement, Zs);
            J(b.body, at);
            J(a, Ys)
        }
    };
    g.uv = function() {
        var a = this.I();
        if (!a) return !1;
        var b = this.j.innerHeight;
        J(a, "top", Tk(this.j) + b + "px");
        this.hf();
        X(a, "position", "absolute");
        this.Ka(!0);
        return !0
    };
    g.Ry = function() {
        var a = this.I();
        if (a && !this.zf) {
            var b = this.j.innerHeight;
            J(a, "height", b + "px");
            this.$ && J(this.$, "height", b + "px")
        }
    };
    g.tv = function(a) {
        if (!a) return !1;
        var b = this.I();
        if (!b) return !1;
        this.$ = this.j.document.createElement("ins");
        X(this.$, "display", "inline-block");
        X(this.$, "width", "100%");
        a.parentElement.insertBefore(this.$, a);
        this.hf();
        X(b, "position", "absolute");
        this.Ka(!0);
        return !0
    };
    g.hf = function() {
        this.Ry();
        "hidden" != this.C.body.style.overflow && "fixed" != this.C.body.style.position && this.$ && (this.Ri = af(this.$), J(this.I(), "top", this.Ri + "px"))
    };
    g.Ka = function(a) {
        var b = this.I();
        b && (a ? this.Zx(b) : this.uu(b))
    };
    g.Zx = function(a) {
        X(a, "display", "block");
        this.Ef = p.setInterval(y(this.hf, this), this.Ds)
    };
    g.uu = function(a) {
        X(a, "display", "none");
        this.$ && X(this.$, "display", "none");
        this.Ef && (p.clearInterval(this.Ef), this.Ef = 0);
        this.Dg()
    };
    g.Lx = function() {
        this.C.body && "hidden" != this.C.body.style.overflow && (this.Dh = this.C.body.style.overflow, this.Ki = this.C.documentElement.style.overflow, this.C.body.style.overflow = "hidden", this.C.documentElement.style.overflow = "hidden")
    };
    g.Dg = function() {
        null != this.Dh && (this.C.body.style.overflow = this.Dh);
        null != this.Ki && (this.C.documentElement.style.overflow = this.Ki)
    };
    g.Fn = function(a, b) {
        this.zf = !1;
        var c = this.I(),
            d = this.j.innerHeight;
        J(c, "height", d + "px");
        J(c, Zs);
        b && this.$ && this.j.scrollTo(0, af(this.$));
        a ? (X(c, "position", "absolute"), X(this.$, "display", "none"), J(c, "margin", d + "px 0 " + d + "px 0"), this.Dg(), J(c, "top", Tk(this.j) - d + "px")) : (J(c, "top", "0"), this.$ && J(this.$, "height", d + "px"), X(c, "position", "fixed"), this.Lx())
    };
    g.Oy = function() {
        var a = this.I();
        J(a, "top", af(this.$) + "px");
        X(a, "position", "absolute");
        this.Dg()
    };
    g.Uq = function(a, b, c, d) {
        if (this.cb) return this.cb;
        this.cb = this.j.document.createElement("ins");
        this.cb.id = "goog_sti_db";
        var e = $e(this.I());
        J(this.cb, {
            height: d + "px",
            width: c + "px",
            position: "absolute",
            "z-index": "2147483647",
            left: e.x + b + "px",
            top: e.y + a + "px"
        });
        this.j.document.body.appendChild(this.cb);
        return this.cb
    };
    g.Pw = function() {
        this.cb && this.cb.parentNode && (this.cb.parentNode.removeChild(this.cb), this.cb = null)
    };
    g.Jm = function() {
        return this.I().getBoundingClientRect().top
    };
    g.Ir = function(a) {
        if (!this.zf) {
            this.zf = !0;
            this.Dg();
            var b = this.I();
            J(b, {
                height: a + "px",
                margin: "",
                "z-index": 0
            });
            J(this.$, "height", a + "px");
            X(this.$, "display", "inline-block");
            J(b, "top", this.Ri + "px");
            X(b, "position", "absolute")
        }
    };
    g.Ju = function() {
        if (!this.$) return !1;
        for (var a = this.$.parentElement; a;) {
            var b = parseInt(a.style["z-index"] || getComputedStyle(a).zIndex, 10);
            if (0 < b) return !0;
            a = a.parentElement
        }
        return !1
    };
    var bt = function(a, b, c) {
        As.call(this, b, c, a);
        this.Vk = "";
        this.he = !1;
        this.La = null;
        this.C = a.document;
        this.ff()
    };
    B(bt, As);
    var ct = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        dt = {
            width: "100%",
            height: "100%"
        },
        et = {
            left: "0",
            position: "absolute",
            top: "0"
        },
        ft = {
            width: "100%",
            "min-height": "100%"
        },
        gt = {
            "animation-name": "fadeIn",
            "-webkit-animation-name": "fadeIn",
            "animation-duration": "1.5s",
            "-webkit-animation-duration": "1.5s",
            "animation-timing-function": "ease",
            "-webkit-animation-timing-function": "ease"
        };
    g = bt.prototype;
    g.ma = function() {
        this.Ka(!1)
    };
    g.Qc = function() {
        this.Ka(!0)
    };
    g.Xj = function(a) {
        this.Vk = a
    };
    g.Yj = function() {
        var a = Tg(this.I(), !0); - 1 == a.indexOf("body") && (this.he = !0)
    };
    g.nk = function() {
        var a = this.I();
        a && (a.style.backgroundColor = "transparent")
    };
    g.ff = function() {
        this.Ka(!1);
        var a = this.I();
        if (a) {
            this.we(function(a) {
                J(a, dt)
            }, !0);
            this.L.setAttribute("width", "");
            this.L.setAttribute("height", "");
            this.Ya.setAttribute("width", "");
            this.Ya.setAttribute("height", "");
            J(this.L, dt);
            J(this.L, et);
            var b = this.Ya.contentWindow.document;
            J(b.documentElement, dt);
            J(b.body, ft);
            J(a, ct);
            X(a, "display", "none");
            X(a, "position", "fixed")
        }
    };
    g.Ka = function(a) {
        var b = this.I();
        b && (a ? this.bk(b) : this.Ii(b))
    };
    g.bk = function(a) {
        this.mj();
        X(a, "display", "block");
        this.$j()
    };
    g.Ii = function(a) {
        X(a, "display", "none");
        this.Lj()
    };
    g.$j = function() {
        this.C.body && !this.La && (this.La = new ht(this.C), this.La.Ah(this.C, this.j, this.he))
    };
    g.Lj = function() {
        this.La && (this.La.Nj(this.C, this.j), this.La = null)
    };
    g.mj = function() {
        ("FADE_IN" == this.Vk || Ik(this.j.location, "google_ia_debug_fi")) && this.mk("FADE_IN")
    };
    g.mk = function(a) {
        var b = this.C.createElement("style");
        b.type = "text/css";
        var c = this.I();
        "FADE_IN" == a && (b.appendChild(this.C.createTextNode("@keyframes fadeIn {0%  { opacity: 0.0 }100%{ opacity: 1.0  } } @-webkit-keyframes fadeIn { 0%  { opacity: 0.0 }100%{ opacity: 1.0 } }")), J(c, gt));
        this.C.body.appendChild(b)
    };
    var ht = function() {
            this.sd = this.wg = this.ug = null;
            this.cd = 0
        },
        it = {
            overflow: "hidden",
            position: "fixed"
        },
        jt = {
            filter: "blur(5px)",
            webkitFilter: "blur(5px)"
        };
    ht.prototype.Ah = function(a, b, c) {
        this.ug = a.body.style.overflow;
        this.wg = a.body.style.position;
        this.lk = a.body.style.top;
        this.sd = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.cd = Tk(b);
        J(a.body, "top", -this.cd + "px");
        J(a.body, it);
        c && J(a.body, jt)
    };
    ht.prototype.Nj = function(a, b) {
        J(a.body, {
            filter: this.sd,
            webkitFilter: this.sd,
            overflow: this.ug,
            position: this.wg,
            top: this.lk
        });
        b.scrollTo(0, this.cd)
    };
    var lt = function(a, b, c) {
        Z.call(this, a);
        this.kb = !1;
        this.Ra = c;
        this.ae = this.ba = !1;
        this.ca = this.Dc = this.Cc = this.wb = null;
        this.xb = [];
        this.Vh = 0;
        this.re = !1;
        this.M = null;
        this.Oa = this.Aa = !1;
        this.Ce = !0;
        this.Tm = this.j.location.hostname;
        this.sb = Ik(this.j.location, "google_ia_debug");
        this.Yb = null;
        this.O = 0;
        this.ha = null;
        this.uj = kt(a.location.href);
        this.Jb = this.Fd = this.Xc = this.Wc = null;
        this.jf = new bt(a, b, c)
    };
    B(lt, Z);
    var mt = /^(www\.|m\.|mobile\.)*/i;
    g = lt.prototype;
    g.Ha = function(a) {
        a["i-adframe-load"] = this.Yd;
        a["i-blur"] = this.Ch;
        a["i-dismiss"] = this.qe;
        a["i-fill"] = this.Bb;
        a["i-go"] = this.ye;
        a["i-no"] = this.xe
    };
    g.Yd = function() {
        this.kb = !0
    };
    g.Ch = function() {
        this.re = !0;
        this.$l(!0)
    };
    g.qe = function() {
        this.re ? (this.Db({
            dha: A() - this.O
        }, .1), this.Pe() ? this.j.history.back() : this.Ji()) : this.ca && (this.$l(!1), this.og(this.ca.href))
    };
    g.Bb = function(a) {
        if (!this.Aa) {
            this.Aa = !0;
            a = Zk(a);
            var b = a["i-bua"];
            if (b && this.j.navigator) {
                var c = this.j.navigator.userAgent,
                    b = b.split(";");
                if (c && b)
                    for (var d = 0; d < b.length; d++)
                        if (0 <= c.indexOf(b[d])) return
            }(c = a.animation) && this.jf.Xj(c);
            if (c = a.i_expid) this.M = c;
            a.qid && (this.ha = a.qid);
            c = a.translucent;
            "true" == c && this.jf.nk();
            c = a.i_blur_bg;
            "true" == c && this.jf.Yj();
            if (c = a.dom_suf) this.wb = c.split(";");
            if (c = a.pub_suf) this.Cc = c;
            if (a = a.stop_word) this.Dc = (a = a.split(";")) && a.length ? new RegExp("\\b(" + a.join("|").toLowerCase() +
                ")\\b", "ig") : null;
            this.Mq();
            this.cf();
            this.Bs()
        }
    };
    g.xe = function(a) {
        this.Oa = !1;
        this.Jb = +a.i_tslv
    };
    g.ye = function() {
        this.Oa = !0;
        this.Jb = null
    };
    g.fe = function() {
        this.Pe() || (this.j.location.hash = "google_vignette");
        this.Pa = S("ifr::hch", y(this.Gi, this));
        var a = qa(Rf, this.j, "hashchange", this.Pa);
        p.setTimeout(a, 0)
    };
    g.Mq = function() {
        this.ae || (this.ae = !0, this.Ti())
    };
    g.jd = function(a, b) {
        var c = a.getAttribute("data-google-vignette");
        if ("false" == c) return !1;
        var d = (c = a.href) && (c.match(nk)[3] || null);
        return this.xh(a, c, d, b) ? this.wh(a, d) : !1
    };
    g.wh = function(a, b) {
        return this.Cc && nt(b, this.Cc) ? !0 : this.Zh(b) || b.replace(mt, "") == this.Tm.replace(mt, "") ? !0 : !1
    };
    g.xh = function(a, b, c, d) {
        if (!b) return !1;
        switch (a.target) {
            case "_top":
            case "_parent":
                break;
            case void 0:
            case null:
            case "":
            case "_self":
                if (d) return !1;
                break;
            default:
                return !1
        }
        return !c || c == this.Tm && kt(b) == this.uj ? !1 : !0
    };
    g.Fh = function() {
        return this.Oa && !this.Pe() && this.kb && !Y(this.j).wasReactiveAdVisible[9] && !this.fd(this.ca).length && Xk(this.j) && V(this.j)
    };
    g.Qh = function(a) {
        this.Xc = this.El(a, "prerender");
        this.Wc = this.El(a, "prefetch");
        this.j.document.body.appendChild(this.Xc);
        this.j.document.body.appendChild(this.Wc)
    };
    g.El = function(a, b) {
        var c = this.j.document.createElement("link");
        c.setAttribute("rel", b);
        c.setAttribute("href", a);
        return c
    };
    g.Il = function(a) {
        a = a || this.j.document;
        if (!a.getElementById("vignette-style-id")) {
            var b = a.createElement("style");
            b.id = "vignette-style-id";
            b.innerHTML = "a.google_vignette_inst {border:1px solid #000;color:#6C12B9}";
            a.head.appendChild(b);
            this.xb.push(b)
        }
    };
    g.Jl = function(a, b) {
        for (var c = 0, d = a.links.length; 0 <= d; d--) {
            var e = a.links[d];
            e && (e.classList.remove("google_vignette_inst"), this.jd(e, b) && !this.fd(e).length && (c++, e.classList.add("google_vignette_inst")))
        }
        return c
    };
    g.As = function() {
        if (this.sb) {
            for (var a = 0; a < this.xb.length; ++a) lf(this.xb[a]);
            this.xb = [];
            this.Vh && p.clearInterval(this.Vh)
        }
    };
    g.Bs = function() {
        this.sb && (this.Kl(), this.Vh = p.setInterval(y(this.Kl, this), 5E3))
    };
    g.Kl = function() {
        var a = this.Jl(this.j.document, !1);
        this.Il();
        for (var b = 0; b < this.j.frames.length; b++) try {
            a += this.Jl(this.j.frames[b].document, !0), this.Il(this.j.frames[b].document)
        } catch (c) {}
        b = Y(this.j);
        b = ml(b, 1);
        null != b && b.setLinksInstrumented(a)
    };
    var nt = function(a, b) {
        return (new RegExp("(^|\\.)" + b.replace(/\./g, "\\.") + "$", "i")).test(a)
    };
    lt.prototype.Zh = function(a) {
        if (this.wb && a)
            for (var b = 0; b < this.wb.length; b++) {
                var c = this.wb[b];
                if (nt(a, c)) return !0
            }
        return !1
    };
    lt.prototype.$l = function(a) {
        this.Pa && (this.Ce = a)
    };
    lt.prototype.ot = function(a) {
        for (a = a.target; a;) {
            if ("A" == a.nodeName) {
                if (this.jd(a, a.ownerDocument != this.j.document)) return a;
                break
            }
            a = a.parentElement
        }
        return null
    };
    var kt = function(a) {
        var b = a.match(nk);
        a = b[5] || "";
        b = b[6];
        return a + (b ? "?" + b : "")
    };
    g = lt.prototype;
    g.Gi = function() {
        this.Ce && (this.Pe() ? (this.Db({
            fnv: 1
        }, .1), this.og(this.ca.href)) : (this.Db({
            tth: A() - this.O
        }, .1), this.Ji()))
    };
    g.Ji = function() {
        this.O && (this.ba = !0, this.Fd && (Sf(this.j.document, "click", this.Fd), this.Fd = null), this.Xc && this.j.document.body.removeChild(this.Xc), this.Wc && this.j.document.body.removeChild(this.Wc), this.jf.ma(), this.As())
    };
    g.Ti = function() {
        this.Fd = S("ifr::ccl", y(this.rj, this));
        M(this.j.document, "click", this.Fd, !0);
        for (var a = 0; a < this.j.frames.length; a++) try {
            this.Wi(this.j.frames[a].frameElement) || M(this.j.frames[a].document, "click", this.Fd, !0)
        } catch (b) {}
    };
    g.Wi = function(a) {
        return /aswift_[0-9]+/.test(a.id)
    };
    g.Db = function(a, b) {
        this.ha && (a.qid = this.ha);
        this.M && (a.eid = this.M);
        this.Yb && (a.lnk = this.Yb.substr(0, 100));
        a.req = this.Ra.src;
        R("ia_evt", a, b)
    };
    g.og = function(a) {
        this.j.location.replace(a)
    };
    g.$v = function(a) {
        !this.O && this.ca && (a.xg ? this.ca = null : !this.jd(this.ca, this.ca.ownerDocument != this.j.document) || this.fd(this.ca).length ? this.og(this.ca.href) : (this.O = A(), a = Y(this.j), a.wasReactiveAdVisible[8] = !0, this.Yb = this.ca.href.substr(0, 100), this.df(), this.Qh(this.ca.href), this.fe(), a = S("ifr::hid", y(this.Qe, this)), M(this.j, "pagehide", a, void 0), this.jf.Qc()))
    };
    g.rj = function(a) {
        !a || a.defaultPrevented || this.O || this.ca || !(this.ca = this.ot(a)) || (this.Fh() ? ($g(a), a.preventDefault = y(function() {
            this.xg = !0
        }, a), p.setTimeout(y(this.$v, this, a), 0)) : this.bd())
    };
    g.Pe = function() {
        var a = this.j.location;
        return -1 != a.hash.indexOf("google_vignette")
    };
    g.Qe = function() {
        this.ba || this.Db({
            Lp: A() - this.O
        }, .1);
        this.Ji()
    };
    g.bd = function() {
        var a = Y(this.j),
            a = {
                zm: Xk(this.j) ? 1 : 0,
                pm: V(this.j) ? 1 : 0,
                fc: this.Oa ? 1 : 0,
                vp: this.Pe() ? 1 : 0,
                al: this.kb ? 1 : 0,
                fsi: a.wasReactiveAdVisible[9] ? 1 : 0
            },
            b = this.fd(this.ca);
        b.length && (a.sw = b.join());
        this.Jb && (a.ts = this.Jb);
        this.Db(a, .1)
    };
    g.cf = function() {
        try {
            this.fp("i-prepare")
        } catch (a) {}
    };
    g.df = function() {
        var a = {};
        a.iclk_url = this.ca.href;
        a.iclk_ltx = Fl(this.ca);
        var b = this.ca.getAttribute("title");
        b && (a.iclk_ltl = b);
        this.fp("i-view", a)
    };
    g.fp = function(a, b) {
        var c = b || {};
        c.msg_type = a;
        var d = Wh("googleads.g.doubleclick.net", "");
        this.Ra.contentWindow.postMessage(cj(c), d)
    };
    g.fd = function(a) {
        if (!a || !this.Dc) return [];
        a = Fl(a, !0);
        if (!a) return [];
        a = a.match(this.Dc);
        for (var b = [], c = 0; a && c < a.length; c++) {
            var d = a[c].toLowerCase();
            0 <= b.indexOf(d) || b.push(d)
        }
        return b
    };
    var ot = function(a, b, c, d) {
        if (!(a && b && c && d)) return null;
        d = tf(d);
        if (!d) return null;
        b = d.document.getElementById(b);
        if (!b) return null;
        var e = a.google_reactive_ad_format;
        switch (e) {
            case 1:
                a: {
                    switch (a.google_reactive_ad_format) {
                        case 1:
                            a = "bottom";
                            break a
                    }
                    a = null
                }
                c = new Bs(b, c, d, a);
                return c = new Es(d, c);
            case 8:
                return a.google_vignette_scroll_trigger ? c = new Xs(d, c, b) : (a = b, b = Y(d), 1 == b.interstitialJSRefactorExperiment ? c = new lt(d, a, c) : (a = new Hs(a, c, d), c = new Ts(d, c, a))), c;
            case 9:
                return new Xs(d, c, b);
            case 25:
                return c =
                    new Us(b, c, d), c = new Vs(d, c)
        }
        return null
    };
    var pt = function(a, b) {
            var c = Q();
            if (c = c.google_async_config) {
                if (b in c) return c[b].sra_enabled ? 1 : 0
            } else return -1;
            return 0
        },
        qt = function() {
            var a = Nh();
            return "453848261" == a.V(48)
        };
    var rt = function(a, b, c) {
        Z.call(this, a);
        this.B = b;
        this.v = c;
        this.Ma = 0;
        this.Gf = ff(gf, this.v);
        this.oi = this.mi = 0;
        this.hw = $e(this.v).x;
        this.Zm = !1;
        this.Fb = "";
        this.az = this.j.innerWidth;
        this.Cn = 0;
        this.Wh = !1;
        this.ka = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
        this.kj()
    };
    B(rt, Z);
    g = rt.prototype;
    g.Ha = function(a) {
        a["i-inf"] = this.Dj
    };
    g.Dj = function(a, b) {
        this.Zm || !this.yr() || b.source !== this.B.contentWindow && b.source.parent !== this.B.contentWindow || (this.Zm = !0, this.Gc(a, this.j.location.search))
    };
    g.Gc = function(a, b) {
        var c = Zk(a);
        this.Fb = c.qid;
        this.Wh = "true" == c.dpf;
        (c = /.*[?|&]dpf=(true|false).*/.exec(b)) && 0 < c.length && (this.Wh = "true" == c[1]);
        c = new un(this.v || this.B);
        c.on() ? this.ka ? (J(this.v.parentElement, "overflow", "hidden"), this.Ma = A(), this.ka.call(this.j, y(this.sa, this)), this.R("init", 1)) : this.R("nraf", 1) : this.R("vs_err", 1)
    };
    g.sa = function() {
        this.ka.call(this.j, y(this.sa, this));
        var a = this.j.innerHeight,
            b = this.v.parentNode.getBoundingClientRect().top - a;
        b != this.Cn && (this.Cn = b, 0 < b || b < -this.Gf.height ? this.Cx(b < -this.Gf.height) : this.Jx(a, b))
    };
    g.Cx = function(a) {
        J(this.v, {
            position: "absolute",
            bottom: null,
            top: 0,
            left: 0,
            clip: null,
            transform: null
        });
        a && !this.oi && (this.oi = A(), this.R("fuv", 1, {
            Fy: this.oi - this.Ma
        }))
    };
    g.Jx = function(a, b) {
        this.Wh ? this.Wy(a, b) : this.Qy(a, b);
        this.mi || (this.mi = A(), this.R("fiv", 1, {
            Fy: this.Ma - this.mi
        }))
    };
    g.Qy = function(a, b) {
        var c = "rect(" + (this.Gf.height + b) + "px, " + this.az + "px, " + a + "px, 0)";
        J(this.v, {
            position: "fixed",
            bottom: 0,
            top: null,
            left: this.hw + "px",
            clip: c
        })
    };
    g.Wy = function(a, b) {
        J(this.v, "transform", "translate3d(0,-" + (this.Gf.height + b) + "px,0)")
    };
    g.kj = function() {
        this.j.location && Ik(this.j.location, "google_inflate_debug") && this.Gc({}, this.j.location.search)
    };
    g.yr = function() {
        var a = !1;
        try {
            a = this.j.top == this.j && !!this.j.postMessage && Xk(this.j) && Uk(this.j) && V(this.j)
        } catch (b) {}
        return a
    };
    g.R = function(a, b, c) {
        c = c || {};
        c.name = a;
        c.qid = this.Fb;
        c.tsc = A() - this.Ma;
        this.B && (c.req = this.B.src);
        R("inf_evt", c, b)
    };
    var st = function(a, b, c, d) {
        Z.call(this, a);
        this.B = b;
        this.v = c;
        this.mf = d;
        this.wj = parseInt(this.mf.style.height, 10);
        this.Ma = 0;
        this.M = null;
        this.zo = !1;
        this.Fb = "";
        this.Bc = af(this.v);
        this.ka = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame
    };
    B(st, Z);
    var tt = {
        display: "block",
        left: "auto",
        position: "fixed",
        top: "0px"
    };
    st.prototype.Ha = function(a) {
        a["i-portal"] = this.Dj
    };
    var ut = function(a) {
        try {
            if (a.top != a || !a.postMessage) return !1;
            var b = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
            if (!b) return !1
        } catch (c) {
            return !1
        }
        return !0
    };
    g = st.prototype;
    g.Dj = function(a, b) {
        this.ka ? this.zo || b.source !== this.B.contentWindow && b.source.parent !== this.B.contentWindow || (this.zo = !0, this.Gc(a)) : this.R("nraf", 1)
    };
    g.Gc = function(a) {
        a = Zk(a);
        this.M = a.i_expid;
        this.Fb = a.qid;
        this.Bc != af(this.v) && this.R("otc", 1);
        this.Bc = af(this.v);
        this.Bc > Sk(this.j) - this.j.innerHeight && this.R("ctb", 1);
        this.Rx();
        this.sa();
        this.Ma = A();
        this.R("init", 1)
    };
    g.Rx = function() {
        this.v.setAttribute("height", this.j.innerHeight);
        this.B.setAttribute("height", this.v.height);
        J(this.mf, tt)
    };
    g.Ns = function() {
        var a = "rect(3000px, " + this.B.width + "px, 0px, 0px)";
        J(this.mf, {
            clip: a
        })
    };
    g.sa = function() {
        this.ka.call(this.j, y(this.sa, this));
        var a = this.j.innerHeight,
            b = Tk(this.j);
        b + a > this.Bc ? this.my(b, a) : this.Ns()
    };
    g.my = function(a, b) {
        var c = a + b - this.Bc,
            d = Math.min(c, this.wj),
            c = this.Bc + this.wj < b ? this.Bc - a : d == this.wj ? b - c : b - d,
            d = "rect(" + c + "px, " + this.B.width + "px, " + (c + d) + "px, 0px)";
        J(this.mf, {
            clip: d
        })
    };
    g.R = function(a, b, c) {
        c = c || {};
        this.M && (c.eid = this.M);
        c.id = a;
        c.qid = this.Fb;
        0 != this.Ma && (c.tsc = A() - this.Ma);
        c.req = this.B.src;
        R("portal_evt", c, b)
    };
    var vt = function(a, b, c, d, e) {
        Z.call(this, a);
        this.B = b;
        this.v = c;
        this.cr = d;
        this.$q = e
    };
    B(vt, Z);
    g = vt.prototype;
    g.Ha = function(a) {
        a["ablate-me"] = this.Iq;
        a["resize-me"] = this.ax
    };
    g.Iq = function(a, b) {
        if (cl(b, this.B.contentWindow)) {
            var c = Zk(a);
            this.Hq(c)
        }
    };
    g.ax = function(a, b) {
        if (cl(b, this.B.contentWindow)) {
            var c = Zk(a),
                d = c.r_chk;
            if (null == d || "" == d) {
                var e = Bf(c.r_nw),
                    f = Bf(c.r_nh),
                    h = Bf(c.r_no);
                null != h || 0 != e && 0 != f || (h = 0);
                var k = c.r_str,
                    k = k ? k : null,
                    l = Boolean(c.nmv);
                this.Uo(d, e, f, h, k, l, c)
            }
        }
    };
    g.et = function(a, b) {
        var c = Tk(this.j || Q()),
            d = {
                scrl: c,
                adk: this.cr,
                adk2: this.$q
            };
        a && (d.str = a.dj(), d.ad_y = a.rt());
        O(b, function(a, b) {
            d[b] = a
        });
        return d
    };
    g.Hq = function(a) {
        var b = a["collapse-after-close"],
            c = a.clp_btf_only,
            b = "animate" == b ? "animate" : "1" == c ? "safe" : "force";
        this.Uo(null, null, 0, 0, b, !1, a)
    };
    g.Uo = function(a, b, c, d, e, f, h) {
        var k = Q();
        if (this.B && k)
            if ("no_rsz" == e) f && this.If(h), h.err = "7", this.R("resize", h, null);
            else if (k = new un(this.v || this.B), k.on()) {
            if (tn(k, e)) {
                f && this.If(h);
                var l = this.v && this.v.ownerDocument.getElementById(this.v.id + "_anchor");
                f = l ? [this.v, this.B] : null;
                this.Lb = l || this.B;
                a = {
                    width: b,
                    height: c,
                    opacity: d,
                    check: a,
                    xp: e
                };
                a = new vn(this.Lb, f, a, null, null, !0);
                a = a.Up();
                h.rsz = a.toString();
                h.abl = a.Ek();
                h.frsz = ("force" == e).toString();
                h.err = "0"
            } else f ? (h.nofo = "1", wt() ? h.err = "6" : h.err = "5") :
                h.err = "1";
            this.R("resize", h, k)
        } else h.err = "3", this.R("resize", h, null);
        else h.err = "2", this.R("resize", h, null)
    };
    g.R = function(a, b, c) {
        var d = b.gen204_fraction,
            d = C(String(d), .05);
        b = this.et(c, b);
        b.url = If.URL;
        R(a, b, d)
    };
    g.If = function(a) {
        var b = {
            msg_type: "manual-send-view"
        };
        b.expid = a.expid;
        this.B.contentWindow.postMessage(this.j.JSON.stringify(b), Wh("googleads.g.doubleclick.net", ""))
    };
    var wt = function() {
        var a = Q(),
            b = tf(a);
        if (!b) return !1;
        if (b = b.document.getElementById(N.google_async_iframe_id))
            for (b = b.parentElement; b && !Yg.test(b.className);) b = b.parentElement;
        else b = null;
        if (!b) return !1;
        var c = {};
        Bn(b, c, a);
        c.google_nofo = "1";
        An(b, c, a);
        return !0
    };
    var xt = function(a, b, c) {
        Z.call(this, a);
        if (a = c.ownerDocument.getElementById(c.id + "_anchor"))
            if (c = c.ownerDocument.getElementById(c.id + "_expand")) this.B = b, this.Yk = a, this.Zk = c
    };
    B(xt, Z);
    xt.prototype.Ha = function(a) {
        a["split-me"] = this.hy
    };
    xt.prototype.hy = function(a, b) {
        if (cl(b, this.B.contentWindow)) {
            var c = Zk(a),
                d = Bf(c.s_w0),
                e = Bf(c.s_h0),
                f = Bf(c.s_w1),
                h = Bf(c.s_h1);
            if (d && e && f && h) {
                var k = c.s_ac,
                    l = c.s_asn,
                    m = c.s_pu,
                    n = yt(c.s_nsicr),
                    q = yt(c.s_ncrsit),
                    t = c.s_ncrsloi,
                    c = yt(c.s_prns);
                this.$w(d, e);
                this.Ku(f, h, k, l, m, n, q, t, c)
            }
        }
    };
    xt.prototype.$w = function(a, b) {
        kn(this.Zk, a, b);
        kn(this.Yk, a, b);
        this.Yk.style.overflow = "hidden"
    };
    xt.prototype.Ku = function(a, b, c, d, e, f, h, k, l) {
        var m = If.createElement("ins");
        m.className = "adsbygoogle";
        var n = "image";
        h && (n = "title");
        a = {
            google_ad_client: c,
            google_ad_slot: d,
            google_ad_width: a,
            google_ad_height: b,
            google_enable_content_recommendations: f,
            google_content_recommendation_ui_type: n,
            google_page_url: e,
            google_is_split_slot: !0,
            google_loeid: k
        };
        b = this.Zk.parentNode;
        l ? b.insertBefore(m, b.firstChild) : b.appendChild(m);
        An(m, a, this.j);
        l = Dh();
        Gh(l, 15, Fh(l, 15) + 1)
    };
    var yt = function(a) {
        return !!a && "false" != a && "0" != a
    };
    var zt = function(a, b, c) {
        Z.call(this, a);
        this.B = b;
        this.v = c;
        this.qk = !0;
        this.Rg = this.na = !1;
        this.Pb = this.od = this.Ma = 0;
        this.xd = !0;
        this.P = this.ha = this.M = null
    };
    B(zt, Z);
    g = zt.prototype;
    g.Ha = function(a) {
        a.i_spsz = this.ju;
        a.e_spsz = this.iu
    };
    g.ju = function(a, b) {
        if (a && !this.Ma && cl(b, this.B.contentWindow)) {
            this.qk = !1;
            var c = this.Em();
            0 != c ? this.R("inv", {
                nsr: c
            }, .1) : (c = Zk(a), (this.Pb = ra(c.s_exph, this.Pb)) ? (this.xd = sa(c.s_ie, this.xd), this.M = c.i_expid, this.ha = c.qid, this.Gc()) : this.R("err", c, .1))
        }
    };
    g.iu = function(a, b) {
        a && this.na && cl(b, this.B.contentWindow) && (this.Jh(!this.na), this.Sj(this.na))
    };
    g.Em = function() {
        var a = 0;
        try {
            this.j.document.querySelector("*[google-spsz=true]") && (a |= 32), this.j.top != this.j && (a |= 64), Xk(this.j) || (a |= 2), Uk(this.j) || (a |= 4), V(this.j) || (a |= 8), /Android 2/.test(this.j.navigator.userAgent) && (a |= 1), Wk(this.j) || (a |= 128)
        } catch (b) {
            a |= 16
        }
        return a
    };
    g.Gc = function() {
        this.Ma = A();
        this.od = this.v.getBoundingClientRect().height;
        this.v.setAttribute("google-spsz", "true");
        J(this.v, "z-index", 999997);
        J(this.v, "transition", "top 300ms ease-out, height 300ms ease-out");
        var a = {};
        this.xd && this.kn() && (this.xd = !1, a.btf = !1, this.Rn());
        this.qk && this.Hu();
        this.na = !this.xd;
        this.Iu();
        this.xd ? (this.im(), this.Eg(), this.P = S("sup::scr", y(this.Eg, this)), M(this.j, "scroll", this.P)) : this.ul(!0);
        var b;
        "ontransitionend" in window ? b = "transitionend" : "onwebkittransitionend" in window &&
            (b = "webkitTransitionEnd");
        b ? M(this.v, b, y(this.zy, this)) : this.R("no_transitionend_event", {}, .1);
        this.R("init", a, .1)
    };
    g.kn = function() {
        var a = this.j.innerHeight;
        return this.v.getBoundingClientRect().top < a
    };
    g.Iu = function() {
        var a = this.v.parentNode;
        this.Vb = this.j.document.createElement("ins");
        var b = {
            position: "absolute",
            height: "15px",
            width: "100%",
            left: "0",
            "z-index": 999998,
            transition: "bottom 300ms ease-out"
        };
        J(this.Vb, b);
        this.Vb.innerHTML = '<svg style="margin-left: -20px; position: absolute; bottom: -15px;left:50%; width: 40px;height: 20px; border: 1px solid #888888;background-color: #D8D8D8;" xmlns="http://www.w3.org/2000/svg"><g stroke="#888888" stroke-width="2px" stroke-linecap="square"><line x1="11" y1="13" x2="19" y2="5"></line><line x1="19" y1="5" x2="27" y2="13"></line></g></svg>';
        J(this.Vb.children[0],
            "transform", this.na ? "rotateZ(180deg)" : "rotateZ(0deg)");
        a.appendChild(this.Vb);
        a = S("sup::clk", y(this.Lm, this));
        M(this.Vb, "click", a)
    };
    g.Hu = function() {
        var a = this.v.parentNode;
        this.$a = this.j.document.createElement("div");
        var b = {
            position: "absolute",
            height: this.od + "px",
            width: "100%",
            left: "0",
            "z-index": 999999,
            display: this.na ? "block" : "none"
        };
        J(this.$a, b);
        b = S("sup::dclk", y(this.Nh, this));
        M(this.$a, "click", b);
        a.appendChild(this.$a)
    };
    g.Lm = function(a) {
        this.Rg = !0;
        this.Jh(!this.na);
        this.Sj(this.na);
        a && $g(a)
    };
    g.Nh = function(a) {
        this.na && this.Lm(a)
    };
    g.Jh = function(a) {
        this.na != a && ((this.na = a) ? (this.ul(), this.Rn()) : this.im())
    };
    g.ul = function(a) {
        if (a) {
            if (this.Rg) return;
            this.Rg = !0
        }
        this.v.setAttribute("height", this.od);
        J(this.Vb, {
            bottom: "15px",
            background: "transparent"
        })
    };
    g.Rn = function() {
        if (!this.qk) {
            var a = {
                msg_type: "c_spsz"
            };
            this.B.contentWindow.postMessage(cj(a), "*")
        }
    };
    g.im = function() {
        J(this.v, "background", "rgb(216, 216, 216)");
        this.v.setAttribute("height", this.Pb);
        this.B.setAttribute("height", this.Pb);
        var a = this.od - this.Pb - 15;
        J(this.Vb, {
            bottom: a + "px",
            background: "rgb(216, 216, 216)"
        })
    };
    g.Eg = function() {
        !this.Rg && this.kn() && (p.setTimeout(y(this.pr, this), 3E3), this.P && Sf(this.j, "scroll", this.P))
    };
    g.pr = function() {
        this.Jh(!0);
        this.Sj(this.na, !0)
    };
    g.zy = function() {
        this.$a && J(this.$a, "display", this.na ? "block" : "none");
        J(this.v, "background", this.na ? "transparent" : "rgb(216, 216, 216)");
        this.na && this.B.setAttribute("height", this.od);
        J(this.Vb.children[0], "transform", this.na ? "rotateZ(180deg)" : "rotateZ(0deg)")
    };
    g.R = function(a, b, c) {
        b.name = a;
        this.Ma && (b.tsc = A() - this.Ma);
        b.clh = this.od;
        b.eh = this.Pb;
        this.ha && (b.qid = this.ha);
        this.M && (b.eid = this.M);
        this.B && (b.req = this.B.src);
        R("sup_evt", b, c)
    };
    g.Sj = function(a, b) {
        this.R(a ? "collapse" : "expand", b ? {
            ge: b
        } : {}, .1)
    };
    var At = function(a) {
        a.google_mc2_survey_registry || (a.google_mc2_survey_registry = {});
        this.Ye = a.google_mc2_survey_registry
    };
    At.prototype.read = function(a) {
        return this.Ye[a]
    };
    At.prototype.write = function(a, b) {
        this.Ye[a] = b
    };
    At.prototype.contains = function(a) {
        return !!this.read(a)
    };
    var Bt = function(a) {
        Z.call(this, a);
        this.Ib = fe("iframe");
        this.Mg = null;
        this.Bo = this.Po = !1;
        this.Pd = this.zp = this.yn = this.xn = this.Ik = this.yp = void 0;
        this.Ye = new At(this.j);
        this.Rp = !1
    };
    B(Bt, Z);
    var Ct = {
            display: "none",
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "0px",
            border: "0px",
            margin: "0px"
        },
        Dt = ["positive-click", "negative-click", "accidental-click"],
        Et = function(a) {
            a = Array.apply(null, {
                length: a
            }).map(Number.call, Number);
            lc(a);
            return a
        },
        Ft = function(a, b) {
            a.postMessage(b, "*")
        };
    g = Bt.prototype;
    g.Ut = function() {
        return this.j.document.body
    };
    g.Ow = function() {
        Ke(this.Ib)
    };
    g.Tx = function() {
        return !this.Ye.contains(this.Mg) && !this.j.document.getElementById("mc2-survey")
    };
    g.Hw = function() {
        this.Ye.write(this.Mg, !0);
        this.No("mc2_survey_display", "")
    };
    g.Pr = function() {
        var a = fe("span");
        a.className = "mute-wrapper";
        var b = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            c = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        b.setAttribute("id", "close-btn");
        b.setAttribute("x", "0px");
        b.setAttribute("y", "0px");
        J(b, {
            margin: "9px",
            cursor: "pointer",
            width: "12px",
            height: "12px"
        });
        b.setAttribute("viewBox", "0 0 10 10");
        b.setAttribute("focusable", "false");
        var d = qa(Ft, this.j, "mute-survey");
        M(b, "click", d, void 0);
        c.setAttribute("fill", "#FFFFFF");
        c.setAttribute("points", "10,1.01 8.99,0 5,3.99 1.01,0 0,1.01 3.99,5 0,8.99 1.01,10 5,6.01 8.99,10 10,8.99 6.01,5");
        b.appendChild(c);
        a.appendChild(b);
        return a
    };
    g.Xr = function() {
        var a = fe("div");
        a.className = "header";
        var b = this.Pd[0].split("%1$s"),
            c = fe("span"),
            d = fe("span");
        c.className = "header-text";
        d.className = "header-text";
        c.innerText = b[0];
        d.innerText = b[1];
        b = fe("img");
        this.Rp ? (b.className = "logo-wahlberg", b.src = "//www.gstatic.com/images/branding/googlelogo/1x/googlelogo_light_color_212x72dp.png") : (b.className = "logo", b.src = "//pagead2.googlesyndication.com/pagead/images/google_logo_white.png");
        var e = fe("span");
        e.className = "logo-spacer";
        var f = fe("span");
        f.className =
            "logo-wrapper";
        f.appendChild(e);
        f.appendChild(b);
        a.appendChild(c);
        a.appendChild(f);
        a.appendChild(d);
        a.appendChild(this.Pr());
        return a
    };
    g.Zr = function() {
        var a = fe("span");
        a.setAttribute("id", "interrogative");
        a.className = "interrogative-text content-text";
        a.innerText = this.Pd[1].replace("%1$s", this.Mg);
        var b = fe("div");
        b.className = "interrogative-wrapper";
        b.appendChild(a);
        return b
    };
    g.js = function() {
        var a = fe("div");
        a.className = "response-wrapper content-text";
        for (var b = [this.Pd[2], this.Pd[3], this.Pd[4]], c = b.length, d = Et(c), e = 0; e < c; ++e) {
            var f = d[e],
                h = fe("a");
            if (this.yn) {
                h.className = "radio";
                var k = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                k.setAttribute("class", "radio-button");
                var l = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                l.setAttribute("cx", "50%");
                l.setAttribute("cy", "50%");
                l.setAttribute("r", "30%");
                l.setAttribute("fill", "none");
                l.setAttribute("stroke",
                    "white");
                l.setAttribute("stroke-width", "5%");
                var m = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                m.setAttribute("class", "radio-select");
                m.setAttribute("cx", "50%");
                m.setAttribute("cy", "50%");
                m.setAttribute("r", "20%");
                m.setAttribute("fill", "white");
                k.appendChild(l);
                k.appendChild(m);
                h.appendChild(k)
            } else h.className = "button";
            k = fe("span");
            k.innerText = b[f];
            h.appendChild(k);
            var n = qa(Ft, this.j, Dt[f]),
                f = function() {
                    setTimeout(n, 200)
                };
            M(h, "click", f, void 0);
            a.appendChild(h)
        }
        return a
    };
    g.Vr = function() {
        return ch("Roboto", document)
    };
    g.ns = function() {
        kf('body {display: block;border: 0px;margin: 0px;width: 100%;height: 100%;font-family: Roboto;background-color: #4285F4;-webkit-touchcallout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.header {width: 100%;height: 30px;background-color: rgba(0,0,0,0.15);}.header-text {margin: 0px 0px 0px 9px;display: block;float: left;font-size: 9px;line-height: 30px;color: rgba(255,255,255,0.8);}[dir="rtl"] .header-text {margin: 0px 9px 0px 0px;float: right;}.logo {display: inline-block;vertical-align: middle;width: 40px;}.logo-wahlberg {display: inline-block;vertical-align: middle;height: 15px;}.logo-spacer {height: 100%;display: inline-block;vertical-align: middle;}.logo-wrapper {height: 100%;display: block;float: left;margin: 0px 2px 0px 2px;}[dir="rtl"] .logo-wrapper {float: right;}.mute-wrapper {float: right;display: block;height: 100%;}[dir="rtl"] .mute-wrapper {float: left;}.interrogative-text {color: rgba(255,255,255,0.8);}.interrogative-wrapper {display: block;margin: 9px 0px 0px 9px;}.response-wrapper {display: block;min-width: 300px;}.response-wrapper a {display: inline-block;margin: 5px;padding: 4px;cursor: pointer;}.response-wrapper a.button {color: #4285F4;background-color: rgba(255, 255, 255, 1.0);border-radius: 1px;box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.35);}.response-wrapper a.radio {color: rgba(255,255,255,0.95);}.response-wrapper svg {display: inline-block;float: left;height: 1.3em;width: 1.3em;}[dir="rtl"] .response-wrapper svg {float: right;}.response-wrapper span {display: inline-block;float: left;line-height: 1.3em;}[dir="rtl"] .response-wrapper span {float: right;}.response-wrapper circle.radio-select {opacity: 0;}.response-wrapper a:hover circle.radio-select {opacity: 1;}.response-wrapper a.button:hover {background-color: rgba(255, 255, 255, 0.8);}.response-wrapper a.button:active {box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);}.response-wrapper a.radio:hover {color: rgba(255, 255, 255, 0.95);background-color: rgba(255, 255, 255, 0.1);}.response-wrapper a.radio:active {color: rgba(255, 255, 255, 1.0);background-color: rgba(255, 255, 255, 0.2);}@media (max-width: 480px) {.content-text {font-size: 12px;}}@media (min-width: 480px) and (max-width: 640px) {.content-text {font-size: 14px;}}@media (min-width: 640px) {.content-text {font-size: 16px;}}@media screen and (max-device-width: 640px){svg.radio-button {display:none;}}@media screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2){svg.radio-button {display:none;}}@media screen and (min-device-width: 768px) and (max-device-width: 1024px){svg.radio-button {display:none;}}@media screen and (min-width: 1024px){}', this.Ib.contentDocument.body)
    };
    g.Rr = function() {
        var a = fe("div");
        this.xn && a.setAttribute("dir", "rtl");
        a.appendChild(this.Xr());
        a.appendChild(this.Zr());
        a.appendChild(this.js());
        return a
    };
    g.ps = function() {
        this.Ib.setAttribute("id", "mc2-survey");
        J(this.Ib, Ct);
        this.Ib.contentDocument.body.appendChild(this.Vr());
        this.ns();
        this.Ib.contentDocument.body.appendChild(this.Rr());
        J(this.Ib, {
            height: "100px",
            display: "block",
            "z-index": "2147483647"
        })
    };
    g.ww = function() {
        this.ps();
        this.Hw();
        setTimeout(y(this.So, this), this.zp)
    };
    g.Er = function(a) {
        for (var b in Ok)
            if (Ok[b] === a) return !0;
        return !1
    };
    g.So = function() {
        this.Ow()
    };
    g.Uw = function(a) {
        a.data && this.Er(a.data) && (this.No("mc2_survey_response_selection", [a.data, this.Ik].join("__")), this.So())
    };
    g.ut = function(a, b) {
        return this.yp + "&label=" + a + "&label_instance=" + b
    };
    g.No = function(a, b) {
        var c = this.ut(a, b);
        Hf(this.j, c, void 0)
    };
    g.Oq = function() {
        this.Po || (Rf(this.j, "message", y(this.Uw, this)), this.Po = !0)
    };
    g.Bq = function(a) {
        var b = a.survey_flag_bitmap;
        this.Mg = a.visible_url;
        this.yp = a.creative_conversion_url;
        this.Ik = a.ad_group_creative_id;
        this.xn = !!(b & 1);
        this.yn = !!(b & 2);
        this.zp = a.survey_display_ttl;
        this.Pd = a.survey_display_strings;
        this.Rp = a.use_wahlberg;
        this.Tx() && (this.Bo || (Rf(this.Ib, "load", y(this.ww, this)), this.Bo = !0), this.Oq(), this.Ut().appendChild(this.Ib))
    };
    g.Ha = function(a) {
        a.surveytrigger = this.Bq
    };
    var Gt = function(a, b, c) {
        Z.call(this, a);
        this.B = b;
        this.v = c;
        this.kp = 0;
        this.Un = .2;
        this.ip = this.bp = !1;
        this.$d = this.vc = 0;
        this.Vc = !1;
        this.yf = 3;
        this.co = 0;
        this.Fb = this.M = "";
        this.ka = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
        this.kj(a.location)
    };
    B(Gt, Z);
    g = Gt.prototype;
    g.Ha = function(a) {
        a.vis_intent = this.Pv;
        a.vis_req = this.Vw
    };
    g.Hm = function() {
        var a = 0;
        this.v || (a |= 1);
        this.j.top != this.j && (a |= 2);
        Yk(this.j) && (a |= 4);
        Xk(this.j) || (a |= 8);
        Uk(this.j) || (a |= 16);
        V(this.j) || (a |= 32);
        return a
    };
    g.Pv = function(a, b) {
        !this.ip && cl(b, this.B.contentWindow) && (this.ip = !0, this.Hm() || this.lp("", Zk(a)))
    };
    g.Vw = function(a, b) {
        if (cl(b, this.B.contentWindow)) {
            var c = [],
                d = this.Hm();
            if (d) c.push({
                key: "vic_e",
                value: d
            });
            else {
                var d = this.j.innerHeight,
                    e = this.v.getBoundingClientRect();
                if (e.height)
                    if (0 > e.bottom || e.top > d) c.push({
                        key: "vic_e",
                        value: "inv"
                    });
                    else {
                        if (0 > e.top && 0 < e.bottom) var f = 0,
                            h = e.bottom;
                        else f = e.top, h = d - e.top;
                        c.push({
                            key: "vic_vh",
                            value: d
                        });
                        h = Math.min(h, e.height);
                        c.push({
                            key: "vic_atl",
                            value: f
                        });
                        c.push({
                            key: "vic_apv",
                            value: h / e.height
                        })
                    } else c.push({
                    key: "vic_e",
                    value: "hdn"
                })
            }
            d = {
                msg_type: "vis_resp"
            };
            d.key_value =
                c;
            this.B.contentWindow.postMessage(cj(d), "*")
        }
    };
    g.kj = function(a) {
        Ik(a, "google_visible_intentful_click") && this.lp(a.search, {})
    };
    g.ji = function(a, b, c) {
        return b && (b = (new RegExp("[?|&]" + a + "=([^&]+)")).exec(b)) && 0 < b.length ? b[1] : c[a]
    };
    g.lp = function(a, b) {
        this.M = b.i_expid;
        this.Fb = b.qid;
        if (this.ka) {
            var c = parseFloat(this.ji("mvr", a, b));
            c && (this.Un = c);
            if (c = this.ji("soc", a, b)) this.bp = "true" == c;
            if (c = parseInt(this.ji("cl", a, b), 10)) this.yf = c;
            4 != this.yf && this.Du();
            this.sa();
            this.kp = A();
            this.R("init", {}, .1)
        } else this.R("nraf", {}, .1)
    };
    g.Du = function() {
        if (!this.$a) {
            var a = this.v.parentNode;
            this.$a = this.j.document.createElement("div");
            var b = {
                    position: "absolute",
                    width: "100%",
                    left: "0",
                    "z-index": 999999,
                    height: this.v.getBoundingClientRect().height + "px"
                },
                c;
            for (c in b) this.$a.style[c] = b[c];
            b = this.$a;
            c = y(this.Nh, this);
            M(b, "click", c, void 0);
            a.appendChild(this.$a)
        }
    };
    g.sa = function() {
        this.ka.call(this.j, y(this.sa, this));
        var a = this.fl(this.j.innerHeight);
        4 != this.yf && (this.$a.style.display = a ? "block" : "none")
    };
    g.fl = function(a) {
        var b = this.v.getBoundingClientRect();
        this.$d = b.height;
        0 > b.top && 0 < b.bottom ? (this.vc = b.bottom, this.Vc = !0) : (this.vc = a - b.top, this.Vc = !1);
        this.vc = Math.min(this.vc, this.$d);
        switch (this.yf) {
            case 2:
                if (this.Vc) return !1;
                break;
            case 1:
                if (!this.Vc) return !1
        }
        return 0 < this.vc && this.vc / this.$d < this.Un
    };
    g.Nh = function(a) {
        this.co++;
        var b = this.j.innerHeight,
            c = this.fl(b);
        if (c && ($g(a), this.bp)) {
            var d = this.$d - this.vc;
            this.j.scrollBy(0, (this.Vc ? -1 : 1) * d)
        }
        c = {
            height: this.vc,
            max: this.$d,
            Uz: c
        };
        a && (c.x = a.clientX, c.y = a.clientY, c.ry = this.Vc ? this.v.getBoundingClientRect().bottom - a.clientY : a.clientY - this.v.getBoundingClientRect().top, c.vh = b, c.tp = this.Vc, c.sp = Tk(this.j));
        this.R("cap", c, .1)
    };
    g.R = function(a, b, c) {
        b.name = a;
        this.M && (b.eid = this.M);
        b.nc = this.co;
        b.tss = A() - this.kp;
        this.Fb && (b.qid = this.Fb);
        this.B && (b.req = this.B.src);
        R("vinc", b, c)
    };
    var Ht = /^blogger$/,
        It = /^wordpress(.|\s|$)/i,
        Jt = /^joomla!/i,
        Kt = /\/wp-content\//,
        Lt = function(a) {
            for (var b = a.getElementsByTagName("meta"), c = b.length, d = 0; d < c; ++d) {
                var e = b[d];
                if ("generator" == e.getAttribute("name") && e.hasAttribute("content")) {
                    e = e.getAttribute("content");
                    if (Ht.test(e)) return 1;
                    if (It.test(e)) return 2;
                    if (Jt.test(e)) return 3
                }
            }
            a = a.getElementsByTagName("link");
            b = a.length;
            for (d = 0; d < b; ++d)
                if (c = a[d], "stylesheet" == c.getAttribute("rel") && c.hasAttribute("href") && (c = c.getAttribute("href"), Kt.test(c))) return 2;
            return 0
        };
    var Pt = function(a, b) {
            if (!a.createRange) return 3;
            var c = Mt(a, b, Me),
                d = Mt(a, b, Ne),
                e;
            if (c.Rd) {
                e = Nt(a, b);
                var f = Nt(a, c.Rd);
                if (Ot(f, e)) return 1
            }
            return d.Rd && (e = e || Nt(a, b), f = Nt(a, d.Rd), Ot(f, e)) ? 1 : c.lg || d.lg ? 2 : 0
        },
        Mt = function(a, b, c) {
            for (var d = 0; b; b = c(b))
                if (3 == b.nodeType) {
                    var e = b,
                        f;
                    f = Tb(e.data, a);
                    if (f = /\S/.test(f)) {
                        f = Nt(a, e);
                        if (f = f.right > f.left && f.bottom > f.top) return {
                            Rd: e,
                            lg: !1
                        };
                        if (10 <= ++d) return {
                            Rd: null,
                            lg: !0
                        }
                    }
                }
            return {
                Rd: null,
                lg: !1
            }
        },
        Nt = function(a, b) {
            if (b.getBoundingClientRect) return b.getBoundingClientRect();
            var c = a.createRange();
            c.selectNodeContents(b);
            return c.getBoundingClientRect()
        },
        Ot = function(a, b) {
            return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
        };
    var Qt = function(a, b) {
            try {
                if (b in a) return a[b];
                if (a.getAttribute) return a.getAttribute(b)
            } catch (c) {}
            return null
        },
        Rt = function(a, b, c, d) {
            try {
                if (a) {
                    var e = new RegExp("\\b" + b + "\\s*=\\s*([\\d.]+)", "i"),
                        f = a.match(e);
                    if (f) {
                        var h = parseFloat(f[1]);
                        if (c <= h && h <= d) return h
                    }
                }
            } catch (k) {}
            return null
        },
        St = function(a, b) {
            var c = Rt(a, b, 200, 1E4);
            return null == c ? -1 : c
        },
        Tt = function(a, b) {
            var c = Rt(a, b, 0, 10);
            return null == c ? -1 : c
        };
    var Ut = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var Vt = function(a, b, c) {
            c = "google_debug" + (c ? "=" + c : "") + "&";
            return [b ? c : "", "xpc=", a, "&p=", encodeURIComponent(p.document.location.protocol), "//", encodeURIComponent(p.document.location.host)].join("")
        },
        Wt = function(a, b, c) {
            c = c ? encodeURIComponent : function(a) {
                return a
            };
            var d = Df(p.document.URL),
                e = 0 < d.length;
            return a + (-1 == a.indexOf(c("?")) ? c("?") : c("&")) + c(Vt(b, e, d))
        },
        Xt = function(a, b, c, d, e, f, h, k) {
            return {
                a: a,
                b: b,
                c: c,
                d: d,
                e: e,
                f: f,
                g: h,
                h: k
            }
        };
    var Yt = function(a) {
            if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
                a = a[0].toLowerCase();
                for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
                a = b;
                switch (a) {
                    case 1967261364:
                        return 0;
                    case 3147493546:
                        return 1;
                    case 1567346461:
                        return 2;
                    case 2183041838:
                        return 3;
                    case 763236279:
                        return 4;
                    case 1342279801:
                        return 5;
                    case 526831769:
                        return 6;
                    case 352806002:
                        return 7;
                    case 2755048925:
                        return 8;
                    case 3306848407:
                        return 9;
                    case 2207000920:
                        return 10;
                    case 484037040:
                        return 11;
                    case 3506871055:
                        return 12;
                    case 672143848:
                        return 13;
                    case 2528751226:
                        return 14;
                    case 2744854768:
                        return 15;
                    case 3703278665:
                        return 16;
                    case 2014749173:
                        return 17;
                    case 133063824:
                        return 18;
                    case 2749334602:
                        return 19;
                    case 3131239845:
                        return 20;
                    case 2074086763:
                        return 21;
                    case 795772493:
                        return 22;
                    case 290857819:
                        return 23;
                    case 3035947606:
                        return 24;
                    case 2983138003:
                        return 25;
                    case 2197138676:
                        return 26;
                    case 4216016165:
                        return 27;
                    case 239803524:
                        return 28;
                    case 975993579:
                        return 29;
                    case 1794940339:
                        return 30;
                    case 1314429186:
                        return 31;
                    case 1643618937:
                        return 32;
                    case 497159982:
                        return 33
                }
            }
            return -1
        },
        Zt =
        function(a) {
            if (!a.length) return 0;
            for (var b = [], c = 0; 33 >= c; c++) b[c] = 0;
            for (c = a.length - 1; 0 <= c; c--) {
                var d = Yt(a[c]);
                0 <= d && (b[33 - d] = 1)
            }
            return parseInt(b.join(""), 2)
        };
    var $t = function(a, b, c, d, e) {
            this.url = a;
            this.Kb = b;
            this.gv = !!d;
            this.depth = v(e) ? e : null
        },
        au = function(a) {
            this.lc = a || p;
            this.Oi()
        };
    g = au.prototype;
    g.Oi = function() {
        var a;
        a = this.lc || p;
        this.yu = a = a.top == a ? 1 : L(a.top) ? 2 : 3;
        3 != this.yu && (a = p.top.document, Date.parse(a.lastModified));
        var b = this.lc,
            c = b || p;
        a = [];
        var d = null,
            e = null,
            f;
        do {
            var h = c;
            L(h) ? (d = h.location.href, e = h.document.referrer || null, f = !0) : (d = e, e = null, f = !1);
            a.push(new $t(d, h, f));
            try {
                c = h.parent
            } catch (k) {
                c = null
            }
        } while (c && h != c);
        c = 0;
        for (h = a.length - 1; c <= h; ++c) a[c].depth = h - c;
        h = b || p;
        if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == a.length - 1)
            for (c = 1; c < a.length; ++c) b = a[c], b.url ||
                (b.url = h.location.ancestorOrigins[c - 1], b.gv = !0);
        this.wc = a
    };
    g.nt = function() {
        return this.wc[0]
    };
    g.Yt = function() {
        return this.wc[this.wc.length - 1]
    };
    g.Ls = function() {
        for (var a = [], b = 1; b < this.wc.length && 27 > b; b++) this.wc[b] && this.wc[b].url && (a[b - 1] = this.wc[b].url);
        return this.am(a.reverse())
    };
    g.Ms = function(a) {
        a = a || (this.lc.document && this.lc.document.scripts ? this.lc.document.scripts : []);
        if (!a) return 0;
        for (var b = [], c = a.length - 1; 0 <= c && 26 > b.length;) a[c].src && b.unshift(a[c].src), c--;
        return this.am(b)
    };
    g.am = function(a) {
        for (var b = "", c = this.Yt().url || "", d = 0; d < a.length && 26 > d; d++) {
            var e;
            null != a[d] && (e = ok(a[d].match(nk)[3] || null, !0));
            if ("" != c && e && e == ok(c.match(nk)[3] || null, !0)) b += "11";
            else {
                var f;
                if (f = e) {
                    f = a[d];
                    var h = /^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i,
                        k = /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i,
                        l = /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(\:\d+)?($|(\/.*))/i,
                        m = /^https?:\/\/(tpc|pagead2).googlesyndication\.com(\:\d+)?($|(\/.*))/i,
                        n = /^https?:\/\/www.googletagservices\.com(\:\d+)?($|(\/.*))/i;
                    f = h.test(f) || k.test(f) || l.test(f) || m.test(f) || n.test(f)
                }
                b = f ? b + "10" : e && e && 0 <= Yt(e) ? b + "01" : b + "00"
            }
        }
        return "" == b ? 0 : parseInt(b, 2)
    };
    g.mt = function(a) {
        a = a || this.wc;
        for (var b = [], c = a.length - 1; 0 < c; c--) {
            var d = a[c];
            d && null != d.url && b.push(ok(d.url.match(nk)[3] || null, !0))
        }
        return Zt(b)
    };
    g.Qt = function(a) {
        a = a || (this.lc.document && this.lc.document.scripts ? this.lc.document.scripts : []);
        if (!a) return 0;
        for (var b = [], c = a.length - 1; 0 <= c; c--) {
            var d = a[c];
            d && null != d.src && b.push(ok(d.src.match(nk)[3] || null, !0))
        }
        return Zt(b)
    };
    var bu = navigator;

    function cu() {
        try {
            return bu.javaEnabled()
        } catch (a) {
            return !1
        }
    }

    function du(a) {
        var b = 1,
            c = 0,
            d;
        if (void 0 != a && "" != a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    }

    function eu(a, b) {
        if (!a || "none" == a) return 1;
        a = String(a);
        "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return du(a.toLowerCase())
    }
    var fu = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        gu = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
    var hu = function(a, b, c, d) {
        Xr.call(this, a, b, c);
        this.jw = a;
        this.gw = b;
        this.Zs = c;
        this.qr = d;
        this.Te = 1;
        this.pe = 0;
        this.current = a
    };
    B(hu, Xr);
    hu.prototype.qw = function() {
        this.xo(1)
    };
    hu.prototype.ow = function() {
        this.xo(-1)
    };
    hu.prototype.xo = function(a) {
        if (a && a != this.pe) {
            var b, c;
            0 < a ? (b = this.gw, c = this.Zs) : (b = this.jw, c = this.qr);
            if (this.pe) {
                var d = 1 - this.Te + this.Te * this.jc;
                this.Te = d;
                this.pe = a;
                this.reset(this.current, b, this.Te * c)
            } else this.Te = 1, this.pe = a, this.reset(this.current, b, c), this.play()
        }
    };
    hu.prototype.Ne = function() {
        this.pe = 0
    };
    var iu = function(a, b, c, d, e) {
        hu.call(this, b, c, d, e);
        this.Od = a;
        this.se = function(a) {
            return a * a
        }
    };
    B(iu, hu);
    iu.prototype.Ed = function() {
        this.Od.boxShadow = this.current[0] + "px " + (this.current[0] + "px") + " " + (this.current[1] + "px") + " rgba(0,0,0," + this.current[2] + ")";
        this.Od.borderColor = "rgba(0,0,0," + this.current[3] + ")";
        this.Od.borderBottomColor = "rgba(0,0,0," + this.current[4] + ")";
        this.Od.borderRightColor = "rgba(0,0,0," + this.current[4] + ")"
    };
    var ju = function(a, b, c, d, e) {
        hu.call(this, b, c, d, e);
        this.Od = a;
        this.se = function(a) {
            return a * a
        }
    };
    B(ju, hu);
    ju.prototype.Ed = function() {
        this.Od.opacity = this.current[0]
    };
    var ku = function(a, b) {
        this.Wk = b;
        this.nj = this.ng = !1;
        var c = y(this.Wv, this),
            d = y(this.Yv, this),
            e = y(this.Xv, this);
        M(a, "mousedown", c);
        M(a, "touchstart", c);
        M(a, "mouseup", d);
        M(a, "touchend", d);
        M(a, "touchmove", e);
        M(a, "mousemove", e);
        M(a, "scroll", e)
    };
    ku.prototype.Wv = function() {
        this.nj = !0;
        this.ng = !1
    };
    ku.prototype.Yv = function() {
        this.ng = this.nj = !1;
        this.Wk.ow()
    };
    ku.prototype.Xv = function() {
        this.nj && !this.ng && (this.ng = !0, this.Wk.qw())
    };
    var lu = 0;
    var mu = function(a) {
            var b = null;
            try {
                b = a.cssRules || a.rules
            } catch (c) {
                if (15 == c.code) throw c.styleSheet = a, c;
            }
            return b
        },
        nu = function(a, b) {
            var c = [],
                d = a || document.styleSheets,
                e = ba(b) ? b : !1;
            if (d.imports && d.imports.length)
                for (var f = 0, h = d.imports.length; f < h; f++) jc(c, nu(d.imports[f]));
            else if (d.length)
                for (f = 0, h = d.length; f < h; f++) jc(c, nu(d[f]));
            else {
                var k = mu(d);
                if (k && k.length)
                    for (var f = 0, h = k.length, l; f < h; f++) l = k[f], l.styleSheet && jc(c, nu(l.styleSheet))
            }!(d.type || d.rules || d.cssRules) || d.disabled && !e || c.push(d);
            return c
        };
    var ou = function(a, b, c, d) {
        "arraybuffer" == d.responseType && d.response ? (b = d.response) ? (b = gi(new Uint8Array(b)), b = "data:application/font-woff:charset=utf-8;base64," + b, a = a.replace("GOOG_URL_DATA", b), c(a)) : c(null) : c(null)
    };
    var pu = function(a, b) {
            this.Tg = a;
            this.Wm = b;
            this.Fl = !1;
            this.Kf = [];
            this.Ao = "";
            Ur(this.Tg, "auto-css", y(this.ku, this))
        },
        qu = function(a, b) {
            this.style = a;
            this.Y = b;
            this.style = this.style;
            this.stats = this.Y
        },
        ru = "color font-family font-size font-weight line-height letter-spacing text-transform text-shadow background-color".split(" "),
        su = "a button div h1 h2 h3 h4 li p ul span".split(" ");
    g = pu.prototype;
    g.ku = function(a, b) {
        a.request == this.Wm.name && (this.Ao = b.origin, this.iy())
    };
    g.iy = function() {
        this.Fl || (this.Fl = !0, this.Kr(this.Tg.document), this.Jr())
    };
    g.Kr = function(a) {
        for (var b = [], c = 0; c < su.length; ++c)
            for (var d = su[c], e = a.getElementsByTagName(d), f = 0; f < e.length; ++f) {
                var h = e[f],
                    k = this.Tg.getComputedStyle(h);
                if (k) {
                    var l;
                    l = k;
                    for (var m = {}, n = 0; n < ru.length; ++n) {
                        var q = ru[n];
                        l[q] && (m[q] = l[q])
                    }
                    l = m;
                    a: {
                        for (m = 0; m < b.length; ++m) {
                            for (var n = b[m].style, q = !0, t = 0; t < ru.length; ++t) var w = ru[t],
                                q = q && l[w] == n[w];
                            if (q) break a
                        }
                        m = -1
                    } - 1 == m && (l = new qu(l, {}), b.push(l), this.Rq(k["font-family"]), m = b.length - 1);
                    l = d;
                    k = b[m];
                    k.Y[3] = parseFloat(k.style["font-size"]);
                    k.Y[0] = 0;
                    k.Y[4] = 0;
                    m =
                        k.Y[1] || 0;
                    n = 0;
                    q = h.childNodes;
                    for (t = 0; t < q.length; ++t) 3 == q[t].nodeType && (n += Se(q[t]).length);
                    k.Y[1] = m + n;
                    m = k.Y[5] || 0;
                    "a" != l && (n = 0);
                    k.Y[5] = m + n;
                    m = 7;
                    2 == l.length && "h" == l.charAt(0) && (l = l.charAt(1), m = Number(l), m = 0 == m && /^[\s\xa0]*$/.test(l) ? NaN : m);
                    k.Y[6] = Math.min(k.Y[6], m) || m;
                    k.Y[7] = (k.Y[7] || 0) + h.scrollWidth;
                    k.Y[8] = (k.Y[8] || 0) + h.scrollHeight;
                    k.Y[9] = (k.Y[9] || 0) + h.scrollWidth * h.scrollHeight;
                    k.Y[10] = (k.Y[10] || 0) + 1
                }
            }
        a = b;
        for (d = c = 0; d < a.length; ++d) c += a[d].Y[1];
        for (d = 0; d < a.length; ++d) a[d].Y[2] = a[d].Y[1] / c;
        this.yj("styles",
            b)
    };
    g.Rq = function(a) {
        a = a.split(",");
        for (var b = 0; b < a.length; ++b) {
            var c = wb(a[b]),
                c = Vb(c, "'\"");
            hc(this.Kf, c) || this.Kf.push(c)
        }
    };
    g.yj = function(a, b) {
        var c = {};
        c[a] = b;
        var d = this.Wm.contentWindow,
            e = this.Ao;
        c.googMsgType = "auto-css";
        d.postMessage(cj(c), e)
    };
    g.Jr = function() {
        for (var a = this.Tg.document.styleSheets, a = nu(a), b = 0; b < a.length; ++b)
            if (a[b].href && 0 <= a[b].href.indexOf("fonts.googleapis.com")) this.yj("font_sheet", a[b].href);
            else try {
                for (var c = mu(a[b]), d = 0; d < c.length; ++d) {
                    var e, f = c[d],
                        h = "";
                    if (f.cssText) h = f.cssText;
                    else if (f.style && f.style.cssText && f.selectorText) var k = f.style.cssText.replace(/\s*-closure-parent-stylesheet:\s*\[object\];?\s*/gi, "").replace(/\s*-closure-rule-index:\s*[\d]+;?\s*/gi, ""),
                        l = f.selectorText + " { " + k + " }",
                        h = l;
                    e = h;
                    e = e.replace(/[\s\xa0]+/g,
                        " ").replace(/^\s+|\s+$/g, "");
                    if (this.Ux(e)) {
                        var h = e,
                            m = y(this.ox, this);
                        if (!I || Md("10"))
                            if (0 !== h.indexOf("@font-face")) m(null);
                            else
                                for (var n = /url\(([^\)]+)\)/g, q = void 0; q = n.exec(h);) {
                                    var t = q[1],
                                        t = wb(t),
                                        t = Vb(t, "'\""),
                                        w, x = "data:",
                                        E, F = String(x).toLowerCase(),
                                        z = String(t.substr(0, x.length)).toLowerCase();
                                    E = F < z ? -1 : F == z ? 0 : 1;
                                    if (w = 0 == E) {
                                        m(h);
                                        break
                                    }
                                    if (-1 != t.toLowerCase().indexOf(".woff") && -1 == t.toLowerCase().indexOf(".woff2")) {
                                        var H = q[0].replace(t, "GOOG_URL_DATA"),
                                            h = h.replace(q[0], H),
                                            n = t,
                                            Ta = new XMLHttpRequest;
                                        Ta.onload = qa(ou, h, n, m, Ta);
                                        Ta.open("GET", n, !0);
                                        Ta.responseType = "arraybuffer";
                                        Ta.send();
                                        break
                                    }
                                } else m(null)
                    }
                }
            } catch (Xf) {}
    };
    g.Ux = function(a) {
        if (0 != a.indexOf("@font-face")) return !1;
        for (var b = 0; b < this.Kf.length; ++b) {
            var c = this.Kf[b];
            if (0 <= a.indexOf(c)) return !0
        }
        return !1
    };
    g.ox = function(a) {
        a && this.yj("font_css", a)
    };
    var tu = {
            client: "google_ad_client",
            format: "google_ad_format",
            slotname: "google_ad_slot",
            output: "google_ad_output",
            ad_type: "google_ad_type",
            async_oa: "google_async_for_oa_experiment",
            dimpr: "google_always_use_delayed_impressions_experiment",
            peri: "google_top_experiment",
            pse: "google_pstate_expt"
        },
        uu = function(a) {
            a.shv = gb();
            xf(tu, function(b, c) {
                try {
                    null != p[b] && (a[c] = p[b])
                } catch (d) {}
            })
        };
    nh.Ox(!jb);
    nh.tx(uu);
    var vu = function(a) {
            var b = qm;
            return URI(Uf({
                dtd: Vg(b)
            }, a))
        },
        wu = function(a, b) {
            var c = a - b;
            return 0 > c ? "-M" : 1E6 <= c ? "M" : c
        };
    var xu = tb(!1),
        Bu = function() {
            var a = N,
                b = U.Fq,
                c = a.google_pub_vars;
            if (c)
                if ("{C}" === c) T().Qa(b.s);
                else {
                    if ("{X}" !== c) {
                        var d = si(c),
                            e = !1;
                        yu(a, d, e)
                    }
                    T().Qa(b.o)
                }
            if (!/_sdo/.test(N.google_ad_format)) {
                if (!Mh()) {
                    var f = Nh(),
                        h, k = N.google_ad_modifications;
                    h = k ? k.eids || [] : [];
                    for (var l = 0; l < h.length; ++l) f.Qa(h[l]);
                    var m;
                    if (!lb) {
                        m = kb ? ["575144606", "575144607"] : ["575144603", "575144604"];
                        var n = f.G(m, kb ? Ia : Ha, 5);
                        n == m[1] ? mb = !0 : n == m[0] ? mb = lb : kb || f.G(["575144605"], 1, 5)
                    }
                    if (N.google_top_experiment && window.google_top_experiment) {
                        var q;
                        switch (window.google_top_experiment) {
                            case "jp_c":
                                q = "317150300";
                                break;
                            case "jp_zl":
                                q = "317150301";
                                break;
                            case "jp_wfpmr":
                                q = "317150302";
                                break;
                            case "jp_zlt":
                                q = "317150305";
                                break;
                            case "jp_wnt":
                                q = "317150306"
                        }
                        q && Nh().G([q], 1, 10)
                    }
                    m = ["317150310", "317150311"];
                    f.G(m, Aa, 14);
                    f.G(["317150304"], 1, 10);
                    if (window.google_ad_unit_key_2) {
                        var t;
                        "ctrl" == window.google_ad_unit_key_2 ? t = "33895400" : /[0-9]+/.test(window.google_ad_unit_key_2) && (t = "33895401");
                        t && Nh().G([t], 1, 4)
                    }
                    m = ["42631002", "42631003"];
                    f.G(m, Ca, 17);
                    var w = en(If);
                    if (3 == w) {
                        var x = Nh();
                        x.G(["33895332", "33895333"], ya, 19)
                    }
                    m = ["1212120621", "1212120620"];
                    f.G(m, Ra, 31);
                    m = ["4087310", "4087311"];
                    f.G(m, Ua, 35);
                    m = ["4087315", "4087317"];
                    f.G(m, Va, 42);
                    m = ["4087390", "4087391", "4087392", "4087393"];
                    f.Fr(N, m, Hl, Wa, 46);
                    m = [U.hd.s, U.hd.o];
                    f.G(m, Ya, 37);
                    m = [U.Vg.s, U.Vg.o];
                    f.G(m, Za, 41);
                    m = [U.Xg.s, U.Xg.o];
                    f.G(m, cb, 44);
                    var E;
                    a: {
                        try {
                            E = N.top.google_pubvars_reuse_experiment;
                            break a
                        } catch (cd) {}
                        E = void 0
                    }
                    if ("C" === E || "E" === E) {
                        var F = U.oq,
                            z = "E" === E ? F.o : F.s;
                        f.G([z], 1)
                    }
                    m = ["12239710", "12239711"];
                    f.G(m,
                        db, 47);
                    m = ["453848260", "453848261"];
                    f.G(m, eb, 48)
                }
                var H = T(),
                    Ta = H.V(5);
                "575144604" == Ta ? mb = !0 : "575144603" == Ta && (mb = lb);
                var Xf = navigator.userAgent,
                    ge = window.google_async_for_oa_experiment;
                if (ge) {
                    window.google_async_for_oa_experiment = void 0;
                    var qc, Zf = /Chrome/.test(Xf);
                    "C" == ge ? qc = Zf ? "33895183" : "33895173" : "E" == ge && (qc = Zf ? "33895184" : "33895174");
                    qc && T().G([qc], 1, 20)
                }
                var $f = window.google_always_use_delayed_impressions_experiment,
                    he = window.google_ad_output;
                if ($f && (!he || "html" == he)) {
                    var ie = "E" == $f ? "33895335" :
                        "33895334";
                    T().G([ie], 1, 4)
                }
                a: {
                    var ag = U.sq,
                        bg = N.google_responsive_override_logs_experiment,
                        je;
                    if ("LE" == bg) je = ag.o;
                    else if ("LC" == bg) je = ag.s;
                    else break a;
                    T().G([je], 1, 40)
                }
                var fj = N.google_pubvars_recovery_regexp_experiment,
                    dd = U.mq,
                    rc;
                switch (fj) {
                    case "C":
                        rc = dd.s;
                        break;
                    case "E":
                        rc = dd.o;
                        break;
                    case "EM":
                        rc = dd.aq
                }
                rc && Ph(N, rc);
                var Gb;
                var ke = N;
                try {
                    var $a = tf(ke);
                    Gb = tl(ke, $a) && !!$a && !(V($a) && Uk($a) && Xk($a))
                } catch (cd) {
                    Gb = !1
                }
                if (Gb) {
                    var le = ["828064121"],
                        cg = T();
                    cg.G(le, Ja, 29)
                }
                8 == N.google_reactive_ad_format && T().G([39071250],
                    1);
                a: {
                    var dg = T(),
                        me = ["4087070", "4087071", "4087072"];
                    if (!I && N.location) {
                        var Hb = N.location.hash,
                            ed = "debug_animation_id=";
                        if (Hb) {
                            var eg = Hb.indexOf(ed);
                            if (-1 < eg)
                                for (var fd = Hb.substr(eg + ed.length).split(","), Ib = 0; Ib < fd.length; ++Ib)
                                    if (-1 < me.indexOf(fd[Ib])) {
                                        dg.Qa(fd[Ib], 32);
                                        break a
                                    }
                        }
                    }
                    dg.G(me, Sa, 32)
                }
                var Jb = N.google_active_plles;
                if (Jb)
                    for (var aa = 0; aa < Jb.length; ++aa) {
                        var P = Jb[aa],
                            sc = U.ah,
                            Kb = U.qq;
                        P == sc.s ? Ph(N, Kb.s) : P == sc.o && Ph(N, Kb.o);
                        var tc = U.fh,
                            ne = U.yq;
                        P == tc.s ? Ph(N, ne.s) : P == tc.o && Ph(N, ne.o);
                        var nb = U.bh,
                            fg =
                            U.rq;
                        P == nb.s ? Ph(N, fg.s) : P == nb.o && Ph(N, fg.o);
                        var oe = U.$g,
                            gg = U.pq;
                        P == oe.s ? Ph(N, gg.s) : P == oe.o && Ph(N, gg.o);
                        var hg = U.zk,
                            ig = U.cq;
                        P == hg.s ? Ph(N, ig.s) : P == hg.o && Ph(N, ig.o)
                    }
                var gd = 2 == Ol(N);
                gd && Oi() && T().G([U.Zg.o, U.Zg.s, U.Zg.Yp], Da);
                var jg = 2 == Ol(N);
                jg && Oi() && T().G([U.Dk.o, U.Dk.s], Ea);
                if (Yk(N)) {
                    var kg = tf(N),
                        lg = Yk(N);
                    if (kg && 8 == lg) {
                        var gj = Y(kg),
                            mg = U.Gq;
                        switch (gj.interstitialJSRefactorExperiment) {
                            case 1:
                                T().Qa(mg.o, 45);
                                break;
                            case 2:
                                T().Qa(mg.s, 45)
                        }
                    }
                }
                var ng, uc = N.google_loeid,
                    pe = (uc ? [uc] : []).concat(Il(N));
                ng = pe.join(",") ||
                    void 0;
                N.google_loeid = ng;
                var hd, Lb = N.google_ad_channel,
                    Ga, id = N.google_ad_modifications;
                Ga = id ? id.ad_channels || [] : [];
                var qe = (Lb ? [Lb] : []).concat(Ga);
                hd = qe.join("+");
                N.google_ad_channel = hd;
                var Mb = N.google_start_time;
                v(Mb) && (qm = Mb, N.google_start_time = null);
                sh("show_ads::init_globals", th, zu);
                var vc = N,
                    wc = tf(vc);
                if (wc && (Gr(wc, vc), Kr(vc, wc))) {
                    var re = vc.google_ad_client,
                        jd = tf(wc);
                    if (jd) {
                        var se = Fr(jd, re);
                        se || new Vr(jd)
                    }
                }
                var xc = N.google_reactive_ads_config;
                if (xc) {
                    Lr(tf(N), xc);
                    var og, kd = Nh(),
                        ld = U.Zp,
                        md = [ld.s,
                            ld.o
                        ],
                        te = kd.G(md, fb);
                    if (og = te !== ld.o) {
                        var oa = N,
                            ue = xc,
                            Nb = N.google_ad_client,
                            Ob = tf(oa);
                        if (!Ob) throw Error("reactive tag in cross-domain iframe");
                        if (Nr(Ob, oa)) {
                            var yc, ob = oa,
                                ve = ue,
                                nd = {
                                    client: Nb,
                                    plat: Jr(Ob, ob),
                                    plaf: Or(ve)
                                },
                                Pb = ob,
                                we = nd,
                                Qb = Dh(),
                                pg = Fh(Qb, 8),
                                od = Pb.google_ad_section;
                            pg[od] && (we.prev_fmts = pg[od]);
                            var qg = Fh(Qb, 9);
                            qg[od] && (we.prev_slotnames = qg[od].toLowerCase());
                            if (jb) {
                                var pd = ih(ob);
                                pd && (nd.debug_experiment_id = pd)
                            }
                            var rg = sb(),
                                qd = Wh(rg, "/getconfig/pla?");
                            yc = Uf(nd, qd);
                            var xe = nh.Ue("racr::onsuc",
                                    qa(Qr, ue), void 0, void 0, void 0),
                                xe = Mr(Ob, xe),
                                hj = nh.Ue("racr::onerr", Rr, void 0, void 0, void 0);
                            uk("GET", yc, null).then(xe, hj)
                        }
                    }
                } else Yk(N) && (Mk(N.location) && (N.google_adtest = N.google_adtest || "on"), N.google_pgb_reactive = N.google_pgb_reactive || 3), Au()
            }
        },
        Cu = -1;
    N.google_eas_queue = N.google_eas_queue || [];
    var Du = Zg(function() {
        var a = If.createElement("script");
        a.async = !0;
        a.type = "text/javascript";
        var b;
        b = Nh();
        b = (b = "1212120621" == b.V(31)) ? "/pagead/js/r20151103/r20151006/creative_toolset.js" : "/pagead/js/r20151103/r20151006/expansion_embed.js";
        b = Wh(xu, b);
        a.src = 'http://www.googleadservices.info/pagead/js/expansion_embed.js'//b;
        b = If.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    });

    function Eu(a) {
        return null != a ? '"' + a + '"' : '""'
    }
    var Fu = function() {
            var a = Wi(),
                b = Dh();
            Fh(b, 17) || (Gh(b, 17, !0), a.setUpForcePeriscope && a.setUpForcePeriscope(), a.setupOse(Fh(b, 7)))
        },
        Gu = function(a, b, c, d, e, f, h, k) {
            var l = If.getElementById(a);
            if (l || "html" != c) {
                if ((a = tf(N)) && l && !Yk(N)) {
                    k = Wg ? N.frameElement : null;
                    new vt(a, l, k, f, h);
                    k && l && k.parentNode && new rt(a, l, k);
                    f = a;
                    h = l;
                    var m = k;
                    if (m) {
                        var n = m.ownerDocument.getElementById(m.id + "_expand");
                        n && new st(f, h, m, n)
                    }
                    new Tr(a);
                    k && (new xt(a, l, k), f = a, h = l, m = N.frameElement, f && h && m && (Ik(f.location, "google_supersize_debug") ? (k =
                        ff(gf, m).height + 50, f = new zt(f, h, m), h = f.Em(), 0 == h && (f.Pb = k, f.Gc())) : new zt(f, h, m)))
                }
                if (a) {
                    if (k = l) a: {
                        try {
                            k = !!a.postMessage;
                            break a
                        } catch (q) {}
                        k = !1
                    }
                    k && new Gt(a, l, N.frameElement);
                    new Bt(a)
                }
                l && (k = l, f = Q(), Hq(f) && new Sr(f, k));
                a || (a = N.top, k = Q(), Hq(k) && !L(a) && Qf(k, qa(Nq, a, k)));
                a = Wi();
                a.getOseId() && a.registerAdBlock(b, 1, String(c || ""), l, d, e)
            } else k ? (e = {
                context: "ac::nfrm",
                url: b
            }, R("jserror", e)) : (e = uh("ac::psrt", qa(Gu, a, b, c, d, e, f, h, !0)), N.setTimeout(e, 0))
        },
        Iu = function() {
            Wg ? (pm(), Hu() || Wl(N)) : bm(N)
        },
        Mu = function(a,
            b) {
            if (3 != en(b)) Ju(Ku, a);
            else {
                var c = fn(b);
                if (c) {
                    var d = function() {
                        Ju(Ku, a);
                        Ef(b, c, d)
                    };
                    M(b, c, d)
                }
            }
            Lu = !1
        },
        pw = function(a) {
            if (Nu(a)) return !1;
            var b = N,
                c, d = b,
                e = Q().document,
                f = {},
                h, k = d,
                l = e,
                m = {};
            m.Hp = wh(window);
            m.ty = am(m.Hp, void 0);
            m.Xm = Xl(Q(), l, k.google_ad_width, k.google_ad_height);
            var n, q = m.Xm,
                t = m.ty.ig,
                w = Q(),
                x = Ol(w),
                E = 4;
            q || 1 != x ? q || 2 != x ? q && 1 == x ? E = 7 : q && 2 == x && (E = 8) : E = 6 : E = 5;
            t && (E |= 16);
            n = "" + E;
            m.xu = n;
            h = m;
            var F = h.Hp,
                z = h.Xm;
            f.iframing = h.xu;
            if (!d.google_page_url && "ad.yieldmanager.com" == e.domain) {
                for (var H = e.URL.substring(e.URL.lastIndexOf("http")); - 1 <
                    H.indexOf("%");) try {
                    H = decodeURIComponent(H)
                } catch (ua) {
                    break
                }
                d.google_page_url = H
            }
            var Ta, Xf = d,
                ge = Zl();
            if (Ta = !ge && !!Xf.google_page_url) {
                var qc = f,
                    Zf = e,
                    $f = z;
                qc.page_url = d.google_page_url;
                qc.page_location = $l(Zf, $f) || "EMPTY"
            } else {
                var he = f;
                he.page_url = $l(e, z);
                he.page_location = null
            }
            f.last_modified_time = e.URL == f.page_url ? Date.parse(e.lastModified) / 1E3 : null;
            var ie;
            if (F == F.top) ie = F.document.referrer;
            else {
                var ag = Zl(!0);
                ie = ag || ""
            }
            f.referrer_url = ie;
            var bg, je = Nh().V(35);
            if ((bg = "4087311" == je) && f.referrer_url) {
                var fj =
                    ok(f.referrer_url.match(nk)[3] || null, !0);
                if (0 <= fj.indexOf("google.com") && -1 == f.referrer_url.indexOf("q=")) {
                    var dd = e.getElementsByTagName("title");
                    0 < dd.length && (f.referrer_url = "https://www.google.com/?q=" + Se(dd[0]))
                }
            }
            c = f;
            Yl(b, c);
            if (!Ou()) return !1;
            if (Yk(N) && 16 != N.google_reactive_ad_format) {
                var rc = Q(),
                    Gb;
                var ke = N,
                    $a = ke.google_reactive_ad_format;
                if (Dc(Ak, $a)) {
                    var le = tf(rc);
                    if (le && Cr(le, ke, $a)) {
                        var cg = Y(le),
                            dg = cg.wasReactiveAdCreated[$a];
                        cg.wasReactiveAdCreated[$a] = !0;
                        Gb = !dg
                    } else Gb = !1
                } else Gb = !1;
                if (!Gb) return !1
            }
            var me =
                Uh(N) ? sb() : rb(),
                Hb = tf(N);
            if (Hb && 1 == Yk(N)) {
                var ed = Pk(Hb);
                if (ed) {
                    var eg = Hb.innerWidth > ed.clientWidth && Hb.innerHeight > ed.scrollHeight,
                        fd = U.bq;
                    Ph(N, eg ? fd.o : fd.s)
                }
            }
            var Ib, Jb = a,
                aa = {};
            Pu(aa);
            var P = aa,
                sc = N,
                Kb = P;
            Kb.dt = qm;
            Wg && sc.google_bpp && (Kb.bpp = sc.google_bpp);
            var tc;
            var ne = Q();
            try {
                var nb = ne.performance;
                if (nb && nb.timing && nb.now) var fg = nb.timing.navigationStart + Math.round(nb.now()),
                    oe = fg - nb.timing.domLoading
            } catch (ua) {}
            if (oe) {
                var gg = qm,
                    hg = ne.Date.now() - gg,
                    ig = wu(oe, hg);
                tc = ig
            } else tc = null;
            tc && (Kb.bdt = tc);
            var gd;
            var jg = sc.google_iframe_start_time;
            if (v(jg)) {
                sc.google_iframe_start_time = null;
                var kg = wu(jg, qm);
                gd = kg
            } else gd = null;
            null != gd && (Kb.fdt = gd);
            var lg, gj = wu(rm, qm);
            lg = gj;
            Kb.idt = lg;
            P.shv = gb();
            var mg = !!N.google_test_1,
                ng = !!N.google_test_2;
            mg && (P.tsi = ng ? "3" : "2");
            P.cbv = "/r20151006".replace("/", "");
            /^\w{1,3}$/.test(N.google_loader_used) && (P.saldr = N.google_loader_used);
            var uc = Dh(),
                pe = uc,
                hd = P,
                Lb = Fh(pe, 8),
                Ga = N.google_ad_section,
                id = N.google_ad_format,
                qe = N.google_ad_slot;
            Lb[Ga] && (hd.prev_fmts = Lb[Ga]);
            var Mb = Fh(pe, 9);
            Mb[Ga] && (hd.prev_slotnames = Mb[Ga].toLowerCase());
            id ? Lb[Ga] = Lb[Ga] ? Lb[Ga] + ("," + id) : id : qe && (Mb[Ga] = Mb[Ga] ? Mb[Ga] + ("," + qe) : qe);
            var vc = Fh(pe, 15);
            0 < vc && (hd.nras = "" + vc);
            P.correlator = Fh(uc, 7);
            if (N.google_ad_channel) {
                for (var wc = Fh(uc, 10), re = "", jd = N.google_ad_channel.split(Qu), se = 0; se < jd.length; se++) {
                    var xc = jd[se];
                    wc[xc] ? re += xc + "+" : wc[xc] = !0
                }
                P.pv_ch = re
            }
            if (N.google_ad_host_channel) {
                for (var og, kd = Fh(uc, 11), ld = N.google_ad_host_channel.split("|"),
                        md = -1, te = [], oa = 0; oa < ld.length; oa++) {
                    var ue = ld[oa].split(Qu);
                    kd[oa] || (kd[oa] = {});
                    for (var Nb = "", Ob = 0; Ob < ue.length; Ob++) {
                        var yc = ue[Ob];
                        "" != yc && (kd[oa][yc] ? Nb += "+" + yc : kd[oa][yc] = !0)
                    }
                    Nb = Nb.slice(1);
                    te[oa] = Nb;
                    "" != Nb && (md = oa)
                }
                var ob = "";
                if (-1 < md) {
                    for (oa = 0; oa < md; oa++) ob += te[oa] + "|";
                    ob += te[md]
                }
                og = ob;
                P.pv_h_ch = og
            }
            hb && (P.jscb = 1);
            ib && (P.jscd = 1);
            P.frm = N.google_iframing;
            var ve = Q().document,
                nd = "";
            try {
                nd = ve.cookie
            } catch (ua) {}
            var Pb, we = ve.domain,
                Qb = nd,
                pg = Vf(),
                od = N.screen,
                qg = ve.referrer,
                pd = Math.round((new Date).getTime() /
                    1E3),
                rg = window.google_analytics_domain_name,
                qd = "undefined" == typeof rg ? eu("auto", we) : eu(rg, we),
                xe = -1 < Qb.indexOf("__utma=" + qd + "."),
                hj = -1 < Qb.indexOf("__utmb=" + qd),
                cd, so = Dh("google_persistent_state"),
                kj;
            if (!(kj = Fh(so, 14))) {
                var Yu = {};
                kj = Gh(so, 14, Yu)
            }
            var fa = kj,
                to = !1;
            if (xe) cd = Qb.split("__utma=" + qd + ".")[1].split(";")[0].split("."), hj ? fa.sid = cd[3] + "" : fa.sid || (fa.sid = pd + ""), fa.vid = cd[0] + "." + cd[1], fa.from_cookie = !0;
            else {
                fa.sid || (fa.sid = pd + "");
                if (!fa.vid) {
                    var to = !0,
                        uo, Zu = Math.round(2147483647 * Math.random()),
                        vo, $u = Qb,
                        wo = pg,
                        sg = od,
                        av = qg,
                        xo, lj, La = [bu.appName, bu.version, bu.language ? bu.language : bu.browserLanguage, bu.platform, bu.userAgent, cu() ? 1 : 0].join("");
                    sg ? La += sg.width + "x" + sg.height + sg.colorDepth : window.java && (lj = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), La += lj.screen.width + "x" + lj.screen.height);
                    La += $u;
                    La += av || "";
                    for (xo = La.length; 0 < wo;) La += wo-- ^ xo++;
                    vo = du(La);
                    uo = Zu ^ vo & 2147483647;
                    fa.vid = uo + "." + pd
                }
                fa.from_cookie = !1
            }
            if (!fa.cid) {
                var zc;
                a: {
                    var yo = 999,
                        rd = window.google_analytics_domain_name;
                    rd && (rd =
                        0 == rd.indexOf(".") ? rd.substr(1) : rd, yo = ("" + rd).split(".").length);
                    for (var zo, Ao = 999, mj = Qb.split(";"), tg = 0; tg < mj.length; tg++) {
                        var sd = fu.exec(mj[tg]) || gu.exec(mj[tg]);
                        if (sd) {
                            if (sd[1] == yo) {
                                zc = sd[2];
                                break a
                            }
                            sd[1] < Ao && (Ao = sd[1], zo = sd[2])
                        }
                    }
                    zc = zo
                }
                to && zc && -1 != zc.search(/^\d+\.\d+$/) ? fa.vid = zc : zc != fa.vid && (fa.cid = zc)
            }
            fa.dh = qd;
            fa.hid || (fa.hid = Math.round(2147483647 * Math.random()));
            Pb = fa;
            P.ga_vid = Pb.vid;
            P.ga_sid = Pb.sid;
            P.ga_hid = Pb.hid;
            P.ga_fc = Pb.from_cookie;
            P.ga_cid = Pb.cid;
            P.ga_wpids = N.google_analytics_uacct;
            var bv = P,
                ug;
            var Bo = N.google_ad_client;
            try {
                var Co = yh(),
                    vg = Co.google_prev_clients;
                vg || (vg = Co.google_prev_clients = {});
                Bo in vg ? ug = 1 : (vg[Bo] = !0, ug = 2)
            } catch (ua) {
                ug = 0
            }
            bv.pv = ug;
            var cv = T(),
                Do = ["20040051", "20040050"],
                dv = cv.G(Do, bb, 43);
            if (dv == Do[0]) {
                var td = P,
                    ze = new au(N);
                N.location && N.location.ancestorOrigins && (td.iag = ze.Ls());
                td.icsg = ze.Ms();
                var Eo = ze.nt().depth;
                0 < Eo && (td.nhd = Eo);
                td.dssz = If.scripts ? If.scripts.length : 0;
                td.mdo = ze.mt();
                td.mso = ze.Qt()
            }
            var ab = aa;
            ab.u_tz = -(new Date).getTimezoneOffset();
            ab.u_his =
                Vf();
            ab.u_java = !!N.navigator && "unknown" != typeof N.navigator.javaEnabled && !!N.navigator.javaEnabled && N.navigator.javaEnabled();
            N.screen && (ab.u_h = N.screen.height, ab.u_w = N.screen.width, ab.u_ah = N.screen.availHeight, ab.u_aw = N.screen.availWidth, ab.u_cd = N.screen.colorDepth);
            N.navigator && N.navigator.plugins && (ab.u_nplug = N.navigator.plugins.length);
            N.navigator && N.navigator.mimeTypes && (ab.u_nmime = N.navigator.mimeTypes.length);
            if (Jb) try {
                var Fo = Jb,
                    Go = aa,
                    ev = Go,
                    Ho, wg = Fo,
                    nj = Wd(wg),
                    Ac = "";
                if (nj.body.createTextRange &&
                    Oe(nj, wg)) {
                    var Io = nj.body.createTextRange();
                    Io.moveToElementText(wg);
                    try {
                        Ac = Io.queryCommandValue("FontName")
                    } catch (ua) {
                        Ac = ""
                    }
                }
                Ac || (Ac = Ye(wg, "fontFamily"));
                var Jo = Ac.split(",");
                1 < Jo.length && (Ac = Jo[0]);
                Ho = Vb(Ac, "\"'");
                ev.dff = Ho.toLowerCase();
                Go.dfs = sf(Fo);
                Ru(Jb, aa)
            } catch (ua) {}
            Su(aa);
            var fv = aa,
                xg;
            var ud = Q();
            if (ud == ud.top) xg = 0;
            else {
                var Ae = [];
                Ae.push(ud.document.URL);
                ud.name && Ae.push(ud.name);
                var Mo = Mi(!1, ud, !1);
                Ae.push(Mo.width.toString());
                Ae.push(Mo.height.toString());
                xg = yf(Ae.join(""))
            }
            0 != xg && (fv.ifk =
                xg.toString());
            var gv = aa,
                No = T();
            if (r(N.google_eids) && 0 !== N.google_eids.length) {
                $h |= 64;
                for (var yg = 0; yg < N.google_eids.length; yg++) u(N.google_eids[yg]) && No.Qa(N.google_eids[yg])
            }
            gv.eid = Sh(No).join();
            Tu(aa);
            var iv = aa,
                jv = Wi(),
                Oo = jv.getOseId();
            Oo && (iv.oid = Oo);
            var zg = Jb,
                K = aa,
                W = Q();
            K.ref = N.google_referrer_url;
            K.loc = N.google_page_location;
            var Po = yh(),
                oj = am(Po),
                kv = T(),
                lv = Nh(),
                mv = lv.V(42);
            if ("4087317" == mv) {
                for (var pj = K, Ag = W.document.getElementsByTagName("link"), Be = "missing", Qo = pj.url, Ce = 0; Ce < Ag.length; ++Ce)
                    if ("canonical" ==
                        Ag[Ce].rel)
                        if (Ag[Ce].href) {
                            Be = Ag[Ce].href;
                            pk(Qo) != pk(Be) || (pj.url = Be);
                            break
                        } else Be = "empty";
                var nv = Dh(),
                    ov = {
                        ourl: Qo,
                        corr: Fh(nv, 7),
                        adk: pj.adk,
                        curl: Be
                    };
                R("canonical_url", ov, 1)
            }
            var Bg = K,
                qj = oj;
            Bg.url || Bg.loc || !qj.url || (Bg.url = qj.url, qj.ig || (Bg.usrc = 1));
            "33895335" == kv.V(4) && Uu(K);
            var pv = K.loc || K.url;
            oj.url != pv && (K.top = oj.url);
            N.google_async_rrc && (K.rr = N.google_async_rrc);
            K.rx = 0;
            var So, To = mm();
            (So = Jf(To.tc) ? To.tc() : null) && (K.jtc = So);
            0 <= Cu && (K.eae = Cu);
            var Uo = W.google_top_js_status;
            Uo && (K.jp = Uo);
            Vu && (K.jpd =
                Vu);
            var Vo = Ir(N, W);
            Vo && (K.fc = Vo);
            var qv = ut(W, N) ? 1 : 0;
            K.pc = qv;
            var rj = N,
                Cg = tf(W);
            if (Cg && vr(rj, Cg)) {
                var De;
                var Wo = Cg.document.getElementById(rj.google_async_iframe_id);
                if (Wo) {
                    for (var Ee = Wo.parentElement; Ee && !Yg.test(Ee.className);) Ee = Ee.parentElement;
                    De = Ee
                } else De = null;
                if (De) {
                    var rv = tr(Cg),
                        sv = qi(rj);
                    rv.push({
                        Aj: De,
                        xa: sv,
                        offsetWidth: De.offsetWidth
                    })
                }
            }
            if (!Qg(N)) {
                var tv = K,
                    Xo, sj = "";
                if (document.documentMode) {
                    var Bc = document.createElement("IFRAME");
                    Bc.frameBorder = 0;
                    Bc.style.height = 0;
                    Bc.style.width = 0;
                    Bc.style.position =
                        "absolute";
                    if (document.body) {
                        document.body.appendChild(Bc);
                        try {
                            var Dg = Bc.contentWindow.document;
                            Dg.open();
                            Dg.write("<!DOCTYPE html>");
                            Dg.close();
                            sj += Dg.documentMode
                        } catch (ua) {}
                        document.body.removeChild(Bc)
                    }
                }
                Xo = sj;
                tv.docm = Xo
            }
            var Yo;
            try {
                var uv = W.screenX,
                    vv = W.screenY
            } catch (ua) {}
            try {
                var wv = W.outerWidth,
                    xv = W.outerHeight
            } catch (ua) {}
            try {
                var yv = W.innerWidth,
                    zv = W.innerHeight
            } catch (ua) {}
            Yo = [W.screenLeft, W.screenTop, uv, vv, W.screen ? W.screen.availWidth : void 0, W.screen ? W.screen.availTop : void 0, wv, xv, yv, zv];
            K.brdim =
                Yo.join();
            var Av = T().V(14);
            if ("317150311" == Av) {
                var Bv = K,
                    Zo, $o = Pl(W.top, W, 0);
                window.setTimeout(qa(Ql, W, K.adk, K.correlator, K.frm, $o.Ac), 2E3);
                Zo = $o.Ac;
                Bv.frmn = Zo
            }
            var tj, uj = 0;
            !ba(N.postMessage) && (uj |= 1);
            tj = uj;
            0 < tj && (K.osd = tj);
            K.vis = en(If);
            if (Yk(N)) {
                var Cv = Yk(N);
                K.fa = Cv
            }
            if (zg) {
                var vj, wj;
                if (Yk(N)) wj = hn;
                else {
                    var Dv = new vn(zg, null, {
                        width: 0,
                        height: 0
                    }, N.google_ad_width, N.google_ad_height, !1);
                    wj = Dv.Up()
                }
                vj = wj;
                K.rsz = vj.toString();
                K.abl = vj.Ek()
            }
            var ap, Eg = W.google_async_config,
                bp = dm(N.google_ad_client);
            ap = Eg ? bp in
                Eg ? Eg[bp].sra_enabled ? "t" : "f" : "default" in Eg ? "d" : "u1" : "u";
            K.ppjl = ap;
            if ("html" === Pg(N) && !Yk(N)) {
                var Ev = N.google_async_iframe_id,
                    Fv = K,
                    Fg;
                a: {
                    try {
                        var Gg;
                        var cp = Ev;
                        if (cp) {
                            var Gv = Q();
                            Gg = Gv.document.getElementById(cp)
                        } else {
                            var dp = document.getElementsByTagName("script"),
                                ep = dp[dp.length - 1];
                            Gg = ep && ep.parentNode || null
                        }
                        if (Gg) {
                            for (var fp, gp = [], Hg = Gg, Hv = 0, Iv = A(); 100 >= ++Hv && 10 > A() - Iv && (Hg = Wu(Hg));) 1 === Hg.nodeType && gp.push(Hg);
                            fp = gp;
                            b: {
                                for (var hp = fp, Kv = A(), Lv = /^html|body$/i, Mv = /^fixed|sticky$/i, xj = 0; xj < hp.length &&
                                    10 > A() - Kv; xj++) {
                                    var yj = hp[xj];
                                    if (!Lv.test(yj.tagName) && Mv.test(yj.style.position || Ye(yj, "position"))) {
                                        Fg = !0;
                                        break b
                                    }
                                }
                                Fg = !1
                            }
                            break a
                        }
                    } catch (ua) {}
                    Fg = !1
                }
                Fv.pfx = Fg ? 1 : 0
            }
            var zj = tf(N),
                ip = zj,
                Nv = K;
            if (ip) {
                var Aj = U.kq;
                if (T().G([Aj.s, Aj.o], Qa) == Aj.o) {
                    var Bj, pb, Fe;
                    a: {
                        try {
                            var Cc, Ig = ip.document;
                            if (Ig.querySelectorAll) {
                                Cc = Ig.querySelectorAll("meta[name=viewport]");
                                Fe = Cc[Cc.length - 1] || null;
                                break a
                            }
                            if (Ig.getElementsByTagName) {
                                Cc = Ig.getElementsByTagName("meta");
                                for (var Jg = Cc.length - 1; 0 <= Jg; Jg--)
                                    if ("viewport" == Qt(Cc[Jg],
                                            "name")) {
                                        Fe = Cc[Jg];
                                        break a
                                    }
                            }
                        } catch (ua) {}
                        Fe = null
                    }
                    Bj = (pb = Fe ? Qt(Fe, "content") : null) ? [St(pb, "width"), pb.match(/\bwidth\s*=\s*device-width\b/i) ? 1 : 0, St(pb, "height"), pb.match(/\bheight\s*=\s*device-height\b/i) ? 1 : 0, Tt(pb, "initial-scale"), Tt(pb, "minimum-scale"), Tt(pb, "maximum-scale"), pb.match(/\buser-scalable\s*=\s*no\b/i) ? 0 : 1] : null;
                    Nv.mvp = Bj ? Bj.join() : "n"
                }
            }
            var Ov = K;
            "828064121" === T().V(29) && (Ov.nmo = 1);
            var jp = N.google_pubvars_reuse_experiment_result;
            null != jp && (K.pvu = jp);
            var Cj;
            a: {
                var Dj = N,
                    Pv = Dj.google_ad_client,
                    Qv = Yi(),
                    Rv = pt(Dj, Pv);
                try {
                    Cj = Wg && qt() && tm && Qv.parent == Dj && 0 != Rv;
                    break a
                } catch (ua) {}
                Cj = !1
            }
            Cj && (K.srr = 1);
            var Kg = N.location,
                Sv = N.google_ad_slot,
                Ej = K;
            if (Kg) {
                var Lg = Jk(Kg),
                    Ge;
                a: {
                    var Tv = Kk(Kg);
                    try {
                        var kp = Tv.match(/\bpfofmt=([\w]+)/);
                        Ge = kp && kp[1] || null;
                        break a
                    } catch (ua) {}
                    Ge = null
                }
                var Mg;
                a: {
                    var Uv = Kk(Kg);
                    try {
                        var lp = Uv.match(/\bpfoslot=([\d,]+)/);
                        Mg = lp && lp[1] || null;
                        break a
                    } catch (ua) {}
                    Mg = null
                }
                if (!(0 >= Lg)) {
                    var Vv = Lg == Gk.google_server_side_slot_resize || Lg == Gk.google_server_side_split_slot;
                    if (!Vv || Ge && Mg && Mg == Sv) Ej.pfo =
                        Lg, Ej.adtest = "on", Ge && (Ej.pfofmt = Ge)
                }
            }
            var Wv = Nh().V(41),
                Xv = U.Vg.o;
            if (Wv == Xv && zj) {
                var Ng;
                try {
                    var mp = zj.document.getElementsByTagName("head")[0];
                    Ng = mp ? Lt(mp) : 0
                } catch (ua) {
                    Ng = 0
                }
                0 != Ng && (K.cms = Ng)
            }
            var Yv = K,
                He;
            var np = N,
                Zv = Y(Po),
                $v = Zv.stateForType[32];
            if ($v)
                if (32 == parseInt(Yk(np), 10)) He = 1;
                else {
                    var op = parseInt(np.google_iframing, 10);
                    He = 20 == op ? 2 : 20 < op ? 3 : 0
                } else He = 0;
            0 != He && (Yv.ifsl = He);
            if (zg) try {
                var aw = zg,
                    bw = K,
                    cw, dw = Nh();
                if ((cw = "12239711" == dw.V(47)) && "html" == N.google_ad_output) {
                    var ew = Q();
                    bw.adjtnol = Pt(ew.document,
                        aw)
                }
            } catch (ua) {}
            aa.fu = $h;
            var pp;
            window.SVGElement && document.createElementNS && (lu |= 1);
            pp = lu;
            aa.bc = pp;
            var qb = aa;
            if (jb) {
                var fw = qb;
                if (jb) {
                    var qp = ih();
                    qp && (fw.debug_experiment_id = qp)
                }
                var gw = qb,
                    hw = /\b(?:crid|creatives|creative_id)=([\d,]+)/,
                    sp = Xu(hw, void 0),
                    tp = sp && sp[1];
                tp && (gw.creatives = tp);
                var iw = qb,
                    jw = /\b(?:agid|adgroups|adgroup_id)=([\d,]+)/,
                    up = Xu(jw, void 0),
                    vp = up && up[1];
                vp && (iw.adgroups = vp);
                qb.adgroups && (qb.adtest = "on", qb.disable_budget_throttling = !0, qb.use_budget_filtering = !1, qb.retrieve_only = !0,
                    qb.disable_fcap = !0)
            }
            Ib = aa;
            var wp, kw = N.google_ad_client,
                lw = N.google_ad_channel,
                xp = "/pagead/ads?";
            "ca-pub-6219811747049371" == kw && hv.test(lw) && (xp = "/pagead/lopri?");
            wp = xp;
            var Fj = Wh(me, wp),
                Gj;
            if (!(Gj = Jv())) {
                var nw = N.google_ad_client,
                    ow = N.google_ad_channel;
                Gj = "ca-pub-6219811747049371" == nw && mw.test(ow)
            }
            Gj && Uu(Ib);
            Jv() || N.google_ad_output && "html" !== N.google_ad_output || 3 != en(If) || (Lu = !0, Ku = Fj, Fj = Wh(me, "/pagead/blank.gif#?"));
            N.google_ad_url = Uf(Ib, Fj + "");
            return !0
        },
        mw = /PyvSearchDelayed/,
        Jv =
        function() {
            var a = T().V(19);
            return "33895333" == a && "html" == N.google_ad_output
        },
        Lu = !1,
        Ku = "",
        Su = function(a) {
            var b = Q(),
                c = Mi(!1, b.top);
            if (c) {
                if (-12245933 == c.width && b.google_top_values) var d = b.google_top_values,
                    c = parseInt(d[10], 10),
                    d = parseInt(d[11], 10),
                    c = 0 < c && 0 < d ? new bd(c, d) : new bd(-12245933, -12245933);
                a.biw = c.width;
                a.bih = c.height
            }
            b.top != b && (b = Mi(!1, b)) && (a.isw = b.width, a.ish = b.height)
        },
        qw = function() {
            yh() != Q() && ($h |= 4);
            mb && ($h |= 16);
            kb && ($h |= 8);
            3 == en(If) && ($h |= 32);
            var a = tf(N);
            a && !Wk(a) && ($h |= 1024)
        },
        Vu = 0,
        rw =
        function(a, b, c) {
            if (!c || c())
                if (Vu && (Vu = (new Date).getTime() - Vu), c = pw(a), a && a.id == b && Ke(a), c) {
                    a = N;
                    var d = If;
                    b = N.google_ad_url;
                    Wg || Rg(a);
                    var e = Sg(a);
                    b = Uf({
                        ifi: e
                    }, b);
                    1991 >= b.length || (1983 >= b.length ? c = "" : (c = b.lastIndexOf("&", 1983), -1 == c && (c = b.lastIndexOf("?", 1983)), c = -1 == c ? "" : b.substring(c + 1)), c = {
                        ol: b.length,
                        tr: c,
                        url: b
                    }, R("trn", c, .01), b = b.substring(0, 1983) + "&trunc=1");
                    b = b.replace(/%\w?$/, "");
                    var f = nc("script");
                    c = "google_ads_frame" + e;
                    if ("js" != a.google_ad_output && "json_html" != a.google_ad_output || !a.google_ad_request_done &&
                        !a.google_radlink_request_done) {
                        if ("html" == a.google_ad_output) {
                            var f = a,
                                h = b,
                                k = e,
                                l = 0 == Cu,
                                m = l ? h.replace(/&ea=[^&]*/, "") + "&ea=0" : h,
                                e = "google_ads_frame" + k,
                                n = {
                                    id: e,
                                    name: e
                                };
                            zm(n, f.google_ad_width, f.google_ad_height, !1, vu(m));
                            Jf(f.google_sra_onload) && (n.onload = "google_sra_onload()");
                            var q = xm(n),
                                t = f.google_async_iframe_id,
                                w = f.google_container_id,
                                x = "";
                            if (l) {
                                for (var x = 10, m = Ut, E = m.length, F = ""; 0 < x--;) F += m.charAt(Math.floor(Math.random() * E));
                                x = F;
                                h = Wt(h, x)
                            } else h = m;
                            if (Yk(f) && 16 != f.google_reactive_ad_format) {
                                var z =
                                    f,
                                    H = d,
                                    w = n,
                                    n = t;
                                w.src = vu(h);
                                w = wm(H, w);
                                H.body.appendChild(w);
                                H = Q();
                                ot(z, n, w, H)
                            } else {
                                m = f.google_ad_client;
                                E = pt(f, m);
                                if (E = qt() && Wg && !tm && 1 == E) {
                                    a: {
                                        if (E = Yi()) try {
                                            if (H = E.parent.document.getElementById("google_esf"), H.contentWindow == E) {
                                                z = H;
                                                break a
                                            }
                                        } catch (Ta) {}
                                        z = null
                                    }
                                    E = !!z && z.getAttribute("data-ad-client") == m
                                }
                                if (z = E) z = f, w = h, H = ui(w, "w"), n = ui(w, "h"), m = ui(w, "ifi"), m = "google_ads_frame" + m, m = {
                                    id: m,
                                    name: m
                                }, w = "S-2-" + w, zm(m, H, n, !1, ym(w)), z.document.write(xm(m));
                                else if (z = d, H = w, n.src = vu(h), n = xm(n), H ? H && (z = z.getElementById(H)) &&
                                    n && (z.style.visibility = "visible", z.innerHTML = n) : z.write(n), z = T().V(32), t && "4087071" == z) {
                                    if (z = Q(), t && (H = z.document.getElementById(t))) H = H.style, H.borderRadius = "2px", H.borderStyle = "solid", H.borderWidth = "1px", H.borderColor = "rgba(0,0,0,0.0)", H = new iu(H, [0, 0, 0, 0, 0], [2, 3, .4, .2, .4], 500, 250), new ku(z, H)
                                } else t && "4087072" == z && (z = Q(), t && (H = z.document.getElementById(t))) && (H = new ju(H.style, [1], [.5], 500, 300), new ku(z, H))
                            }
                            l && (f.setTimeout(uh("ac::write_ee", Du, Oh), 0), f.google_eas_queue.push(Xt(e, h, f.google_ad_width,
                                f.google_ad_height, x, Q(), t || void 0, "google_expandable_ad_slot" + k)));
                            Wg && (f = f.google_async_iframe_id, h = "javascript:" + Yb(["<!DOCTYPE html><html><body>", q, "</body></html>"].join("")), q = Q(), (new Ll(q)).set(f, h));
                            e = If.getElementById(e);
                            Lu && e && Mu(e, d);
                            d = Q();
                            I && !Md("10") || !d.getComputedStyle || e && new pu(d, e)
                        }
                    } else d.write("<" + f + ' language="JavaScript1.1" src=' + Eu(vu(b)) + "></" + f + ">");
                    (Hh = qa(Gu, c, b, a.google_ad_output, a.google_ad_width, a.google_ad_height, String(a.google_ad_unit_key || ""), String(a.google_ad_unit_key_2 ||
                        ""))) && Hh()
                }
        },
        sw = function(a) {
            var b = a,
                c = b.google_ad_width,
                d = b.google_ad_height,
                e = Q(),
                f, h = e.document;
            f = 0;
            try {
                !1 === b.google_allow_expandable_ads && (f |= 1);
                if (!h.body || b.google_ad_output && "html" != b.google_ad_output || isNaN(b.google_ad_height) || isNaN(b.google_ad_width) || h.domain != b.location.hostname || !/^http/.test(h.location.protocol)) f |= 2;
                var k;
                a: {
                    var b = h,
                        l = navigator.userAgent,
                        m = navigator.platform,
                        h = /Win|Mac|Linux|iPad|iPod|iPhone/,
                        n = /WebKit\/(\d+)/,
                        q = /rv\:(\d+\.\d+)/,
                        t = /rv\:1\.8([^.]|\.0)/,
                        w = 11,
                        x = 27,
                        E =
                        536;
                    if (h.test(m) && !/^Opera/.test(l)) {
                        var F = (n.exec(l) || [0, 0])[1],
                            z = (q.exec(l) || [0, 0])[1];
                        if (/Win/.test(m) && /Trident/.test(l) && b.documentMode >= w || !F && "Gecko" == navigator.product && z >= x && !t.test(l) || F >= E) {
                            k = !0;
                            break a
                        }
                    }
                    k = !1
                }
                k || (f |= 4)
            } catch (H) {
                f |= 8
            }
            Xl(e, e.document, c, d) && (f |= 2);
            Cu = f;
            0 != Cu && (a.google_allow_expandable_ads = !1)
        },
        Au = function() {
            sw(N);
            qw();
            N.google_loader_features_used && ($h |= N.google_loader_features_used);
            Fu();
            var a = null,
                b = "",
                a = N.google_async_iframe_id,
                c = Q();
            a ? a = c.document.getElementById(a) : (b =
                "google_temp_span", a = tw(b));
            var d = Hu();
            if (d) {
                var e = !1,
                    f = null;
                d && (f = function() {
                    return 3 != c.google_top_js_status || e
                });
                var h = uh("sa::prsc", qa(rw, a, b, f), void 0, qa(Wl, N));
                d && (Vu = (new Date).getTime(), c.google_top_js_callbacks = c.google_top_js_callbacks || [], c.google_top_js_callbacks.push(h), b = function() {
                    e = !0;
                    for (var a = 0; a < c.google_top_js_callbacks.length; a++) c.google_top_js_callbacks[a] === h && (c.google_top_js_callbacks.splice(a, 1), h())
                }, N.setTimeout(b, 150))
            } else rw(a, b, null)
        },
        Hu = function() {
            var a = Q();
            return (Wg &&
                "jp_wfpmr" == a.google_top_experiment || "jp_wnt" == a.google_top_experiment) && 3 == a.google_top_js_status
        },
        Pu = function(a) {
            O(Sl, function(b, c) {
                a[b] = N[c]
            });
            O(Rl, function(b, c) {
                a[b] = N[c]
            });
            O(Tl, function(b, c) {
                a[b] = N[c]
            });
            uw(a)
        },
        uw = function(a) {
            if (a.hints) {
                var b;
                b = Nh();
                var c = U.hd.o;
                (b = b.V(37) == c) ? (a.hints = void 0, T().Qa(U.hd.Eq)) : (a = Nh(), b = U.hd.s, (a = a.V(37) == b) && T().Qa(U.hd.Dq))
            }
        },
        Tu = function(a) {
            var b = {};
            if ("string" == typeof N.google_loeid)
                for (var c = N.google_loeid.split(","), d = 0; d < c.length; d++) b[c[d]] = !0;
            c = Rh();
            for (d =
                0; d < c.length; d++) b[c[d]] = !0;
            var e = [];
            O(b, function(a, b) {
                b && e.push(b)
            });
            wb("") && e.push("");
            a.loeid = e.join()
        },
        Xu = function(a, b) {
            try {
                var c = (b || N).top.location.hash;
                if (c) return c.match(a)
            } catch (d) {}
            return null
        };

    function zu() {
        null == window.google_ad_output && (window.google_ad_output = "html");
        window.google_ad_client = String(window.google_ad_client);
        null != window.google_ad_slot && (window.google_ad_slot = String(window.google_ad_slot));
        window.google_ad_client = dm(window.google_ad_client);
        if (null == window.google_flash_version) {
            var a = window,
                b;
            try {
                b = Og()
            } catch (c) {
                b = "0"
            }
            a.google_flash_version = b
        }
        window.google_webgl_support = !!N.WebGLRenderingContext;
        window.google_ad_section = window.google_ad_section || window.google_ad_region ||
            "";
        window.google_country = window.google_country || window.google_gl || "";
        a = (new Date).getTime();
        r(window.google_color_bg) && (window.google_color_bg = cm(window.google_color_bg, a));
        r(window.google_color_text) && (window.google_color_text = cm(window.google_color_text, a));
        r(window.google_color_link) && (window.google_color_link = cm(window.google_color_link, a));
        r(window.google_color_url) && (window.google_color_url = cm(window.google_color_url, a));
        r(window.google_color_border) && (window.google_color_border = cm(window.google_color_border,
            a));
        r(window.google_color_line) && (window.google_color_line = cm(window.google_color_line, a))
    }
    var hv = /YtLoPri/,
        Ju = function(a, b) {
            var c = b.src,
                d;
            d = "/pagead/blank.gif#?";
            var e = c.indexOf(d);
            d = -1 == e ? c : a + c.substr(e + d.length);
            d !== c && (c = b.nextSibling, e = b.parentNode, e.removeChild(b), b.src = d, e.insertBefore(b, c))
        },
        Ru = function(a, b) {
            if ("html" == N.google_ad_output) {
                var c = Q();
                if (c.google_top_values) {
                    var d;
                    a: {
                        var e = c.google_top_values;
                        d = parseInt(e[6], 10);
                        var c = parseInt(e[7], 10),
                            f = parseInt(e[8], 10),
                            e = parseInt(e[9], 10);
                        if (0 < d && 0 < c && 0 < f && 0 < e && (f = Math.abs(f - N.google_ad_width), e = Math.abs(e - N.google_ad_height), 10 >=
                                f + e)) {
                            d = new D(d, c);
                            break a
                        }
                        d = new D(-12245933, -12245933)
                    }
                    b.adx = Math.round(d.x);
                    b.ady = Math.round(d.y)
                }
                if (!b.adx || -12245933 == b.adx || !b.ady || -12245933 == b.ady) try {
                    var c = a,
                        h = N.top,
                        k = new D(0, 0),
                        l, m = Wd(c);
                    l = m ? ae(m) : window;
                    if (oc(l, "parent")) {
                        m = c;
                        do {
                            var n = l == h ? $e(m) : bf(m);
                            k.x += n.x;
                            k.y += n.y
                        } while (l && l != h && l != l.parent && (m = l.frameElement) && (l = l.parent))
                    }
                    d = k;
                    b.adx = Math.round(d.x);
                    b.ady = Math.round(d.y)
                } catch (q) {
                    b.adx = -12245933, b.ady = -12245933
                }
            }
        },
        Wu = function(a) {
            try {
                if (a.parentNode) return a.parentNode
            } catch (e) {
                return null
            }
            var b;
            if (9 === a.nodeType) a: {
                try {
                    var c = a ? ae(a) : window;
                    if (c) {
                        var d = c.frameElement;
                        if (d && L(c.parent)) {
                            b = d;
                            break a
                        }
                    }
                } catch (e) {}
                b = null
            } else b = null;
            return b
        },
        yu = function(a, b, c) {
            var d = {},
                e = {},
                f = !1,
                h = function(a, b) {
                    try {
                        return window.JSON.stringify(a) === window.JSON.stringify(b)
                    } catch (c) {
                        return !1
                    }
                };
            O(b, function(b, k) {
                h(b, a[k]) ? d[k] = b : (e[k] = [b, a[k]], f = !0);
                c && (a[k] = b)
            });
            var k = qi(a);
            O(k, function(a, c) {
                h(b[c], a) || (e[c] = [b[c], a], f = !0)
            });
            return f ? (k = {
                m: ri(d),
                mm: ri(e)
            }, R("cblob", k), !1) : !0
        },
        Ou = function() {
            var a = Dh(),
                b = N.google_ad_section;
            Yk(N) && Gh(a, 15, Fh(a, 15) + 1);
            if (Qg(N)) {
                if (3 < Gh(a, 5, Fh(a, 5) + 1)) return !1
            } else {
                var c = Gh(a, 6, Fh(a, 6) + 1),
                    a = c - Fh(a, 15),
                    c = Nh().V(44),
                    d = U.Xg.o,
                    c = c == d ? 100 : 8;
                if (a > c && "" == b) return !1
            }
            return !0
        },
        tw = function(a) {
            var b = N.google_container_id,
                c = b && N.document.getElementById(b) || N.document.getElementById(a);
            c || b || !a || (N.document.write("<span id=" + a + "></span>"), c = N.document.getElementById(a));
            return c
        },
        Nu = function(a) {
            if (!a) return !1;
            var b = Nh(),
                c = b.V(46),
                b = {};
            Ru(a, b);
            Su(b);
            if ("4087391" == c && 5E3 < b.ady) return !0;
            if ("4087392" ==
                c) {
                if (a = b.bih, 0 < a && 7 < b.ady / a) return !0
            } else if ("4087393" == c && a && a.getBoundingClientRect) return a = a.getBoundingClientRect().bottom, 0 > a;
            return !1
        },
        Uu = function(a) {
            a.unviewed_position_start = "1"
        },
        Qu = /[+, ]/;
    var vw = uh("sa::faf", Iu, Oh);
    sh("show_ads::main", th, Bu, Oh, vw);
})()
