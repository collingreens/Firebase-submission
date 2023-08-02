  

 const firebaseConfig = {
    apiKey: "AIzaSyCmW42ARbl3bqUa6nbVbW6K89hj4qN-kcY",
    authDomain: "portfolio-database-22182.firebaseapp.com",
    databaseURL: "https://portfolio-database-22182-default-rtdb.firebaseio.com",
    projectId: "portfolio-database-22182",
    storageBucket: "portfolio-database-22182.appspot.com",
    messagingSenderId: "86495067007",
    appId: "1:86495067007:web:4f2f788cfeffc9288cb84a",
    measurementId: "G-FZK8YWPRLF"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  const contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm (e){
    e.preventDefault();

    var firstName = getElementVal('firstName');
    var lastName = getElementVal('lastName');
    var phone = getElementVal('phone');
    var email = getElementVal('email');
    var reason = getElementVal('reason');

    saveMessage(firstName, lastName, phone, email, reason);

    // enable alert !!Needs work when I get more time!!
    document.querySelector('.alert_form').style.display = "block";

    // also need to add a timeout for alert box

    //reset form
    document.getElementById("contactForm").reset();
  }

  const saveMessage = (firstName, lastName, phone, email, reason) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        reason: reason,
    })
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };