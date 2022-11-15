/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withTM = require("next-transpile-modules")(["three"]);
const withTM2 = require("next-transpile-modules")(["ol"]);

module.exports = withTM();
module.exports = withTM2();
module.exports = nextConfig;
