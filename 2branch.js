// 5 Приоритет операторов
// const fullAge = 27
// const birthYear = 1994
// const currentYear = 2022

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 26 >= 27 => true
// console.log(isFullAge)

// 6 Условные опрераторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// } else {
//   console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//   console.log('Все готово!')
// } else {
//   console.log('Все не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика


// 8 Функции

// function calculateAge(year) {
//   return 2022 - year
// }
//
// // console.log(calculateAge(1994))
// // console.log(calculateAge(2012))
// // console.log(calculateAge(1999))
//
// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//
//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//     console.log('Вообще-то это уже будущее!')
//   }
//
// }
//
// logInfoAbout('Виталий', 1994)
// logInfoAbout('Елена', 1995)
// logInfoAbout('Елена', 2022)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
//
// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Объекты
// const person = {
//     firstName: 'Vitalii',
//     lastName: 'Marchuk',
//     year: 1994,
//     languages: ['Ru', 'En', 'Ua'],
//     hasWife: false,
//     greet: function() {
//       console.log('greet from person')
//     }
//   }
  
//   console.log(person.firstName)
//   console.log(person['lastName'])
//   const key = 'year'
//   console.log(person[key])
//   person.hasWife = true
//   person.isProgrammer = true
//   console.log(person)
  
//   person.greet()

// 1 Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) // 0.6
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n)
// console.log(-90071992547409919999999n)
// console.log(90071992547409919999999.23231n) // error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // 2n

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(42, 12, 23, 11, 422))
// console.log(Math.min(42, 12, 23, 11, 422))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.4))
// console.log(Math.trunc(4.9))
// console.log(Math.random())

// 4 Example
// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
  
//   console.log(getRandomBetween(10, 42))

// const name = 'Виталий'
// const age = 27
//
// function getAge() {
//   return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`
// const output = `
//   <div>This is div</div>
//   <p>this is o</p>
// `

// console.log(output)

// const name = 'Виталий'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('!'))
// console.log(name.toLowerCase().startsWith('Виталик'))
// console.log(name.startsWith('Виталик'))
// console.log(name.endsWith('ен!'))
// console.log(name.repeat(3))
// const string = '     password      '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

// function logPerson(s, name, age) {
//     if (age < 0) {
//       age = 'Еще не родился'
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
//   }
  
//   const personName = 'Виталий'
//   const personName2 = 'Максим'
//   const personAge = 27
//   const personAge2 = -10
  
//   const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
//   const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
  
//   console.log(output)
//   console.log(output2)
//Функции
// Function Declaration
// function greet(name) {
//   console.log('Привет - ', name)
// }

// Function Expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval) // clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// 3 Стрелочные функции
function greet() {
  console.log('Привет - ')
}

const arrow = (name, age) => {
  console.log('Привет - ', name, age)
}

const arrow2 = name => console.log('Привет - ', name)

// arrow2('Vitalii')

const pow2 = num => num ** 2

// console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41, 4))
// console.log(sum())

function sumAll(...all) {
  let result = 0
  for (let num of all) {
    result += num
  }
  return result
}

const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 Замыкания
function createMember(name) {
  return function(lastName) {
    console.log(name + lastName)
  }
}

const logWithLastName = createMember('Vitalii')
console.log(logWithLastName('Marchuk'))