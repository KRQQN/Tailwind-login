document.querySelector("#passwordInput").addEventListener("keyup", () => {
  if (passwordInput.value.length < 5) {
    strMeter.value = 0;
  } else {
    const strMeter = document.querySelector("#strMeter");

    const lowercase = passwordInput.value.match(/[a-z]/g);
    const uppercase = passwordInput.value.match(/[A-Z]/g);
    const number = passwordInput.value.match(/[0-9]/g);
    const specialChar = passwordInput.value.match(
      /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g);

    // 1 char type match
    if (lowercase || uppercase || number || specialChar) {
      strMeter.value = 1;
    }
    // 2 char type match
    if (
      (lowercase && uppercase) ||
      (lowercase && number) ||
      (lowercase && specialChar) ||
      (uppercase && number) ||
      (uppercase && specialChar) ||
      (number && specialChar)
    ) {
      strMeter.value = 2;
    }
    // 3 char type match
    if (lowercase && uppercase && number || 
      lowercase && uppercase && specialChar ||
      number && specialChar && lowercase ||
      number && specialChar && uppercase) {
        strMeter.value = 3;
      } 

    // All char type match
    if (lowercase && uppercase && number && specialChar) {
      strMeter.value = 4;
    }
  }
});

document.querySelector('#createUserForm').addEventListener("submit", (e) => {
  e.preventDefault();

  const qs = document.querySelector.bind(document);
  const error = qs("#error");

  if(qs("#passwordInput").value === qs("#confPassword").value){
    error.innerText = "";
    
    const user = {
      fName: qs("#fName").value,
      lName: qs("#lName").value,
      Username: qs("#uName").value,
      Email: qs("#eMail").value,
      Password: qs("#passwordInput").value,
    };
    return user.fName && user.lName && user.Username && user.Email && user.Password ? console.log(user) : console.log('There are empty fields');
  } else {

    qs("#passwordInput").classList.add('border-red-600');
    qs("#confPassword").classList.add('border-red-600');

    const noMatch = document.createElement("p")
    noMatch.innerText = "Lösenorden matchar inte"
    
    
    setTimeout( () => {
      qs("#passwordInput").classList.add('border-clightblue');
      qs("#confPassword").classList.add('border-clightblue');
    }, 2000);

    error.append(noMatch)
  }
});

document.querySelector("#login").addEventListener("submit", (e) => {
  e.preventDefault();

  const qs = document.querySelector.bind(document);
  const userCredentials = {
    username: qs("#Username").value,
    password: qs("#Password").value,
  };
  return userCredentials.username && userCredentials.password ? console.log(userCredentials) : console.log('There are empty fields');
});