/* sends the user to chrome://settings/downloads upon button press which allows them to change the directory of saved files */
document.getElementById("directory-button").addEventListener("click", function() {
    chrome.tabs.create({url: "chrome://settings/downloads"});
});

/* sends the user to the author's github upon button press */
document.getElementById("github-link").addEventListener("click", function() {
  chrome.tabs.create({url: "https://github.com/mjtargett"});
});