import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/easyTable.js",
  output: {
    file: "dist/easyTable.min.js",
    format: "umd",
    name: "bundle",
    globals: {
      jquery: "$"
    }
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ],
  external: ["jquery"]
};
