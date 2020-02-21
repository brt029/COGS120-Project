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

function searchWebsite(){
    var searchInput = document.getElementById("search").value;
    for (i = 0; i < sitePages.length; i++ ){
        if( 0 == searchInput.localeCompare(sitePages[i].keyword)){
            window.location = sitePages[i].link;
            console.log(window.location);
            return;
        }
    }
    alert("No webpages match. Try searching again.");
}

function checkLogin(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
}

// //to make enter do something in input field
// var input = document.getElementById("search");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
// //    document.getElementById("button").click();
//    searchWebsite();
//   }
// });
