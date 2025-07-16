if (!self.define) {
  let e,
    i = {}
  const o = (o, n) => (
    (o = new URL(o + '.js', n).href),
    i[o] ||
      new Promise(i => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = o), (e.onload = i), document.head.appendChild(e)
        } else (e = o), importScripts(o), i()
      }).then(() => {
        let e = i[o]
        if (!e) throw new Error(`Module ${o} didn’t register its module`)
        return e
      })
  )
  self.define = (n, r) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (i[t]) return
    let s = {}
    const f = e => o(e, t),
      c = {module: {uri: t}, exports: s, require: f}
    i[t] = Promise.all(n.map(e => c[e] || f(e))).then(e => (r(...e), s))
  }
}
define(['./workbox-98eafefd'], function (e) {
  'use strict'
  self.addEventListener('message', e => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting()
  }),
    e.precacheAndRoute(
      [
        {url: 'index.html', revision: '99d2f71a448266cd1fd462d1d48ae03b'},
        {url: 'logo192.png', revision: 'f53a2ffc8193f84ea58c08c0b9a97614'},
        {url: 'logo512.png', revision: 'f53a2ffc8193f84ea58c08c0b9a97614'},
        {url: 'manifest.json', revision: 'd0b76de3114c783145fab8e6fdd8cfae'},
      ],
      {ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]},
    )
})
//# sourceMappingURL=sw.js.map
