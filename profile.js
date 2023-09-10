var dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

var currentDate = new Date();

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var currentDayIndex = currentDate.getDay();

var currentDayOfWeek = daysOfWeek[currentDayIndex];

dayOfWeekElement.textContent = currentDayOfWeek;


function updateUTCTime() {
    var currentUTCTimeInMilliseconds = Date.now();

    // Display the current UTC time in milliseconds
    document.getElementById("utcTimeDisplay").textContent = currentUTCTimeInMilliseconds;
  }

  updateUTCTime();

  setInterval(updateUTCTime, 1000);

