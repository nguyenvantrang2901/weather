function showDateTime() {
    var myDate = document.getElementById("myDate");
    var myTime = document.getElementById("myTime");
  
    var date = new Date();
    var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  
    sec = +sec < 10 ? '0'+sec : sec
    min = +min < 10 ? '0'+min : min
    hour = +hour < 10 ? '0'+hour : hour
  
    var time = hour + ":" + min + ":" + sec;
    myDate.innerText = `${today}`;
    myTime.innerText = `${time}`;
  }
  setInterval(showDateTime, 1000);
  