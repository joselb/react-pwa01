if ("serviceWorker" in navigator) {
  //console.log("serviceWorker si existe")
  navigator.serviceWorker.register("./sw.js")
}