module.exports = { create: ({ /*Dependencies*/ }) => {
    return class Event {
        constructor({
            title,
            organizer,
            dateFrom,
            dateTo,
            timeStart,
            timeEnd
        } = {}) {
            let id = 2;
            return Object.freeze({
                getId: () => id,
    
                getTitle: () => title,
                getOrganizer: () => organizer,
                getDateFrom: () => dateFrom,
                getDateTo: () => dateTo,
                getTimeStart: () => timeStart,
                getTimeEnd: () => timeEnd
            })
        }
    }
}}