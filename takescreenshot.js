
document.getElementById("screenshot-button").addEventListener("click", () => {

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    chrome.tabs.captureVisibleTab({ format: 'png', quality: 100 }, (dataUrl) => {
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // Convert the canvas to a data URL and initiate the download
        const imageDataUrl = canvas.toDataURL("image/png");
        chrome.downloads.download({
          url: imageDataUrl,
          filename: url.textContent + "-" + new Date().toISOString().slice(0, 10) + ".png"
        });
      };
    });
  });
});
