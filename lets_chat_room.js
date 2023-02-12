var firebaseConfig = {
      apiKey: "AIzaSyCq8LkvdabOTRLYFUkESU_sJrFtrDygGHk",
      authDomain: "kwitter-6c5a5.firebaseapp.com",
      databaseURL: "https://kwitter-6c5a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-6c5a5",
      storageBucket: "kwitter-6c5a5.appspot.com",
      messagingSenderId: "959856072563",
      appId: "1:959856072563:web:fc5b128abbeeb1ec479706",
      measurementId: "G-LFGT5KQXPT"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

    var name = localStorage.getItem("user_name");

    var email = localStorage.getItem("email");

    var password = localStorage.getItem("password");

    var nextScreen = "login.html";

    localStorage.setItem("nextScreen", nextScreen);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function displayName() {

      document.getElementById("welcomeMessage").innerHTML = "Welcome, " + name;
}

function logout() {
window.location = "loading.html";
}