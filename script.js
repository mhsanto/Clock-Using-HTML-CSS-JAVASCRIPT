const hour = document.querySelector('[data-hour-hand]');
const second = document.querySelector('[data-second-hand]');
const minute = document.querySelector('[data-minute-hand]');
setInterval(setClock,1000);
/**
 * The function sets the clock by getting the current date, then getting the seconds, minutes, and
 * hours, and then dividing them by 60, 60, and 12, respectively, to get the ratios of the clock hands.
 */
function setClock() {
    const date = new Date()
    const secondsRatio = date.getSeconds() / 60;
    const minuteRatio = (secondsRatio + date.getMinutes()) / 60;
    const hourRatio = (minuteRatio + date.getHours()) / 12;

    setRotation(hour,hourRatio)
    setRotation(second,secondsRatio)
    setRotation(minute,minuteRatio)
}
function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation' , rotationRatio * 360);
}
setClock();