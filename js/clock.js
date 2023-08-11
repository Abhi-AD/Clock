setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);


//live time
function updateTime() {
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const seconds = now.getSeconds();
     
     const timeString = `${hours}:${minutes}:${seconds}`;
     document.getElementById("time").textContent = timeString;
 }

 // Update the time every second
 setInterval(updateTime, 1000);

 // Initial call to set the time immediately
 updateTime();