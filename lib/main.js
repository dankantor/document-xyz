const registerServiceWorker = async () => {
  try {
    let registration = await navigator.serviceWorker.register('sw.js');
  } catch (err) {
    console.error(err);
  }

}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', registerServiceWorker);
}
