/* upon button press, sends the user to chrome://settings/downloads which allows them to change the directory of saved files */
document.getElementById("directory-button").addEventListener("click", function() {
    chrome.tabs.update({url: "chrome://settings/downloads"});
  });