import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/TreeMenuItem.vue',
  output: {
    format: 'esm',
    file: 'dist/main.js'
  },
  plugins: [
    commonjs(),
    vue()
  ]
}
