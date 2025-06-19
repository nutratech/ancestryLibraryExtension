// Remain platform independent
if (typeof browser === "undefined") {
  browser = chrome;
}

const cmId = "open-link-in-ancestry-library";

// Create context menu item
browser.contextMenus.create(
  {
    id: cmId,
    title: "Open link in AncestryLibrary",
    contexts: ["link"],
    // visible: false, // Initially hidden
  },
  // onCreated,
  () => void browser.runtime.lastError,
);

// Show/hide based on whether the right-clicked link is *.ancestry.com
// browser.contextMenus.onShown.addListener((info, tab) => {
//   const linkUrl = info.linkUrl;

//   const isAncestrySubdomain = new URL(linkUrl).hostname.endsWith(
//     ".ancestry.com",
//   );

//   browser.contextMenus.update(cmId, {
//     visible: isAncestrySubdomain,
//   });

//   // Refresh menu and apply visibility settings
//   browser.contextMenus.refresh();
// });

// Click event listener/handler
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
