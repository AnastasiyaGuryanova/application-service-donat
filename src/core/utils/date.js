import moment from 'moment';
import 'moment-precise-range-plugin';
moment.locale('ru');

export const getTodayDateFormat = (date) => {
    return moment(date).subtract(10, 'days').calendar();
}

export const getTodaysTimeFormat = (date) => {
    return moment(date).format('LTS');
}

export const getTodayDateAndTime = (date) => {
    return getTodayDateFormat(date) + ', ' + getTodaysTimeFormat(date);
}
