
document.addEventListener('DOMContentLoaded', ()=> {
  document.getElementById('registrationForm').addEventListener('submit',
    function (event) {
      event.preventDefault();

      //Form values
      let idNum = document.getElementById('idNum').value;
      const title = document.getElementById('title').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const address = document.getElementById('address').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const state = document.getElementById('state').value;
      const zip = document.getElementById('zip').value;
  //If no id is entered, give it default id
      if (!idNum){
    idNum = '123456';
  }

      //String of user info for cookie
      const userInfo = `title: ${title} |firstname: ${firstName} | lastname: ${lastName} | address: ${address}  +
        'phone:${phone} | email: ${email} | state: ${state} |  zip: ${zip} `;

      //Store cookie using conference id num
      document.cookie = `${idNum} =${userInfo}; path=/`;

      alert('Registration information saved!');


    });

//Inputs id
document.getElementById('idNum').addEventListener('input',function(){
  //Gets value of the idNum
  const idNum = this.value.trim();

  //if id is 6 digits, retrieve cookie
  if(idNum.length === 6){
    const userInfo = getCookie(idNum);

    //If cookie exists parse info string from cookie into object
    if(userInfo){
      const userParse = parseUserInfo(userInfo);

      //Match to fields in the form
      document.getElementById('title').value = userParse.title ||  '';
      document.getElementById('firstName').value = userParse.firstName ||  '';
      document.getElementById('lastName').value = userParse.lastName || '';
      document.getElementById('address').value = userParse.address ||  '';
      document.getElementById('phone').value = userParse.phone ||  '';
      document.getElementById('email').value = userParse.email ||  '';
      document.getElementById('state').value = userParse.state ||  '';
      document.getElementById('zip').value = userParse.zip ||  '';

    }else{
      alert('No registration info found for this id Number')
    }
  }
});

//Function that Gets the cookie through name
function getCookie(name){
  const cookieArr = document.cookie.split(';');

  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');

    if(name === cookiePair[0].trim()){
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

//Function that parses user info string into object
function parseUserInfo(userInfo) {
  return userInfo.split('|').reduce((acc, item) => {
    const [key, value] = item.split(':');
    acc[key] = value.trim();
    return acc;
  }, {});
}
});
