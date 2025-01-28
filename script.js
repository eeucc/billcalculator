//Select type of customer
const dropdown = document.getElementById("type_of_customer");
const myframe = document.getElementById("myFrame");
dropdown.addEventListener("change", function () {
  let customerType = this.value;
  switch (customerType) {
    case "Domestic":
      myframe.src = "domestic.html";
      break;
    case "Commercial and General Single Phase":
      myframe.src = "general1phase.html";
      break;
    case "Commercial and General Three Phase":
      myframe.src = "general3phase.html";
      break;
    case "Industry":
      myframe.src = "industry.html";
      break;
    default:
      break;
  }
});