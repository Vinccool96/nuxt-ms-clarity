import { defineNuxtPlugin } from "#app"

import { ModuleOptions } from "../module"

export default defineNuxtPlugin((nuxtApp) => {
  const options: ModuleOptions = nuxtApp.payload.config.public.msClarity

  const scriptID = "nuxt-ms-clarity"

  // Abort if no ID
  if (!options.id) {
    console.error("[nuxt-microsoft-clarity]: No tracking ID set")
    return
  }

  // Abort if we already added script to head
  if (document.getElementById(scriptID)) {
    return
  }

  const script = document.createElement("script")
  script.type = "text/javascript"
  script.id = scriptID
  script.defer = true
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${options.id}");
  `
  document.head.appendChild(script)
})
