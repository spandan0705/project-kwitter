var firebaseConfig = {
    apiKey: "AIzaSyA3lEf2qf60C35Q1FByj9xQxk6Q-WtxshQ",
    authDomain: "let-s-chat-e947d.firebaseapp.com",
    databaseURL: "https://let-s-chat-e947d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-e947d",
    storageBucket: "let-s-chat-e947d.appspot.com",
    messagingSenderId: "836415319153",
    appId: "1:836415319153:web:a4c2085a4748dd7fe9ffd0",
    measurementId: "G-87SZ8L1TVQ"
  };

  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebrse.database().ref("/").child(room_name).update({purpose:"added room name"});
    localStorage.setItem("room_name " , room_name);
   window.location("kwitter_page.html");
}


  function getData() {firebase.database().ref("/").on('value',function(snapshot) 
{document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) 
{childKey = childSnapshot.key;

  Room_names = childKey;
      
  console.log("Room Name - " + Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML+=row;

});});}
getData();

function rediectToRoomName()
{
  room_name=document.getElementById("room_name").value;
  localStorage.setItem("room_name " , room_name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}