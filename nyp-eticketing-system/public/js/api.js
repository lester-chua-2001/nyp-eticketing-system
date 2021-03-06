promiseAjax = (uri, method, data, dataType = 'json', contentType = 'application/json') => {
    if (data) {
        if (typeof data === 'object') {
            data = JSON.stringify(data);
        }
    } else {
        data = null;
    }

    return new Promise((resolve, reject) => {
        $.ajax({
            type: method,
            url: uri,
            dataType: dataType,
            contentType: contentType,
            data: data,
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                if (error.status == 200) {
                    resolve(true);
                } else {
                    reject(error);
                }
            },
        }).fail(function (jqXHR, textStatus, errorThrown) {
            reject(errorThrown);
        });
    });
};

const baseRoute = "/api";

async function flashSuccess(message) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/success-flash`, 
                'POST', 
                {
                    message: message,
                }
            );
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function flashError(message) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/error-flash`, 
                'POST', 
                {
                    message: message,
                }
            );
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function createVenue(name, map) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/create-venue`, 
                'POST', 
                {
                    name: name,
                    seatMap: map
                }
            );
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};

async function getAllVenues() {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(`${baseRoute}/get-all-venues`, 'GET', null);
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function updateVenue(venue) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/update-venue`, 
                'POST', 
                {
                    venue: venue
                }
            );
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};

async function deleteVenue(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/delete-venue`, 
                'POST', 
                {
                    id: id
                }
            );
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};

async function getAllHelpers() {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(`${baseRoute}/get-all-helpers`, 'GET', null);
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function createEvent(name, seatMap, startDateTime, seatsPerReservation, prioritiseBackRows, venueId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/create-event`, 
                'POST', 
                {
                    name: name,
                    seatMap: seatMap,
                    startDateTime: startDateTime,
                    seatsPerReservation: seatsPerReservation,
                    prioritiseBackRows: prioritiseBackRows,
                    venueId: venueId,
                }
            );
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function updateEvent(eventId, name, seatMap, startDateTime, seatsPerReservation, prioritiseBackRows, venueId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/update-event`, 
                'POST', 
                {
                    eventId: eventId,
                    name: name,
                    seatMap: seatMap,
                    startDateTime: startDateTime,
                    seatsPerReservation: seatsPerReservation,
                    prioritiseBackRows: prioritiseBackRows,
                    venueId: venueId,
                }
            );
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function getEventDetails(eventId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(`${baseRoute}/events/${eventId}`, 'GET');
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function getEventDetailsForHelper(eventId, helperId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/helpers/${helperId}/events/${eventId}`, 'GET');

            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function createEventSeatTypes(seatTypeArray) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/create-event-seat-types`, 
                'POST', 
                {
                    seatTypes: seatTypeArray
                }
            );
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};

async function updateEventSeatTypes(eventId, seatTypeArray) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/update-event-seat-types`, 
                'POST', 
                {
                    eventId: eventId,
                    seatTypes: seatTypeArray
                }
            );
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};

async function createEventHelpers(eventHelperArray) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/create-event-helpers`, 
                'POST', 
                {
                    eventHelpers: eventHelperArray
                }
            );
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};

async function updateEventHelpers(eventId, eventHelperArray) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/update-event-helpers`, 
                'POST', 
                {
                    eventId: eventId,
                    eventHelpers: eventHelperArray
                }
            );
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};

async function getEventHelpers(eventId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/get-event-helpers`, 
                'POST', 
                {
                    eventId: eventId
                }
            );
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function createEventAttendee(name, phoneNumber, eventId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/create-event-attendee`, 
                'POST', 
                {
                    name: name,
                    phoneNumber: phoneNumber,
                    eventId: eventId
                }
            );
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function getEventAttendee(phoneNumber, eventId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/get-event-attendee`, 
                'POST', 
                {
                    phoneNumber: phoneNumber,
                    eventId: eventId
                }
            );
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

async function createEventSeatReservation(seatNumber, eventId, attendeeId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/create-event-seat-reservation`, 
                'POST', 
                {
                    seatNumber: seatNumber,
                    eventId: eventId,
                    attendeeId: attendeeId,
                }
            );
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};

// async function* createEventSeatReservations(seatNumbers, eventId, attendeeId) {
//     for (let i = 0; i < seatNumbers.length; i++) {
//         try {
//             const res = await promiseAjax(
//                 `${baseRoute}/create-event-seat-reservation`, 
//                 'POST', 
//                 {
//                     seatNumber: seatNumbers[i],
//                     eventId: eventId,
//                     attendeeId: attendeeId,
//                 }
//             );
//             yield res.data;
//         } catch (error) {
//             throwException(error);
//         }
//     }
// }

async function sendReservationConfirmSMS(attendeeId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(
                `${baseRoute}/sms-reservation-confirm`, 
                'POST', 
                {
                    attendeeId: attendeeId
                }
            );
            resolve(res.data);
        } catch (error) {
            reject(error);
        }
    });
};




callTestApi = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await promiseAjax(`${baseRoute}/test`, 'GET', null);
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};