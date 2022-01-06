import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/main/bundle.js",
      format: "iife",
      sourcemap: true,
    },
    rootDir: "src",
    plugins: [
      nodeResolve({
        extensions: [".js"],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'development' )
      }),
      babel({
        presets: ["@babel/preset-react"],
      }),
      commonjs(),
      image(),
      postcss({
        extensions: [".css"],
      }),
      serve({
        open: true,
        verbose: true,
        contentBase: ["","dist/main"],
        host: "localhost",
        port: 3008,
        headers: {
          'Access-Control-Allow-Origin': '*',
          foo: 'bar'
        },
      }), // to test the application locally
      livereload({ watch: "dist/main" }),
    ]
  },
  {
    input: "src/Drawer.js",
    output: {
      file: "dist/drawer/bundle.js",
      format: "iife",
      sourcemap: true,
    },
    rootDir: "src",
    plugins: [
      nodeResolve({
        extensions: [".js"],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'development' )
      }),
      babel({
        presets: ["@babel/preset-react"],
      }),
      commonjs(),
      image(),
      postcss({
        extensions: [".css"],
      }),
      serve({
        open: true,
        verbose: true,
        contentBase: ["", "dist/drawer"],
        host: "localhost",
        port: 3007,
        headers: {
          'Access-Control-Allow-Origin': '*',
          foo: 'bar'
        },
      }), // to test the application locally
      livereload({ watch: "dist/drawer" }),
    ]
  }
];