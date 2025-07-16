module.exports = {
  globDirectory: 'web/',
  globPatterns: ['**/*.{html,png,json}'],
  swDest: 'web/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
}
