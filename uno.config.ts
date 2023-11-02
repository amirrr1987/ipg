// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerCompileClass({
      classPrefix: 'ipg__'
    })
  ],
  shortcuts: {
    // shortcuts to multiple utilities
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700'
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: '#14b8a6',
        '50': '#f0fdfc',
        '100': '#ccfbf6',
        '200': '#99f6ec',
        '300': '#5eeadb',
        '400': '#2dd4c2',
        '500': '#14b8a6',
        '600': '#0d9485',
        '700': '#0f766b',
        '800': '#115e56',
        '900': '#134e48',
        '950': '#042f2a'
      }
    }
  }
})
