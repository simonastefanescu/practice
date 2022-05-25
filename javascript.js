

const showFirstmenu = document.querySelector(".firstmenu");
const showFirstDetails=document.querySelector(".firstDetails");

function ShowDescriptionFirst() {
  if (showFirstmenu.style.height === "30px") {
    showFirstmenu.style.height = "150px"
    showFirstDetails.style.opacity="1"
  } else {
    showFirstmenu.style.height = "30px"
    showFirstDetails.style.opacity="0" }
  }

const showSecondMenu = document.querySelector(".secondmenu");
const showSecondDetails=document.querySelector(".secondDetails");

  function ShowDescriptionSecond() {
    if (showSecondMenu.style.height === "30px") {
      showSecondMenu.style.height = "150px"
      showSecondDetails.style.opacity="1"
    } else {
      showSecondMenu.style.height = "30px"
      showSecondDetails.style.opacity="0" }
    }

const showDessertMenu = document.querySelector(".dessertmenu");
const showDessertDetails=document.querySelector(".dessertDetails");

    function ShowDescriptionDessert() {
      if (showDessertMenu.style.height === "30px") {
        showDessertMenu.style.height = "150px"
        showDessertDetails.style.opacity="1"
      } else {
        showDessertMenu.style.height = "30px"
        showDessertDetails.style.opacity="0" }
      }