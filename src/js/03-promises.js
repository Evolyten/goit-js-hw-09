import Notiflix from 'notiflix';
  

const formEl = document.querySelector('.form')


const refs = {

  firsDelayEl: formEl.querySelector('[name="delay"]'),
  stepDelayEl:formEl.querySelector('[name="step"]'),
  amountEl: formEl.querySelector('[name="amount"]'),
  submitBtn: formEl.querySelector('button')
  
}
let obj = {}
formEl.addEventListener('input', userData)
function userData(e) {
   let name = e.target.name
    obj[name]= Number(e.target.value)
    console.log(e.target.name) 
}
let time = null;



refs.submitBtn.addEventListener('click', (event) => {
  if (obj.delay && obj.step && obj.amount) { starTimer(event) } else {
    Notiflix.Notify.failure(`❌ Fill all fields`);
    
  } 
    
})


function starTimer(event) {
  event.preventDefault()
  obj.counter = 0
  obj.delayTime = (obj.delay + obj.step * obj.counter)//для записи первого значения в вреиени в промис

  time = setTimeout(timerUp, obj.delay)
}


function timerUp() {
  if (obj.counter >= obj.amount) {

  } else {
    obj.counter += 1
    promiseCall(obj.counter, obj.delayTime)

    obj.delayTime = (obj.delay + obj.step * obj.counter)
    console.log(obj.delayTime)

    console.log(obj)
    time=setTimeout(timerUp, obj.delayTime)
  }

}

function createPromise(positions, delays) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject)=>{
    if (shouldResolve){
       resolve({position:positions, delay:delays})
    } else (
      reject({position:positions, delay:delays})
    )
   
  })
}


function promiseCall(counter, timeOut) {
  createPromise(counter,timeOut).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}



