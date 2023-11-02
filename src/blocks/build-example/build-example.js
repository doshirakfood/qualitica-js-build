document.addEventListener(
  "DOMContentLoaded",
  () => {
    try {
      const buildExampleMain = document.querySelector(".build-example") || false;

      if (buildExampleMain !== false) {
        const buildExampleElems = {
          trigger: buildExampleMain.querySelector(".build-example__trigger"),
          notification: buildExampleMain.querySelector(".build-example__notification"),
        };

        buildExampleElems.trigger.addEventListener(
          "click",
          () => {
            buildExampleElems.notification.innerHTML = "<p>Это prod-версия скрипта</p>";
          },
          false,
        );
      }
    } catch (error) {
      console.error(error);
    }
  },
  false,
);
