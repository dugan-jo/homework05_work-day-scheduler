// VAR DECLARATIONS

var timeOfDay = [{
    time: '9 am',
    eventInput: "",
    id: 9
  },
  {
    time: '10 am',
    eventInput: "",
    id: 10
  },
  {
    time: '11 am',
    eventInput: "",
    id: 11
  },
  {
    time: '12 am',
    eventInput: "",
    id: 12
  },
  {
    time: '1 pm',
    eventInput: "",
    id: 13
  },
  {
    time: '2 pm',
    eventInput: "",
    id: 14
  },
  {
    time: '3 pm',
    eventInput: "",
    id: 15
  },
  {
    time: '4 pm',
    eventInput: "",
    id: 16
  },
  {
    time: '5 pm',
    eventInput: "",
    id: 17
  },
]


    

// APPENDTO - - START - - - - - - - - - - - - - - - - - - - - - - - 

var rootEl = $('.container');

for (var t = 0; t < timeOfDay.length; t++) {

  rowEl = $('<div>')
  rowEl.addClass(' row hourRow row.custom col-12')
  rowEl.attr('id', timeOfDay[t].id);
  rowEl.appendTo('.container')  
  

  var textBlock = $('<div>');
  var tbText = $('<p></p>');
  var description = $('<textarea>');
  var saveBtn = $('<button>');

  textBlock.text(timeOfDay[t].time)
  saveBtn.attr('id', timeOfDay[t].id);
  description.attr('id', timeOfDay[t].id)

  textBlock.addClass('time-block hour col-2')
  description.addClass('description col-8 ')
  saveBtn.addClass('saveBtn i col-2')
  
  textBlock.appendTo(rowEl);
  description.appendTo($(rowEl));
  saveBtn.appendTo(rowEl);
};




// APPENDTO - - END - - - - - - - - - - - - - - - - - - - - - - - 

var currentTime = $('#currentDay');
// var clickedSaveBtn;

currentTime.append(moment().format('MMMM Do YYYY, h:mm:ss a'));
// console.log(currentTime);

$('.saveBtn').append('SAVE \n💾')

// CHANGING COLOR  - - START - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// 
// 
function colorEl() {

  var hour = moment().hours();
  // console.log(hour);

  $(".description").each(function () {

    var currentHour = parseInt($(this).attr('id'));
    // console.log(currentHour);

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

localStorage.getItem('eventTarget');

$('textarea').each(function () {
  var text = ($(this).val());
  console.log(text);
  if (text) {
    text = localStorage('eventTarget')
  }
})

  rootEl.on('click', '.saveBtn', '.description', function (event) {

    event.preventDefault();

    eventTarget = ($(this).attr('id'));
    console.log('time: ' + eventTarget);

    userInput = $(event.target).parent().children('.description').val()
    console.log('user input: ' + userInput)

    // userObj = {
    //   'key': eventTarget,
    //   'value':  userInput
    // }

    localStorage.setItem(eventTarget, userInput)
    console.log(localStorage);
})

colorEl()