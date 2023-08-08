/* gets the url of the active website using the chrome.tabs api then sets the text content
of the url element to the hostname of the current website */
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  const urlString = tabs[0].url
  const parsedUrl = new URL(urlString).hostname
  document.getElementById("url").textContent = parsedUrl;
})