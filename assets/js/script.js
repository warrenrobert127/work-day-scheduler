// Puts date in header
var getCurrentDate = function () {
  var todaysDate = moment().format("dddd, MMMM Do");
  console.log(todaysDate);
  $("#currentDay").text(todaysDate);

  // local storage
  $(".hour-block").each(function () {
    var id = $(this).attr("id");
    var text = localStorage.getItem(id);

    if (text !== null) {
      $(this).children(".text").val(text);
    }
  });
};

getCurrentDate();

var saveBtn = $(".saveBtn");

$(".saveBtn").click(function () {
  var hour = $(this).parent().attr("id");
  console.log(hour);
  var text = $(this).siblings(".text").val();
  console.log(text);
  localStorage.setItem(hour, text);
});


function pastPresentFuture() {
  // check if index is equal to, less than , or greater than the current hour
  var currentHour = moment().hour();
  //itereate thru hours bock to check index

  $(".hour-block").each(function () {
    //change ID to an int
    var compareHour = parseInt($(this).attr("id"));
    console.log(compareHour);
    if (compareHour < currentHour) {
      $(this).addClass("past");
    } else if (compareHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("futures");
    }
  });
}

pastPresentFuture();
