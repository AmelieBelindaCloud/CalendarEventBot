export default function calendarFactory ({ url }) {
    return function create ({
        url,
        id = id.makeId(),
        events = []
    } = {}) {

        return Object.freeze({
            getId: () => id,

            getEvents: () => events
        })
    }
}