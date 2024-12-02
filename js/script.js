const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

function checkAge() {
  var inputYear = parseInt(document.querySelector(".year").value.trim());
  var inputMonth = parseInt(document.querySelector(".month").value.trim());
  var inputDay = parseInt(document.querySelector(".day").value.trim());

  if (
    isNaN(inputYear) ||
    isNaN(inputMonth) ||
    isNaN(inputDay) ||
    inputYear > currentYear ||
    inputMonth < 1 ||
    inputMonth > 12 ||
    inputDay < 1 ||
    inputDay > 31
  ) {
    alert("Please enter a valid date");
    return;
  }

  const inputDate = new Date(inputYear, inputMonth - 1, inputDay);
  if (inputDate > date) {
    alert("The date of birth cannot be in the future");
    return;
  }

  var yearValue = currentYear - inputYear;
  var monthValue = currentMonth - inputMonth;
  var dayValue = currentDay - inputDay;

  if (dayValue < 0) {
    monthValue--;
    const previousMonthDate = new Date(currentYear, currentMonth - 1, 0);
    dayValue += previousMonthDate.getDate();
  }

  if (monthValue < 0) {
    yearValue--;
    monthValue += 12;
  }

  document.querySelector(
    ".result"
  ).innerHTML = `the age: ${yearValue} year , ${monthValue} month , ${dayValue} day`;
}

document.querySelector(".calc").addEventListener("click", checkAge);
