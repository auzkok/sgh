const pattern = "https://h.seznam.cz/js/cmp2/*";
let targetUrl = browser.runtime.getURL('../data/blank.js')

function redirect(_requestDetails) {
  return {
    redirectUrl: targetUrl,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["script"] },
  ["blocking"],
);