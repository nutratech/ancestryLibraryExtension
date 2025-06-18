// document.body.style.border = "5px solid red";

browser.contextMenus.create(
  {
    id: "open-link-in-ancestry-library",
    title: "Open link in AncestryLibrary",
    contexts: ["link"],
  },
  // onCreated,
  // () => void browser.runtime.lastError,
);

// browser.contextMenus.onClicked.addListener((info, tab) => {
//   switch (info.menuItemId) {
//     case "open-link-in-ancestry-library":
//       console.log(info.selectionText);
//       break;
//     // ...
//   }
// });
