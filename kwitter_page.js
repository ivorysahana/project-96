//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC3C4zfQvKmv3a9cmCRUcvuhTqGOrs_TEI",
      authDomain: "kwitter-7d9f6.firebaseapp.com",
      databaseURL: "https://kwitter-7d9f6-default-rtdb.firebaseio.com",
      projectId: "kwitter-7d9f6",
      storageBucket: "kwitter-7d9f6.appspot.com",
      messagingSenderId: "96213182426",
      appId: "1:96213182426:web:2208cfa3b99f8f834c42e3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
