var sitePages = [
    {
        keyword: "home",
        link: "home.html"
    },
    {
        keyword: "beginner",
        link: "beginner.html"
    },
    {
        keyword: "basic routines",
        link: "basicroutines.html"
    },
    {
        keyword: "elliptical",
        link: "elliptical.html"
    },
    {
        keyword: "exercise bikes",
        link: "exercisebikes.html"
    },
    {
        keyword: "killer",
        link: "killer.html"
    },
    {
        keyword: "calendar",
        link: "calendar.html"
    },
    {
        keyword: "cardio",
        link: "screens.html"
    },
    {
        keyword: "profile",
        link: "calendar.html"
    },
    {
        keyword: "treadmill",
        link: "treadmill.html"
    },
    {
        keyword: "weight lifting",
        link: "weightlifting.html"
    },
    {
        keyword: "leg",
        link: "leg.html"
    }
]

//firebase config
var firebaseConfig = {
    apiKey: "AIzaSyCgyH2DoUf62eE5_4ynCs1sgDVbwNnjYKo",
    authDomain: "warmup-app.firebaseapp.com",
    databaseURL: "https://warmup-app.firebaseio.com",
    projectId: "warmup-app",
    storageBucket: "warmup-app.appspot.com",
    messagingSenderId: "579071689102",
    appId: "1:579071689102:web:592463cf43e9e533b764df",
    measurementId: "G-LTVSFPYGCC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

function searchWebsite(){
    var searchInput = document.getElementById("search").value;
    for (i = 0; i < sitePages.length; i++ ){
        if( 0 == searchInput.localeCompare(sitePages[i].keyword)){
            window.location = sitePages[i].link;
            return;
        }
    }
    alert("No webpages match. Try searching again.");
}

function checkLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(userExists(username)){ //user exists, check for password
        if(usernameMatchesPassword()){
            login();
        }
        else{
            console.log("username and password do not match");
        }
    }
    else{
        console.log("username does not exist");
    }

            
}

function createAccount(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    if(userExists(username)){ //user exists, can't make acc
        console.log("username already exists");
    }   
    else{ //user doesn't exist, make acc
        addNewUser(username, email, password);
        window.location.href = "home.html";
    }
}

function addNewUser(username, email, password) {
    firebase.database().ref('users/' + username).set({
      email: email,
      password : password
    });
  }

  function userExists(value){
    firebase.database().ref().child("users").orderByChild("username").equalTo(username_here).on("value", function(snapshot) {
        if (snapshot.exists()) {
             return true;
        }else{
            return false;
          }
        });
    }

    function usernameMatchesPassword{
        //TODO
        return true;
    }

    function login(){
        //TODO
        return;
    }

    function completedWorkOut(){
        //TODO add 35 points to exp

    }