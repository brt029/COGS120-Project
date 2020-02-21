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
  firebase.analytics();

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

    //change
    window.location = "home.html";
}

function createAccount(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    //change
    window.location = "home.html";
}

function writeUserData(userId, name, email, password) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      password : password
    });
  }
