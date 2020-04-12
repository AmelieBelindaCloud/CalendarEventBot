const InsertEventAction = require('../../application/calendar-actions')

let defaultEventStartTime = new Date()
defaultEventStartTime.setDate(defaultEventStartTime.getDay() + 6)

// Create a new event end date instance for temp uses in our calendar.
let defaultEventEndTime = new Date()
defaultEventEndTime.setDate(defaultEventEndTime.getDay() + 8)
defaultEventEndTime.setMinutes(defaultEventEndTime.getMinutes() + 45)

module.exports = { create: function({ calendar, calendar_id }) {
  	return Object.freeze({
		insertEvent,
		getEvent: () => {},
		listEvents: () => {},
		quickAdd: () => {},
		moveEvent: () => {},
		updateEvent: () => {},
		deleteEvent: () => {},
  	})

  	async function insertEvent({ 
		summary,
		location,
		description,
		colorId = 1,
		start = {
			dateTime: defaultEventStartTime,
			timeZone: 'America/Denver',
		},
		end = {
			dateTime: defaultEventEndTime,
			timeZone: 'America/Denver',
		}
	} = {}) {

		let gmail = calendar
		let gmailEvent = { 
			summary,
			location,
			description,
			colorId,
			start,
			end
		}

		let isBusy = await gmail.freebusy.query({
			resource: {
				timeMin: start.dateTime,
				timeMax: end.dateTime,
				timeZone: start.timeZone,
				items: [{ id: calendar_id }]
			}
		})
		.then((response) => {
			if (!response.data.calendars || response.data.calendars.length < 1) return 'No calendar could be found!'

			// Create an array of all events on our calendar during that time.
			var eventArr = response.data.calendars[calendar_id].busy
			if (eventArr.length !== 0) return true

			return false
		})
		.catch(error => {
			return error
		})

		if(isBusy) {
			return "Sorry I'm busy..."
		}
		
		// Not busy
		return gmail.events.insert({ 
			calendarId: calendar_id, 
			resource: gmailEvent 
		})
		.then((response, error) => {
			if (error) return error
			return 'Calendar event successfully created.'
		})
	}
	  
}}