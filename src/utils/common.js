export const getFormattedDateFromUtcDate = (utcDate) => {
  const date = new Date(utcDate);
  return `${date.getDate()}
        ${monthNames[date.getMonth()]},
        ${date.getFullYear()}  ${date.getUTCHours()} : ${date.getUTCMinutes()}
        // ${date.getUTCHours()>12 ? 'PM' : 'AM'  }`;
};

export function convertTZ(date, tzString) {
  return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {timeZone: tzString}));   
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];