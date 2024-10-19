export function translateTransferNote(num) {
  switch (num) {
    case 0:
      return '0 пересадок';
    case 1:
      return '1 аересадка';
    case 2:
      return '2 пересадки';
    case 3:
      return '3 пересадки';
  }
}

export function flightTime(startTime, flightTime) {
  console.log('startTime', startTime);
  console.log('flightTime', flightTime);
  const start = new Date(startTime);
  start.setMinutes(start.getMinutes() + flightTime);
  console.log('Время прибытия', start);
  return start;
}

export function translateMinToMill(min) {
  return min * 60000;
}
