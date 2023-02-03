import { addPluginTemplate, createResolver, defineNuxtModule } from "@nuxt/kit"
import { Nuxt } from "@nuxt/schema"

// Module options TypeScript interface definition
export interface ModuleOptions {
  id: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "ms-clarity",
    configKey: "msClarity",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    id: "",
  },
  setup(options: ModuleOptions, nuxt: Nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPluginTemplate({
      filename: "msClarity.client.ts",
      src: resolver.resolve("./runtime/plugin.client.ts"),
      options: { id: options.id },
    })
  },
})
