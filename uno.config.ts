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
  }
})
