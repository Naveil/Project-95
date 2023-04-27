var firebaseConfig = {
    apiKey: "AIzaSyDk9uX9eh51qxol_oFJyWTCa8CKkgn8hzk",
    authDomain: "project-94-7a456.firebaseapp.com",
    databaseURL: "https://project-94-7a456-default-rtdb.firebaseio.com",
    projectId: "project-94-7a456",
    storageBucket: "project-94-7a456.appspot.com",
    messagingSenderId: "177011366708",
    appId: "1:177011366708:web:f80fa9dd020d976a762361",
    measurementId: "G-J9P7RZ99WL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = Kwitter_page.html;
}

function getData(){
  firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name-" + Room_names);
row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

//End code
});});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}