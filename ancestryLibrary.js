// document.body.style.border = "5px solid red";

browser.contextMenus.create(
  {
    id: "open-link-in-ancestry-library",
    title: "Open link in AncestryLibrary",
    contexts: ["link"],
  },
  // onCreated,
  () => void browser.runtime.lastError,
);

browser.contextMenus.onClicked.addListener(function (info, tab) {
  console.log(info);
  switch (info.menuItemId) {
    case "open-link-in-ancestry-library":
      console.log(info.selectionText);
      console.info("Open in AL: " + info.linkUrl);
      if (info.linkUrl) {
        let newTab = browser.tabs.create({
          active: false,
          url: info.linkUrl.replace("ancestry.com", "ancestrylibrary.com"),
          index: tab.index + 1,
        });
      }
      break;
    // ...
  }
});
