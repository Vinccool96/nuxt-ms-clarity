import { fileURLToPath } from "node:url"
import { describe, it } from "vitest"
import { setup, $fetch } from "@nuxt/test-utils"

describe("ssr", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  })

  it("renders the index page", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html: string = await $fetch("/")
    const a = 1 + 2
  })
})
