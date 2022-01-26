// vite.config.js
const { defineConfig } = require('vite');
import htmlPurge from 'vite-plugin-html-purgecss';

module.exports = defineConfig({
  plugins: [htmlPurge()],
  build: {
    sourcemap: true,
  },
});
