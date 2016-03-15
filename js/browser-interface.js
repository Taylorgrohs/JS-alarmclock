var update = require('./../js/clock-interface.js').update;
// var setAlarm = require('./../js/alarm-interface.js').setAlarm;
// var alarmChecker = require('./../js/alarm-interface.js').alarmChecker;

var myVar;
setAlarm = function(input) {
  var save = input;
  var currentTime = moment().format('h:mm');
  if(save.toString() === currentTime.toString())
  {
    return $(".jumbotron").css("background-color", "red");
  }
}
alarmChecker = function (input) {
    myVar = setInterval(setAlarm(input), 1000);
}
$(document).ready(function(){
  var input = null;

    setInterval(update, 1000);
    $('#alarm').submit(function(event){
      event.preventDefault();
      input = $('#set-alarm').val();
      alarm = setAlarm(input);

      $('#alarm-set').append("<p>"+input+"</p>");
      setInterval(function(){
        var currentTime = moment().format('h:mm');
        if(input === currentTime)
        {
          return $(".jumbotron").css("background-color", "red");
        }
      }, 1000);
    });

  });
