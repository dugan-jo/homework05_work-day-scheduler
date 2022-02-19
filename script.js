// VAR DECLARATIONS





var timeOfDay = [{
    time: '9 am',
    eventInput: "",
    id: 9
  },
  {
    time: '10 am',
    eventInput: "",
    id: "10"
  },
  {
    time: '11 am',
    eventInput: "",
    id: "11"
  },
  {
    time: '12 am',
    eventInput: "",
    id: "12"
  },
  {
    time: '1 pm',
    eventInput: "",
    id: "13"
  },
  {
    time: '2 pm',
    eventInput: "",
    id: "14"
  },
  {
    time: '3 pm',
    eventInput: "",
    id: "15"
  },
  {
    time: '4 pm',
    eventInput: "",
    id: "16"
  },
  {
    time: '5 pm',
    eventInput: "",
    id: "17"
  },
]


localStorage.getItem(eventTarget, JSON.stringify('savedObj'))
console.log(localStorage);


// APPENDTO - - START - - - - - - - - - - - - - - - - - - - - - - - 

var rootEl = $('.container');

for (var t = 0; t < timeOfDay.length; t++) {

  var textBlock = $('<div>');
  var tbText = $('<p></p>');
  var description = $('<textarea>');
  var saveBtn = $('<button>');

  textBlock.text(timeOfDay[t].time)
  // textBlock.attr('id', timeOfDay[t].id);
  saveBtn.attr('id', timeOfDay[t].id);
  description.attr('id', timeOfDay[t].id, )

  textBlock.addClass('time-block hour col-md-2')
  description.addClass('description col-md-8')
  saveBtn.addClass('saveBtn i col-md-2')

  textBlock.appendTo('.container');
  description.appendTo($('.container'));
  saveBtn.appendTo('.container');
};


// APPENDTO - - END - - - - - - - - - - - - - - - - - - - - - - - 

var currentTime = $('#currentDay');
var clickedSaveBtn;

currentTime.append(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(currentTime);

// CHANGING COLOR  - - START - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 
// 
function colorEl() {

  var hour = moment().hours();
  console.log(hour);

  $(".description").each(function () {

    var currentHour = parseInt($(this).attr('id'));
    console.log(currentHour);

    if (currentHour < hour) {
      $(this).addClass('past');
    } else if (currentHour === hour) {
      $(this).addClass('present')
    } else {
      $(this).addClass('future')
    }

  })
}
// CHANGING COLOR  - - END - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 
// 
// 
// SAVE BUTTON - - START - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 
// 


var userInput = [];
var eventTarget;
var savedObj = {};

function saveEl() {
  $('.saveBtn').click(function (event) {
    eventTarget = ($(this).attr('id'));
    console.log(eventTarget);
    $("textarea").each(function () {
      userInput = $(event.target).parent().children('.description').val()
      console.log(userInput)
      savedObj = {
        'key': eventTarget,
        'input': userInput
      }
    })
    localStorage.setItem(eventTarget, JSON.stringify(savedObj))
    console.log(savedObj);
    localStorage.getItem(eventTarget, JSON.stringify('savedObj'))
  })
};


// 
// 
// SAVE TO LOCAL STORAGE - - END - - - - - - - - - - - - - - - - - - - - - - - 

// function saveEl(e) {
//   $('.saveBtn').click(function (event) {
//     eventTarget = ($(this).attr('id'));
//     console.log(eventTarget);
//     $("textarea").each(function (e) {
//       userInput = $(event.target).parent().children('.description').val();
//       console.log(userInput)
//       savedObj = {
//         'key': eventTarget,
//         'input': userInput
//       }
//       localStorage.setItem(eventTarget, JSON.stringify(savedObj))
//       console.log(savedObj);
//     })
//     alert("All Data Saved")
//   })
// };

// localStorage.getItem( function().on(saveEl() {

//   localStorage.setItem(eventTarget, JSON.stringify(savedObj))
// })
  




colorEl();
saveEl();