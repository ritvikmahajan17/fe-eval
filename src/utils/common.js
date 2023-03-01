export const getFormattedDateFromUtcDate = (utcDate) => {
  const date = new Date(utcDate);
  return `${date.getDate()}
        ${monthNames[date.getMonth()]},
        ${date.getFullYear()}  ${date.getUTCHours()} : ${date.getUTCMinutes()}`;
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

export const  getTimezone=(timezone)=>{
  if(timezone==='America/Los_Angeles')
    return 'PST';
  else if(timezone==='US/Central')
    return 'CT';
  else if(timezone==='US/Eastern')
    return 'EST';
}; 