import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
// import { pluginTanstackQuery } from '@kubb/swagger-tanstack-query'
// import { pluginTs } from '@kubb/swagger-ts'

export default defineConfig({
  input: {
    path: './api/swagger.json',
  },
  output: {
    path: './api',
  },
  plugins: [
    pluginOas({ contentType: 'application/json', output: { path: './oas' } }),
    // pluginTs({}),
    // pluginTanstackQuery({ output: { path: './hooks' } }),
  ],
})
