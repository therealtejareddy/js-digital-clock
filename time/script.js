const head = document.querySelector('.head1');
const type = document.querySelector('.type');
setInterval(() => {
    let session = "AM";
    let timeNow = new Date();
    hoursNow = timeNow.getHours()<10 ? '0'+timeNow.getHours(): timeNow.getHours();
    minutesNow = timeNow.getMinutes()<10 ? '0'+timeNow.getMinutes(): timeNow.getMinutes();
    secondsNow = timeNow.getSeconds()<10 ? '0'+timeNow.getSeconds(): timeNow.getSeconds();
    if(hoursNow == 0) hoursNow = 12;
    if(hoursNow > 11) {
        hoursNow = hoursNow - 12;
        hoursNow = hoursNow==0 ? 12: hoursNow;
        session = "PM";
    }
    hoursNow = hoursNow<10 ? '0'+hoursNow : hoursNow;
    head.textContent = `${hoursNow} : ${minutesNow} : ${secondsNow}`;
    type.textContent = session;
}, 1000);