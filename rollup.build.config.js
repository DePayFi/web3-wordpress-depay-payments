import commonjs from '@rollup/plugin-commonjs'
import globals from './rollup.globals.js'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import sucrase from '@rollup/plugin-sucrase'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from "rollup-plugin-terser"

const files = [
  'src/admin.js',
  'src/block.js',
]

export default files.map((file)=>{
  return({
    input: file,
    output: [ { format: 'umd', globals: globals, dir: 'core/includes/assets/js' } ],
    plugins: [
      sucrase({
        exclude: ['node_modules/**'],
        transforms: ['jsx']
      }),
      resolve({
        extensions: ['.js',  '.jsx']
      }),
      nodeResolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' ),
        preventAssignment: true
      }),
      terser()
    ]
  })
})
