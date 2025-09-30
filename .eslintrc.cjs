const react = require("eslint-plugin-react");
const hooks = require("eslint-plugin-react-hooks");
const refresh = require("eslint-plugin-react-refresh");

module.exports = [
  { 
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: { react, hooks, refresh },
    rules: {
      ...react.configs.recommended.rules,
      ...hooks.configs.recommended.rules,
      "refresh/only-export-components": "warn"
    }
  }
];