setIconStyle();

function insertIcons() {
  const root = document.querySelectorAll(":root .list-item div");

  for (let i = 0; i < root.length; i++) {
    const allIcons = window.hydrogenIconsLibrary;
    for (let key of Object.keys(allIcons)) {
      if (key === root[i].id) {
        root[i].innerHTML = allIcons[key].svg();
      }
    }
  }
}

function waitForIcons() {
  if (window.hydrogenIconsLibrary) {
    insertIcons();
  } else {
    setTimeout(function () {
      insertIcons();
    }, 100);
  }
}

waitForIcons();
