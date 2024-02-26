/* eslint-env node */

/** @type {import('eslint').Linter.Config}*/
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [
    "react-refresh",
    "sort-keys-plus",
    "sort-destructure-keys",
    "unused-imports",
    "simple-import-sort",
    "import",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "prettier/prettier": ["error", { usePrettierrc: true }],
    "react-refresh/only-export-components": "warn",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            "^\\u0000",
            "^react",
            "^node:",
            "^@?\\w",
            "^",
            "^\\.\\./+",
            "^\\./internals",
            "^\\.",
          ],
        ],
      },
    ],
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      { caseSensitive: false },
    ],
    "sort-keys-plus/sort-keys": [
      "error",
      "asc",
      { caseSensitive: false, natural: false },
    ],

    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: true,
      typescript: true,
    },
  },
};
