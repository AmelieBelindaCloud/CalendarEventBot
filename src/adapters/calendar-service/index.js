const calendar = require('../../interfaces/gmail')
const CalendarServiceFactory = require('./calendar-service')

const { calendar_id } = require('../../interfaces/gmail/config.json')

const CalendarService = CalendarServiceFactory.create({ 
    calendar, 
    calendar_id
 })


module.exports = Object.freeze(CalendarService)