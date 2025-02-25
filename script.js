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
    case "smallindustry":
      myframe.src = "smallindustry.html";
      break;
    case "mediumindustry":
      myframe.src = "mediumindustry.html";
      break;
    case "Domestic_prepaid":
      myframe.src = "domestic_prepaid.html";
      break;
    case "streetlight":
      myframe.src = "streetlight.html";
      break;
    default:
      break;
  }
});

function advanced(){
  switch (dropdown.value) {
    case "Domestic":
      myframe.src = "advanceddomestic.html";
      break;
    case "Commercial and General Single Phase":
      myframe.src = "advancedgeneral1phase.html";
      break;
    case "Commercial and General Three Phase":
      myframe.src = "advancedgeneral3phase.html";
      break;
    case "smallindustry":
      myframe.src = "advancedsmallindustry.html";
      break;
    case "mediumindustry":
      myframe.src = "advancedmediumindustry.html";
      break;
    case "Domestic_prepaid":
      myframe.src = "advanceddomestic_prepaid.html";
      break;
    case "streetlight":
      myframe.src = "advancedstreetlight.html";
      break;
    default:
      break;
  }
}