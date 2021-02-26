function aa() { this.j = {} } var ea; ea = "undefined" !== typeof window ? window : self; function fa(b) { var a = ia; a.j[b] = a.w() } function ra(b, a) { var c = ia; return parseFloat((c.j[a] - c.j[b]).toFixed(2)) } aa.prototype.w = ea.performance && ea.performance.now ? function () { return performance.now() } : function () { return Date.now() }; var sa, ta, za, Aa, Ba, Fa, z, Ga, Ha, Ia, Ja, Ka, La, Ua, Va, Wa, Xa, Ya;
ArrayBuffer.prototype.slice || (ArrayBuffer.prototype.slice = function (b, a) { void 0 === b && (b = 0); void 0 === a && (a = this.byteLength); b = Math.floor(b); a = Math.floor(a); 0 > b && (b += this.byteLength); 0 > a && (a += this.byteLength); b = Math.min(Math.max(0, b), this.byteLength); a = Math.min(Math.max(0, a), this.byteLength); if (0 >= a - b) return new ArrayBuffer(0); var c = new ArrayBuffer(a - b), r = new Uint8Array(c); b = new Uint8Array(this, b, a - b); r.set(b); return c });
function Za(b, a) { var c = b.length; a = a || 2; Ya || (Ya = z._get_feature_points_address() >> 2); za.set(b, Ya); z._parse_points(c, a); return new Float32Array(sa.slice(Ya << 2, Ya + c << 2)) } function $a() { return z._get_block_vertex_count() } function ib() { La || (La = z._get_line_vertex_start()); return new Float32Array(sa.slice(La, z._get_line_vertex_end())) } function jb() { Ka || (Ka = z._get_line_index_start()); return new Uint16Array(sa.slice(Ka, z._get_line_index_end())) } function kb() { return z._get_line_vertex_count() }
function lb(b, a, c, r, g, p, k, q, x, h, e) { var w = 0; r && (w = r.length, Ha || (Ha = z._get_line_altitudes_address() >> 1), Ba.set(r, Ha)); q && q.length && (Ja || (Ja = z._get_line_turnings_address()), ta.set(q, Ja)); g = g || 0; h = h || 0; e = e || k.length / 2; Ga || (Ga = z._get_line_data_address() >> 1); Ba.set(b, Ga); Ia || (Ia = z._get_line_points_address() >> 2); Aa.set(k, Ia); z._append_line_data(b.length, a[0], a[1], a[2], a[3], c, w, g, p ? 1 : 0, k.length, x, h, e) } function mb() { z._reset_line() }
function nb(b) { if (sa) b && b(); else { var a = ob(); var c = new WebAssembly.Memory({ initial: 70, maximum: 70 }); WebAssembly.instantiate(a, { env: { DYNAMICTOP_PTR: 0, tempDoublePtr: 0, ABORT: 0, STACKTOP: 0, STACK_MAX: 0, gb: 0, fb: 0, memory: c }, global: { NaN: NaN, Infinity: Infinity } }).then(function (a) { sa = c.buffer; za = new Float32Array(sa); Aa = new Int32Array(sa); ta = new Int8Array(sa); Ba = new Int16Array(sa); Fa = new Uint16Array(sa); z = a.instance.exports; b && b() }) } }
function pb(b, a, c, r, g) {
  var p = { fixedLabel: [], lineLabel: [] }; if (!b) return p; var k = []; if (a && a.length) for (var q = 0; q < a.length; q++) { var x = a[q], h = x[0] / 4; H[h + 1] === qb && k.push(O(H[h] + 1, x[0], x[0] + x[1])) } a = O(0, c[0], c[0] + c[1]) || []; r = r.height; p.fixedLabel = rb(b, k, r, g, void 0); k = []; for (c = 0; c < a.length; c++) {
    var e = b, w = a[c]; q = g; x = r; h = k; var d = w[0] / 4, t = O(H[d] + 1, w[0], w[0] + w[1]), u = O(0, t[6][0], t[6][0] + t[6][1]); w = []; for (var m = 0; m < u.length; m++)w[m] = new Uint16Array(e, u[m][0], u[m][1] / 2); u = sb; var n = Math.pow(2, 18 - q.zoom), l = q.col *
      q.baseTileSize * n, f = q.row * q.baseTileSize * n, F = new Uint16Array(e, t[4][0], t[4][1] / 2), v = F.length, A = tb[d + 1], B = ub.b(Q, A, "pointText", q.useZoom, vb, !1, Y); d = tb[d + 2]; var C = wb(e, t[0][0], t[0][1], "utf-8"), y = w.length || C.split("").length; if (0 !== y) {
        var E = new Int32Array(e, t[1][0], t[1][1] / 4), G = new Int16Array(e, t[5][0], t[5][1] / 2), L = [G[0]], V = Array.prototype.slice.call(E.slice(0, 2)), J = 2; for (m = 1; J < E.length; J += 2, m++)V[J] = V[J - 2] + E[J], V[J + 1] = V[J - 1] + E[J + 1], 1 === G.length ? L[m] = G[0] : 1 < G.length && (L[m] = L[m - 1] + G[m]); var P = new Uint16Array(e,
          t[3][0], t[3][1] / 2); e = new Uint16Array(e, t[2][0], t[2][1] / 2); for (m = 0; m < v; m++)if (t = F[m], xb(t, q.useZoom)) {
            if (q.processedLabelZooms && q.processedLabelZooms.length) { E = q.processedLabelZooms; var U = !1; for (J = 0; J < E.length; J++)if (xb(t, E[J])) { U = !0; break } if (U) continue } J = P[m]; E = m * y * 2; E = V.slice(E, E + 2 * y); var ba = U = 1E3, ja = -1E3, T = -1E3, K = w.slice(0); J && K.reverse(); for (var R, S, N, M = [], D = 0; D < y; D++) {
              var I = e[y * m + D], W = E[2 * D] / 100, ca = E[2 * D + 1] / 100, Ma = 0; 0 < G.length && (Ma = L[m * y] / 100); 0 === D && (R = W, S = ca, N = { lng: l + R, lat: f + S }); W = (W - R) / n; ca =
                (ca - S) / n; var X = K[D], da = null, Na = null; if (X && 0 < X.length) { var ua = X[0]; da = X[1]; var ka = X[2] / u; X = X[3] / u; Na = [ka, X]; var la = ua / 512, ma = (x - da - X * u) / x, ab = ua = (ua + ka * u) / 512; da = (x - da) / x; da = [la, ma, ua, ma, ab, da, la, ma, ab, da, la, da]; la = W - ka / 2; ma = ca + X / 2; X = ca - X / 2; ka = W + ka / 2; la < U && (U = la); ka > ja && (ja = ka); X < ba && (ba = X); ma > T && (T = ma) } M.push({ offset: [W, ca], z: Ma, size: Na, angle: I, texcoord: da })
            } K = E[2 * (y - 1)] - E[0]; E = E[2 * (y - 1) + 1] - E[1]; 1 === J && (K = -K, E = -E); 0 === K ? E = 0 < E ? 90 : 270 : (D = Math.atan(E / K) / Math.PI * 180, 0 > K && 0 < E ? D += 180 : 0 > K && 0 > E ? D += 180 : 0 < K &&
              0 > E && (D += 360), 360 === D && (D = 0), E = D); h.push({ type: "line", rank: d, name: C, wordCount: y, pt: N, mcInTile: { x: R, y: S }, reverse: J, styleId: A, styleText: B, bds: [U, ba, ja, T], wordsInfo: M, labelAngle: E, tracer: t, processedInZoom: q.useZoom, key: "line_" + d + "_" + N.lng + "_" + N.lat })
          }
      }
  } p.lineLabel = k; p.textureHeight = r; p.tileInfo = g; return p
}
function rb(b, a, c, r, g) {
  for (var p = [], k = 0; k < a.length; k++) {
    var q = b, x = a[k], h = r, e = c, w = p, d = g; if (x && x.length) {
      d = d || vb; var t = h.useZoom; 9 === t && (t = 8); for (var u = Math.pow(2, 18 - h.zoom), m = h.col * h.baseTileSize * u, n = h.row * h.baseTileSize * u, l = 0; l < x.length; l++) {
        var f = x[l], F = f[0] / 4, v = H[F], A = H[F + 1], B = ub.b(Q, A, "point", t, d, !1, Y), C = ub.b(Q, A, "pointText", t, d, !1, Y), y = O(v + 1, f[0], f[0] + f[1]); if (!(C && 0 !== C.length || B && 0 !== B.length)) if (5 === t) {
          if (!y || !y.length) continue; for (var E = 0; E < y.length; E++) {
            var G = y[E], L = G[0] / 4, V = H[L], J = O(V + 1,
              G[0], G[0] + G[1]), P; G[1] && J[1][1] && (P = wb(q, J[1][0], J[1][1], "utf-8")); if ("\u5317\u4eac" === P) { B = ub.b(Q, A, "point", 6, d, !1, Y); C = ub.b(Q, A, "pointText", 6, d, !1, Y); break }
          }
        } else continue; if (y) {
          var U = null, ba = 1, ja = 0, T = 0; B && B[0] && (B = B[0], U = B.icon, ba = (B.zoom || 100) / 100); for (E = 0; E < y.length; E++)if (G = y[E], L = G[0] / 4, V = H[L], J = O(V + 1, G[0], G[0] + G[1]), G[1]) {
            var K = H[L + 1]; if (xb(K, h.useZoom)) {
              if (h.processedLabelZooms && h.processedLabelZooms.length && !Y) {
                for (var R = h.processedLabelZooms, S = !1, N = 0; N < R.length; N++)if (xb(K, R[N])) {
                  S = !0;
                  break
                } if (S) continue
              } var M = O(0, J[2][0], J[2][0] + J[2][1]), D = []; for (N = 0; N < M.length; N++)D[N] = new Uint16Array(q, M[N][0], M[N][1]); var I = void 0; J[1][1] && (I = wb(q, J[1][0], J[1][1], "utf-8")); var W = I || ""; if (!(C && 0 < C.length && 0 === D.length && "" === W)) {
                var ca = H[L + 2], Ma = H[L + 3], X = H[L + 4], da = { lng: m + Math.round(ca / 100), lat: n + Math.round(Ma / 100) }, Na = void 0; J[0][1] && (Na = wb(q, J[0][0], J[0][1], void 0)); var ua = H[L + 5], ka = 0 < D.length || "" !== W && 0 < C.length, la = yb(U), ma = !(4 !== ua || !ka || !la), ab = !!W.match(/[qypjg]/g), zc = Na || "", Ac = da, Bc = W,
                  Cc = ab, Dc = X, Ec = A, Fc = C, Gc = U, Hc = ma, Ic = ua, Jc = x.R; a: { var va = void 0, bb = K, bc = h.useZoom; zb[bb] || (va = bb.toString(2), 8 > va.length && (va = Array(8 - va.length + 1).join("0") + va), zb[bb] = va); va = zb[bb]; for (var cc = Ob[bc].start, Kc = Ob[bc].end - cc + 1, cb = 0; cb < Kc; cb++)if ("1" === va[cb]) { var dc = cb + cc; break a } dc = 99 } var Z = {
                    type: "fixed", guid: zc, pt: Ac, name: Bc, containDescendings: Cc, rank: Dc, iconPos: null, textPos: null, styleId: Ec, styleText: Fc, icon: Gc, textOnIcon: Hc, direction: Ic, onDefaultFloor: Jc, startZoom: dc || 99, tilePosStr: ca + "," + Ma, tracer: K,
                    processedInZoom: h.useZoom, key: "fixed_" + X + "_" + da.lng + "_" + da.lat
                  }; if (null === U || ma) null !== U && (Z.iconSize = la); else { var Ab = yb(U); if (Ab) { var Bb = Ab[0] / 2 * ba, Cb = Ab[1] / 2 * ba, db = Math.round(-Bb / 2), eb = Math.round(-Cb / 2), Db = db + Bb, Eb = eb + Cb; var ec = { vertex: [db, eb, Db, eb, Db, Eb, db, eb, Db, Eb, db, Eb], texcoord: null, width: Bb, height: Cb, iconType: U } } else ec = null; Z.iconPos = ec; Z.iconPos && (ja = Z.iconPos.width, T = Z.iconPos.height) } if (D.length) {
                    var Lc = Z, fb = ua, Fb = D, Gb = ja, fc = T, gb = e, Oa = sb; "number" !== typeof fb && (fb = 0); for (var Ca = Fb.length,
                      gc = [], hc = [], Da = 0, Pa = 0, ha = 0; ha < Ca; ha++)Pa += Math.round(Fb[ha][3] / Oa); for (ha = 0; ha < Ca; ha++) {
                        var hb = Fb[ha], ic = hb[0], jc = hb[1], Ea = Math.round(hb[2] / Oa), xa = Math.round(hb[3] / Oa); 0 === Gb && (fb = 4); switch (fb) {
                          case 3: var na = Pa / 2 - xa + 2 * (Ca - 1) / 2; var wa = Math.round(-Gb / 2 - Ea - 2); var ya = Math.round(na - Da - 2 * ha); break; case 1: na = Pa / 2 - xa + 2 * (Ca - 1) / 2; wa = Math.round(Gb / 2 + 2); ya = Math.round(na - Da - 2 * ha); break; case 2: na = fc / 2 + Pa - xa + 2 * Ca; wa = Math.round(-Ea / 2); ya = Math.round(na - Da - 2 * ha); break; case 0: na = -fc / 2 - 2 - xa; wa = Math.round(-Ea / 2); ya = Math.round(na -
                            Da - 2 * ha); break; case 4: na = -Pa / 2 - 2 * (Ca - 1) / 2, wa = Math.round(-Ea / 2), ya = Math.round(na - Da - 2 * ha)
                        }Da += xa; var kc = wa + Math.round(Ea), lc = ya, mc = kc, Hb = lc + Math.round(xa), Ib = ic / 512, Jb = (gb - jc - xa * Oa) / gb, nc = (ic + Ea * Oa) / 512, Mc = Jb, oc = nc, Kb = (gb - jc) / gb, Nc = Ib, Oc = Kb; gc.push(wa, ya, kc, lc, mc, Hb, wa, ya, mc, Hb, wa, Hb); hc.push(Ib, Jb, nc, Mc, oc, Kb, Ib, Jb, oc, Kb, Nc, Oc)
                      } Lc.textPos = { vertex: gc, texcoord: hc }
                  } if (Z.textPos || Z.iconPos) {
                    var Qa = 1E3, Ra = 1E3, Sa = -1E3, Ta = -1E3; if (Z.iconPos) for (var Lb = Z.iconPos.vertex, oa = 0, Mb = Lb.length; oa < Mb; oa += 2) {
                      var pa =
                        Lb[oa], qa = Lb[oa + 1]; pa < Qa && (Qa = pa); pa > Sa && (Sa = pa); qa < Ra && (Ra = qa); qa > Ta && (Ta = qa)
                    } if (Z.textPos) { var Nb = Z.textPos.vertex; oa = 0; for (Mb = Nb.length; oa < Mb; oa += 2)pa = Nb[oa], qa = Nb[oa + 1], pa < Qa && (Qa = pa), pa > Sa && (Sa = pa), qa < Ra && (Ra = qa), qa > Ta && (Ta = qa) } Z.bds = [Qa, Ra, Sa, Ta]
                  } (la || ka) && w.push(Z)
              }
            }
          }
        }
      }
    }
  } return p
} function yb(b) { if (!b || "disekong" === b) return null; var a = Pb[b] || Pb["MapRes/" + b]; !a && b && 48 <= b.charCodeAt(0) && 57 >= b.charCodeAt(0) && (a = Pb["_" + b]); return a } var Qb;
Qb = function (b, a, c, r) {
  var g, p; a = O(0, a[0], a[0] + a[1]); if (!a.length) return {}; for (var k = {}, q = [], x = [], h = [], e = [], w = 0; w < a.length; w++) {
    var d = O(0, a[w][0], a[w][0] + a[w][1]), t = d[0]; t = O(0, t[0], t[0] + t[1]); d = d[1]; var u = O(H[d[0] >> 2] + 1, d[0], d[0] + d[1]); a: {
      var m = b; if ((g = O(0, u[2][0], u[2][0] + u[2][1])) && g[0]) {
        for (var n = 0; n < g.length; n++) { var l = g[n], f = l[0] >> 2; f = H[f]; l = O(f + 1, l[0], l[0] + l[1]); if (!l[0][1]) { m = []; g = [0, 0]; var F = p = void 0; break a } } p = []; var v = [0, 0], A = [2.003772637E7, 1.102819087E7]; d = [-2.003772637E7, -1.060158079E7];
        F = 0; n = c.mercatorSize; var B = c.col * n, C = c.row * n; for (n = 0; n < g.length; n++) {
          l = g[n]; f = l[0] >> 2; f = H[f]; l = O(f + 1, l[0], l[0] + l[1]); l = new Int32Array(m, l[0][0], l[0][1] >> 2); f = [B + l[0] / 100, C + l[1] / 100]; v[0] += f[0]; v[1] += f[1]; f[0] < A[0] && (A[0] = f[0]); f[1] < A[1] && (A[1] = f[1]); f[0] > d[0] && (d[0] = f[0]); f[1] > d[1] && (d[1] = f[1]); for (var y = 2; y < l.length; y += 2)f[y] = f[y - 2] + l[y] / 100, f[y + 1] = f[y - 1] + l[y + 1] / 100, v[0] += f[y], v[1] += f[y + 1], f[y] < A[0] && (A[0] = f[y]), f[y + 1] < A[1] && (A[1] = f[y + 1]), f[y] > d[0] && (d[0] = f[y]), f[y + 1] > d[1] && (d[1] = f[y + 1]); F += l.length;
          p.push(f)
        } v[0] /= F / 2; v[1] /= F / 2; m = p; g = v; p = A; F = d
      } else m = [], g = [0, 0], F = p = void 0
    } A = O(0, u[3][0], u[3][0] + u[3][1]); d = []; for (v = 0; v < A.length; v++)d[v] = String.fromCharCode.apply(String, new Uint8Array(b, A[v][0], A[v][1])); B = String.fromCharCode.apply(String, new Uint8Array(b, u[1][0], u[1][1])); A = void 0; u = String.fromCharCode.apply(String, new Uint8Array(b, u[0][0], u[0][1])); for (v = 0; v < d.length; v++)if (d[v] === B) { A = v; break } m = { defaultFloor: A, currentFloor: A, uid: u, floors: [], contour: m, boundsMin: p, boundsMax: F, center: g, floorLength: d.length };
    for (v = 0; v < d.length; v++) {
      p = d[v]; a: { g = b; F = t; B = p; for (n = 0; n < F.length; n++)if (C = O(H[F[n][0] >> 2] + 1, F[n][0], F[n][0] + F[n][1]), String.fromCharCode.apply(String, new Uint8Array(g, C[0][0], C[0][1])) === B) { B = C[1]; break a } B = null } g = b; C = u; l = p; p = c; var E = r; F = v === A ? !0 : !1; if (B) if (B = O(0, B[0], B[0] + B[1]), B.length) {
        n = { base: [], contour: [] }; for (var G = 0; G < B.length; G++) { f = B[G]; y = f[0] >> 2; var L = H[y + 1]; 7 === L && (E = Rb(g, f, p, n.contour, E, 1, { v: !0, M: !0 })) } for (G = 0; G < n.contour.length; G++)n.contour[G].uid = C; for (G = 0; G < B.length; G++)f = B[G], y = f[0] >>
          2, L = H[y + 1], 7 === L && (E = Rb(g, f, p, n.base, E, 2, { v: !0 })); for (G = 0; G < n.base.length; G++)n.base[G].uid = C; (f = Sb(g, B, p, !0)) && 0 !== f.vertex.length && (n.area3D = f, n.area3D.uid = C, n.area3D.border && (n.indoorBorder3D = n.area3D.border, n.indoorBorder3D.uid = C, delete n.area3D.border)); n.floorName = l; C = []; for (l = 0; l < B.length; l++)f = B[l], y = f[0] >> 2, L = H[y + 1], L === qb && (f = O(H[y] + 1, f[0], f[0] + f[1]), f.R = F, C.push(f)); n.pois = rb(g, C, F ? H[2] : H[3], p, Tb); g = n
      } else g = { floorName: l }; else g = { floorName: l }; m.floors[v] = g
    } k[u] = m; if (m.floors[A]) {
      if (m.floors[A].base) for (v =
        0; v < m.floors[A].base.length; v++)q.push(m.floors[A].base[v]); if (m.floors[A].contour) for (v = 0; v < m.floors[A].contour.length; v++)x.push(m.floors[A].contour[v]); m.floors[A].indoorBorder3D && h.push(m.floors[A].indoorBorder3D); m.floors[A].area3D && e.push(m.floors[A].area3D)
    } k.tileInfo = c
  } 0 === q.length && (q = null); 0 === x.length && (x = null); 0 === h.length && (h = null); 0 === e.length && (e = null); return { indoorDataResult: k, indoorBase: q, indoorBaseContour: x, indoorArea3D: e, indoorBorder3D: h }
};
var ub = function () {
  function b(b, r, c, g, h) {
    if (g = g || null) { h = g[2]; switch (r) { case "point": h = h[0]; break; case "pointText": h = h[1]; break; case "line": h = h[3]; break; case "polygon": h = h[4]; break; case "polygon3d": h = h[5] }var e = c - 1; "line" === r && 12 === c && (e = c); e = g[1][e][0]; e = e[b]; e || "point" !== r && "pointText" !== r || (e = g[1][c][0], e = e[b]); c = { l: e, style: h, s: [] } } else if (h) {
      g = h.baseFs; h = h.zoomStyleBody[c] || []; e = g[2]; switch (r) {
        case "point": e = e[0]; h = h[0] || {}; break; case "pointText": e = e[1]; h = h[1] || {}; break; case "line": e = e[3]; h = h[3] ||
          {}; break; case "polygon": e = e[4]; h = h[4] || {}; break; case "polygon3d": e = e[5], h = h[5] || {}
      }c = { l: g[1][c - 1][0][b], style: e, s: h }
    } else c = { l: null, style: [], s: [] }; h = c; c = h.l; g = h.style; h = h.s; e = []; if (!c) return e; for (var p = 0; p < c.length; p++) {
      var d = h[c[p]] || g[c[p]]; if (d) {
        switch (r) {
          case "polygon": d = { g: b, f: a(d[0]), c: a(d[1]), borderWidth: d[2], B: d[3], C: d[4], na: d[5], Y: d[6], ka: d[7], la: a(d[8]) }; break; case "line": d = {
            g: b, c: a(d[0]), f: a(d[1]), borderWidth: d[2], o: d[3], V: d[4], G: d[5], aa: d[6], ba: d[7], ca: d[8], ea: d[9], fa: d[10], B: d[11], i: d[12],
            C: d[13], X: d[14], da: d[15], Z: d[16], ga: d[17], ja: d[18]
          }; break; case "pointText": d = d && 0 !== d.length ? { sid: b, fontRgba: a(d[0]), haloRgba: a(d[1]), backRgba: a(d[2]), fontSize: d[3], haloSize: d[4], fontWeight: d[5], fontStyle: d[6], density: d[7] } : null; break; case "point": d = { sid: b, rank: d[0], ma: d[1], icon: d[2], iconType: d[3], ha: d[4], density: d[5], zoom: d[6] }; break; case "polygon3d": d = { g: b, filter: d[0], ratio: d[1], $: d[2], borderWidth: d[3], c: a(d[4]), H: a(d[5]), m: a(d[6]), ia: d[7] }
        }d && (d.W = c[p], e[e.length] = d)
      }
    } return e
  } function a(a) {
    var b =
      a; if (g[b]) return g[b]; a >>>= 0; g[b] = [a & 255, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255]; return g[b]
  } var c = {}, r = {}, g = {}; return { b: function (a, g, q, x, h, e, w) { a = (a || "default") + "-" + g + "-" + q + "-" + x; e && (a += "-indoor"); if (h) return r[a] || (r[a] = b(g, q, x, h)), r[a]; c[a] || (c[a] = b(g, q, x, h, w)); return c[a] } }
}(); function Ub(b, a) { if (b.fill) b.fill(a); else for (var c = 0; c < b.length; c++)b[c] = a }
Uint8Array.prototype.slice || (Object.defineProperty(Uint8Array.prototype, "slice", { value: Array.prototype.slice }), Object.defineProperty(Uint16Array.prototype, "slice", { value: Array.prototype.slice }), Object.defineProperty(Uint32Array.prototype, "slice", { value: Array.prototype.slice }), Object.defineProperty(Int8Array.prototype, "slice", { value: Array.prototype.slice }), Object.defineProperty(Int16Array.prototype, "slice", { value: Array.prototype.slice }), Object.defineProperty(Int32Array.prototype, "slice", { value: Array.prototype.slice }),
  Object.defineProperty(Float32Array.prototype, "slice", { value: Array.prototype.slice })); var tb, H, Vb;
function wb(b, a, c, r) {
  b = new Uint8Array(b, a, c); if (self.TextDecoder) return Vb || (Vb = new TextDecoder("utf-8")), Vb.decode(b).replace(/\\\\/g, "\\"); if ("utf-8" === r) for (r = "", a = 0; a < b.length; a++)c = b[a], 128 > c ? r += String.fromCharCode(c) : 191 < c && 224 > c ? (r += String.fromCharCode((c & 31) << 6 | b[a + 1] & 63), a += 1) : 223 < c && 240 > c ? (r += String.fromCharCode((c & 15) << 12 | (b[a + 1] & 63) << 6 | b[a + 2] & 63), a += 2) : (c = ((c & 7) << 18 | (b[a + 1] & 63) << 12 | (b[a + 2] & 63) << 6 | b[a + 3] & 63) - 65536, r += String.fromCharCode(c >> 10 | 55296, c & 1023 | 56320), a += 3); else {
    if (4096 >= c) return String.fromCharCode.apply(String,
      b); r = ""; var g = Math.ceil(c / 4096); for (a = 0; a < g; a++)r += String.fromCharCode.apply(String, b.slice(4096 * a, a === g - 1 ? c : 4096 * (a + 1)))
  } return r.replace(/\\\\/g, "\\")
} function O(b, a, c) { var r = a >> 2, g = H[r + b]; a = 4 * (g + b + 1) + a; var p = []; if (a > c) return p; for (c = 0; c < g; c++) { var k = H[r + b + 1 + c], q = a + k; p[c] = [a, k]; 0 !== q % 4 ? a = q + 4 - q % 4 : a = q } return p }
var qb = 3, Wb = 1E-5, Xb = 1, vb = null, Tb = null, Pb = null, Q = "", Y = null, ia = new aa, Yb = 20, Zb = 65536, $b = [245, 245, 245, 255], ac = 1, pc = null, qc = null, Ob = {
  3: { start: 3, end: 3, a: 3 }, 4: { start: 4, end: 5, a: 5 }, 5: { start: 4, end: 5, a: 5 }, 6: { start: 6, end: 7, a: 7 }, 7: { start: 6, end: 7, a: 7 }, 8: { start: 8, end: 9, a: 9 }, 9: { start: 8, end: 9, a: 9 }, 10: { start: 10, end: 10, a: 10 }, 11: { start: 11, end: 13, a: 12 }, 12: { start: 11, end: 13, a: 12 }, 13: { start: 11, end: 13, a: 12 }, 14: { start: 14, end: 15, a: 15 }, 15: { start: 14, end: 15, a: 15 }, 16: { start: 16, end: 17, a: 17 }, 17: { start: 16, end: 17, a: 17 }, 18: {
    start: 18,
    end: 25, a: 19
  }, 19: { start: 18, end: 25, a: 19 }, 20: { start: 18, end: 25, a: 19 }, 21: { start: 18, end: 25, a: 19 }, 22: { start: 18, end: 25, a: 19 }, 23: { start: 18, end: 25, a: 19 }, 24: { start: 18, end: 25, a: 19 }, 25: { start: 18, end: 25, a: 19 }
}, sb, rc, sc = !1, tc = [], uc = !1;
function ob() {
  for (var b = atob("AGFzbQEAAAABNAdgAX8Bf2AAAX9gAX8AYAJ/fwBgAABgDX9/f39/fH9/f39/f38AYAt/f3x/f39/f39/fwACngEKA2Vudg5EWU5BTUlDVE9QX1BUUgN/AANlbnYNdGVtcERvdWJsZVB0cgN/AANlbnYFQUJPUlQDfwADZW52CFNUQUNLVE9QA38AA2VudglTVEFDS19NQVgDfwADZW52AmdiA38AA2VudgJmYgN/AAZnbG9iYWwDTmFOA3wABmdsb2JhbAhJbmZpbml0eQN8AANlbnYGbWVtb3J5AgFGRgMeHQABAgMDAQEBAQEBAQEBBAEBBAEBAQEBAQMFAwYEBnMUfwEjAAt/ASMBC38BIwILfwEjAwt/ASMEC38BIwULfwEjBgt/AUEAC38BQQALfwFBAAt/AUEAC3wBIwcLfAEjCAt/AUEAC38BQQALfwFBAAt/AUEAC3wBRAAAAAAAAAAAC38BQQALfAFEAAAAAAAAAAALB/AEHAtfcmVzZXRfbGluZQAOFl9nZXRfYmxvY2tfaW5kZXhfc3RhcnQAEghzZXRUaHJldwAEGl9nZXRfbGluZV90dXJuaW5nc19hZGRyZXNzAAgjX2dldF9ibG9ja190cmlhbmdsZV9pbmRpY2VzX2FkZHJlc3MAEBZfZ2V0X2xpbmVfdmVydGV4X2NvdW50AA0Kc3RhY2tBbGxvYwAAF19nZXRfYmxvY2tfdmVydGV4X2NvdW50ABYXX2dldF9ibG9ja192ZXJ0ZXhfc3RhcnQAFBRfZ2V0X2xpbmVfdmVydGV4X2VuZAAMG19nZXRfZmVhdHVyZV9wb2ludHNfYWRkcmVzcwAXDHN0YWNrUmVzdG9yZQACFF9nZXRfYmxvY2tfaW5kZXhfZW5kABMbX2dldF9saW5lX2FsdGl0dWRlc19hZGRyZXNzAAYVX2dldF9ibG9ja192ZXJ0ZXhfZW5kABUJc3RhY2tTYXZlAAELcnVuUG9zdFNldHMAHBZfZ2V0X2xpbmVfdmVydGV4X3N0YXJ0AAsNX3BhcnNlX3BvaW50cwAYGF9nZXRfbGluZV9wb2ludHNfYWRkcmVzcwAHE2VzdGFibGlzaFN0YWNrU3BhY2UAAxNfZ2V0X2xpbmVfaW5kZXhfZW5kAAoRX2FwcGVuZF9saW5lX2RhdGEAGRVfZ2V0X2xpbmVfaW5kZXhfc3RhcnQACRJfYXBwZW5kX2Jsb2NrX2RhdGEAGxlfZ2V0X2Jsb2NrX3BvaW50c19hZGRyZXNzAA8MX3Jlc2V0X2Jsb2NrABEWX2dldF9saW5lX2RhdGFfYWRkcmVzcwAFCrUmHRwBAX8jDCEBIwwgAGokDCMMQQ9qQXBxJAwgAQ8LBQAjDA8LBgAgACQMCwoAIAAkDCABJA0LEwAjEEUEQAJAIAAkECABJBELCwsLACMOQZDA8wBqDwsLACMOQZDA+QBqDwsIACMOQQBqDwsLACMOQZCAiwJqDwsLACMOQZCA+gBqDwsZACMOQZCA+gBqIw5BgIACaigCAEEBdGoPCwsAIw5BkICaAWoPCxkAIw5BkICaAWojDkGEgAJqKAIAQRRsag8LDQAjDkGEgAJqKAIADwsbACMOQYCAAmpBADYCACMOQYSAAmpBADYCAA8LCgAjDkGIgAJqDwsLACMOQZCA6gFqDwsbACMOQYjAAmpBADYCACMOQYzAAmpBADYCAA8LCwAjDkGQwOoBag8LGQAjDkGQwOoBaiMOQYjAAmooAgBBAXRqDwsKACMOQZDAAmoPCxgAIw5BkMACaiMOQYzAAmooAgBBHGxqDwsNACMOQYzAAmooAgAPCwsAIw5BkMDyAGoPC9UBAQR/IAFBAEohAyADBEACQEEAIQIDQAJAIw5BkMDyAGogAkECdGohBCAEIAQqAgC7RAAAAAAAAFlAo7Y4AgAgAkEBaiECIAIgAUcNAQsLCwsgASAATiADQQFzcgRADwUgASECCwNAAkBBACEDA0ACQCADIAJqIQUjDkGQwPIAaiAFQQJ0aiEEIAQjDkGQwPIAaiAFIAFrQQJ0aioCALsgBCoCALtEAAAAAAAAWUCjoLY4AgAgA0EBaiEDIAMgAUcNAQsLIAIgAWohAiACIABIDQELCw8L+woCD38CfCAAQQJtIRogCkEYdEEYdUEBRiEbIBsEQAJAIw5BkMCKAmpBADsBACAJQQJKBEACQEEAIQ1BAiEOA0ACQCMOQQBqIA5BAnRqKAIAtyEdIw5BAGogDkEBckECdGooAgC3IRwgHSAdoiAcIByioJ9EAAAAAAAAJECjqkEQdEEQdSANQRB0QRB1aiENIw5BkMCKAmogDkECbUEBdGogDTsBACAOQQJqIQ4gDiAJSA0BCwtBBCENCwsLBUEEIQ0LIA1BBEYEfyAJQQJKBUEACwRAAkBBAiENIw5BAGooAgAhDgNAAkAjDkEAaiANQQJ0aiEYIBgoAgAgDmohDiAYIA42AgAgDUEBciEYIw5BAGogGEECdGohGSAZIBkoAgAjDkEAaiAYQX5qQQJ0aigCAGo2AgAgDUECaiENIA0gCUgNAQsLCwsgCEEYdEEYdQRAAkAjDkGQwPMAaiMOQZDA8wBqQQhqLgEAOwEAIw5BkMDzAGpBAmojDkGQwPMAakEKai4BADsBACMOQZDA8wBqQQRqIw5BkMDzAGpBDGouAQA7AQAjDkGQwPMAakEGaiMOQZDA8wBqQQ5qLgEAOwEAIBpBAXQhGSMOQZDA8wBqIBlBfmpBAXRqIw5BkMDzAGogGUF6akEBdGouAQA7AQAjDkGQwPMAaiAZQX9qQQF0aiMOQZDA8wBqIBlBe2pBAXRqLgEAOwEAIw5BkMDzAGogGUF8akEBdGojDkGQwPMAaiAZQXhqQQF0ai4BADsBACMOQZDA8wBqIBlBfWpBAXRqIw5BkMDzAGogGUF5akEBdGouAQA7AQALCyAMIAtrIRgjDkGEgAJqKAIAIRkgAEEBTARAAkAgGCAZEBoPCwsgBkEARiEWIBpBfmohFyAKQRh0QRh1QQJGIRIgGkF/aiETIBpBfGohFCALQQFqIRUgDEF/aiERQQAhD0EAIQ0gGSEQA0ACQCAPQQROBEAgFCAPSgRAIBUgD0F8akEFbWohCQUgESEJCwUgCyEJCyAWRQRAIw5BkMD5AGogCUEBdGouAQAhDQsgCUEBdCEAIw5BAGogAEECdGooAgBBCm1B//8DcSEMIw5BAGogAEEBckECdGooAgBBCm1B//8DcSEAIA9BAXQhCiMOQZDA8wBqIApBAXRqLgEAtyAFokQAAAAAAAAkQKOqIQYjDkGQwPMAaiAKQQFyQQF0ai4BALcgBaJEAAAAAAAAJECjqiEKAkAgD0EARiAPIBdGckUEQCAPQQFGIA8gE0ZyBEBBfyEIBQJAIA9BfmohDgJAAkACQAJAIA5BBW9BAnJBAmsOAgABAgsCQEEBIQgMBwsLAkBBfyEIDAYLCwJAIA5BBW0jDkGQgIsCamosAAAhCAwFCwsLCwVBASEICwsgGwRAIw5BkMCKAmogCUEBdGouAQAhDgUgEgR/IAlBAEYEf0EABUEKCwVBAAshDgsgECEJIBBBAWohECMOQZCAmgFqIAlBFGxqIAw7AQAjDkGQgJoBaiAJQRRsakECaiAAOwEAIw5BkICaAWogCUEUbGpBBGogBjsBACMOQZCAmgFqIAlBFGxqQQZqIAo7AQAjDkGQgJoBaiAJQRRsakEIaiABOgAAIw5BkICaAWogCUEUbGpBCWogAjoAACMOQZCAmgFqIAlBFGxqQQpqIAM6AAAjDkGQgJoBaiAJQRRsakELaiAEOgAAIw5BkICaAWogCUEUbGpBDGogCDsBACMOQZCAmgFqIAlBFGxqQQ5qIA07AQAjDkGQgJoBaiAJQRRsakEQaiAHOwEAIw5BkICaAWogCUEUbGpBEmogDjsBACAPQQFqIQ8gDyAaSA0BCwsjDkGEgAJqIBA2AgAgGCAZEBoPC9YGAQx/IABBf2ohCSAAQX5qIQhBACEHQQEhAkEBIQMjDkGAgAJqKAIAIQYDQAJAIAJBAWohACAAIAFqIQsgAEEBcUEARiEAIANBGHRBGHVBAEchBSALQX5qIQwgAiABaiEKIAUEfyAMBSAKCyEEIAUEfyAKBSAMCyEMIw5BkID6AGogBkEBdGogAAR/IAQFIAwLOwEAIw5BkID6AGogBkEBakEBdGogAAR/IAwFIAQLOwEAIw5BkID6AGogBkECakEBdGogCzsBACACQQJqIQsgCyABaiEEIAtBAXFBAEYhCyAEQX9qIQwgBQR/IAoFIAwLIQAgBQR/IAwFIAoLIQojDkGQgPoAaiAGQQNqQQF0aiALBH8gAAUgCgs7AQAjDkGQgPoAaiAGQQRqQQF0aiALBH8gCgUgAAs7AQAgBkEGaiEAIw5BkID6AGogBkEFakEBdGogBDsBACAHIAlOBEAMAQsgAkEDaiELIAsgAWohBCALQQFxQQBGIQsgBEF+aiEKIARBf2ohDSAFBH8gCgUgDQshDCAFBH8gDQUgCgshCiMOQZCA+gBqIABBAXRqIAsEfyAMBSAKCzsBACMOQZCA+gBqIAZBB2pBAXRqIAsEfyAKBSAMCzsBACMOQZCA+gBqIAZBCGpBAXRqIAQ7AQAgAkEEaiEEIAQgAWohDCAEQQFxQQBGIQogDEF+aiELIAxBf2ohDSAFBH8gCwUgDQshACAFBH8gDQUgCwshCyMOQZCA+gBqIAZBCWpBAXRqIAoEfyAABSALCzsBACMOQZCA+gBqIAZBCmpBAXRqIAoEfyALBSAACzsBACAGQQxqIQAjDkGQgPoAaiAGQQtqQQF0aiAMOwEAIAcgCEYEQCAEIQIFAkAgAkEFaiECIAIgAWohDSACQQFxQQBGIQogDUF+aiELIA1Bf2ohBCAFBH8gCwUgBAshDCAFBH8gBAUgCwshCyMOQZCA+gBqIABBAXRqIAoEfyAMBSALCzsBACMOQZCA+gBqIAZBDWpBAXRqIAoEfyALBSAMCzsBACMOQZCA+gBqIAZBDmpBAXRqIA07AQAgA0EYdEEYdUEARkEBcSEDIAZBD2ohAAsLIAdBAWohByAAIQYMAQsLIw5BgIACaiAANgIADwv/DwIFfwp8IABBAkoEQAJAQQIhCyMOQYiAAmooAgAhDANAAkAjDkGIgAJqIAtBAnRqIQ4gDigCACAMaiEMIA4gDDYCACALQQFyIQ4jDkGIgAJqIA5BAnRqIQ8gDyAPKAIAIw5BiIACaiAOQX5qQQJ0aigCAGo2AgAgC0ECaiELIAsgAEgNAQsLCwsjDkGMwAJqKAIAIQ4gAEEASiEPIA8EQAJAIA4gAEF/akEBdmohDEEAIQsgDiENA0ACQCMOQYiAAmogC0EBckECdGooAgC3RAAAAAAAAFlAoyEQIw5BkMACaiANQRxsaiMOQYiAAmogC0ECdGooAgC3RAAAAAAAAFlAo7Y4AgAjDkGQwAJqIA1BHGxqQQRqIBC2OAIAIw5BkMACaiANQRxsakEIaiACtjgCACMOQZDAAmogDUEcbGpBDGpEAAAAAAAAAAC2OAIAIw5BkMACaiANQRxsakEQakQAAAAAAAAAALY4AgAjDkGQwAJqIA1BHGxqQRRqRAAAAAAAAPA/tjgCACMOQZDAAmogDUEcbGpBGGogAzoAACMOQZDAAmogDUEcbGpBGWogBDoAACMOQZDAAmogDUEcbGpBGmogBToAACMOQZDAAmogDUEcbGpBG2ogBjoAACALQQJqIQsgCyAATgRADAEFIA1BAWohDQsMAQsLIAxBAWohCyMOQYzAAmogCzYCAAsFIA4hCwsgAUEASgRAAkAjDkGIwAJqKAIAIQNBACEMIAMhDQNAAkAjDkGQwOoBaiANQQF0aiMOQZCA6gFqIAxBAXRqLwEAIA5qOwEAIAxBAWohDCAMIAFGBEAMAQUgDUEBaiENCwwBCwsjDkGIwAJqIAMgAWo2AgALCyAPRQRADwsgAEF+aiEDIw5BiMACaigCACENIABBf2pBAXYhBSALIAVBAnRqIQQgDSAFQQZsaiEFQQAhDANAAkAjDkGIgAJqIAxBAnRqKAIAt0QAAAAAAABZQKMhFiMOQYiAAmogDEEBckECdGooAgC3RAAAAAAAAFlAoyEVIAwhASAMQQJqIQwgASADRiEGIw5BiIACaiAGBH9BAAUgDAtBAnRqKAIAt0QAAAAAAABZQKMhFCMOQYiAAmogBgR/QQEFIAFBA2oLQQJ0aigCALdEAAAAAAAAWUCjIRMgFCAWoSEYIBMgFaEhECAWIBahIRcgFSAVoSEZIBAgAqIgGUQAAAAAAAAAAKKhIRIgF0QAAAAAAAAAAKIgGCACoqEhESAZIBiiIBcgEKKhIRAgC0EBaiEBIw5BkMACaiALQRxsaiAWtjgCACMOQZDAAmogC0EcbGpBBGogFbY4AgAjDkGQwAJqIAtBHGxqQQhqRAAAAAAAAAAAtjgCACMOQZDAAmogC0EcbGpBDGogErY4AgAjDkGQwAJqIAtBHGxqQRBqIBG2OAIAIw5BkMACaiALQRxsakEUaiAQtjgCACMOQZDAAmogC0EcbGpBGGogBzoAACMOQZDAAmogC0EcbGpBGWogCDoAACMOQZDAAmogC0EcbGpBGmogCToAACMOQZDAAmogC0EcbGpBG2ogCjoAACALQQJqIQYjDkGQwAJqIAFBHGxqIBa2OAIAIw5BkMACaiABQRxsakEEaiAVtjgCACMOQZDAAmogAUEcbGpBCGogArY4AgAjDkGQwAJqIAFBHGxqQQxqIBK2OAIAIw5BkMACaiABQRxsakEQaiARtjgCACMOQZDAAmogAUEcbGpBFGogELY4AgAjDkGQwAJqIAFBHGxqQRhqIAc6AAAjDkGQwAJqIAFBHGxqQRlqIAg6AAAjDkGQwAJqIAFBHGxqQRpqIAk6AAAjDkGQwAJqIAFBHGxqQRtqIAo6AAAgC0EDaiEPIw5BkMACaiAGQRxsaiAUtjgCACMOQZDAAmogBkEcbGpBBGogE7Y4AgAjDkGQwAJqIAZBHGxqQQhqRAAAAAAAAAAAtjgCACMOQZDAAmogBkEcbGpBDGogErY4AgAjDkGQwAJqIAZBHGxqQRBqIBG2OAIAIw5BkMACaiAGQRxsakEUaiAQtjgCACMOQZDAAmogBkEcbGpBGGogBzoAACMOQZDAAmogBkEcbGpBGWogCDoAACMOQZDAAmogBkEcbGpBGmogCToAACMOQZDAAmogBkEcbGpBG2ogCjoAACMOQZDAAmogD0EcbGogFLY4AgAjDkGQwAJqIA9BHGxqQQRqIBO2OAIAIw5BkMACaiAPQRxsakEIaiACtjgCACMOQZDAAmogD0EcbGpBDGogErY4AgAjDkGQwAJqIA9BHGxqQRBqIBG2OAIAIw5BkMACaiAPQRxsakEUaiAQtjgCACMOQZDAAmogD0EcbGpBGGogBzoAACMOQZDAAmogD0EcbGpBGWogCDoAACMOQZDAAmogD0EcbGpBGmogCToAACMOQZDAAmogD0EcbGpBG2ogCjoAACALQf//A3EhDiMOQZDA6gFqIA1BAXRqIA47AQAjDkGQwOoBaiANQQFqQQF0aiAGOwEAIA9B//8DcSEPIw5BkMDqAWogDUECakEBdGogDzsBACMOQZDA6gFqIA1BA2pBAXRqIA47AQAjDkGQwOoBaiANQQRqQQF0aiAPOwEAIw5BkMDqAWogDUEFakEBdGogATsBACAMIABOBEAMAQUCQCANQQZqIQ0gC0EEaiELCwsMAQsLIw5BjMACaiAEQQRqNgIAIw5BiMACaiAFQQZqNgIADwsDAAEL"), a =
    b.length, c = new Uint8Array(a), r = 0; r < a; r++)c[r] = b.charCodeAt(r); return c.buffer
} function vc() { uc || (uc = !0, nb(function () { sc = !0; if (tc.length) for (var b = 0; b < tc.length; b++) { var a = tc[b]; wc(a.data, a.u, a.T) } tc = [] })) } self.onmessage = function (b) { b = b.data; var a = b.action, c = b.isText, r = b.isPoi; if (self[a]) self[a](b); self.isText = c; self.isPoi = r }; var zb = { 0: "00000000", 16: "00010000", 32: "00100000", 48: "00110000", 64: "01000000", 96: "01100000" };
function xb(b, a) { if (!zb[b]) { var c = b.toString(2); 8 > c.length && (c = Array(8 - c.length + 1).join("0") + c); zb[b] = c } c = zb[b]; return "1" === c[a - Ob[a].start] }
function wc(b, a, c) {
  fa("finishLoadTile"); try {
    fa("begin(ParseData)"), xc(b, a, c, function (a) {
      fa("finishParseData"); a.base = a.a; a.base3d = a.A; a.virtual = a.U; a.building3d = a.D; a.building3dMesh = a.F; a.indoorData = a.N; a.indoorBase = a.J; a.indoorBaseContour = a.K; a.indoorBorder3D = a.L; a.indoorArea3D = a.I; a.label = a.label; a.tileInfo = a.u; for (var b = [], c = 0; c < a.base.length; c++) { var k = a.base[c]; b.push(k.data[0].buffer); b.push(k.data[1].buffer) } if (a.base3d) for (c = 0; c < a.base3d.length; c++)k = a.base3d[c], "block" === k.type ? (b.push(k.data.vertex.buffer),
        b.push(k.data.index.buffer)) : (b.push(k.data[0].buffer), b.push(k.data[1].buffer)); if (a.virtual) for (c = 0; c < a.virtual.length; c++)k = a.virtual[c], b.push(k.data[0].buffer), b.push(k.data[1].buffer); a.building3d && (b.push(a.building3d.vertex.buffer), b.push(a.building3d.index.buffer)); if (a.indoorBase) for (c = 0; c < a.indoorBase.length; c++)k = a.indoorBase[c], b.push(k.data[0].buffer), b.push(k.data[1].buffer); if (a.indoorBaseContour) for (c = 0; c < a.indoorBaseContour.length; c++)k = a.indoorBaseContour[c], b.push(k.data[0].buffer),
          b.push(k.data[1].buffer); if (a.indoorBorder3D && a.indoorBorder3D && 0 < a.indoorBorder3D.length) for (c = 0; c < a.indoorBorder3D.length; c++)b.push(a.indoorBorder3D[c].data[0].buffer), b.push(a.indoorBorder3D[c].data[1].buffer); if (a.indoorArea3D && 0 < a.indoorArea3D.length) for (c = 0; c < a.indoorArea3D.length; c++)b.push(a.indoorArea3D[c].vertex.buffer), b.push(a.indoorArea3D[c].index.buffer); a.label && (a.label.textImageBitmap && b.push(a.label.textImageBitmap), a.label.indoorTextImageBitmap && b.push(a.label.indoorTextImageBitmap));
      a.perfStat = [ra("beginLoadTile", "finishLoadTile"), ra("finishLoadTile", "beginParseData"), ra("beginParseData", "finishParseData"), rc]; a.endTime = Date.now(); postMessage(a, b)
    })
  } catch (r) { postMessage({ tileInfo: a, tileKey: c, error: "parse_error", message: r.message }) }
}
self.loadTileData = function (b) {
  var a = b.url, c = {};
  // xiewanna
  
  
  
  c.baseTileSize = b.tileInfo.baseTileSize; c.col = b.tileInfo.col; c.loopOffsetX = b.tileInfo.loopOffsetX; c.mercatorSize = b.tileInfo.mercatorSize; c.row = b.tileInfo.row; c.tileSize = b.tileInfo.tileSize; c.tileTypeName = b.tileInfo.tileTypeName; c.useZoom = b.tileInfo.useZoom; c.zoom = b.tileInfo.zoom; c.processedLabelZooms = b.tileInfo.processedLabelZooms; var r = b.tileKey; b.featureStyle && (vb = JSON.parse(b.featureStyle), Y = null); b.indoorStyle && (Tb = JSON.parse(b.indoorStyle)); b.iconSetInfo &&
    (Pb = JSON.parse(b.iconSetInfo)); 
    b.iconInfo && (sb = b.iconInfo.textSizeRatio); b.mapStyleId && (Q = b.mapStyleId); b.customMapStyle && (Y = JSON.parse(b.customMapStyle), vb = null); c.style = Q; pc = qc = null; rc = 0; var g = new XMLHttpRequest; 
    g.open("GET", a, !0); g.responseType = "arraybuffer"; g.timeout = 1E4; g.ontimeout = function () { postMessage({ tileInfo: c, tileKey: r, error: "net_timeout", message: "net status: timeout" }) }; g.onreadystatechange = function () {
      4 === this.readyState && (200 === this.status && (rc = Math.round(g.response.byteLength / 1024),
        sc ? wc(g.response, c, r) : tc[tc.length] = { data: g.response, u: c, T: r }), (400 <= this.status || 0 === this.status) && postMessage({ tileInfo: c, tileKey: r, error: "net_error", message: "net status: " + this.status }))
    }; g.send(); vc(); fa("beginLoadTile")
};
function xc(b, a, c, r) {
  var g = [], p = [], k = [], q = 0, x = a.useZoom, h = null, e = null; H = new Uint32Array(b); tb = new Int32Array(b); ac = H[0]; for (var w = O(H[1] + 2, 0, b.byteLength), d = O(0, w[0][0], w[0][0] + w[0][1]), t, u = !1, m = 0; m < d.length; m++) { h = d[m]; var n = h[0] >> 2, l = H[n + 1]; if (7 === l) { u = !0; break } } !1 === u && (q = Rb(null, null, a, g, q, 0)); for (m = 0; m < d.length; m++)h = d[m], n = h[0] >> 2, l = H[n + 1], u = H[n + 2], 7 === l ? q = Rb(b, h, a, g, q, 0) : 4 === l ? 13E3 === u || 83500 === u ? yc(b, h, x, k, 0) : q = yc(b, h, x, g, q) : 15 === l ? (t = q, q = Rb(b, h, a, p, q, 1, { O: !0 })) : 16 === l ? q = yc(b, h, x, p, q, !0) :
    18 === l ? Y && Y.zoomFrontStyle && Y.zoomFrontStyle[x] && "off" === Y.zoomFrontStyle[x].bmapRoadarrowVisibility || (q = Pc(b, h, x, p, q)) : 19 === l ? q = Qc(b, h, x, g, q) : 20 === l && (q = Rc(b, h, x, p, q)); (m = Sc(d, a)) && p.push({ type: "block", data: m, has3D: !0, has2D: !1 }); h = Sb(b, d, a); m = Tc(b, d, a); 0 < m && (e = { vertex: new Float32Array(7 * m), index: new Uint16Array(m / 3) }, Tc(b, d, a, e.vertex, e.index)); m = { S: wb(b, w[3][0], w[3][1], void 0) || "", height: H[2] || 0 }; var f = pb(b, d, w[2], m, a) || {}; f.textImgStr = m.S || null; w[4][1] && H[3] ? (f.indoorTextImgStr = wb(b, w[4][0], w[4][1],
      void 0) || null, f.indoorTextureHeight = H[3]) : f.indoorTextImgStr = null; b = Qb(b, w[1], a, t ? t : q); f.indoorLabel = []; if (b.indoorDataResult) for (var F in b.indoorDataResult) if ("tileInfo" !== F) for (q = b.indoorDataResult[F], w = q.defaultFloor, b.indoorDataResult[F].tileKey = c, m = 0; m < q.floors.length; m++)w === m && q.floors[m].pois && (f.indoorLabel = f.indoorLabel.concat(q.floors[m].pois)); H = tb = null; g.length && (g = Uc(g)); var v = {
        a: g, A: p.length ? p : null, U: k.length ? k : null, D: h, F: e, N: b.indoorDataResult, J: b.indoorBase, K: b.indoorBaseContour,
        L: b.indoorBorder3D, I: b.indoorArea3D, label: f, u: a
      }; if ((f.textImgStr || f.indoorTextImgStr) && self.fetch && self.createImageBitmap && self.Promise) {
        var A = function () { r(v) }, B = 0; f.textImgStr && (B++, fetch(f.textImgStr).then(function (a) { a.blob().then(function (a) { createImageBitmap(a, { imageOrientation: "flipY" }).then(function (a) { f.textImageBitmap = a; f.textImgStr = null; B--; 0 === B && r(v) }, A) }, A) }, A)); f.indoorTextImgStr && (B++, fetch(f.indoorTextImgStr).then(function (a) {
          a.blob().then(function (a) {
            createImageBitmap(a, { imageOrientation: "flipY" }).then(function (a) {
              f.indoorTextImageBitmap =
                a; f.indoorTextImgStr = null; B--; 0 === B && r(v)
            }, A)
          }, A)
        }, A))
      } else r(v)
} function Uc(b) { for (var a = void 0, c = 0, r = 0, g = !1, p = 0; p < b.length; p++)"fill" !== b[p].type ? a = void 0 : b[p].type === a ? (b[c] = Vc(b[c], b[p], r), b[p].P = !0, r += b[p].h, g = !0) : (c = p, a = b[p].type, r = b[p].h); return g ? b.filter(function (a) { return !a.P }) : b } function Vc(b, a, c) { var r = b.data[1], g = a.data[1]; b.data[0] = Wc(b.data[0], a.data[0]); b.data[1] = Wc(r, g, c); b.has3D = b.has3D || a.has3D; b.has2D = b.has2D || a.has2D; return b }
function Wc(b, a, c) { if (b.constructor === ArrayBuffer) { var r = new Uint8Array(b.byteLength + a.byteLength); r.set(new Uint8Array(b), 0); r.set(new Uint8Array(a), b.byteLength); return r.buffer } r = new b.constructor(b.length + a.length); r.set(b, 0); if (c) for (var g = 0; g < a.length; g++)a[g] += c; r.set(a, b.length); return r }
function Rb(b, a, c, r, g, p, k) {
  var q = []; b && (q = a ? a[0] >> 2 : 0, q = H[q], q = O(q + 1, a[0], a[0] + a[1])); a = 0; var x = c.baseTileSize; c = c.useZoom; var h = [], e = [], w = [], d = []; k = k || {}; var t = k.v || !1, u = k.O || !1; k = k.M || !1; if (!u && 0 === g) {
    e = $b; if (Y && Y.bmapLandColor) { e = Y.bmapLandColor.replace("#", ""); 3 === e.length ? e += "f" : 6 === e.length && (e += "ff"); w = []; d = e.length; h = 8 === d ? 2 : 1; for (var m = 0; m < d; m += h)2 === h ? w.push(parseInt(e.slice(m, m + 2), 16)) : w.push(parseInt(e.slice(m, m + 1) + e.slice(m, m + 1), 16)); e = w } h = [0, 0, 0, e[0], e[1], e[2], e[3], 0, x, 0, 0, e[0], e[1],
      e[2], e[3], 0, x, x, 0, e[0], e[1], e[2], e[3], 0, 0, x, 0, e[0], e[1], e[2], e[3], 0]; e = [0, 1, 2, 0, 2, 3]; w = [72]; d = [20]
  } 1 === p ? (g++, a = g, g += 5) : 2 === p && (a = g + 3 * q.length + 1); m = []; for (var n = [], l = !1, f = !1, F = 0; F < q.length; F++) {
    var v = q[F], A = v[0] >> 2, B = H[A]; A = H[A + 1]; var C = ub.b(Q, A, "polygon", c, t ? Tb : vb, t, Y); if (C && C.length) {
      C = C[0]; if (C.g) { if (6 < c && (71013 === C.g || 71012 === C.g || 71011 === C.g)) continue; if (5 < c && 71011 === C.g) continue; if (5 > c && (71012 === C.g || 71013 === C.g)) continue } var y = C.f[0], E = C.f[1], G = C.f[2], L = C.f[3], V = C.c[0], J = C.c[1], P = C.c[2], U =
        C.c[3], ba = C.borderWidth / 4, ja = 2.5 * ba; v = O(B + 1, v[0], v[0] + v[1]); g += 3; for (B = 0; B < v.length; B++) {
          var T = v[B], K = T[0] >> 2, R = H[K]; if (xb(H[K + 1], c)) {
            var S = O(R + 1, T[0], T[0] + T[1]); T = new Int32Array(b, S[0][0], S[0][1] >> 2); if (T.length && !(4E3 < T.length)) {
              var N = new Uint16Array(b, S[2][0], S[2][1] >> 1); !0 !== k && N && h.length / 8 + T.length / 2 > Zb && (h = Xc(h), r.push({ type: "fill", data: [h, new Uint16Array(e)], h: h.byteLength / Yb, has3D: l, has2D: f, verticesLength: d, styleIds: w }), h = [], e = [], w = [], d = [], f = l = !1); R = null; var M = !1; if (u) {
                var D = 1 < ac ? new Int16Array(b,
                  S[1][0], S[1][1] >> 1) : new Uint16Array(b, S[1][0], S[1][1] >> 1); if (1 === D.length && D[0]) R = Array(T.length >> 1), 0 > D[0] && (M = !0), Ub(R, D[0]), l = !0; else if (1 < D.length) { R = []; for (var I = 0; I < D.length; I++)0 > D[I] && (M = !0), R[I] = D[I] || Xb; l = !0 } else f = !0
              } I = h.length / 8; D = Za(T); K = H[K + 2]; k && 1 === K && (ba = ja); if (!0 !== k && N) { K = e; for (var W = 0; W < N.length; W++)K[K.length] = N[W] + I; I = 0; for (N = D.length / 2; I < N; I++)K = R ? R[I] : 0, h.push(D[2 * I], D[2 * I + 1], K, y, E, G, L, g); w.push(A); d.push(h.length / 1.6) } if (R && !M) for (m.length / 8 + D.length / 2 * 2 > Zb && (m = Xc(m), n = new Uint16Array(n),
                r.push({ type: "fill", data: [m, n], h: m.byteLength / Yb, has3D: l, has2D: f }), n = [], m = []), M = m.length / 8, I = 0; I < D.length; I += 2) { K = R[I / 2]; N = K - 280; 0 > N && (N = 0); m.push(D[I], D[I + 1], K, V, J, P, U, g, D[I], D[I + 1], N, V, J, P, U, g); K = D[I]; N = D[I + 1]; W = I === D.length - 2 ? D[1] : D[I + 3]; var ca = !1; if (K === (I === D.length - 2 ? D[0] : D[I + 2])) { if (Math.abs(K) < Wb || Math.abs(K - x) < Wb) ca = !0 } else N === W && (Math.abs(N) < Wb || Math.abs(N - x) < Wb) && (ca = !0); ca || (I === D.length - 2 ? n.push(M + I, M + I + 1, M, M, M + I + 1, M + 1) : n.push(M + I, M + I + 1, M + I + 2, M + I + 2, M + I + 1, M + I + 3)) } if (p && C.borderWidth &&
                  D.length) { if (D[0] - D[D.length - 2] > Wb || D[1] - D[D.length - 1] > Wb) D[D.length] = D[0], D[D.length] = D[1], R && (R[R.length] = R[0]); if (S[3]) for (S = O(0, S[3][0], S[3][0] + S[3][1]), D = 0; D < S.length; D++)M = S[D], K = O(0, M[0], M[0] + M[1]), M = new Int16Array(b, K[0][0], K[0][1] >> 1), kb() + M.length / 2 > Zb && (r.push({ type: "line", data: [ib(), jb()], has3D: l, has2D: f }), mb()), I = new Uint16Array(b, K[1][0], K[1][1] >> 1), K = new Int8Array(b, K[2][0], K[2][1]), lb(M, [V, J, P, U], ba, R, a, !1, T, K, 0, I[0], I[1]) }
            }
          }
        }
    }
  } m.length && (m = Xc(m), n = new Uint16Array(n), r.push({
    type: "fill",
    data: [m, n], h: m.byteLength / Yb, has3D: l, has2D: f
  })); h.length && (h = Xc(h), r.push({ type: "fill", data: [h, new Uint16Array(e)], h: h.byteLength / Yb, has3D: l, has2D: f, verticesLength: d, styleIds: w })); p && (r.push({ type: "line", data: [ib(), jb()], has3D: l, has2D: f }), mb()); return Math.max(g, a)
}
function yc(b, a, c, r, g, p) {
  a = O(H[a[0] >> 2] + 1, a[0], a[0] + a[1]); for (var k = !1, q = !1, x = [], h = [], e = 0; 2 > e; e++) {
    0 === e && g++; for (var w = 0; w < a.length; w++) {
      var d = a[w], t = d[0] >> 2, u = H[t], m = H[t + 1]; if ((t = ub.b(Q, m, "line", c, vb, !1, Y)) && t.length && (71059 !== m || self.isText) && (0 !== e || t[0].borderWidth) && (d = O(u + 1, d[0], d[0] + d[1]), 0 !== e || !t[0].i)) if (1 === e && t[0].i) {
        var n = t[0].i; u = n; var l = Pb[u] || Pb["MapRes/" + u]; if (l) {
          l = [l[0], l[1]]; kb() && (r[r.length] = { type: "line", data: [ib(), jb()], has3D: k, has2D: q, styleIds: x, verticesLength: h }, mb(), q = k =
            !1, h = [], x = []); /guojietianqiaojieti/.test(n) ? g += 20 : g++; var f = t[0].o / 4, F = p ? !0 : !1, v = !1; /\b(32|16|8|4)$/.test(u) && (f *= 5, l[1] *= 2, v = F = !0, n = n.replace(/\b4$/, "8")); var A = !1, B = !1; for (u = 0; u < d.length; u++) {
              var C = d[u], y = C[0] >> 2, E = H[y]; y = H[y + 1]; if (xb(y, c) && (y = O(E + 1, C[0], C[0] + C[1]), C = null, E = new Int32Array(b, y[0][0], y[0][1] >> 2), E.length && !(8E3 < E.length))) {
                if (v && 4 === E.length) { var G = E, L = G[2], V = G[3], J = Math.sqrt(L * L + V * V); J = 800 * ~~(J / 800) / J; G[2] = ~~(L * J); G[3] = ~~(V * J) } if (p) {
                  var P = 1 < ac ? new Int16Array(b, y[1][0], y[1][1] >> 1) :
                    new Uint16Array(b, y[1][0], y[1][1] >> 1); if (1 === P.length && P[0]) C = Array(E.length >> 1), Ub(C, P[0]), A = !0; else if (1 < P.length) { C = []; for (A = 0; A < P.length; A++)C[A] = P[A] || Xb; A = !0 } else B = !0
                } G = new Int16Array(b, y[2][0], y[2][1] >> 1); L = new Int8Array(b, y[3][0], y[3][1]); lb(G, t[0].f, f, C, g, !0, E, L, 1); x.push(m); h.push(5 * kb())
              }
            } kb() && (r[r.length] = { type: "line", textureSize: l, texture: n + ".png", lineWidth: t[0].o / 2, data: [ib(), jb()], has3D: A, has2D: B, zoomWithMap: F, styleIds: x, verticesLength: h }, x = [], h = [], mb())
        }
      } else if (0 === e ? (m = t[0].c,
        n = t[0].borderWidth) : (m = t[0].f, n = t[0].o), n /= 4, !(0 === n || 0 === m[3] || 100 < n)) for (1 === e && g++, u = 0; u < d.length; u++)if (C = d[u], y = C[0] >> 2, E = H[y], y = H[y + 1], xb(y, c) && (y = O(E + 1, C[0], C[0] + C[1]), E = new Int32Array(b, y[0][0], y[0][1] >> 2), E.length && !(8E3 < E.length))) {
          G = new Int16Array(b, y[2][0], y[2][1] >> 1); L = new Int8Array(b, y[3][0], y[3][1]); kb() + G.length / 2 > Zb && (r[r.length] = { type: "line", data: [ib(), jb()], has3D: k, has2D: q }, q = k = !1, mb()); C = null; if (p) if (1 < ac ? P = new Int16Array(b, y[1][0], y[1][1] >> 1) : P = new Uint16Array(b, y[1][0], y[1][1] >>
            1), 1 === P.length && P[0]) C = Array(E.length >> 1), Ub(C, P[0]), k = !0; else if (1 < P.length) { C = []; for (k = 0; k < P.length; k++)C[k] = P[k] || Xb; k = !0 } else q = !0; lb(G, m, n, C, g, 1 === t[0].G, E, L, 0)
        }
    }
  } kb() && (r[r.length] = { type: "line", data: [ib(), jb()], has3D: k, has2D: q, styleIds: x, verticesLength: h }, mb()); return g
}
function Rc(b, a, c, r, g) {
  var p = O(H[a[0] >> 2] + 1, a[0], a[0] + a[1]), k = []; a = []; for (var q = !1, x = !1, h = 0; h < p.length; h++) {
    var e = p[h]; e = O(H[e[0] >> 2] + 1, e[0], e[0] + e[1])[0]; var w = e[0] >> 2, d = H[w]; if (xb(H[w + 1], c)) {
      var t = O(d + 1, e[0], e[0] + e[1]); e = new Int32Array(b, t[0][0], t[0][1] >> 2); e = Za(e); d = 1 < ac ? new Int16Array(b, t[3][0], t[3][1] >> 1) : new Uint16Array(b, t[3][0], t[3][1] >> 1); w = void 0; if (1 === d.length && d[0]) w = Array(e.length >> 1), Ub(w, d[0]), q = !0; else if (1 < d.length) { w = []; for (var u = 0; u < d.length; u++)w[u] = d[u] || 1; q = !0 } else x = !0; d = new Uint32Array(b,
        t[2][0], t[2][1] >> 2); u = k.length / 8; g += 8; var m = ub.b(Q, d[0], "polygon", c, vb, !1, Y), n = ub.b(Q, d[1], "polygon", c, vb, !1, Y); if (m && n) {
          var l = new Int32Array(b, t[1][0], t[1][1] >> 2); d = [l[0] / 100, l[1] / 100]; m = m[0].f; l = [l[2] / 100, l[3] / 100]; n = n[0].f; var f = [l[0] - d[0], l[1] - d[1]], F = Math.sqrt(Math.pow(f[0], 2) + Math.pow(f[1], 2)), v = a; t = new Uint16Array(b, t[4][0], t[4][1] >> 1); for (var A = 0; A < t.length; A++)v[v.length] = t[A] + u; u = 0; for (t = e.length / 2; u < t; u++) {
            v = [e[2 * u], e[2 * u + 1]]; if (0 === f[0]) { A = d[0]; var B = v[1] } else B = -((d[0] - v[0]) * f[0] + (d[1] -
              v[1]) * f[1]) / (f[0] * f[0] + f[1] * f[1]), A = B * f[0] + d[0], B = B * f[1] + d[1]; B = Math.sqrt(Math.pow(A - l[0], 2) + Math.pow(B - l[1], 2)) / F; if (d[0] < l[0] && A < d[0] || d[0] > l[0] && A > d[0]) B = 1; else if (d[0] < l[0] && A > l[0] || d[0] > l[0] && A < l[0]) B = 0; k.push(v[0], v[1], w ? w[u] : 0, B * m[0] + (1 - B) * n[0], B * m[1] + (1 - B) * n[1], B * m[2] + (1 - B) * n[2], B * m[3] + (1 - B) * n[3], g)
          }
        }
    }
  } k.length && (b = Xc(k), r.push({ type: "fill", data: [b, new Uint16Array(a)], h: b.byteLength / Yb, has3D: q, has2D: x })); return g
}
function Pc(b, a, c, r, g) {
  var p = O(H[a[0] >> 2] + 1, a[0], a[0] + a[1]); if (!p.length) return g; a = []; var k = []; g++; var q = Za(new Int32Array(b, p[0][0], p[0][1] >> 2)), x = new Int32Array(b, p[1][0], p[1][1] >> 2); b = new Int16Array(b, p[2][0], p[2][1] >> 1); var h = p = !1; 1 === b.length && 0 === b[0] ? h = !0 : p = !0; b = Za(b, 1); if (1 === b.length) { var e = b[0]; b = Array(q.length >> 1); Ub(b, e) } for (e = 0; e < x.length; e++)if (xb(x[e], c)) {
    var w = [q[4 * e], q[4 * e + 1], b[2 * e]], d = [q[4 * e + 2], q[4 * e + 3], b[2 * e + 1]], t = [(w[0] + d[0]) / 2, (w[1] + d[1]) / 2, (w[2] + d[2]) / 2], u = t[0] - w[0], m = t[1] -
      w[1], n = [d[0] - w[0], d[1] - w[1]], l = n[0] * n[0] + n[1] * n[1]; 0 < l && (l = 1 / Math.sqrt(l), n[0] *= l, n[1] *= l); l = a.length / 10; a[a.length] = t[0]; a[a.length] = t[1]; a[a.length] = w[2]; a[a.length] = -u; a[a.length] = -m; a[a.length] = -n[1]; a[a.length] = n[0]; a[a.length] = .125; a[a.length] = .3125; a[a.length] = g; a[a.length] = t[0]; a[a.length] = t[1]; a[a.length] = w[2]; a[a.length] = -u; a[a.length] = -m; a[a.length] = n[1]; a[a.length] = -n[0]; a[a.length] = .125; a[a.length] = .6875; a[a.length] = g; a[a.length] = t[0]; a[a.length] = t[1]; a[a.length] = d[2]; a[a.length] = u; a[a.length] =
        m; a[a.length] = -n[1]; a[a.length] = n[0]; a[a.length] = 1; a[a.length] = .3125; a[a.length] = g; a[a.length] = t[0]; a[a.length] = t[1]; a[a.length] = d[2]; a[a.length] = u; a[a.length] = m; a[a.length] = n[1]; a[a.length] = -n[0]; a[a.length] = 1; a[a.length] = .6875; a[a.length] = g; k[k.length] = l; k[k.length] = l + 1; k[k.length] = l + 2; k[k.length] = l + 2; k[k.length] = l + 1; k[k.length] = l + 3
  } k.length && r.push({ type: "arrow", data: [new Float32Array(a), new Uint16Array(k)], has3D: p, has2D: h }); return g
}
function Qc(b, a, c, r, g) {
  a = O(H[a[0] >> 2] + 1, a[0], a[0] + a[1]); g++; for (var p = 0; p < a.length; p++) {
    var k = a[p], q = k[0] >> 2, x = H[q]; if ((q = ub.b(Q, H[q + 1], "line", c, vb, !1, Y)) && q.length) {
      var h = q[0]; if ("undefined" !== typeof h.i) {
        h = h.i + ".png"; k = O(x + 1, k[0], k[0] + k[1]); for (x = 0; x < k.length; x++) { var e = k[x], w = e[0] >> 2, d = H[w]; xb(H[w + 1], c) && (w = H[w + 2] / 20, e = O(d + 1, e[0], e[0] + e[1]), lb(new Int16Array(b, e[2][0], e[2][1] >> 1), q[0].f, w, null, g, !0, new Int32Array(b, e[0][0], e[0][1] >> 2), new Int8Array(b, e[3][0], e[3][1]), 2)) } r[r.length] = {
          type: "line",
          texture: h, isSingle: !0, data: [ib(), jb()]
        }; mb()
      }
    }
  } return g
}
function Sb(b, a, c, r) {
  var g = c.useZoom; if (!a || !a.length) return null; c = []; for (var p = [], k = 0; k < a.length; k++) {
    var q = a[k], x = q[0] >> 2, h = H[x]; if (8 === H[x + 1]) for (q = O(h + 1, q[0], q[0] + q[1]), x = 0; x < q.length; x++) {
      var e = q[x]; h = e[0] >> 2; var w = H[h]; h = H[h + 1]; var d = ub.b(Q, h, "polygon3d", g, r ? Tb : vb, !1, Y); if (d && d[0]) {
        d = d[0]; var t = d.H, u = d.m; if (Y) {
          if (Y.buildingFill) {
            u = void 0; var m = t[0] / 255, n = t[1] / 255, l = t[2] / 255, f = Math.max(m, n, l), F = f - Math.min(m, n, l); for (0 === F ? u = 0 : f === m ? u = (n - l) / F % 6 * 60 : f === n ? u = 60 * ((l - m) / F + 2) : f === l && (u = 60 * ((m - n) / F +
              4)); 0 > u;)u += 360; var v = [u, 0 === f ? 0 : F / f, f]; v[2] += .05; 0 > v[2] && (v[2] = 0); n = m = u = void 0; l = v[2] * v[1]; f = l * (1 - Math.abs(v[0] / 60 % 2 - 1)); F = v[2] - l; v = v[0]; 0 <= v && 60 > v ? (n = l, m = f, u = 0) : 60 <= v && 120 > v ? (n = f, m = l, u = 0) : 120 <= v && 180 > v ? (n = 0, m = l, u = f) : 180 <= v && 240 > v ? (n = 0, m = f, u = l) : 240 <= v && 300 > v ? (n = f, m = 0, u = l) : 300 <= v && 360 > v && (n = l, m = 0, u = f); u = [Math.round(255 < 255 * (n + F) ? 255 : 255 * (n + F)), Math.round(255 < 255 * (m + F) ? 255 : 255 * (m + F)), Math.round(255 < 255 * (u + F) ? 255 : 255 * (u + F))]; u[3] = t[3] || 255
          } pc || (pc = t, qc = u)
        } e = O(w + 1, e[0], e[0] + e[1]); w = 0; if (d.borderWidth) {
          var A =
            d.c[0], B = d.c[1], C = d.c[2], y = d.c[3]; w = d.borderWidth / 4
        } for (m = 0; m < e.length; m++)if (n = e[m], l = n[0] >> 2, f = H[l], xb(H[l + 1], g) && (l = H[l + 2], !(l < d.filter))) {
          f = O(f + 1, n[0], n[0] + n[1]); n = new Int32Array(b, f[0][0], f[0][1] >> 2); v = new Uint16Array(b, f[1][0], f[1][1] >> 1); F = n; var E = l, G = t[0], L = t[1], V = t[2], J = t[3], P = u[0], U = u[1], ba = u[2], ja = u[3], T = F; Ua || (Ua = z._get_block_points_address() >> 2); Aa.set(T, Ua); T = v; Va || (Va = z._get_block_triangle_indices_address() >> 1); Fa.set(T, Va); z._append_block_data(F.length, v.length, E, G, L, V, J, P, U, ba, ja);
          c.push(h); p.push(7 * $a()); if (d.borderWidth && n.length && (F = Array(n.length >> 1), Ub(F, 100 * l), f[2])) for (l = O(0, f[2][0], f[2][0] + f[2][1]), f = 0; f < l.length; f++)v = l[f], G = O(0, v[0], v[0] + v[1]), v = new Int16Array(b, G[0][0], G[0][1] >> 1), E = new Uint16Array(b, G[1][0], G[1][1] >> 1), G = new Int8Array(b, G[2][0], G[2][1]), lb(v, [A, B, C, y], w, F, 2, !0, n, G, 0, E[0], E[1])
        }
      }
    }
  } b = { type: "line", data: [ib(), jb()] }; mb(); return 0 < $a() ? (Xa || (Xa = z._get_block_vertex_start()), a = new Float32Array(sa.slice(Xa, z._get_block_vertex_end())), Wa || (Wa = z._get_block_index_start()),
    r = new Uint16Array(sa.slice(Wa, z._get_block_index_end())), c = { vertex: a, index: r, styleIds: c, verticesLength: p }, z._reset_block(), c.border = b, c) : null
} function Xc(b) { var a = new ArrayBuffer(b.length / 8 * 20), c = new Float32Array(a); a = new Uint8Array(a); for (var r = 0, g = 12, p = 4, k = 0; k < b.length; k += 8)c[r] = b[k], c[r + 1] = b[k + 1], c[r + 2] = b[k + 2] / 100, a[g] = b[k + 3], a[g + 1] = b[k + 4], a[g + 2] = b[k + 5], a[g + 3] = b[k + 6], c[p] = b[k + 7], r += 5, g += 20, p += 5; return c }
function Tc(b, a, c, r, g) {
  if (!a || !a.length) return 0; c = c.useZoom; for (var p = 0, k = 0, q = 0, x = 0, h = 0; h < a.length; h++) {
    var e = a[h], w = e[0] >> 2; if (25 === H[w + 1]) {
      e = O(H[w] + 1, e[0], e[0] + e[1])[0]; var d = e[0] >> 2; w = H[d]; if ((d = ub.b(Q, H[d + 1], "polygon3d", c, vb, !1, Y)) && d[0]) {
        d = d[0]; var t = d.m; qc && (t = qc); e = O(w + 1, e[0], e[0] + e[1])[0]; w = O(H[e[0] >> 2] + 1, e[0], e[0] + e[1]); e = new Int32Array(b, w[1][0], w[1][1] >> 2); p += e.length; if (r) {
          d = new Int32Array(b, w[2][0], w[2][1] >> 2); w = e; for (var u = r, m = x, n = new DataView(u.buffer), l, f = 0; f < w.length; f += 3)l = f / 3 *
            7 + m, u[l] = w[f] / 100, u[l + 1] = w[f + 1] / 100, u[l + 2] = w[f + 2] / 100, u[l + 3] = d[f], u[l + 4] = d[f + 1], u[l + 5] = d[f + 2], n.setUint8(4 * l + 24, t[0]), n.setUint8(4 * l + 25, t[1]), n.setUint8(4 * l + 26, t[2]), n.setUint8(4 * l + 27, t[3]); w = []; for (d = 0; d < e.length / 3; d++)w.push(d + k); g.set(w, q); x += e.length / 3 * 7; q += w.length; k += e.length / 3
        }
      }
    }
  } return p
}
function Sc(b, a) {
  var c = [], r = []; a = a.useZoom; for (var g = 0; g < b.length; g++) {
    var p = b[g], k = p[0] >> 2; if (24 === H[k + 1]) {
      k = O(H[k] + 1, p[0], p[0] + p[1])[0]; p = k[0] >> 2; var q = H[p]; if ((p = ub.b(Q, H[p + 1], "polygon3d", a, vb, !1, Y)) && p[0]) for (p = p[0], p = p.m, qc && (p = qc), k = O(q + 1, k[0], k[0] + k[1]), q = 0; q < k.length; q++) {
        var x = k[q][0] / 4, h = c, e = r, w = c.length / 10, d = H[x + 1] / 100, t = H[x + 2] / 100, u = H[x + 3] / 100, m = H[x + 4] / 100, n = p[0], l = p[1], f = p[2]; for (x = 0; 360 >= x; x += 36) {
          var F = Math.cos(x * Math.PI / 180) * t + u, v = Math.sin(x * Math.PI / 180) * t + m, A = F + u, B = v + m; h.push(F, v,
            0, A, B, 0, n, l, f, 255); h.push(F, v, d, A, B, 0, n, l, f, 255)
        } for (x = 0; 10 > x; x++)h = 2 * x + w, e.push(h, h + 2, h + 3), e.push(h, h + 3, h + 1)
      }
    }
  } if (0 < c.length) { b = c.length / 10; a = new Float32Array(7 * b); g = new DataView(a.buffer); for (k = 0; k < b; k++)p = 7 * k, a[p] = c[10 * k], a[p + 1] = c[10 * k + 1], a[p + 2] = c[10 * k + 2], a[p + 3] = c[10 * k + 3], a[p + 4] = c[10 * k + 4], a[p + 5] = c[10 * k + 5], g.setUint8(4 * p + 24, c[10 * k + 6]), g.setUint8(4 * p + 25, c[10 * k + 7]), g.setUint8(4 * p + 26, c[10 * k + 8]), g.setUint8(4 * p + 27, c[10 * k + 9]); c = { vertex: a, index: new Uint16Array(r) } } else c = null; return c
};
