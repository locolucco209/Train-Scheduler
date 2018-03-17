// Initialize Firebase
var config = {
  apiKey: "AIzaSyBhqheMtyiJiiCuukzFa7cexeJxdnh3rP8",
  authDomain: "train-time-2.firebaseapp.com",
  databaseURL: "https://train-time-2.firebaseio.com",
  projectId: "train-time-2",
  storageBucket: "train-time-2.appspot.com",
  messagingSenderId: "350430585322"
};
firebase.initializeApp(config);
// Create a variable to reference the database
var database = firebase.database();
var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = "";
var mydate = "";

// Capture Button Click
$("#add-user").on("click", function(event) {
  // Don't refresh the pfirstTrainTime!
  event.preventDefault();

  trainName = $("#trainName-input").val().trim();
  destination = $("#destination-input").val().trim();
  firstTrainTime = $("#firstTrainTime-input").val().trim();
  frequency = $("#frequency-input").val().trim();
  mydate = $("#firstTrainTime-input").val().trim();

  // Code in the logic for storing and retrieving the most recent user.
  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
  });
});

database.ref().on("child_added", function(snapshot) {

  // var m =snapshot.val().trainName;
  var a = snapshot.val().trainName;
  var b = snapshot.val().destination;
  var c = snapshot.val().firstTrainTime;
  var d = snapshot.val().frequency;
  var current = moment("19851031", "YYYYMMDD").fromNow(); // 6 years ago

  console.log(snapshot.val().trainName, snapshot.val().destination, snapshot.val().firstTrainTime, snapshot.val().frequency);
  addrow(a, b, c, d);

});
// database.ref().on("value", function (snapshot) {


/* $("#trainName-display").text("Train Name: " + snapshot.val().trainName);
 $("#destination-display").text("Destination: " + snapshot.val().destination);
 $("#firstTrainTime-display").text("Train Time: " + snapshot.val().firstTrainTime);*/
//  })
function addrow(a, b, c, d, e) {
  $("#mytable").append('<tr><td>' + a + '</td> <td>' + b + '</td><td>' + c + '</td><td>' + d + '</td></tr>');

  /*   var tr = $("<tr>"),
     td = $("<td>").appendTo(tr),
     input = $("input",{type:"text",value:"Enter some text"}).appendTo(td);
     tr.appendTo("#someTable tr");*/
}
// moment JS
/* $('#clock').fitText(1.3);

function update() {
  $('#trainName').html(moment().format('D. MMMM YYYY H:mm:ss'));
  $('#  destination').html(moment().format('D. MMMM YYYY H:mm:ss'));
  $('#firstTrainTime').html(moment().format('D. MMMM YYYY H:mm:ss'));
  $('#frequency').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1000);*/
