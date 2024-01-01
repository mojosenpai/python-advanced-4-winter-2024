// let x = 5

// console.log(x)

// let y = 'hello world!'

// let name = 'Ali'
// let age = 30

// console.log(`My name is ${name} and I'm ${age} years old`)

// if(age < 15) {
//     console.log('Cannot get a license')
// }
// else if(age < 18 && age >= 15) {
//     console.log('Only with a guardian')
// }
// else {
//     console.log('Can get a license')
// }

// // let i = 1

// // while (i <= 100) {
// //     console.log(i)
// //     i++
// // }

// for(let i = 1; i <= 100; i++) {
//     console.log(i)
// }

// let arr = [2, 3, 5, 7]
// for(let i of arr) {
//     console.log(i)
// }

// function is_prime(x = 10) {
//     for(let i = 2; i < x; i++) {
//         if(x % i == 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(is_prime(5))
// console.log(is_prime(8))

// let is_prime_arrow = (x) => {
//     for(let i = 2; i < x; i++) {
//         if(x % i == 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(is_prime_arrow(5))
// console.log(is_prime_arrow(8))

// let samples = [1, 5, 324, 7547653, 2]
// samples.forEach(i => console.log(i * 2))

// let map_result = samples.map(i => i % 3)
// console.log(map_result)

// let filter_result = samples.filter(i => i % 2 == 1)
// console.log(filter_result)

// class Cat {
//     constructor(name, color) {
//         this.name = name
//         this.color = color
//     }

//     purr() {
//         console.log(`purr from ${this.name}`)
//     }
// }

// let jack = new Cat('Jack', 'white')
// jack.purr()

let x = document.getElementById('first-paragraph')
let y = document.getElementsByClassName('intro')
let z = document.getElementsByTagName('p')

console.log(x)
console.log(y)
console.log(z)

x.addEventListener('mouseover', (e) => {
    x.style='color:red;'
})