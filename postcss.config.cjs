const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");

module.exports = {
	plugins: [
		require("autoprefixer"),
		require("postcss-import"),
		require("postcss-preset-env")({ stage: 1 }),
		require("postcss-nesting"),
		require("cssnano"),
		postcssJitProps(OpenProps),
	],
};
