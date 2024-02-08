module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prettier"],
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  rules: {
    // 本のサンプルコードが基本的にconstを使っていないためerrorからwarnに緩和する。
    // 通常業務ではほぼ確実に採用されるルールのため、offにはしない。
    "prefer-const": "warn",
  },
  root: true,
};
