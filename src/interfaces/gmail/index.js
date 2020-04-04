const {warn} = require('../../utils/logger');
const {google} = require('googleapis');

const version =  getVersion();

// login to my calendar



// add foreign calendar to my calendars



// access foreign calendar




function getVersion() {
    let version = 'v1';

    let calendarVersions = google.getSupportedAPIs().calendar;
    let newest = calendarVersions[calendarVersions.length - 1];
    if (version != newest) { warn(`Used calendar version ${version} is outdated. Newest version is ${newest}.`); }

    return version;
}