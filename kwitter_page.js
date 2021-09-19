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

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_nmae");
  user_name=localStorage.getItem("room_nmae");

  function send()
  {
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
        document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       
    firebase_message_id = childKey;
       message_data = childData;

       console.log(firebase_massage_id);
       console.log(message_data);
       name=massage_data['name'];
       massage=massage_data['massage'];
       like=massage_data['like'];

       name_with_tag="<h4> " + name + "<img class='user_tick' src='tick.jpg'> </h4>";
       massage_with_tag="<h4 calss='massage_h4'> " + massage + "</h4>";
       like_button="<button class='btn btn-warning' id="+firebase_massage_id+"value="+like+"onclick='updateLike(this.id)'>";
       span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> LIKE: "+ like+"</span></button><hr>";
       row=name_with_tag+massage_with_tag+like_button+span_with_tag;
       document.getElementById("output").innerHTML+=row;
       
    } });  }); }
    
getData();

function updateLike(massage_id)
{
    console.log("clicked on like button - " + massage_id);
    button_id=massage_id;
    likes=document.getElementById(button_id).value;
    update_likes=Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(massage_id).update({
          like :updated_likes
    });
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
}