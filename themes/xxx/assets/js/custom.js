/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */

/*$(function() {
    $('.calendar').datepicker({dateFormat: 'dd.mm.yy', minDate: 1});
});*/

$(function() {
  var holidays = [
    '23.12.2020',
    '24.12.2020',
    '25.12.2020',
    '26.12.2020',
    '27.12.2020',
    '28.12.2020',
    '29.12.2020',
    '30.12.2020',
    '31.12.2020',
    '1.1.2021',
    '2.1.2021',
    '3.1.2021',
    '4.1.2021'
  ];
  function noSundaysOrHolidays(date) {
    var day = date.getDay();
    if (day != 0) {
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();
      for (i = 0; i < holidays.length; i++) {
        if($.inArray((d) + '.' + (m+1) + '.' + y, holidays) != -1) {
          return [false];
        }
      }
      return [true];
    } else {
      return [day != 0, ''];
    }
  }

  $('.calendar').datepicker({
    onClose: function(dateText, inst) { 
        $(this).attr("disabled", false);
    },
    beforeShow: function(input, inst) {
      $(this).attr("disabled", true);
    },
    beforeShowDay: noSundaysOrHolidays,
    minDate: 0,
    dateFormat: 'dd.mm.yy',
  });
});
