
function runfile() {
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => {
      console.error("runfile error:", error);
    });
}


runfile();