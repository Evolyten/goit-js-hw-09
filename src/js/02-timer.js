import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        validData(selectedDates)
  },
};


function validData(data) {
     if (data[0].getTime() <= timer.date) {
            refs.startBtnEl.setAttribute('disabled', 0)
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            refs.startBtnEl.removeAttribute('disabled')
            timer.currentTime = data[0].getTime() 
      } 
}



const refs = {
    calendar: document.querySelector("#datetime-picker"),
    timerWrap: document.querySelector(".timer"),
    daysValue: document.querySelector("[data-days]"),
    hoursValue: document.querySelector("[data-hours]"),
    minsValue: document.querySelector("[data-minutes]"),
    secValue: document.querySelector("[data-seconds]"),
    startBtnEl:document.querySelector('[data-start]')

}
const timer = {
    date: Date.now(),
    intervalTimer: null,
    currentTime: 0,
    convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = this.addLeadingZero(Math.floor(ms / day));
  const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
    },

addLeadingZero(value) {
    return String(value).padStart(2,'0')
    }

}


refs.startBtnEl.addEventListener('click',intervalCounter)

function intervalCounter() {
    timer.intervalTimer = setInterval(() => {
        let dateNow = Date.now()
        let deltaTime = timer.currentTime- dateNow
        let { days, hours, minutes, seconds } = timer.convertMs(deltaTime)
        refs.daysValue.textContent =  days
        refs.hoursValue.textContent = hours
        refs.minsValue.textContent = minutes
        refs.secValue.textContent = seconds
        console.log(deltaTime)
        if (deltaTime < 1000) {
            Notiflix.Notify.success('Please choose a new date in the future')
            clearInterval(timer.intervalTimer)
            refs.daysValue.textContent =  '00'
            refs.hoursValue.textContent = '00'
            refs.minsValue.textContent = '00'
            refs.secValue.textContent = '00'
            refs.startBtnEl.removeAttribute('disabled')

        }
        
        
    }, 1000)
    refs.startBtnEl.setAttribute('disabled', 0)
    
}

flatpickr(refs.calendar, options)
 
