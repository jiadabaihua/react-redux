module.exports = {
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env", {
        "modules": false,

        "targets": {
          "browsers": ["Android >= 4.4.0", "ios >= 9.0"]
        },
        "useBuiltIns": "usage",
        "debug": false,
        "corejs": "2.6.5"
      }
    ]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
};