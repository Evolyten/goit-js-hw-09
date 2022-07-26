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

let time;
refs.submitBtn.addEventListener('click', (event) => {
  event.preventDefault()
  obj.counter = 0
  obj.delayTime = 0
  obj.currentTimeout=0
  time=setTimeout(timerUp,obj.delay)
})


function timerUp() {
  if (obj.counter >= obj.amount) {
    clearTimeout(time)  
    obj.amount=0
  } else {
    obj.delayTime=obj.delay+ obj.step*obj.counter
    obj.counter += 1
    obj.currentTimeout=obj.delay+ obj.step*obj.counter

    promiseCall(obj.counter, obj.delayTime)
  }
  time=setTimeout(timerUp,obj.currentTimeout)
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



