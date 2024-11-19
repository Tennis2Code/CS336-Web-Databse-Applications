/*
Selinde Tatum
CS324 Assignment 5a: Workshop Logic Implementation and Initial Poll
07/21/2024
This script handles user interactions for a voting form.It alerts users
when they submit a vote or fail to complete the form. It also updates vote counts using local storage.
 */





document.addEventListener('DOMContentLoaded', () => {
  // Attach an event listener to the form submission
  document.getElementById('pollForm').addEventListener('submit', function
    (event){

    // Prevent default form submission behavior
    event.preventDefault();

    // Gets nominees value
    const nominee = document.querySelector('input[name= "nominee"]:checked');

    if (nominee){
      // Gets vote count from local storage by generating key for storing vote counts
      const nomineeCount = nominee.value.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
      let currentVotes = parseInt(localStorage.getItem(nomineeCount) || '0', 10);
      currentVotes++;

      // Update local storage with new vote count
      localStorage.setItem(nomineeCount, currentVotes);

      // Update display with new vote count
      document.getElementById(nomineeCount + 'Votes').textContent = currentVotes;
      alert(`Thank you for voting for: ${nominee.value}`);
    }else{

      // Alert user to select a nominee if not chosen
      alert('Please select nominee before voting.');
    }
  });
});

// Loads votes from local storage and displays on the page
function loadVotes(){
  const nominees = ['TheLangerfieldsClub', 'TheRichlandClub', 'TheBelmont'];

  nominees.forEach(nominee => {

    // Retrieves vote count or default to 0
    const votes = localStorage.getItem(nominee) || '0';

    //Updates page on display
    document.getElementById(nominee + 'Votes').textContent = votes;
  })
}
