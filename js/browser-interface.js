var update = require('./../js/clock-interface.js').update;

var datetime = null,
        date = null;

$(document).ready(function(){
    setInterval(update, 1000);
});
