let hours = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let days = document.getElementById('date');


function updatedTime(){
    let date = new Date();
    let current_hour = date.getHours().toString().padStart(2,'0');
    let cureent_min = date.getMinutes().toString().padStart(2,'0');
    let current_seconds = date.getSeconds().toString().padStart(2,'0');

    let options = {day: 'numeric', weekday: 'long', year: 'numeric', month: 'long',  };
    let fullDate = date.toLocaleDateString('en-US', options);

    console.log(current_hour);
    console.log(cureent_min);
    console.log(current_seconds);
    hours.textContent = `${current_hour}`;
    minutes.textContent = `${cureent_min}`;
    seconds.textContent = `${current_seconds}`;
    days.textContent = `${fullDate}`;

}






setInterval(updatedTime,100);