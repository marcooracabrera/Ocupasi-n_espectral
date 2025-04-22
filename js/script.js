document.addEventListener("DOMContentLoaded", function () {
    const bandaSelector = document.getElementById("bandaSelector");
    const table915 = document.getElementById("table-915");
    const table24 = document.getElementById("table-24");
  
    bandaSelector.addEventListener("change", function () {
      if (this.value === "915MHz") {
        table915.style.display = "table";
        table24.style.display = "none";
      } else {
        table915.style.display = "none";
        table24.style.display = "table";
      }
    });
  });
  