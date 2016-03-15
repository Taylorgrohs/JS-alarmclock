var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date());
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function() {

  $('#currentTime').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  datetime = $('#currentTime');
    update();
    setInterval(update, 1000);
});
