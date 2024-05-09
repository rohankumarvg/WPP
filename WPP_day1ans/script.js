function updateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours} ${ampm} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  
    const currentDayElement = document.getElementById('currentDay');
    const currentTimeElement = document.getElementById('currentTime');
    currentDayElement.textContent = `Today is : ${dayName}.`;
    currentTimeElement.textContent = `Current time is : ${formattedTime}`;
  }
  
  updateTime();
  setInterval(updateTime, 1000);