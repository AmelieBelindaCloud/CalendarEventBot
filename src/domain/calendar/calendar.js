export default function calendarFactory ({ /*Dependencies*/ }) {
    return function create ({
        events
    } = {}) {

        let id = 1

        return Object.freeze({
            getId: () => id,

            getEvents: () => events
        })
    }
}