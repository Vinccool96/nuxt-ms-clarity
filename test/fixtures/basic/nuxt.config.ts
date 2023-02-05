import MsClarity from "../../../src/module"

export default defineNuxtConfig({
  modules: [
    // @ts-ignore
    MsClarity,
  ],

  msClarity: {
    id: "test-id",
  },
})
