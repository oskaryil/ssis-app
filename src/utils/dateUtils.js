export function dateObj(d) {
  // date parser ...
  var parts = d.split(/:|\s/),
    date = new Date();
  if (parts.pop().toLowerCase() == 'pm') parts[0] = +parts[0] + 12;
  date.setHours(+parts.shift());
  date.setMinutes(+parts.shift());
  return date;
}
