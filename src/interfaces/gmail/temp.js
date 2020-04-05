const { calendar } = require('./calendar');
const { calendar_id } = require('./config.json')

var cal = calendar.calendars.get({
  calendarId: calendar_id
}, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    //console.log(result.data); // or JSON.stringify(result.data)
  }
})


var list = calendar.calendarList.list(
  {},
  (err, result) => {
     if (err) {
      console.log(err);
    } else {
      //console.log(result.data); // or JSON.stringify(result.data)
      for(let i = 0; i < result.data.items.length; i++){
        console.log(result.data.items[i].summary + ' - ' + result.data.items[i].id)
      }
    }
  }
);

console.log(list);