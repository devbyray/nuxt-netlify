(function () {
  // check if Sevice Worker support exist in browser or not
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('../service-worker.js', { scope: ' ' })
      .then(function () {
        console.log('Congratulations!!Service Worker Registered')
      })
      .catch(function (err) {
        console.log(`Aagh! Some kind of Error :- ${err}`)
      })
  } else {
    console.log('👎 no service worker supported in this browser! Chrome & Firefox does support it!')
  }
})()
