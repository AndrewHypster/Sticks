// Берем HTML об'єкти
const sticks = document.querySelector('.sticks')
const take = document.querySelector('.take')
const restart = document.querySelector('.restart')
const person = document.querySelector('#person').querySelector('h1') // скільки забрала людина
const computer = document.querySelector('#computer') // скіьки забрав компютер

// Початкова кількість патичок
let sticksNumb = 20

paint()

restart.onclick = () => {
  sticksNumb = 20
  person.innerText = 0
  computer.innerText = 0
  paint()
}

take.onclick = e => { // віднімає патички та малює
  if (e.target.localName !== 'div') {
    sticksNumb -= +e.target.innerText
    paint()
    take.classList.add('stop-take')
    person.innerHTML = +person.innerHTML + +e.target.innerText // додаємо рахунок

    setTimeout(() => {
      compGo(+e.target.innerText)
      take.classList.remove('stop-take')
    }, 1000)
  }
}

let firstSmall = true
function compGo (oponent) {
  if (firstSmall & oponent !== 3 & sticksNumb >= 5) {
    sticksNumb -= 3 - oponent
    computer.innerHTML = +computer.innerHTML + (3 - oponent) // додаємо рахунок
    firstSmall = false
  } else if (sticksNumb >= 5) {
    sticksNumb -= 4 - oponent
    computer.innerHTML = +computer.innerHTML + (4 - oponent) // додаємо рахунок
  } else {
    sticksNumb -= -(1 - sticksNumb)
    computer.innerHTML = +computer.innerHTML + (-(1 - sticksNumb)) // додаємо рахунок
  }
  paint()
}

// Функція малює патички
function paint () {
  sticks.innerHTML = ''
  for(i=0; i<sticksNumb; i++)
    sticks.innerHTML += `<div><div class="stick"></div><p>${i+1}</p></div>`
}
