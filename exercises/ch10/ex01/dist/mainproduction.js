(() => {
    var t = {
        800: t => {
            class r {
                has(t) {
                    throw new Error("Abstract method")
                }
            }

            class e extends r {
                get size() {
                    throw new Error("Abstract method")
                }

                [Symbol.iterator]() {
                    throw new Error("Abstract method")
                }

                isEmpty() {
                    return 0 === this.size
                }

                toString() {
                    return `{${Array.from(this).join(", ")}}`
                }

                equals(t) {
                    if (!(t instanceof e)) return !1;
                    if (this.size !== t.size) return !1;
                    for (let r of this) if (!t.has(r)) return !1;
                    return !0
                }
            }

            Symbol.iterator;

            class s extends e {
                insert(t) {
                    throw new Error("Abstract method")
                }

                remove(t) {
                    throw new Error("Abstract method")
                }

                add(t) {
                    for (let r of t) this.insert(r)
                }

                subtract(t) {
                    for (let r of t) this.remove(r)
                }

                intersect(t) {
                    for (let r of this) t.has(r) || this.remove(r)
                }
            }

            class i extends s {
                constructor(t) {
                    super(), this.max = t, this.n = 0, this.numBytes = Math.floor(t / 8) + 1, this.data = new Uint8Array(this.numBytes)
                }

                get size() {
                    return this.n
                }

                _valid(t) {
                    return Number.isInteger(t) && t >= 0 && t <= this.max
                }

                _has(t, r) {
                    return !!(this.data[t] & i.bits[r])
                }

                has(t) {
                    if (this._valid(t)) {
                        let r = Math.floor(t / 8), e = t % 8;
                        return this._has(r, e)
                    }
                    return !1
                }

                insert(t) {
                    if (!this._valid(t)) throw new TypeError("Invalid set element: " + t);
                    {
                        let r = Math.floor(t / 8), e = t % 8;
                        this._has(r, e) || (this.data[r] |= i.bits[e], this.n++)
                    }
                }

                remove(t) {
                    if (!this._valid(t)) throw new TypeError("Invalid set element: " + t);
                    {
                        let r = Math.floor(t / 8), e = t % 8;
                        this._has(r, e) && (this.data[r] &= i.masks[e], this.n--)
                    }
                }

                * [Symbol.iterator]() {
                    for (let t = 0; t <= this.max; t++) this.has(t) && (yield t)
                }
            }

            i.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]), i.masks = new Uint8Array([-2, -3, -5, -9, -17, -33, -65, -129]), t.exports = {BitSet: i}
        }, 724: (t, r) => {
            const e = (t, r) => t + r, s = t => t * t;
            r.mean = t => t.reduce(e) / t.length, r.stddev = function (t) {
                let i = r.mean(t);
                return Math.sqrt(t.map((t => t - i)).map(s).reduce(e) / (t.length - 1))
            }
        }
    }, r = {};

    function e(s) {
        var i = r[s];
        if (void 0 !== i) return i.exports;
        var n = r[s] = {exports: {}};
        return t[s](n, n.exports, e), n.exports
    }

    (() => {
        const t = e(724);
        let r = new (0, e(800).BitSet)(100);
        r.insert(10), r.insert(20), r.insert(30), t.mean([...r])
    })()
})();