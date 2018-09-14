// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
    }),
  ],
  external: ['react', 'redux', 'redux-thunk', 'react-redux', 'immutable'],
};
