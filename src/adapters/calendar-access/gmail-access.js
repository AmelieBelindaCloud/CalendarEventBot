const InsertEventAction = require('../../application/calendar-actions')

let defaultEventStartTime = new Date()
defaultEventStartTime.setDate(defaultEventStartTime.getDay() + 7)

// Create a new event end date instance for temp uses in our calendar.
let defaultEventEndTime = new Date()
defaultEventEndTime.setDate(defaultEventEndTime.getDay() + 10)
defaultEventEndTime.setMinutes(defaultEventEndTime.getMinutes() + 45)

module.exports = { create: function({ gmailCalendar, calendar_id }) {
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

		let gmail = gmailCalendar
		let gmailEvent = { 
			summary,
			location,
			description,
			colorId,
			start,
			end
		}

		// Check if we a busy and have an event on our calendar for the same time.
		gmail.freebusy.query({
			resource: {
				timeMin: start.dateTime,
				timeMax: end.dateTime,
				timeZone: start.timeZone,
				items: [{ id: calendar_id }]
			}
		}, (error, result) => {
			if (error) return console.error('Free Busy Query Error: ', error)
			if (!result.data.calendars || result.data.calendars.length < 1) return console.error("No calendar could be found!")

			// Create an array of all events on our calendar during that time.
			var eventArr = result.data.calendars[calendar_id].busy

			if (eventArr.length !== 0) return console.log(`Sorry I'm busy...`)

			// Not busy
			return gmail.events.insert({ 
				calendarId: calendar_id, 
				resource: gmailEvent 
			}, (error) => {
				if (error) return console.error('Error Creating Calender Event:', error)

				return console.log('Calendar event successfully created.')
			})
		})
  	}
}}