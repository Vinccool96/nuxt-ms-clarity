import { defineNuxtModule, addPlugin, createResolver, isNuxt3 } from "@nuxt/kit"

import { copyDeep } from "copy-deep"

// Module options TypeScript interface definition
export interface ModuleOptions {
  id: string | null
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "ms-clarity",
    configKey: "msClarity",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    id: null,
  },
  setup(options, nuxt) {
    const realOptions = copyDeep(options)
    if (isNuxt3(nuxt)) {
      // @ts-ignore
      nuxt.options.runtimeConfig.public.msClarity = realOptions
    } else {
      // @ts-ignore
      nuxt.options.publicRuntimeConfig.msClarity = realOptions
    }

    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin.client"))
  },
})
