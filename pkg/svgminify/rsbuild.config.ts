import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill'

export default {
  ...defineConfig({
    plugins: [pluginReact(), pluginNodePolyfill()],
    html: {
      template: './index.html'
    }
  })
  // defaultEntry: {
  //   index: './src/svg-simple.ts'
  // }
}
