/*
Selinde Tatum
CS324 Assignment 5a: Workshop Logic Implementation and Initial Poll
07/21/2024
This Addition adds choices and conditions within the registration in the html page in the registration section
 */

// Functions that validates workshops when the form is registered
function registerWorkshops() {

  // Adds event listener to the form
  document.querySelector("form").addEventListener("submit", function(event){

    // If form is valid
    let valid =true;

    // Stores error messages for invalid selections
    let message =" ";

    // Get selected values from the sessions
    const session1 = document.querySelector('input[name="session1"]:checked')?.value;
    const session2 = document.querySelector('input[name="session2"]:checked')?.value;
    const session3 = document.querySelector('input[name="session3"]:checked')?.value;

    // Conditions with the workshops chosen
    if (session1 === "Workshop B" && session2){
      valid=false;
      message="Invalid: Workshop covers session 1 and 2, therefore no workshops in session 2 may be chosen. ";
    }else if (session2 === "Workshop F " && (session3 !== "Workshop H" || !session3)){
      valid=false;
      message = "Invalid: if you choose  F,  must also take H.";

    }else if (session3 === "Workshop H" && session2 !== "Workshop F"){
      valid=false;
      message = "Invalid: cannot choose H unless you have chosen F.";
    }

    // If not valid display popup window and prevent form submission
    if(!valid){
      event.preventDefault();

      // Pop Up window that shows error message
      const popupWindow= window.open("", "popup", "width=500,height=400, " +
        "scollbars= yes, resizable=yes");

      // Html content displayed in pop window
      popupWindow.document.write(`
<!DOCTYPE html>
<html lang="en">

        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

          <title> Invalid Workshop Selection</title>
          <link rel="stylesheet" type="text/css" href="css/popup.css">
          </head>
      <body>
      <div class="popup-container">
        <h2> Invalid Workshop Selection</h2>
        <p> ${message}</p>
        <button onclick="window.close()">Close</button>
      </div>
      </body>
</html>
        `);
          popupWindow.document.close();
        popupWindow.focus();
    }
  });
}
document.addEventListener('DOMContentLoaded', registerWorkshops);
