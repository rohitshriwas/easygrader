document.addEventListener("DOMContentLoaded", () => {
  var cutOffs = JSON.parse(document.querySelector("[name='cut_offs']").value);

  if (cutOffs.length > 0) {
    document.getElementById("plotHistButton").click();

    cutOffs.forEach((element) => {
      var grade = "";

      if (element["label"].slice(-1) === "-") {
        grade = element["label"].slice(0, 1).toLowerCase() + "m";
      } else {
        grade = element["label"].toLowerCase();
      }

      if (element["enabled"]) {
        if (!document.getElementById(`${grade}Check`).checked) {
          document.getElementById(`${grade}Check`).click();
        }
      } else {
        if (document.getElementById(`${grade}Check`).checked) {
          document.getElementById(`${grade}Check`).click();
        }
      }

      document.getElementById(`${grade}Spinner`).value = `${element["cutOff"]}`;
      document
        .getElementById(`${grade}Spinner`)
        .dispatchEvent(new Event("input", { bubbles: true }));
      document
        .getElementById(`${grade}Spinner`)
        .dispatchEvent(new Event("change", { bubbles: true }));
    });
  } else {
    document.getElementById("courseTotalInput").value = "";
  }
});
