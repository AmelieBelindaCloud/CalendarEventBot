const { google } = require('googleapis');
const { OAuth2 } = google.auth

const { warn } = require('../../utils/logger');
const { client_id, client_secret, refresh_token, api_version } = require('./config.json')

const oAuth2Client = new OAuth2(
  client_id,
  client_secret
)

oAuth2Client.setCredentials({
  refresh_token
})

const calendar = google.calendar({
  version: getVersion(),
  auth: oAuth2Client
})

module.exports = Object.freeze({ calendar });


function getVersion() {
  let version = api_version;

  let calendarVersions = google.getSupportedAPIs().calendar;
  let newest = calendarVersions[calendarVersions.length - 1];
  if (version != newest) { warn(`Used calendar version ${version} is outdated. Newest version is ${newest}.`); }

  return version;
}