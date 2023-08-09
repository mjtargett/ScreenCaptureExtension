/* sends the user to chrome://settings/downloads upon button press which allows them to change the directory of saved files */
document.getElementById("directory-button").addEventListener("click", function() {
    chrome.tabs.update({url: "chrome://settings/downloads"});
});

/* sends the user to the author's github upon button press */
document.getElementById("github-button").addEventListener("click", function() {
  chrome.tabs.update({url: "https://github.com/mjtargett"});
});