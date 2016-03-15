exports.update = function () {
  var dateTime = null;
  var date = moment(new Date());
  dateTime = $('#currentTime').html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
  return dateTime;
};
